'use client';

import type { ReactNode } from 'react';
import { useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Rocket,
  Shield,
  Sparkles,
  Code2,
  Globe,
  Phone,
  Mail,
  MapPin,
  Check,
  ChevronRight,
} from 'lucide-react';

// Stanford NLP–style content wired into your one-page template.
// You can tweak the `data` object only; the whole page will update.
export default function CompanyIntroSite() {
  const data = useMemo(
    () => ({
      name: 'The Stanford Natural Language Processing Group',
      tagline: 'Performing groundbreaking NLP research since 1999.',
      heroCTA: {
        primary: { label: 'People', href: 'https://nlp.stanford.edu/people/' },
        secondary: { label: 'Research Blog', href: 'https://ai.stanford.edu/blog/nlp/' },
      },

      // About
      mission:
        'We are a passionate, inclusive group of students, faculty, postdocs, and research engineers working on algorithms that enable computers to process, generate, and understand human languages.',
      vision:
        'Interdisciplinary research and education spanning computational linguistics, machine learning, human-centered AI, and applications across social and cognitive sciences. Part of Stanford AI Lab (SAIL) and closely affiliated with HAI, CRFM, Stanford Data Science, and CSLI.',

      values: [
        { title: 'Open Research', desc: 'Advance fundamental NLP with rigor and reproducibility.' },
        { title: 'Interdisciplinary', desc: 'Collaborate across linguistics, CS, psychology, and education.' },
        { title: 'Community & Education', desc: 'Build tools and teaching materials widely used by the community.' },
      ],

      // Some safe, site-aligned facts
      stats: [
        { label: 'Founded', value: '1999' },
        { label: 'Stanza languages', value: '60+' },
        { label: 'Affiliations', value: 'SAIL • HAI • CRFM • SDS • CSLI' },
        { label: 'Location', value: 'Stanford, CA' },
      ],

      services: [
        {
          icon: <Rocket className="w-6 h-6" />,
          title: 'Research',
          desc: 'Core NLP, computational linguistics, ML for language, and interdisciplinary projects.',
        },
        {
          icon: <Sparkles className="w-6 h-6" />,
          title: 'Software',
          desc: 'Open-source tools used worldwide, including Stanza and CoreNLP.',
        },
        {
          icon: <Code2 className="w-6 h-6" />,
          title: 'Teaching',
          desc: 'Courses, seminars, and extensive educational materials for the NLP community.',
        },
        {
          icon: <Shield className="w-6 h-6" />,
          title: 'Community',
          desc: 'Reading groups, NLP lunch, seminars, and collaboration across Stanford labs.',
        },
      ],

      products: [
        {
          name: 'Stanza',
          tagline: 'Python NLP toolkit for 60+ human languages',
          features: [
            'Neural pipelines for tokenization, POS, NER, parsing',
            'Pretrained models across many languages',
            'Easy-to-use Python API',
          ],
          brief: 'Open-source toolkit developed by the group to process text in over 60 languages.',
        },
        {
          name: 'Stanford CoreNLP',
          tagline: 'Widely used Java toolkit for natural language processing',
          features: [
            'Tokenization, POS, NER, parsing',
            'Coreference, sentiment, and more',
            'Extensible annotators and pipelines',
          ],
          brief: 'A long-standing NLP toolkit offering a broad set of text analysis annotators.',
        },
      ],

      timeline: [
        { time: '1999', event: 'NLP Group founded at Stanford' },
        { time: '2020', event: 'Stanza released with multilingual neural pipelines' },
        { time: 'Today', event: 'Active research, teaching, and community engagement' },
      ],

      team: [
        { name: 'Core Faculty', role: 'Research & Teaching', bio: 'Lead research programs and courses in NLP and ML.' },
        { name: 'Students & Postdocs', role: 'Research', bio: 'Drive day-to-day research across projects and publications.' },
        { name: 'Research Engineers', role: 'Tools & Infrastructure', bio: 'Build and maintain widely used NLP software.' },
      ],

      clients: [
        { name: 'Stanford AI Lab (SAIL)' },
        { name: 'Stanford HAI' },
        { name: 'CRFM' },
        { name: 'Stanford Data Science' },
        { name: 'CSLI' },
      ],

      testimonials: [],

      careers: {
        note:
          'Want to work with us? Stanford students can apply for research; others should apply to Stanford programs.',
        roles: [
          { title: 'Stanford students — research (CLIPS)', type: 'Apply', link: 'https://nlp.stanford.edu/clips/' },
          { title: 'Graduate programs — CS or Linguistics', type: 'Admissions', link: 'https://gradadmissions.stanford.edu/' },
          { title: 'Prospective students overview', type: 'Info', link: 'https://nlp.stanford.edu/prospective/' },
        ],
      },

      contact: {
        email: '', // fill your email to enable the mailto form
        phone: '',
        address:
          'Gates Computer Science Building, 353 Jane Stanford Way, Stanford, CA 94305-9020',
        map:
          'https://www.google.com/maps?q=Gates+Computer+Science+Building,+353+Jane+Stanford+Way,+Stanford,+CA+94305',
      },

      footer:
        '© ' + new Date().getFullYear() + ' Stanford NLP Group (unofficial template).',
    }),
    []
  );

  const nav = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Activities' },
    { id: 'products', label: 'Software' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'team', label: 'People' },
    { id: 'careers', label: 'Join' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen w-full text-neutral-900 dark:text-neutral-50 bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-900 dark:to-neutral-950">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-neutral-900/60 border-b border-neutral-200/60 dark:border-neutral-800">
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold text-lg tracking-tight">
            {data.name}
          </a>
          <nav className="hidden md:flex gap-6 text-sm">
            {nav.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="hover:opacity-80">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href={data.heroCTA.primary.href}
            className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90"
          >
            <Phone className="w-4 h-4" /> Visit
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">{data.tagline}</h1>
            <p className="mt-5 text-neutral-600 dark:text-neutral-300">{data.mission}</p>
            <div className="mt-8 flex gap-3">
              <a
                href={data.heroCTA.primary.href}
                className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90"
              >
                {data.heroCTA.primary.label}
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href={data.heroCTA.secondary.href}
                className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100/60 dark:hover:bg-neutral-800/60"
              >
                {data.heroCTA.secondary.label}
              </a>
            </div>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {data.stats.map((s, i) => (
                <div key={i} className="rounded-2xl border border-neutral-200/70 dark:border-neutral-800 p-4">
                  <div className="text-2xl font-semibold">{s.value}</div>
                  <div className="text-xs text-neutral-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl border border-neutral-200/70 dark:border-neutral-800 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 grid place-items-center">
              <Globe className="w-24 h-24 opacity-60" />
            </div>
            <div className="hidden md:block absolute -bottom-6 -left-6 rounded-2xl px-4 py-3 bg-white/80 dark:bg-neutral-900/80 border border-neutral-200/60 dark:border-neutral-800 text-sm shadow">
              <span className="font-medium">Open Research</span>
              <span className="mx-2">•</span>
              <span>Education</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <Section id="about" title="About">
        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">{data.vision}</p>
        <ul className="mt-6 grid sm:grid-cols-3 gap-4">
          {data.values.map((v, i) => (
            <li key={i} className="rounded-2xl border border-neutral-200/70 dark:border-neutral-800 p-5">
              <div className="font-semibold flex items-center gap-2">
                <Check className="w-5 h-5" /> {v.title}
              </div>
              <div className="text-sm text-neutral-500 mt-1">{v.desc}</div>
            </li>
          ))}
        </ul>
      </Section>

      {/* Services */}
      <Section id="services" title="Activities">
        <div className="grid md:grid-cols-2 gap-4">
          {data.services.map((s, i) => (
            <Card key={i}>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl border border-neutral-200/70 dark:border-neutral-800">{s.icon}</div>
                <div>
                  <div className="font-semibold">{s.title}</div>
                  <div className="text-sm text-neutral-500 mt-1 leading-relaxed">{s.desc}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Products */}
      <Section id="products" title="Software">
        <div className="grid gap-4 md:grid-cols-2">
          {data.products.map((p, i) => (
            <Card key={i}>
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="text-lg font-semibold">{p.name}</div>
                  <div className="text-sm text-neutral-500">{p.tagline}</div>
                </div>
                <Badge>Open Source</Badge>
              </div>
              <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">{p.brief}</p>
              <ul className="mt-4 grid gap-2">
                {p.features.map((f, j) => (
                  <li key={j} className="text-sm flex items-start gap-2">
                    <Check className="w-4 h-4 mt-1" /> {f}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section id="timeline" title="Timeline">
        <div className="relative pl-6">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-neutral-300 dark:bg-neutral-700" />
          <div className="grid gap-4">
            {data.timeline.map((t, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-neutral-900 dark:bg-white" />
                <div className="ml-2">
                  <div className="text-sm text-neutral-500">{t.time}</div>
                  <div className="font-medium">{t.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Team */}
      <Section id="team" title="People">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.team.map((m, i) => (
            <Card key={i}>
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-700 dark:to-neutral-800 mb-4" />
              <div className="font-semibold">{m.name}</div>
              <div className="text-sm text-neutral-500">{m.role}</div>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-2 leading-relaxed">{m.bio}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Clients & Testimonials */}
      <Section title="Affiliations">
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <div className="text-sm text-neutral-500 mb-3">Affiliated Groups</div>
            <div className="grid grid-cols-2 gap-3">
              {data.clients.map((c, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-neutral-200/70 dark:border-neutral-800 p-4 text-sm text-center"
                >
                  {c.name}
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <div className="text-sm text-neutral-500 mb-3">Testimonials</div>
            <div className="text-sm text-neutral-500">—</div>
          </Card>
        </div>
      </Section>

      {/* Careers */}
      <Section id="careers" title="Join">
        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">{data.careers.note}</p>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {data.careers.roles.map((r, i) => (
            <Card key={i}>
              <div className="font-medium">{r.title}</div>
              <div className="text-xs text-neutral-500 mt-1">{r.type}</div>
              <a href={r.link} className="mt-4 inline-flex items-center gap-2 text-sm underline underline-offset-4">
                Learn more <ChevronRight className="w-4 h-4" />
              </a>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <div className="flex items-center gap-3 text-sm">
              <Mail className="w-4 h-4" /> {data.contact.email || '—'}
            </div>
            <div className="flex items-center gap-3 text-sm mt-2">
              <Phone className="w-4 h-4" /> {data.contact.phone || '—'}
            </div>
            <div className="flex items-center gap-3 text-sm mt-2">
              <MapPin className="w-4 h-4" /> {data.contact.address}
            </div>
            <a
              href={data.contact.map}
              target="_blank"
              className="mt-4 inline-flex items-center gap-2 text-sm underline underline-offset-4"
            >
              View Map <ChevronRight className="w-4 h-4" />
            </a>
          </Card>
          <Card>
            {data.contact.email ? (
              <form action={`mailto:${data.contact.email}`} method="post" encType="text/plain" className="grid gap-3">
                <input
                  required
                  placeholder="Your name"
                  className="px-3 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent"
                />
                <input
                  required
                  placeholder="Your email"
                  type="email"
                  className="px-3 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent"
                />
                <textarea
                  required
                  placeholder="What would you like to know?"
                  rows={4}
                  className="px-3 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent"
                />
                <button className="rounded-2xl px-4 py-2 text-sm bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90">
                  Send
                </button>
              </form>
            ) : (
              <div className="text-sm text-neutral-500">
                Add an email in <code>data.contact.email</code> to enable the contact form.
              </div>
            )}
          </Card>
        </div>
      </Section>

      {/* Footer */}
      <footer className="mt-16 border-t border-neutral-200/60 dark:border-neutral-800">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-500">{data.footer}</div>
      </footer>
    </div>
  );
}

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

function Card({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-neutral-200/70 dark:border-neutral-800 p-5 bg-white/70 dark:bg-neutral-900/60 backdrop-blur">
      {children}
    </div>
  );
}

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-xl border border-neutral-300 dark:border-neutral-700 px-2 py-1 text-xs">
      {children}
    </span>
  );
}
