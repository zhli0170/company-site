'use client';

import React, { useMemo, useRef, useState, useEffect } from 'react';
import { members, type Member } from './members-data';

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  const heroRef = useRef<HTMLDivElement | null>(null);
  const newsRef = useRef<HTMLDivElement | null>(null);

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

  const scrollByWidth = (ref: React.RefObject<HTMLDivElement | null>, dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: el.clientWidth * dir, behavior: 'smooth' });
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const hash = window.location.hash;
    if (hash && hash.startsWith('#member-')) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-blue-50 text-gray-900">
      {/* Header */}
      <header className="border-b border-blue-200 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex h-16 items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <img
                src={ph(220, 60, '[LOGO]')}
                alt="LOGO"
                className="h-8 w-auto"
              />
              <span className="sr-only">Home</span>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#home" className="text-gray-600 hover:text-blue-600 font-medium">HOME</a>
              <a href="#research" className="text-gray-600 hover:text-blue-600 font-medium">RESEARCH</a>
              <a href="#publications" className="text-gray-600 hover:text-blue-600 font-medium">PUBLICATIONS</a>
              <a href="#members" className="text-gray-600 hover:text-blue-600 font-medium">MEMBERS</a>
              <a href="#news" className="text-gray-600 hover:text-blue-600 font-medium">NEWS</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 font-medium">CONTACT</a>
            </nav>

            <button
              className="md:hidden inline-flex items-center rounded-lg border border-blue-300 px-3 py-1.5 text-sm hover:bg-blue-50"
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? 'CLOSE' : 'MENU'}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-blue-200">
            <div className="mx-auto max-w-6xl px-4 py-3 space-y-2 text-sm">
              <a className="block rounded-lg px-3 py-2 hover:bg-blue-100 text-gray-700" href="#home">HOME</a>
              <a className="block rounded-lg px-3 py-2 hover:bg-blue-100 text-gray-700" href="#research">RESEARCH</a>
              <a className="block rounded-lg px-3 py-2 hover:bg-blue-100 text-gray-700" href="#publications">PUBLICATIONS</a>
              <a className="block rounded-lg px-3 py-2 hover:bg-blue-100 text-gray-700" href="#members">MEMBERS</a>
              <a className="block rounded-lg px-3 py-2 hover:bg-blue-100 text-gray-700" href="#news">NEWS</a>
              <a className="block rounded-lg px-3 py-2 hover:bg-blue-100 text-gray-700" href="#contact">CONTACT</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="border-b border-blue-200">
        <div className="mx-auto max-w-6xl px-4 py-6">
          <div className="relative">
            <div
              ref={heroRef}
              className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth rounded-2xl border border-blue-200"
            >
              {[1, 2, 3].map(i => (
                <div key={i} className="min-w-full snap-start">
                  <img
                    src={ph(1600, 600, '[BANNER]')}
                    alt={`Banner ${i}`}
                    className="w-full h-[260px] md:h-[380px] object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 flex items-center justify-between">
              <div className="pointer-events-auto p-2">
                <button
                  onClick={() => scrollByWidth(heroRef, -1)}
                  className="rounded-full border border-blue-300 bg-blue-500 text-white px-3 py-2 text-xs shadow hover:bg-blue-600"
                >
                  Prev
                </button>
              </div>
              <div className="pointer-events-auto p-2">
                <button
                  onClick={() => scrollByWidth(heroRef, 1)}
                  className="rounded-full border border-blue-300 bg-blue-500 text-white px-3 py-2 text-xs shadow hover:bg-blue-600"
                >
                  Next
                </button>
              </div>
            </div>
            <div className="mt-2 text-right text-xs text-blue-500">01/03</div>
          </div>
        </div>
      </section>

      {/* Research */}
      <section id="research" className="bg-blue-50 border-y border-blue-200">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="text-2xl font-semibold text-gray-800">Research</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {['[Topic A]', '[Topic B]', '[Topic C]'].map((t, i) => (
              <article key={i} className="rounded-2xl border border-blue-200 bg-white p-5 hover:border-blue-400 hover:shadow-md transition">
                <img
                  src={ph(360, 220, '[IMAGE]')}
                  alt={`Research ${i + 1}`}
                  className="w-full h-40 object-cover rounded-xl"
                />
                <h3 className="mt-3 font-medium text-gray-700">{t}</h3>
                <p className="mt-1 text-sm text-gray-600">[Short description]</p>
                <div className="mt-3">
                  <a href="#research" className="text-sm text-blue-600 hover:text-blue-700 underline underline-offset-4">READ MORE</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Selected PUBLICATIONS</h2>
            <ul className="mt-6 space-y-4">
              {[1, 2].map(i => (
                <li key={i} className="flex gap-4 rounded-2xl border border-blue-200 p-4 hover:border-blue-400 hover:shadow-md transition">
                  <img
                    src={ph(160, 120, '[IMG]')}
                    alt="thumb"
                    className="h-20 w-28 object-cover rounded-lg"
                  />
                  <div className="min-w-0">
                    <h4 className="text-sm font-medium">
                      <a href="#publications" className="text-blue-600 hover:text-blue-700">[Paper title]</a>
                    </h4>
                    <p className="mt-1 text-sm text-gray-600">[Authors]. [Journal]. [Year].</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <a href="#publications" className="inline-flex items-center rounded-xl border border-blue-300 bg-blue-500 text-white px-3 py-1.5 text-sm hover:bg-blue-600 transition">
                READ MORE
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">ALL PUBLICATIONS</h2>
            <div className="mt-4 flex flex-wrap gap-2 text-sm">
              {['2025', '2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', 'Before 2010']
                .map(y => (<span key={y} className="rounded-lg border border-blue-200 bg-white text-gray-700 px-3 py-1 hover:border-blue-400 cursor-pointer">{y}</span>))}
            </div>
            <div className="mt-6 space-y-4">
              {[1, 2].map(i => (
                <div key={i} className="rounded-2xl border border-blue-200 p-4 hover:border-blue-400 hover:shadow-md transition">
                  <h4 className="text-sm font-medium">
                    <a href="#publications" className="text-blue-600 hover:text-blue-700">[Paper title - placeholder]</a>
                  </h4>
                  <p className="mt-1 text-sm text-gray-600">
                    [Authors]. [Journal], [Volume(Issue)], pages, [Year].
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <a href="#publications" className="inline-flex items-center rounded-xl border border-blue-300 bg-blue-500 text-white px-3 py-1.5 text-sm hover:bg-blue-600 transition">
                READ MORE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MEMBERS */}
      <section id="members" className="bg-blue-50 border-y border-blue-200">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="text-2xl font-semibold text-gray-800">MEMBERS</h2>

          {/* 顶部网格：快速跳转到个人详情 */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {members.map(m => (
              <a
                key={m.slug}
                href={`#member-${m.slug}`}
                className="group rounded-xl border border-blue-200 bg-white p-3 hover:bg-blue-50 hover:border-blue-400 hover:shadow-md transition"
              >
                <img
                  src={m.avatar ? `/members/${m.avatar}` : ph(200, 200, 'photo')}
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = ph(200, 200, 'photo'); }}
                  alt={m.name}
                  className="h-28 w-full rounded-lg object-cover"
                />
                <div className="mt-2 text-sm font-medium truncate text-gray-800">{m.name}</div>
                {m.title && <div className="text-xs text-blue-600 truncate">{m.title}</div>}
              </a>
            ))}
          </div>

          {/* 个人详情列表（带锚点） */}
          <div className="mt-10 space-y-8">
            {members.map(m => (
              <article
                key={m.slug}
                id={`member-${m.slug}`}
                className="rounded-2xl border border-blue-200 bg-white p-5 scroll-mt-24 hover:border-blue-400 hover:shadow-md transition"
              >
                <div className="flex gap-4">
                  <img
                    src={m.avatar ? `/members/${m.avatar}` : ph(240, 240, 'photo')}
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = ph(240, 240, 'photo'); }}
                    alt={m.name}
                    className="h-28 w-28 flex-none rounded-xl object-cover"
                  />
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-gray-800">{m.name}</h3>
                    {m.title && <p className="text-sm text-blue-600">{m.title}</p>}
                    {m.email && (
                      <p className="text-sm mt-1">
                        <a className="text-blue-600 hover:text-blue-700 underline underline-offset-4" href={`mailto:${m.email}`}>{m.email}</a>
                      </p>
                    )}

                    {m.bio && (
                      <div className="mt-4 whitespace-pre-line text-sm text-gray-700 break-words [overflow-wrap:anywhere]">
                        {m.bio}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section id="news" className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-semibold text-gray-800">NEWS</h2>
        <div className="mt-6 relative">
          <div
            ref={newsRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth"
          >
            {[1, 2, 3, 4].map(i => (
              <a key={i} href="#news" className="min-w-[280px] snap-start rounded-2xl border border-blue-200 p-4 hover:bg-blue-50 hover:border-blue-400 hover:shadow-md transition bg-white">
                <div className="text-xs text-blue-500 font-medium">YYYY-MM-DD</div>
                <p className="mt-2 text-sm text-gray-700">[News headline placeholder]</p>
                <div className="mt-3">
                  <span className="inline-flex items-center rounded-xl border border-blue-300 bg-blue-500 text-white px-2 py-1 text-xs">
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
                className="rounded-full border border-blue-300 bg-blue-500 text-white px-3 py-2 text-xs shadow hover:bg-blue-600"
              >
                Prev
              </button>
            </div>
            <div className="pointer-events-auto p-2">
              <button
                onClick={() => scrollByWidth(newsRef, 1)}
                className="rounded-full border border-blue-300 bg-blue-500 text-white px-3 py-2 text-xs shadow hover:bg-blue-600"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-blue-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid md:grid-cols-[220px,1fr] gap-8">
            <a href="/" className="block">
              <img
                src={ph(220, 60, '[LOGO]')}
                alt="FOOTER LOGO"
                className="h-10 w-auto"
              />
            </a>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="text-sm font-semibold text-gray-800">Get in Touch</div>
                <p className="mt-2 text-sm text-gray-600">[Address / placeholder]</p>
                <div className="mt-3">
                  <a href="mailto:" className="inline-flex items-center rounded-xl border border-blue-300 bg-blue-500 text-white px-3 py-1.5 text-sm hover:bg-blue-600 transition">
                    Email address
                  </a>
                </div>
              </div>

              <div>
                <div className="text-sm font-semibold text-gray-800">Links</div>
                <ul className="mt-2 space-y-2 text-sm">
                  <li><a href="#" className="text-blue-600 hover:text-blue-700">[Link A]</a></li>
                  <li><a href="#" className="text-blue-600 hover:text-blue-700">[Link B]</a></li>
                  <li><a href="#" className="text-blue-600 hover:text-blue-700">[Link C]</a></li>
                  <li><a href="#" className="text-blue-600 hover:text-blue-700">[Link D]</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 text-xs text-gray-500">
            [Copyright / placeholder]
          </div>
        </div>
      </footer>
    </div>
  );
}