'use client'
import React from 'react'
import {motion} from 'framer-motion'

const Wrapper = () => {
    const container = {
        hidden: { rotate: 90 },
        show: {
            rotate: 0,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
    }

    const itemA = {
        hidden: { scale: 0, top: 100 },
        show: { scale: 1, top: 20 },
    }

    const itemB = {
        hidden: { scale: 0, top: 200 },
        show: { scale: 1, top: 100 },
    }
  return (
    <motion.div 
        variants={container}
        initial={"hidden"}
        animate={"show"}
        className='w-[200px] h-[200px] rounded-[30px] bg-gray-100 relative'>
            
                <motion.div
                    style={{ ...blobStyle, left: 25 }}
                    variants={itemA}
                >
                    <i className="ri-dashboard-fill text-white text-[30px]"></i>
                </motion.div>
                <motion.div
                    style={{ ...blobStyle, left: 110 }}
                    variants={itemA}
                >
                    <i className="ri-edit-2-fill text-white text-[30px]"></i>
                </motion.div>
                <motion.div
                    style={{ ...blobStyle, left: 25 }}
                    variants={itemB}
                >
                    <i className="ri-mail-unread-fill text-white text-[30px]"></i>
                </motion.div>
                <motion.div
                    style={{ ...blobStyle, left: 110 }}
                    variants={itemB}
                >
                    <i className="ri-award-fill text-white text-[30px]"></i>
                </motion.div>

    </motion.div>
  )
}

const blobStyle: React.CSSProperties = {
    width: 66,
    height: 66,
    borderRadius: 75,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#494b4c",
    position: "absolute",
    cursor: 'pointer'
}


export default Wrapper