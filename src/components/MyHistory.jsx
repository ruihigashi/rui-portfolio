import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import school from "../assets/images/aso.jpg"
import license from "../assets/images/license.jpg"
import study from "../assets/images/study.jpg"
import Hackathon from "../assets/images/Hack U.jpg"
import award from "../assets/images/brockchain.jpg"
import announce from "../assets/images/announce.jpg"
import award2 from "../assets/images/EDD.jpg"
import award3 from "../assets/images/charekyara.jpg"
import award4 from "../assets/images/MBSD.jpg"
import award5 from "../assets/images/giikuhaku.jpg"
import myPortfolio from "../assets/images/myPortfolio.jpg"
import kennkyuu from "../assets/images/asokennkyuu.jpg"
import intern from "../assets/images/intern.jpg"

const timelineData = [
  {
    year: "2023年4月",
    title: "入学",
    description:
      <>
        麻生情報ビジネス専門学校に入学。<br />
        IT基礎を学び始める。
      </>,
    image: school,
  },
  {
    year: "2023年10月",
    title: "基本情報技術者試験合格",
    description:
      <>
        入学から約4か月で、<br />
        基本情報技術者試験合格
      </>,
    image: license,
  },
  {
    year: "2023年10月~2024年6月",
    title: "プログラミングにはまる",
    description:
      <>
        授業で学ぶプログラミング言語に加え、<br />
        独学で様々な言語に触れる。
      </>,
    image: study,
  },
  {
    year: "2024年7月20日",
    title: "ハッカソン初参加",
    description: <>
      Huck Uに参加したことをきっかけに<br />
      様々なハッカソンに出場。
    </>,
    image: Hackathon,
  },
  {
    year: "2024年10月26日",
    title: "ハッカソン初受賞",
    description: <>
      B3 -Blockchain Bootcamp& Businessplan Workshop-にて<br />
      ブロックチェーン特別賞を受賞。
    </>,
    image: award,
  },
  {
    year: "2024年11月9日",
    title: "ハッカソン2度目の受賞",
    description: <>
      福岡県主催のEDDハッカソンにて<br />
      ライブリンクス賞を受賞。
    </>,
    image: award2,
  },
  {
    year: "2024年11月28日",
    title: "ブロックチェーンフォーラム登壇発表",
    description: <>
      ブロックチェーンフォーラムに登壇し、<br />
      多数の企業の前でプレゼン発表を行う。
    </>,
    image: announce,
  },
  {
    year: "2024年12月7日",
    title: "ハッカソン3度目の受賞",
    description: <>
      九州アプリチャレンジ・キャラバン2024コンテストにてチャレキャラ特別賞を受賞。
    </>,
    image: award3,
  },
  {
    year: "2024年12月12日",
    title: "ハッカソン4度目の受賞",
    description: <>
      第9回セキュリティコンテストMBSDCybersecurity Challenges2024にて
      最優秀賞を受賞。
    </>,
    image: award4,
  },
  {
    year: "2024年12月14日",
    title: "ハッカソン5度目の受賞",
    description: <>
      技育博2024 Vol.5にて<br />
      サイバーエージェント賞を受賞。
    </>,
    image: award5,
  },
  {
    year: "2025年1月~3月",
    title: "個人開発と資格勉強",
    description: <>
      個人開発に力を入れ、<br />
      自身のポートフォリオサイトや<br />
      母が営む美容室のサイトを作成し<br />
      保守・運用を行っております。<br />
    </>,
    image: myPortfolio,
  },
  {
    year: "2025年4月",
    title: "研究室設立",
    description: <>
      今年度から有志で、<br />
      「麻生情報工学研究室」を設立。
    </>,
    image: kennkyuu,
  },
  {
    year: "2025年7月~",
    title: "長期インターン",
    description: <>
      株式会社26での<br />
      長期インターンを開始。<br />
    </>,
    image: intern,
  },
];

export default function StoryTimeline() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <section className="bg-[url('./assets/images/blackground.jpg')] bg-zinc-900 text-white py-16 px-4" id="timeline">
      <h2 className="text-4xl md:text-6xl font-semibold text-center mb-6 font-serif tracking-wide">My History</h2>
      <p className="text-center text-gray-300 max-w-2xl mx-auto mt-4 mb-6 text-sm md:text-base leading-relaxed" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-out-cubic">
        専門学校入学から現在までの経歴を時系列でまとめてます。横にスクロールしながらご覧ください。
      </p>

      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-indigo-400 scrollbar-track-gray-100">
        <div className="flex gap-5 w-max px-10 pb-10">
          {timelineData.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-out-cubic"
              className={`flex flex-col items-center w-[360px] min-w-[360px] ${index % 2 === 0 ? "mt-0" : "mt-32"}`}
            >
              <div className="bg-white rounded-full border-4 border-gray-300 shadow-xl px-6 py-8 w-[300px] min-h-[320px] flex flex-col items-center">
                {/* 年 */}
                <div className="text-sm text-indigo-800 px-3 py-1 rounded-full font-semibold mb-5">
                  {item.year}
                </div>

                {/* 画像 */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-30 h-24 object-cover border"
                />

                {/* タイトルと説明 */}
                <h3 className="text-lg font-bold mb-2 text-center">{item.title}</h3>
                <p className="text-sm text-gray-900 text-center leading-normal">
                  {item.description}
                </p>
              </div>
            </div>

          ))}
        </div>
      </div>
    </section>
  );
}
