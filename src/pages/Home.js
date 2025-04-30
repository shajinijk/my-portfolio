import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.jpeg'; // Ensure the image exists
import '../styles/global.css'; // Ensure the path is correct
import './Home.css';
import { ReactTyped } from 'react-typed';

function Home() {
  return (
    <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
  className="min-h-screen flex flex-col md:flex-row justify-center items-center text-center p-6 pt-20"
  style={{
    background: 'linear-gradient(to bottom, #ffffff 51%,rgb(94, 151, 242) 49%)'
  }}
>
      {/* Image Section (comes first on mobile, last on larger screens) */}
      <motion.div
        className="flex-shrink-0 mb-6 md:mb-0 md:w-1/2 md:ml-12 flex justify-center items-center order-0 md:order-1 pt-10" // Updated the order classes
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <motion.div
          className="w-80 h-80 rounded-lg border-8 border-blue-600 shadow-xl overflow-hidden transform transition-all duration-500 ease-in-out hover:scale-105 hover:rotate-6"
          style={{ height: 'auto', width: '100%', maxWidth: '350px' }} // Make image responsive
          whileHover={{ scale: 1.05, rotate: 6 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src={profileImage}
            alt="Your Name"
            className="w-full h-auto object-cover" // Ensure the image fits the container proportionally
          />
        </motion.div>
      </motion.div>

      {/* Text Section (comes after the image on mobile, before it on larger screens) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center md:text-left max-w-xl mb-6 md:mb-0 md:w-1/2 order-1 md:order-0" // Updated the order classes
      >
        <h1 className="text-5xl font-bold text-blue-700 mb-4">
        <ReactTyped
          strings={["Hi, I'm Shajini...", "I'm a Web Developer", "I Love Building Projects"]}
          typeSpeed={60}
          backSpeed={40}
          loop
        />
        </h1>
        <p className="text-lg text-gray-800 mb-6">
          I'm an undergraduate student passionate about web development, design, and creating meaningful user experiences. Currently exploring internship opportunities to grow my skills and contribute to exciting projects.
        </p>

        {/* Call-to-Action Button */}
        <motion.div className="mt-6">
          <a
            href="#projects"  // Scrolls to the Projects section
            className="px-8 py-3 text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            See My Work
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Home; 