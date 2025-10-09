import React from "react";
import Mobile from "../assets/images/section1/mobile.png";

export default function sectionOne() {
  return (
    <>
      <div className="flex items-start bg-[#20222D] relative pt-[56px] pb-[25px]">
        <div className="z-50 w-[38%] lg:block hidden">
          <img
            src={Mobile}
            alt=""
            className="w-full aspect657.16/845] pl-[79px]"
          />
        </div>
        <div className="flex flex-col w-[1017px] text-white px-[31px] pt-44 max-[1580px]:pt-8 space-y-[30px] z-50 xl:justify-center">
          <h1 className="font-bold 2xl:text-[85px] text-[45px] leading-tight">
            Leading the Way in App <br />
            <span className="block font-bold 2xl:text-[60px] text-[40px] ">
              Development Innovation
            </span>
          </h1>

          <h1 className="font-semibold 2xl:text-[34px] text-[20px] w-[80%] ">
            We build Android & iOS Mobile Apps that cater all your business
            needs and take it on the next level.
          </h1>

          <button
            className="h-[74px] w-[368px] 2xl:flex hidden items-center justify-center text-white text-2xl font-semibold rounded bg-black"
            style={{
              border: "39px solid",
              borderImageSource:
                "linear-gradient(291.71deg, rgba(255, 0, 0, 0.3) 11.53%, rgba(255, 0, 0, 0) 39.02%)",
              borderImageSlice: 1,
            }}
          >
            Get A FREE QUOTE
          </button>

          <button
            className="h-2 w-[270px] flex 2xl:hidden items-center justify-center text-white text-xl font-semibold rounded bg-black"
            style={{
              border: "30px solid",
              borderImageSource:
                "linear-gradient(291.71deg, rgba(255, 0, 0, 0.3) 11.53%, rgba(255, 0, 0, 0) 39.02%)",
              borderImageSlice: 1,
            }}
          >
            Get A FREE QUOTE
          </button>
        </div>
      </div>
    </>
  );
}
