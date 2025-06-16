import DownloadButtons from './components/DownloadButtons';
import screenshot from './assets/screenshot.png';

export default function App() {
  const email = 'ddiddhr@gmail.com';

  return (
      <main className="flex flex-col items-center h-screen min-h-screen w-full bg-gradient-to-b from-[#303A52] to-[#242c41] text-white font-inter">
        <div className="container">
            {/* ─────── Header ─────── */}
            <header className="mx-auto flex w-full max-w-7xl items-center justify-center md:justify-start px-8 py-4 md:px-10">
            <span className="flex items-center gap-2 text-lg font-semibold">
              <span className="text-[#574B90]">✦</span> 지나갔나요?
            </span>
            </header>

            {/* ─────── Hero ─────── */}
            <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-8 py-16 md:grid-cols-2 md:items-center md:gap-20 md:px-10 md:py-24">
              <div className="order-2 md:order-1">
                <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-5xl">
                  Navigate Campus <br className="hidden md:block" /> with Ease
                </h1>
                <p className="max-w-md text-base text-gray-300">
                  Find the best shuttle routes and schedules for your campus. Get real‑time updates and never miss your ride.
                </p>

                  <DownloadButtons />
              </div>

              {/* ─────── image ─────── */}
              <div className="order-1 flex justify-center md:order-2 border border-b-red-600">
                <img
                    src={screenshot}
                    alt="App phone mock‑up"
                    // className="w-1/2 h-"
                    // className="w-64 drop-shadow-2xl md:w-80"
                />
              </div>
            </section>

            {/* ─────── Download Section ─────── */}
              <section id="download" className="w-full px-8 pb-24 md:mx-auto md:max-w-7xl md:px-10 md:pb-32">

            </section>

            {/* ─────── Footer ─────── */}
            <footer className="mt-auto border-t border-white/10 py-8 text-xs text-gray-400">
              <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-8 md:px-10">
                <div className="flex gap-8">
                  <a href="https://www.notion.so/terms-page" target="_blank" rel="noopener noreferrer" className="hover:text-[#867abf]">Terms of Service</a>
                  <a href="https://www.notion.so/privacy-page" target="_blank" rel="noopener noreferrer" className="hover:text-[#867abf]">Privacy Policy</a>
                  <a href={`mailto:${email}`} className="hover:text-[#867abf]">{email}</a>
                </div>
                <span>@2024 isitgone. All rights reserved.</span>
              </div>
            </footer>
        </div>
      </main>
  );
}
