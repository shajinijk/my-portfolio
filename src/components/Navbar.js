import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaProjectDiagram, FaFileAlt, FaEnvelope } from 'react-icons/fa';
import '../styles/Navbar.css'; // Contains slideDown animation

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="relative z-50">
      {/* Menu Toggle Button */}
      <button
        onClick={toggleMenu}
        className="p-3 bg-blue-500 text-white fixed top-4 left-4 rounded-full z-50 shadow-lg"
      >
        {menuOpen ? 'Close' : 'Menu'}
      </button>

      {/* Slide-from-top Dropdown Menu */}
      {menuOpen && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 w-11/12 max-w-md bg-white shadow-2xl rounded-xl px-6 py-6 z-40 animate-slideDown">
          <ul className="space-y-4 text-center">
            <li>
              <Link to="/" onClick={toggleMenu} className="block text-lg text-blue-700 hover:underline">
                <FaHome className="inline mr-2" /> Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu} className="block text-lg text-blue-700 hover:underline">
                <FaUser className="inline mr-2" /> About
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={toggleMenu} className="block text-lg text-blue-700 hover:underline">
                <FaProjectDiagram className="inline mr-2" /> Projects
              </Link>
            </li>
            <li>
              <Link to="/resume" onClick={toggleMenu} className="block text-lg text-blue-700 hover:underline">
                <FaFileAlt className="inline mr-2" /> Resume
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu} className="block text-lg text-blue-700 hover:underline">
                <FaEnvelope className="inline mr-2" /> Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
