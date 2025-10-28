import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quotes = [
  "“Code is like humor. When you have to explain it, it’s bad.” — Cory House",
  "“Programs must be written for people to read.” — Harold Abelson",
  "“Talk is cheap. Show me the code.” — Linus Torvalds",
  "“Experience is the name everyone gives to their mistakes.” — Oscar Wilde",
  "“Simplicity is the soul of efficiency.” — Austin Freeman",
  "“The best error message is the one that never shows up.” — Thomas Fuchs",
  "“First, solve the problem. Then, write the code.” — John Johnson",
];

const RandomQuote = () => {
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex]);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative flex flex-col items-center my-24"
    >
      {/* Animated gradient separator */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-44 h-[2px] bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 mb-10 rounded-full shadow-lg"
      ></motion.div>

      {/* Floating capsule with smooth entry */}
      <AnimatePresence mode="wait">
        <motion.div
          key={quote}
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.96 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.div
            animate={{
              y: [0, -5, 0],
              boxShadow: [
                "0px 0px 20px rgba(236, 72, 153, 0.2)",
                "0px 0px 30px rgba(236, 72, 153, 0.3)",
                "0px 0px 20px rgba(236, 72, 153, 0.2)",
              ],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative px-10 py-8 rounded-3xl bg-neutral-900/40 border border-neutral-800 backdrop-blur-xl shadow-xl max-w-2xl text-center"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-400 via-slate-500 to-purple-500 opacity-20 blur-lg -z-10"></div>
            <p className="italic text-lg text-neutral-300 leading-relaxed tracking-wide">
              {quote}
            </p>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Gradient glowing orbs for depth */}
      <motion.div
        animate={{
          x: [0, 25, 0],
          y: [0, -15, 0],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-12 left-20 w-36 h-36 bg-pink-400/25 rounded-full blur-3xl"
      ></motion.div>

      <motion.div
        animate={{
          x: [0, -25, 0],
          y: [0, 20, 0],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-16 w-44 h-44 bg-purple-400/25 rounded-full blur-3xl"
      ></motion.div>
    </motion.div>
  );
};

export default RandomQuote;
