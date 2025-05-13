import React from "react";
import { Code, Paintbrush, Smartphone } from "lucide-react";

export default function Skills() {
  const skills = [
    {
      icon: <Code className="w-8 h-8 text-blue-500" />,
      title: "フロントエンド開発",
      description: "React, Next.js, TypeScript などを使用したモダンなUI構築"
    },
    {
      icon: <Paintbrush className="w-8 h-8 text-green-500" />,
      title: "UI/UXデザイン",
      description: "Figmaを使った設計と、ユーザー中心のデザイン設計"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-500" />,
      title: "レスポンシブ対応",
      description: "モバイルファーストでの設計と最適なユーザー体験"
    }
  ];

  return (
    <section className="min-h-screen py-16 px-4 bg-black text-white snap-start" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          スキル一覧
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="p-6 border rounded-xl shadow hover:shadow-lg transition">
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-300">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}