import { analysisData } from "@/content/analysisData";
import AnalysisGallery from "@/components/AnalysisGallery";

export default function AnalysisPage() {
  return (
    <div className="min-h-screen pt-24 px-6" style={{ backgroundColor: "#0A0A0A" }}>
      <div className="max-w-5xl mx-auto py-16">

        {/* 헤더 */}
        <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: "#10B981" }}>
          Analysis
        </p>
        <h1
          className="text-3xl md:text-5xl font-bold mb-3"
          style={{ color: "#F5F5F5", fontFamily: "'Noto Sans KR', sans-serif" }}
        >
          외식 브랜드 분석 아카이브
        </h1>
        <p className="text-sm md:text-base mb-12" style={{ color: "#9CA3AF" }}>
          국내외 F&B 브랜드의 전략, 수익구조, 포지셔닝을 데이터 기반으로 해부합니다.
        </p>

        {/* 필터 + 카드 갤러리 */}
        <AnalysisGallery items={analysisData} />

      </div>
    </div>
  );
}
