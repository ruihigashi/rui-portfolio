  import React, { useEffect } from "react";
  import { motion, useAnimation } from "framer-motion";
  import { useInView } from "react-intersection-observer";
  import logo from "../assets/images/kina.jpg";

  export default function Hero() {
    const controls = useAnimation();
    const pControls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    useEffect(() => {
      if (inView) {
        controls.start("visible").then(() => {
          pControls.start("visible");
        });
      }
    }, [controls, pControls, inView]);

    const title = "RUI HIGASHI";
    const description = "ENGINEER PORTFOLIO.";

    const letterVariant = {
      hidden: { opacity: 0, y: 20 },
      visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.05,
          duration: 0.4,
        },
      }),
    };

    const letterVariantP = {
      hidden: { opacity: 0, y: 20 },
      visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.03,
          duration: 0.3,
        },
      }),
    };

    return (
      <section
        ref={ref}
        className="relative min-h-screen w-full text-white flex flex-col justify-center items-center px-6 overflow-hidden z-10 snap-start"
      >
        <div className="text-center max-w-3xl">
          <div className="flex flex-col items-center mb-4">
            <img src={logo} alt="Kina" className="w-20 h-20 rounded-full border-2 border-white mb-4" />
            <h1 className="text-5xl md:text-7xl font-light leading-tight tracking-wide flex flex-wrap justify-center">
              {title.split("").map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariant}
                  initial="hidden"
                  animate={controls}
                  className={`${char === " " ? "w-4" : ""}`}
                >
                  {char}
                </motion.span>
              ))}
            </h1>
          </div>
          <p className="mt-4 text-lg md:text-xl text-gray-400 flex justify-center flex-wrap">
            {description.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariantP}
                initial="hidden"
                animate={pControls}
                className={`${char === " " ? "w-2" : ""}`}
              >
                {char}
              </motion.span>
            ))}
          </p>
        </div>
      </section>
    );
  }
