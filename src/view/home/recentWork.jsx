import React from "react";
import Image from "next/image";

const RecentWork = () => {
  const recentWorkData = [
    {
      id: 1,
      title: "Zippapy",
      description:
        "Modern e-commerce platform with real-time inventory  management",
      subTitle: ["React", "Node.js", "MongoDB"],
      img: "/images/resent-1.WEBP",
    },
    {
      id: 2,
      title: "TaskFlow Pro",
      description:
        "Project management dashboard with team collaboration features",
      subTitle: ["React", "Express", "PostgreSQL"],
      img: "/images/desktop.avif",
    },
    {
      id: 3,
      title: "HealthTrack",
      description:
        "Fitness tracking app with personalized workout  recommendations",
      subTitle: ["React Native", "Firebase"],
      img: "/images/resent-1.WEBP",
    },
  ];
  return (
    <section className="section-cantainer relative">
      <div className="absolute top-0 left-0 z-0  hidden lg:flex max-w-[213px] rotate-180">
        <Image src="/images/bg-img.png" alt="logo" width={427} height={427} />
      </div>
      <div className="main-cantainer">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex items-center flex-col justify-center w-full gap-4 lg:pb-[51px] pb-8">
            <div className="sub-title">Portfolio</div>
            <h1 className="heading">Recent Work</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-[53px] gap-4 w-full ">
            {recentWorkData.map((card) => (
              <div
                key={card.id}
                className=" flex flex-col gap-2 md:gap-[25px] px-2.5  pt-2.5  pb-6 justify-center items-center  w-full bg-[#121212] backdrop-opacity-100 border border-[#FFFFFF1A] rounded-[20px]"
              >
                <div className=" w-full h-full  ">
                  {" "}
                  <Image
                    src={card.img}
                    alt="logo"
                    width={360.5}
                    height={221}
                    className="object-cover object-center w-full h-full rounded-[20px]"
                  />
                </div>
                <div className="w-full flex flex-col items-center justify-center gap-2 md:gap-[23px]">
                  <div className="flex flex-col items-center max-w-[259px] text-center w-full justify-center gap-2  md:gap-[15px]">
                    <h1 className="font-poppins font-bold text-[20px] leading-[36px] tracking-normal">
                      {card.title}
                    </h1>
                    <p className="text-[#FFFFFF99] font-normal font-poppins text-[19px] leading-[24px]">
                      {card.description}
                    </p>
                  </div>
                  <div className="flex  items-center justify-center gap-2  md:gap-[20.94px] lg:gap-2 xl:gap-[20.94px]">
                    {card.subTitle.map((tech, index) => (
                      <div
                        key={index}
                        className="border border-[#FFFFFF1A] px-2 py-1 bg-[#FFFFFF0D] rounded-[14660.61px]"
                      >
                        <p className="text-[#FFFFFF99] font-normal font-poppins text-[14px] leading-[23px]">
                          {tech}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
