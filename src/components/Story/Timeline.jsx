import React from "react";
import step1 from "../../assets/images/kina.jpg";
import step2 from "../../assets/images/kina.jpg";
import step3 from "../../assets/images/kina.jpg";
import step4 from "../../assets/images/kina.jpg";
import step5 from "../../assets/images/kina.jpg";

const steps = [
  {
    year: "2018",
    title: "入学",
    text: "専門学校に入学。IT基礎を学び始める。",
    image: step1,
  },
  {
    year: "2019",
    title: "初めてのハッカソン",
    text: "チーム開発とGit管理を経験。",
    image: step2,
  },
  {
    year: "2020",
    title: "Reactと出会う",
    text: "ポートフォリオ開発に挑戦。",
    image: step3,
  },
  {
    year: "2021",
    title: "作品受賞",
    text: "複数のコンテストで成果を上げる。",
    image: step4,
  },
  {
    year: "2022",
    title: "現在の挑戦",
    text: "クラウドやバックエンドに注力中。",
    image: step5,
  },
];

export default function Timeline() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-16 px-4" id="timeline">
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">MY STORY</h2>
      <div className="flex flex-wrap justify-center items-start gap-12 max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center max-w-xs">
            <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg mb-4">
              <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{step.text}</p>
            <span className="text-sm font-bold text-indigo-600">{step.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
