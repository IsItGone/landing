import { QRCodeSVG } from "qrcode.react";
import apple from "../assets/apple.png";
import google from "../assets/playstore.png";

export default function DownloadButtons() {
  const store = {
    ios: "https://apps.apple.com/app/id000000",
    android: "https://play.google.com/store/apps/details?id=com.example",
    web: "https://web.isitgone.store",
  };

  function ActionBtn({ id, label, href }) {
    return (
      <a
        href={href}
        className={`group relative flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-[#2C344E] to-[#1F233A] px-5 py-3 text-sm font-semibold shadow-lg transition hover:from-[#394264] hover:to-[#262B42] md:w-auto`}
      >
        <img
          src={id === "ios" ? apple : google}
          className="h-6 w-6 shrink-0"
          alt="market logo"
        />
        <span>{label}</span>
        <span className="pointer-events-none absolute top-full left-1/2 z-20 hidden -translate-x-1/2 translate-y-2 rounded-lg border border-[#574B90] bg-[#1f233a] p-3 shadow-lg md:block md:opacity-0 md:transition md:group-hover:translate-y-4 md:group-hover:opacity-100">
          <QRCodeSVG
            value={store[id]}
            size={110}
            fgColor="#574B90"
            bgColor="transparent"
          />
          {/*<p className="mt-1 text-center text-sm text-gray-400">Scan me</p>*/}
        </span>
      </a>
    );
  }

  return (
    <div className="flex flex-col gap-3 md:flex-row md:flex-wrap md:gap-4">
      <ActionBtn id="ios" label="App Store" href={store.ios} />
      <ActionBtn id="android" label="Google Play" href={store.android} />
      <a
        href={store.web}
        className="group relative flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-[#D14075] to-[#823C8A] px-5 py-3 text-sm font-semibold shadow-md transition hover:from-[#DB4C80] hover:to-[#66468F] md:w-auto"
      >
        👀 Try on Web
      </a>
    </div>
  );
}
