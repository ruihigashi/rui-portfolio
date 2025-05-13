// components/Skills.jsx
import React from "react";
import { Star } from "lucide-react"; 
import { FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa"; 
import RadarChart from "./RadarChart";

export default function Skills() {
  return (
    <section className="py-20 px-4 bg-white text-black" id="skills">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide">SKILL</h2>
        <p className="text-gray-600 mt-4 text-sm md:text-base leading-relaxed">
          クラウド関連を中心に幅広く技術習得に励んでおります。<br />
          これからも日々研鑽していきます！以下チャートは各スキルごとの得意度をレートで示しています。
        </p>

        <div className="my-12">
          <RadarChart />
        </div>

        <h3 className="text-xl font-bold mb-6 tracking-wide">FRONT-END</h3>
        <div className="grid md:grid-cols-2 gap-10 text-left max-w-4xl mx-auto">
          <SkillItem
            icon={<FaHtml5 className="text-5xl text-orange-500" />}
            name="HTML5"
            stars={4}
            description="HTMLの独学をきっかけにオープン系開発に興味を持ちました。"
          />
          <SkillItem
            icon={<FaCss3Alt className="text-5xl text-blue-500" />}
            name="CSS3"
            stars={4}
            description="CSSの独学をきっかけにオープン系開発に興味を持ちました。"
          />
          <SkillItem
            icon={<FaJsSquare className="text-5xl text-yellow-500" />}
            name="JavaScript"
            stars={3}
            description="JavaScriptを使って動的なUIの実装に挑戦しています。"
          />
        </div>
      </div>
    </section>
  );
}

function SkillItem({ icon, name, stars, description }) {
  return (
    <div className="flex space-x-4 items-start">
      <div>{icon}</div>
      <div>
        <h4 className="text-lg font-bold mb-1">{name}</h4>
        <div className="flex mb-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              fill={i < stars ? "#000" : "none"}
              stroke="#000"
              className="mr-1"
            />
          ))}
        </div>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
    </div>
  );
}
