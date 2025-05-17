import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { SiFirebase } from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaJava, FaPython, FaPhp, FaLaravel, FaVuejs, FaAws, FaDatabase, FaDocker, FaLinux, FaGithub, FaWindows, FaReact } from "react-icons/fa";
import RadarChart from "./RadarChart";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Skills() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  return (
    <section className="py-20 px-4 bg-zinc-900 text-white" id="skills">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-4xl md:text-6xl font-semibold mb-6 font-serif tracking-wide">SKILL</h2>
    <p className="text-gray-300 mt-4 text-sm md:text-base leading-relaxed" data-aos="fade-up">
      私の現在のスキルを8つの項目に分けてグラフィカルにまとめました。<br />
      開発では主にフロントエンドを担当し、広く浅くではありますがバックエンドの開発にも携わってきました。<br />
      今後はバックエンド系の開発（クラウド含む）にも力をいれ、オールラウンドに対応できるエンジニアになりたいと考えています。<br />
      エンジニアとしてはまだまだ未熟者ではありますが今現在のスキルがどれくらいかが伝われば幸いです。<br />
      <br />
      ※授業やハッカソンの開発等で実際に使用した技術のみ掲載しております。
    </p>

    <div className="my-12" data-aos="fade-up">
      <RadarChart />
    </div>

    {!isOpen && (
      <button
        onClick={() => {
          setIsOpen(true);
          setTimeout(() => {
            document.getElementById("skill-details")?.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }}
        className="mx-auto mt-4 flex items-center justify-center text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 px-6 py-2 rounded-full font-semibold shadow-md transition-all duration-300"
      >
        もっと見る
      </button>
    )}

    {isOpen && (
      <div className="mt-10 space-y-16" id="skill-details">
        <SkillSection title="FRONT-END">
              <div data-aos="fade-up">
                <SkillItem icon={<FaHtml5 className="text-5xl text-orange-500" data-aos="fade-up" />} name="HTML5" stars={4} description="授業等で学習し、ＥＣサイトを作成した際に使用。" />
                <SkillItem icon={<FaCss3Alt className="text-5xl text-blue-500" data-aos="fade-up" />} name="CSS3" stars={4} description="授業等で学習し、ＥＣサイトを作成した際に使用。" />
                <SkillItem icon={<FaJsSquare className="text-5xl text-yellow-500" />} name="JavaScript" stars={3} description="JavaScriptを使って動的なUIの実装に挑戦中。" />
              </div>
            </SkillSection>

            <SkillSection title="BACK-END">
              <div data-aos="fade-up">
                <SkillItem icon={<FaJava className="text-5xl text-red-600" />} name="Java" stars={3} description="授業等でJavaを通してオブジェクト指向を学習し、開発環境ではEclipseを使用しました。" />
                <SkillItem icon={<FaPhp className="text-5xl text-indigo-600" />} name="PHP" stars={3} description="授業等でPHPを学習し、活用してwebサイトを作成。" />
                <SkillItem icon={<FaPython className="text-5xl text-yellow-600" />} name="Python" stars={3} description="セキュリティコンテストに参加した際に少し使用。独学で学習中。" />
              </div>
            </SkillSection>

            <SkillSection title="FW">
              <div data-aos="fade-up">
                <SkillItem icon={<FaLaravel className="text-5xl text-red-600" />} name="Laravel" stars={3} description="授業で学習。MDCモデルを理解し、実際に使用できる。" />
                <SkillItem icon={<FaVuejs className="text-5xl text-green-600" />} name="Vue.js" stars={2} description="セキュリティコンテストに参加した際に独学で学習。実際に使用してサイト作成。" />
                <SkillItem icon={<FaReact className="text-5xl" color="#61DAFB" />} name="React.js" stars={4} description="本サイトや、母の美容室サイトを作成した際に独学で学習。実際に使用してサイト作成。" />
              </div>
            </SkillSection>

            <SkillSection title="DB">
              <div data-aos="fade-up">
                <SkillItem icon={<SiFirebase className="text-5xl text-red-500" />} name="Firebase" stars={3} description="アプリ開発やwebサイト作成時は主にFirebaseを使用。" />
                <SkillItem icon={<FaDatabase className="text-5xl text-gray-700" />} name="MySQL" stars={3} description="LAMP環境構築を学ぶために使用しました。" />
              </div>
            </SkillSection>

            <SkillSection title="CLOUD">
              <div data-aos="fade-up">
                <SkillItem icon={<FaAws className="text-5xl text-orange-500" />} name="AWS" stars={2} description="授業内で学習。実務経験なし。" />
              </div>
            </SkillSection>

            <SkillSection title="INFRA">
              <div data-aos="fade-up">
                <SkillItem icon={<FaDocker className="text-5xl text-indigo-600" />} name="Docker/Docker Compose" stars={2} description="セキュリティコンテストでネットワークを構築した際に少し使用。" />
              </div>
            </SkillSection>

            <SkillSection title="OS">
              <div data-aos="fade-up">
                <SkillItem icon={<FaLinux className="text-5xl" />} name="Linux(centOS)" stars={3} description="インストールから環境設定、開発が可能。" />
                <SkillItem icon={<FaWindows className="text-5xl" />} name="Windows" stars={4} description="インストールから環境設定、開発が可能。開発では、Windows11を使用しています）。" />
              </div>
            </SkillSection>

            <SkillSection title="TOOL">
              <div data-aos="fade-up">
                <SkillItem icon={<FaGithub className="text-5xl" />} name="GitHub" stars={5} description="バージョン管理でよく使用されるため、独学しました。開発の際には全てGitを使用して管理。" />
              </div>
            </SkillSection>
        <div className="text-center">
          <button
            onClick={() => {
              setIsOpen(false);
              setTimeout(() => {
                document.querySelector("#skills button")?.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }}
            className="mx-auto mt-4 flex items-center justify-center text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 px-6 py-2 rounded-full font-semibold shadow-md transition-all duration-300"
          >
            閉じる
          </button>
        </div>
      </div>
    )}
  </div>
</section>      
  );
}

function SkillSection({ title, children }) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-6 tracking-wide border-b-2 border-gray-300 inline-block pb-2">{title}</h3>
      <div className="grid md:grid-cols-2 gap-10 text-left max-w-4xl mx-auto mb-16">
        {children}
      </div>
    </div>
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
              fill={i < stars ? "#facc15" : "#d1d5db"}
              stroke=""
              className="mr-1"
            />
          ))}
        </div>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
  );
}