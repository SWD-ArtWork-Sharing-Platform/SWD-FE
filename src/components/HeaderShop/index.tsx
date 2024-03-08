import Link from "next/link";
import Image from "next/image";

const HeaderShop = (props: {}) => {
  return (
    <header className="text-21xl text-neutral-white font-barlow mq450:gap-[0px_233px] mq750:gap-[0px_233px] mq1250:gap-[0px_233px] sticky top-[0] z-[99] flex w-10/12 max-w-full flex-row items-center justify-start gap-[0px_233px] pt-[10px] text-left">
      <h1 className="font-inherit relative m-0 whitespace-nowrap font-bold text-inherit">
        Artvista
      </h1>
      <div className="text-whte flex max-w-full flex-1 flex-row items-center justify-between gap-[20px] text-3xl">
        <div className="mq450:gap-[0px_63px] mq1100:hidden flex max-w-full flex-row items-start justify-center gap-[0px_63px]">
          <div className="relative cursor-pointer font-semibold">Discover</div>
          <div className="relative cursor-pointer font-semibold">Forum</div>
          <div className="relative cursor-pointer font-semibold">News</div>
          <div className="relative cursor-pointer font-semibold">Blog</div>
        </div>
        <div className="flex flex-row">
          <div className="bg-primary-colour text-neutral-white flex cursor-pointer flex-row items-center justify-center whitespace-nowrap rounded px-8 py-5 text-center text-base">
            <div className="relative font-semibold leading-[1px]">Sign Up</div>
          </div>
          <div className="bg-primary-colour text-neutral-white ms-5 flex cursor-pointer flex-row items-center justify-center whitespace-nowrap rounded px-8 py-5 text-center text-base">
            <div className="relative font-semibold leading-[1px]">Sign In</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderShop;
