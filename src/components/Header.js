import React, { useState } from 'react';
import '../styles/header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
    setMenuOpen(false);
  };

  return (
    <header className="bg-black fixed top-0 left-0 right-0 z-40 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">
          <a href="#home">THUSHAJINI JEYAKUMAR</a>
        </div>
        <nav className="hidden md:flex space-x-6 font-bold">
          {['home', 'about', 'projects', 'resume', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-white hover:text-blue-700 transition duration-300 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600 capitalize"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button className="md:hidden text-3xl text-white" onClick={toggleMenu}>
          ☰
        </button>
      </div>

      {/* Slide-Down Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-11/12 max-w-sm bg-black bg-opacity-70 text-white rounded-b-xl shadow-lg z-30 p-5 transition-transform duration-300 ease-in-out">
          <ul className="space-y-3">
            {['home', 'about', 'projects', 'resume', 'contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={() => handleItemClick(item)}
                  className={`block text-lg capitalize transition duration-300 px-4 py-2 rounded-lg ${
                    activeItem === item
                      ? 'font-bold text-blue-300 bg-blue-700'
                      : 'hover:text-blue-300 hover:bg-gray-800'
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
