import React from 'react'
import { Button } from '@/components/ui/button'
import { MdOutlineFileDownload } from "react-icons/md";
import Image from 'next/image';

const Hero = () => {
    return (
        <section className='xl:pt-[176px] xl:pb-[100px] pb-8 pt-28 lg:h-screen w-full flex items-center justify-center relative'>
            <div className='main-cantainer'>
                <div className='absolute bottom-0 left-0 lg:flex hidden '><Image src='/images/hero-3.png' alt='logo' width={200} height={170} /></div>
                <div className='flex flex-col-reverse lg:flex-row items-center gap-5 justify-between '>
                    <div className='flex  flex-col w-full '>
                        <div className='max-w-[657px] w-full'>
                            <h1 className='font-poppins font-semibold xl:text-[46px] xl:leading-[55px] 2xl:text-[50px] 2xl:leading-[65px] lg:text-[36px] lg:leading-9 text-[23px] leading-[26px] sm:text-[28px] sm:leading-7 tracking-normal xl:pb-[15px] pb-2.5'>MERN Stack <span className='text-primary'>Developer</span></h1>

                            <p className='font-poppins font-normal xl:text-[20px] text-[14px] leading-[20px] sm:text-[16px] sm:leading-6 xl:leading-[38px] tracking-normal xl:pb-[37px] pb-4'>I am an all-in-one web developer who specializes in MERN stack development. Bringing ideas to life with clean code and creative solutions.</p>
                            <div className='flex   items-center gap-2.5'>
                                <Button className='border border-white font-inter font-semibold md:text-[16px]  md:leading-[24px] text-[14px] leading-[20px] tracking-normal text-center '><MdOutlineFileDownload size={20} /> Download CV</Button>
                                <Button className='font-inter font-semibold md:text-[16px]  md:leading-[24px] text-[14px] leading-[20px] tracking-normal text-center bg-primary text-black hover:bg-primary/90 '>Hire Me Now</Button>
                            </div>
                            <div className='pl-80 pt-7 lg:flex hidden'><Image src='/images/hero-2.png' alt='logo' width={47} height={115} /></div>
                        </div>
                    </div>
                    <div className='w-full flex items-center justify-center'>
                        <div className='w-full  items-center flex justify-center max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[380px] xl:max-w-[408px]'>
                            <Image src='/images/hero-1.png' alt='logo' width={408} height={527} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
