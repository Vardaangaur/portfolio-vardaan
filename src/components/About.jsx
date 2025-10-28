import React from "react";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const floatingVariants = {
  float1: {
    y: [0, 20, 0],
    x: [0, -10, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
  float2: {
    y: [0, -25, 0],
    x: [0, 15, 0],
    transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
  },
};

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden border-b border-neutral-900 pb-20">
      {/* Floating background elements */}
      <motion.div
        variants={floatingVariants}
        animate="float1"
        className="absolute top-10 left-10 w-40 h-40 bg-pink-500/10 blur-3xl rounded-full"
      />
      <motion.div
        variants={floatingVariants}
        animate="float2"
        className="absolute bottom-10 right-10 w-56 h-56 bg-teal-400/10 blur-3xl rounded-full"
      />

      {/* Title */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -80 }}
        transition={{ duration: 0.6 }}
        className="my-20 text-center text-4xl font-bold z-10 relative"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16 relative z-10">
        {/* Left - Image */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative">
            {/* Floating outline ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-[110%] h-[110%] border border-pink-500/20 rounded-full"
            />
            <img
              src={aboutImg}
              alt="About Vardaan"
              className="rounded-2xl shadow-2xl max-w-md object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>

        {/* Right - Text */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 max-w-xl"
        >
          <p className="text-neutral-300 leading-relaxed mb-8">{ABOUT_TEXT}</p>

          {/* Highlight quote */}
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="bg-gradient-to-r from-pink-500/10 to-teal-400/10 p-6 rounded-2xl border border-neutral-800 shadow-lg"
          >
            <p className="text-lg italic text-neutral-200 text-center">
              “Code for impact, design for emotion, and build for the future.”
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
