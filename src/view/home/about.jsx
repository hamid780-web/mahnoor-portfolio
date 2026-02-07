import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const About = () => {
  return (
    <section className="section-cantainer relative">
      <div className="main-cantainer">
        <div className="absolute top-[-170px] left-0 z-0  hidden lg:flex max-w-[213px] rotate-180">
          <Image src="/images/bg-img.png" alt="logo" width={427} height={427} />
        </div>
        <div className="flex justify-between  w-full flex-col-reverse lg:flex-row gap-10 lg:gap-0">
          <div className="w-full flex  ">
            <div className="lg:max-w-[457px] w-full">
              <h1 className="font-poppins font-semibold text-[23px] leading-[26px] sm:text-[30px] sm:leading-[48px] tracking-normal  text-primary pb-2.5">
                About Me
              </h1>
              <p className="font-poppins font-medium  xl:text-[20px] text-[14px] leading-[20px] sm:text-[16px] sm:leading-6 xl:leading-[29px] tracking-normalfont-poppins  pb-[15px]">
                I'm a passionate MERN Stack Developer with a keen eye for design
                and a love for creating seamless user experiences. With
                expertise in modern web technologies, I transform ideas
              </p>
              <p className="font-poppins font-medium  pb-[20px] md:pb-[25px]  xl:pb-[37px] xl:text-[20px] text-[14px] leading-[20px] sm:text-[16px] sm:leading-6 xl:leading-[29px] tracking-normal">
                My approach combines technical excellence with creative
                problem-solving, ensuring every project not only works
                flawlessly but also looks stunning.
              </p>
              <div>
                <Button className="font-inter font-medium md:text-[20px]  md:leading-[29px] text-[14px] leading-[20px] tracking-normal text-center bg-primary text-black hover:bg-primary/90 ">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-center relative">
            <div className=" w-full flex flex-col items-center justify-center gap-8 xl:gap-0 ">
              <div className="grid grid-cols-2 gap-8 xl:gap-0">
                <div className="flex items-center justify-center">
                  <Image
                    src="/images/about-3.png"
                    alt="logo"
                    width={243}
                    height={255}
                  />
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/images/about-2.png"
                    alt="logo"
                    width={73.77}
                    height={106.2}
                  />
                </div>
              </div>

              <div className="absolute max-w-[110px] max-h-[110px] sm:max-w-[203px] sm:max-h-[203px] w-full h-full rounded-full bg-black flex items-center justify-center">
                <Image
                  src="/images/about-4.png"
                  alt="logo"
                  width={198.29}
                  height={198.25}
                />
                <div className="absolute max-w-[137.31px] flex flex-col items-center justify-center text-center ">
                  <Image
                    src="/images/about-logo.svg"
                    alt="logo"
                    width={46}
                    height={46}
                  />
                  <p className="font-poppins text-[16px] leading-[22px] font-medium tracking-normal hidden sm:flex">
                    15+ Projects Completed
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 xl:gap-0">
                <div className="flex items-center justify-center">
                  <Image
                    src="/images/about-2.png"
                    alt="logo"
                    width={73.77}
                    height={106.2}
                  />
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/images/about-5.png"
                    alt="logo"
                    width={243}
                    height={255}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
