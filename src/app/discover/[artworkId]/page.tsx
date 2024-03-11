import { Metadata } from "next";
import ShopLayout from "@/components/ShopLayout/ShopLayout";
import ArtworkDetail from "./ArtworkDetail";

export const metadata: Metadata = {
  title: "Artvista",
  description: "This is Artwork Detail Page for Artvista",
};

export default function ArtworkDetailPage() {
  return (
    <>
      <ShopLayout>
        <section>
          <ArtworkDetail />
        </section>
      </ShopLayout>
    </>
  );
}
