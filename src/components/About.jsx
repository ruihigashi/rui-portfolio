import React from "react";

export default function About() {
  return (
    <section className="min-h-screen py-16 px-4 bg-black text-white snap-start" id="about">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">自己紹介</h2>
        <p className="text-gray-300 leading-relaxed text-lg">
          はじめまして、Kinaです。Web業界での経験を通じて、ユーザーにとって使いやすく、
          見た目にも美しいインターフェースを設計・実装することを得意としています。
          特にReactやNext.jsを用いた開発、そしてFigmaを用いたUIデザインに力を入れており、
          一貫したUXの提供を大切にしています。今後も技術とデザインの両軸で価値あるプロダクトを作っていきたいと考えています。
        </p>
      </div>
    </section>
  );
}
