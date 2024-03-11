import { Metadata } from "next";
import SignUp from "./SignUp";

export const metadata: Metadata = {
  title: "Artvista",
  description: "This is Sign Up Page for Artvista",
};

export default function SignupInfo() {
  return (
    <>
      <SignUp />
    </>
  );
}
