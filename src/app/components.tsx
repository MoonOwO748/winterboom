"use client";

import { useState } from "react";

/* ═══════════════════════════════════════════
   gangnam-ak Style Price Calculator
   ═══════════════════════════════════════════ */
export function GangnamAkCalculator() {
  const [session, setSession] = useState<number>(1); // 1: 1부 (할인), 2: 2부, 3: 3부
  const [hours, setHours] = useState<number>(2);
  const [girls, setGirls] = useState<number>(2);
  const [hosts, setHosts] = useState<number>(0);

  const BASE_LIQUOR = 150000;
  const DISCOUNT_1ST = 50000;
  const TC_FIRST = 120000;
  const TC_EXTEND = 150000;
  const HOST_TC = 70000;

  // Costs calculation
  const liquorCost = BASE_LIQUOR;
  const discount = session === 1 ? DISCOUNT_1ST : 0;
  const girlCost =
    girls > 0
      ? TC_FIRST * girls + TC_EXTEND * girls * Math.max(0, hours - 1)
      : 0;
  const hostCost = hosts > 0 ? HOST_TC * hosts * hours : 0;
  const total = liquorCost - discount + girlCost + hostCost;

  const fmt = (n: number) => n.toLocaleString("ko-KR") + "원";

  return (
    <div id="price_calculator" className="price-calc-container max-w-4xl mx-auto my-8">
      {/* Title */}
      <div className="text-center mb-8">
        <h3 className="text-2xl sm:text-3xl font-black text-gold-gradient tracking-tight">
          요금 계산기
        </h3>
        <p className="mt-2 text-sm text-text-muted">
          방문하시기 전 미리 요금을 실시간으로 확인해보세요.
        </p>
      </div>

      {/* 1. Session Selection */}
      <div className="mb-7">
        <label className="block text-sm font-bold text-gold-bright mb-3">
          1. 방문 시간 선택
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button
            type="button"
            onClick={() => setSession(1)}
            className={`p-3.5 rounded-xl border text-left text-xs sm:text-sm font-bold transition-all ${
              session === 1
                ? "border-gold-primary bg-gold-primary/20 text-white shadow-[0_0_15px_rgba(212,149,106,0.25)]"
                : "border-white/10 bg-white/5 text-text-muted hover:border-white/20"
            }`}
          >
            <div className="flex items-center justify-between">
              <span>1부 (6PM ~ 9PM)</span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-gold-dark/40 text-gold-light font-bold">
                -5만 할인
              </span>
            </div>
            <p className="mt-1 text-[11px] opacity-75 font-normal">얼리버드 특별 주대</p>
          </button>

          <button
            type="button"
            onClick={() => setSession(2)}
            className={`p-3.5 rounded-xl border text-left text-xs sm:text-sm font-bold transition-all ${
              session === 2
                ? "border-gold-primary bg-gold-primary/20 text-white shadow-[0_0_15px_rgba(212,149,106,0.25)]"
                : "border-white/10 bg-white/5 text-text-muted hover:border-white/20"
            }`}
          >
            <span>2부 (9PM ~ 1AM)</span>
            <p className="mt-1 text-[11px] opacity-75 font-normal">피크 타임 정찰 주대</p>
          </button>

          <button
            type="button"
            onClick={() => setSession(3)}
            className={`p-3.5 rounded-xl border text-left text-xs sm:text-sm font-bold transition-all ${
              session === 3
                ? "border-gold-primary bg-gold-primary/20 text-white shadow-[0_0_15px_rgba(212,149,106,0.25)]"
                : "border-white/10 bg-white/5 text-text-muted hover:border-white/20"
            }`}
          >
            <span>3부 (1AM ~ 3PM)</span>
            <p className="mt-1 text-[11px] opacity-75 font-normal">심야 & 익일 연장 주대</p>
          </button>
        </div>
      </div>

      {/* 2. Hours Slider */}
      <div className="mb-7 bg-white/[0.02] border border-white/[0.06] rounded-xl p-5">
        <div className="flex items-center justify-between mb-3">
          <label className="text-sm font-bold text-gold-bright">
            2. 이용 시간
          </label>
          <span className="text-sm font-black text-white bg-gold-primary/20 border border-gold-primary/40 px-3 py-1 rounded-lg">
            {hours}시간 ({hours}T)
          </span>
        </div>
        <input
          type="range"
          min="1"
          max="10"
          value={hours}
          onChange={(e) => setHours(parseInt(e.target.value))}
          className="calc-slider"
        />
        <div className="flex justify-between text-[11px] text-text-dim mt-2 px-1">
          <span>1시간</span>
          <span>5시간</span>
          <span>10시간</span>
        </div>
      </div>

      {/* 3. Attendants Grid Counters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-7">
        <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5 flex items-center justify-between">
          <div>
            <label className="text-sm font-bold text-gold-bright block">
              아가씨 수
            </label>
            <span className="text-xs text-text-muted">첫타임 12만 / 연장 15만</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="counter-btn"
              onClick={() => setGirls((g) => Math.max(0, g - 1))}
            >
              −
            </button>
            <span className="w-8 text-center text-lg font-black text-white">
              {girls}
            </span>
            <button
              type="button"
              className="counter-btn"
              onClick={() => setGirls((g) => Math.min(10, g + 1))}
            >
              +
            </button>
          </div>
        </div>

        <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5 flex items-center justify-between">
          <div>
            <label className="text-sm font-bold text-gold-bright block">
              선수 수
            </label>
            <span className="text-xs text-text-muted">시간당 7만 / T</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="counter-btn"
              onClick={() => setHosts((h) => Math.max(0, h - 1))}
            >
              −
            </button>
            <span className="w-8 text-center text-lg font-black text-white">
              {hosts}
            </span>
            <button
              type="button"
              className="counter-btn"
              onClick={() => setHosts((h) => Math.min(10, h + 1))}
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* 4. Result Panel */}
      <div className="bg-gradient-to-b from-[#181a24] to-[#0e1017] border border-gold-primary/35 rounded-xl p-6">
        <div className="space-y-3 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-text-muted">기본 주대</span>
            <span className="font-semibold text-white">{fmt(liquorCost)}</span>
          </div>

          {session === 1 && (
            <div className="flex items-center justify-between text-gold-bright">
              <span>방문 할인 (1부 얼리버드)</span>
              <span className="font-bold">-{fmt(discount)}</span>
            </div>
          )}

          <div className="flex items-center justify-between">
            <span className="text-text-muted">아가씨 비용 ({girls}명 / {hours}T)</span>
            <span className="font-semibold text-white">{fmt(girlCost)}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-text-muted">선수 비용 ({hosts}명 / {hours}T)</span>
            <span className="font-semibold text-white">{fmt(hostCost)}</span>
          </div>
        </div>

        <div className="border-t border-white/10 my-4" />

        <div className="flex items-center justify-between py-1">
          <span className="text-base font-bold text-white">예상 합계 금액</span>
          <span className="text-2xl sm:text-3xl font-black text-gold-gradient">
            {fmt(total)}
          </span>
        </div>

        <p className="text-[11px] text-text-dim mt-3 text-center">
          ※ 기본 위스키 기준 예상 비용이며 RT(룸비)는 합계에 포함되지 않습니다. WT·RT는 별도 문의해 주세요.
        </p>

        <div className="mt-5 flex flex-col sm:flex-row gap-3">
          <a
            href="tel:010-8701-1746"
            className="gold-button flex-1 py-3.5 text-center text-sm font-bold shadow-lg"
          >
            ☎ 010-8701-1746 바로 예약하기
          </a>
          <a
            href="sms:010-8701-1746"
            className="gold-button-outline py-3.5 text-center text-sm font-bold sm:w-44"
          >
            💬 문자로 문의
          </a>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   gangnam-ak Style Mobile Menu Drawer
   ═══════════════════════════════════════════ */
export function MobileMenuDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="메뉴 열기"
        className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 bg-white/5 text-gold-light"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer Content */}
          <div className="relative ml-auto w-full max-w-xs h-full bg-[#0d0e14] border-l border-gold-primary/30 p-6 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="font-bold text-lg text-gold-gradient">
                  하이가라오케
                </span>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-lg text-text-muted hover:text-white"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              <nav className="mt-6 flex flex-col space-y-4 text-base font-semibold">
                <a
                  href="#system"
                  onClick={() => setIsOpen(false)}
                  className="py-2 border-b border-white/5 text-text-main hover:text-gold-bright"
                >
                  시스템 비교
                </a>
                <a
                  href="#features"
                  onClick={() => setIsOpen(false)}
                  className="py-2 border-b border-white/5 text-text-main hover:text-gold-bright"
                >
                  핵심 가치 & 혜택
                </a>
                <a
                  href="#price"
                  onClick={() => setIsOpen(false)}
                  className="py-2 border-b border-white/5 text-text-main hover:text-gold-bright"
                >
                  가격 안내
                </a>
                <a
                  href="#facility"
                  onClick={() => setIsOpen(false)}
                  className="py-2 border-b border-white/5 text-text-main hover:text-gold-bright"
                >
                  시설 안내
                </a>
                <a
                  href="#reservation"
                  onClick={() => setIsOpen(false)}
                  className="py-2 border-b border-white/5 text-text-main hover:text-gold-bright"
                >
                  예약 및 위치
                </a>
                <a
                  href="#faq"
                  onClick={() => setIsOpen(false)}
                  className="py-2 border-b border-white/5 text-text-main hover:text-gold-bright"
                >
                  자주 묻는 질문
                </a>
              </nav>
            </div>

            <div className="space-y-3 pt-6 border-t border-white/10">
              <a
                href="tel:010-8701-1746"
                className="gold-button w-full text-center text-sm font-bold"
              >
                ☎ 전화 바로걸기
              </a>
              <p className="text-center text-xs text-text-dim">
                대치동 890-38 엘리트
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ═══════════════════════════════════════════
   gangnam-ak Style Accordion FAQ
   ═══════════════════════════════════════════ */
export function GangnamAkFaq({
  question,
  answer,
  defaultOpen = false,
}: {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}) {
  return (
    <details className="ak-faq-item" open={defaultOpen ? true : undefined}>
      <summary>
        <span className="flex items-center gap-2.5">
          <span className="text-gold-gradient font-black text-lg">Q.</span>
          <span className="text-white text-sm sm:text-base font-semibold">
            {question}
          </span>
        </span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-gold-primary transition-transform duration-300 [[open]_&]:rotate-180 shrink-0"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </summary>
      <div className="faq-answer">{answer}</div>
    </details>
  );
}
