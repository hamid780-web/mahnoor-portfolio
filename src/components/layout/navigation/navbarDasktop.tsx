import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const NavbarDasktop = () => {

        interface link {
          id: number;
          title: string;
          url: string;
        }
      
        const links: link[] = [
            {
                id: 1,
                title: "Home",
                url: "/",
            },
            {
                id: 2,
                title: "About",
                url: "/about",
            },
            {
                id: 3,
                title: "Services",  
                url: "/services",
            },
            {
                id: 4,
                title: "Portfolio",
                url: "/portfolio",
            
            },
            {
                id: 5,
                title: "Contact",
                url: "/contact",
            },
        ];
  return (
    <div className='py-5 bg-[#AB702517] w-full hidden  lg:flex   fixed top-0 left-0 right-0 z-50 border-b border-primary'>
        <div className='main-cantainer'>
            <div className='flex justify-between items-center w-full'>
             <div><Image src='images/logo.svg' alt='logo' width={106} height={32} /></div>
                
             <div className='flex items-center gap-[38px]'>
                {links.map((link) => {
                    const { id, title, url } = link;
                    return (
                        <div key={id}>
                            <Link href={url} className='text-[16px] font-regular leading-[24px] tracking-0%  hover:text-primary   font-poppins' >
                                {title}
                            </Link>
                        </div>
                    )
                })}
             </div>
             <Button className='text-[15px] font-semibold leading-[24px] tracking-0% text-center font-poppins'>Hire Me</Button>
            </div>
        </div>
    </div>
  )
}

export default NavbarDasktop