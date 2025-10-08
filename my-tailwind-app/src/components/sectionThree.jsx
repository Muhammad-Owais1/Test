import React, { useState } from "react";
import Section3 from "../assets/images/section3/section3.png";

export default function SectionThree() {
  const [active, setActive] = useState(1);

  const data = [
    {
      id: 1,
      title: "Focused Business Approach",
      text: "We research, plan, and execute – and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us."
    },
    {
      id: 2,
      title: "Professional Team",
      text: "Our mobile development company has extremely professional & expert mobile app developers who specialize in 2D, 3D, & isometric apps for Android, iOS, & webapp platforms."
    },
    {
      id: 3,
      title: "Flexible Payment Terms",
      text: "Get your apps developed with most affordable price and with our flexible payment terms, you pay as your project progresses."
    },
    {
      id: 4,
      title: "Cutting-edge Technology",
      text: "We leverage the latest tech stack to deliver high-performance apps, ensuring your business stays ahead of the competition."
    },
    {
      id: 5,
      title: "Customer Satisfaction",
      text: "Our priority is client satisfaction – we deliver solutions that meet your business goals effectively and efficiently."
    }
  ];

  // Added 20px gap to previous translate-x values
const positions = {
  1: "-translate-x-[1128px] scale-90 opacity-60 z-10",  // far left (-564 * 2)
  2: "-translate-x-[564px] scale-95 opacity-80 z-15",   // left (-564 * 1)
  3: "translate-x-0 scale-100 opacity-100 z-20",       // center
  4: "translate-x-[564px] scale-95 opacity-80 z-15",   // right (564 * 1)
  5: "translate-x-[1128px] scale-90 opacity-60 z-10"   // far right (564 * 2)
};


  const getPositionClass = (id) => {
    const total = data.length;
    const diff = (id - active + total) % total;

    switch (diff) {
      case 0:
        return positions[3]; // center
      case 1:
        return positions[4]; // right
      case 2:
        return positions[5]; // far right
      case total - 1:
        return positions[2]; // left
      case total - 2:
        return positions[1]; // far left
      default:
        return "-translate-x-[1200px] scale-75 opacity-0 z-0"; // offscreen
    }
  };

  return (
    <div className="bg-[#EAEDEF] py-[103px]">
      <div className="text-center max-w-6xl mx-auto mb-14">
        <h2 className="text-[74px] font-bold text-[#20222D]">Why Choose Us?</h2>
        <p className="text-[#20222D] font-semibold text-4xl">
          With our unique approach and cost-effective solutions, your business
          will prosper because quality is the top priority for us.
        </p>
      </div>

      <div className="relative flex justify-center items-center h-[600px] overflow-hidden">
        {data.map((item) => (
          <div
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`absolute w-[544px] h-[544px] rounded-full bg-gray-100 flex flex-col justify-center items-center px-6 text-center cursor-pointer shadow-md transition-all duration-700 ease-in-out ${getPositionClass(item.id)}`}
          >
            <img src={Section3} alt="icon" className="w-[120px] h-[120px] mb-6" />
            <h3 className="text-3xl font-bold text-[#20222D] mb-2">{item.title}</h3>
            <p className="text-2xl text-[#20222D] font">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
