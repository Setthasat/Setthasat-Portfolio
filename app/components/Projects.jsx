"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

const projects = [
  {
    title: "QUIZWORD",
    image: "./Projects/QUIZWORD.jpeg",
    github: "https://github.com/Setthasat/ract-express-quiz-word",
    link: "https://ract-express-quiz-word-1.onrender.com",
    about:
      "This website is designed for learning English vocabulary, whether you're a student or anyone who wants to improve their English. You can create your own word list and take quizzes to review and test your knowledge.",
    learn:
      "Through this project, I learned how to integrate React with Express and MongoDB, implement user authentication with email confirmation, handle dynamic quiz generation, and manage state effectively using Zustand.",
  },
  {
    title: "GRAVITY DROP SIMULATOR",
    image: "./Projects/GRAVITY.jpeg",
    github: "https://github.com/Setthasat/Gravity-Drop-Simulator",
    link: "https://gravity-drop-simulator-zdty.vercel.app/",
    about:
      "Gravity Drop Simulator is a website that simulates how long it takes for a ball to fall to the ground under the gravity of different planets in the solar system. It calculates the falling time, air resistance, ball mass, and the planet’s gravity. Users can input the ball’s mass, the planet, and the drop height. The simulation includes real-time animations and data tables that update dynamically.",
    learn:
      "I improved my skills in physics simulations, real-time animations, and creating responsive interactive data tables.",
  },
  {
    title: "SAFEHUB",
    image: "./Projects/SAFEHUB.jpeg",
    github: "https://github.com/Setthasat/safehub",
    link: "https://safehub.vercel.app/",
    about:
      "SAFEHUB is a landing hub that brings together fun and educational pages about fascinating facts from around the world — helping you discover and understand our world better.",
    learn:
      "I practiced designing clean landing pages and organizing multiple mini-projects in a cohesive hub.",
  },
  {
    title: "TESTFORGE",
    image: "./Projects/TESTFORGE.jpeg",
    github: "https://github.com/Setthasat/TestForge",
    link: "https://test-forge-tawny.vercel.app/",
    about:
      "TESTFORGE is a website that lets you create your own mock tests in just a few seconds. Simply enter your test topic, copy the generated prompt and paste it into an AI chat, then copy the AI’s response back into TSTFORGE. The system scans the AI’s responses, maps them into a structured test, and lets you take your mock test with a recap to help improve your skills. All answers are encoded in Base64 to prevent users from seeing them before taking the test.",
    learn:
      "I learned how to work with AI-generated content, scan and map responses into structured tests, encode data securely, and streamline user workflows for custom test creation.",
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <section
      className="w-screen flex flex-col items-center px-4 md:px-24 py-12 border-b-[3px] bg-gray-100 relative"
      id="projects"
    >
      <h1 className="text-3xl font-bold border-[3px] w-full p-3 text-center mb-[2rem] bg-white">
        PROJECTS
      </h1>

      <div className="hidden md:flex flex-col gap-6 w-full ">
        <div className="flex gap-6 w-full">
          {projects.slice(0, 2).map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              large={index === 0}
              onLearnMore={() => setSelectedProject(project)}
            />
          ))}
        </div>

        <div className="flex gap-6 w-full">
          {projects.slice(2, 4).map((project, index) => (
            <ProjectCard
              key={index + 2}
              project={project}
              index={index + 2}
              large={index === 1}
              onLearnMore={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6 w-full md:hidden bg">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            index={index}
            onLearnMore={() => setSelectedProject(project)}
            isMobile
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            />

            <motion.div
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
              w-[95%] md:w-[70%] lg:w-[50%] max-h-[85vh] z-50 bg-white border-[3px] 
              flex flex-col overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center border-b-[2px] p-3">
                <div
                  onClick={() => setSelectedProject(null)}
                  className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer transition-all duration-300 hover:bg-black group"
                >
                  <X
                    size={20}
                    className="text-black group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <p className="text-lg font-semibold">{selectedProject.title}</p>
                <div className="w-8 h-8"></div>
              </div>

              <div className="flex-1 overflow-y-auto p-6 text-gray-700 space-y-6">
                <div className="w-full h-64 md:h-80 overflow-hidden border-[2px]">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition duration-500"
                  />
                </div>

                <div>
                  <h2 className="text-2xl font-bold p-2 border-2 text-center">
                    What is {selectedProject.title} ?
                  </h2>
                  <p className="text-gray-600 text-xl mt-3 text-justify">
                    {selectedProject.about}
                  </p>
                  <h2 className="text-2xl font-bold p-2 border-2 text-center mt-6">
                    What I learn ?
                  </h2>
                  <p className="text-gray-600 text-xl text-justify mt-3 ">
                    {selectedProject.learn}
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center border-t-[2px] p-4 text-xl gap-4 text-center">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-[2px] w-[60%] px-2 py-3 hover:bg-black hover:text-white transition text-lg"
                >
                  EXPLORE NOW
                </a>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-[2px] w-[40%] px-2 py-3 hover:bg-black hover:text-white transition text-lg"
                >
                  GITHUB
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({ project, index, onLearnMore, large = false, isMobile = false }) {
  return (
    <motion.div
      className={`border-[2px] shadow-md flex flex-col bg-white ${
        isMobile ? "w-full" : large ? "w-[58%]" : "w-[42%]"
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-center border-b-[2px] p-2 text-sm">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full border-[2px]"></div>
          <div className="w-3 h-3 rounded-full border-[2px]"></div>
          <div className="w-3 h-3 rounded-full border-[2px]"></div>
        </div>
        <p className="text-lg">{project.title}</p>
      </div>

      <div className="w-full h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition duration-500"
        />
      </div>

      <div className="flex justify-between items-center border-t-[2px] p-4 text-xl gap-4 text-center">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="border-[2px] w-[60%] px-2 py-3 hover:bg-black hover:text-white transition text-lg"
        >
          EXPLORE NOW
        </a>
        <button
          onClick={onLearnMore}
          className="border-[2px] w-[40%] px-2 py-3 hover:bg-black hover:text-white transition text-lg"
        >
          Learn more
        </button>
      </div>
    </motion.div>
  );
}

export default Projects;
