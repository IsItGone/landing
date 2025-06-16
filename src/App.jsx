import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Header from "./components/Header.jsx";

export default function App() {
  return (
    <main className="flex flex-col items-center h-screen min-h-screen w-full bg-gradient-to-b from-[#303A52] to-[#242c41] text-white font-inter">
      <div className="container">
        <Header />
        <Hero />
        <Footer />
      </div>
    </main>
  );
}
