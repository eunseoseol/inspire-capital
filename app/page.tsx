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

// Backend Partners with links
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

      {/* 🔧 Keyframes */}
      <style jsx global>{`
        @keyframes logo-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </main>
  );
}
