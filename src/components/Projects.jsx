import React, { useEffect, useState } from "react";
import passit from "../assets/images/passit.jpg";
import passit1 from "../assets/images/passit1.jpg";
import passit2 from "../assets/images/passit2.jpg";
import passit3 from "../assets/images/passit3.jpg";
import passit4 from "../assets/images/passit4.jpg";
import mdc from "../assets/images/mdc.jpg";
import healpass from "../assets/images/healpass.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  useEffect(() => {
    if (selectedProject) {
      setSelectedImage(selectedProject.images?.[0] || selectedProject.image);
    }
  }, [selectedProject]);

  const projects = [
    {
      title: "Passit",
      shortDescription: "ブロックチェーンを用いた予約サービスの受賞作品。",
      description: (
        <>
          2024年に開催されたブロックチェーンを用いたビジネスモデル大会において、
          <br />
          予約キャンセルの再利用をテーマにした「Passit」を発案し、特別賞を受賞しました。
          <br />
          ブロックチェーンの利点である優れたデータの透明性とNFTがもつ様々な特性を掛け合わせ、
          予約の譲渡を可能にすることで予約キャンセルによる不利益を軽減しより多くの人に利益をもたらすことを目指しました。
        </>
      ),
      image: passit,
      images: [passit, passit1, passit2, passit3, passit4],
      link: "https://protopedia.net/prototype/6737",
      technology:
        <>
          ブロックチェーン(Ethereum), スマートコントラクト(ERC-721),<br />
          Solidity, Ruby on Rails, Native, Flutter, Firebase, Firestore
        </>
    },
    {
      title: "ASMtool",

      shortDescription: "React.js + Pythonで作成したASMtool。\n2024年12月に開催されたMBSDが主催するセキュリティコンテストで最優秀賞を受賞した際の作品。",
      description: (
        <>
          2024年12月に開催された株式会社MBSD（三井物産セキュアディレクション）が主催するセキュリティコンテストにおいて、
          ASMをテーマにした課題に対して調査を行い手法を提案し実現することで最優秀賞を受賞しました。
          <br />
          ASMに対してどのようなアプローチで調査を行い評価をするのかという論文を作成し、
          実際に90個のツールを掛け合わせてパッシブスキャンを行い、脆弱性などを調べるツールを作成しました。
          <br />
          私はこのプロダクトにおいて、調査を行う疑似的ネットワークの構築を行い、
          webサイトにおけるフロントエンドや危険度を測定するためのバックエンドを担当しました。
        </>
      ),
      image: mdc,
      images: [],
      link: "https://protopedia.net/prototype/6731",
      technology: "React.js, Next.js, tailwindcss, python,"

    },
    {
      title: "Healpass",
      shortDescription: "Figmaで作成したUIキットやコンポーネントのデザイン集。",
      description: (
        <>
          2024年に開催されたブロックチェーンを用いたビジネスモデル大会において、
          <br />
          予約キャンセルの再利用をテーマにした「Passit」を開発し、特別賞を受賞しました。
          <br />
          チームで企画立案からプロトタイプまで短期間で構築しました。
        </>
      ),
      image: healpass,
      images: [],
      link: "https://protopedia.net/prototype/6090",
      technology: ""
    },
    {
      title: "Passit",
      shortDescription: "a",
      description: (
        <>
          2024年に開催されたブロックチェーンを用いたビジネスモデル大会において、
          <br />
          予約キャンセルの再利用をテーマにした「Passit」を開発し、特別賞を受賞しました。
          <br />
          チームで企画立案からプロトタイプまで短期間で構築しました。
        </>
      ),
      image: passit,
      images: [],
      link: "https://protopedia.net/prototype/6737",
      technology: ""
    },
    {
      title: "ASMtool",
      shortDescription: "a",
      description: (
        <>
          2024年に開催されたブロックチェーンを用いたビジネスモデル大会において、
          <br />
          予約キャンセルの再利用をテーマにした「Passit」を開発し、特別賞を受賞しました。
          <br />
          チームで企画立案からプロトタイプまで短期間で構築しました。
        </>
      ),
      image: mdc,
      images: [],
      link: "https://protopedia.net/prototype/6731",
      technology: ""
    },
    {
      title: "Healpass",
      shortDescription: "a",
      description: (
        <>
          2024年に開催されたブロックチェーンを用いたビジネスモデル大会において、
          <br />
          予約キャンセルの再利用をテーマにした「Passit」を開発し、特別賞を受賞しました。
          <br />
          チームで企画立案からプロトタイプまで短期間で構築しました。
        </>
      ),
      image: healpass,
      images: [],
      link: "https://protopedia.net/prototype/6090",
      technology: ""
    },
  ];

  return (
    <section className="min-h-screen py-16 px-4 bg-gray-100 text-gray-900 snap-start" id="projects">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-semibold text-center mb-6 font-serif tracking-wide">
          Output
        </h2>
        <p className="text-center text-gray-500 max-w-2xl mx-auto mt-4 mb-10 text-sm md:text-base leading-relaxed" data-aos="fade-up">
          下記はこれまでハッカソン等の様々なコンテストに提出した成果物です。
        </p>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-5">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer bg-white text-black rounded-xl overflow-hidden shadow-md 
                 transform transition duration-500 ease-in-out 
                 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl 
                 w-[320px] h-[300px] flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[170px] object-cover rounded-t-xl"
              />
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-700 whitespace-pre-line">
                    {project.shortDescription}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>



        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white text-black rounded-lg w-full max-w-4xl h-[90vh] overflow-y-auto p-8 relative shadow-2xl animate-fadeInUp flex flex-col md:flex-row gap-6 justify-center">


              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-purple-200 text-gray-600 hover:bg-gray-300 hover:text-black text-sm font-bold transition"
              >
                ×
              </button>

<div className="flex-1 flex flex-col justify-between">
  {/* 上部：タイトルと説明文 */}
  <div>
    <h3 className="text-2xl font-bold mb-4 border-b pb-2">{selectedProject.title}</h3>
    <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line mb-6">
      {selectedProject.description}
    </p>
  </div>

  <div className="space-y-3">
    <a
      href={selectedProject.link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block text-blue-600 hover:underline text-sm font-medium"
    >
      🔗 Proto Pediaをみる
    </a>
    <div>
      <h4 className="font-semibold text-gray-800 mb-2 border-b pb-2">使用言語など</h4>
      <p className="text-sm text-gray-600">{selectedProject.technology}</p>
    </div>
  </div>
</div>

              <div className="flex-1 flex flex-col justify-center ">
                {/* メイン画像 */}
                <img
                  src={selectedImage}
                  alt={selectedProject.title}
                  className="rounded-md w-full h-auto max-h-[300px] object-contain mb-4 border shadow-md"
                />

                {/* サムネイル画像（横並び） */}
                <div className="relative">
                  <div className="flex gap-2 overflow-x-auto scrollbar-thin scrollbar-thumb-indigo-400 scrollbar-track-gray-100 pt-2">
                    {(selectedProject.images || [selectedProject.image]).map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        onClick={() => setSelectedImage(img)}
                        className={`w-24 h-16 object-contain bg-white rounded shadow-sm cursor-pointer border ml-1 mb-1 ${img === selectedImage ? "ring-2 ring-indigo-500" : ""
                          }`}
                        style={{ boxSizing: 'content-box' }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
