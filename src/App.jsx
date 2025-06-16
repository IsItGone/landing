import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Header from "./components/Header.jsx";

export default function App() {
  return (
    <main className="flex min-h-screen flex-grow flex-col bg-gradient-to-b from-[#1B1E37] via-[#3A3F7A] to-[#1B1E37] text-white">
      <div className="flex w-full max-w-7xl flex-grow flex-col self-center">
        <Header />
        <Hero />
        <Footer />
      </div>
    </main>
  );
}
