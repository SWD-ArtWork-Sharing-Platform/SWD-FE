"use client";
import axios from "axios";
import ArtworkCard from "./ArtworkCard";
import { useEffect, useState } from "react";

const Discover = (props: {}) => {
  return (
    <div className="text-bg font-barlow mq800:gap-[2.688rem_0rem] mq450:gap-[1.375rem_0rem] flex max-w-full flex-1 flex-col items-end justify-start gap-[5.438rem_0rem] text-left text-[1.5rem]">
      <div className="flex max-w-full flex-col items-end justify-start gap-[0.625rem_0rem] self-stretch">
        <div className="mq1150:flex-wrap flex max-w-full flex-row items-start justify-start gap-[0rem_0.875rem] self-stretch px-25">
          <div className="rounded-10xs border-gray-600 box-border flex min-w-[10.5rem] max-w-full flex-1 flex-row items-start justify-start gap-[0rem_1.563rem] overflow-hidden border-[1px] border-solid px-[1.188rem] pb-[0.688rem] pt-[0.75rem]">
            <img
              className="relative h-[1.5rem] min-h-[1.5rem] w-[1.5rem] shrink-0 cursor-pointer overflow-hidden"
              alt=""
              src="/images/shop/DiscoverPage/search.svg"
            />
            <input
              className="font-barlow text-gray-500 box-border flex h-[1.344rem] w-full flex-col items-start justify-start bg-[transparent] px-[0rem] pb-[0rem] pt-[0.156rem] text-[0.75rem] text-[0.875rem] leading-[160.5%] text-neutral-white [border:none] [outline:none]"
              placeholder="Search by artwork description"
              type="text"
            />
          </div>

          <button className="rounded-10xs border-gray-600 relative flex cursor-pointer flex-row items-start justify-start gap-[0rem_0.625rem] overflow-hidden border-[1px] border-solid bg-[transparent] px-[1.25rem] py-[0.469rem]">
            <div className="flex flex-col items-start justify-start px-[0rem] pb-[0rem] pt-[0.313rem]">
              <div className="font-barlow relative text-left text-[0.875rem] leading-[160.5%] text-neutral-white">
                Price: All
              </div>
            </div>
            <img
              className="relative h-[2rem] w-[2rem] shrink-0 overflow-hidden"
              alt=""
              src="/images/shop/DiscoverPage/gridiconsdropdown.svg"
            />
          </button>

          <button className="rounded-10xs border-gray-600 flex cursor-pointer flex-row items-start justify-start gap-[0rem_0.625rem] overflow-hidden border-[1px] border-solid bg-[transparent] px-[1.25rem] py-[0.469rem]">
            <div className="flex flex-col items-start justify-start px-[0rem] pb-[0rem] pt-[0.313rem]">
              <div className="font-barlow relative text-left text-[0.875rem] leading-[160.5%] text-neutral-white">
                Category: All
              </div>
            </div>
            <img
              className="relative h-[2rem] w-[2rem] shrink-0 overflow-hidden"
              alt=""
              src="/images/shop/DiscoverPage/gridiconsdropdown.svg"
            />
          </button>
        </div>
        <div className="mq800:gap-[0rem_2.25rem] mq450:gap-[0rem_1.125rem] flex max-w-full flex-row flex-wrap items-start justify-start gap-[0rem_4.563rem] self-stretch text-center text-[1.25rem]">
          <div className="mt-5 flex min-h-[83.688rem] max-w-full flex-row flex-wrap items-start justify-center gap-[1rem_1rem] self-stretch text-whitesmoke">
            <ArtworkCard
              maskGroup="https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg"
              artworkName="Dreamy Virgin"
              logoFrame="/images/shop/DiscoverPage/ellipse-2@2x.png"
              price="45.50"
              translateYNumber={1}
            />
            <ArtworkCard
              maskGroup="https://mpost.io/wp-content/uploads/image-74-7.jpg"
              artworkName="Red devil"
              logoFrame="/images/shop/DiscoverPage/ellipse-2@2x.png"
              price="45.50"
              translateYNumber={2}
            />
            <ArtworkCard
              maskGroup="/images/shop/DiscoverPage/mask-group-7@2x.png"
              artworkName="Emo Girl"
              logoFrame="/images/shop/DiscoverPage/ellipse-2@2x.png"
              price="45.50"
              translateYNumber={3}
            />
            <ArtworkCard
              maskGroup="/images/shop/DiscoverPage/mask-group-5@2x.png"
              artworkName="Practice I"
              logoFrame="/images/shop/DiscoverPage/ellipse-2@2x.png"
              price="FREE"
              translateYNumber={4}
            />
            <ArtworkCard
              maskGroup="/images/shop/DiscoverPage/mask-group-4@2x.png"
              artworkName="Squid Lady"
              logoFrame="/images/shop/DiscoverPage/ellipse-2@2x.png"
              price="45.50"
              translateYNumber={1}
            />
            <ArtworkCard
              maskGroup="/images/shop/DiscoverPage/mask-group-3@2x.png"
              artworkName="Practice II"
              logoFrame="/images/shop/DiscoverPage/ellipse-2@2x.png"
              price="FREE"
              translateYNumber={2}
            />
            <ArtworkCard
              maskGroup="/images/shop/DiscoverPage/mask-group@2x.png"
              artworkName="Da Viper"
              logoFrame="/images/shop/DiscoverPage/ellipse-2@2x.png"
              price="20.00"
              translateYNumber={3}
            />
            <ArtworkCard
              maskGroup="/images/shop/DiscoverPage/mask-group-2@2x.png"
              artworkName="snow3"
              logoFrame="/images/shop/DiscoverPage/ellipse-2@2x.png"
              price="45.50"
              translateYNumber={4}
            />
            <ArtworkCard
              maskGroup="/images/shop/DiscoverPage/mask-group-8@2x.png"
              artworkName="Yasha Nydoorin"
              logoFrame="/images/shop/DiscoverPage/ellipse-2@2x.png"
              price="45.50"
              translateYNumber={1}
            />
          </div>
        </div>
      </div>
      <div
        style={{ transform: "translateY(-15px)" }}
        className="box-border flex w-full max-w-full justify-center px-[11.25rem] py-[0rem]"
      >
        <button className="rounded-10xs hover:bg-blueviolet-200 hover:border-blueviolet-100 cursor-pointer overflow-hidden border-[1px] border-solid border-primary-colour bg-[transparent] px-[2.625rem] py-[0.656rem] hover:box-border hover:border-[1px] hover:border-solid">
          <div className="font-barlow relative text-left text-[1rem] font-medium leading-[160.5%] text-primary-colour">
            Load more
          </div>
        </button>
      </div>
    </div>
  );
};

export default Discover;
