"use client";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="hero" className="w-screen min-h-[32rem] flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-6 md:px-24 border-b-[3px] overflow-hidden">
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col gap-4 text-4xl sm:text-5xl md:text-6xl font-bold text-center md:text-left -mt-4 md:mt-0"
      >
        <p>SETTHASAT</p>
        <p>SIRIKOMONSING</p>
        <p className="text-4xl sm:text-5xl md:text-6xl animate-type">{"<"}WEB DEVELOPER{">"}</p>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="flex justify-center mb-6 md:mb-0"
      >
        <img
          src="./Props/SafeCOM.png"
          alt="SafeCOM"
          className="w-[18rem] h-[18rem] sm:w-[24rem] sm:h-[24rem] md:w-[32rem] md:h-[30rem] object-contain"
        />
      </motion.div>
    </section>
  );
}

export default Hero;
