"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const ExperienceTimeline = () => {
  const ref = useRef(null);

  // scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const smoothHeight = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  const height = useTransform(smoothHeight, [0, 0.8], ["0%", "100%"]);
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
      <div className="main-cantainer ">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex items-center flex-col justify-center w-full gap-4 lg:pb-[51px] pb-8">
            <div data-aos="fade-left" className="sub-title">
              Career Journey
            </div>
            <h1 data-aos="fade-right" className="heading">
              Experience Timeline
            </h1>
          </div>
          <div
            ref={ref}
            className=" flex items-center justify-center w-full relative"
          >
            <div className="absolute left-12 top-0  h-full w-[5px] rounded-2xl bg-primary lg:flex hidden opacity-10" />
            <motion.div
              style={{ height, smoothHeight }}
              transition={{ delay: 10 }}
              className=" absolute left-12 top-0  h-full w-[5px] rounded-2xl bg-primary lg:flex hidden"
            >
              <div className="absolute top-0 -left-1.5 flex flex-col items-center lg:gap-44 xl:gap-[243.57px]">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className=" w-4 h-4 rounded-full bg-primary ring-4 ring-[#9333EA] lg:flex hidden"
                  />
                ))}
              </div>
            </motion.div>

            <div className="flex lg:pl-[111px] flex-col items-center justify-center w-full gap-4 lg:gap-7 xl:gap-[66.43px]">
              {experienceData.map((item, index) => (
                <div
                  data-aos="fade-left"
                  key={index}
                  className="xl:py-[40px] xl:px-[25px] px-5 py-[30px] bg-[#121212] border-[1.38px] border-[#FFFFFF1A] rounded-[22.14px] w-full relative"
                >
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
