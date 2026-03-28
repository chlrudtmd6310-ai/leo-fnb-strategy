import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import { analysisData, categoryColors } from "@/content/analysisData";
import { notFound } from "next/navigation";

// marked 설정: 표, 줄바꿈 허용
marked.setOptions({ breaks: true, gfm: true });

export async function generateStaticParams() {
  return analysisData.map((item) => ({ id: item.id }));
}

export default function ReportPage({ params }) {
  const { id } = params;

  // analysisData에서 메타 확인
  const meta = analysisData.find((item) => item.id === id);
  if (!meta) notFound();

  // 마크다운 파일 읽기
  const mdPath = path.join(process.cwd(), "content", "analysis", `${id}.md`);
  const fileExists = fs.existsSync(mdPath);

  let content = null;
  let frontmatter = {};

  if (fileExists) {
    const raw = fs.readFileSync(mdPath, "utf-8");
    const parsed = matter(raw);
    frontmatter = parsed.data;
    content = marked(parsed.content);
  }

  const accentColor = categoryColors[meta.category] ?? "#10B981";

  return (
    <div className="min-h-screen pt-24 px-6" style={{ backgroundColor: "#0A0A0A" }}>
      <div className="max-w-3xl mx-auto py-12">

        {/* 뒤로가기 */}
        <Link
          href="/analysis"
          className="text-xs mb-8 inline-block transition-colors hover:text-white"
          style={{ color: "#4B5563" }}
        >
          ← Analysis 목록
        </Link>

        {/* 헤더 */}
        <div className="mb-12">
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: accentColor }}
          >
            {meta.category}
          </span>
          <h1
            className="text-2xl md:text-4xl font-bold mt-3 mb-4 leading-snug"
            style={{ color: "#F5F5F5", fontFamily: "'Noto Sans KR', sans-serif" }}
          >
            {frontmatter.title ?? meta.title}
          </h1>
          <p className="text-base mb-3" style={{ color: "#9CA3AF" }}>
            {frontmatter.summary ?? meta.summary}
          </p>
          <p className="text-xs" style={{ color: "#4B5563" }}>
            {String(frontmatter.date ?? meta.date)}
          </p>
        </div>

        {/* 구분선 */}
        <div className="mb-10" style={{ borderTop: `1px solid ${accentColor}`, opacity: 0.3 }} />

        {/* 본문 */}
        {content ? (
          <div
            className="report-body"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        ) : (
          <div
            className="p-8 rounded-xl border text-center"
            style={{ backgroundColor: "#141414", borderColor: "#1F1F1F" }}
          >
            <p className="text-sm" style={{ color: "#9CA3AF" }}>
              이 리포트는 현재 준비 중입니다.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
