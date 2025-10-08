"use client";
import { motion } from "framer-motion";

function Certificate() {
  return (
    <section
      className="w-screen flex flex-col items-center px-4 md:px-24 py-12 border-b-[3px]"
      id="certificate"
    >
      <h1 className="text-3xl font-bold border-[3px] w-full p-3 text-center mb-[1rem] bg-white">
        CERTIFICATES
      </h1>

      {/* container for both cards */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8">
        {/* CS50P Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 h-full border-[2px] mt-6 flex flex-col justify-center items-center"
        >
          <div className="w-full flex justify-between items-center border-b-[2px] p-4">
            <div className="flex gap-2">
              <div className="w-4 h-4 rounded-full border-[2px]" />
              <div className="w-4 h-4 rounded-full border-[2px]" />
              <div className="w-4 h-4 rounded-full border-[2px]" />
            </div>
            <p className="text-lg md:text-2xl font-semibold">CS50P</p>
          </div>
          <img src="./certificate/CS50P.png" className="w-full h-full filter grayscale hover:grayscale-0 transition duration-500" />
          <div className="border-t-[2px] w-full flex justify-center items-center px-12 py-6">
            <a
              target="_blank"
              href="https://cs50.harvard.edu/python/"
              className="border-[2px] w-full px-2 py-3 hover:bg-black hover:text-white transition text-lg text-center"
            >
              Learn more
            </a>
          </div>
        </motion.div>

        {/* CS50W Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 h-full border-[2px] mt-6 flex flex-col justify-center items-center"
        >
          <div className="w-full flex justify-between items-center border-b-[2px] p-4">
            <div className="flex gap-2">
              <div className="w-4 h-4 rounded-full border-[2px]" />
              <div className="w-4 h-4 rounded-full border-[2px]" />
              <div className="w-4 h-4 rounded-full border-[2px]" />
            </div>
            <p className="text-lg md:text-2xl font-semibold">CS50W</p>
          </div>
          <img src="./certificate/CS50W.png" className="w-full h-full filter grayscale hover:grayscale-0 transition duration-500" />
          <div className="border-t-[2px] w-full flex justify-center items-center px-12 py-6">
            <a
              href="https://cs50.harvard.edu/web/"
              target="_blank"
              className="border-[2px] w-full px-2 py-3 hover:bg-black hover:text-white transition text-lg text-center"
            >
              Learn more
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Certificate;
