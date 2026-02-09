"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const services = [
  {
    title: "End-to-End Development",
    desc: "From concept to deployment handling frontend & backend",
    img: "/images/core-1.png",
  },
  {
    title: "Modern Tech Stack",
    desc: "React, Next.js, Node.js, MongoDB, TypeScript, TailwindCSS",
    img: "/images/core-1.png",
  },
  {
    title: "Performance Optimization",
    desc: "Fast, scalable, and secure web solutions.",
    img: "/images/core-1.png",
  },
];

const ServicesSlider = () => {
  return (
    <section className="section-cantainer relative">
      <div className="main-cantainer">
        <div className="absolute top-2.5 right-0 z-0  hidden lg:flex max-w-[192px]">
          <Image src="/images/bg-img.png" alt="logo" width={192} height={427} />
        </div>
        <div className="flex items-center flex-col justify-center w-full gap-4 lg:pb-[51px] pb-8">
          <div data-aos="fade-left" className="sub-title">
            What I Offer
          </div>
          <h1 data-aos="fade-right" className="heading">
            My Services
          </h1>
        </div>

        <Swiper
          data-aos="fade-up"
          modules={[Navigation, Pagination]}
          centeredSlides
          slidesPerView={1}
          navigation={{
            prevEl: ".swiper-prev",
            nextEl: ".swiper-next",
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="services-swiper  "
        >
          <div className="swiper-prev absolute left-2 top-1/2 -translate-y-1/2 hidden lg:flex bg-black text-white w-[64px] h-[64px]  items-center justify-center rounded-full z-20">
            <FaAngleLeft size={28} />
          </div>
          <div className="swiper-next  absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black text-white w-[64px] h-[64px] hidden lg:flex items-center justify-center rounded-full">
            <FaAngleRight size={28} />
          </div>
          {services.map((item, i) => (
            <SwiperSlide key={i}>
              {({ isActive }) => (
                <div
                  className={`rounded-[19.35px] mb-8 bg-gradient-to-t from-[#282828] to-[#0A0A0A] border border-[#FFFFFF1A] px-[24px] py-[28px]  sm:py-[60px] lg:py-[35px] xl:py-[86px] xl:px-[60px] text-center  transition-all duration-300  ${
                    isActive ? "scale-90 shadow-xl" : "scale-80 "
                  }`}
                >
                  {/* Icon */}
                  <div className="mx-auto mb-6 flex h-[100px] w-[100px] lg:w-[136px] lg:h-[136px] items-center justify-center rounded-full bg-[#252525]">
                    <div className="max-w-[136px] max-h-[136px] w-full h-full flex items-center justify-center">
                      <Image
                        src={item.img}
                        alt="logo"
                        width={66.12}
                        height={66.12}
                      />
                    </div>
                  </div>

                  <h3 className="mb-3 text-[19px] leading-[27px] font-medium font-poppins tracking-normal">
                    {item.title}
                  </h3>

                  <p className=" text-[15px] leading-[23px] font-normal font-poppins tracking-normal">
                    {item.desc}
                  </p>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default ServicesSlider;
