"use client";
import { motion } from "framer-motion";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "CSS",
  "HTML",
  "Git",
  "Next.js",
  "Express",
  "MongoDB",
  "TailwindCSS",
  "Python",
];

function Skills() {
  return (
    <section id="skills" className="w-screen min-h-[28rem] flex flex-col justify-center items-center border-b-[3px] px-6 md:px-24 overflow-hidden py-12">
      {/* header */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-3xl sm:text-4xl p-4 border-[3px] w-full text-center mb-8 font-bold"
      >
        SKILLS
      </motion.h1>

      {/* scrolling wrapper */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative w-full overflow-hidden border-l-[2px] border-r-[2px]"
      >
        <div className="flex animate-scroll gap-6 w-max">
          {skills.concat(skills).map((skill, index) => (
            <div
              key={index}
              className="w-40 sm:w-52 md:w-60 h-64 border-[2px] flex-shrink-0 flex flex-col bg-white"
            >
              {/* top bar */}
              <div className="flex items-center justify-between border-b-[2px] p-2 sm:p-4">
                <div className="flex justify-center items-center gap-1 sm:gap-2">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border-[2px]"></div>
                  <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border-[2px]"></div>
                  <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border-[2px]"></div>
                </div>
                <p className="text-xs sm:text-sm">WEB DEV</p>
              </div>

              {/* content */}
              <div className="flex flex-col justify-center items-center h-full py-4 w-full px-2 sm:px-4">
                <div className="border-[2px] w-full flex justify-center items-center bg-gray-50">
                  <img
                    src={`./Skills/${skill}.png`}
                    alt={skill}
                    className="h-20 sm:h-28 md:h-32 w-full object-contain animate-horizontal-spin"
                  />
                </div>
                <p className="text-center w-full text-xl sm:text-lg p-2 sm:p-4 font-medium">
                  {skill}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
