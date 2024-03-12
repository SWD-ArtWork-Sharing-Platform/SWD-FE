import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import ECommerce from "@/components/Dashboard/E-commerce";

export const metadata: Metadata = {
  title: "Artvista",
  description: "This is Admin Home Page for Artvista",
};

export default function AdminHomePage() {
  return (
    <>
      <DefaultLayout>
        <ECommerce />
      </DefaultLayout>
    </>
  );
}
