import React from "react";
import Background from "../assets/images/section6/Background.png";
import Cloud from "../assets/images/section6/Cloud.png";

export default function SectionSix() {
  return (
    <div className="w-screen h-screen relative lg:block hidden overflow-hidden">
      <img
        src={Background}
        alt="Background"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/20"></div>

      <div className="absolute inset-0 flex flex-col">
        <h1 className="font-bold 2xl:text-[74px] text-[40px] text-[#ffffff] mt-10 text-center">
          Technologies
        </h1>

        <div className="mt-10 flex items-center justify-between w-full relative px-[124px]">
          <div className="flex-1 h-[80%] bg-white rounded-lg relative z-10 shadow-lg flex items-center">
            <div className="px-[50px] 2xl:pr-0 pr-[200px] 2xl:w-[700px] w-[600px]">
              <h1 className="2xl:text-[54px] text-[30px] font-semibold">
                Cloud Solutions
              </h1>
              <h1 className="2xl:text-[22px] text-[14px] font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                nisl libero, sollicitudin vel tempor sed, ullamcorper quis diam.
                Ut eros elit, luctus eu pulvinar a, lacinia a justo. Sed felis
                sapien, rutrum ut tempus quis, elementum eu du
              </h1>
            </div>
          </div>

          <div className="relative -ml-[150px] z-20 h-full">
            <img src={Cloud} alt="Cloud" className="h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
