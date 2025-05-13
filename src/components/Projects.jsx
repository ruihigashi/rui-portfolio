import React from "react";

export default function Projects() {
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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          プロジェクト一覧
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white text-black">
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
