import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { TbSend } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";
import ContectSlider from "./contectSlider.jsx";

const Contect = () => {
  return (
    <section className="section-cantainer relative">
      <div className="main-cantainer">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex items-center flex-col justify-center w-full gap-4 lg:pb-[51px] pb-8">
            <div data-aos="fade-left" className="sub-title">
              Testimonials
            </div>
            <h1 data-aos="fade-right" className="heading">
              What Clients Say
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[26px] w-full ">
            <div
              data-aos="fade-up"
              className=" rounded-[32.32px] w-full border-[1.35px] border-[#FFFFFF1A] bg-[#121212]  xl:p-[44px] flex flex-col xl:gap-[43px] gap-5 p-5"
            >
              {" "}
              <ContectSlider />
            </div>{" "}
            <div
              data-aos="fade-up"
              className=" rounded-[32.32px] w-full border-[1.35px] border-[#FFFFFF1A] bg-[#121212]  xl:p-[44px] flex flex-col xl:gap-[43px] gap-5 p-5 "
            >
              {/* Title */}
              <h2 className="font-poppins font-bold xl:text-[28.18px] xl:leading-[48.48px] text-[20px] leading-7 tracking-normal  ">
                Get In Touch
              </h2>
              <div className="flex flex-col items-center justify-center w-full xl:gap-[32.32px] gap-4">
                <Input placeholder="Your Name" className="" />

                <Input type="email" placeholder="Your Email" className="" />

                <Textarea placeholder="Your Message" className="" />

                {/* Button */}
                <Button className=" w-full rounded-full text-black bg-primary xl:py-[22px] py-3  hover:opacity-90 font-poppins font-semibold text-[18.32px] leading-[32.32px]">
                  <Image
                    src="/images/Frame.svg"
                    alt="logo"
                    width={26.93}
                    height={26.93}
                  />
                  Send Message
                </Button>
              </div>
              {/* Social Icons */}
              <div className=" flex items-center justify-center gap-3 xl:gap-8">
                {["G", "L", "T", "I"].map((item, i) => (
                  <div
                    key={i}
                    className="md:w-[64.64px] md:h-[64.64px] w-[32px] h-[32px]   rounded-full bg-[#FFFFFF1A] border-[1.35px] border-[#FFFFFF33]  flex items-center justify-center   hover:border-primary  hover:text-primary"
                  >
                    <Link
                      href="/"
                      className="font-inter font-semibold tracking-normal text-[14px] md:text-[16.3px] leading-[26.93px]"
                    >
                      {item}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contect;
