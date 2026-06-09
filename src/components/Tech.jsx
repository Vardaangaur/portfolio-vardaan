import React from 'react';
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiMysql,
  SiTailwindcss,
  SiCplusplus,
  SiFramer,
  SiFastapi,
  SiPython,
  SiJavascript,
} from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: 0 },
  animate: {
    y: [0, -15, 0, 15, 0],
    transition: {
      duration,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
});

const Tech = () => {
  const technologies = [
    {
      icon: <RiReactjsLine className="text-7xl text-cyan-400" />,
      duration: 6,
      shadow: "hover:shadow-[0_0_20px_rgba(14,165,233,0.8)]",
    },
    {
      icon: <FaNodeJs className="text-7xl text-green-500" />,
      duration: 7,
      shadow: "hover:shadow-[0_0_20px_rgba(34,197,94,0.8)]",
    },
    {
      icon: <SiExpress className="text-7xl text-gray-300" />,
      duration: 6.5,
      shadow: "hover:shadow-[0_0_20px_rgba(209,213,219,0.8)]",
    },
    {
      icon: <SiMongodb className="text-7xl text-green-500" />,
      duration: 6,
      shadow: "hover:shadow-[0_0_20px_rgba(34,197,94,0.8)]",
    },
    {
      icon: <SiFastapi className="text-7xl text-emerald-500" />,
      duration: 6.8,
      shadow: "hover:shadow-[0_0_20px_rgba(16,185,129,0.8)]",
    },
    {
      icon: <SiPython className="text-7xl text-yellow-400" />,
      duration: 7,
      shadow: "hover:shadow-[0_0_20px_rgba(250,204,21,0.8)]",
    },
    {
      icon: <SiJavascript className="text-7xl text-yellow-300" />,
      duration: 6.5,
      shadow: "hover:shadow-[0_0_20px_rgba(250,204,21,0.8)]",
    },
    {
      icon: <SiTailwindcss className="text-7xl text-sky-400" />,
      duration: 6.8,
      shadow: "hover:shadow-[0_0_20px_rgba(14,165,233,0.8)]",
    },
    {
      icon: <SiMysql className="text-7xl text-blue-500" />,
      duration: 7,
      shadow: "hover:shadow-[0_0_20px_rgba(59,130,246,0.8)]",
    },
    {
      icon: <FaGitAlt className="text-7xl text-orange-500" />,
      duration: 6.5,
      shadow: "hover:shadow-[0_0_20px_rgba(249,115,22,0.8)]",
    },
    {
      icon: <SiCplusplus className="text-7xl text-blue-600" />,
      duration: 6.8,
      shadow: "hover:shadow-[0_0_20px_rgba(37,99,235,0.8)]",
    },
    {
      icon: <SiFramer className="text-7xl text-pink-500" />,
      duration: 7,
      shadow: "hover:shadow-[0_0_20px_rgba(236,72,153,0.8)]",
    },
  ];

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-6"
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            variants={iconVariants(tech.duration)}
            initial="initial"
            animate="animate"
            className={`rounded-2xl border-4 border-neutral-800 p-4 transition-shadow duration-300 ${tech.shadow}`}
          >
            {tech.icon}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Tech;