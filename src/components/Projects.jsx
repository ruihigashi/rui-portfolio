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
      description: "Figmaで作成したUIキットやコンポーネントのデザイン集。",
      image: healpass,
      link: "https://protopedia.net/prototype/6090",
    },
    {
      title: "Passit2",
      description: "これは別の Passit プロジェクトです。",
      image: passit,
      link: "#",
    },
    {
      title: "ASMtool2",
      description: "これは別の ASMtool プロジェクトです。",
      image: mdc,
      link: "#",
    },
  ];

  return (
    <section className="min-h-screen py-16 px-4 bg-gray-100 text-gray-900 snap-start" id="projects" >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-semibold text-center mb-6 font-serif tracking-wide">
          Output
        </h2>
        <p className="text-center text-gray-500 max-w-2xl mx-auto mt-4 mb-10 text-sm md:text-base leading-relaxed">
          下記はこれまでハッカソン等の様々なコンテストに提出した成果物です。
        </p>

        {/* 横スクロール対応カード一覧 */}
        <div className="overflow-x-auto scrollbar-thin pb-4">
  <div className="flex gap-4 min-w-full px-2">
    {projects.map((project, index) => (
      <div
        key={index}
        onClick={() => setSelectedProject(project)}
        className="cursor-pointer bg-white text-black rounded-xl overflow-hidden shadow-md 
                   transform transition duration-500 ease-in-out 
                   hover:scale-105 hover:-translate-y-2 hover:shadow-2xl 
                   w-[270px] flex-shrink-0"
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
</div>

        {/* モーダル表示 */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
            <div className="bg-white text-black rounded-lg w-full max-w-4xl p-8 relative shadow-2xl animate-fadeInUp flex flex-col md:flex-row gap-6 max-h-[90vh] overflow-y-auto">
              {/* 閉じるボタン */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl font-bold"
              >
                ×
              </button>

              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 border-b pb-2">{selectedProject.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line mb-6">
                  {selectedProject.description}
                </p>
                <div className="space-y-3">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-blue-600 hover:underline text-sm font-medium"
                  >
                    🔗 外部リンクを開く
                  </a>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">使用言語など</h4>
                    <p className="text-sm text-gray-600">
                      React / TailwindCSS / Firebase など（任意で変更）
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="rounded-md w-full h-[280px] object-cover mb-4"
                />
                <div className="flex gap-2 overflow-x-auto">
                  <img
                    src={selectedProject.image}
                    className="w-20 h-16 object-cover rounded shadow-sm"
                  />
                  <img
                    src={selectedProject.image}
                    className="w-20 h-16 object-cover rounded shadow-sm"
                  />
                  <img
                    src={selectedProject.image}
                    className="w-20 h-16 object-cover rounded shadow-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}