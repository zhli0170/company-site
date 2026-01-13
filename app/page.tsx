'use client';

import React, { useMemo, useRef, useState } from 'react';
import { members } from './members-data'; // 放在 app/ 同级，路径按你存放的位置修改

/**
 * Next.js app/page.tsx
 * - “空白版”结构，参考 mjzlab.bio.sustech.edu.cn 的版块布局
 * - 无外部库（不依赖 jQuery/Swiper），使用简单的 CSS Scroll Snap 轮播
 * - 保留导航/横幅/Research/ Publications/ Members/ News/ Footer 结构
 * - 内容全部留空或占位，后续可直接替换
 * - 需要 Tailwind（建议已在项目里启用）。若未启用，也可正常渲染但不美观
 */

export default function Page() {
  // 简单的移动端菜单开合
  const [menuOpen, setMenuOpen] = useState(false);

  // 简单轮播（横幅）
  const heroRef = useRef<HTMLDivElement | null>(null);
  const heroSlides = useMemo(
    () => [{ alt: 'BANNER 1' }, { alt: 'BANNER 2' }, { alt: 'BANNER 3' }],
    []
  );

  // 简单轮播（News）
  const newsRef = useRef<HTMLDivElement | null>(null);
  const newsSlides = useMemo(
    () => [
      { date: 'YYYY-MM-DD', title: '[News headline placeholder]' },
      { date: 'YYYY-MM-DD', title: '[News headline placeholder]' },
      { date: 'YYYY-MM-DD', title: '[News headline placeholder]' },
    ],
    []
  );

  // 生成 SVG 占位图（data URI）
  const ph = (w: number, h: number, label: string) =>
    `data:image/svg+xml;utf8,${encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}'>
        <rect width='100%' height='100%' fill='#EEE'/>
        <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#999' font-size='${Math.max(
        Math.floor(Math.min(w, h) / 10),
        12
      )}'>${label}</text>
      </svg>`
    )}`;

  const scrollByWidth = (
    ref: React.RefObject<HTMLDivElement | null>,
    direction: 1 | -1
  ) => {
    const el = ref.current;
    if (!el) return;
    const dx = el.clientWidth * direction;
    el.scrollBy({ left: dx, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* 顶部 Header */}
      <header className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3">
              <img src={ph(220, 60, '[LOGO]')} alt="LOGO" className="h-8 w-auto" />
              <span className="sr-only">Home</span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="/index.html?lang=en-us" className="hover:opacity-80">
                HOME
              </a>

              <div className="group relative">
                <a
                  href="/research/index/cid/133.html?lang=en-us&nvid=8"
                  className="hover:opacity-80"
                >
                  RESEARCH
                </a>
                {/* 下拉（占位，无内容） */}
                <div className="absolute left-0 top-full hidden min-w-[220px] rounded-xl border border-neutral-200 bg-white p-2 shadow-md group-hover:block">
                  <a
                    className="block rounded-lg px-3 py-2 text-sm hover:bg-neutral-50"
                    href="/research/index/cid/166.html?lang=en-us&nvid=23"
                  >
                    [Subcat A]
                  </a>
                  <a
                    className="block rounded-lg px-3 py-2 text-sm hover:bg-neutral-50"
                    href="/research/index/cid/133.html?lang=en-us&nvid=8"
                  >
                    [Subcat B]
                  </a>
                  <a
                    className="block rounded-lg px-3 py-2 text-sm hover:bg-neutral-50"
                    href="/research/index/cid/134.html?lang=en-us&nvid=9"
                  >
                    [Subcat C]
                  </a>
                </div>
              </div>

              <div className="group relative">
                <a href="/publication.html?lang=en-us" className="hover:opacity-80">
                  PUBLICATIONS
                </a>
                <div className="absolute left-0 top-full hidden min-w-[220px] rounded-xl border border-neutral-200 bg-white p-2 shadow-md group-hover:block">
                  <a
                    className="block rounded-lg px-3 py-2 text-sm hover:bg-neutral-50"
                    href="/publication/index/cid/136.html?lang=en-us&nvid=11"
                  >
                    [Selected]
                  </a>
                  <a
                    className="block rounded-lg px-3 py-2 text-sm hover:bg-neutral-50"
                    href="/publication/lists/cid/137.html?lang=en-us&nvid=12"
                  >
                    [All]
                  </a>
                </div>
              </div>

              <div className="group relative">
                <a href="/faculty.html?lang=en-us" className="hover:opacity-80">
                  MEMBERS
                </a>
                <div className="absolute left-0 top-full hidden min-w-[220px] rounded-xl border border-neutral-200 bg-white p-2 shadow-md group-hover:block">
                  <a
                    className="block rounded-lg px-3 py-2 text-sm hover:bg-neutral-50"
                    href="/faculty/index/cid/139.html?lang=en-us&nvid=13"
                  >
                    [PI]
                  </a>
                  <a
                    className="block rounded-lg px-3 py-2 text-sm hover:bg-neutral-50"
                    href="/faculty/index/cid/143.html?lang=en-us&nvid=22"
                  >
                    [Current]
                  </a>
                  <a
                    className="block rounded-lg px-3 py-2 text-sm hover:bg-neutral-50"
                    href="/faculty/index/cid/140.html?lang=en-us&nvid=14"
                  >
                    [Alumni]
                  </a>
                </div>
              </div>

              <a href="/news.html?lang=en-us" className="hover:opacity-80">
                NEWS
              </a>
              <a href="/contact.html?lang=en-us" className="hover:opacity-80">
                CONTACT
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden inline-flex items-center rounded-lg border px-3 py-1.5 text-sm"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? 'CLOSE' : 'MENU'}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {menuOpen && (
          <div className="md:hidden border-t border-neutral-200">
            <div className="mx-auto max-w-6xl px-4 py-3 space-y-2 text-sm">
              <a className="block rounded-lg px-3 py-2 hover:bg-neutral-50" href="/index.html?lang=en-us">
                HOME
              </a>
              <a
                className="block rounded-lg px-3 py-2 hover:bg-neutral-50"
                href="/research/index/cid/133.html?lang=en-us&nvid=8"
              >
                RESEARCH
              </a>
              <a className="block rounded-lg px-3 py-2 hover:bg-neutral-50" href="/publication.html?lang=en-us">
                PUBLICATIONS
              </a>
              <a className="block rounded-lg px-3 py-2 hover:bg-neutral-50" href="/faculty.html?lang=en-us">
                MEMBERS
              </a>
              <a className="block rounded-lg px-3 py-2 hover:bg-neutral-50" href="/news.html?lang=en-us">
                NEWS
              </a>
              <a className="block rounded-lg px-3 py-2 hover:bg-neutral-50" href="/contact.html?lang=en-us">
                CONTACT
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 横幅轮播 */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-6">
          <div className="relative">
            <div
              ref={heroRef}
              className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth rounded-2xl border border-neutral-200"
            >
              {heroSlides.map((s, i) => (
                <div key={i} className="min-w-full snap-start">
                  <img
                    src={ph(1600, 600, '[BANNER IMAGE]')}
                    alt={s.alt}
                    className="w-full h-[260px] md:h-[380px] object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="pointer-events-none absolute inset-0 flex items-center justify-between">
              <div className="pointer-events-auto p-2">
                <button
                  onClick={() => scrollByWidth(heroRef, -1)}
                  className="rounded-full border bg-white/80 px-3 py-2 text-xs shadow"
                >
                  Prev
                </button>
              </div>
              <div className="pointer-events-auto p-2">
                <button
                  onClick={() => scrollByWidth(heroRef, 1)}
                  className="rounded-full border bg-white/80 px-3 py-2 text-xs shadow"
                >
                  Next
                </button>
              </div>
            </div>

            <div className="mt-2 text-right text-xs text-neutral-500">01/03</div>
          </div>
        </div>
      </section>

      <main>
        {/* About / Research Highlight */}
        <section className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="text-2xl font-semibold">Research Highlight</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-neutral-600">[Brief highlight / Empty placeholder text]</p>
              <div className="mt-4">
                <a href="##" className="inline-flex items-center rounded-xl border px-3 py-1.5 text-sm">
                  READ MORE
                </a>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <figure key={i} className="rounded-xl border p-3">
                  <img
                    src={ph(560, 360, '[IMAGE]')}
                    alt={`Self slide ${i}`}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <figcaption className="mt-2 text-sm text-neutral-500">[Caption]</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Research */}
        <section className="bg-neutral-50 border-y border-neutral-200">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <h2 className="text-2xl font-semibold">Research</h2>
            <div className="mt-6 grid md:grid-cols-3 gap-4">
              {['[Topic A]', '[Topic B]', '[Topic C]'].map((t, i) => (
                <article key={i} className="rounded-2xl border bg-white p-5">
                  <img
                    src={ph(360, 220, '[IMAGE]')}
                    alt={`Research ${i + 1}`}
                    className="w-full h-40 object-cover rounded-xl"
                  />
                  <h3 className="mt-3 font-medium">{t}</h3>
                  <p className="mt-1 text-sm text-neutral-600">[Short description]</p>
                  <div className="mt-3">
                    <a href="##" className="text-sm underline underline-offset-4">
                      READ MORE
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Publications */}
        <section className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Selected PUBLICATIONS */}
            <div>
              <h2 className="text-2xl font-semibold">Selected PUBLICATIONS</h2>
              <ul className="mt-6 space-y-4">
                {[1, 2].map((i) => (
                  <li key={i} className="flex gap-4 rounded-2xl border p-4">
                    <img
                      src={ph(160, 120, '[IMG]')}
                      alt="thumb"
                      className="h-20 w-28 object-cover rounded-lg"
                    />
                    <div className="min-w-0">
                      <h4 className="text-sm font-medium">
                        <a href="##">[Paper title]</a>
                      </h4>
                      <p className="mt-1 text-sm text-neutral-600">[Authors]. [Journal]. [Year].</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <a href="##" className="inline-flex items-center rounded-xl border px-3 py-1.5 text-sm">
                  READ MORE
                </a>
              </div>
            </div>

            {/* ALL PUBLICATIONS */}
            <div>
              <h2 className="text-2xl font-semibold">ALL PUBLICATIONS</h2>
              <div className="mt-4 flex flex-wrap gap-2 text-sm">
                {[
                  '2025',
                  '2024',
                  '2023',
                  '2022',
                  '2021',
                  '2020',
                  '2019',
                  '2018',
                  '2017',
                  '2016',
                  '2015',
                  '2014',
                  '2013',
                  '2012',
                  '2011',
                  'Before 2010',
                ].map((y) => (
                  <span key={y} className="rounded-lg border px-3 py-1">
                    {y}
                  </span>
                ))}
              </div>

              <div className="mt-6 space-y-4">
                {[1, 2].map((i) => (
                  <div key={i} className="rounded-2xl border p-4">
                    <h4 className="text-sm font-medium">
                      <a href="##">[Paper title - placeholder]</a>
                    </h4>
                    <p className="mt-1 text-sm text-neutral-600">
                      [Authors]. [Journal], [Volume(Issue)], pages, [Year].
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <a href="##" className="inline-flex items-center rounded-xl border px-3 py-1.5 text-sm">
                  READ MORE
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Members（来自 members-data.ts，一人一张卡，完整简介） */}
        <section className="bg-neutral-50 border-y border-neutral-200" id="members">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <h2 className="text-2xl font-semibold">MEMBERS</h2>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {members.map((m) => (
                <article key={m.slug} className="rounded-2xl border bg-white p-5">
                  <div className="flex items-start gap-4">
                    <img
                      src={m.avatar || ph(160, 160, '[IMG]')}
                      alt={m.name}
                      className="h-20 w-20 rounded-xl object-cover"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = ph(160, 160, '[IMG]');
                      }}
                    />
                    <div className="min-w-0">
                      <h3 className="font-semibold">{m.name}</h3>
                      {m.title && <p className="text-sm text-neutral-600">{m.title}</p>}
                      {m.email && m.email.length > 0 && (
                        <div className="mt-1 text-xs text-neutral-500 space-x-2">
                          {m.email.map((em) => (
                            <a
                              key={em}
                              href={`mailto:${em}`}
                              className="underline underline-offset-2"
                            >
                              {em}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* 完整简介：保留换行，无省略号 */}
                  <div className="mt-4 whitespace-pre-line text-sm text-neutral-700">{m.bio}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* News（横向滚动） */}
        <section className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="text-2xl font-semibold">NEWS</h2>

          <div className="mt-6 relative">
            <div
              ref={newsRef}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth"
            >
              {newsSlides.map((n, i) => (
                <a
                  key={i}
                  href="##"
                  className="min-w-[280px] snap-start rounded-2xl border p-4 hover:bg-neutral-50"
                >
                  <div className="text-xs text-neutral-500">{n.date}</div>
                  <p className="mt-2 text-sm">{n.title}</p>
                  <div className="mt-3">
                    <span className="inline-flex items-center rounded-xl border px-2 py-1 text-xs">
                      READ MORE
                    </span>
                  </div>
                  <div className="mt-3">
                    <img
                      src={ph(320, 200, '[IMG]')}
                      alt="news"
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                </a>
              ))}
            </div>

            <div className="pointer-events-none absolute inset-0 flex items-center justify-between">
              <div className="pointer-events-auto p-2">
                <button
                  onClick={() => scrollByWidth(newsRef, -1)}
                  className="rounded-full border bg-white/80 px-3 py-2 text-xs shadow"
                >
                  Prev
                </button>
              </div>
              <div className="pointer-events-auto p-2">
                <button
                  onClick={() => scrollByWidth(newsRef, 1)}
                  className="rounded-full border bg-white/80 px-3 py-2 text-xs shadow"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid md:grid-cols-[220px,1fr] gap-8">
            <a href="/" className="block">
              <img src={ph(220, 60, '[LOGO]')} alt="FOOTER LOGO" className="h-10 w-auto" />
            </a>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="text-sm font-semibold">Get in Touch</div>
                <p className="mt-2 text-sm text-neutral-600">[Address / empty placeholder]</p>
                <div className="mt-3">
                  <a href="mailto:" className="inline-flex items-center rounded-xl border px-3 py-1.5 text-sm">
                    Email address
                  </a>
                </div>
              </div>

              <div>
                <div className="text-sm font-semibold">Links</div>
                <ul className="mt-2 space-y-2 text-sm">
                  <li>
                    <a href="##" target="_blank" className="hover:underline">
                      [Link A]
                    </a>
                  </li>
                  <li>
                    <a href="##" target="_blank" className="hover:underline">
                      [Link B]
                    </a>
                  </li>
                  <li>
                    <a href="##" target="_blank" className="hover:underline">
                      [Link C]
                    </a>
                  </li>
                  <li>
                    <a href="##" target="_blank" className="hover:underline">
                      [Link D]
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 text-xs text-neutral-500">[Copyright / placeholder]</div>
        </div>
      </footer>
    </div>
  );
}
