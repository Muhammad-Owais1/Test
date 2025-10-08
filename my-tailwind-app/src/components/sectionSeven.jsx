import React from 'react';
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
        <div className="relative flex justify-center items-center w-full">
            {/* Background Image */}
            <img
                src={Background}
                alt=""
                className="w-full h-full object-cover"
            />

            {/* Black Overlay with Content */}
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center pt-10 text-white ">
                {/* Heading */}
                <h1 className="font-bold text-[74px] text-[#ffffff] mb-10">
                    Products
                </h1>

                {/* Navbar */}
                <nav className="flex flex-wrap justify-center text-2xl font-bold gap-[50px] mb-16">
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
                <div className="px-[124px] w-full">
                    <div className="grid grid-cols-3 gap-[20px] justify-items-center">
                        {cards.map((card) => (
                            <div
                                key={card.id}
                                className="relative h-[415px] w-[546px] bg-white rounded-lg overflow-hidden shadow-lg flex justify-center items-center transition-transform duration-300"
                            >
                                {/* Card Image */}
                                <img
                                    src={card.img}
                                    alt="Laptop"
                                    className="h-full w-full object-cover"
                                />

                                {/* Black Overlay on Hover */}

                                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300 text-center px-4">
                                    <img src={group} alt="" className="h-[70px] mb-5" />
                                    <h2 className="text-white text-[44px] font-bold mb-2">Product Name</h2>
                                    <h1 className="text-white text-[20px] font-normal">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et mi condimentum
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
