import React from "react";
import { HERO_CONTENT } from "../constants"; 
import profilePic from "../assets/heroVardaan.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        
        {/* Left side: Text */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start lg:pl-12"> 
            {/* added padding-left for spacing */}
            
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Vardaan Gaur
            </motion.h1>

            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 
                         bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6"
            >
              {HERO_CONTENT}
            </motion.p>

            {/* Gradient Resume Button with motion */}
            <motion.a
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              href="/Final_resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 rounded-lg px-8 py-4 text-white font-medium
                         bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500
                         hover:from-pink-400 hover:via-slate-600 hover:to-purple-600
                         transition-all shadow-lg"
            >
              Download Resume
            </motion.a>
          </div>
        </div>

        {/* Right side: Circular Gradient Image */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="p-1 rounded-full bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 shadow-xl"
            >
              <img
                src={profilePic}
                alt="Vardaan"
                className="w-[26rem] h-[26rem] object-cover rounded-full border-4 border-neutral-900"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
