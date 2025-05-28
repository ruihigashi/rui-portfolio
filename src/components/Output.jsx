import { useEffect, useState } from "react";
import passit from "../assets/images/Passit/passit.jpg";
import passit1 from "../assets/images/Passit/passit1.jpg";
import passit2 from "../assets/images/Passit/passit2.jpg";
import passit3 from "../assets/images/Passit/passit3.jpg";
import passit4 from "../assets/images/Passit/passit4.jpg";
import mdc from "../assets/images/MDC/mdc.jpg";
import mdc1 from "../assets/images/MDC/mdc1.jpg";
import mdc2 from "../assets/images/MDC/mdc2.jpg";
import mdc3 from "../assets/images/MDC/mdc3.jpg";
import mdc4 from "../assets/images/MDC/mdc4.jpg";
import healpass from "../assets/images/Healpass/healpass.jpg";
import healpass1 from "../assets/images/Healpass/healpass1.jpg";
import healpass2 from "../assets/images/Healpass/healpass2.jpg";
import healpass3 from "../assets/images/Healpass/healpass3.jpg";
import healpass4 from "../assets/images/Healpass/healpass4.jpg";
import healpass5 from "../assets/images/Healpass/healpass5.jpg";
import sharetime from "../assets/images/share-time/share-time.jpg";
import sharetime1 from "../assets/images/share-time/share-time1.jpg";
import sharetime2 from "../assets/images/share-time/share-time2.jpg";
import sharetime3 from "../assets/images/share-time/share-time3.jpg";
import sharetime4 from "../assets/images/share-time/share-time4.jpg";
import scanry from "../assets/images/Scanry/Scanry.jpg";
import scanry1 from "../assets/images/Scanry/scanry1.jpg";
import scanry2 from "../assets/images/Scanry/scanry2.jpg";
import scanry3 from "../assets/images/Scanry/scanry3.jpg";
import scanry4 from "../assets/images/Scanry/scanry4.jpg";
import scanry5 from "../assets/images/Scanry/scanry5.jpg";
import scanry6 from "../assets/images/Scanry/scanry6.jpg";
import scanry7 from "../assets/images/Scanry/scanry7.jpg";
import scanry8 from "../assets/images/Scanry/scanry8.jpg";
import scanry9 from "../assets/images/Scanry/scanry9.jpg";
import luana from "../assets/images/LUANA/luana.jpg";
import luana1 from "../assets/images/LUANA/luana1.jpg";
import luana2 from "../assets/images/LUANA/luana2.jpg";
import luana3 from "../assets/images/LUANA/luana3.jpg";
import luana4 from "../assets/images/LUANA/luana4.jpg";
import luana5 from "../assets/images/LUANA/luana5.jpg";
import luana6 from "../assets/images/LUANA/luana6.jpg";

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
      shortDescription: "ブロックチェーンがもつ優れた透明性とNFTの様々な特性を掛け合わせて予約譲渡を可能にするプロダクト。",
      description: (
        <>
          このプロダクトは、2024年10月開催のブロックチェーンを用いたビジネスモデル大会において、
          予約キャンセルの再利用をテーマにした「Passit」を発案し、特別賞を受賞しました。<br />
          ブロックチェーンの利点である優れたデータの透明性とNFTがもつ様々な特性を掛け合わせ、
          予約の譲渡を可能にすることで予約キャンセルによる不利益を軽減しより多くの人に利益をもたらすことを目指しました。
        </>
      ),
      image: passit,
      images: [passit, passit1, passit2, passit3, passit4],
      link: "https://protopedia.net/prototype/6737",
      technology: (
        <>
          ブロックチェーン(Ethereum), スマートコントラクト(ERC-721),<br />
          Solidity, Ruby on Rails, Native, Flutter, Firebase, Firestore
        </>
      )
    },
    {
      title: "ASMtool",

      shortDescription: "React.js + Pythonで作成したASMtool。\nパッシブスキャンを用いて外部からIT資産を発見し、\nそれらに存在する脆弱性等を検出するツール。",
      description: (
        <>
          2このツールは、2024年12月開催の株式会社MBSD（三井物産セキュアディレクション）が主催するセキュリティコンテストにおいて、
          ASMをテーマにした課題に対して調査を行い手法を提案し実現することで最優秀賞を受賞しました。
          <br />
          ASMに対してどのようなアプローチで調査を行い評価をするのかという論文を作成し、
          実際に90個のツールを掛け合わせてパッシブスキャンを行い、脆弱性などを調べるツールを開発しました。
          <br />
          私はこの開発において、調査を行う疑似的ネットワークの構築を行い、
          webサイトにおけるUI・UXや危険度を測定するためのバックエンドを担当しました。
        </>
      ),
      image: mdc,
      images: [mdc, mdc1, mdc2, mdc3, mdc4],
      link: "https://protopedia.net/prototype/6731",
      technology: "React.js, Next.js, tailwindcss, python,"

    },
    {
      title: "Healpass",
      shortDescription: "flutterで作成した健康管理アプリ。\n食事記録やレシピ検索に加えて3Dモデル生成機能を用い、自分の健康状態を直感的に把握できる。",
      description: (
        <>
          このアプリは、2024年11月開催の Engineer Driven Day (EDD) 2024 にて「ライブリンクス賞」、
          2024年12月の 技育博2024 Vol.5 にて「サイバーエージェント賞」を受賞した健康管理アプリです。
          <br />
          現代社会で大きな課題となっている「健康管理」や「孤食」に対し、
          食事記録や日々の健康管理の手間を軽減し、視覚的にデータを把握できるように設計されています。
          <br />
          さらに「Healpass」では、一般的な健康管理機能に加えて、
          AIとの会話機能や体型の可視化機能も搭載しており、楽しみながら継続的に健康管理ができるのが特徴です。
          <br />
          この開発において、AI会話画面やUI・UXデザインを担当しました。
        </>
      ),
      image: healpass,
      images: [healpass, healpass1, healpass2, healpass3, healpass4, healpass5],
      link: "https://protopedia.net/prototype/6090",
      technology: "Flutter, Firebase, 楽天レシピ検索API, Firebase Cloud Messaging, Google Fit API, TripoSR"
    },
    {
      title: "Share-time",
      shortDescription: "flutterで作成したスマホ依存抑制アプリ。\n複数人でメンバーを組み、リアルタイムでデータの同期を行って管理することでスマホ依存の抑制を行う。",
      description: (
        <>
          このアプリは、2024年12月開催の 九州アプリチャレンジ・キャラバン2024（チャレキャラ） にて
          「チャレキャラ特別賞」を受賞した スマホ依存抑制アプリ です。
          <br />
          現代で深刻化する「スマホ依存」問題に対して、
          複数人でルームを作成し、スマホの使用時間を可視化・比較しながら競い合うことで依存を抑制するという仕組みで設計されています。
          <br />
          また、リアルタイムでデータを同期し、ユーザーごとに固有のIDを割り当てることで、
          各ユーザーの使用時間を正確に管理できるように開発されています
          <br />
          この開発において、フロントエンド,UI・UXデザイン,ログイン画面,ルーム部屋のバックエンドを担当しました。
        </>
      ),
      image: sharetime,
      images: [sharetime, sharetime1, sharetime2, sharetime3, sharetime4],
      link: "https://protopedia.net/prototype/6741",
      technology: "Flutter, Firestore, Firebase Storage, Firebase Realtime Database"
    },
    {
      title: "Scanry",
      shortDescription: "flutterで作成した収納サポートアプリ。\n部屋の間取りと収納家具の位置をアプリ上に登録することで、効率よく収納場所を管理できるアプリ。",
      description: (
        <>
          このアプリは、2024年7月開催の Open Hack U 2024 FUKUOKA 開発した収納サポートアプリです。
          <br />
          部屋の間取りと収納家具の位置をアプリ上に登録することで、
          アイテムの保管場所を効率よく管理・可視化できるように設計されています。
          <br />
          収納したいものをタグ付けし、家具と紐づけて登録することで
          収納場所が容易に分かるように開発しました。
          <br />
          この開発において、フロントエンドの全てとログイン画面を担当しました。
          このアプリは、私が初めて参加したハッカソンで開発したアプリで思い入れのある作品です。
        </>
      ),
      image: scanry,
      images: [scanry, scanry1, scanry2, scanry3, scanry4, scanry5, scanry6, scanry7, scanry8, scanry9],
      link: "https://protopedia.net/prototype/6742",
      technology: "Flutter, Firebase Authentication, vision API, translation API"
    },
    {
      title: "LUANA",
      shortDescription: "React.jsとTypeScript.jsで作成した美容室サイト。\n実際にwebにあげて誰でも閲覧可能にしており、\n予約サイトと管理者サイトも別で作成済み。",
      description: (
        <>
          このサイトは、母が経営する美容室のために個人開発した予約管理サイトです。
          <br />
          お客様が簡単にメニューやマップを確認でき、オンラインでスムーズに予約ができるよう設計しています。
          <br />
          また、美容室側も予約状況やお客様の情報を管理しやすいように、シンプルで使いやすい管理画面を実装しました。
          <br />
          デザインやフロントエンドの実装、さらにログイン機能まで全て一人で担当し、実際に母と相談しながら細かな使い勝手や見やすさにもこだわりました。
          <br />
          このサイトは、家族のために自分の力を活かして形にした、私にとって一番思い入れのある作品です。
        </>
      ),
      image: luana,
      images: [luana, luana1, luana2, luana3, luana4, luana5, luana6],
      link: "https://luana-s-miruto.com/",
      technology: "React.js, TypeScript.js, spabase,"
    },
  ];

  return (
    <section className="min-h-screen py-16 px-4 snap-start text-white" id="projects">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-semibold text-center mb-6 font-serif tracking-wide">
          OUTPUT
        </h2>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mt-4 mb-10 text-sm md:text-base leading-relaxed" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-out-cubic">
          下記はこれまでハッカソン等の様々なコンテストや個人で開発した成果物です。
        </p>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-5 ">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer bg-white text-black rounded-xl overflow-hidden shadow-md transform transition duration-500 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-2xl w-[320px] h-[300px] flex flex-col"
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
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
            <div className="bg-white text-black rounded-lg w-full max-w-4xl h-[90vh] overflow-y-auto p-8 shadow-2xl animate-fadeInUp relative">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-purple-200 text-gray-600 hover:bg-gray-300 hover:text-black text-sm font-bold transition"
              >
                ×
              </button>

              <h3 className="text-2xl font-bold mb-6 border-b pb-3">{selectedProject.title}</h3>

              <div className="flex flex-col md:flex-row gap-8 justify-center items-start">
                {/* 左側：説明とリンク */}
                <div className="flex-1 min-w-[280px]">
                  <p className="text-sm text-gray-700 leading-snug line-clamp-10 mb-4 min-h-[11rem]">
                    {selectedProject.description}
                  </p>
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-blue-600 hover:underline text-sm font-medium mb-4"
                  >
                    🔗 外部リンクを開く
                  </a>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2 border-b pb-2">使用言語など</h4>
                    <p className="text-sm text-gray-600">{selectedProject.technology}</p>
                  </div>
                </div>

                {/* 右側：画像 */}
                <div className="flex-1 flex flex-col items-center">
                  <img
                    src={selectedImage}
                    alt={selectedProject.title}
                    className="rounded-md w-full h-auto max-h-[300px] object-contain mb-4 border shadow-md"
                  />
                  <div className="flex gap-2 overflow-x-auto scrollbar-thin scrollbar-thumb-indigo-400 scrollbar-track-gray-100 pt-1">
                    {(selectedProject.images || [selectedProject.image]).map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        onClick={() => setSelectedImage(img)}
                        className={`w-30 h-16 object-cover bg-white rounded shadow-sm cursor-pointer border ml-1 mb-1 mr-0.5 ${img === selectedImage ? "ring-2 ring-indigo-500" : ""}`}
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
