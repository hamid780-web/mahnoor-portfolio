"use client";

import { motion } from "framer-motion";
import { div, section } from "framer-motion/client";
import Image from "next/image";

const ExperienceTimeline = () => {
  const experienceData = [
    {
      year: "2024 – Present",
      role: "Full Stack Developer",
      desc: "Building client-based web apps and services with modern technologies",
    },
    {
      year: "2022 – 2023",
      role: "React Developer",
      desc: "Worked on frontend frameworks and UI systems for enterprise applications",
    },
    {
      year: "2020 – 2022",
      role: "Web Developer Intern",
      desc: "Learned MERN basics and responsive layouts through hands-on projects",
    },
  ];

  return (
    <section className="section-cantainer relative">
      <div className="absolute bottom-[24px] right-0 z-0  hidden lg:flex max-w-[243px] ">
        <Image src="/images/timeLine.png" alt="logo" width={427} height={427} />
      </div>
      <div className="main-cantainer">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex items-center flex-col justify-center w-full gap-4 lg:pb-[51px] pb-8">
            <div className="sub-title">Career Journey</div>
            <h1 className="heading">Experience Timeline</h1>
          </div>
          <div className="flex items-center justify-center w-full relative">
            <div className=" absolute left-12 top-0 h-full w-[2px] bg-primary lg:flex hidden" />
            <div className="flex lg:pl-[111px] flex-col items-center justify-center w-full gap-4 lg:gap-7 xl:gap-[66.43px]">
              {experienceData.map((item, index) => (
                <div
                  key={index}
                  className="xl:py-[40px] xl:px-[25px] px-5 py-[30px] bg-[#121212] border-[1.38px] border-[#FFFFFF1A] rounded-[22.14px] w-full relative"
                >
                  <span className="absolute -left-[70px] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-[#9333EA] lg:flex hidden" />
                  <div className="flex flex-col gap-2 lg:gap-0">
                    <span className="text-primary font-poppins font-semibold lg:text-[18.92px] lg:leading-[33.21px] tracking-normal">
                      {item.year}
                    </span>
                    <h3 className="font-poppins font-bold xl:text-[28.38px] xl:leading-[44.29px] lg:text-[24px] lg:leading-[36px] md:text-[20px] md:leading-[30px] tracking-normal">
                      {item.role}
                    </h3>
                    <p className="font-poppins font-normal lg:text-[18.92px] lg:leading-[35.98px] tracking-normal text-[#FFFFFF99]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ExperienceTimeline;
