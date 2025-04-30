import React from 'react';
import { motion } from 'framer-motion';
import { CodeIcon, DatabaseIcon, TerminalIcon } from '@heroicons/react/solid'; // Updated Heroicons
import profile from '../assets/thusha.jpeg';

function About() {
  const skills = [
    { name: 'HTML', level: 90, icon: <CodeIcon className="w-5 h-5 text-blue-600" /> },
    { name: 'CSS', level: 85, icon: <CodeIcon className="w-5 h-5 text-blue-600" /> },
    { name: 'JavaScript', level: 80, icon: <CodeIcon className="w-5 h-5 text-blue-600" /> },
    { name: 'React', level: 75, icon: <CodeIcon className="w-5 h-5 text-blue-600" /> },
    { name: 'Node.js', level: 70, icon: <TerminalIcon className="w-5 h-5 text-green-500" /> },
    { name: 'Git', level: 80, icon: <TerminalIcon className="w-5 h-5 text-green-500" /> },
    { name: 'MongoDB', level: 65, icon: <DatabaseIcon className="w-5 h-5 text-green-600" /> },
    { name: 'MySQL', level: 70, icon: <DatabaseIcon className="w-5 h-5 text-green-600" /> },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex flex-col items-center px-6 py-12 sm:py-20"
    >
      <h2 className="text-4xl font-bold text-blue-600 mb-12 text-center">
        About Me
      </h2>

      {/* Two Columns for Image and Text */}
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div className="text-center sm:text-left">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            I'm a passionate learner and aspiring web developer with a strong foundation in front-end technologies. I enjoy solving problems, building projects, and constantly improving my skills.
          </p>
        </div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          whileHover={{ scale: 1.05 }}
          className="relative flex justify-center items-center"
        >
          {/* Circle Background */}
          <div className="absolute w-60 h-60 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full -z-10"></div>

          <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 rounded-full overflow-hidden shadow-2xl">
            <img
              src={profile} // Replace with your image URL
              alt="Shajini"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Animated Line Before Skills */}
      <motion.hr
        className="w-1/3 mx-auto mt-12 mb-6 border-t-2 border-blue-500"
        animate={{
          scaleX: [1, 1.1, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      />

      {/* Skills Section (4 Columns) */}
      <div className="w-full max-w-4xl mx-auto">
        <h4 className="text-xl font-semibold text-blue-600 mb-6 text-left">Skills</h4>

        {/* Grid of Skills (4 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              className="bg-gradient-to-r from-indigo-500 to-blue-600 p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-8 h-8 flex justify-center items-center bg-white rounded-full shadow-md">
                  {skill.icon}
                </div>
                <h5 className="font-semibold text-lg text-white">{skill.name}</h5>
              </div>

              {/* Progress Bar with Animation */}
              <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                <motion.div
                  className="h-2 bg-blue-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default About;
