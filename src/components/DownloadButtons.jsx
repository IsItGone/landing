import { useState, useRef, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';

export default function DownloadButtons() {
  const store = {
    ios: 'https://apps.apple.com/app/id000000',
    android: 'https://play.google.com/store/apps/details?id=com.example',
    web: 'https://campus-transit.app',
  };
  const [showQR, setShowQR] = useState(false);
  const popRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (popRef.current && !popRef.current.contains(e.target))
        setShowQR(false);
    };
    window.addEventListener('click', handler);
    return () => window.removeEventListener('click', handler);
  }, []);

  return (
    <div className="relative inline-block">
      <a
        href={store.ios}
        className="rounded-md bg-[#574B90] px-8 py-3 text-sm font-semibold"
        onMouseEnter={() => setShowQR(true)}
        onMouseLeave={() => setShowQR(false)}
        onClick={(e) => {
          // 모바일: 탭하면 QR 보여주고 기본 링크 막기
          if (window.innerWidth < 768) {
            e.preventDefault();
            setShowQR((v) => !v);
          }
        }}
      >
        Download for iOS
      </a>

      {/* Popover */}
      {showQR && (
        <div
          ref={popRef}
          className="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded-lg border border-[#574B90] bg-[#1f233a] p-4 shadow-lg"
        >
          <QRCodeSVG
            value={store.ios}
            size={120}
            fgColor="#574B90"
            bgColor="transparent"
          />
          <p className="mt-1 text-center text-xs text-gray-400">Scan me</p>
        </div>
      )}
    </div>
  );
}
