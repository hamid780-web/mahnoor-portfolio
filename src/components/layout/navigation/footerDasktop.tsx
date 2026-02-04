import React from 'react'
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";
type footerItem = {
    title?: string;
    icon?: React.ReactNode;
};
const footerItems: footerItem[] = [
    {
        title: "Explore Projects"
    },
    {
        title: "Download Resume"
    },
    {
        title: "Contact"
    },
    {
        icon: <FaGithub />
    }, {
        icon: <FaLinkedin />
    }, {
        icon: <FaFacebook />
    }, {
        icon: <FaYoutube />
    },
];

const FooterDasktop = () => {
    return (
        <footer className='xl:py-[72px] py-14 w-full border-t-[1px] border-[#FFFFFF]  bg-[#121212] hidden lg:flex'>
            <div className='main-cantainer'>
                <div className='flex items-center flex-col justify-center w-full'>
                    <div className='flex flex-col items-center justify-center w-full'>
                        <div className='flex items-center justify-between w-full pb-[42px]'>

                            <div className="flex gap-[40px] xl:gap-[74px]">

                                {
                                    footerItems.filter((item) => item.title).map((item, index) => (
                                        <Link href="/"
                                            key={index}
                                            className=" hover:text-primary font-poppins font-normal tracking-0% leading-[100%] text-[16px]">
                                            {
                                                item.title
                                            } </Link>
                                    ))
                                } </div>

                            <div className="flex xl:gap-10 gap-6 text-2xl">
                                {
                                    footerItems.filter((item) => item.icon).map((item, index) => (
                                        <Link href="/"
                                            key={index}
                                            className="hover:text-primary">
                                            {
                                                item.icon
                                            } </Link>
                                    ))
                                } </div>
                        </div>
                        <div className='border-t border-[#2B3D51] w-full flex items-center justify-between pt-[52px]'>
                            <div>

                                <p className='font-normal text-[14px] leading-none tracking-0% font-inter text-[#D1D5DB]'>
                                    © 2025 [Client Name]. All rights reserved.
                                </p>
                            </div>
                            <div>

                                <h1 className='font-poppins font-normal text-[28px] leading-[36px] tracking-0% text-primary'>Mahnoor</h1>
                            </div>
                            <div className='flex items-center justify-center xl:gap-10  gap-6 '>


                                <Link href="/" className='hover:text-primary font-inter font-normal text-[14px] leading-[100%] tracking-0%'>Terms of Service
                                </Link>
                                <Link href="/" className='hover:text-primary font-inter font-normal text-[14px] leading-[100%] tracking-0%'>Privacy Policy</Link>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </footer>
    )
}

export default FooterDasktop
