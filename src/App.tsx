import useScrollReveal from "./hooks/useScrollReveal";
import AboutMe from "@/components/sections/about-me";
import Experience from "@/components/sections/experience";
import Header from "@/components/sections/header";
import Navbar from "@/components/sections/navbar";
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
        <Skills />
      </main>
    </div>
  );
}

export default App;
