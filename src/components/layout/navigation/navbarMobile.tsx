"use client"
import React from "react";
import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { VscThreeBars } from "react-icons/vsc";
import { MdHome } from "react-icons/md";
import { useEffect, useState } from 'react';
import { IconType } from "react-icons";
import { FaInfoCircle, FaServicestack, FaCode, FaEnvelope } from "react-icons/fa";
const NavbarMobile = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50); // 50px scroll ke baad change
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    interface link {
        id: number;
        title: string;
        url: string;
        icon: IconType
    }

    const links: link[] = [
        {
            id: 1,
            title: "Home",
            url: "/",
            icon: MdHome
        },
        {
            id: 2,
            title: "About",
            url: "/about",
            icon: FaInfoCircle
        },
        {
            id: 3,
            title: "Services",
            url: "/services",
            icon: FaServicestack
        },
        {
            id: 4,
            title: "Portfolio",
            url: "/portfolio",
            icon: FaCode

        }, {
            id: 5,
            title: "Contact",
            url: "/contact",
            icon: FaEnvelope
        },
    ];
    return (
        <nav className={`py-5 bg-[#AB702517] w-full flex  lg:hidden  fixed top-0 left-0 right-0 z-50 border-b border-primary ${scrolled ? "bg-black" : "bg-[#AB702517]"}`}>
            <div className="main-cantainer">
                <div className="flex items-center justify-between w-full">
                    <Sheet>


                        <div className=" flex  items-center">
                            <Image src="/Images/logo.svg" alt="logo"
                                width={106}
                                height={32} />
                        </div>


                        <SheetTrigger className="p-2 rounded-lg bg-primary hover:text-white">
                            <VscThreeBars size={25} />
                        </SheetTrigger>

                        <SheetContent side="left" className=" bg-black">
                            <SheetHeader>
                                <SheetTitle>
                                    <div className="p-[26px] border-b border-primary">
                                        <Image src="/Images/logo.svg" alt="logo"
                                            width={106}
                                            height={32} />
                                    </div>
                                </SheetTitle>
                            </SheetHeader>

                            <nav className="p-4 font-dmsans flex flex-col gap-2">
                                {
                                    links.map((link) => {
                                        const { id, title, url, icon } = link;
                                        const Icon = link.icon;
                                        return (
                                            <div key={id}>

                                                <Link href={url}
                                                    className="flex gap-3 px-4 py-3 items-center rounded-lg  hover:text-primary hover:bg-primary/10 transition-all duration-200 group  ">
                                                    <Icon className="text-2xl text-primary group-hover:scale-[1.1]  " />
                                                    <p className="text-base font-medium">
                                                        {title}</p>
                                                </Link>

                                            </div>
                                        )
                                    })
                                } </nav>
                            <div className="mt-auto pt-6 pb-6 px-4">
                                <p className="text-xs text-[#D1D5DB] text-center">© 2025 [Client Name]. All rights reserved.</p>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
}
export default NavbarMobile
