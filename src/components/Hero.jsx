import React from "react";
import { HERO_CONTENT } from "../constants"; 
import profilePic from "../assets/heroVardaan.jpg";
import { motion } from "framer-motion";
import resume from "../assets/Final_resume.pdf"; // Your PDF

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
          <div className="flex flex-col items-center lg:items-start">
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
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
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

            {/* Download Resume Button */}
            <motion.a
              href="/Final_resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 rounded-lg bg-[#fe424d] px-6 py-3 text-white font-medium hover:bg-red-600 transition-colors"
            >
              Download Resume
            </motion.a>
          </div>
        </div>

        {/* Right side: Image */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Vardaan"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
