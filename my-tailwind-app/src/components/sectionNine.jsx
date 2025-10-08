import React from 'react'
import Footer from "../assets/images/section9/footer.png";
import Vector from "../assets/images/section9/Vector.png";


export default function sectionNine() {
    return (
        <>
            <div className='bg-[#E01923] flex '>
                <div className='w-[1111px] flex items-center justify-center'>

                    <div className='text-white w-[827px]'>
                        <h1 className='font-semibold text-4xl'>LET’S TALK</h1>
                        <h1 className='font-Bold text-[52px] pt-[3px]'>Got an idea? Let’s get in touch!</h1>
                        <h1 className='font-semibold text-3xl pt-[14px]'>Have queries? Not sure of your App Strategy? Discuss with us and we'll guide you the way forward.</h1>
                        <input type="text" placeholder='Your Name' className='bg-white h-[65px] w-[826px] pl-3 text-2xl rounded-lg mt-[30px]' />
                        <input type="text" placeholder='Email Address' className='bg-white h-[65px] w-[826px] pl-3 text-2xl rounded-lg mt-[30px]' />
                        <input type="text" placeholder='Phone' className='bg-white h-[65px] w-[826px] pl-3 text-2xl rounded-lg mt-[30px]' />
                        <input type="text" placeholder='Message' className='bg-white h-[300px] w-[826px] pl-3 text-2xl rounded-lg mt-[30px]' />
                        <button
                            className="w-[826px] h-[74px] flex items-center justify-center font-bold text-2xl bg-black mt-[50px] rounded"
                            style={{
                                border: "39px solid",
                                borderImageSource: "linear-gradient(291.71deg, rgba(255, 0, 0, 0.3) 11.53%, rgba(255, 0, 0, 0) 39.02%)",
                                borderImageSlice: 1,
                            }}
                        >
                            LET’S GET IN TOUCH
                        </button>


                    </div>
                </div>
                <div className="w-[809px] overflow-hidden relative">
                    <div>

                        <img
                            src={Footer}
                            alt=""
                            className="w-full h-[763px] object-cover object-top translate-y-[-3%]"
                        />
                    </div>
                    <div className='text-white text-center flex flex-col items-center justify-center'>
                        <h1 className='text-[28px] font-semibold pt-10'>Please submit your inquiry and our App Development Strategist will contact you shortly</h1>
                        <img src={Vector} alt="" className='h-20 pt-5' />
                        <h1 className='text-5xl font-bold pt-[50px]'>+1-(800) 826 8018</h1>
                        <h1 className='text-[22px] font-normal pb-[40px]'>info@appicoders.com</h1>
                    </div>
                </div>

            </div>
        </>
    )
}
