import React from "react";
import Image from "next/image";

const MySkills = () => {
  const skillsData = [
    {
      id: 1,
      title: "FrontEnd",
      description:
        "My unmatched front-end skills and quality UI/UX designs that utilizes perfect color combinations will not only attract your customers but will also help you to generate revenues as well.",
      section: "Languages i speak:",
      items: [
        { id: 1, name: "React Native", img: "/images/Frame.png" },
        { id: 2, name: "Next.js", img: "/images/Frame(1).png" },
        { id: 3, name: "Hugo", img: "/images/Frame(2).png" },
        { id: 4, name: "Vue.js", img: "/images/Frame(3).png" },
        { id: 5, name: "Gatsby.js", img: "/images/Frame(4).png" },
        { id: 6, name: "Nuxt.js", img: "/images/Frame(5).png" },
        { id: 7, name: "Redux", img: "/images/Frame(6).png" },
        { id: 8, name: "React Native", img: "/images/Frame.png" },
        { id: 9, name: "Next.js", img: "/images/Frame(1).png" },
        { id: 10, name: "Hugo", img: "/images/Frame(2).png" },
        { id: 11, name: "Vue.js", img: "/images/Frame(3).png" },
        { id: 12, name: "Gatsby.js", img: "/images/Frame(4).png" },
        { id: 13, name: "Nuxt.js", img: "/images/Frame(5).png" },
        { id: 14, name: "Redux", img: "/images/Frame(6).png" },
      ],
    },

    {
      id: 2,
      title: "Back End",
      description:
        "Back-end of any website is like the backbone in the human body. My structured and short coded quality back-end work will make your pages load faster and be easier to manage.",
      section: "Languages i speak:",
      items: [
        { id: 1, name: "Node.js", img: "/images/Frame(7).png" },
        { id: 2, name: "Express.js", img: "/images/Frame(8).png" },
        { id: 3, name: "FastAPI", img: "/images/Frame(9).png" },
        { id: 4, name: "Ruby", img: "/images/Frame(10).png" },
        { id: 5, name: "Php", img: "/images/Frame(11).png" },
        { id: 6, name: "Django", img: "/images/Frame(12).png" },
        { id: 7, name: "Flask", img: "/images/Frame(13).png" },
        { id: 8, name: "Node.js", img: "/images/Frame(7).png" },
        { id: 9, name: "Express.js", img: "/images/Frame(8).png" },
        { id: 10, name: "FastAPI", img: "/images/Frame(9).png" },
        { id: 11, name: "Ruby", img: "/images/Frame(10).png" },
        { id: 12, name: "Php", img: "/images/Frame(11).png" },
        { id: 13, name: "Django", img: "/images/Frame(12).png" },
        { id: 14, name: "Flask", img: "/images/Frame(13).png" },
        { id: 15, name: "Node.js", img: "/images/Frame(7).png" },
        { id: 16, name: "Express.js", img: "/images/Frame(8).png" },
        { id: 17, name: "FastAPI", img: "/images/Frame(9).png" },
        { id: 18, name: "Ruby", img: "/images/Frame(10).png" },
      ],
    },
    {
      id: 3,
      title: "DevOps",
      description:
        "By DevOps practices I am able to shorten the development cycle of your company’s software which will in turn save you time, money and make your work clean and well structured.",
      section: "Cloud / Tools:",
      items: [
        { id: 1, name: "AWS", img: "/images/Frame(14).png" },
        { id: 2, name: "DigitalOcean", img: "/images/Frame(15).png" },
        { id: 3, name: "Heroku", img: "/images/Frame(16).png" },
        { id: 4, name: "Docker", img: "/images/Frame(17).png" },
        { id: 5, name: "Apache", img: "/images/Frame(18).png" },
        { id: 6, name: "Nginx", img: "/images/Frame(19).png" },
        { id: 7, name: "Linux", img: "/images/Frame(20).png" },
        { id: 8, name: "AWS", img: "/images/Frame(14).png" },
        { id: 9, name: "DigitalOcean", img: "/images/Frame(15).png" },
        { id: 10, name: "Heroku", img: "/images/Frame(16).png" },
        { id: 11, name: "Docker", img: "/images/Frame(17).png" },
      ],
    },
  ];

  return (
    <section className="section-cantainer relative">
      <div className="absolute top-[41px] left-0 z-0  hidden lg:flex max-w-[192px]">
        <Image src="/images/skills-1.png" alt="logo" width={192} height={427} />
      </div>
      <div className="main-cantainer">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex items-center flex-col justify-center w-full gap-4 lg:pb-[51px] pb-8">
            <div data-aos="fade-left" className="sub-title">
              Technical Expertise
            </div>
            <h1 data-aos="fade-right" className="heading">
              My Skills
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-[38px] gap-4 w-full ">
            {skillsData.map((group) => (
              <div
                key={group.id}
                data-aos="flip-left"
                className="p-5 flex flex-col md:gap-[23.25px] gap-4 w-full bg-[#121212] backdrop-opacity-100 border-[0.97px] border-[#2A2A2A] rounded-[9.69px]"
              >
                <h3 className="font-inter text-[21.25px] md:text-[23.25px] leading-[27px] md:leading-[31px] tracking-normal  font-medium">
                  {group.title}
                </h3>
                <div className="border-[0.48px] border-[#2A2A2A] xl:max-w-[325.5px] w-full" />
                <p className="md:text-[15.5px] text-[13.5px] leading-[19.5px] md:leading-[23.25px] tracking-normal font-poppins font-normal">
                  {group.description}
                </p>
                <h6 className="md:text-[17.44px] text-[15.44px] leading-[19.25px]  md:leading-[23.25px] tracking-normal font-poppins font-normal">
                  {group.section}{" "}
                </h6>
                <div className="flex flex-wrap  gap-[15.5px] xl:mb-[71px] ">
                  {group.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-center gap-1.5  md:gap-[9.69px] rounded-[19.38px] p-1.5 md:p-[9.69px] border-[0.48px] border-[#4D4D4D] bg-[#1F1F1F]"
                    >
                      <div className="max-w-[15.5px]">
                        <Image
                          src={item.img}
                          alt="logo"
                          width={15.5}
                          height={15.5}
                        />
                      </div>
                      <p className="text-[11.63px] leading-[19.38px] tracking-normal font-poppins font-normal">
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
