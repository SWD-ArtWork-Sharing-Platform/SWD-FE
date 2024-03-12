import { createContext, ReactNode, useEffect, useReducer } from "react";
// utils
import axiosInstances from "@/utils/axios";
import { isValidToken, setSession } from "@/utils/jwt";
import { getUserInfo, setUserInfo } from "@/utils/utils";
// @types
import {
  ActionMap,
  AuthState,
  AuthUser,
  JWTContextType,
} from "@/types/authentication";
import { Role } from "@/utils/accountRole";
import { useRouter } from "next/navigation";

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
  console.log("state", state);

  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = window.localStorage.getItem("accessToken");
        const userRaw = getUserInfo();
        if (accessToken && isValidToken(accessToken) && userRaw) {
          setSession(accessToken);

          const user = JSON.parse(userRaw);
          console.log("hahaa", accessToken, user);

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
    const response = await axiosInstances.auth.post("/auth/login", {
      username,
      password,
    });

    console.log(response);

    if (
      response.data.isSuccess &&
      response.data.result != null &&
      response.data.result.user != null
    ) {
      const { id, name, email, phoneNumber, role } = response.data.result.user;

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

      router.push("/");
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
    const response = await axiosInstances.auth.post("/auth/register", {
      email,
      password,
      name,
      phoneNumber,
      role,
      address,
    });

    console.log(response);

    if (response.data.isSuccess && response.data.result.succeeded) {
      localStorage.setItem("REGISTER_CONFIRMING", "true");
    }

    if (
      response.data.isSuccess &&
      !response.data.result.succeeded &&
      response.data.result.errors[0] != null
    ) {
      localStorage.setItem(
        "REGISTER_CONFIRMING_ERROR",
        response.data.result.errors[0].description,
      );
    }

    setTimeout(() => {
      login(email, password);
    }, 5000);

    setTimeout(() => {
      if (localStorage.getItem("accessToken") != null) {
        login(email, password);
      }
    }, 8000);

    setTimeout(() => {
      if (localStorage.getItem("accessToken") != null) {
        login(email, password);
      }
    }, 10000);

    setTimeout(() => {
      if (localStorage.getItem("accessToken") != null) {
        login(email, password);
      }
    }, 15000);

    // const { accessToken, user } = response.data;
    // window.localStorage.setItem("accessToken", accessToken);
    // dispatch({
    //   type: Types.Register,
    //   payload: {
    //     user,
    //   },
    // });
  };

  const logout = async () => {
    setSession(null);
    setUserInfo({});
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
