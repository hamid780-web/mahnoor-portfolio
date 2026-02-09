import React from "react";
import Image from "next/image";

const CoreCard = () => {
  const items = [
    {
      id: 1,
      title: "3+ Years Experience",
      img: "/images/card_logo.png",
    },
    {
      id: 2,
      title: "150+ Projects Completed",
      img: "/images/card_logo.png",
    },
    {
      id: 3,
      title: "Clients Worldwide",
      img: "/images/card_logo.png",
    },
    {
      id: 4,
      title: "On-Time Delivery",
      img: "/images/card_logo.png",
    },
  ];

  return (
    <section className="section-cantainer">
      <div className="main-cantainer">
        <div className="flex items-center justify-center w-full">
          <div className=" flex flex-col items-center justify-center gap-[51px] w-full">
            <div className="flex items-center justify-center flex-col gap-[15px] w-full ">
              <div data-aos="fade-left" className="sub-title">
                What I Do Best
              </div>
              <h1 data-aos="fade-right" className="heading">
                Core Strengths
              </h1>
              <div className="grid  lg:grid-cols-4 md:grid-cols-2 grid-cols-1 xl:gap-[26px] lg:gap-[22px] gap-[26px] w-full">
                {items.map((item) => (
                  <div
                    data-aos="flip-left"
                    className="w-full h-full flex items-center  text-center gap-7 lg:gap-2.5 border-[0.96px] border-[#EA952A]  bg-[#EA952A73] rounded-tr-[9.57px]  rounded-br-[9.57px]"
                    key={item.id}
                  >
                    <div className="bg-primary p-2 w-[126.61px]   rounded-tr-[81.5px] rounded-br-[81.5px] flex items-center justify-center">
                      <div className="border-2 border-dashed border-black max-w-[112.54px] py-8 px-2  w-full h-full rounded-tr-[81.5px] rounded-br-[81.5px] flex items-center justify-center">
                        <div className="w-full h-full flex items-center justify-center">
                          <Image
                            src={item.img}
                            alt={item.title}
                            width={65}
                            height={65}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex justify-center items-center">
                      <div className=" w-full text-wrap p-2 xl:px-3.5 ">
                        <p className="font-poppins font-normal text-[16px] leading-[22px] xl:text-[20px] xl:leading-[28px] tracking-normal text-center">
                          {item.title}
                        </p>
                      </div>
                    </div>
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

export default CoreCard;
