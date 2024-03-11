import { Metadata } from "next";
import SignIn from "./SignIn";

export const metadata: Metadata = {
  title: "Artvista",
  description: "This is Sign In Page for Artvista",
};

export default function SignupInfo() {
  return (
    <>
      <SignIn />
    </>
  );
}
