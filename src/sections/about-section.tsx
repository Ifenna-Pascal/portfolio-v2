import Image from 'next/image'
import React from 'react'

const AboutSection = () => {
  return (
    <div className='lg:px-16 mt-8 lg:mt-24 lg:mb-24'>
         <div className='lg:border-t min-h-[480px] border-gray-300 flex-col-reverse lg:flex-row flex'>
        <div className='h-full px-6 lg:px-0 border-r mb-6 lg:mb-0  border-gray-300  flex items-center justify-center lg:w-[30%]  lg:py-12'>
            <Image src={'/pics.jpg'} alt='my_image' width={200} height={300} className='lg:w-[80%] w-full h-[400px]' />
        </div>
        <div className='w-full pt-8 pb-2 lg:py-16 px-6 lg:px-16 h-full'>
            <h2 className='uppercase text-gray-400  text-[17px] font-montserrat'>About me</h2>
            <h2 className='lg:w-[90%] w-full pt-4 pb-8 lg:py-8 font-montserrat text-[18px] lg:text-[25px] tracking-wider'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint corrupti, architecto beatae possimus unde fugit libero cum quod quis odio magni iure omnis voluptatibus dolorum eos. Consequuntur necessitatibus ratione a saepe reprehenderit suscipit, sed tenetur quaerat facilis expedita? Dolor saepe et fugiat. Ad libero officiis, illo atque fugit dolor, mollitia laborum hic voluptate illum harum porro? Quasi modi repellat laboriosam!
            </h2>
        </div>
    </div>
    </div>
  )
}

export default AboutSection