// import { createContext, ReactNode, useEffect, useReducer } from "react";
// import { Auth0Client, createAuth0Client } from "@auth0/auth0-spa-js";
// // @types
// import {
//   ActionMap,
//   AuthState,
//   AuthUser,
//   Auth0ContextType,
// } from "@/types/authentication";
// // ----------------------------------------------------------------------

// let auth0Client: Auth0Client | Promise<Auth0Client> | null = null;

// const initialState: AuthState = {
//   isAuthenticated: false,
//   isInitialized: false,
//   user: null,
// };

// enum Types {
//   init = "INITIALIZE",
//   login = "LOGIN",
//   logout = "LOGOUT",
// }

// type Auth0AuthPayload = {
//   [Types.init]: {
//     isAuthenticated: boolean;
//     user: AuthUser;
//   };
//   [Types.login]: {
//     user: AuthUser;
//   };
//   [Types.logout]: undefined;
// };

// type Auth0Actions =
//   ActionMap<Auth0AuthPayload>[keyof ActionMap<Auth0AuthPayload>];

// const reducer = (state: AuthState, action: Auth0Actions) => {
//   if (action.type === Types.init) {
//     const { isAuthenticated, user } = action.payload;
//     return {
//       ...state,
//       isAuthenticated,
//       isInitialized: true,
//       user,
//     };
//   }
//   if (action.type === Types.login) {
//     const { user } = action.payload;
//     return { ...state, isAuthenticated: true, user };
//   }
//   if (action.type === Types.logout) {
//     return {
//       ...state,
//       isAuthenticated: false,
//       user: null,
//     };
//   }
//   return state;
// };

// const AuthContext = createContext<Auth0ContextType | null>(null);

// function AuthProvider({ children }: { children: ReactNode }) {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   useEffect(() => {
//     const initialize = async () => {
//       try {
//         auth0Client = new Auth0Client({
//           clientId: "",
//           domain: "",
//         });

//         await auth0Client.checkSession();

//         const isAuthenticated = await auth0Client.isAuthenticated();

//         if (isAuthenticated) {
//           const user = await auth0Client.getUser();

//           dispatch({
//             type: Types.init,
//             payload: { isAuthenticated, user: (user as AuthUser) || null },
//           });
//         } else {
//           dispatch({
//             type: Types.init,
//             payload: { isAuthenticated, user: null },
//           });
//         }
//       } catch (err) {
//         console.error(err);
//         dispatch({
//           type: Types.init,
//           payload: { isAuthenticated: false, user: null },
//         });
//       }
//     };

//     initialize();
//   }, []);

//   const login = async () => {
//     await auth0Client?.loginWithPopup();
//     const isAuthenticated = await auth0Client?.isAuthenticated();

//     if (isAuthenticated) {
//       const user = await auth0Client?.getUser();
//       dispatch({
//         type: Types.login,
//         payload: { user: (user as AuthUser) || null },
//       });
//     }
//   };

//   const logout = () => {
//     auth0Client?.;
//     dispatch({ type: Types.logout });
//   };

//   const resetPassword = (email: string) => {};

//   const updateProfile = () => {};

//   return (
//     <AuthContext.Provider
//       value={{
//         ...state,
//         method: "auth0",
//         user: {
//           name: "username",
//           id: state?.user?.sub,
//           photoURL: state?.user?.picture,
//           email: state?.user?.email,
//           displayName: "Jaydon Frankie",
//           role: "admin",
//         },
//         login,
//         logout,
//         resetPassword,
//         updateProfile,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export { AuthContext, AuthProvider };
