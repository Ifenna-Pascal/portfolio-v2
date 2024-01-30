import React from 'react'
 import { Link21 } from 'iconsax-react'
import Image from 'next/image'

const MyProjects = () => {
  return (
    <div className='lg:px-16 pb-12   lg:pb-0 px-6'>
        <h1 className='font-nueue text-[40px] lg:text-[120px] border-b lg:border-b-0 border-gray-300  lg:leading-[120px] pt-4 pb-3 lg:pb-12 tracking-wider w-full font-bold text-black'>MY PAST PROJECTS</h1>
       {
        [1,2,3,4,5].map((_, index) => {
            const isEven = (index % 2) === 0;
            const isFirst = index === 0;
            return (
                <div key={index} className={`grid  border-gray-300 ${isFirst && 'lg:border-t'} grid-cols-1 lg:grid-cols-8`}>
                <div className="col-span-2 hidden order-first py-12 lg:flex justify-center">
                        {
                            isFirst && 
                            <button className='py-4 px-4   bg-[#4f5cf3] border-none rounded-[36px]  h-[70px]  mt-4 w-[250px] text-white font-montserrat '>Download Resume</button>                         
                        }
                </div>
                <div className={`col-span-3 order-last ${isEven ? "lg:order-2 " : "lg:order-3"} lg:border-l border-b border-gray-300`}>
                     <div className='py-8 lg:h-[450px]   flex flex-col lg:justify-between'>
                        <div className='flex flex-col lg:px-8'>
                            <div className='flex  justify-between'>
                                <h2 className='text-dark-100  font-montserrat text-[18px] lg:text-[22px]  font-bold capitalize'>Altride</h2>
                                <Link21 color="#1d1d1d" className='cursor-pointer text-[18px] lg:text-[32px]'/>
                            </div>
                            <p className='lg:py-6 pt-4 pb-6 font-montserrat'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, eveniet. Cum at earum a maxime totam laborum eum dolores mollitia perspiciatis adipisci.</p>
    
                        </div>
                        <p className='lg:px-8 font-montserrat uppercase text-[14px]'>Mobile Application</p>
    
                    </div>
                </div>
                <div className={`col-span-3 ${isEven ? "lg:order-3 " : "lg:order-2"}  lg:border-l lg:border-b  lg:p-8 pt-8 border-gray-300`}>
                    <Image src={'/img.png'} alt='image' width={400} height={400} className='w-full object-cover h-[260px] lg:h-[394px] rounded-[8px]' />             
                </div>
             
               
            </div>
            )
        })
       }
    </div>
  )
}

export default MyProjects

 