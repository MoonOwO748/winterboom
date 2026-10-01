import Image from "next/image";
import {
  GangnamAkCalculator,
  MobileMenuDrawer,
  GangnamAkFaq,
} from "./components";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0c0d12] text-[#f0ede6]">
      {/* ═══════════════════════════════════════════
          Header (gangnam-ak style)
          ═══════════════════════════════════════════ */}
      <header className="sticky top-0 z-40 bg-[#0c0d12]/95 border-b border-white/[0.08] backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex flex-col">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-gold-gradient">
              하이가라오케
            </span>
            <span className="text-[10px] tracking-[0.25em] text-text-dim uppercase font-semibold">
              GANGNAM ELITE
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-text-muted">
            <a href="#system" className="hover:text-gold-bright transition-colors">
              시스템 비교
            </a>
            <a href="#features" className="hover:text-gold-bright transition-colors">
              핵심 가치
            </a>
            <a href="#price" className="hover:text-gold-bright transition-colors">
              가격 안내
            </a>
            <a href="#facility" className="hover:text-gold-bright transition-colors">
              시설 안내
            </a>
            <a href="#reservation" className="hover:text-gold-bright transition-colors">
              예약 및 위치
            </a>
            <a href="#faq" className="hover:text-gold-bright transition-colors">
              자주 묻는 질문
            </a>
          </nav>

          {/* Right Action Button & Mobile Drawer */}
          <div className="flex items-center gap-3">
            <a
              href="tel:010-8701-1746"
              className="gold-button text-xs sm:text-sm py-2.5 px-4 sm:px-6"
            >
              ☎ 010-8701-1746
            </a>
            <MobileMenuDrawer />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* ═══════════════════════════════════════════
            Hero Section (gangnam-ak.com 80% style)
            ═══════════════════════════════════════════ */}
        <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-white/[0.06]">
          {/* Ambient background glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-gold-primary/15 via-gold-primary/5 to-transparent blur-[120px] -z-10"
          />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
            {/* Gold Tagline */}
            <p className="text-xs sm:text-sm md:text-base font-bold tracking-widest text-gold-gradient mb-4">
              진정한 하이엔드 엔터테인먼트 · 차원이 다른 서비스 · 그 이상의 경험
            </p>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight sm:leading-tight">
              강남 유흥 이용 안내<br />
              <span className="text-gold-gradient">하이가라오케 엘리트</span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-sm sm:text-base md:text-lg text-text-muted max-w-3xl mx-auto leading-relaxed">
              강남 유흥을 알아보는 분께 강남 하이퍼블릭 시스템과 이용 방법을 안내합니다.<br className="hidden sm:inline" />
              강남 가라오케 가격과 시간당 비용, 할인 조건을 확인하고 하이가라오케 방문을 준비하세요.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="sms:010-8701-1746"
                className="gold-button text-sm sm:text-base py-3.5 px-8 shadow-xl"
              >
                바로 예약하기
              </a>
              <a
                href="#price"
                className="gold-button-outline text-sm sm:text-base py-3.5 px-8"
              >
                요금 안내 보기
              </a>
            </div>

            {/* Price Calculator immediately embedded in Hero */}
            <div className="mt-12">
              <GangnamAkCalculator />
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            Section 1: 시스템 비교 (gangnam-ak 80% style)
            ═══════════════════════════════════════════ */}
        <section id="system" className="py-20 lg:py-28 border-b border-white/[0.06] bg-[#090a0f]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs sm:text-sm font-bold tracking-widest text-gold-gradient">
                강남 쩜오, 그 이상의 시스템
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white mt-2">
                강남 하이퍼블릭 시스템 안내
              </h2>
              <div className="gold-separator-center" />
              <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                하이가라오케는 단순히 술과 노래를 즐기는 1차원적인 강남 가라오케를 넘어섭니다.<br />
                최고급 시설, 프라이빗한 공간, 그리고 비교 불가한 서비스가 결합된 차원이 다른 사교와 엔터테인먼트의 정점입니다.
              </p>
              <p className="mt-3 text-sm text-gold-light font-medium">
                강남 쩜오 시스템의 장점은 극대화하고 단점은 보완하여, 고객님이 원하시는 모든 것을 만족시키는 하이가라오케만의 진화된 시스템입니다.
              </p>
            </div>

            {/* Comparison Table (gangnam-ak.com layout) */}
            <div className="overflow-x-auto shadow-2xl rounded-2xl">
              <table className="ak-comparison-table">
                <thead>
                  <tr>
                    <th className="w-1/4">구분</th>
                    <th className="w-1/4">일반 가라오케</th>
                    <th className="w-1/4">강남 쩜오</th>
                    <th className="w-1/4 highlight-col">하이가라오케</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="row-label">시스템</td>
                    <td className="text-text-muted">대중적, 오픈형</td>
                    <td className="text-text-muted">상위 15% 퀄리티, 정통</td>
                    <td className="highlight-col">쩜오의 장점 + 압도적 퀄리티</td>
                  </tr>
                  <tr>
                    <td className="row-label">분위기</td>
                    <td className="text-text-muted">캐주얼, 단체회식</td>
                    <td className="text-text-muted">비즈니스, 소수정예</td>
                    <td className="highlight-col">럭셔리, 하이엔드 유흥의 중심</td>
                  </tr>
                  <tr>
                    <td className="row-label">특징</td>
                    <td className="text-text-muted">합리적 가격</td>
                    <td className="text-text-muted">높은 기준, 검증 시스템</td>
                    <td className="highlight-col">신개념, 최고의 만족감</td>
                  </tr>
                  <tr>
                    <td className="row-label">상주 라인업</td>
                    <td className="text-text-muted">일반 수준</td>
                    <td className="text-text-muted">엄선된 소수</td>
                    <td className="highlight-col font-bold">평균 200명+ 압도적 규모</td>
                  </tr>
                  <tr>
                    <td className="row-label">전담 케어</td>
                    <td className="text-text-muted">기본 웨이터 응대</td>
                    <td className="text-text-muted">담당 매니저 응대</td>
                    <td className="highlight-col font-bold">3인 1조 전담 밀착 케어</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            Section 2: 4대 핵심 가치 (Zigzag with Circle Numbers - gangnam-ak signature!)
            ═══════════════════════════════════════════ */}
        <section id="features" className="py-20 lg:py-28 border-b border-white/[0.06]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs sm:text-sm font-bold tracking-widest text-gold-gradient">
                하이가라오케만의 독보적인 4대 약속
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white mt-2">
                품격이 다른 서비스 & 라인업
              </h2>
              <div className="gold-separator-center" />
            </div>

            <div className="space-y-16 lg:space-y-24">
              {/* Item 01 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 flex gap-6 items-start">
                  <div className="circle-number">01</div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                      독보적인 스케일, 완벽한 초이스
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-text-muted leading-relaxed">
                      평균 200명 이상의 압도적인 상주 규모로 기다림 없는 완벽한 매칭을 보장합니다. 강남 최고 수준의 라인업을 통해 고객님의 취향에 꼭 맞춘 최상의 만족감을 선사합니다.
                    </p>
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-gold-primary/25 shadow-xl">
                    <Image
                      src="/room1.jpg"
                      alt="독보적인 스케일 하이가라오케 룸"
                      fill
                      sizes="(min-width: 1152px) 544px, (min-width: 1024px) 48vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Item 02 (Reversed on desktop) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 lg:order-2 flex gap-6 items-start">
                  <div className="circle-number">02</div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                      &apos;엘리트 전담&apos; 팀장의 명품 케어
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-text-muted leading-relaxed">
                      강남 유흥의 트렌드를 선도하는 엘리트 전담 팀장이 이름에 걸맞은 신속하고 확실한 서비스로 오직 고객님만을 위한 최고의 자리를 책임지고 만들어 드립니다.
                    </p>
                  </div>
                </div>
                <div className="lg:col-span-6 lg:order-1">
                  <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-gold-primary/25 shadow-xl">
                    <Image
                      src="/room2.jpg"
                      alt="엘리트 전담 팀장의 명품 케어"
                      fill
                      sizes="(min-width: 1152px) 544px, (min-width: 1024px) 48vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Item 03 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 flex gap-6 items-start">
                  <div className="circle-number">03</div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                      24시간 풀 상주 & 3인 1조 전담 시스템
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-text-muted leading-relaxed">
                      담당이 가게에 24시간 항시 상주하며, 3인 1조의 체계적인 밀착 마크 시스템을 가동합니다. 자리가 끝나는 순간까지 단 한 번의 불편함도 없도록 빈틈없이 케어해 드립니다.
                    </p>
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-gold-primary/25 shadow-xl">
                    <Image
                      src="/room3.jpg"
                      alt="3인 1조 전담 케어 시스템"
                      fill
                      sizes="(min-width: 1152px) 544px, (min-width: 1024px) 48vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Item 04 (Reversed on desktop) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 lg:order-2 flex gap-6 items-start">
                  <div className="circle-number">04</div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                      퍼스트 클래스 대형 세단 픽업 SERVICE
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-text-muted leading-relaxed">
                      고객님의 안전하고 편안한 이동을 위해 강남권 전역 고급 세단 픽업 서비스를 무료로 지원해 드립니다. 도착하시는 순간부터 VIP 대우를 약속드립니다.
                    </p>
                  </div>
                </div>
                <div className="lg:col-span-6 lg:order-1">
                  <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-gold-primary/25 shadow-xl">
                    <Image
                      src="/hero.jpg"
                      alt="퍼스트 클래스 픽업 서비스"
                      fill
                      sizes="(min-width: 1152px) 544px, (min-width: 1024px) 48vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            Section 3: 시스템 및 요금 (gangnam-ak style)
            ═══════════════════════════════════════════ */}
        <section id="price" className="py-20 lg:py-28 border-b border-white/[0.06] bg-[#090a0f]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs sm:text-sm font-bold tracking-widest text-gold-gradient">
                투명한 시스템 및 정찰제 요금 안내
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white mt-2">
                강남 가라오케 가격 안내
              </h2>
              <div className="gold-separator-center" />
              <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                강남 엘리트 하이가라오케는 모든 가격을 투명하게 공개하는 정찰제를 원칙으로 합니다.<br />
                불필요한 견적 부풀리기 없이, 방문부터 배웅까지 기분 좋은 경험만을 약속드립니다.<br />
                강남 가라오케 가격은 기본 주대와 시간당 비용, 할인 적용 여부를 함께 확인해 주세요.
              </p>
              <p className="mt-3 text-sm font-bold text-gold-light">
                하이가라오케는 거품 없는 합리적인 가격으로 최고의 만족을 제공합니다.
              </p>
            </div>

            {/* 3 Price Cards (gangnam-ak style) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="ak-card-gold flex flex-col justify-between text-center">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gold-bright">
                    기본 주대
                  </span>
                  <div className="mt-4">
                    <span className="text-3xl sm:text-4xl font-black text-white">
                      100,000원
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-text-muted">
                    윈저, 골든블루 변경 가능
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 text-xs text-gold-light font-semibold">
                  안주 + 음료 세트 포함
                </div>
              </div>

              {/* Card 2 */}
              <div className="ak-card flex flex-col justify-between text-center">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gold-bright">
                    TC / 시간당
                  </span>
                  <div className="mt-4">
                    <span className="text-2xl sm:text-3xl font-black text-white">
                      첫 타임 120,000원
                    </span>
                    <p className="text-sm text-gold-light mt-1 font-bold">
                      연장 시 150,000원
                    </p>
                  </div>
                  <p className="mt-2 text-xs text-text-muted">
                    남성 선수 TC: 70,000원/T
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 text-xs text-text-muted font-medium">
                  투명한 정찰제 운영
                </div>
              </div>

              {/* Card 3 */}
              <div className="ak-card flex flex-col justify-between text-center">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gold-bright">
                    얼리버드 이벤트
                  </span>
                  <div className="mt-4">
                    <span className="text-3xl sm:text-4xl font-black text-gold-gradient">
                      -50,000원 할인
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-text-muted">
                    오후 9시 이전 입장 시 적용
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 text-xs text-gold-light font-semibold">
                  주대 5만원 즉시 할인 혜택
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            Section 4: 시설 안내 (gangnam-ak gallery & 6 features)
            ═══════════════════════════════════════════ */}
        <section id="facility" className="py-20 lg:py-28 border-b border-white/[0.06]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs sm:text-sm font-bold tracking-widest text-gold-gradient">
                하이가라오케의 품격
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white mt-2">
                시설 안내
              </h2>
              <div className="gold-separator-center" />
              <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                하이가라오케의 압도적인 스케일과 강남 럭셔리 가라오케의 룸 전경을 확인해보세요.<br />
                소규모 비즈니스 미팅부터 대형 프라이빗 파티까지, 모든 목적에 완벽하게 부합합니다.
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              <div className="relative h-48 sm:h-64 rounded-xl overflow-hidden border border-white/10 shadow-md">
                <Image src="/room1.jpg" alt="하이가라오케 VIP룸 전경 1" fill sizes="(min-width: 1152px) 544px, (min-width: 640px) 48vw, 100vw" className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="relative h-48 sm:h-64 rounded-xl overflow-hidden border border-white/10 shadow-md">
                <Image src="/room2.jpg" alt="하이가라오케 파티 스위트 2" fill sizes="(min-width: 1152px) 544px, (min-width: 640px) 48vw, 100vw" className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="relative h-48 sm:h-64 rounded-xl overflow-hidden border border-white/10 shadow-md">
                <Image src="/room3.jpg" alt="하이가라오케 프리미엄 세팅 3" fill sizes="(min-width: 1152px) 544px, (min-width: 640px) 48vw, 100vw" className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="relative h-48 sm:h-64 rounded-xl overflow-hidden border border-white/10 shadow-md">
                <Image src="/hero.jpg" alt="하이가라오케 라운지 4" fill sizes="(min-width: 1152px) 544px, (min-width: 640px) 48vw, 100vw" className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>

            {/* 6 Icons Feature Grid (gangnam-ak.com structure) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <div className="ak-card flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-gold-primary/10 border border-gold-primary/30 flex items-center justify-center text-gold-bright mb-4">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
                </div>
                <h4 className="text-base font-bold text-gold-gradient">
                  최신 반주기 & 음향 시설
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-text-muted leading-relaxed">
                  전 룸 동일하게 최신 기기와 전문 DJ를 통해 본인 목소리에 맞게 최적화된 마이크 개별 세팅 가능
                </p>
              </div>

              {/* Feature 2 */}
              <div className="ak-card flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-gold-primary/10 border border-gold-primary/30 flex items-center justify-center text-gold-bright mb-4">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
                </div>
                <h4 className="text-base font-bold text-gold-gradient">
                  웨이터 호출 & 서빙 서비스
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-text-muted leading-relaxed">
                  룸 내 비치된 호출벨(또는 프론트)에 요청 시, 바로 서빙 스태프가 신속하게 방문 케어
                </p>
              </div>

              {/* Feature 3 */}
              <div className="ak-card flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-gold-primary/10 border border-gold-primary/30 flex items-center justify-center text-gold-bright mb-4">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/></svg>
                </div>
                <h4 className="text-base font-bold text-gold-gradient">
                  에어컨 & 공기청정기 개별 제어
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-text-muted leading-relaxed">
                  룸별로 냉난방 및 고성능 공기청정기 ON/OFF를 고객 취향에 맞춰 자유롭게 조정 가능
                </p>
              </div>

              {/* Feature 4 */}
              <div className="ak-card flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-gold-primary/10 border border-gold-primary/30 flex items-center justify-center text-gold-bright mb-4">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/></svg>
                </div>
                <h4 className="text-base font-bold text-gold-gradient">
                  기본 조명 & 파티 조명 옵션
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-text-muted leading-relaxed">
                  아늑한 대화 분위기부터 클럽 느낌의 파티 무드 조명까지 상황별 자유 선택 가능
                </p>
              </div>

              {/* Feature 5 */}
              <div className="ak-card flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-gold-primary/10 border border-gold-primary/30 flex items-center justify-center text-gold-bright mb-4">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                </div>
                <h4 className="text-base font-bold text-gold-gradient">
                  무료 기본 안주 제공
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-text-muted leading-relaxed">
                  각 룸에 신선한 계절 과일 및 마른안주, 스낵 세트가 기본 무료로 푸짐하게 제공
                </p>
              </div>

              {/* Feature 6 */}
              <div className="ak-card flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-gold-primary/10 border border-gold-primary/30 flex items-center justify-center text-gold-bright mb-4">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <h4 className="text-base font-bold text-gold-gradient">
                  방역·청소 및 안전 관리
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-text-muted leading-relaxed">
                  모든 룸 매일 철저한 소독·청소 진행 및 프라이버시가 보장되는 안전한 보안 체계
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            Section 5: 예약 및 위치 (gangnam-ak style)
            ═══════════════════════════════════════════ */}
        <section id="reservation" className="py-20 lg:py-28 border-b border-white/[0.06] bg-[#090a0f]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs sm:text-sm font-bold tracking-widest text-gold-gradient">
                24시간 예약 문의 및 오시는 길
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white mt-2">
                예약 및 위치
              </h2>
              <div className="gold-separator-center" />
              <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                365일 24시간, 언제든 편하게 문의주십시오.<br />
                하이가라오케의 담당 매니저가 신속하고 친절하게 상담해 드립니다.<br />
                최고의 서비스를 위해 방문 전 예약은 필수입니다.
              </p>
            </div>

            {/* Contact Box (gangnam-ak style) */}
            <div className="ak-card-gold max-w-3xl mx-auto">
              <div className="text-center pb-6 border-b border-white/10">
                <span className="text-2xl font-black text-gold-gradient">
                  하이가라오케
                </span>
                <p className="text-xs text-text-dim mt-1 uppercase tracking-widest">
                  GANGNAM HIGH-END ENTERTAINMENT
                </p>
              </div>

              <div className="py-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div className="space-y-1.5">
                  <span className="text-xs text-text-dim block">전화번호</span>
                  <a href="tel:010-8701-1746" className="text-lg font-black text-white hover:text-gold-bright transition-colors">
                    010-8701-1746
                  </a>
                </div>
                <div className="space-y-1.5 border-y sm:border-y-0 sm:border-x border-white/10 py-4 sm:py-0">
                  <span className="text-xs text-text-dim block">카카오톡</span>
                  <span className="text-lg font-black text-gold-light">
                    010-8701-1746
                  </span>
                </div>
                <div className="space-y-1.5">
                  <span className="text-xs text-text-dim block">문자 예약</span>
                  <a href="sms:010-8701-1746" className="text-lg font-black text-white hover:text-gold-bright transition-colors">
                    010-8701-1746
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/10">
                <a
                  href="tel:010-8701-1746"
                  className="gold-button flex-1 py-4 text-center text-sm font-bold shadow-lg"
                >
                  전화 바로연결 (010-8701-1746)
                </a>
                <a
                  href="sms:010-8701-1746"
                  className="gold-button-outline flex-1 py-4 text-center text-sm font-bold"
                >
                  바로 예약하기 (문자)
                </a>
              </div>
            </div>

            {/* Address & Hours Info */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <div className="ak-card p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gold-primary/10 border border-gold-primary/30 flex items-center justify-center text-gold-bright shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gold-bright">매장 주소</h4>
                  <p className="text-sm text-white mt-1">서울 강남구 대치동 890-38 엘리트</p>
                  <p className="text-xs text-text-dim mt-0.5">*주차 및 무료 발렛 지원</p>
                </div>
              </div>

              <div className="ak-card p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gold-primary/10 border border-gold-primary/30 flex items-center justify-center text-gold-bright shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gold-bright">영업시간</h4>
                  <p className="text-sm text-white mt-1">365일 연중무휴</p>
                  <p className="text-xs text-text-dim mt-0.5">오후 6시 ~ 익일 오후 3시 (24시간 예약 가능)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            Section 6: 자주 묻는 질문 (gangnam-ak FAQ style)
            ═══════════════════════════════════════════ */}
        <section id="faq" className="py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs sm:text-sm font-bold tracking-widest text-gold-gradient">
                고객님들께서 가장 궁금해하시는 질문들을 모았습니다.
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white mt-2">
                자주 묻는 질문
              </h2>
              <div className="gold-separator-center" />
            </div>

            <div className="space-y-3">
              <GangnamAkFaq
                defaultOpen={true}
                question="강남 가라오케, 하이가라오케는 기존 강남 쩜오나 가라오케와 어떻게 다른가요?"
                answer="하이가라오케는 기존 강남 가라오케의 대중성과 강남 쩜오 시스템의 높은 퀄리티를 결합하여 한 차원 더 진화시킨 하이엔드 시스템입니다. 더 럭셔리한 시설, 차별화된 서비스로 기존에 만족하지 못하셨던 부분까지 완벽하게 채워드립니다."
              />
              <GangnamAkFaq
                question="강남 가라오케 가격은 어떤 항목을 확인해야 하나요?"
                answer="기본 주대, 첫 타임과 연장 비용, 이용 인원과 할인 적용 시간을 함께 확인하세요. 요금 계산기 합계에 RT(룸비)는 포함되지 않습니다. WT·RT와 추가 주문 비용은 예약 전에 문의해 주세요. 최종 포함 항목과 총액을 확인한 뒤 이용하시면 됩니다."
              />
              <GangnamAkFaq
                question="예약은 필수인가요? 당일 방문도 가능한가요?"
                answer="하이가라오케는 고객님 한 분 한 분께 최상의 서비스를 제공하기 위해 사전 예약제를 우선으로 운영하고 있습니다. 피크 타임에는 대기가 있을 수 있으니 방문 직전이라도 전화(010-8701-1746) 주시면 실시간으로 이용 가능한 룸을 신속하게 준비해 드립니다."
              />
              <GangnamAkFaq
                question="혼자 방문하거나, 단체(회식)로 방문해도 되나요?"
                answer="물론입니다. 프라이빗한 1인 혼술 고객님부터 비즈니스 VIP 접대, 생일 파티, 단체 회식까지 모두 환영합니다. 소형 룸부터 대형 단체 VIP룸까지 완비되어 있어 인원수에 맞춰 최적의 룸으로 세팅해 드립니다."
              />
              <GangnamAkFaq
                question="주차나 발렛 서비스, 픽업 서비스는 어떻게 되나요?"
                answer="대치동 매장 도착 시 전용 주차장과 무료 발렛파킹 서비스를 이용하실 수 있습니다. 또한 사전 예약 시 강남권 전역 고급 대형 세단 픽업 서비스를 지원해 드립니다."
              />
            </div>
          </div>
        </section>
      </main>

      {/* ═══════════════════════════════════════════
          Footer (gangnam-ak style)
          ═══════════════════════════════════════════ */}
      <footer className="bg-[#07070a] border-t border-white/10 pt-16 pb-28 md:pb-16 text-text-dim text-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between gap-8 pb-10 border-b border-white/[0.06]">
            <div>
              <span className="text-xl font-black text-gold-gradient block">
                하이가라오케
              </span>
              <p className="text-text-muted mt-2 text-sm">
                강남 엘리트 하이가라오케 공식 예약 사이트
              </p>
              <div className="mt-4 space-y-1 text-text-muted text-xs">
                <p>상호: 하이가라오케 | 대표번호: <a href="tel:010-8701-1746" className="text-gold-bright hover:underline">010-8701-1746</a></p>
                <p>주소: 서울특별시 강남구 대치동 890-38 엘리트</p>
                <p>강남 유흥 이용 전, 강남 가라오케 가격과 강남 하이퍼블릭 시스템을 확인하세요.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium">
              <a href="#system" className="hover:text-gold-light transition-colors">시스템 비교</a>
              <a href="#features" className="hover:text-gold-light transition-colors">핵심 가치</a>
              <a href="#price" className="hover:text-gold-light transition-colors">가격 안내</a>
              <a href="#facility" className="hover:text-gold-light transition-colors">시설 안내</a>
              <a href="#reservation" className="hover:text-gold-light transition-colors">예약 및 위치</a>
              <a href="#faq" className="hover:text-gold-light transition-colors">자주 묻는 질문</a>
            </div>
          </div>

          <div className="pt-6 text-center text-text-dim">
            <p>© 2025 하이가라오케. All Rights Reserved. 본 사이트는 강남 엘리트 하이가라오케 공식 안내 웹사이트입니다.</p>
          </div>
        </div>
      </footer>

      {/* ═══════════════════════════════════════════
          Mobile Fixed Bottom Bar (gangnam-ak.com style)
          ═══════════════════════════════════════════ */}
      <div className="mobile-fixed-bottom">
        <a href="tel:010-8701-1746" className="btn-call">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.13 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.07 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          전화상담 연결
        </a>
        <a href="sms:010-8701-1746" className="btn-sms">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          문자 간편예약
        </a>
      </div>
    </div>
  );
}
