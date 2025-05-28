import "./index.css";
import SakuraCanvas from "./components/SakuraCanvas";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Output from "./components/Output";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import AboutIntro from "./components/AboutIntro";
import Contact from './components/Contact';
import History from "./components/MyHistory";

export default function App() {
  return (
    <>
        <div className="font-sans text-gray-900 bg-black relative overflow-x-hidden">
          <SakuraCanvas />
          <Header />
          <div id="hero">
            <Hero />
          </div>
          <div id="aboutIntro">
            <AboutIntro />
          </div>
          <div id="profile">
            <Profile />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="output">
            <Output />
          </div>
          <div id="history">
            <History />
          </div>          
          <div id="contact">
            <Contact />
          </div>
          <Footer />
        </div>
      {/* )} */}
    </>
  );
}