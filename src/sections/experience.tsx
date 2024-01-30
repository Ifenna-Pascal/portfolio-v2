import Job from '@/components/job'
import React from 'react'

const Experience = () => {
  return (
    <div className='bg-[#151515] w-full min-h-[500px]'> 
      <h1 className='font-nueue text-[26px] lg:text-[120px] lg:leading-[124px] px-8 lg:px-16  lg:w-[900px] pt-8 lg:pt-12 pb-4 tracking-wider  font-bold text-white'>my Work Experience</h1>
      <div>
        <div className='px-6 lg:px-16'>
          <div className='lg:border-t flex border-gray-300 '>
              <div className='w-[25%] py-12 hidden lg:flex justify-center '>
                  <button className='py-4 px-4  bg-[#4f5cf3] border-none rounded-[36px] h-[70px]  mt-4 w-[250px] text-white font-montserrat '>Download Resume</button>                
              </div>
              <div className='border-l  lg:py-12 px-4 lg:px-4 lg:w-[75%] border-gray-300 '>
                  <Job company='Genesys Tech Hub' role='Fullstack Software Engineer' date='April 2023 - Present' link='#' summary='Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, harum debitis dolorem aut pariatur atque. Nisi sed consequatur nihil' />
                  <Job company='Buidadom' role='Frontend Software Engineer' date='April 2023 - Present' link='#' summary='Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, harum debitis dolorem aut pariatur atque. Nisi sed consequatur nihil' />
                  <Job company='Dexfiat' role='Web3 Frontend Engineer' date='April 2023 - Present' link='#' summary='Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, harum debitis dolorem aut pariatur atque. Nisi sed consequatur nihil' />
                  <Job company='Genesys Tech Hub' role='Fullstack Software Engineer' date='April 2023 - Present' link='#' summary='Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, harum debitis dolorem aut pariatur atque. Nisi sed consequatur nihil' />

              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience