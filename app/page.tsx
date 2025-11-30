'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

export default function SUSTechLabBlank() {
  // Nav mirrors the site's sections
  const nav = [
    { id: 'home', label: 'Home' },
    { id: 'research', label: 'Research' },
    { id: 'publications', label: 'Publications' },
    { id: 'members', label: 'Members' },
    { id: 'news', label: 'News' },
    { id: 'contact', label: 'Contact' },
  ];

  // Research sub-areas (placeholders), reflecting the site's 3 topics
  const researchTopics = [
    { title: '[Neuronal Structural Biology]', brief: '[Short description placeholder]' },
    { title: '[Synaptic Molecular Biology]', brief: '[Short description placeholder]' },
    { title: '[Phase Separation in Nervous System]', brief: '[Short description placeholder]' },
  ];

  // Selected pubs (placeholder cards)
  const selectedPubs = Array.from({ length: 3 }).map((_, i) => ({
    title: `[Selected Paper Title #${i + 1}]`,
    meta: `[Authors] · [Journal] · [Year]`,
  }));

  // All pubs by year (placeholder)
  const allYears = [
    '2025', '2024', '2023', '2022', '2021', '2020', '2019',
    '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', 'Before 2010',
  ];

  // Members groups (placeholder)
  const memberGroups = [
    { group: 'Principal Investigator', people: ['[Name]'] },
    { group: 'Current', people: ['[Name 1]', '[Name 2]'] },
    { group: 'Alumni', people: ['[Name A]', '[Name B]'] },
  ];

  // News list (placeholder)
  const newsItems = Array.from({ length: 6 }).map((_, i) => ({
    date: '[YYYY-MM-DD]',
    title: `[News item title #${i + 1}]`,
  }));

  return (
    <div className="min-h-screen w-full text-neutral-900 bg-white">
      {/* Top navbar */}
      <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold text-lg tracking-tight">
            [Lab Name]
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

      {/* HOME */}
      <section id="home" className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-3xl md:text-5xl font-bold leading-tight"
        >
          [Research Highlight]
        </motion.h1>

        <p className="mt-4 text-neutral-700">
          [Two–three sentence highlight placeholder. Keep this short and high-level.]
        </p>

        {/* Optional highlight bullets (as seen on site hero area) */}
        <ul className="mt-6 grid md:grid-cols-3 gap-3">
          {['[Highlight point #1]', '[Highlight point #2]', '[Highlight point #3]'].map((t, i) => (
            <li key={i} className="text-sm text-neutral-700">
              • {t}
            </li>
          ))}
        </ul>
      </section>

      {/* RESEARCH */}
      <Section id="research" title="Research">
        <div className="grid md:grid-cols-3 gap-4">
          {researchTopics.map((r, i) => (
            <Card key={i}>
              <div className="text-lg font-semibold">{r.title}</div>
              <p className="text-sm text-neutral-700 mt-2">{r.brief}</p>
              <a href="#" className="mt-3 inline-block text-sm underline underline-offset-4">
                [READ MORE]
              </a>
            </Card>
          ))}
        </div>
      </Section>

      {/* PUBLICATIONS */}
      <Section id="publications" title="Publications">
        {/* Selected Publications */}
        <div className="mb-6">
          <div className="text-base font-semibold">Selected Publications</div>
          <div className="mt-3 grid md:grid-cols-2 gap-4">
            {selectedPubs.map((p, i) => (
              <Card key={i}>
                <div className="font-medium">{p.title}</div>
                <div className="text-sm text-neutral-600 mt-1">{p.meta}</div>
              </Card>
            ))}
          </div>
          <a href="#" className="mt-3 inline-block text-sm underline underline-offset-4">
            [READ MORE]
          </a>
        </div>

        {/* All Publications (years) */}
        <div className="mt-8">
          <div className="text-base font-semibold">All Publications</div>
          <div className="mt-3 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {allYears.map((y) => (
              <Card key={y}>
                <div className="font-medium">{y}</div>
                <ul className="list-disc pl-5 text-sm text-neutral-700 mt-2">
                  <li>[Paper #1 placeholder]</li>
                  <li>[Paper #2 placeholder]</li>
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* MEMBERS */}
      <Section id="members" title="Members">
        <div className="grid md:grid-cols-3 gap-4">
          {memberGroups.map((g) => (
            <Card key={g.group}>
              <div className="font-semibold">{g.group}</div>
              <ul className="mt-2 text-sm leading-relaxed">
                {g.people.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* NEWS */}
      <Section id="news" title="News">
        <div className="grid md:grid-cols-2 gap-4">
          {newsItems.map((n, i) => (
            <Card key={i}>
              <div className="text-xs text-neutral-500">{n.date}</div>
              <div className="font-medium mt-1">{n.title}</div>
              <p className="text-sm text-neutral-700 mt-1">[One–two line summary placeholder]</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Contact">
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <div className="font-medium">[Address]</div>
            <p className="text-sm text-neutral-700 mt-2">
              [Building / Street], Southern University of Science and Technology, Shenzhen, China
            </p>
            <a href="#" className="mt-3 inline-block text-sm underline underline-offset-4">
              [View on Map]
            </a>
          </Card>
          <Card>
            <div className="font-medium">[Email / Phone]</div>
            <p className="text-sm text-neutral-700 mt-2">
              [lab@domain.edu] · [+86-xxx-xxxx-xxxx]
            </p>
          </Card>
        </div>
      </Section>

      {/* Footer */}
      <footer className="mt-16 border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-600">
          © {new Date().getFullYear()} [Lab Name]. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

/* ---------- UI helpers ---------- */

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
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
        className="text-xl md:text-2xl font-semibold"
      >
        {title}
      </motion.h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function Card({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-neutral-200 p-5 bg-white">
      {children}
    </div>
  );
}
