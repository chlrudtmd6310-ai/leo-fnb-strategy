import Link from "next/link";
import ProfileAvatar from "@/components/ProfileAvatar";
import { SITE_NAME_PRIMARY, SITE_NAME_ACCENT } from "@/lib/constants";

export default function AboutPage() {
  return (
    <div className="min-h-screen px-6" style={{ backgroundColor: "#0A0A0A" }}>
      <div className="max-w-5xl mx-auto pt-28 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-12 md:gap-16">

          {/* 좌측 컬럼 */}
          <div className="flex flex-col items-start gap-6">
            <ProfileAvatar />

            <div>
              <p className="text-sm font-medium mb-2" style={{ color: "#9CA3AF" }}>
                Korean F&B Strategy Analyst
              </p>
              <h1
                className="text-3xl md:text-4xl font-bold"
                style={{ color: "#F5F5F5", fontFamily: "'Noto Sans KR', sans-serif" }}
              >
                {SITE_NAME_PRIMARY} <span style={{ color: "#10B981" }}>{SITE_NAME_ACCENT}</span>
              </h1>
            </div>

            <div className="flex gap-3 flex-wrap">
              <Link
                href="/analysis"
                className="px-6 py-3 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#10B981", color: "#0A0A0A" }}
              >
                리포트 보기
              </Link>
              {/* TODO: LinkedIn URL 입력 */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg text-sm font-semibold border transition-colors hover:border-white"
                style={{ borderColor: "#2D2D2D", color: "#D1D5DB" }}
              >
                LinkedIn
              </a>
            </div>

            <div className="flex gap-3 flex-wrap pt-2">
              {/* TODO: LinkedIn URL 입력 */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border text-xs transition-colors hover:border-white"
                style={{ borderColor: "#2D2D2D", color: "#9CA3AF" }}
              >
                💼 LinkedIn
              </a>
              <a
                href="mailto:chlrudtmd6310@gmail.com"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border text-xs transition-colors hover:border-white"
                style={{ borderColor: "#2D2D2D", color: "#9CA3AF" }}
              >
                📧 Email 문의
              </a>
            </div>
          </div>

          {/* 우측 컬럼 — 스토리텔링 텍스트 (3단계에서 5개 문단으로 재구성 예정) */}
          <div className="flex flex-col justify-center gap-4">
            <p className="leading-relaxed" style={{ color: "#D1D5DB", lineHeight: "1.9" }}>
              이 페이지는 지난 8년간 외식 프랜차이즈 본사에서 SCM, 물류관리, 매장 운영을 직접 겪은 실무자가, 그 경험을 체계적으로 정리하기 위해 시작한 외식업 브랜드 분석 아카이브 입니다.
            </p>
            <p className="leading-relaxed" style={{ color: "#D1D5DB", lineHeight: "1.9" }}>
              지극히 제 시선에서 분석한 자료이며, 특정 브랜드를 광고하거나 폄하하는 목적이 아닌, 전략적인 프레임워크를 통해 여러 카테고리로 분석해, 트렌드 나열이 아닌 &apos;전략적 판단&apos;에 필요한 인사이트를 모아 전달하는 것이 목표입니다.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
