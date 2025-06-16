export default function Footer() {
  const email = "ddiddhr@gmail.com";
  return (
    <footer className="mt-auto border-t border-white/10 py-8 text-xs text-gray-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-8 md:px-10">
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
        <span>@2024 isitgone. All rights reserved.</span>
      </div>
    </footer>
  );
}
