import DownloadButtons from "./DownloadButtons.jsx";
import screenshot from "../assets/screenshot.png";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-8 py-16 md:grid-cols-2 md:items-center md:gap-20 md:px-10 md:py-24">
      <div className="order-2 md:order-1">
        <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-5xl">
          Navigate Campus <br className="hidden md:block" /> with Ease
        </h1>
        <p className="max-w-md text-base text-gray-300">
          Find the best shuttle routes and schedules for your campus. Get
          real‑time updates and never miss your ride.
        </p>

        <DownloadButtons />
      </div>
      {/* ─────── image ─────── */}
      <div className="order-1 flex justify-center md:order-2 border border-b-red-600">
        <img
          src={screenshot}
          alt="App phone mock‑up"
          // className="w-1/2 h-"
          // className="w-64 drop-shadow-2xl md:w-80"
        />
      </div>
    </section>
  );
}
