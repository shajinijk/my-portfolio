import React from 'react';
import { motion } from 'framer-motion';

function Resume() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center text-center p-8 pt-24">
      {/* Title Section with Animation */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-blue-600 mb-12 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Resume
      </motion.h2>

      {/* Resume Overview with Animation */}
      <div className="max-w-4xl w-full">
        <motion.p
          className="text-lg text-gray-700 mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Here's an overview of my academic background.
        </motion.p>

        <motion.div
          className="bg-white p-6 shadow-lg rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Academic Background</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>B.Sc in Information Technology, Rajarata University Of SriLanka</li>
            <li>Diploma in Information Technology, Esoft Metro Campus </li>
            <li>National Certificate in Professional English, Department Of Technical Education and Training</li>
          </ul>
        </motion.div>

        {/* Download Button with Animation */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="Thushajini_Jeyakumar.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300"
            whileHover={{ scale: 1.1, boxShadow: "0px 4px 15px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}

export default Resume;
