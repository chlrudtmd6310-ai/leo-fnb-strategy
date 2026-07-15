import Link from "next/link";
import { SITE_NAME_PRIMARY, SITE_NAME_ACCENT } from "@/lib/constants";

export default function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#0A0A0A",
        borderBottom: "1px solid #1F1F1F",
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold" style={{ color: "#F5F5F5", fontFamily: "'Inter', 'Noto Sans KR', sans-serif" }}>
          {SITE_NAME_PRIMARY} <span style={{ color: "#10B981" }}>{SITE_NAME_ACCENT}</span>
        </Link>
        <ul className="flex gap-8 text-sm" style={{ color: "#9CA3AF" }}>
          <li>
            <Link href="/analysis" className="hover:text-white transition-colors">
              Analysis
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-white transition-colors">
              About
            </Link>
          </li>
          <li>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn ↗
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
