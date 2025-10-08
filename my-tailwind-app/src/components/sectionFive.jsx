import React from 'react';
import Pills from "../assets/images/section5/pills.png";
import BriefCase from "../assets/images/section5/briefCase.png";
import DigitalEconomy from "../assets/images/section5/digitalEconomy.png";
import Cleaning from "../assets/images/section5/cleaning.png";
import HealthCare from "../assets/images/section5/healthcare.png";
import RunningShoes from "../assets/images/section5/runningShoes.png";

export default function SectionFive() {
  // Array with 6 different cards
  const cards = [
    {
      title: "Medical & Pharma Services",
      description:
        "We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.",
      icon: Pills,
    },
    {
      title: "Business & Consulting",
      description:
        "We provide top-notch business consulting services that help clients grow and optimize their operations.",
      icon: BriefCase,
    },
    {
      title: "Digital Economy",
      description:
        "Driving digital innovation and strategies for businesses to thrive in the digital marketplace.",
      icon: DigitalEconomy,
    },
    {
      title: "Cleaning Services",
      description:
        "Professional cleaning solutions ensuring hygiene, safety, and quality for all spaces.",
      icon: Cleaning,
    },
    {
      title: "Health & Wellness",
      description:
        "Providing comprehensive healthcare and wellness solutions to improve quality of life.",
      icon: HealthCare,
    },
    {
      title: "Sports & Fitness",
      description:
        "Empowering individuals and organizations with sports and fitness solutions for peak performance.",
      icon: RunningShoes,
    },
  ];

  return (
    <div className='bg-[#EAEDEF]'>
      {/* Heading */}
      <div className='flex justify-center pt-[100px]'>
        <h1 className='font-bold text-[74px] text-[#20222D]'>Industries</h1>
      </div>

      {/* Cards container */}
      <div className='px-[124px] py-10 flex flex-col gap-6'>
        {/* Split cards into 2 rows */}
        {[0, 1].map((rowIndex) => (
          <div key={rowIndex} className='flex justify-between gap-6'>
            {cards.slice(rowIndex * 3, rowIndex * 3 + 3).map((card, i) => (
              <div
                key={i}
                className='relative flex-1 h-[320px] bg-white flex gap-6 py-[75px] px-[37px] rounded-lg 
                           after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[6px] 
                           after:bg-red-600 after:rounded-b-lg after:transition-all after:duration-300 hover:after:w-full'
              >
                {/* Icon */}
                <div className='w-[80px] h-[80px] flex-none flex items-start justify-center'>
                  <img
                    src={card.icon}
                    alt=''
                    className='w-full h-full object-contain'
                  />
                </div>

                {/* Text content */}
                <div className='flex flex-col gap-2'>
                  <h1 className='text-2xl font-bold'>{card.title}</h1>
                  <p className='text-xl font-normal'>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
