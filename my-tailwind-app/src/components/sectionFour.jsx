import React from "react";
import Background from "../assets/images/section4/Background2.png";
import Quote from "../assets/images/section4/quote.png";
import WhiteQuote from "../assets/images/section4/whiteQuote.png";
import Scarlett from "../assets/images/section4/scarlett.png";

export default function SectionFour() {
  return (
    <div id="wcu" className="relative w-screen h-screen md:block hidden ">
      <img
        src={Background}
        alt="Background"
        className="w-full h-full object-cover"
      />

      <div
        className="absolute 2xl:top-[165px] top-[50px] 2xl:bottom-[165px] bottom-[50px] 2xl:left-[124px] left-[50px] 2xl:right-[124px] right-[50px] 
                      lg:bg-[#E01923]/70 bg-transparent flex items-center
                      lg:backdrop-blur-md backdrop-blur-none"
      >
        <div
          className="absolute 2xl:-top-[90px] -top-[45px] 2xl:left-[60px] left-[45px] 2xl:w-[180px] w-[90px] 2xl:h-[180px] h-[90px]
                        rounded-full bg-white lg:flex hidden items-center justify-center shadow-lg"
        >
          <img
            src={Quote}
            alt="Quote"
            className="2xl:w-[80px] w-[40px] 2xl:h-[80px] h-[40px] object-contain"
          />
        </div>

        <div className="flex items-center justify-between flex-col lg:flex-row w-full px-[50px]">
          <div className="text-white lg:block hidden">
            <h4 className="2xl:text-[38px] text-[20px] font-semibold">
              CLIENT TESTIMONIALS
            </h4>
            <h2 className="2xl:text-[74px] text-[45px] font-bold 2xl:leading-[80px] leading-tight">
              What our clients <br /> are Saying.
            </h2>
          </div>

          <div className="2xl:w-[826px] w-[550px] 2xl:h-[580px] h-[400px] bg-white rounded-lg">
            <div className="flex items-center pt-[66px] pl-[32px]">
              <div className="relative w-[180px] h-[180px]">
                <div className="flex justify-center items-center 2xl:h-[180px] h-[120px] 2xl:w-[180px] w-[120px] rounded-[50%] overflow-hidden">
                  <img src={Scarlett} alt="" className="h-[180px]" />
                </div>

                <div className="absolute 2xl:-bottom-[25px] bottom-[50px] 2xl:left-[27px] left-[10px] flex justify-center items-center h-[50px] w-[50px] rounded-[50%] overflow-hidden bg-[#E01923]">
                  <img src={WhiteQuote} alt="" className="h-[18.75px]" />
                </div>
              </div>

              <div className="2xl:pl-[24px] pl-[10px] flex flex-col justify-center h-[180px]">
                <h4 className="2xl:text-[32px] text-[20px] font-bold">
                  Scarlett Lawrence
                </h4>
                <div className="w-[60px] h-[3px] bg-[#E01923] mt-1"></div>
              </div>
            </div>

            <div className="2xl:mt-[60px] mt-[0] pl-[32px] pr-[32px]">
              <p className="2xl:text-[22px] text-[14px] 2xl:leading-[26px] leading-tight font-semibold">
                Thank you Team Appingine you guys have a great understanding of
                what's current, and get things done very quickly compared to
                others. Reliable communication and qualitative suggestions on
                useful functionality during the planning stage made for a final
                product that surpassed initial expectations. Their Project
                management is amazing, Tight deadlines were reliably met without
                issue. Our Strong recommendations if you’re looking for quality
                work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
