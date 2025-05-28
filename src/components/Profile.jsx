import { useEffect } from "react";
import protopediaicon from "../assets/images/protopediaicon.jpg";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import logo from "../assets/images/higashi.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-b  to-purple-900 text-white snap-start"
      id="about"
    >
      <h2 className="text-4xl md:text-6xl font-semibold mt-3 mb-6 font-serif tracking-wide">
        PROFILE
      </h2>
      <div className="max-w-6xl w-full flex flex-col md:flex-row justify-center items-center gap-12 px-4 md:px-8 lg:px-12 xl:px-20" >

        {/* Profile Card */}
        <div className="bg-white rounded-xl shadow-lg px-6 py-10 text-center text-gray-900 w-full max-w-[280px] h-[300px] flex flex-col justify-start" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-out-cubic">

          <img
            src={logo}
            alt="Profile"
            className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-bold">東流生</h3>
          <p className="text-gray-500 text-sm">学生</p>
          <div className="flex justify-center space-x-4 mt-4 text-gray-500">
            <a href="https://github.com/" className="hover:text-blue-500">
              <FaGithub />
            </a>
            <a href="https://protopedia.net/prototyper/rui0421" className="hover:text-blue-700">
                <img src={protopediaicon} alt="ProtoPedia" className="text-contain w-13 h-4" />
            </a>
          </div>
        </div>

        {/* Welcome Text */}
        <div className="text-center md:text-left max-w-2xl" data-aos="fade-up">

          <h2 className="text-4xl md:text-5xl font-bold mb-4">ようこそ</h2>
          <p className="text-m text-gray-300 mt-6">
            宮崎県出身の専門学生。<br />
            小・中・高とサッカー漬けの毎日で、将来は公務員を目指していたためエンジニアとは無縁の人生を送っておりました。
            そんな時「創造する人の時代」という本を読み、エンジニアという職に興味を持ちました。
            この本がきっかけで現在は福岡市博多区にある麻生情報ビジネス専門学校に通っており、日々プログラミングの勉強をしております。
            授業を通して様々な言語を学び、ハッカソンなどの様々なコンテストに参加するなかで新たな言語にも挑戦し独自に学ぶことを心がけております。
            ハッカソンの成果物は本サイトの下の方に挙げておりますので、興味がある方は是非ご覧ください。
          </p>
        </div>
      </div>
    </section>
  );
}
