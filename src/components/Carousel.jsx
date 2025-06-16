import { useState } from "react";
import screenshot1 from "../assets/screenshot1.png";
import screenshot2 from "../assets/screenshot2.png";
import mockup from "../assets/mockup.png";

const images = [screenshot1, screenshot2];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="relative aspect-[220/460] w-[80vw] max-w-[320px]">
      {/* 표시되는 화면 영역: overflow-hidden + rounded */}
      <div className="absolute inset-0 z-0 overflow-hidden rounded-[32px]">
        {/* 슬라이드 트랙: 정확한 크기 필요 */}
        <div
          className="flex h-full w-[200%] transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 50}%)` }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="flex h-full w-1/2 items-center justify-center"
            >
              <img
                src={src}
                alt="screenshot"
                className="h-[94%] w-[94%] rounded-[28px] object-cover"
              />
            </div>
          ))}
        </div>

        {/* 좌우 버튼 */}
        <button
          onClick={prev}
          className="absolute top-1/2 left-4 z-10 -translate-y-1/2 rounded-full bg-black/50 px-2 text-white"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="absolute top-1/2 right-4 z-10 -translate-y-1/2 rounded-full bg-black/50 px-2 text-white"
        >
          ›
        </button>
      </div>

      {/* iPhone 목업 이미지 */}
      <img
        src={mockup}
        alt="mockup"
        className="pointer-events-none absolute inset-0 z-10 h-full w-full object-contain drop-shadow-2xl"
      />
    </div>
  );
}
