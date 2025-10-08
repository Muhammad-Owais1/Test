import React from "react";
import logo from "../assets/logo.png";
import Rectangle1 from "../assets/images/NavBar/Rectangle1.png";
import Rectangle2 from "../assets/images/NavBar/Rectangle2.png";
import Phone from "../assets/images/NavBar/Vector.png";

export default function Navbar() {
    return (
        <>


            <nav className="bg-[#20222D] lg:px-[104px] px-[50px] pt-[55px] flex items-center justify-between flex-wrap gap-4">
                <div className='absolute top-0 left-0 w-full z-10  lg:block'>
                    <img src={Rectangle2} alt="" className='absolute top-0 left-0 w-screen' />
                    <img src={Rectangle1} alt="" className='absolute top-0 left-0 w-screen' />
                </div>
                {/* Logo */}
                <div className="w-[348px] h-[87px] flex items-center z-50">
                    <img src={logo} alt="Logo" className="w-[348px]" />
                </div>

                <div className=" h-[98px] flex-1 flex flex-col items-end justify-center text-white z-50">
                    {/* Menu Items */}
                    <div className="xl:hidden flex ">
                        <h1 className="text-4xl">☰</h1>
                    </div>
                    <ul className="hidden xl:flex space-x-6 font-semibold text-2xl flex-wrap">
                        <li className="hover:text-gray-200 cursor-pointer whitespace-nowrap">HOME</li>
                        <li className="hover:text-gray-200 cursor-pointer whitespace-nowrap">About</li>
                        <li className="hover:text-gray-200 cursor-pointer whitespace-nowrap">Services</li>
                        <li className="hover:text-gray-200 cursor-pointer whitespace-nowrap">Why Choose Us</li>
                        <li className="hover:text-gray-200 cursor-pointer whitespace-nowrap">Portfolio</li>
                        <li className="hover:text-gray-200 cursor-pointer whitespace-nowrap">Products</li>
                        <li className="hover:text-gray-200 cursor-pointer whitespace-nowrap">Testimonial</li>
                        <li className="hover:text-gray-200 cursor-pointer whitespace-nowrap">Technologies</li>
                        <li className="hover:text-gray-200 cursor-pointer whitespace-nowrap">Contact</li>
                    </ul>

                    {/* Phone Button */}
                    <div className="mt-4 z-50 hidden xl:flex">
                        <button className="flex items-center justify-center gap-2 border-[2.5px] border-white h-[54px] w-[261px] rounded-[50px] font-extrabold text-xl">
                            <span><img src={Phone} alt=""  className="w-7"/></span>
                            <span>+1 (800) 826-8018</span>
                        </button>

                    </div>
                </div>

            </nav>
        </>
    );
}
