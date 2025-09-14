import React from 'react';
import { RiReactjsLine } from "react-icons/ri";    
import { FaNodeJs } from "react-icons/fa";      
import { SiMongodb, SiExpress, SiMysql, SiTailwindcss, SiCplusplus, SiFramer } from "react-icons/si"; 
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: 0 },
  animate: {
    y: [0, -15, 0, 15, 0], // bigger motion
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
});

const Tech = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl'
      >
        Technologies
      </motion.h1>

      <motion.div  
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className='flex flex-wrap items-center justify-center gap-6'
      >
        {/* React */}
        <motion.div 
          variants={iconVariants(6)} 
          initial="initial" 
          animate="animate" 
          className='rounded-2xl border-4 border-neutral-800 p-4 transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(14,165,233,0.8)]'
        >
          <RiReactjsLine className='text-7xl text-cyan-400'/>
        </motion.div>

        {/* Node.js */}
        <motion.div 
          variants={iconVariants(7)} 
          initial="initial" 
          animate="animate" 
          className='rounded-2xl border-4 border-neutral-800 p-4 transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.8)]'
        >
          <FaNodeJs className='text-7xl text-green-500'/>
        </motion.div>

        {/* Express */}
        <motion.div 
          variants={iconVariants(6.5)} 
          initial="initial" 
          animate="animate" 
          className='rounded-2xl border-4 border-neutral-800 p-4 transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(209,213,219,0.8)]'
        >
          <SiExpress className='text-7xl text-gray-300'/>
        </motion.div>

        {/* MongoDB */}
        <motion.div 
          variants={iconVariants(6)} 
          initial="initial" 
          animate="animate" 
          className='rounded-2xl border-4 border-neutral-800 p-4 transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.8)]'
        >
          <SiMongodb className='text-7xl text-green-500'/>
        </motion.div>

        {/* MySQL */}
        <motion.div 
          variants={iconVariants(7)} 
          initial="initial" 
          animate="animate" 
          className='rounded-2xl border-4 border-neutral-800 p-4 transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.8)]'
        >
          <SiMysql className='text-7xl text-blue-500'/>
        </motion.div>

        {/* C++ */}
        <motion.div 
          variants={iconVariants(6.5)} 
          initial="initial" 
          animate="animate" 
          className='rounded-2xl border-4 border-neutral-800 p-4 transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.8)]'
        >
          <SiCplusplus className='text-7xl text-blue-600'/>
        </motion.div>

        {/* Tailwind */}
        <motion.div 
          variants={iconVariants(6.8)} 
          initial="initial" 
          animate="animate" 
          className='rounded-2xl border-4 border-neutral-800 p-4 transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(14,165,233,0.8)]'
        >
          <SiTailwindcss className='text-7xl text-sky-400'/>
        </motion.div>

        {/* Framer Motion */}
        <motion.div 
          variants={iconVariants(7)} 
          initial="initial" 
          animate="animate" 
          className='rounded-2xl border-4 border-neutral-800 p-4 transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.8)]'
        >
          <SiFramer className='text-7xl text-pink-500'/>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Tech;
