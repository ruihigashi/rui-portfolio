import { useState } from "react";
import logo from "../assets/images/higashi.jpg";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // メニューを閉じる
    }
  };

  return (
    <>
      {/* ヘッダー */}
      <header className="fixed w-full z-50 bg-purple-600 font-semibold">
        <nav className="mx-10 py-4 flex justify-between items-center text-white">
          {/* ハンバーガー（モバイル時のみ左） */}
          <div className="md:hidden z-20">
            <button
              onClick={() => setMenuOpen(true)}
              className="text-white text-2xl bg-transparent p-0 border-none shadow-none focus:outline-none"
              aria-label="メニューを開く"
            >
              <FaBars />
            </button>
          </div>

          {/* 中央ロゴ（モバイル時は画像のみ） */}
          <div
            className="absolute left-1/2 -translate-x-1/2 flex items-center space-x-2 cursor-pointer md:static md:translate-x-0"
            onClick={() => scrollToSection("hero")}
          >
            <img src={logo} alt="logo" className="w-8 h-8 rounded-full" />
            <h1 className="text-lg font-bold hidden md:inline">Rui</h1>
          </div>

          {/* PC用ナビゲーション */}
          <ul className="hidden md:flex space-x-6 text-sm">
            <li className="cursor-pointer hover:text-pink-400" onClick={() => scrollToSection("aboutIntro")}>About</li>
            <li className="cursor-pointer hover:text-pink-400" onClick={() => scrollToSection("profile")}>Profile</li>
            <li className="cursor-pointer hover:text-pink-400" onClick={() => scrollToSection("skills")}>Skills</li>
            <li className="cursor-pointer hover:text-pink-400" onClick={() => scrollToSection("output")}>Output</li>
            <li className="cursor-pointer hover:text-pink-400" onClick={() => scrollToSection("history")}>History</li>
            <li className="cursor-pointer hover:text-pink-400" onClick={() => scrollToSection("contact")}>Contact</li>
          </ul>
        </nav>
      </header>

      {/* ドロワー（左からスライド） */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-zinc-900 text-white z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* ドロワーヘッダー */}
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <span className="text-lg font-semibold">メニュー</span>
          <button onClick={() => setMenuOpen(false)} className="text-xl bg-transparent p-0 border-none shadow-none focus:outline-none">
            <FaTimes />
          </button>
        </div>

        {/* メニュー項目 */}
        <ul className="flex flex-col p-5 space-y-4 text-m">
          <li className="cursor-pointer" onClick={() => scrollToSection("aboutIntro")}>About</li>
          <li className="cursor-pointer" onClick={() => scrollToSection("profile")}>Profile</li>
          <li className="cursor-pointer" onClick={() => scrollToSection("skills")}>Skills</li>
          <li className="cursor-pointer" onClick={() => scrollToSection("output")}>Output</li>
          <li className="cursor-pointer" onClick={() => scrollToSection("history")}>History</li>
          <li className="cursor-pointer" onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>
      </div>

      {/* 背景オーバーレイ（メニュー開いてるときのみ） */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
