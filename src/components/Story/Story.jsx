import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { storySteps } from "../../hooks/storyData";
import StoryStep from "./StoryStep";

export default function Story() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-purple-800 to-indigo-900 text-white snap-start" id="story">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-10 font-serif tracking-wide">
          My Story
        </h2>
        {storySteps.map((step, index) => (
          <StoryStep key={index} step={step} index={index} />
        ))}
      </div>
    </section>
  );
}
