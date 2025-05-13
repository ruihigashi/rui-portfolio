import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import logo from "../assets/images/kina.jpg";

export default function Hero() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen w-full text-white flex flex-col justify-center items-center px-6 overflow-hidden z-10 snap-start"
    >
      <motion.div
        className="text-center max-w-3xl"
        variants={fadeUpVariant}
        initial="hidden"
        animate={controls}
      >
        <div className="flex flex-col items-center mb-4">
          <img src={logo} alt="Kina" className="w-20 h-20 rounded-full border-2 border-white mb-4" />
          <h1 className="text-5xl md:text-7xl font-light leading-tight tracking-wide">
            I’m <span className="font-bold text-white">Kina</span>
          </h1>
        </div>
        <p className="mt-4 text-lg md:text-xl text-gray-400">
          I design and code beautifully simple things. I love what I do.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-200 transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-white text-white text-sm font-medium rounded-full hover:bg-white hover:text-black transition"
          >
            Get in Touch
          </a>
        </div>
      </motion.div>
    </section>
  );
}