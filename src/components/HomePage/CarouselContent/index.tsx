import Link from "next/link";

const CarouselContent = (props: {}) => {
  return (
    <div className="text-91xl text-neutral-white font-barlow mq1250:flex-wrap flex max-w-full flex-row items-start justify-start gap-[0px_20px] text-left">
      <img
        className="relative z-[1] h-[564px] min-h-[564px] w-[273px] shrink-0 overflow-hidden object-cover"
        loading="lazy"
        alt=""
        src="/images/shop/HomePage/Carousel/frame-162791@2x.png"
      />
      <div className="box-border flex h-[564px] w-[292px] flex-col items-start justify-start py-0 pl-0 pr-[19px]">
        <img
          className="relative max-h-full max-w-full flex-1 self-stretch overflow-hidden object-cover"
          alt=""
          src="/images/shop/HomePage/Carousel/frame-162791-1@2x.png"
        />
      </div>
      <div className="mq750:gap-[20px_0px] flex max-w-full flex-col items-start justify-center gap-[20px_0px]">
        <h1 className="font-inherit mq450:text-14xl mq750:text-36xl relative m-0 inline-block w-[581px] font-semibold text-inherit">
          <p className="m-0" style={{ fontSize: "80px" }}>
            Buy and Sell
          </p>
          <p className="m-0" style={{ fontSize: "80px" }}>
            Digital Arts
          </p>
        </h1>
        <div className="mq450:text-lgi mq450:leading-[28px] relative inline-block w-[580px] text-5xl leading-[145%] tracking-[0.02em]">{`The world’s largest online marketplace of online digital art `}</div>
        <b className="mq450:text-base relative cursor-pointer text-xl">
          Explore More
        </b>
        <div className="text-13xl text-whte mq450:flex-wrap flex w-[388px] max-w-full flex-row items-start justify-between gap-[20px]">
          <div className="flex flex-col items-start justify-start gap-[8px_0px]">
            <div className="mq450:text-lgi mq750:text-7xl relative font-semibold">
              +1000
            </div>
            <div className="mq450:text-base relative text-xl font-medium">
              Digital art file
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[8px_0px]">
            <div className="mq450:text-lgi mq750:text-7xl relative font-semibold">
              +100
            </div>
            <div className="mq450:text-base relative text-xl font-medium">
              Art Seller
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[8px_0px]">
            <b className="mq450:text-lgi mq750:text-7xl relative">+500</b>
            <div className="mq450:text-base relative text-xl font-medium">
              Buyer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselContent;
