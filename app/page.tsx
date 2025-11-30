'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

export default function LabBlankSite() {
  // 顶部导航（锚点顺序可自行调整/增减）
  const nav = [
    { id: 'home', label: 'Home' },
    { id: 'research', label: 'Research' },
    { id: 'publications', label: 'Publications' },
    { id: 'people', label: 'People' },
    { id: 'news', label: 'News' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    // 纯色背景（需要其它颜色可改 bg-orange-100 为任意 Tailwind 颜色或 16 进制）
    <div className="min-h-screen w-full text-neutral-900 bg-orange-100">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-50 bg-orange-100 border-b border-orange-200">
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold text-lg tracking-tight">
            MJZ Lab · SUSTech
          </a>
          <nav className="hidden md:flex gap-6 text-sm">
            {nav.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="hover:opacity-80">
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero / Home */}
      <section id="home" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold leading-tight"
        >
          {/* 标题占位 */}
          [Lab Title Here]
        </motion.h1>
        <p className="mt-4 text-neutral-700">
          {/* 简介占位（1–2 句） */}
          [One-sentence lab mission or tagline goes here.]
        </p>

        {/* 可选：放置 3~4 个亮点卡片；空白版默认显示占位 */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <Card key={i} dashed>
              <div className="text-sm text-neutral-600">[Highlight #{i + 1}]</div>
            </Card>
          ))}
        </div>
      </section>

      {/* Research */}
      <Section id="research" title="Research">
        <Grid cols={3}>
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} dashed>
              <div className="font-medium">[Research Topic #{i + 1}]</div>
              <p className="text-sm text-neutral-700 mt-2">
                [Short description...]
              </p>
            </Card>
          ))}
        </Grid>
      </Section>

      {/* Publications */}
      <Section id="publications" title="Publications">
        <Grid cols={2}>
          <Card dashed>
            <div className="text-sm text-neutral-600 mb-2">[Recent]</div>
            <ul className="list-disc pl-5 text-sm leading-relaxed">
              <li>[YYYY] [Authors]. [Title]. [Journal].</li>
              <li>[YYYY] [Authors]. [Title]. [Journal].</li>
            </ul>
          </Card>
          <Card dashed>
            <div className="text-sm text-neutral-600 mb-2">[Archive / Links]</div>
            <p className="text-sm text-neutral-700">
              [Google Scholar / ORCID / DBLP / PubMed links here]
            </p>
          </Card>
        </Grid>
      </Section>

      {/* People */}
      <Section id="people" title="People">
        <Grid cols={3}>
          {['PI', 'Postdocs', 'Students'].map((group, i) => (
            <Card key={i} dashed>
              <div className="font-medium">[{group}]</div>
              <ul className="mt-2 text-sm leading-relaxed">
                <li>[Name 1]</li>
                <li>[Name 2]</li>
              </ul>
            </Card>
          ))}
        </Grid>
      </Section>

      {/* News */}
      <Section id="news" title="News">
        <Grid cols={2}>
          {Array.from({ length: 4 }).map((_, i) => (
            <Card key={i} dashed>
              <div className="text-xs text-neutral-500">[YYYY-MM-DD]</div>
              <div className="font-medium mt-1">[News title #{i + 1}]</div>
              <p className="text-sm text-neutral-700 mt-1">[One-line summary...]</p>
            </Card>
          ))}
        </Grid>
      </Section>

      {/* Facilities */}
      <Section id="facilities" title="Facilities">
        <Grid cols={3}>
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} dashed>
              <div className="font-medium">[Instrument #{i + 1}]</div>
              <p className="text-sm text-neutral-700 mt-2">[Brief spec or usage...]</p>
            </Card>
          ))}
        </Grid>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects">
        <Grid cols={2}>
          {Array.from({ length: 4 }).map((_, i) => (
            <Card key={i} dashed>
              <div className="font-medium">[Project #{i + 1}]</div>
              <p className="text-sm text-neutral-700 mt-2">
                [Short description / external link...]
              </p>
            </Card>
          ))}
        </Grid>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <Grid cols={2}>
          <Card dashed>
            <div className="font-medium">[Address]</div>
            <p className="text-sm text-neutral-700 mt-2">
              [Room / Building], Southern University of Science and Technology, Shenzhen, China
            </p>
            <a className="underline text-sm mt-3 inline-block" href="#" target="_blank">
              [View on Map]
            </a>
          </Card>
          <Card dashed>
            <div className="font-medium">[Email / Openings]</div>
            <p className="text-sm text-neutral-700 mt-2">
              [lab@domain.edu] · [Recruiting notice text...]
            </p>
          </Card>
        </Grid>
      </Section>

      {/* Footer */}
      <footer className="mt-16 border-t border-orange-200">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-600">
          © {new Date().getFullYear()} MJZ Lab · SUSTech. [Footer text here]
        </div>
      </footer>
    </div>
  );
}

/* ---------- 小组件 ---------- */

function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-14">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-xl md:text-2xl font-semibold"
      >
        {title}
      </motion.h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function Grid({ cols = 3, children }: { cols?: 2 | 3; children: ReactNode }) {
  return (
    <div
      className={`grid gap-4 ${cols === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'
        }`}
    >
      {children}
    </div>
  );
}

function Card({
  children,
  dashed = false,
}: {
  children: ReactNode;
  dashed?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-5 bg-white/70 backdrop-blur border ${dashed ? 'border-orange-300 border-dashed' : 'border-orange-200'
        }`}
    >
      {children}
    </div>
  );
}
