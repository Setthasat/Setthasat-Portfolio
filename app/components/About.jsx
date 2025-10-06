"use client";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="w-screen min-h-[28rem] flex flex-col md:flex-row justify-between px-6 md:px-24 gap-8 items-center border-b-[3px] py-12 overflow-hidden bg-gray-100"
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className="h-[16rem] w-[16rem] sm:h-[20rem] sm:w-[20rem] md:h-[20rem] md:w-[28rem] animate-rotate flex justify-center"
      >
        <img
          src="./Props/EarthCOM.png"
          alt="EarthCOM"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.4 }}
        className="flex flex-col gap-6 w-full md:w-1/2 justify-start items-center md:items-start text-center md:text-left"
      >
        <h1 className="text-3xl sm:text-4xl p-4 border-[3px] w-full text-center bg-white">
          ABOUT
        </h1>
        <p className="text-lg sm:text-xl p-4 text-justify">
          Hi, my name is Setthasat Sirikomonsing (Safe). I love building apps
          that solve real-world problems, especially using JavaScript, React,
          and Node.js. I enjoy learning new things and experimenting with
          creative ideas. My goal is to keep growing as a developer and someday
          work on projects that positively impact people’s daily lives.
        </p>
      </motion.div>
    </section>
  );
}

export default About;
