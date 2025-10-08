import React from 'react';
import Background from "../assets/images/section4/Background2.png";
import Quote from "../assets/images/section4/quote.png";
import WhiteQuote from "../assets/images/section4/whiteQuote.png";
import Scarlett from "../assets/images/section4/scarlett.png";

export default function SectionFour() {
  return (
    <div className="relative w-screen h-screen">
      {/* Full-screen background image */}
      <img
        src={Background}
        alt="Background"
        className="w-full h-full object-cover"
      />

      {/* Red background div */}
      <div className="absolute top-[165px] bottom-[165px] left-[124px] right-[124px] 
                      bg-[#E01923]/70 flex items-center 
                      backdrop-blur-md">

        {/* Quote Circle */}
        <div className="absolute -top-[90px] left-[60px] w-[180px] h-[180px] 
                        rounded-full bg-white flex items-center justify-center shadow-lg">
          <img src={Quote} alt="Quote" className="w-[80px] h-[80px] object-contain" />
        </div>

        {/* Main content wrapper with padding left & right */}
        <div className="flex items-center justify-between w-full px-[50px]">
          
          {/* Example text */}
          <div className="text-white">
            <h4 className="text-[38px] font-semibold">CLIENT TESTIMONIALS</h4>
            <h2 className="text-[74px] font-bold leading-[80px]">
              What our clients <br /> are Saying.
            </h2>
          </div>

          {/* White testimonial card */}
          <div className='w-[826px] h-[580px] bg-white rounded-lg'>
            {/* Top Section: Image + Name */}
            <div className="flex items-center pt-[66px] pl-[32px]">
              {/* Scarlett Image + Quote */}
              <div className='relative w-[180px] h-[180px]'>
                <div className='flex justify-center items-center h-[180px] w-[180px] rounded-[50%] overflow-hidden'>
                  <img src={Scarlett} alt="" className='h-[180px]' />
                </div>

                {/* Quote Icon */}
                <div className='absolute -bottom-[25px] left-[27px] flex justify-center items-center h-[50px] w-[50px] rounded-[50%] overflow-hidden bg-[#E01923]'>
                  <img src={WhiteQuote} alt="" className='h-[18.75px]' />
                </div>
              </div>

              {/* Name aligned with image */}
              <div className='pl-[24px] flex flex-col justify-center h-[180px]'>
                <h4 className='text-[32px] font-bold'>Scarlett Lawrence</h4>
                <div className='w-[60px] h-[3px] bg-[#E01923] mt-1'></div>
              </div>
            </div>

            {/* Paragraph section */}
            <div className='mt-[60px] pl-[32px] pr-[32px]'>
              <p className='text-[22px] leading-[26px] font-semibold'>
                Thank you Team Appingine you guys have a great understanding of what's
                current, and get things done very quickly compared to others. Reliable
                communication and qualitative suggestions on useful functionality during
                the planning stage made for a final product that surpassed initial
                expectations. Their Project management is amazing, Tight deadlines were
                reliably met without issue. Our Strong recommendations if you’re looking
                for quality work.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
