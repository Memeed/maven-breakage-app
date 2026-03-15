import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-block w-7 h-7 rounded bg-black text-white flex items-center justify-center font-bold text-lg">
              M
            </span>
            <span className="font-semibold text-lg tracking-tight">
              Maven Breakage Monitoring
            </span>
          </Link>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-xs text-gray-500 font-medium tracking-wide">
            ENSEIRB-MATMECA
          </span>
        </div>
      </div>
    </header>
  );
}
