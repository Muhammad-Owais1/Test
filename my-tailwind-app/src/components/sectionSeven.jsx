import React from "react";
import Background from "../assets/images/section7/Background.png";
import Laptop from "../assets/images/section7/Laptop.png";
import Laptop2 from "../assets/images/section7/Laptop2.png";
import Ipad1 from "../assets/images/section7/ipad1.png";
import Ipad2 from "../assets/images/section7/Ipad2.png";
import mobile1 from "../assets/images/section7/Mobile1.png";
import mobile2 from "../assets/images/section7/Mobile2.png";
import group from "../assets/images/section7/Group.png";
export default function SectionSeven() {
  const cards = [
    { id: 1, img: Laptop },
    { id: 2, img: Laptop2 },
    { id: 3, img: Ipad1 },
    { id: 4, img: Ipad2 },
    { id: 5, img: mobile1 },
    { id: 6, img: mobile2 },
  ];

  return (
    <div
      id="products"
      className="relative flex justify-center items-center w-full"
    >
      {/* Background Image */}
      <img
        src={Background}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Black Overlay with Content */}
      <div className="w-full h-full flex flex-col items-center pt-10 text-white relative z-10">
        {/* Heading */}
        <h1 className="font-bold 2xl:text-[74px] text-[40px] text-[#ffffff] mb-10">
          Products
        </h1>

        {/* Navbar */}
        <nav className="flex flex-wrap justify-center 2xl:text-2xl text-base font-bold md:gap-[50px] gap-[30px] mb-16">
          {Array(7)
            .fill("Health Supreme")
            .map((name, i) => (
              <h1
                key={i}
                className="relative cursor-pointer transition-all duration-300 ease-in-out hover:underline hover:underline-offset-4"
              >
                {name}
              </h1>
            ))}
        </nav>

        {/* Cards Grid */}
        <div className="md:px-[100px] px-[50px] pb-[80px] w-full">
          <div className="flex flex-col md:flex-row flex-wrap gap-[20px] justify-center items-center">
            {cards.map((card) => (
              <div
                key={card.id}
                className="relative aspect-[546/415] 2xl:w-[546px] w-[300px] bg-white rounded-lg overflow-hidden shadow-lg flex justify-center items-center transition-transform duration-300"
              >
                {/* Card Image */}
                <img
                  src={card.img}
                  alt="Laptop"
                  className="h-full w-full object-cover"
                />

                {/* Black Overlay on Hover */}

                <div className="absolute pt-[25%] inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300 text-center px-4">
                  <img
                    src={group}
                    alt=""
                    className="2xl:h-[70px] h-[40px] mb-5"
                  />
                  <h2 className="text-white 2xl:text-[44px] text-[25px] font-bold mb-2">
                    Product Name
                  </h2>
                  <h1 className="text-white 2xl:text-[20px] text-[12px] font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas et mi condimentum
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
