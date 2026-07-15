import Link from "next/link";
import { analysisData, categoryColors } from "@/content/analysisData";
import { SITE_NAME_PRIMARY, SITE_NAME_ACCENT } from "@/lib/constants";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0A0A0A" }}>

      {/* Hero */}
      <section className="flex items-center px-6 pt-28 pb-20">
        <div className="max-w-5xl mx-auto w-full flex flex-col items-start text-left">
          <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "#9CA3AF" }}>
            FOOD SERVICE STRATEGY
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold leading-tight mb-3"
            style={{ color: "#F5F5F5", fontFamily: "'Noto Sans KR', sans-serif" }}
          >
            {SITE_NAME_PRIMARY} <span style={{ color: "#10B981" }}>{SITE_NAME_ACCENT}</span>
          </h1>
          <p className="text-lg md:text-xl font-medium mb-3" style={{ color: "#D1D5DB" }}>
            외식업 브랜드 분석 아카이브
          </p>
          <p className="text-sm md:text-base mb-10" style={{ color: "#9CA3AF" }}>
            현장 경험 기반의 외식업 인사이트 리포트
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/analysis"
              className="px-6 py-3 rounded-md text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#10B981", color: "#0A0A0A" }}
            >
              분석 보기
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 rounded-md text-sm font-semibold border transition-colors hover:border-white"
              style={{ borderColor: "#2D2D2D", color: "#9CA3AF" }}
            >
              소개
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Analysis */}
      <section className="max-w-5xl mx-auto w-full px-6 pb-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold" style={{ color: "#F5F5F5" }}>
            Latest Analysis
          </h2>
          <Link
            href="/analysis"
            className="text-sm transition-colors hover:text-white"
            style={{ color: "#9CA3AF" }}
          >
            전체 보기 →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {analysisData.map((item) => {
            const accentColor = categoryColors[item.category] ?? "#10B981";
            return (
              <Link
                key={item.id}
                href={`/analysis/${item.id}`}
                className="rounded-xl border overflow-hidden group transition-colors hover:border-emerald-500"
                style={{ backgroundColor: "#141414", borderColor: "#1F1F1F" }}
              >
                {/* 커버 영역 */}
                <div
                  className="flex items-center justify-center"
                  style={{
                    height: "160px",
                    backgroundColor: "#0D0D0D",
                    borderBottom: `3px solid ${accentColor}`,
                  }}
                >
                  <span
                    className="text-sm font-medium text-center px-4"
                    style={{ color: "#4B5563" }}
                  >
                    {item.brand}
                  </span>
                </div>

                {/* 카드 본문 */}
                <div className="p-5">
                  <span
                    className="text-xs font-semibold tracking-wide uppercase"
                    style={{ color: accentColor }}
                  >
                    {item.category}
                  </span>
                  <h3
                    className="text-sm font-semibold mt-2 mb-2 leading-snug group-hover:text-emerald-400 transition-colors"
                    style={{ color: "#F5F5F5" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs mb-4 leading-relaxed" style={{ color: "#9CA3AF" }}>
                    {item.summary}
                  </p>
                  <p className="text-xs" style={{ color: "#4B5563" }}>
                    {item.date}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

    </div>
  );
}
