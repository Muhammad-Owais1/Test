import React from 'react'
import Mobile from "../assets/images/section1/mobile.png";

export default function sectionOne() {
    return (
        <>
            <div className="flex items-start bg-[#20222D] relative pt-[56px] pb-[25px]">

                <div className='z-50 w-[38%] xl:block hidden'>
                    <img src={Mobile} alt="" className="w-full aspect657.16/845] pl-[79px]" />
                </div>
                <div className="flex flex-col w-[1017px] text-white pl-[31px] pt-44 max-[1580px]:pt-8 space-y-[30px] z-50 xl:justify-center">

                    <h1 className="font-bold text-[85px] max-[1580px]:text-[64px] leading-[90px]">
                        Leading the Way in App <br />
                        <span className="block font-bold text-[70px] max-[1580px]:text-[52.5px] leading-[75px] max-[1580px]:mt-[-20px]">
                            Development Innovation
                        </span>
                    </h1>


                    <h1 className="font-semibold text-[34px]">
                        We build Android & iOS Mobile Apps that cater all your business needs and take it on the next level.
                    </h1>

                    <button
                        className="h-[74px] w-[368px] flex items-center justify-center text-white text-2xl font-semibold rounded bg-black"
                        style={{
                            border: "39px solid",
                            borderImageSource: "linear-gradient(291.71deg, rgba(255, 0, 0, 0.3) 11.53%, rgba(255, 0, 0, 0) 39.02%)",
                            borderImageSlice: 1,
                        }}
                    >
                        Get A FREE QUOTE
                    </button>

                </div>
            </div>

        </>
    )
}
