export default function Footer() {
  const email = "ddiddhr@gmail.com";
  const termsLink =
    "https://ddiddhr.notion.site/21425836aa418016b0a9f13084a30ded";
  const policyLink =
    "https://ddiddhr.notion.site/21425836aa4180e09d47c3ead7705291";
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto flex w-full flex-col items-center gap-4 border-t border-white/10 p-8 text-xs text-gray-400 md:flex-row md:justify-between">
      <div className="flex gap-6 text-center md:text-left">
        <a href={termsLink} className="hover:text-[#867abf]">
          Terms of Service
        </a>
        <a href={policyLink} className="hover:text-[#867abf]">
          Privacy Policy
        </a>
        <a href={`mailto:${email}`} className="hover:text-[#867abf]">
          {email}
        </a>
      </div>
      <span>@{year} isitgone. All rights reserved.</span>
    </footer>
  );
}
