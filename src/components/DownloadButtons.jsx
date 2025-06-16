import { useEffect, useRef, useState } from "react";
import { QRCodeSVG } from "qrcode.react";

export default function DownloadButtons() {
  const store = {
    ios: "https://apps.apple.com/app/id000000",
    android: "https://play.google.com/store/apps/details?id=com.example",
    web: "https://isitgone.app",
  };

  const [open, setOpen] = useState(null);
  const popRef = useRef(null);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    if (!desktop.matches) return;

    const handler = (e) => {
      if (popRef.current && !popRef.current.contains(e.target)) setOpen(null);
    };
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);

  const ActionBtn = ({ id, label, href, color }) => (
    <a
      href={href}
      className={`block w-full rounded-md md:w-auto ${color} px-5 py-3 text-center text-sm font-semibold transition`}
      onMouseEnter={() => {
        if (window.matchMedia("(min-width: 768px)").matches) setOpen(id);
      }}
      onMouseLeave={() => {
        if (window.matchMedia("(min-width: 768px)").matches) setOpen(null);
      }}
      onClick={(e) => {
        const desktop = window.matchMedia("(min-width: 768px)").matches;
        if (desktop) {
          e.preventDefault();
          setOpen((v) => (v === id ? null : id));
        }
      }}
    >
      {label}

      {/* QR Pop‑over – Desktop only */}
      {open === id && (
        <div
          ref={popRef}
          className="absolute top-0 left-1/2 z-20 -translate-x-1/2 -translate-y-full rounded-lg border border-[#574B90] bg-[#1f233a] p-4 shadow-lg"
        >
          <QRCodeSVG
            value={store[id]}
            size={110}
            fgColor="#574B90"
            bgColor="transparent"
          />
          <p className="mt-1 text-center text-xs text-gray-400">Scan me</p>
        </div>
      )}
    </a>
  );

  return (
    <div className="flex flex-col gap-3 md:flex-row md:flex-wrap md:gap-4">
      <ActionBtn
        id="ios"
        label="Download for iOS"
        href={store.ios}
        color="bg-[#574B90] hover:bg-[#6a5aa2]"
      />
      <ActionBtn
        id="android"
        label="Download for Android"
        href={store.android}
        color="bg-[#3b4361] hover:bg-[#4b5474]"
      />
      <a
        href={store.web}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full rounded-md border border-[#574B90] px-5 py-3 text-center text-sm font-semibold text-[#b4aee0] transition hover:bg-[#574B90] hover:text-white md:w-auto"
      >
        Try on Web
      </a>
    </div>
  );
}
