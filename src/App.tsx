import Navbar from "@/components/sections/navbar";
import GridPattern from "@/components/ui/grid-pattern";

function App() {
  return (
    <div className="font-sans min-h-screen flex flex-col items-center justify-center relative">
      <GridPattern />

      <main className="relative z-10 max-w-3xl w-full mx-auto px-4 sm:px-6 md:px-8">
        <Navbar />
        <section className="min-h-screen">test</section>
      </main>
    </div>
  );
}

export default App;
