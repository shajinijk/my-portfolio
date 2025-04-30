import React from 'react';

function Resume() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center text-center p-8 pt-24">
      {/* Title Section */}
      <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-12 text-center">My Resume</h2>

      {/* Resume Overview */}
      <div className="max-w-4xl w-full">
        <p className="text-lg text-gray-700 mb-6">
          Here's an overview of my academic.
        </p>

        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Academic Background</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>B.Sc in Information Technology, Rajarata University Of SriLanka</li>
            <li>Diploma in Information Technology, Esoft Metro Campus </li>
            <li>National Certificate in Professional English, Department Of Technical Education and Training</li>
          </ul>
        </div>


        {/* Download Button */}
        <div className="mt-8">
          <a
            href="/Thushajini_Jeyakumar.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;
