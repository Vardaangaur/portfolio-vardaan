import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/heroVardaan.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, delay: delay },
  },
});

const Hero = () => {
  return (
    <section className="border-b border-neutral-900 pb-16 lg:mb-40 relative overflow-hidden">
      <div className="flex flex-wrap items-center justify-center">
        {/* LEFT: TEXT */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start lg:pl-16">
            {/* Name */}
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-10 text-6xl md:text-7xl font-bold tracking-tight text-center lg:text-left"
            >
              Vardaan Gaur
            </motion.h1>

            {/* Role */}
            <motion.span
              variants={container(0.4)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-3xl md:text-4xl font-semibold mb-6 text-center lg:text-left"
            >
              Full Stack Developer
            </motion.span>

            {/* Intro paragraph */}
            <motion.p
              variants={container(0.8)}
              initial="hidden"
              animate="visible"
              className="text-lg leading-relaxed max-w-xl text-neutral-300 text-center lg:text-left mb-8"
            >
              {HERO_CONTENT} <br />
              I love turning ideas into interactive experiences — clean, scalable,
              and purposeful. Whether it’s designing sleek interfaces or crafting
              powerful APIs, I bring both logic and creativity to every line of code.
            </motion.p>

            {/* Subtle Developer Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1.4 }}
              className="italic text-neutral-400 text-base md:text-lg mb-10 text-center lg:text-left"
            >
              “Building is my language, innovation my grammar, and impact my story.”
            </motion.div>

            {/* Resume Button */}
            <motion.a
              variants={container(1.2)}
              initial="hidden"
              animate="visible"
              href="/Final_resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 rounded-lg px-8 py-4 text-white text-lg font-medium
                         bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500
                         hover:from-pink-400 hover:via-slate-600 hover:to-purple-600
                         transition-all shadow-lg"
            >
              Download Resume
            </motion.a>
          </div>
        </div>

        {/* RIGHT: Image with Wobble */}
        <div className="w-full lg:w-1/2 lg:p-8 flex justify-center relative">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="p-1 rounded-full bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 shadow-xl relative"
          >
            {/* Glow Animation */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full bg-pink-400/20 blur-3xl"
            ></motion.div>

            {/* Profile Image with subtle wobble */}
            <motion.img
              src={profilePic}
              alt="Vardaan"
              className="w-[27rem] h-[27rem] object-cover rounded-full border-4 border-neutral-900 relative z-10"
              animate={{
                scale: [1, 1.05, 0.98, 1.03, 1],
                rotate: [0, 1.5, -1.5, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
