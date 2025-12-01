import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Blog from "./components/Blog";   // ✅ ADD THIS

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      <div className="max-w-6xl mx-auto border-b border-white/10 my-6"></div>

      <About />

      <div className="max-w-6xl mx-auto border-b border-white/10 my-6"></div>

      <Skills />

      <div className="max-w-6xl mx-auto border-b border-white/10 my-6"></div>

      <Projects />

      <div className="max-w-6xl mx-auto border-b border-white/10 my-6"></div>

      {/* ✅ BLOG SECTION ADDED HERE */}
      <Blog />

      <div className="max-w-6xl mx-auto border-b border-white/10 my-6"></div>

      <Achievements />

      <div className="max-w-6xl mx-auto border-b border-white/10 my-6"></div>

      <Contact />

      <Footer />
    </main>
  );
}
