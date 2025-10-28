import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { PROJECTS } from "../constants";

const Project = () => {
  return (
    <div className="border-b border-neutral-900">
      {/* Section Title */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -80 }}
        transition={{ duration: 0.6 }}
        className="my-20 text-center text-4xl font-bold"
      >
        Projects
      </motion.h1>

      {/* Project List */}
      <div className="flex flex-col gap-32">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            } lg:items-center lg:justify-between gap-12 border-b border-neutral-800 pb-20 last:border-none`}
          >
            {/* Project Image */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: index % 2 !== 0 ? 100 : -100 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 flex justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative group w-full max-w-2xl h-[350px] sm:h-[400px] rounded-2xl overflow-hidden shadow-lg border border-neutral-800"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Subtle red-pink-teal gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#fe424d]/20 via-pink-400/10 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            </motion.div>

            {/* Project Info */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: index % 2 !== 0 ? -100 : 100 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <h2 className="mb-4 text-2xl font-semibold">{project.title}</h2>
              <p className="mb-6 text-neutral-400 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mb-6">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 text-sm font-medium rounded-full bg-neutral-800 text-teal-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-8">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-neutral-400 hover:text-white transition"
                  >
                    <FaGithub /> <span>GitHub</span>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-neutral-400 hover:text-white transition"
                  >
                    <FaExternalLinkAlt /> <span>Live Demo</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
