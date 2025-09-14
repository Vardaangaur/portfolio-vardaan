import React from 'react';
import logo from "../assets/vardaanLogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6 px-8'>
      {/* Logo */}
      <div className='flex flex-shrink-0 items-center'>
        <img className="mx-2 w-10" src={logo} alt="Logo" />
      </div>

      {/* Social Icons */}
      <div className='flex items-center justify-center gap-4 text-2xl'>
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/vardaan-gaur-376487295/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className='hover:text-blue-600 transition-colors'/>
        </a>

        {/* GitHub */}
        <a href="https://github.com/vardaangaur" target="_blank" rel="noopener noreferrer">
          <FaGithub className='hover:text-gray-700 transition-colors'/>
        </a>

        {/* Instagram */}
        <a href="https://www.instagram.com/vardaangaur" target="_blank" rel="noopener noreferrer">
          <FaInstagram className='hover:text-pink-500 transition-colors'/>
        </a>
      </div>
    </nav>
  );
};
