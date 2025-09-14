import React from 'react';
import { CONTACT } from '../constants';
import { motion } from "framer-motion";

const Contact = () => {
  const contactItems = [
    { label: "Address", value: CONTACT.address, color: "pink-500" },
    { label: "Phone", value: CONTACT.phoneNo, color: "green-400", href: `tel:${CONTACT.phoneNo}` },
    { label: "Email", value: CONTACT.email, color: "blue-400", href: `mailto:${CONTACT.email}` },
  ];

  return (
    <div className="border-b border-neutral-900 pb-20 px-4 md:px-20">
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl font-extrabold tracking-tight"
      >
        Get in Touch
      </motion.h1>

      <div className="flex flex-wrap justify-center gap-10 mt-10">
        {contactItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.href || "#"}
            whileHover={{ rotateY: 15, rotateX: 5, scale: 1.1, boxShadow: `0 0 25px rgba(255, 255, 255, 0.6)` }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`w-64 h-32 bg-neutral-900 rounded-3xl flex flex-col justify-center items-center cursor-pointer transform perspective-1000 border-2 border-${item.color} transition-transform duration-300`}
          >
            <p className={`text-${item.color} font-semibold text-lg`}>{item.label}</p>
            <p className="text-white mt-2 text-center">{item.value}</p>
          </motion.a>
        ))}
      </div>
    </div>
  )
}

export default Contact;
