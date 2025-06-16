import DownloadButtons from "./DownloadButtons.jsx";
import Carousel from "./Carousel.jsx";

export default function Hero() {
  return (
    <section className="mx-auto grid flex-grow grid-cols-1 gap-10 px-8 py-16 md:grid-cols-2 md:items-start md:gap-20 md:px-10 md:py-14">
      <div className="order-1 mt-0 md:order-1 md:mt-12">
        <h1 className="text-4xl leading-tight font-extrabold md:text-5xl">
          Navigate Campus <br className="hidden md:block" /> with Ease
        </h1>
        <p className="mt-4 max-w-md text-base text-gray-300">
          Find the best shuttle routes and schedules for your campus. Get
          real‑time updates and never miss your ride.
        </p>

        {/* 버튼 (데스크탑) */}
        <div className="mt-4 hidden md:mt-10 md:block">
          <DownloadButtons />
        </div>
      </div>

      <div className="order-2 flex justify-center md:order-2 md:justify-end">
        <Carousel />
      </div>

      {/* 버튼 (모바일) */}
      <div className="order-3 md:hidden">
        <DownloadButtons />
      </div>
    </section>
  );
}
