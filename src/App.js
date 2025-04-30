import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/sidebar';

import './styles/global.css';
import './tailwind.css';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(prevState => !prevState);

  return (
    <div className="App scroll-smooth">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex flex-col min-h-screen">
        <Header toggleSidebar={toggleSidebar} />

        <main className="flex-grow">
          {/* Change Link to a tag with href for smooth scrolling */}
          <section id="home" className="scroll-mt-20"><Home /></section>
          <section id="about" className="scroll-mt-20"><About /></section>
          <section id="projects" className="scroll-mt-20"><Projects /></section>
          <section id="resume" className="scroll-mt-20"><Resume /></section>
          <section id="contact" className="scroll-mt-20"><Contact /></section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
