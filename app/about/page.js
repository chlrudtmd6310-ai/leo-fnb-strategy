const career = [
  {
    role: "상품운영팀 — 상품 수급 관리자",
    company: "홈스푸드 (한식 프랜차이즈)",
    note: "현재",
  },
  {
    role: "점장 — 가맹점 현장 운영",
    company: "국선생 신촌점",
    note: "3년",
  },
  {
    role: "SC — 편의점 계약 관리",
    company: "BGF리테일",
    note: "계약 17건 관리 · 일 고객수 535→771명 개선",
  },
];

const strengths = [
  { name: "절친 (Relator)", desc: "신뢰 기반의 깊은 관계 구축" },
  { name: "배움 (Learner)", desc: "끊임없는 학습과 지식 축적" },
  { name: "분석 (Analytical)", desc: "데이터 기반 논리적 사고" },
  { name: "화합 (Harmony)", desc: "이해관계 조율과 합의 도출" },
  { name: "수집 (Input)", desc: "정보 수집과 체계적 정리" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 px-6" style={{ backgroundColor: "#0A0A0A" }}>
      <div className="max-w-3xl mx-auto py-16 space-y-16">

        {/* 타이틀 */}
        <div>
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: "#10B981" }}>
            ABOUT
          </p>
          <h1
            className="text-3xl md:text-5xl font-bold mb-10"
            style={{ color: "#F5F5F5", fontFamily: "'Noto Sans KR', sans-serif" }}
          >
            About Leo Choi
          </h1>

          {/* Career Summary callout */}
          <div
            className="p-6 rounded-r-xl"
            style={{
              borderLeft: "3px solid #10B981",
              backgroundColor: "#141414",
            }}
          >
            <p className="leading-relaxed" style={{ color: "#D1D5DB", lineHeight: "1.9" }}>
              외식산업 현장과 본사 양쪽을 경험한 8년차 F&B 전문가입니다.<br />
              가맹점 운영부터 본사 상품 수급 관리까지,<br />
              프랜차이즈 비즈니스의 전 과정을 실무로 체득했습니다.
            </p>
          </div>
        </div>

        {/* 경력 타임라인 */}
        <div>
          <h2 className="text-lg font-bold mb-6" style={{ color: "#F5F5F5" }}>
            Experience
          </h2>
          <div className="space-y-0">
            {career.map((item, i) => (
              <div key={i} className="flex gap-5 relative">
                {/* 타임라인 라인 */}
                <div className="flex flex-col items-center">
                  <div
                    className="w-2.5 h-2.5 rounded-full mt-1.5 shrink-0"
                    style={{ backgroundColor: "#10B981" }}
                  />
                  {i < career.length - 1 && (
                    <div className="w-px flex-1 my-1" style={{ backgroundColor: "#1F1F1F" }} />
                  )}
                </div>
                {/* 내용 */}
                <div className="pb-8">
                  <p className="text-sm font-semibold" style={{ color: "#F5F5F5" }}>
                    {item.company}
                  </p>
                  <p className="text-sm mt-0.5" style={{ color: "#9CA3AF" }}>
                    {item.role}
                  </p>
                  <p className="text-xs mt-1" style={{ color: "#4B5563" }}>
                    {item.note}
                  </p>
                </div>
              </div>
            ))}
            {/* 총 경력 */}
            <div className="flex gap-5">
              <div className="w-2.5 shrink-0" />
              <p className="text-sm font-medium pb-0" style={{ color: "#10B981" }}>
                총 F&B/유통 경력 8년
              </p>
            </div>
          </div>
        </div>

        {/* Analysis Philosophy */}
        <div>
          <h2 className="text-lg font-bold mb-4" style={{ color: "#F5F5F5" }}>
            분석 철학
          </h2>
          <div
            className="p-6 rounded-xl space-y-3"
            style={{ backgroundColor: "#141414", border: "1px solid #1F1F1F" }}
          >
            {[
              "프랜차이즈 분석은 단순한 매출 비교가 아닙니다.",
              "본사는 어디서 돈을 버는가. 가맹점주는 실제로 얼마를 가져가는가.",
              "유통 마진은 누구에게 어떻게 흘러가는가.",
              "이 세 가지 질문에 답할 수 있어야 비로소 브랜드의 진짜 구조가 보입니다.",
            ].map((line, i) => (
              <p key={i} className="leading-relaxed" style={{ color: i === 3 ? "#D1D5DB" : "#9CA3AF", lineHeight: "1.8" }}>
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* Core Strengths */}
        <div>
          <h2 className="text-lg font-bold mb-2" style={{ color: "#F5F5F5" }}>
            Core Strengths
          </h2>
          <p className="text-xs mb-6" style={{ color: "#4B5563" }}>
            Gallup CliftonStrengths 기반
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {strengths.map((s, i) => (
              <div
                key={i}
                className="p-4 rounded-xl border"
                style={{ backgroundColor: "#141414", borderColor: "#1F1F1F" }}
              >
                <p className="text-sm font-semibold mb-1" style={{ color: "#10B981" }}>
                  {s.name}
                </p>
                <p className="text-xs" style={{ color: "#9CA3AF" }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
          {/* 강조 박스 */}
          <div
            className="p-4 rounded-xl text-sm"
            style={{
              backgroundColor: "#0D1F17",
              border: "1px solid #10B981",
              color: "#6EE7B7",
              lineHeight: "1.7",
            }}
          >
            전략적 사고 영역이 Top 10 중 5개를 차지하는 분석적 전략가 유형입니다.
          </div>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-bold mb-5" style={{ color: "#F5F5F5" }}>
            Contact
          </h2>
          <ul className="space-y-3 text-sm" style={{ color: "#9CA3AF" }}>
            <li>📧 Email — <span style={{ color: "#4B5563" }}>추후 입력</span></li>
            <li>💼 LinkedIn — <span style={{ color: "#4B5563" }}>추후 입력</span></li>
            <li>📝 Naver Blog — <span style={{ color: "#4B5563" }}>Leo's F&B Insight (추후 입력)</span></li>
          </ul>
        </div>

        {/* 면책 조항 */}
        <p className="text-xs pb-4" style={{ color: "#374151", lineHeight: "1.7" }}>
          이 사이트의 모든 분석은 공개 데이터를 기반으로 하며, 개인의 분석 의견으로 투자 조언이 아닙니다.
        </p>

      </div>
    </div>
  );
}
