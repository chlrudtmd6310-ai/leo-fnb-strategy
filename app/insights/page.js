export default function InsightsPage() {
  return (
    <div className="min-h-screen pt-24 px-6" style={{ backgroundColor: "#0A0A0A" }}>
      <div className="max-w-5xl mx-auto py-16">
        <p className="text-sm font-medium tracking-widest uppercase mb-3" style={{ color: "#10B981" }}>
          Insights
        </p>
        <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: "#F5F5F5" }}>
          시장 인사이트
        </h1>
        <p className="text-base mb-12" style={{ color: "#9CA3AF" }}>
          외식 산업의 트렌드와 소비자 행동 변화를 데이터 기반으로 추적합니다.
        </p>
        <div className="rounded-xl border p-8 text-center" style={{ backgroundColor: "#141414", borderColor: "#1F1F1F" }}>
          <p style={{ color: "#9CA3AF" }}>인사이트 콘텐츠가 곧 업로드됩니다.</p>
        </div>
      </div>
    </div>
  );
}
