import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A responsive portfolio website built with React and Tailwind CSS.',
    github: 'https://github.com/yourusername/portfolio',
  },
  {
    title: 'Emergency-Assistance',
    description: 'An Android app provides real-time location tracking and emergency assistance with interactive map features.',
    github: 'https://github.com/shajini3/Emergency-Assistance',
  },
  {
    title: 'Task Manager',
    description: 'A Task Manager tool for my personal use, built with React.js, Node.js, Express.js, and MongoDB, allowing users to add, edit, delete, priotize and manage tasks and send reminders for each task.',
    github: 'https://github.com/shajinijk/TaskManager',
  },
  {
    title: 'Library-Management-System',
    description: 'An Android Library Management App with full CRUD functionality using SQLite for managing books, members, lending records, authors, publishers, and branch details.',
    github: 'https://github.com/shajini3/Library-Management-System/tree/master',
  },
  {
    title: 'Tree-Classification-Model',
    description: 'Developed a neural network model to accurately classify Kapok, Cassava, and Silk Cotton tree species using leaf measurements such as length, width, and petiole size.',
    github: 'https://github.com/shajini3/Tree-Classification-Model',
  },
];

function Projects() {
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 flex flex-col items-center px-4 py-20">
      <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-12 drop-shadow">My Projects</h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-6xl">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            custom={idx % 2 === 0 ? -1 : 1} // Even index projects slide from left, odd from right
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="bg-white/70 backdrop-blur-md border border-gray-200 p-8 rounded-2xl shadow-xl"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
            <p className="text-gray-600 text-base mb-4">{project.description}</p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm hover:scale-105 transition-transform duration-300 shadow-md"
            >
              <FaGithub className="mr-2" /> View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
