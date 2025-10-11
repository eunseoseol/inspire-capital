// app/page.tsx (Client Component)
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

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
  {
    name: "Sungwoo Joe",
    role: "Founder, GetGet / The Captain",
    avatar: "/sungpaek.png",
    links: [{ label: "Instagram", href: "https://www.instagram.com/sungpaek" }],
  },
];

const PARTNERS = [
  { name: "EO Studio", logo: "eo.png", url: "https://eostudio.io" },
  { name: "Primer", logo: "primer.png", url: "https://primer.kr" },
  { name: "Marpple Corp", logo: "marpple.png", url: "https://www.marpplecorp.com" },
  { name: "ZVZO", logo: "zvzo.png", url: "https://doerscorp.notion.site/ZVZO-6b2b76ec3f0f42fb8e74bf4ccec401e1" },
  { name: "Workmore", logo: "workmore.png", url: "https://www.workmore.org" },
  { name: "Cordia Studio", logo: "cordia.png", url: "https://cordia.studio" },
  { name: "Next Gen", logo: "nextgen.png", url: "https://nextgen-academy-three.vercel.app" },
  { name: "Team Cookie", logo: "teamcookie.png", url: "https://teamcookie.kr" },
  { name: "BZCF", logo: "bzcf.png", url: "https://bzcf.org" },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* 🎥 Hero Section — Manhattan Video */}
      <section className="relative h-[100vh] flex items-center justify-center text-center overflow-hidden z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="https://drive.google.com/uc?export=download&id=1OYSxPKzgsPloxXon57187ttVbtAN5VrO"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        <div className="relative z-10 px-6">
          <h1 className="text-5xl sm:text-7xl font-extrabold leading-[1.05] text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.5)]">
            Creator is <br />
            <span className="block mt-2">Eating the World</span>
          </h1>
          <p className="mt-6 text-zinc-200 max-w-xl mx-auto text-lg">
            인스파이어 캐피탈은 크리에이터를 차세대 창업가로 바라보고 투자합니다.
          </p>
        </div>
      </section>

      {/* 🌍 Why Creator Economy */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-4xl font-bold mb-6 text-center">Why Creator Economy?</h2>
        <div className="text-center text-lg text-zinc-300 leading-relaxed max-w-3xl mx-auto">
          <p>1세대: Operating System — Windows</p>
          <p>2세대: Social Media — Facebook</p>
          <p>3세대: Creator Economy — You</p>
          <p className="mt-6 text-zinc-400">
            기술의 패러다임은 점점 개인의 창조력으로 이동하고 있습니다. 인스파이어 캐피탈은 그 변화의 최전선에서 크리에이터 기반 IP 비즈니스에 투자합니다.
          </p>
        </div>
      </section>

      {/* ⚡ Inspire Capital 특징 */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-12">Inspire Capital의 특징</h2>
        <div className="grid gap-6 sm:grid-cols-3 text-center">
          <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:border-[#00FFD1]/60 transition">
            <h3 className="text-xl font-semibold text-white">지구상에서 가장 젊은 벤처 캐피탈</h3>
            <p className="mt-3 text-zinc-400 text-sm">
              차세대 창업가 세대를 위해 만들어진, 세상에서 가장 빠르게 움직이는 투자 집단.
            </p>
          </div>
          <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:border-[#7FFF00]/60 transition">
            <h3 className="text-xl font-semibold text-white">오직 IP 비즈니스에만 투자</h3>
            <p className="mt-3 text-zinc-400 text-sm">
              브랜드, 캐릭터, 콘텐츠 등 창의성을 기반으로 한 지적 자산(IP)에 집중 투자.
            </p>
          </div>
          <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:border-[#00FFD1]/60 transition">
            <h3 className="text-xl font-semibold text-white">글로벌 진출의 발판</h3>
            <p className="mt-3 text-zinc-400 text-sm">
              샌프란시스코, 뉴욕, 서울을 잇는 글로벌 크리에이터 네트워크를 구축.
            </p>
          </div>
        </div>
      </section>

      {/* 🚀 Backed By (grid + fallback) */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <div className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">Backed by</h2>
          <p className="text-zinc-400 text-sm">Builders. Dreamers. Doers.</p>
          <p className="mt-2 text-xs text-zinc-500">
            Loaded partners: <span className="font-mono">{PARTNERS.length}</span>
          </p>
        </div>

        <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/60 px-4 py-6 overflow-x-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
            {PARTNERS.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="w-[180px] h-[72px] flex items-center justify-center rounded-xl bg-black/30 border border-zinc-800 hover:border-[#00FFD1]/60 transition"
                title={p.name}
              >
                <img
                  src={`/${p.logo}`}
                  alt={p.name}
                  className="max-h-14 max-w-[160px] object-contain"
                  onError={(e) => {
                    const el = e.currentTarget;
                    el.style.display = "none";
                    const parent = el.parentElement;
                    if (parent && !parent.querySelector(".logo-fallback")) {
                      const div = document.createElement("div");
                      div.className = "logo-fallback text-[10px] leading-tight text-red-400 p-2 text-center";
                      div.textContent = `Missing: /public/${p.logo}`;
                      parent.appendChild(div);
                    }
                  }}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 👥 Team */}
      <section id="team" className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <h2 className="text-3xl font-bold mb-10 text-center">Team</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {TEAM.map((m) => (
            <div
              key={m.name}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 hover:border-[#00FFD1]/60 transition"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-zinc-700">
                  <Image alt={m.name} src={m.avatar} width={64} height={64} className="object-cover rounded-2xl" />
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
      </section>

      {/* 📍 Contact */}
      <section id="contact" className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact</h2>
        <p className="text-center text-zinc-400 mb-6">LP / 코파운더 / 포트폴리오 문의</p>
        <div className="flex justify-center gap-4 mb-8">
          <a href="mailto:invest@inspire.capital" className="rounded-2xl border border-[#00FFD1]/60 px-6 py-3 text-[#00FFD1] hover:bg-[#00FFD1]/20 transition">
            invest@inspire.capital
          </a>
          <a href="mailto:jobs@inspire.capital" className="rounded-2xl border border-zinc-700 px-6 py-3 text-zinc-200 hover:border-[#7FFF00] hover:text-[#7FFF00] transition">
            jobs@inspire.capital
          </a>
        </div>
        <div className="text-center text-sm text-zinc-400">
          <p>헤일스튜디오 (Halestudio)</p>
          <p>서울 영등포구 5가 33-6, 12층</p>
          <a href="https://maps.app.goo.gl/h6D1HffA5DDMU2QH7" target="_blank" rel="noreferrer" className="inline-block mt-2 text-[#00FFD1] hover:underline underline-offset-4">
            Open in Google Maps →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-xs text-zinc-500">
        © {new Date().getFullYear()} Inspire Capital. All rights reserved.
      </footer>

      <style jsx global>{`
        @keyframes logo-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </main>
  );
}
