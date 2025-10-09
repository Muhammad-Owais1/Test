import React from "react";
import GroupedRectangle from "../assets/images/section2/GroupedRectangle.png";
import BlurBg from "../assets/images/section2/Background.png";
import Laptop from "../assets/images/section2/Laptop.png";
import icon1 from "../assets/images/section2/icon1.png";
import icon2 from "../assets/images/section2/icon2.png";
import icon3 from "../assets/images/section2/icon3.png";
import icon4 from "../assets/images/section2/icon4.png";
import icon5 from "../assets/images/section2/icon5.png";
import icon6 from "../assets/images/section2/icon6.png";
import ios from "../assets/images/section2/ios.png";
import andriod from "../assets/images/section2/android.png";
import one from "../assets/images/section2/1.png";
import two from "../assets/images/section2/2.png";
import three from "../assets/images/section2/3.png";

export default function sectionTwo() {
  return (
    <>
      {/* <div className='flex justfy-center px-[128px] '>
                <div className='w-[822px] pt-[150px]'>
                    <h1 className='text-[64px] font-bold'>
                        <span className='text-[#E01923]'>Appicoders</span> – #<span className='text-[#E01923]'>1</span>. Mobile App & Web Development Company in USA
                    </h1>

                </div>
                <div className='w-[834px] pt-[178px]'>
                    <h1 className='text-[28px] font-semibold pb-9'>
                        Welcome to Appicoders, your trusted partner for expert mobile app and web development. With over 10+ years of experience, we specialize in designing, developing, and marketing cutting-edge solutions for all major mobile platforms, including Android, iOS, and Windows.
                    </h1>
                    <button className="h-[74px] w-[368px] flex items-center justify-center bg-black text-white text-2xl font-semibold">
                        Read More
                    </button>
                </div>
            </div>
            <div className="relative w-full text-white">
                <img
                    src={GroupedRectangle}
                    alt="Grouped Rectangle"
                    className="w-full h-auto object-cover"
                />

                <div className="absolute top-0 left-0 w-full h-full"></div>

                <div className='absolute top-[550px] z-50 '>
                    <div className='pl-[124px]'>
                        <h1 className='text-[74px] font-bold'>Our Services</h1>
                        <h1 className='text-[36px] font-semibold'>Get to know about what we’re good at.</h1>
                    </div>
                    <div className='flex '>
                        <div className='pl-[124px]'>
                            <div className='flex items-center pt-[60px]'>
                                <div className='pr-5'>
                                    <img src={icon1} alt="" className='h-[100px]' />
                                </div>
                                <div>
                                    <div><h1 className='text-3xl font-bold'>Custom Mobile Appication</h1></div>
                                    <div><h1 className='text-2xl font-semibold'>iOS, Android and Wearable Apps</h1></div>
                                </div>
                            </div>
                            <div className='flex items-center pt-[60px]'>
                                <div className='pr-5'>
                                    <img src={icon2} alt="" className='h-[100px]' />
                                </div>
                                <div>
                                    <div><h1 className='text-3xl font-bold'>Custom Web Development</h1></div>
                                    <div><h1 className='text-2xl font-semibold'>Robust Webs, Progressive Web Apps</h1></div>
                                </div>
                            </div>
                            <div className='flex items-center pt-[60px]'>
                                <div className='pr-5'>
                                    <img src={icon3} alt="" className='h-[100px]' />
                                </div>
                                <div>
                                    <div><h1 className='text-3xl font-bold'>Augmented Reality</h1></div>
                                    <div><h1 className='text-2xl font-semibold'>Futuristic AR Apps</h1></div>
                                </div>
                            </div>
                        </div>
                        <div className='pl-10'>
                            <div className='flex items-center pt-[60px]'>
                                <div className='pr-5'>
                                    <img src={icon4} alt="" className='h-[100px]' />
                                </div>
                                <div>
                                    <div><h1 className='text-3xl font-bold'>Artificial Intelligence</h1></div>
                                    <div><h1 className='text-2xl font-semibold'>Innovative AI & ML Solutions</h1></div>
                                </div>
                            </div>
                            <div className='flex items-center pt-[60px]'>
                                <div className='pr-5'>
                                    <img src={icon5} alt="" className='h-[100px]' />
                                </div>
                                <div>
                                    <div><h1 className='text-3xl font-bold'>Blockchain Development</h1></div>
                                    <div><h1 className='text-2xl font-semibold'>Custom Blockchain Solutions</h1></div>
                                </div>
                            </div>
                            <div className='flex items-center pt-[60px]'>
                                <div className='pr-5'>
                                    <img src={icon6} alt="" className='h-[100px]' />
                                </div>
                                <div>
                                    <div><h1 className='text-3xl font-bold'>MVP Development</h1></div>
                                    <div><h1 className='text-2xl font-semibold'>For Startups & Entrepreneurs</h1></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 */}

      <section>
        <div className="relative z-10 bg-white flex justfy-center gap-10 md:flex-row flex-col 2xl:px-[128px] md:px-[60px] px-[30px] 2xl:py-[50px] py-[30px]">
          <div className="md:w-2/4 w-full">
            <h1 className="2xl:text-[64px] text-[40px] text-[#20222D] font-bold">
              <span className="text-[#E01923]">Appicoders</span> – #
              <span className="text-[#E01923]">1</span>. Mobile App & Web
              Development Company in USA
            </h1>
          </div>
          <div className="md:w-2/4 w-full">
            <h1 className="2xl:text-[28px] text-[18px] font-semibold pb-9 text-[#20222D]">
              Welcome to Appicoders, your trusted partner for expert mobile app
              and web development. With over 10+ years of experience, we
              specialize in designing, developing, and marketing cutting-edge
              solutions for all major mobile platforms, including Android, iOS,
              and Windows.
            </h1>
            <button
              className="h-[74px] w-[368px] 2xl:flex hidden items-center justify-center text-white text-2xl font-semibold rounded bg-black"
              style={{
                border: "39px solid",
                borderImageSource:
                  "linear-gradient(291.71deg, rgba(255, 0, 0, 0.3) 11.53%, rgba(255, 0, 0, 0) 39.02%)",
                borderImageSlice: 1,
              }}
            >
              Read More
            </button>

            <button
              className="h-2 w-[270px] flex 2xl:hidden items-center justify-center text-white text-xl font-semibold rounded bg-black"
              style={{
                border: "30px solid",
                borderImageSource:
                  "linear-gradient(291.71deg, rgba(255, 0, 0, 0.3) 11.53%, rgba(255, 0, 0, 0) 39.02%)",
                borderImageSlice: 1,
              }}
            >
              Read More
            </button>
          </div>
        </div>
        <div>
          <div className="relative z-10 bg-red-500 lg:bg-transparent  2xl:py-0 md:py-20 py-36 ">
            <img className="" src={GroupedRectangle} />
            <div className="absolute top-2/4 -translate-y-2/4 flex justify-between w-full">
              <div className="md:w-2/4 w-full flex justify-center flex-col h-0 text-white">
                <div className="2xl:pl-[124px] md:pl-[70px] pl-[20px] mb:pb-0 pb-10">
                  <h1 className="2xl:text-[74px] text-[40px] font-bold md:leading-tight leading-none">
                    Our Services
                  </h1>
                  <h1 className="2xl:text-[36px] text-[20px] font-semibold md:pb-2 pb-0">
                    Get to know about what we’re good at.
                  </h1>
                </div>
                <div className="flex lg:flex-row flex-col gap-3 bubbles-con">
                  <div className="2xl:pl-[124px] md:pl-[70px] pl-[20px] flex flex-col gap-3">
                    <div className="flex items-center md:pt-[60px] pt-0 2xl:w-[490px] w-[300px]">
                      <div className="pr-5">
                        <img
                          src={icon1}
                          alt=""
                          className="2xl:w-[100px] w-[60px]"
                        />
                      </div>
                      <div>
                        <div>
                          <h1 className="2xl:text-3xl text-xl font-bold whitespace-nowrap">
                            Custom Mobile Appication
                          </h1>
                        </div>
                        <div>
                          <h1 className="2xl:text-2xl text-base font-semibold whitespace-nowrap">
                            iOS, Android and Wearable Apps
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center md:pt-[60px] pt-0">
                      <div className="pr-5">
                        <img
                          src={icon2}
                          alt=""
                          className="2xl:w-[100px] w-[60px]"
                        />
                      </div>
                      <div>
                        <div>
                          <h1 className="2xl:text-3xl text-xl font-bold whitespace-nowrap">
                            Custom Web Development
                          </h1>
                        </div>
                        <div>
                          <h1 className="2xl:text-2xl text-base font-semibold whitespace-nowrap">
                            Robust Webs, Progressive Web Apps
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center md:pt-[60px] pt-0">
                      <div className="pr-5">
                        <img
                          src={icon3}
                          alt=""
                          className="2xl:w-[100px] w-[60px]"
                        />
                      </div>
                      <div>
                        <div>
                          <h1 className="2xl:text-3xl text-xl font-bold whitespace-nowrap">
                            Custom Web Development
                          </h1>
                        </div>
                        <div>
                          <h1 className="2xl:text-2xl text-base font-semibold whitespace-nowrap">
                            Robust Webs, Progressive Web Apps
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="2xl:pl-[124px] md:pl-[70px] pl-[20px] flex flex-col gap-3">
                    <div className="flex items-center md:pt-[60px] pt-0 2xl:w-[490px] w-[300px]">
                      <div className="pr-5">
                        <img
                          src={icon4}
                          alt=""
                          className="2xl:w-[100px] w-[60px]"
                        />
                      </div>
                      <div>
                        <div>
                          <h1 className="2xl:text-3xl text-xl font-bold whitespace-nowrap">
                            Artificial Intelligence
                          </h1>
                        </div>
                        <div>
                          <h1 className="2xl:text-2xl text-base font-semibold whitespace-nowrap">
                            Innovative AI & ML Solutions
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center md:pt-[60px] pt-0">
                      <div className="pr-5">
                        <img
                          src={icon5}
                          alt=""
                          className="2xl:w-[100px] w-[60px]"
                        />
                      </div>
                      <div>
                        <div>
                          <h1 className="2xl:text-3xl text-xl font-bold whitespace-nowrap">
                            Blockchain Development
                          </h1>
                        </div>
                        <div>
                          <h1 className="2xl:text-2xl text-base font-semibold whitespace-nowrap">
                            Custom Blockchain Solutions
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center md:pt-[60px] pt-0">
                      <div className="pr-5">
                        <img
                          src={icon6}
                          alt=""
                          className="2xl:w-[100px] w-[60px]"
                        />
                      </div>
                      <div>
                        <div>
                          <h1 className="2xl:text-3xl text-xl font-bold whitespace-nowrap">
                            Blockchain Development
                          </h1>
                        </div>
                        <div>
                          <h1 className="2xl:text-2xl text-base font-semibold whitespace-nowrap">
                            Custom Blockchain Solutions
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-2/4 hidden md:block relative ">
                <img src={Laptop} className="w-full absolute top-[-53.35vw]" />
              </div>
            </div>
          </div>
          <div className="relative lg:flex hidden justify-center items-end h-[19vw]">
            <div className="w-2/4 pl-20 pb-10 flex flex-col gap-4">
              <div className="flex gap-4">
                <div className="bg-white h-[40px] w-[120px] rounded-md text-[#E01923] text-[10px] font-bold flex justify-center items-center ">
                  iOS Development
                </div>
                <div className="bg-white h-[40px] w-[120px] rounded-md text-[#E01923] text-[10px] font-bold flex justify-center items-center ">
                  iOS Development
                </div>
                <div className="bg-white h-[40px] w-[120px] rounded-md text-[#E01923] text-[10px] font-bold flex justify-center items-center ">
                  iOS Development
                </div>
              </div>
              <h1 className="2xl:text-[48px] text-[20px] font-bold text-white 2xl:leading-[50px] leading-tight">
                Caviar - Order Food <br /> Delivery
              </h1>
              <p className="2xl:text-[26px] text-[15px] font-semibold 2xl:leading-[36px] leading-tight text-[#FFFFFF]">
                Get Food delivered from curated lists of local restaurants right
                at your fingertips with Caviar. Enjoy quality dining at home and
                make any night a special occasion.
              </p>
              <div className="flex gap-5">
                <img src={ios} alt="" className="2xl:h-[54px] h-[40px]" />
                <img src={andriod} alt="" className="2xl:h-[54px] h-[40px]" />
              </div>
              <button className="2xl:h-[74px] h-[50px] 2xl:w-[367px] w-[250px] bg-[#750101] 2xl:text-2xl text-lg font-bold text-white">
                VIEW CASE STUDY
              </button>
            </div>
            <div className="w-2/4 flex flex-col items-center">
              <img src={one} alt="" className="2xl:w-[39%] w-[45%]" />
              <img src={two} alt="" className="2xl:w-[39%] w-[45%]" />
              <img src={three} alt="" className="2xl:w-[39%] w-[45%]" />
            </div>

            <img
              className="absolute 2xl:-top-[26vw] -top-[32vw] left-0 -z-10"
              src={BlurBg}
            />
          </div>
        </div>
      </section>
    </>
  );
}
