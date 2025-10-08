import React from 'react'
import Logo from "../assets/finalLogo.png";
import Facebook from "../assets/images/section10/facebook.png";
import Twitter from "../assets/images/section10/twitter.png";
import LinkedIn from "../assets/images/section10/linkedin.png";

export default function SectionTen() {
    return (
        <>
            <div className='bg-[#262835] flex items-start justify-between px-[266px] pt-[98px] pb-[70px]'>
                {/* Contact Us Column */}
                <div className='flex flex-col'>
                    <img src={Logo} alt="" className='w-[350px]' />
                    <div className='text-white mt-12'>
                        <h1 className='text-4xl font-semibold pb-2'>Contact Us</h1>
                        <h1 className='text-lg font-bold text-gray-500'>Tel: +1 (800) 826-8018</h1>
                        <h1 className='text-lg font-bold text-gray-500'>Email: info@appicoders.com</h1>
                    </div>
                    <div className='flex gap-5 mt-5'>
                        <img src={Facebook} alt="" className='h-[30px]' />
                        <img src={Twitter} alt="" className='h-[30px]' />
                        <img src={LinkedIn} alt="" className='h-[30px]' />
                    </div>
                </div>

                {/* About Column */}
                <div className='text-white flex flex-col mt-12'>
                    <h1 className='text-4xl font-semibold'>About</h1>
                    <div className='mt-10 flex flex-col gap-3'>
                        <h1 className='text-lg font-bold text-gray-500'>Home</h1>
                        <h1 className='text-lg font-bold text-gray-500'>About Us</h1>
                        <h1 className='text-lg font-bold text-gray-500'>Contact</h1>
                    </div>
                </div>

                {/* Services Column */}
                <div className='text-white flex flex-col mt-12'>
                    <h1 className='text-4xl font-semibold'>Appicoders Services</h1>
                    <div className='mt-10 flex flex-col gap-3'>
                        <h1 className='text-lg font-bold text-gray-500'>iPHONE APPLICATION DEVELOPMENT</h1>
                        <h1 className='text-lg font-bold text-gray-500'>ANDROID APPLICATION DEVELOPMENT</h1>
                        <h1 className='text-lg font-bold text-gray-500'>ENTERPRISE APP DEVELOPMENT</h1>
                    </div>
                </div>
            </div>

            <div className='bg-[#262835] text-center border-t border-white'>
                <h1 className='text-lg font-bold text-gray-500 py-[30px]'>© 2025 APPICODERS. ALL RIGHTS RESERVED.</h1>
            </div>
        </>
    )
}
