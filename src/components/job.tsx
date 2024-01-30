import Link from 'next/link';
import React from 'react'
import { BsDash } from "react-icons/bs";

type IJob = {
    role: string;
    company: string;
    link: string;
    date: string;
    summary: string;
}

const Job = ({role, company, link, date, summary}: IJob) => {
  return (
    <div className='flex px-2 py-6 lg:py-4 flex-col'>
        <div className='mb-2 flex relative items-center'>
            <BsDash className='text-white absolute top-[4px] lg:-left-8 -left-6' />
         <h2 className='text-white font-semibold font-montserrat text-[18px]'>
            <Link href={link}>
                {role} <span className='text-[13px] pl-1 text-gray-300 hover:underline'> @{company}</span>
            </Link>
        </h2>
        </div>
        <span className='italic font-montserrat text-[13px] text-gray-300'>{date}</span>
        <p  className='font-montserrat py-2 lg:w-[800px] text-[15px] text-gray-200'>{summary}</p>
    </div>
  )
}

export default Job