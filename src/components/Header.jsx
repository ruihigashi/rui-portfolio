import React from "react";
import logo from "../assets/images/kina.jpg";

export default function Header() {
    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-opacity-80 backdrop-blur-sm shadow-md bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 font-semibold">
            <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white">
                <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection("hero")}>
                    <img src={logo} alt="logo" className="w-8 h-8 rounded-full" />
                    <h1 className="text-lg font-bold">Kina</h1>
                </div>
                <ul className="flex space-x-6 text-sm">
                    <li className="cursor-pointer hover:text-pink-400" onClick={() => scrollToSection("aboutIntro")}>About</li>
                    <li className="cursor-pointer hover:text-pink-400" onClick={() => scrollToSection("profile")}>Profile</li>
                    <li className="cursor-pointer hover:text-pink-400" onClick={() => scrollToSection("skills")}>Skills</li>
                    <li className="cursor-pointer hover:text-pink-400" onClick={() => scrollToSection("output")}>Output</li>
                    <li className="cursor-pointer hover:text-pink-400" onClick={() => scrollToSection("history")}>History</li>
                    <li className="cursor-pointer hover:text-pink-400" onClick={() => scrollToSection("contact")}>Contact</li>
                </ul>
            </nav>
        </header>
    );
}