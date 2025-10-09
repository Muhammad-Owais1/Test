import React from "react";
import Footer from "../assets/images/section9/footer.png";
import Vector from "../assets/images/section9/Vector.png";

export default function SectionNine() {
  return (
    <>
      <div id="contact" className="bg-[#E01923] flex flex-col xl:flex-row">
        {/* Left Section */}
        <div className="xl:w-[58%] w-full flex items-center justify-center px-[5%] py-10">
          <div className="text-white w-full max-w-[827px]">
            <h1 className="font-semibold md:text-4xl text-2xl">LET’S TALK</h1>
            <h1 className="font-bold md:text-[52px] text-[40px] pt-[3px] leading-tight">
              Got an idea? Let’s get in touch!
            </h1>
            <h1 className="font-semibold md:text-3xl text-xl pt-[14px] leading-snug">
              Have queries? Not sure of your App Strategy? Discuss with us and
              we'll guide you the way forward.
            </h1>

            {/* Inputs */}
            {["Your Name", "Email Address", "Phone"].map((placeholder, i) => (
              <input
                key={i}
                type="text"
                placeholder={placeholder}
                className="bg-white md:h-[65px] h-[50px] w-full pl-3 md:text-2xl text-base rounded-lg mt-[30px]"
              />
            ))}

            <textarea
              placeholder="Message"
              className="bg-white h-[200px] md:h-[300px] w-full pl-3 pt-3 md:text-2xl text-base rounded-lg mt-[30px] resize-none"
            />

            {/* Button */}
            <button
              className="w-full h-[74px] flex items-center justify-center font-bold text-2xl bg-black mt-[50px] rounded"
              style={{
                border: "39px solid",
                borderImageSource:
                  "linear-gradient(291.71deg, rgba(255, 0, 0, 0.3) 11.53%, rgba(255, 0, 0, 0) 39.02%)",
                borderImageSlice: 1,
              }}
            >
              LET’S GET IN TOUCH
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="xl:w-[42%] w-full overflow-hidden relative hidden md:block">
          {/* Image */}
          <img
            src={Footer}
            alt=""
            className="w-full h-[763px] object-cover object-top translate-y-[-3%]"
          />

          {/* Text BELOW image */}
          <div className="text-white text-center flex flex-col items-center justify-center bg-[#E01923] py-10 px-6">
            <h1 className="text-[28px] font-semibold">
              Please submit your inquiry and our App Development Strategist will
              contact you shortly
            </h1>
            <img src={Vector} alt="" className="h-20 pt-5" />
            <h1 className="2xl:text-5xl text-2xl font-bold pt-[50px]">
              +1-(800) 826 8018
            </h1>
            <h1 className="text-[22px] font-normal pb-[40px]">
              info@appicoders.com
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
