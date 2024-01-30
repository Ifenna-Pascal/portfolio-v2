import Image from 'next/image'
import React from 'react'
import { CgMail } from "react-icons/cg";
import { FaXTwitter, FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
const Contact = () => {
  return (
    <div className='w-full grid grid-cols-1 lg:grid-cols-2'>
        <div className="cols-span-1  flex flex-col p-6 lg:p-10">
          <h1 className='font-nueue text-[36px] leading-[44px] lg:text-[63px] lg:leading-[70px] lg:px-16  w-full lg:pt-12 pb-4 tracking-wider  font-bold text-black'>I am not hard to find, let&apos;s build something truly spectacular!</h1>
          <div className='flex items-center lg:p-4 lg:px-16 gap-x-8'>
            <CgMail className='text-[24px]' />
            <FaXTwitter className='text-[24px]' />
            <FaLinkedinIn className='text-[24px]' />
            <FaGithub className='text-[24px]' />
          </div>
          <form className='lg:py-16 pt-12 pb-8 flex flex-col lg:px-16'>
            <input type="text" className='w-full border border-[#bfbfbf] px-6 py-5 mb-6 rounded-[40px] text-gray-400' placeholder='Full Name' />
            <input type="email" className='w-full border border-[#bfbfbf] px-6 py-5 mb-6 rounded-[40px] text-gray-400' placeholder='Email' />
            <textarea  className='w-full border border-[#bfbfbf] px-6 py-4 h-[200px] mb-6 rounded-[20px] text-gray-400' placeholder='Hi Monanu, I have an idea that needs your expertise...' />
            <button type='submit' className='py-4 px-4  bg-[#4f5cf3] border-none rounded-[36px] h-[64px] lg:h-[68px]  mt-4 lg:w-[250px] text-white font-montserrat'>Submit</button>                
          </form>
        </div>
        <div className="cols-span-1 hidden lg:flex h-[900px] w-full">
            <Image src='/contact.png' alt='contact_image' height={400} width={400} className='w-full object-cover h-full' />
        </div>
    </div>
  )
}

export default Contact