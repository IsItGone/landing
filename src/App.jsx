import React from 'react';
import { QRCodeSVG } from 'qrcode.react'; // yarn add qrcode.react
import DownloadButtons from './components/DownloadButtons';
/**
 * Campus-style landing page (twilight palette).
 * Accent  : #574B90  | Dark bg : #303A52
 */
export default function LandingPage() {
  const email = 'ddiddhr@gmail.com';

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-[#303A52] to-[#242c41] text-white font-inter">
      {/* ─────── Header ─────── */}
      <header className="mx-auto flex max-w-7xl items-center justify-between border-b border-white/10 px-8 py-4 md:px-10 lg:px-12">
        <span className="flex items-center gap-2 text-lg font-semibold">
          <span className="text-[#574B90]">✦</span> Campus Transit
        </span>
        <a
          href="#download"
          className="rounded-md bg-[#574B90] px-4 py-2 text-sm font-semibold shadow-md transition hover:bg-[#6a5aa2]"
        >
          Download App
        </a>
      </header>

      {/* ─────── Hero ─────── */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-8 py-16 md:px-10 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-12 lg:py-24">
        <div className="order-2 lg:order-1">
          <h1 className="mb-6 text-4xl font-extrabold leading-tight lg:text-5xl">
            Navigate Campus <br className="hidden md:block" /> with Ease
          </h1>
          <p className="max-w-md text-base text-gray-300">
            Find the best shuttle routes and schedules for your campus. Get
            real‑time updates and never miss your ride.
          </p>
        </div>
        <div className="order-1 flex justify-center lg:order-2">
          <img
            src="/assets/screenshot.png"
            alt="App phone mock-up"
            className="w-64 drop-shadow-2xl md:w-80 lg:w-96"
          />
        </div>
      </section>

      <section
        id="download"
        className="mx-auto max-w-7xl px-8 pb-24 md:px-10 lg:px-12 lg:pb-32"
      >
        <DownloadButtons />
      </section>

      {/* ─────── Download ─────── 
      <section
        id="download"
        className="mx-auto max-w-7xl px-8 pb-24 md:px-10 lg:px-12 lg:pb-32"
      >
        <h2 className="mb-6 text-xl font-semibold">Download the App</h2>

        <div className="flex flex-col gap-8 md:flex-row md:items-start">
          <div className="flex flex-col gap-3 sm:flex-row md:gap-4">
            <a
              href={store.ios}
              className="rounded-md bg-[#574B90] px-8 py-3 text-sm font-semibold transition hover:bg-[#6a5aa2]"
            >
              Download for iOS
            </a>
            <a
              href={store.android}
              className="rounded-md bg-[#3b4361] px-8 py-3 text-sm font-semibold transition hover:bg-[#4b5474]"
            >
              Download for Android
            </a>
            <a
              href={store.web}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-[#574B90] px-8 py-3 text-sm font-semibold text-[#b4aee0] transition hover:bg-[#574B90] hover:text-white"
            >
              Try on Web
            </a>
          </div>

          <div className="hidden md:flex md:flex-col md:items-center md:justify-center">
            <div className="rounded-lg border border-[#574B90] bg-[#1f233a] p-4 shadow-lg">
              <QRCodeSVG
                value={store.ios}
                size={120}
                fgColor="#574B90"
                bgColor="transparent"
              />
            </div>
            <p className="mt-2 text-xs text-gray-400">Scan to download</p>
          </div>
        </div>
      </section>*/}

      {/* ─────── Footer ─────── */}
      <footer className="border-t border-white/10 py-8 text-xs text-gray-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-8 md:px-10 lg:px-12 sm:flex-row sm:justify-between">
          <div className="flex gap-8">
            <a
              href="https://www.notion.so/terms-page"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#867abf]"
            >
              Terms of Service
            </a>
            <a
              href="https://www.notion.so/privacy-page"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#867abf]"
            >
              Privacy Policy
            </a>
            <a href={`mailto:${email}`} className="hover:text-[#867abf]">
              {email}
            </a>
          </div>
          <span>@2024 Campus Transit. All rights reserved.</span>
        </div>
      </footer>
    </main>
  );
}
