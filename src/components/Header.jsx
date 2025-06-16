export default function Header() {
  return (
    <header className="mx-auto flex w-full items-center justify-center px-8 py-4 md:justify-start md:px-10">
      <span className="flex items-center gap-2 text-lg font-semibold">
        <img src="/icon-192.png" alt="isitgone logo" className="w-10" />
        지나갔나요?
      </span>
    </header>
  );
}
