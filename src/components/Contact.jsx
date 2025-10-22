export default function Contact() {
  return (
    <section id="contact" className="py-44 px-6 text-white snap-start">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-semibold mb-6 font-serif tracking-wide">CONTACT</h2>
        <p className="text-gray-300 text-base md:text-base leading-relaxed">
          最後までご覧いただきありがとうございます。コメントがあればお気軽にどうぞ！
        </p>

        <div className="text-center mt-24">
          <a
            href="https://forms.gle/umH25Kh63rih7SaL6"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#7c3aed] text-white px-16 py-3 rounded hover:bg-purple-700 transition"
          >
            フォームを開く
          </a>
        </div>
      </div>
    </section>
  );
}
