import React from "react";

export default function Contact() {
  return (
    <section className="min-h-screen py-20 px-6 bg-gray-50 text-gray-800 snap-start" id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-semibold text-center mb-6 font-serif tracking-wide">CONTACT</h2>
        <p className="text-center text-gray-500 max-w-2xl mx-auto mt-4 mb-10 text-sm md:text-base leading-relaxed" data-aos="fade-up">
          最後までご覧いただきありがとうございました！<br />
          このサイトを通して、私のことを少しでも知っていただけたのなら嬉しいです。<br />
          もしこのサイトや私について何かコメントがありましたら、下記フォームをご利用ください。
        </p>

        <form className="space-y-6 text-left max-w-2xl mx-auto" data-aos="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-[#7c3aed] mb-1">名前</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full bg-white text-gray-800 border-b-2 border-gray-300 rounded focus:outline-none focus:border-teal-500 py-2 px-3"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-[#7c3aed] mb-1">メールアドレス</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full bg-white text-gray-800 border-b-2 border-gray-300 rounded focus:outline-none focus:border-teal-500 py-2 px-3"
              />
            </div>
          </div>

          <div>
            <label htmlFor="comment" className="block text-sm font-semibold text-[#7c3aed] mb-1">コメント</label>
            <textarea
              id="comment"
              name="comment"
              rows="5"
              required
              className="w-full bg-white text-gray-800 border-b-2 border-gray-300 rounded focus:outline-none focus:border-teal-500 py-2 px-3"
            />
          </div>

          <div className="text-center mt-8">
            <button
              type="submit"
              className="bg-teal-500 text-white px-8 py-3 rounded hover:bg-teal-600 transition duration-300"
            >
              SEND
            </button>
          </div>
        </form>

      </div>
    </section>
  );
}
