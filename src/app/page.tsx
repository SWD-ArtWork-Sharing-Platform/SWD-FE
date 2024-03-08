import { Metadata } from "next";
import ShopLayout from "@/components/ShopLayout/ShopLayout";
import Carousel from "@/components/HomePage/Carousel";
import TrendingProduct from "@/components/HomePage/TrendingProduct";
import TopCreator from "@/components/HomePage/TopCreator";
import HomeCategories from "@/components/HomePage/HomeCategories";

export const metadata: Metadata = {
  title: "Artvista",
  description: "This is Home Page for Artvista",
};

export default function Home() {
  return (
    <>
      <ShopLayout>
        <div>
          <Carousel />
          <TrendingProduct />
          <TopCreator />
          <HomeCategories />
        </div>
      </ShopLayout>
    </>
  );
}
