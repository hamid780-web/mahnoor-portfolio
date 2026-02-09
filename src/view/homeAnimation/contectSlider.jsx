"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { IoMdPause } from "react-icons/io";

const ContectSlider = () => {
  const testimonials = [
    {
      text: "Great work, highly recommended! Dipto delivered exceptional results and exceeded our expectations.",
      name: "James Thompson",
      role: "CEO, TechStart",
      image: "/images/img.jpg",
      rating: 5,
    },
    {
      text: "Great work, highly recommended! Dipto delivered exceptional results and exceeded our expectations.",
      name: "Sarah Wilson",
      role: "Founder, Creatify",
      image: "/images/img-1.jpg",
      rating: 5,
    },
    {
      text: "Great work, highly recommended! Dipto delivered exceptional results and exceeded our expectations.",
      name: "Sarah Wilson",
      role: "Founder, Creatify",
      image: "/images/img.jpg",
      rating: 5,
    },
    {
      text: "Great work, highly recommended! Dipto delivered exceptional results and exceeded our expectations.",
      name: "Sarah Wilson",
      role: "Founder, Creatify",
      image: "/images/img-1.jpg",
      rating: 5,
    },
  ];
  return (
    <div className="flex flex-col w-full xl:gap-[43px] gap-5">
      {/* Heading */}
      <h2 className="font-poppins font-bold xl:text-[28.18px] xl:leading-[48.48px] text-[20px] leading-7 tracking-normal ">
        What Clients Say
      </h2>{" "}
      <div className="text-primary text-2xl font-bold">
        <IoMdPause />
      </div>
      <Carousel
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 3000, // ⏱ 3 sec
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {testimonials.map((item, index) => (
            <CarouselItem key={index}>
              <div className="">
                <div className="xl:pb-[91px] pb-4 max-w-[440px] w-full ">
                  <p className="xl:text-[19px] xl:leading-[33px] font-normal font-poppins">
                    {item.text}
                  </p>
                </div>

                <div className="flex items-center gap-2.5 md:gap-[21px] pb-8">
                  <div className="relative  rounded-full w-full h-full border-[2.69px] border-primary max-w-[86.19px] max-h-[86.19px] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={86.19}
                      height={86.19}
                      className="object-cover object-center w-full h-full"
                    />
                  </div>

                  <div>
                    <p className="font-semibold md:text-sm font-poppins lg:text-[19.44px] leading-7 md:leading-[32.32px] tracking-normal">
                      {item.name}
                    </p>
                    <p className="text-sm font-normal text-[#FFFFFF99] md:text-sm font-poppins lg:text-[15.55px] leading-5 md:leading-[26.93px] tracking-normal">
                      {item.role}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1.5">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <p
                      key={i}
                      className="fill-[#FACC15] font-inter text-[22.39px] font-normal text-[#FACC15]"
                    >
                      ⭐
                    </p>
                  ))}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Controls */}
        <div className="xl:mt-10 mt-4 flex justify-center gap-4">
          <CarouselPrevious className="md:p-4 static translate-y-0  bg-[#FFFFFF1A] text-white border-[1.35px] border-[#FFFFFF33] hover:bg-white/20" />
          <CarouselNext className=" md:p-4 static translate-y-0  bg-[#FFFFFF1A] text-white border-[1.35px] border-[#FFFFFF33] hover:bg-white/20" />
        </div>
      </Carousel>
    </div>
  );
};

export default ContectSlider;
