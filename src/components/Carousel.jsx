import { useState, useEffect } from "react";
import shot1 from "../assets/screenshot1.png";
import shot2 from "../assets/screenshot2.png";
import mockup from "../assets/mockup.png";

const shots = [shot1, shot2];

export default function Carousel() {
  const [idx, setIdx] = useState(0); // 현재 인덱스

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % shots.length), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative aspect-[486/989] w-[300px]">
      {shots.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-500 ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="h-full w-full p-[5%]">
            <div
              className="h-full w-full rounded-[18px] bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${src})` }}
            />
          </div>
        </div>
      ))}

      {/* iPhone 목업 오버레이 */}
      <img
        src={mockup}
        alt=""
        className="pointer-events-none absolute inset-0 z-10 h-full w-full object-contain"
      />

      {/* 하단 인디케이터 */}
      <div className="absolute top-full left-1/2 z-20 mt-3 flex -translate-x-1/2 gap-2">
        {shots.map((_, i) => (
          <span
            key={i}
            onClick={() => setIdx(i)}
            className={`h-2 w-2 cursor-pointer rounded-full transition-colors ${
              i === idx ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
