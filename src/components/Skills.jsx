// components/Skills.jsx
import React from "react";
import { Star } from "lucide-react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaJava, FaPython, FaPhp, FaLaravel, FaVuejs, FaAws, FaDatabase, FaDocker, FaLinux, FaGithub, FaWindows } from "react-icons/fa";
import RadarChart from "./RadarChart";

export default function Skills() {
  return (
    <section className="py-20 px-4 bg-white text-black" id="skills">
      <div className="max-w-5xl mx-auto text-center">
        <h2  className="text-4xl md:text-6xl font-semibold mb-6 font-serif tracking-wide">SKILL</h2>
        <p className="text-gray-600 mt-4 text-sm md:text-base leading-relaxed">
          クラウド関連を中心に幅広く技術習得に励んでおります。<br />
          これからも日々研鑽していきます！以下チャートは各スキルごとの得意度をレートで示しています。
        </p>

        <div className="my-12">
          <RadarChart />
        </div>

        <h3 className="text-xl font-bold mb-6 tracking-wide border-b-2 border-gray-300 inline-block pb-2"> FRONT-END</h3>
        <div className="grid md:grid-cols-2 gap-10 text-left max-w-4xl mx-auto mb-16">
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

        <h3 className="text-xl font-bold mb-6 tracking-wide border-b-2 border-gray-300 inline-block pb-2"> BACK-END</h3>
        <div className="grid md:grid-cols-2 gap-10 text-left max-w-4xl mx-auto mb-16">
          <SkillItem
            icon={<FaJava className="text-5xl text-red-600" />}
            name="Java"
            stars={4}
            description="Javaを通してオブジェクト指向を学習し、開発環境ではEclipseを使用しました。"
          />
          <SkillItem
            icon={<FaPhp className="text-5xl text-indigo-600" />}
            name="PHP"
            stars={3}
            description="LAMP環境構築を学ぶために使用しました。"
          />
          <SkillItem
            icon={<FaPython className="text-5xl text-yellow-600" />}
            name="Python"
            stars={2}
            description="Webスクレイピングや定型作業自動化のために使用しています。FWについては独学中です。"
          />
        </div>

        <h3 className="text-xl font-bold mb-6 tracking-wide border-b-2 border-gray-300 inline-block pb-2"> FW</h3>
        <div className="grid md:grid-cols-2 gap-10 text-left max-w-4xl mx-auto mb-16">
          <SkillItem
            icon={<FaLaravel className="text-5xl text-red-600" />}
            name="Laravel"
            stars={3}
            description="LAMP環境構築を学ぶために使用しました。"
          />
          <SkillItem
            icon={<FaVuejs className="text-5xl text-green-600" />}
            name="Vue.js"
            stars={2}
            description="Webスクレイピングや定型作業自動化のために使用しています。FWについては独学中です。"
          />
        </div>

        <h3 className="text-xl font-bold mb-6 tracking-wide border-b-2 border-gray-300 inline-block pb-2"> DB</h3>
        <div className="grid md:grid-cols-2 gap-10 text-left max-w-4xl mx-auto mb-16">
          <SkillItem
            icon={<FaDatabase className="text-5xl text-gray-700" />}
            name="SQLServer"
            stars={3}
            description="実務では主にSQLServerを使用していました。"
          />
          <SkillItem
            icon={<FaDatabase className="text-5xl text-gray-700" />}
            name="MySQL"
            stars={3}
            description="LAMP環境構築を学ぶために使用しました。"
          />
        </div>

        <h3 className="text-xl font-bold mb-6 tracking-wide border-b-2 border-gray-300 inline-block pb-2"> CLOUD</h3>
        <div className="grid md:grid-cols-1 gap-10 text-left max-w-4xl mx-auto mb-16">
          <SkillItem
            icon={<FaAws className="text-5xl text-orange-500" />}
            name="AWS"
            stars={5}
            description="VPCやEC2やCloudFormationなどによるクラウドインフラ構築が可能です。AWS認定全冠取得（SAP/DOP/ANS/MLS/DBS/SCS/SAA/SOA/DVA/DEA/MLA/AIF/CLF）。"
          />
        </div>

        <h3 className="text-xl font-bold mb-6 tracking-wide border-b-2 border-gray-300 inline-block pb-2"> INFRA</h3>
        <div className="grid md:grid-cols-1 gap-10 text-left max-w-4xl mx-auto mb-16">
          <SkillItem
            icon={<FaDocker className="text-5xl text-indigo-600" />}
            name="Docker/Docker Compose"
            stars={2}
            description="VPCやEC2やCloudFormationなどによるクラウドインフラ構築が可能です。AWS認定全冠取得（SAP/DOP/ANS/MLS/DBS/SCS/SAA/SOA/DVA/DEA/MLA/AIF/CLF）。"
          />
        </div>

        <h3 className="text-xl font-bold mb-6 tracking-wide border-b-2 border-gray-300 inline-block pb-2">OS</h3>
        <div className="grid md:grid-cols-1 gap-10 text-left max-w-4xl mx-auto mb-16">
          <SkillItem
            icon={<FaLinux className="text-5xl" />}
            name="Linux(centOS)"
            stars={3}
            description="VPCやEC2やCloudFormationなどによるクラウドインフラ構築が可能です。AWS認定全冠取得（SAP/DOP/ANS/MLS/DBS/SCS/SAA/SOA/DVA/DEA/MLA/AIF/CLF）。"
          />

          <SkillItem
            icon={<FaWindows className="text-5xl" />}
            name="Windows"
            stars={4}
            description="VPCやEC2やCloudFormationなどによるクラウドインフラ構築が可能です。AWS認定全冠取得（SAP/DOP/ANS/MLS/DBS/SCS/SAA/SOA/DVA/DEA/MLA/AIF/CLF）。"
          />
        </div>

        <h3 className="text-xl font-bold mb-6 tracking-wide border-b-2 border-gray-300 inline-block pb-2">TOOL</h3>
        <div className="grid md:grid-cols-1 gap-10 text-left max-w-4xl mx-auto mb-16">
          <SkillItem
            icon={<FaGithub className="text-5xl" />}
            name="GitHub"
            stars={3}
            description="VPCやEC2やCloudFormationなどによるクラウドインフラ構築が可能です。AWS認定全冠取得（SAP/DOP/ANS/MLS/DBS/SCS/SAA/SOA/DVA/DEA/MLA/AIF/CLF）。"
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
        <h4 className="text-sm font-bold mb-2">{name}</h4>
        <div className="flex mb-3">
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