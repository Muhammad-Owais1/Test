import React from "react";
import Badge from "../assets/images/section8/Badge.png";
import Badge2 from "../assets/images/section8/Badge2.png"; 
import Badge3 from "../assets/images/section8/Badge3.png";
import Logo from "../assets/images/section8/logo.png"

export default function BadgesSection() {
  const badges = [Badge, Badge2, Badge, Badge3]; // 4 badges

  return (
    <>
      <div className="flex justify-center pt-[100px]">
        <h1 className="font-bold text-[74px] text-[#20222D]">
          Awards and Recognitions
        </h1>
      </div>

      <div className="flex justify-center items-center gap-[20px] py-20">
        {badges.map((item, index) => (
          <div
            key={index}
            className="relative group w-[403px] h-[403px] rounded-full overflow-hidden flex justify-center items-center"
          >
            {/* Badge image (centered) */}
            <img
              src={item}
              alt={`Badge ${index + 1}`}
              className="w-[350px] object-contain z-10"
            />

            {/* Hover black circle */}
<div className="absolute inset-0 bg-black/70 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col justify-center items-center text-center px-10 py-8">
  <div>
    <img src={Logo} alt="" className="h-[100px] mb-4 brightness-125" />
  </div>
  <div>
    <h1 className="font-bold text-3xl text-white mb-3 drop-shadow-[0_0_6px_rgba(0,0,0,0.6)]">
      Top Mobile App Developers 2020
    </h1>
  </div>
  <div>
    <h1 className="text-xl font-normal text-white drop-shadow-[0_0_4px_rgba(0,0,0,0.6)] leading-relaxed px-4">
      Top Developers mentioned us in their top app development companies in the
      USA list.
    </h1>
  </div>
</div>


          </div>
        ))}
      </div>
    </>
  );
}
