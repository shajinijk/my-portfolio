import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col justify-center items-center text-center px-6 py-12">
      {/* Animated line */}
      <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-pulse rounded-full mb-6"></div>

      <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">Connect</h2>
      <p className="text-lg mb-8 max-w-xl">
        I’d love to connect! Whether you have an opportunity, a question, or just want to say hello — feel free to reach out through any of the channels below. I’m always open to meaningful conversations and new possibilities.
      </p>

      <div className="flex justify-center space-x-6 mb-8">
        <a
          href="https://www.linkedin.com/in/thushajini-jeyakumar-910a272b3"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a
          href="https://github.com/shajinijk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-900"
        >
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a
          href="https://www.instagram.com/thushajinijk/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-600 hover:text-pink-800"
        >
          <i className="fab fa-instagram fa-2x"></i>
        </a>
        <a
          href="https://www.facebook.com/share/1BtmEGceLi/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-900"
        >
          <i className="fab fa-facebook fa-2x"></i>
        </a>
      </div>

      <div className="text-left text-gray-800 space-y-4 text-lg">
        <p className="flex items-center gap-3">
          <FaEnvelope className="text-blue-500" /> Email: thushajini29@gmail.com
        </p>
        <p className="flex items-center gap-3">
          <FaPhone className="text-green-500" /> Phone: +94 76 062 2184
        </p>
        <p className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-red-500" /> Address: Elagady, Kopay North, Jaffna
        </p>
      </div>
    </div>
  );
}

export default Contact;
