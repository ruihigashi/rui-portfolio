import React from "react";

export default function Contact() {
  return (
    <section className="min-h-screen py-16 px-4 bg-gray-800 text-white snap-start" id="contact">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">お問い合わせ</h2>
        <p className="text-gray-400 mb-6">
          お仕事のご依頼やご相談は、以下のメールアドレスまたはSNSよりお気軽にご連絡ください。
        </p>
        <div className="text-lg text-blue-400 font-semibold mb-6">
          <a href="mailto:your.email@example.com">your.email@example.com</a>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:underline">
            GitHub
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Twitter
          </a>
          <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
