// app/page.tsx (Client Component)
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const NAV = [
  { label: "Thesis", href: "#thesis" },
  { label: "Focus", href: "#focus" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const FOCUS = [
  { title: "AI x Creator", desc: "도구, 미디어, 커머스가 결합된 차세대 제품." },
  { title: "Infra & DevTools", desc: "작은 팀이 큰일을 하도록 만드는 기반 소프트웨어." },
  { title: "Smart Living", desc: "모듈러 하우징, 로보틱스, 생활 OS." },
];

const PORTFOLIO = [
  {
    name: "Next Gen",
    tag: "Venture Studio",
    logo: "/logos/nextgen.png",
    url: "https://nextgen-academy-three.vercel.app",
  },
];

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

// Backend Partners with links (슬라이더)
const PARTNERS = [
  { name: "EO Studio", logo: "/logos/eo.png", url: "https://eostudio.io" },
  { name: "Primer", logo: "/logos/primer.png", url: "https://primer.kr" },
  { name: "Marpple Corp", logo: "/logos/marpple.png", url: "https://www.marpplecorp.com" },
  { name: "ZVZO", logo: "/logos/zvzo.png", url: "https://doerscorp.notion.site/ZVZO-6b2b76ec3f0f42fb8e74bf4ccec401e1" },
  { name: "Workmore", logo: "/logos/workmore.png", url: "https://www.workmore.org" },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Neon backdrop accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-40"
          style={{
            background:
              "radial-gradient(40% 40% at 50% 50%, #00FFD1 0%, rgba(0,255,209,0) 70%)",
          }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 -right-24 h-80 w-80 rounded-full blur-3xl opacity-30"
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
        className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,rgba(0,255,209,.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,209,.35)_1px,transparent_1px)] [background-size:40px_40px]"
      />

      {/* Nav */}
      <header className="relative z-10 mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2 group" aria-label="Inspire Capital home">
          <span
            className="font-semibold tracking-wide text-white group-hover:text-[#00FFD1] transition"
            style={{ letterSpacing: "0.06em" }}
          >
            INSPIRE CAPITAL
          </span>
          <span className="h-2 w-2 rounded-full bg-[#00FFD1] shadow-[0_0_16px_rgba(0,255,209,1)]" />
        </Link>

        <nav className="hidden sm:flex items-center gap-6 text-sm text-zinc-300">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-white">
              {n.label}
            </Link>
          ))}
        </nav>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pt-16 pb-12 sm:pt-24 sm:pb-20">
        <h1 className="text-5xl sm:text-7xl font-extrabold leading-[1.05]">
          <span className="block text-white">Creator is</span>
          <span
            className="mt-2 block"
            style={{
              color: "#00FFD1",
              textShadow:
                "0 0 20px rgba(0,255,209,1), 0 0 40px rgba(0,255,209,.9)",
            }}
          >
            Eating the World
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-300">
          인스파이어 캐피탈은 크리에이터를 차세대 창업가로 바라보고 투자합니다.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="mailto:invest@inspire.capital?subject=Pitch%20Deck"
            className="group inline-flex items-center gap-2 rounded-2xl border border-[#00FFD1]/60 bg-[#00FFD1]/10 px-5 py-3 text-[#00FFD1] hover:text-black hover:bg-[#00FFD1]/80 hover:border-[#00FFD1] transition"
            style={{
              boxShadow:
                "0 0 30px rgba(0,255,209,.8), inset 0 0 16px rgba(0,255,209,.35)",
            }}
          >
            <span className="font-medium">Send Deck</span>
            <svg
              className="h-4 w-4 translate-x-0 transition group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>

          <Link
            href="#thesis"
            className="inline-flex items-center gap-2 rounded-2xl border border-zinc-700 bg-zinc-900/60 px-5 py-3 text-zinc-200 hover:border-[#7FFF00] hover:text-[#7FFF00] transition"
          >
            Read Thesis
          </Link>
        </div>
      </section>

      {/* Backend Partners — Auto-scrolling Logos */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-6 flex items-center gap-2">
          <div className="h-px w-8 bg-[#00FFD1]/60" />
          <p className="text-sm text-zinc-400">Backed by builders</p>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/40 py-6">
          {/* 좌우 페이드 마스크 */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent" />

          {/* 무한 스크롤 트랙 */}
          <div
            className="flex gap-10 whitespace-nowrap will-change-transform"
            style={{ animation: "logo-scroll 40s linear infinite" }}
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
                className="inline-flex h-12 items-center justify-center opacity-70 hover:opacity-100 transition"
                title={p.name}
              >
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={140}
                  height={40}
                  className="object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Thesis */}
      <section id="thesis" className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-[#00FFD1]/60 bg-gradient-to-b from-zinc-900/60 to-zinc-900/20 p-6 backdrop-blur">
            <h2 className="text-xl tracking-wide text-[#00FFD1]">Investment Thesis</h2>
            <p className="mt-3 text-3xl font-bold">Distribution × Product × Culture</p>
            <p className="mt-4 text-zinc-300 leading-relaxed">
              배포(Distribution)가 선행될 때 제품(Product)과 문화(Culture)가 빠르게 증명됩니다.
              우리는 창업가와 크리에이터가 이 세 축을 함께 다루는 순간에 베팅합니다.
            </p>
            <div className="mt-6 flex gap-3">
              <Link
                href="#focus"
                className="rounded-xl border border-[#00FFD1]/60 px-4 py-2 text-sm text-[#00FFD1] hover:bg-[#00FFD1]/10"
              >
                Our Focus
              </Link>
              <Link
                href="#portfolio"
                className="rounded-xl border border-zinc-700 px-4 py-2 text-sm text-zinc-200 hover:border-[#7FFF00]"
              >
                Portfolio
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-800 p-6 bg-zinc-900/30">
            <h3 className="text-lg text-zinc-300">How we work</h3>
            <ul className="mt-3 space-y-3 text-zinc-300">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#00FFD1]" />
                0→1 실험 주기 단축, 데이 1 고객과의 공진화
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#7FFF00]" />
                미디어·커뮤니티를 성장 엔진으로 활용
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-white/80" />
                간결함과 속도에 집착하는 제품 미학
              </li>
            </ul>
            <div className="mt-6 rounded-xl border border-[#00FFD1]/40 p-4 text-sm text-zinc-400">
              Stack: Next.js + Tailwind · 데이터 기반 개선 · 빠른 배포.
            </div>
          </div>
        </div>
      </section>

      {/* Focus */}
      <section id="focus" className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl border border-[#00FFD1]/40 p-10 bg-gradient-to-br from-black to-zinc-900/60">
          <h2 className="text-3xl sm:text-4xl font-bold">Focus</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {FOCUS.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-5 hover:border-[#00FFD1]/60 transition"
              >
                <p className="text-lg font-semibold text-white">{f.title}</p>
                <p className="mt-2 text-zinc-400 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <div className="flex items-center justify-between gap-4 mb-6">
          <h2 className="text-2xl font-semibold">Portfolio</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {PORTFOLIO.map((c) => (
            <a
              key={c.name}
              href={c.url}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 hover:border-[#00FFD1]/60 transition"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-black/60 border border-zinc-800 grid place-items-center overflow-hidden">
                  <Image alt={`${c.name} logo`} src={c.logo} width={24} height={24} />
                </div>
                <div>
                  <p className="font-medium text-white">{c.name}</p>
                  <p className="text-xs text-zinc-400">{c.tag}</p>
                </div>
              </div>
            </a>
          ))}
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
      <section id="contact" className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
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
