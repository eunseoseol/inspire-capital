// app/page.tsx (Client Component)
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// 네비게이션: 새 섹션 포함 (Features, Backed, Why, Team, Contact)
const NAV = [
  { label: "Features", href: "#features" },
  { label: "Backed", href: "#backed" },
  { label: "Why", href: "#why" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

// Team
const TEAM = [
  {
    name: "Eunseo Seol",
    role: "Primer Venture Partner",
    avatar: "/eunseoseol.png",
    links: [
      { label: "Threads", href: "https://www.threads.net/@eunseoseol" },
      { label: "Instagram", href: "https://www.instagram.com/eunseoseol" },
      { label: "X", href: "https://x.com/eunseoseol" },
    ],
  },
  {
    name: "Philip Yoo",
    role: "Founder, Cordia Studio",
    avatar: "/philipyoo.png",
    links: [
      { label: "Cordia Studio", href: "https://cordia.studio" },
      { label: "Instagram", href: "https://www.instagram.com/philiphyoo" },
    ],
  },
];

// Backed by (슬라이더)
const PARTNERS = [
  { name: "EO Studio", logo: "/eo.png", url: "https://eostudio.io" },
  { name: "Primer", logo: "/primer.png", url: "https://primer.kr" },
  { name: "Marpple Corp", logo: "/marpple.png", url: "https://www.marpplecorp.com" },
  { name: "ZVZO", logo: "/zvzo.png", url: "https://doerscorp.notion.site/ZVZO-6b2b76ec3f0f42fb8e74bf4ccec401e1" },
  { name: "Workmore", logo: "/workmore.png", url: "https://www.workmore.org" },
  { name: "Cordia Studio", logo: "/cordia.png", url: "https://cordia.studio" },
  { name: "Next Gen", logo: "/nextgen.png", url: "https://nextgen-academy-three.vercel.app" },
  { name: "Team Cookie", logo: "/teamcookie.png", url: "#" },
  { name: "BZCF", logo: "/bzcf.png", url: "#" },
];

// Features (특징 3가지)
const FEATURES = [
  { title: "지구상에서 가장 젊은 벤처 캐피탈", desc: "세대 교체의 최전선에서, 새로운 감각과 속도로 베팅합니다." },
  { title: "오직 IP 비즈니스에만 투자", desc: "크리에이터·브랜드·콘텐츠 IP 중심의 컴파운딩 가치에 집중합니다." },
  { title: "샌프란시스코·뉴욕·서울 진출 발판", desc: "글로벌 분산 네트워크로 초기 단계부터 해외 확장을 설계합니다." },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Neon backdrop accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-32 -left-24 h-80 w-80 rounded-full blur-3xl opacity-40"
          style={{
            background:
              "radial-gradient(40% 40% at 50% 50%, #00FFD1 0%, rgba(0,255,209,0) 70%)",
          }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 -right-24 h-96 w-96 rounded-full blur-3xl opacity-30"
          style={{
            background:
              "radial-gradient(40% 40% at 50% 50%, #7FFF00 0%, rgba(127,255,0,0) 70%)",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00FFD1]/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#7FFF00]/70 to-transparent" />
      </div>

      {/* Grid overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(0,255,209,.28)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,209,.28)_1px,transparent_1px)] [background-size:44px_44px]"
      />

      {/* Nav */}
      <header className="relative z-10 mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2 group" aria-label="Inspire Capital home">
          <span
            className="font-semibold tracking-wider text-white/90 group-hover:text-[#00FFD1] transition"
          >
            INSPIRE CAPITAL
          </span>
          <span className="h-2.5 w-2.5 rounded-full bg-[#00FFD1] shadow-[0_0_18px_rgba(0,255,209,1)]" />
        </Link>

        <nav className="hidden sm:flex items-center gap-6 text-sm text-zinc-300">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-white">
              {n.label}
            </Link>
          ))}
        </nav>
      </header>

{/* Hero Section */}
<section className="relative z-10 h-[90vh] w-full overflow-hidden flex items-center justify-center text-center">
  {/* Google Drive 비디오 */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 h-full w-full object-cover"
  >
    <source
      src="https://drive.google.com/uc?export=download&id=1OYSxPKzgsPloxXon57187ttVbtAN5VrO"
      type="video/mp4"
    />
  </video>

  {/* 어두운 오버레이 */}
  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

  {/* 텍스트 */}
  <div className="relative z-10 px-6">
    <h1
      className="text-5xl sm:text-7xl font-extrabold leading-[1.05] tracking-tight text-white"
      style={{
        textShadow:
          "0 0 25px rgba(255,255,255,0.8), 0 0 60px rgba(255,255,255,0.4)",
      }}
    >
      Creator is <br />
      <span className="block mt-2">Eating the World</span>
    </h1>
    <p className="mt-6 text-zinc-200 max-w-xl mx-auto text-lg">
      인스파이어 캐피탈은 크리에이터를 차세대 창업가로 바라보고 투자합니다.
    </p>
  </div>
</section>


      {/* Features (특징 3가지) */}
      <section id="features" className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-4 sm:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-zinc-800/80 bg-zinc-950/70 p-6 hover:border-[#00FFD1]/60 transition shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_24px_0_rgba(0,255,209,.15)]"
            >
              <p className="text-base font-semibold text-white">{f.title}</p>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Backed by — Auto-scrolling Logos (크게/강조) */}
      <section id="backed" className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-px w-10 bg-[#00FFD1]/70" />
          <h2
            className="text-2xl sm:text-3xl font-bold tracking-tight"
            style={{ textShadow: "0 0 14px rgba(0,255,209,.35)" }}
          >
            BACKED BY
          </h2>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-900/40 py-8">
          {/* 좌우 페이드 마스크 */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent" />

          {/* 무한 스크롤 트랙 */}
          <div
            className="flex gap-12 whitespace-nowrap will-change-transform"
            style={{ animation: "logo-scroll 38s linear infinite" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLDivElement).style.animationPlayState =
                "paused")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLDivElement).style.animationPlayState =
                "running")
            }
          >
            {[...PARTNERS, ...PARTNERS].map((p, i) => (
              <a
                key={`${p.name}-${i}`}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-16 items-center justify-center opacity-80 hover:opacity-100 transition"
                title={p.name}
              >
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={180}
                  height={56}
                  className="object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why Creator Economy? */}
      <section id="why" className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl border border-[#00FFD1]/30 bg-gradient-to-br from-black to-zinc-900/60 p-8 sm:p-10">
          <h3 className="text-2xl sm:text-3xl font-bold">
            Why <span className="text-[#00FFD1]" style={{ textShadow: "0 0 18px rgba(0,255,209,.5)" }}>Creator Economy?</span>
          </h3>
          <p className="mt-3 text-zinc-300 max-w-3xl">
            기술의 세대 교체는 배포 방식과 네트워크 구조를 바꿉니다. 크리에이터는 이제 미디어이자 유통이자 제품 자체가 됩니다.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5">
              <p className="text-sm font-semibold text-white">1세대: OS</p>
              <p className="mt-2 text-sm text-zinc-400">컴퓨팅 기반(Windows, iOS, Android) 위에서 유틸리티가 탄생.</p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5">
              <p className="text-sm font-semibold text-white">2세대: Social Media</p>
              <p className="mt-2 text-sm text-zinc-400">네트워크 효과로 배포/도달이 표준화, 크리에이터 집단이 등장.</p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5">
              <p className="text-sm font-semibold text-white">3세대: Creator Economy</p>
              <p className="mt-2 text-sm text-zinc-400">IP가 자산이 되는 시대. 콘텐츠→브랜드→커머스→소프트웨어로 확장.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl border border-zinc-800 p-8 bg-zinc-900/40">
          <h2 className="text-2xl font-semibold">Team</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {TEAM.map((m) => (
              <div key={m.name} className="rounded-2xl border border-zinc-800 p-5 bg-black/40">
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-zinc-800">
                    <Image alt={m.name} src={m.avatar} width={56} height={56} className="object-cover rounded-2xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{m.name}</p>
                    <p className="text-xs text-zinc-400">{m.role}</p>
                  </div>
                </div>
                {!!m.links?.length && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {m.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs rounded-full border border-zinc-700 px-2.5 py-1 text-zinc-300 hover:border-[#00FFD1] hover:text-[#00FFD1]"
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 mx-auto max-w-6xl px-6 pb-28">
        <div className="rounded-3xl border border-zinc-800 p-8 bg-zinc-900/40">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-2 text-zinc-300">LP / 코파운더 / 포트폴리오 문의</p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="mailto:invest@inspire.capital"
              className="rounded-2xl border border-[#00FFD1]/60 bg-[#00FFD1]/10 px-5 py-3 text-[#00FFD1] hover:bg-[#00FFD1]/30"
            >
              invest@inspire.capital
            </a>
            <a
              href="mailto:jobs@inspire.capital"
              className="rounded-2xl border border-zinc-700 bg-zinc-900/60 px-5 py-3 text-zinc-200 hover:border-[#7FFF00] hover:text-[#7FFF00]"
            >
              jobs@inspire.capital
            </a>
          </div>

          <div className="mt-8">
            <p className="text-zinc-300">Office Location</p>
            <div className="mt-1 text-sm">
              <p className="text-white">헤일스튜디오 (Halestudio)</p>
              <p className="text-zinc-400">서울 영등포구 5가 33-6, 12층</p>
              <a
                href="https://maps.app.goo.gl/h6D1HffA5DDMU2QH7"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-2 text-[#00FFD1] hover:underline underline-offset-4"
              >
                Open in Google Maps →
              </a>
            </div>

            <div className="mt-4 w-full h-64 overflow-hidden rounded-xl border border-zinc-700">
              <iframe
                title="Inspire Capital Office Map"
                src="https://www.google.com/maps?q=37.5348738,126.898845&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 mx-auto max-w-6xl px-6 pb-10 flex flex-col sm:flex-row gap-2 sm:gap-0 items-start sm:items-center justify-between text-xs text-zinc-500">
        <span>© {new Date().getFullYear()} Inspire Capital. All rights reserved.</span>
        <span className="text-[#00FFD1]">Made with Next.js</span>
      </footer>

      {/* 🔧 Keyframes (컴포넌트에 포함) */}
      <style jsx global>{`
        @keyframes logo-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </main>
  );
}
