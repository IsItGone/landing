import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Header from "./components/Header.jsx";

export default function App() {
  return (
    <main
      className="font-inter flex size-full min-h-screen flex-col items-center bg-gradient-to-b from-[#303A52] to-[#242c41] text-white">
      <div className="max-w-7xl">
        <Header />
        <Hero />
        <Footer />
      </div>
    </main>
  );
}
