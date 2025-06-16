export default function Footer() {
  const email = "ddiddhr@gmail.com";
  const termsLink =
    "https://giddy-fruitadens-7bc.notion.site/21425836aa418016b0a9f13084a30ded";
  const policyLink =
    "https://giddy-fruitadens-7bc.notion.site/21425836aa418016b0a9f13084a30ded";
  const year = new Date().getFullYear();
  return (
    <footer
      className="w-full mt-auto flex flex-col items-center gap-4 border-t border-white/10 p-8 text-xs text-gray-400 md:flex-row md:justify-between">
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
