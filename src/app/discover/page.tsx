import ShopLayout from "@/components/ShopLayout/ShopLayout";
import { Metadata } from "next";
import Discover from "./Discover";

export const metadata: Metadata = {
  title: "Artvista",
  description: "This is Discover Page for Artvista",
};

export default function DiscoverPage() {
  return (
    <>
      <ShopLayout>
        <section>
          <Discover />
        </section>
      </ShopLayout>
    </>
  );
}
