import DownloadButtons from "./DownloadButtons.jsx";
import screenshot from "../assets/screenshot.png";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-8 py-16 md:grid-cols-2 md:items-start md:gap-20 md:px-10 md:py-24">
      <div className="order-1 md:order-1">
        <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
          Navigate Campus <br className="hidden md:block" /> with Ease
        </h1>
        <p className="max-w-md mt-4 text-base text-gray-300">
          Find the best shuttle routes and schedules for your campus. Get
          real‑time updates and never miss your ride.
        </p>

        {/* 데스크탑일 때만 버튼 포함 */}
        <div className="mt-6 hidden md:block">
          <DownloadButtons />
        </div>
      </div>

      <div className="order-2 md:order-2 flex justify-center">
        <img
          src={screenshot}
          alt="App phone mock‑up"
          className="w-2/3 max-w-xs md:w-80 md:max-w-none drop-shadow-2xl"
        />
      </div>

      {/* 버튼 (모바일 전용) */}
      <div className="order-3 md:hidden">
        <DownloadButtons />
      </div>
    </section>
  );
  // <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-8 py-16 md:grid-cols-2 md:items-center md:gap-20 md:px-10 md:py-24">
  //     <div className="flex flex-col gap-6 order-1 md:order-1">
  //         <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
  //             Navigate Campus <br className="hidden md:block" /> with Ease
  //         </h1>
  //         <p className="max-w-md text-base text-gray-300">
  //             Find the best shuttle routes and schedules for your campus. Get
  //             real‑time updates and never miss your ride.
  //         </p>
  //         <div className="mt-4 md:mt-8">
  //             <DownloadButtons />
  //         </div>
  //     </div>
  //
  //     {/*/!* ─────── image ─────── *!/*/}
  //     <div className="order-2 md:order-2 flex justify-center">
  //         <img
  //             src={screenshot}
  //             alt="App phone mock‑up"
  //             className="w-2/3 max-w-xs md:w-80 md:max-w-none drop-shadow-2xl"
  //         />
  //     </div>
  //
  //       {/*/!* ─────── image ─────── *!/*/}
  //        {/*<div className="order-1 flex justify-center md:order-2 border border-b-red-600">*/}
  //        {/*  <img*/}
  //        {/*    src={screenshot}*/}
  //        {/*    alt="App phone mock‑up"*/}
  //        {/*     className="w-1/2 h-"*/}
  //        {/*     className="w-64 drop-shadow-2xl md:w-80"*/}
  //        {/*  />*/}
  //        {/*</div>*/}
  // </section>
}
