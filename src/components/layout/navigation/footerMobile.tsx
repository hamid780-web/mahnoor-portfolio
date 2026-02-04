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
		title: "Terms of Service"
	}, {
		title: "Privacy Policy"
	}, {
		icon: <FaGithub />
	}, {
		icon: <FaLinkedin />
	}, {
		icon: <FaFacebook />
	}, {
		icon: <FaYoutube />
	},
];

const FooterMobile = () => {
	return (
		<footer className='flex lg:hidden xl:py-[72px] py-14 w-full border-t-[1px] border-[#FFFFFF]  bg-[#121212]'>
			<div className='main-cantainer '>
				<div className='flex items-center flex-col justify-center w-full gap-5'>
					<div>
						<h1 className='font-poppins font-normal text-[26px] leading-[34px] tracking-0% text-primary'>Mahnoor</h1>
					</div>
					<div className="flex  gap-6 text-xl border-b border-[#2B3D51]  w-full justify-center pb-5">
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
					<div className="flex flex-col gap-4 text-center">

						{
							footerItems.filter((item) => item.title).map((item, index) => (
								<Link href="/"
									key={index}
									className=" hover:text-primary font-poppins font-normal tracking-0% leading-[100%] text-[14px]">
									{
										item.title
									} </Link>

							))
						}
						<p className='font-normal text-[12px] leading-none tracking-0% font-inter text-[#D1D5DB]'>
							© 2025 [Client Name]. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default FooterMobile
