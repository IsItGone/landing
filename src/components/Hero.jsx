import DownloadButtons from "./DownloadButtons.jsx";
import Carousel from "./Carousel.jsx";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 gap-10 px-8 py-16 md:grid-cols-2 md:items-start md:gap-20 md:px-10 md:py-14">
      <div className="order-1 mt-0 md:order-1 md:mt-24">
        <h1 className="text-5xl leading-tight font-extrabold md:text-6xl">
          대전 캠퍼스 셔틀의
          <br className="hidden md:block" /> 모든 정보를
          <span className="bg-gradient-to-br from-[#FF79A7] to-[#C873FF] bg-clip-text text-transparent">
            {" "}
            한 눈에.
          </span>
        </h1>
        <p className="mt-8 max-w-md text-lg text-gray-300">
          대전 캠퍼스 셔틀 버스의 노선과 정류장을 길찾기 앱을 사용하듯 편리하게
          확인하세요. 정류장을 검색해 정확한 위치를 파악하고, 매 학기
          업데이트되는 최신 정류장 정보를 활용하세요. App Store, Google Play,
          혹은 웹에서 바로 만나보세요.
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
      <div className="order-3 mt-10 md:hidden">
        <DownloadButtons />
      </div>
    </section>
  );
}
