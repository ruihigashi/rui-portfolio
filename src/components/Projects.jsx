import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  const projects = [
    {
      title: "ポートフォリオサイト",
      description: "ReactとTailwindで制作した個人用ポートフォリオサイト。レスポンシブ対応。",
      image: "https://via.placeholder.com/600x400",
      link: "#"
    },
    {
      title: "タスク管理アプリ",
      description: "Next.js + Firebaseで構築したToDoアプリ。ログイン機能付き。",
      image: "https://via.placeholder.com/600x400",
      link: "#"
    },
    {
      title: "UIデザインサンプル",
      description: "Figmaで作成したUIキットやコンポーネントのデザイン集。",
      image: "https://via.placeholder.com/600x400",
      link: "#"
    }
  ];

  return (
    <section className="min-h-screen py-16 px-4 bg-gray-900 text-white snap-start" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-semibold text-center mb-12 font-serif tracking-wide">
          Output
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="rounded-xl overflow-hidden shadow transform transition duration-500 hover:scale-105 hover:shadow-2xl bg-white text-black"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a href={project.link} className="text-blue-500 hover:underline">
                  詳細を見る
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
