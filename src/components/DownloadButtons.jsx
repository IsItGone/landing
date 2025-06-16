import { QRCodeSVG } from "qrcode.react";

export default function DownloadButtons() {
  const store = {
    ios: "https://apps.apple.com/app/id000000",
    android: "https://play.google.com/store/apps/details?id=com.example",
    web: "https://web.isitgone.store",
  };

  const ActionBtn = ({ id, label, href, color }) => (
    <a
      href={href}
      className={`group relative block w-full rounded-md md:w-auto ${color} px-5 py-3 text-center text-sm font-semibold transition`}
    >
      {label}
      <span className="pointer-events-none absolute top-0 left-1/2 z-20 hidden -translate-x-1/2 -translate-y-full rounded-lg border border-[#574B90] bg-[#1f233a] p-3 shadow-lg md:block md:opacity-0 md:transition md:group-hover:translate-y-[-120%] md:group-hover:opacity-100">
        <QRCodeSVG
          value={store[id]}
          size={110}
          fgColor="#574B90"
          bgColor="transparent"
        />
        <p className="mt-1 text-center text-sm text-gray-400">Scan me</p>
      </span>
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
