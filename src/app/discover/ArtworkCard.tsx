"use client";
import { Watermark } from "antd";
import type { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useMemo, type CSSProperties, useEffect, useState } from "react";

export type Cards1Type = {
  maskGroup?: Promise<string> | string;
  logoFrame?: string;
  price?: string;
  artworkName?: string;
  creatorkName?: string;
  translateYNumber?: number;
};

const ArtworkCard: NextPage<Cards1Type> = ({
  maskGroup,
  logoFrame,
  price,
  artworkName,
  creatorkName,
  translateYNumber,
}) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const scalingFactor = isHovered ? 1.2 : 1;

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translateY(
          ${translateYNumber == 1 ? "1.5rem" : ""}
          ${translateYNumber == 2 ? "0rem" : ""}
          ${translateYNumber == 3 ? "2.5rem" : ""}
          ${translateYNumber == 4 ? "1rem" : ""}
        )`,
      }}
      onClick={() => {
        router.push("/discover/1");
      }}
      className="relative mx-1 mb-3 w-[21rem] cursor-pointer overflow-hidden rounded-b-2xl rounded-t-lg"
    >
      <Watermark
        content={"Artvista"}
        style={{
          fontWeight: "bold",
        }}
      >
        <div
          style={{
            backgroundImage: `url(${maskGroup})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            transform: `scale(${scalingFactor})`,
            transition: "transform 0.5s ease",
          }}
          className="text-bg font-barlow relative box-border flex h-full min-h-[32rem] w-full max-w-full cursor-pointer flex-row items-end justify-center overflow-hidden px-0 py-[0rem] pl-[0rem] pr-[0.063rem] text-left text-[1.319rem]"
        ></div>
      </Watermark>
      <div
        style={{
          bottom: "-5px",
        }}
        className=" bg-gray-200 absolute z-[1] mx-0 box-border flex w-full max-w-full flex-col items-center justify-start gap-[0.1rem_0rem] pb-[1.3rem] pl-[1.2rem] pr-[1.2rem] pt-[0.8rem] [backdrop-filter:blur(176.87px)]"
      >
        <div className="box-border flex w-full max-w-full flex-row items-start justify-start self-stretch">
          <div className=" z-[2] box-border flex max-w-full flex-1 flex-row items-center justify-center py-[0rem] pl-[0.188rem] pr-[0.25rem]">
            <b className="mq450:text-[1.063rem] mq450:leading-[2rem] relative inline-block max-w-full flex-1 leading-[2.475rem] tracking-[0.02em]">
              {artworkName}
            </b>
          </div>
        </div>
        <div className=" z-[2] flex flex-col items-start justify-center self-stretch py-[0rem] pl-[0rem] pr-[0.063rem] text-[0.988rem] text-whitesmoke">
          <div className="mq450:flex-wrap flex flex-row items-center justify-between gap-[1.25rem] self-stretch">
            <div className="flex h-[3.794rem] flex-row items-center justify-center gap-[0rem_0.825rem]">
              <img
                className="relative h-[2.638rem] w-[2.638rem] rounded-[50%] object-cover"
                loading="lazy"
                alt=""
                src={logoFrame}
              />
              <div className="flex flex-1 flex-col items-start justify-center gap-[0.33rem_0rem] self-stretch">
                <div className="relative text-[0.95rem] font-medium">
                  Creator
                </div>
                <div className="text-bg relative text-[0.95rem] font-medium">
                  Tom Edison
                </div>
              </div>
            </div>
            <div className="flex h-[3.75rem] flex-col items-end justify-center gap-[0.33rem_0rem] text-right">
              <div className="relative text-[0.95rem] font-medium">Amount</div>
              <b className="text-bg mq450:text-[1.188rem] relative text-left text-[0.95rem]">
                {price} VND
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkCard;
