"use client";
import { AppProvider } from "@/contexts/AppContext";
import ShopLayout from "@/components/ShopLayout/ShopLayout";
import Discover from "./Discover";
import AOSWrapper from "@/components/AOSWrapper/AOSWrapper";

const DiscoverProvider = (props: {}) => {
  return (
    <>
      <AppProvider>
        <AOSWrapper>
          <ShopLayout>
            <section>
              <Discover />
            </section>
          </ShopLayout>
        </AOSWrapper>
      </AppProvider>
    </>
  );
};

export default DiscoverProvider;
