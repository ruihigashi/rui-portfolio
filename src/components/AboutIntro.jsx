import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutIntro() {
    useEffect(() => {
      AOS.init({ duration: 600, once: true });
    }, []);

  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 snap-start bg-white text-black"
      id="about-intro"
    >
      <div className="max-w-2xl text-center">
        <h2 className="text-4xl md:text-6xl font-semibold text-center mb-6 font-serif tracking-wide">About This Site</h2>
        <p className="text-gray-600 text-base md:text-lg" data-aos="fade-up">
          本サイトは、私のスキルや制作物等を紹介するサイトです。<br />
          シンプルかつ直感的に閲覧できる構成を意識して作成しました。<br />
          少しでも私という人間を知っていただければ幸いです。<br />
          どうぞ気楽にサイト内を散策してください。
        </p>
      </div>
    </section>
  );
}
