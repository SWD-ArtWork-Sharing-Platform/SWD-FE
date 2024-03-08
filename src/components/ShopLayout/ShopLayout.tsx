"use client";
import React, { useState, ReactNode } from "react";
import HeaderShop from "../HeaderShop";
import FooterShop from "../FooterShop";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="bg-neutral-dark mq450:gap-[74px_0px] mq750:gap-[74px_0px] relative flex w-full flex-col items-center justify-start gap-[74px_0px] overflow-hidden tracking-[normal]">
        <HeaderShop />
        <main>
          <div>{children}</div>
        </main>
        <FooterShop />
      </div>
    </>
  );
}
