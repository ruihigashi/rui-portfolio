import React, { useEffect, useState } from "react";
import passit from "../assets/images/passit.jpg";
import mdc from "../assets/images/mdc.jpg";
import healpass from "../assets/images/healpass.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Passit",
      description:
        "2024年に開催されたブロックチェーンを用いたビジネスモデル大会で特別賞を受賞した際の作品",
      image: passit,
      link: "https://protopedia.net/prototype/6737",
    },
    {
      title: "ASMtool",
      description:
        "Vue.js + Pythonで作成したASMtool。\n2024年12月に開催されたMBSDが主催するセキュリティコンテストで最優秀賞を受賞した際の作品。",
      image: mdc,
      link: "https://protopedia.net/prototype/6731",
    },
    {
      title: "Healpass",
      description:
        "Figmaで作成したUIキットやコンポーネントのデザイン集。",
      image: healpass,
      link: "https://protopedia.net/prototype/6090",
    },
  ];

  return (
    <section className="min-h-screen py-16 px-4 bg-gray-100 text-gray-900 snap-start" id="projects">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-semibold text-center mb-6 font-serif tracking-wide">
          Output
        </h2>
        <p className="text-center text-gray-500 max-w-2xl mx-auto mt-4 mb-10 text-sm md:text-base leading-relaxed">
          下記はこれまでハッカソン等の様々なコンテストに提出した成果物です。
        </p>

        <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer bg-white text-black rounded-xl overflow-hidden shadow-md 
                         transform transition duration-500 ease-in-out 
                         hover:scale-105 hover:-translate-y-2 hover:shadow-2xl 
                         w-[270px]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[170px] object-cover"
              />
              <div className="p-4">
                <h3 className="text-left text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-700 whitespace-pre-line mb-3">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* モーダル表示部分 */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
            <div className="bg-white text-black rounded-lg max-w-md w-full p-6 relative shadow-lg animate-fadeInUp">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
              >
                ×
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
              <p className="text-gray-700 whitespace-pre-line mb-4">{selectedProject.description}</p>
              <a
                href={selectedProject.link}
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                外部リンクを開く
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
