import React, { useState } from "react";
import logo from "../assets/logo.png";
import Rectangle1 from "../assets/images/NavBar/Rectangle1.png";
import Rectangle2 from "../assets/images/NavBar/Rectangle2.png";
import Phone from "../assets/images/NavBar/Vector.png";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-[#20222D] 2xl:px-[104px] px-[50px] pt-[20px] 2xl:pt-[55px] flex items-center justify-between flex-wrap gap-4">
        <div className="absolute top-0 left-0 w-full z-10  lg:block">
          <img
            src={Rectangle2}
            alt=""
            className="absolute top-0 left-0 w-screen"
          />
          <img
            src={Rectangle1}
            alt=""
            className="absolute top-0 left-0 w-screen"
          />
        </div>

        {/* Logo */}
        <div className="2xl:w-[348px] w-[200px] h-[87px] flex items-center z-50">
          <img src={logo} alt="Logo" className="w-full" />
        </div>

        <div className="h-[98px] flex-1 flex flex-col items-end justify-center text-white z-50">
          {/* Hamburger Button */}
          <div
            className="xl:hidden flex flex-col justify-center items-center w-8 h-8 cursor-pointer space-y-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`block h-1 w-8 bg-white rounded transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-1 w-8 bg-white rounded transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block h-1 w-8 bg-white rounded transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden xl:flex space-x-6 font-semibold 2xl:text-2xl text-base">
            <Link className="hover:text-gray-200 cursor-pointer whitespace-nowrap">
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={600}
              offset={-100}
              className="hover:text-gray-200 cursor-pointer whitespace-nowrap"
            >
              About
            </Link>
            <Link
              to="services"
              smooth={true}
              duration={600}
              offset={-100}
              className="hover:text-gray-200 cursor-pointer whitespace-nowrap"
            >
              Services
            </Link>
            <Link
              to="wcu"
              smooth={true}
              duration={600}
              offset={-100}
              className="hover:text-gray-200 cursor-pointer whitespace-nowrap"
            >
              Why Choose Us
            </Link>
            <Link
              to="portfolio"
              smooth={true}
              duration={600}
              offset={-100}
              className="hover:text-gray-200 cursor-pointer whitespace-nowrap"
            >
              Portfolio
            </Link>
            <Link
              to="products"
              smooth={true}
              duration={600}
              offset={-100}
              className="hover:text-gray-200 cursor-pointer whitespace-nowrap"
            >
              Products
            </Link>
            <Link
              to="testimonial"
              smooth={true}
              duration={600}
              offset={-100}
              className="hover:text-gray-200 cursor-pointer whitespace-nowrap"
            >
              Testimonial
            </Link>
            <Link
              to="technologies"
              smooth={true}
              duration={600}
              offset={-100}
              className="hover:text-gray-200 cursor-pointer whitespace-nowrap"
            >
              Technologies
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={600}
              offset={-100}
              className="hover:text-gray-200 cursor-pointer whitespace-nowrap"
            >
              Contact
            </Link>
          </ul>

          {/* Phone Button */}
          <div className="mt-4 z-50 hidden xl:flex">
            <button className="flex items-center justify-center gap-2 border-[2.5px] border-white 2xl:h-[54px] h-[40px] w-fit px-2 rounded-[50px] font-extrabold 2xl:text-xl text-base">
              <span>
                <img src={Phone} alt="" className="2xl:w-7 w-5" />
              </span>
              <span>+1 (800) 826-8018</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <ul
        className={`xl:hidden absolute text-white  ${
          isOpen ? "flex" : "hidden"
        } space-x-6 font-semibold 2xl:text-2xl text-base flex-col w-screen bg-red-600 py-5 left-0 top-24 z-[9000]`}
      >
        <Link className="ml-[24px] hover:text-gray-200 cursor-pointer whitespace-nowrap">
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={600}
          offset={-100}
          className="hover:text-gray-200 cursor-pointer whitespace-nowrap"
        >
          About
        </Link>
        <Link
          to="services"
          smooth={true}
          duration={600}
          offset={-100}
          className="hover:text-gray-200 cursor-pointer whitespace-nowrap"
        >
          Services
        </Link>
        <Link
          to="wcu"
          smooth={true}
          duration={600}
          offset={-100}
          className="hover:text-gray-200 cursor-pointer whitespace-nowrap"
        >
          Why Choose Us
        </Link>
        <Link
          to="portfolio"
          smooth={true}
          duration={600}
          offset={-100}
          className="hover:text-gray-200 cursor-pointer whitespace-nowrap"
        >
          Portfolio
        </Link>
        <Link
          to="products"
          smooth={true}
          duration={600}
          offset={-100}
          className="hover:text-gray-200 cursor-pointer whitespace-nowrap"
        >
          Products
        </Link>
        <Link
          to="testimonial"
          smooth={true}
          duration={600}
          offset={-100}
          className="hover:text-gray-200 cursor-pointer whitespace-nowrap"
        >
          Testimonial
        </Link>
        <Link
          to="technologies"
          smooth={true}
          duration={600}
          offset={-100}
          className="hover:text-gray-200 cursor-pointer whitespace-nowrap"
        >
          Technologies
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={600}
          offset={-100}
          className="hover:text-gray-200 cursor-pointer whitespace-nowrap"
        >
          Contact
        </Link>
      </ul>
    </>
  );
}
