// App.jsx
import React from "react";
import "./index.css";
import SakuraCanvas from "./components/SakuraCanvas";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { useEffect, useRef } from "react";

export default function App() {
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const sections = Array.from(container.children).filter((el) =>
      el.classList.contains("snap-start")
    );
    sectionRefs.current = sections;

    let currentIndex = 0;
    let isThrottled = false;

    const scrollToSection = (index) => {
      sections[index].scrollIntoView({ behavior: "smooth" });
    };

    const handleWheel = (e) => {
      if (isThrottled) return;

      isThrottled = true;
      setTimeout(() => (isThrottled = false), 1000);

      if (e.deltaY > 0 && currentIndex < sections.length - 1) {
        currentIndex++;
        scrollToSection(currentIndex);
      } else if (e.deltaY < 0 && currentIndex > 0) {
        currentIndex--;
        scrollToSection(currentIndex);
      }
    };

    container.addEventListener("wheel", handleWheel);
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div
      ref={containerRef}
      className="font-sans text-gray-900 bg-black relative h-screen overflow-hidden"
    >
      <SakuraCanvas />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

