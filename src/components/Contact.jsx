import React from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_l4glzs4",      
      "template_r9vb0lt",     // テンプレートID
      e.target,
      "Dbuz78ilxoPjzWuyy"          // 公開キー（EmailJSのアカウントから取得）
    ).then(
      (result) => {
        alert("送信が完了しました！");
      },
      (error) => {
        alert("送信に失敗しました。");
        console.error(error.text);
      }
    );

    e.target.reset(); // フォームリセット
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-6 bg-zinc-900 text-white snap-start">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-semibold mb-6 font-serif tracking-wide">CONTACT</h2>
        <p className="text-gray-300 mb-10 text-sm md:text-base leading-relaxed">
          最後までご覧いただきありがとうございます。コメントがあればお気軽にどうぞ！
        </p>

        <form onSubmit={sendEmail} className="space-y-6 text-left max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-[#7c3aed] mb-1">名前</label>
              <input type="text" name="name" required className="w-full bg-white text-gray-800 py-2 px-3 rounded border-b-2 border-gray-300" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#7c3aed] mb-1">メールアドレス</label>
              <input type="email" name="email" required className="w-full bg-white text-gray-800 py-2 px-3 rounded border-b-2 border-gray-300" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#7c3aed] mb-1">コメント</label>
            <textarea name="message" rows="5" required className="w-full bg-white text-gray-800 py-2 px-3 rounded border-b-2 border-gray-300"></textarea>
          </div>
          <div className="text-center mt-8">
            <button type="submit" className="bg-[#7c3aed] text-white px-8 py-3 rounded hover:bg-purple-700 transition">
              SEND
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
