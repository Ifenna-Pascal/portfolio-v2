import React from 'react'
import { FaGlobe, FaBitcoin } from "react-icons/fa";
import { IoServerSharp } from "react-icons/io5";

const Services = () => {
  return (
    <div className='lg:px-16 px-6'>
         <div className='  w-full min-h-[500px]   flex'>
          <div className='w-[25%] py-12 hidden border-t border-gray-300 lg:flex justify-center '>
          <button className='py-4 px-4   bg-[#4f5cf3] border-none rounded-[36px]  h-[70px]  mt-4 w-[250px] text-white font-montserrat '>Contact Me</button>
          </div>
         <div className='lg:w-[75%] lg:border-l border-gray-300'>
         <div className='w-full lg:py-16  lg:px-16   '>
            <span className='uppercase text-gray-400 font-montserrat'>My skill set</span>
            <h2 className='lg:w-[90%] py-4 lg:py-8 font-montserrat text-[17px] lg:text-[25px] tracking-wider'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint corrupti, architecto beatae possimus unde fugit libero cum quod quis 
            </h2>
         </div>
         <div className='w-full grid grid-cols-1 lg:grid-cols-2'>
         <div className='pt-8 lg:border-r border-gray-300 flex col-span-1'>
             <div className='flex flex-col'>
                <div className='flex items-center border-b lg:pl-16 lg:pr-8  pb-4 lg:pb-6  border-gray-300  justify-between'>
                    <h2 className='text-dark-100 font-montserrat text-[16px] lg:text-[22px] font-semibold uppercase'>Frontend Development</h2>
                    <FaGlobe className=' text-[20px] lg:text-[26px]' />
                </div>
                <p className=' font-montserrat lg:pl-16 lg:pr-8 pt-6 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, eveniet. Cum at earum a maxime totam laborum eum dolores mollitia perspiciatis adipisci.</p>

             </div>  
         </div>
         <div className='col-span-1'>

         </div>
         <div className='col-span-1'>

         </div>
         <div className='py-8 lg:border-l border-gray-300 flex col-span-1'>
             <div className='flex flex-col'>
                <div className='flex items-center border-b lg:pl-16 lg:pr-8 pb-4  lg:pb-6  border-gray-300  justify-between'>
                    <h2 className='text-dark-100 font-montserrat text-[16px] lg:text-[22px] font-semibold uppercase'>Backend Development</h2>
                    <IoServerSharp className=' text-[20px] lg:text-[26px]' />
                </div>
                <p className=' font-montserrat lg:pl-16 lg:pr-8 pt-6 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, eveniet. Cum at earum a maxime totam laborum eum dolores mollitia perspiciatis adipisci.</p>

             </div>  
         </div>
         <div className='pb-16 lg:border-r border-gray-300 flex col-span-1'>
             <div className='flex flex-col'>
                <div className='flex items-center border-b lg:pl-16 lg:pr-8 pb-4  lg:pb-6  border-gray-300  justify-between'>
                    <h2 className='text-dark-100 font-montserrat text-[16px] lg:text-[22px] font-semibold uppercase'>Blockchain Development</h2>
                    <FaBitcoin className=' text-[20px] lg:text-[26px]' />
                </div>
                <p className=' font-montserrat lg:pl-16 lg:pr-8 pt-6 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, eveniet. Cum at earum a maxime totam laborum eum dolores mollitia perspiciatis adipisci.</p>

             </div> 
             <div className='col-span-1 pb-8'>

         </div> 
         </div>
         </div>
          
         </div>
        </div>
    </div>
  )
}

export default Services