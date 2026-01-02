import useScrollReveal from "./hooks/useScrollReveal";
import AboutMe from "@/components/sections/about-me";
import Contact from "@/components/sections/contact";
import Experience from "@/components/sections/experience";
import Footer from "@/components/sections/footer";
import Github from "@/components/sections/github";
import Header from "@/components/sections/header";
import Navbar from "@/components/sections/navbar";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import GridPattern from "@/components/ui/grid-pattern";

function App() {
  useScrollReveal();

  return (
    <div className="font-sans min-h-screen flex flex-col items-center  relative">
      <GridPattern />

      <main className="relative z-10 max-w-3xl w-full mx-auto px-4 sm:px-6 md:px-8 pb-10">
        <Navbar />
        <Header />
        <AboutMe />
        <Experience />
        <Projects />
        <Skills />
        <Github />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
