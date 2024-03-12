import { createContext, ReactNode, useEffect, useReducer } from "react";
// utils
import axiosInstances from "@/utils/axios";
import { isValidToken, setSession } from "@/utils/jwt";
import { getUserInfo, setUserInfo } from "@/utils/utils";
import sweetAlert from "@/utils/sweetAlert";
// @types
import {
  ActionMap,
  AuthState,
  AuthUser,
  JWTContextType,
} from "@/types/authentication";
import { Role } from "@/utils/accountRole";
import { useRouter } from "next/navigation";
import useAppContext from "@/hooks/useAppContext";

// ----------------------------------------------------------------------

enum Types {
  Initial = "INITIALIZE",
  Login = "LOGIN",
  Logout = "LOGOUT",
  Register = "REGISTER",
  ChangeUser = "CHANGE_USER",
}

type JWTAuthPayload = {
  [Types.Initial]: {
    isAuthenticated: boolean;
    user: AuthUser;
  };
  [Types.Login]: {
    user: AuthUser;
  };
  [Types.Logout]: undefined;
  [Types.Register]: {
    user: AuthUser;
  };
  [Types.ChangeUser]: {
    user: AuthUser;
  };
};

export type JWTActions =
  ActionMap<JWTAuthPayload>[keyof ActionMap<JWTAuthPayload>];

const initialState: AuthState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const JWTReducer = (state: AuthState, action: JWTActions) => {
  switch (action.type) {
    case "INITIALIZE":
      return {
        isAuthenticated: action.payload.isAuthenticated,
        isInitialized: true,
        user: action.payload.user,
      };
    case "LOGIN":
      setUserInfo(action.payload.user);
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };

    case "REGISTER":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };

    case "CHANGE_USER":
      setUserInfo(action.payload.user);
      return {
        ...state,
        user: action.payload.user,
      };
    default:
      return state;
  }
};

const AuthContext = createContext<JWTContextType | null>(null);

function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [state, dispatch] = useReducer(JWTReducer, initialState);
  const { enableLoading, disableLoading } = useAppContext();

  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = window.localStorage.getItem("accessToken");
        const userRaw = getUserInfo();
        if (accessToken && isValidToken(accessToken) && userRaw) {
          setSession(accessToken);

          const user = JSON.parse(userRaw);

          dispatch({
            type: Types.Initial,
            payload: {
              isAuthenticated: true,
              user,
            },
          });
        } else {
          dispatch({
            type: Types.Initial,
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: Types.Initial,
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    };

    initialize();
  }, []);

  const changeUser = async (user: AuthUser) => {
    setUserInfo(user);
    dispatch({
      type: Types.Login,
      payload: {
        user,
      },
    });
  };

  const login = async (username: string, password: string) => {
    try {
      enableLoading();
      const response = await axiosInstances.auth.post("/auth/login", {
        username,
        password,
      });

      if (
        response.data.isSuccess &&
        response.data.result != null &&
        response.data.result.user != null
      ) {
        const { id, name, email, phoneNumber, role } =
          response.data.result.user;

        const user = {
          id: id,
          name: name,
          email: email,
          phoneNumber: phoneNumber,
          role: role,
        };

        const accessToken = response.data.result.token;

        setSession(accessToken);
        setUserInfo(user);

        dispatch({
          type: Types.Login,
          payload: {
            user,
          },
        });

        sweetAlert.alertSuccess("Sign In Successfully", "", 1200, 20);

        if (user.role && user.role[0].toUpperCase() == Role.ADMIN) {
          router.push("/admin");
        } else if (user.role && user.role[0].toUpperCase() == Role.MODERATOR) {
          // push tới page của moderator
          router.push("/");
        } else if (user.role && user.role[0].toUpperCase() == Role.CUSTOMER) {
          router.push("/");
        } else if (user.role && user.role[0].toUpperCase() == Role.CREATOR) {
          router.push("/");
        }
      } else {
        disableLoading();
        sweetAlert.alertFailed(
          `Login failed.`,
          ` Please check your email and password and try again.`,
          1200,
          20,
        );
      }
    } catch (error) {
      console.log(error);
      disableLoading();

      sweetAlert.alertFailed(
        `Login failed.`,
        ` Please check your email and password and try again.`,
        4000,
        22,
      );
      router.push("/signin");
    }
  };

  const register = async (
    email: string,
    password: string,
    name: string,
    phoneNumber: string,
    role: string,
    address: string,
  ) => {
    enableLoading();
    const response = await axiosInstances.auth.post("/auth/register", {
      email,
      password,
      name,
      phoneNumber,
      role,
      address,
    });

    if (
      response.data.isSuccess &&
      response.data.result.succeeded &&
      response.data.result.succeeded
    ) {
      localStorage.setItem(
        "REGISTER_CONFIRMING_USER",
        JSON.stringify({
          email,
          password,
        }),
      );
      disableLoading();
      router.push("/signup/info");
    }

    if (
      response.data.isSuccess &&
      !response.data.result.succeeded &&
      response.data.result.errors[0] != null
    ) {
      disableLoading();
      localStorage.setItem(
        "REGISTER_CONFIRMING_ERROR",
        response.data.result.errors[0].description,
      );
    }
  };

  const assignRole = async (
    email: string,
    password: string,
    name: string,
    phoneNumber: string,
    role: string,
    address: string,
  ) => {
    const response = await axiosInstances.auth.post("/auth/AssignRole", {
      email,
      password,
      name,
      phoneNumber,
      role,
      address,
    });
  };

  const logout = async () => {
    setSession(null);
    setUserInfo({});
    localStorage.removeItem("USER_INFO");
    dispatch({ type: Types.Logout });
    router.push("/");
  };

  const resetPassword = (email: string) => {};

  const updateProfile = () => {};

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: "jwt",
        login,
        logout,
        register,
        resetPassword,
        updateProfile,
        changeUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
