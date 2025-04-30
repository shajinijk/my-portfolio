import React from 'react';
import '../styles/Navbar.css'; // Should include slideDown animation

function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <>
      {/* Optional dim background */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* Slide-from-top Centered Dropdown */}
      {sidebarOpen && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 w-11/12 max-w-md bg-white rounded-lg shadow-lg px-6 py-6 z-50 animate-slideDown">
          {/* Close Button */}
          <div className="absolute top-2 right-3">
            <button
              onClick={toggleSidebar}
              className="text-gray-500 hover:text-red-500 text-xl font-bold"
            >
              &times;
            </button>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4 mt-6">
            {['Home', 'About', 'Projects', 'Resume', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={toggleSidebar}
                className="block text-center text-lg font-semibold bg-blue-100 rounded-md py-2 hover:bg-blue-600 hover:text-white transition"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
