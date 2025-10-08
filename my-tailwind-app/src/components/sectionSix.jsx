import React from 'react';
import Background from "../assets/images/section6/Background.png";
import Cloud from "../assets/images/section6/Cloud.png";

export default function SectionSix() {
    return (
        <div className="w-screen h-screen relative">
            {/* Full background image */}
            <img
                src={Background}
                alt="Background"
                className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col">
                {/* Heading centered horizontally at top */}
                <h1 className="font-bold text-[74px] text-[#ffffff] mt-10 text-center">
                    Technologies
                </h1>

                {/* Inner section */}
                <div className="mt-10 flex items-center justify-between w-full relative px-[124px]">
                    {/* White div (left) */}
                    <div className="w-[826px] h-[650px] bg-white rounded-lg relative z-10 shadow-lg flex items-center">
                        <div className='pl-[50px] w-[700px]'>
                            <h1 className='text-[54px] font-semibold'>Cloud Solutions</h1>
                            <h1 className='text-[22px] font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisl libero, sollicitudin vel tempor sed, ullamcorper quis diam. Ut eros elit, luctus eu pulvinar a, lacinia a justo. Sed felis sapien, rutrum ut tempus quis, elementum eu du</h1>
                        </div>
                    </div>

                    {/* Cloud image (right, slightly overlapping white div) */}
                    <div className="relative -ml-[150px] z-20">
                        <img
                            src={Cloud}
                            alt="Cloud"
                            className="h-[550px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
 