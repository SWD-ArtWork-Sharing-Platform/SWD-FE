"use client";
import { AuthProvider } from "@/contexts/JWTContext";
import SignIn from "./SignIn";

const SignInAuth = (props: {}) => {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>
    </>
  );
};

export default SignInAuth;
