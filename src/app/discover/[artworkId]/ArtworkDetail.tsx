"use client";
import { Watermark } from "antd";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const ArtworkDetail = (props: {}) => {
  const params = useParams();
  const artworkId = params.artworkId as string;
  console.log(artworkId);

  return (
    <>
      <div className="font-barlow flex w-full  max-w-full flex-col items-start justify-start text-left text-[1.75rem] text-gray">
        <h3 className="font-inherit mq450:text-[1.375rem] relative m-0 inline-block max-w-full text-inherit font-medium">{`Discover / Category / Artwork Name
 `}</h3>
        <div className="text-bg font-para2-semi-14 mt-[-0.312rem] flex max-w-full flex-col items-end justify-start gap-[0.5rem_0rem] self-stretch text-[0.875rem]">
          <div className="flex flex-row items-start justify-start gap-[0rem_1.375rem]">
            <div className="flex flex-row items-start justify-start gap-[0rem_0.5rem]"></div>
          </div>
          <div className="font-barlow flex max-w-full flex-row items-start justify-start self-stretch text-neutral-white">
            <div className="mq750:flex-wrap flex w-[33.875rem] max-w-full flex-row items-start justify-between gap-[1.25rem]">
              <div className="flex flex-row items-start justify-start gap-[0rem_0.25rem]">
                <div className="relative leading-[1.313rem]">by</div>
                <div className="relative leading-[1.313rem] text-primary-colour">
                  Amelie Breedlove
                </div>
                <div className="relative leading-[1.313rem]">in</div>
                <div className="relative leading-[1.313rem] text-primary-colour">
                  Illustration
                </div>
              </div>
              <div className="font-para2-semi-14 flex flex-row items-start justify-start gap-[0rem_0.313rem] text-[0.75rem]">
                <div className="flex flex-row items-start justify-start overflow-hidden rounded-sm bg-primary-colour py-[0rem] pl-[0.25rem] pr-[0.313rem]">
                  <div className="relative leading-[1.313rem]">5.0</div>
                </div>
                <div className="font-barlow relative text-[1rem] leading-[1.313rem]">
                  based on 10 ratings, 2 reviews
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-neutral-black font-icons-18 mq750:gap-[1.188rem_0rem] mt-8 flex w-[83.813rem] max-w-full flex-col items-start justify-start gap-[2.438rem_0rem] text-center text-[1.125rem]">
        <div className="mq750:gap-[0rem_1.063rem] flex max-w-full flex-row items-start justify-start gap-[0rem_2.188rem] self-stretch lg:flex-wrap">
          <div className="mq750:min-w-full box-border flex min-w-[33.375rem] max-w-full flex-1 flex-col items-start justify-start px-[0rem] pb-[0rem] pt-[0.25rem]">
            <Watermark
              content={"Artvista"}
              style={{
                fontWeight: "bold",
              }}
              className="w-full"
            >
              <div
                style={{
                  backgroundImage: `url('https://mpost.io/wp-content/uploads/image-74-7.jpg')`,
                }}
                className=" Artwork Name
                box-border flex h-[38.813rem] max-w-full flex-row items-start justify-end self-stretch rounded-xl bg-cover bg-[top] bg-no-repeat px-[1.75rem] py-[1.875rem]"
              >
                <div className="z-[1] box-border flex h-[2.688rem] w-[5.438rem] cursor-pointer flex-row items-center justify-center rounded-full border-[1px] border-solid border-dimgray-100 bg-neutral-white py-[0.625rem] pl-[1.125rem] pr-[1.375rem]">
                  <div className="flex flex-col items-start justify-start px-[0rem] pb-[0rem] pt-[0.094rem]">
                    <div className="relative mr-1">♡</div>
                  </div>
                  <b className="font-text-labels-14px-bold relative text-left text-[0.875rem] leading-[1.313rem]">
                    68
                  </b>
                </div>
              </div>
            </Watermark>
          </div>
          <div className="font-barlow mq750:gap-[1.5rem_0rem] mq750:min-w-full flex w-[30.313rem] min-w-[30.313rem] max-w-full flex-col items-start justify-start gap-[3rem_0rem] text-left text-[0.938rem] text-neutral-white lg:flex-1">
            <div className="mq450:pt-[1.25rem] mq450:pb-[1.25rem] mq450:box-border box-border flex max-w-full flex-col items-start justify-start gap-[1.25rem_0rem] self-stretch overflow-hidden rounded-md border-[2px] border-solid border-dimgray-100 px-[1.188rem] pb-[1.313rem] pt-[1.688rem]">
              <div className="mq450:flex-wrap flex flex-row items-start justify-between gap-[1.25rem] self-stretch text-[1.25rem]">
                <div className="flex flex-col items-start justify-start gap-[1.25rem_0rem]">
                  <div className="mq450:text-[1rem] mq450:leading-[1.063rem] relative font-semibold leading-[1.313rem]">
                    Artwork Name
                  </div>
                  {/* <div className="text-gray-500 flex flex-row items-start justify-start gap-[0rem_0.5rem] text-[0.938rem]">
                    <div className="relative font-medium leading-[1.313rem]">{`License: `}</div>
                    <div className="relative font-medium leading-[1.313rem] text-primary-colour">
                      Change
                    </div>
                  </div> */}
                </div>
                <div className="mq450:text-[1rem] mq450:leading-[1.063rem] relative font-semibold leading-[1.313rem] text-primary-colour">
                  45.000 VND{" "}
                  <span className="ml-2 text-grey line-through">
                    100.000 VND
                  </span>
                </div>
              </div>
              <div className="relative inline-block w-[26.5rem] max-w-full font-medium leading-[1.313rem]">
                ✔️ Personal Use ✔️⟹ For personal use and one commercial project
                (up to 2,000 sales or 20,000 views).
              </div>
              <button className="hover:bg-blueviolet-100 flex cursor-pointer flex-row items-start justify-center self-stretch whitespace-nowrap rounded-md bg-primary-colour px-[1.25rem] py-[1rem] [border:none]">
                <div className="font-barlow relative inline-block text-center text-[1.125rem] font-medium leading-[1.5rem] text-neutral-white">
                  Purchase Now
                </div>
              </button>
              <button className="hover:bg-blueviolet-200 hover:border-blueviolet-100 flex cursor-pointer flex-row items-start justify-center self-stretch rounded-md border-[1px] border-solid border-primary-colour bg-[transparent] px-[1.25rem] py-[1rem] hover:box-border hover:border-[1px] hover:border-solid">
                <div className="font-barlow relative inline-block text-center text-[1.125rem] font-medium leading-[1.5rem] text-primary-colour">
                  Add To Wishlist
                </div>
              </button>
            </div>
            <div className="text-bg font-para2-semi-14 flex flex-col items-start justify-start gap-[0.625rem_0rem] self-stretch text-[0.75rem]">
              <div className="relative font-medium leading-[1.125rem]">
                CATEGORY
              </div>
              <div className="flex flex-col items-start justify-start gap-[0.5rem_0rem] self-stretch">
                <div className="mq750:flex-wrap flex flex-row items-start justify-start gap-[0rem_1.125rem] self-stretch">
                  <button className="hover:bg-silver-300 flex cursor-pointer flex-col items-start justify-start rounded-full bg-chip-fill px-[1.25rem] py-[0.75rem] [border:none]">
                    <b className="font-barlow text-bg relative text-left text-[0.75rem] leading-[1.125rem]">
                      Illustrations
                    </b>
                  </button>
                  <button className="hover:bg-silver-300 flex cursor-pointer flex-col items-start justify-start rounded-full bg-chip-fill px-[1.25rem] py-[0.75rem] [border:none]">
                    <b className="font-barlow text-bg relative text-left text-[0.75rem] leading-[1.125rem]">
                      Artwork
                    </b>
                  </button>
                  <button className="hover:bg-silver-300 flex cursor-pointer flex-col items-start justify-start rounded-full bg-chip-fill px-[1.25rem] py-[0.75rem] [border:none]">
                    <b className="font-barlow text-bg relative text-left text-[0.75rem] leading-[1.125rem]">
                      Photoshop
                    </b>
                  </button>
                  <button className="hover:bg-silver-300 flex cursor-pointer flex-col items-start justify-start whitespace-nowrap rounded-full bg-chip-fill px-[0.625rem] py-[0.75rem] [border:none]">
                    <b className="font-barlow text-bg relative text-left text-[0.75rem] leading-[1.125rem]">
                      Graphics and animation
                    </b>
                  </button>

                  <button className="flex cursor-pointer flex-row items-start justify-start bg-[transparent] p-0 [border:none]">
                    <div className="flex flex-col items-start justify-start whitespace-nowrap rounded-full bg-chip-fill px-[1.25rem] py-[0.75rem]">
                      <b className="font-barlow relative text-left text-[0.75rem] leading-[1.125rem] text-grey">
                        See more..
                      </b>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[51.413rem] max-w-full flex-row flex-wrap items-start justify-start gap-[0rem_1.378rem]">
          <img
            className="rounded-5xs relative h-[8.194rem] min-h-[8.188rem] min-w-[8.188rem] max-w-full flex-1 overflow-hidden object-cover"
            loading="lazy"
            alt=""
            src="/frame-162886@2x.png"
          />
          <img
            className="rounded-5xs relative h-[8.194rem] min-h-[8.188rem] min-w-[8.188rem] max-w-full flex-1 overflow-hidden object-cover"
            loading="lazy"
            alt=""
            src="/frame-162885@2x.png"
          />
          <img
            className="rounded-5xs relative h-[8.194rem] min-h-[8.188rem] min-w-[8.188rem] max-w-full flex-1 overflow-hidden object-cover"
            loading="lazy"
            alt=""
            src="/frame-162887@2x.png"
          />
        </div>
      </div>
    </>
  );
};

export default ArtworkDetail;
