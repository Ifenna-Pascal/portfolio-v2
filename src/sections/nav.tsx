'use client'
import { links } from '@/util/links';
import { HambergerMenu } from 'iconsax-react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";

const Nav = () => {
  const [show, setShow] = useState(false);
  const toggle = () => setShow(!show)
  return (
    <>
      <nav className='flex items-center relative container py-6 lg:py-12 px-6 lg:px-16 justify-between'>
        <h2 className='text-white font-montserrat uppercase tracking-widest text-[16px] cursor-pointer hover:text-gray-300 hover:duration-300'>Monanu Ifenna</h2>
        {show ? <IoMdClose size="32"  className='cursor-pointer hover:text-gray-300 text-white hover:duration-300' onClick={toggle} /> : 
        <HambergerMenu size="32"  className='cursor-pointer hover:text-gray-300 text-white hover:duration-300' onClick={toggle}/>
        }
    </nav>
    <div className={`${show ? "translate-x-0" : "-translate-x-[100%] hidden"} absolute bg-dark-100 h-[calc(100vh-64px)] flex flex-col px-6 lg:px-16 py-6 duration-200 ease-in-out w-full  `}>
      {
        links.map((x,index) => (
          <LinkWrap key={index} name={x.name} link={x.link} />
        ))
      }
    </div>
    </>
  )
}

export default Nav 


const LinkWrap = ({name, link}: {name: string; link:string}) => {
  const pathname = usePathname();
  const isActive = link === pathname
  return (
    <Link href={link} className={`${isActive ? 'text-white' : 'text-gray-300'} duration-300 text-[24px] lg:text-[40px] font-montserrat cursor-pointer  hover:text-white uppercase pb-10 tracking-wider`}> 
      {name}
  </Link>
  )
}