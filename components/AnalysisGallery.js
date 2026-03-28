"use client";

import Link from "next/link";
import { useState } from "react";
import { categoryColors } from "@/content/analysisData";

const CATEGORIES = ["전체", "치킨", "커피", "한식", "분식"];

export default function AnalysisGallery({ items }) {
  const [active, setActive] = useState("전체");

  const filtered =
    active === "전체" ? items : items.filter((item) => item.category === active);

  return (
    <>
      {/* 카테고리 필터 */}
      <div className="flex gap-2 flex-wrap mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className="px-4 py-1.5 rounded-full text-sm font-medium transition-colors"
            style={
              active === cat
                ? { backgroundColor: "#10B981", color: "#0A0A0A" }
                : { backgroundColor: "#141414", color: "#9CA3AF", border: "1px solid #1F1F1F" }
            }
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 카드 그리드 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((item) => {
          const accentColor = categoryColors[item.category] ?? "#10B981";
          const isDraft = item.status === "draft";

          return (
            <Link
              key={item.id}
              href={`/analysis/${item.id}`}
              className="rounded-xl border overflow-hidden group transition-all"
              style={{
                backgroundColor: "#141414",
                borderColor: "#1F1F1F",
                opacity: isDraft ? 0.45 : 1,
                pointerEvents: isDraft ? "none" : "auto",
              }}
            >
              {/* 커버 */}
              <div
                className="flex items-center justify-center relative"
                style={{
                  height: "160px",
                  backgroundColor: "#0D0D0D",
                  borderTop: `3px solid ${accentColor}`,
                }}
              >
                <span
                  className="text-sm font-medium text-center px-4"
                  style={{ color: "#4B5563" }}
                >
                  {item.brand}
                </span>
                {isDraft && (
                  <span
                    className="absolute top-3 right-3 text-xs px-2 py-0.5 rounded"
                    style={{ backgroundColor: "#1F1F1F", color: "#6B7280" }}
                  >
                    Draft
                  </span>
                )}
              </div>

              {/* 본문 */}
              <div className="p-5 transition-colors group-hover:bg-[#191919]">
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
    </>
  );
}
