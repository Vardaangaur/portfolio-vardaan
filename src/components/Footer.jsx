import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-neutral-800 py-10 text-center text-neutral-400">
      {/* Social Links */}
      <div className="flex justify-center gap-6 mb-6 text-3xl">
        <a
          href="https://www.linkedin.com/in/vardaan-gaur-376487295/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 hover:scale-110 transition-transform duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/vardaangaur"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-200 hover:scale-110 transition-transform duration-300"
        >
          <FaGithub />
        </a>
        {/* <a
          href="https://www.instagram.com/vardaangaur"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 hover:scale-110 transition-transform duration-300"
        >
          <FaInstagram />
        </a> */}
      </div>

      {/* Footer Text */}
      <p className="text-sm">
        © {new Date().getFullYear()} <span className="text-white font-semibold">Vardaan Gaur</span>. 
        All rights reserved.
      </p>
      <p className="mt-2 text-xs text-neutral-500">
        Built with ❤️ using React, Tailwind CSS & Framer Motion.
      </p>
    </footer>
  );
};

export default Footer;
