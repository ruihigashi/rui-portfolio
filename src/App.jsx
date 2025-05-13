import React, { useState, useEffect } from "react";
import "./index.css";
import SakuraCanvas from "./components/SakuraCanvas";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import AboutIntro from "./components/AboutIntro";
import Loading from './components/Loading/Loading';
import Contact from './components/Contact';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500);
  }, []);

  return (
    <>
      {loading ? <Loading /> : (
        <div className="font-sans text-gray-900 bg-black relative overflow-x-hidden">
          <SakuraCanvas />
          <Header />
          <div id="hero">
            <Hero />
          </div>
          <div id="aboutIntro">
            <AboutIntro />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="contact">
            <Contact />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}