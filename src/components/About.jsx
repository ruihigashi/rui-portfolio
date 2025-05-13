// components/About.jsx
import React from "react";
import face from "../assets/images/face.jpg";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function About() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-b from-indigo-900 to-purple-900 text-white snap-start"
      id="about"
    >
      <h2 className="text-4xl md:text-6xl font-semibold mb-6 font-serif tracking-wide">
        About me
      </h2>
      <div className="max-w-6xl w-full flex flex-col md:flex-row justify-center items-center gap-12">
        {/* Profile Card */}
        <div className="bg-white rounded-xl shadow-lg px-6 py-10 text-center text-gray-900 w-full max-w-xs h-[300px] flex flex-col justify-start">
          <img
            src={face}
            alt="Profile"
            className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-bold">東流生</h3>
          <p className="text-gray-500 text-sm">プロジェクトマネージャー</p>
          <div className="flex justify-center space-x-4 mt-4 text-gray-500">
            <a href="#" className="hover:text-blue-500">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-blue-700">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-blue-600">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Welcome Text */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">ようこそ</h2>
          <p className="text-lg text-gray-200 mb-6">
            プロフィールと経歴をご覧ください
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
              経歴書
            </button>
            <button className="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-purple-800">
              プロジェクト
            </button>
          </div>
          <p className="text-sm text-gray-300 mt-6">
            これは紹介用の例です。「テキストを追加」ボタンで内容を編集できます。
            サイト訪問者に伝えたいポイントを自由に記載しましょう。
          </p>
        </div>
      </div>
    </section>
  );
}
