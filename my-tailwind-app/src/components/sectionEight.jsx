import React from "react";
import Badge from "../assets/images/section8/Badge.png";
import Badge2 from "../assets/images/section8/Badge2.png";
import Badge3 from "../assets/images/section8/Badge3.png";
import Logo from "../assets/images/section8/logo.png";

export default function BadgesSection() {
  const badges = [Badge, Badge2, Badge, Badge3]; // 4 badges

  return (
    <>
      {/* Heading */}
      <div className="flex justify-center pt-[100px] text-center px-4">
        <h1 className="font-bold text-[#20222D] 2xl:text-[74px] text-[40px]">
          Awards and Recognitions
        </h1>
      </div>

      {/* Badges */}
      <div
        className="
          flex flex-wrap justify-center items-center 
          gap-[20px] 2xl:py-20 py-10 px-6
        "
      >
        {badges.map((item, index) => (
          <div
            key={index}
            className="
              relative group rounded-full overflow-hidden 
              flex justify-center items-center
              w-[403px] h-[403px]
              xl:w-[360px] xl:h-[360px]
              lg:w-[320px] lg:h-[320px]
              md:w-[280px] md:h-[280px]
              sm:w-[240px] sm:h-[240px]
            "
          >
            {/* Badge image */}
            <img
              src={item}
              alt={`Badge ${index + 1}`}
              className="
                w-[350px] object-contain z-10
                xl:w-[320px]
                lg:w-[290px]
                md:w-[250px]
                sm:w-[210px]
              "
            />

            {/* Hover Overlay */}
            <div
              className="
                absolute inset-0 bg-black/70 rounded-full opacity-0 
                group-hover:opacity-100 transition-opacity duration-300 
                z-20 flex flex-col justify-center items-center text-center 
                px-6 py-6
              "
            >
              <img
                src={Logo}
                alt=""
                className="
                  h-[100px] mb-4 brightness-125
                  xl:h-[85px]
                  lg:h-[75px]
                  md:h-[65px]
                  sm:h-[55px]
                "
              />
              <h1
                className="
                  font-bold text-3xl text-white mb-3 
                  drop-shadow-[0_0_6px_rgba(0,0,0,0.6)]
                  xl:text-[26px]
                  lg:text-[22px]
                  md:text-[20px]
                  sm:text-[18px]
                "
              >
                Top Mobile App Developers 2020
              </h1>
              <p
                className="
                  text-xl font-normal text-white 
                  drop-shadow-[0_0_4px_rgba(0,0,0,0.6)] leading-relaxed px-4
                  xl:text-[18px]
                  lg:text-[16px]
                  md:text-[15px]
                  sm:text-[14px]
                "
              >
                Top Developers mentioned us in their top app development
                companies in the USA list.
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
