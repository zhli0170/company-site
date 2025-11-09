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

export default function CompanyIntroSite() {
  const data = useMemo(
    () => ({
      name: 'University of Sydney Catalysis Group',
      tagline: 'Harnessing light for sustainable and selective catalysis.',
      heroCTA: {
        primary: { label: 'Contact', href: '#contact' },
        secondary: { label: 'Learn More', href: '#about' },
      },

      mission:
        'We study photocatalytic and plasmonic nanomaterials that enable low-carbon synthesis and solar-driven transformations.',
      vision:
        'Our work spans catalyst design, operando spectroscopy, photoelectrochemistry, and data-driven discovery, collaborating across chemistry, materials, and engineering.',

      values: [
        { title: 'Open Science', desc: 'Reproducible methods and sharable datasets.' },
        { title: 'Interdisciplinary', desc: 'Chemistry × Materials × Engineering.' },
        { title: 'Impact', desc: 'Targeting green synthesis and energy conversion.' },
      ],

      // stats: 仅 value
      stats: [
        { value: 'Fellowship' },
        { value: 'Rearch area' },
        { value: 'Instioutional links' },
        { value: 'Location' },
      ],

      services: [
        {
          icon: <Rocket className="w-6 h-6" />,
          title: 'Catalyst Design',
          desc: 'Semiconductor, plasmonic, and heterostructure systems.',
        },
        {
          icon: <Sparkles className="w-6 h-6" />,
          title: 'Operando Spectroscopy',
          desc: 'Time-resolved optical and surface characterisation.',
        },
        {
          icon: <Code2 className="w-6 h-6" />,
          title: 'Photoelectrochemistry',
          desc: 'Device testing, selectivity and stability engineering.',
        },
        {
          icon: <Shield className="w-6 h-6" />,
          title: 'Data & Theory',
          desc: 'Kinetics, modelling, and data-driven discovery.',
        },
      ],

      products: [
        {
          name: 'Catalyst Library',
          tagline: 'Well-annotated photocatalyst recipes and protocols',
          features: ['Reproducible syntheses', 'Optical/EC metadata', 'Benchmark tasks'],
          brief: 'Reusable building blocks for light-driven reactions.',
        },
        {
          name: 'Open Data Repository',
          tagline: 'Spectra, kinetics, and device performance',
          features: ['FAIR datasets', 'Notebooks & plots', 'Community submissions'],
          brief: 'Transparent results to accelerate comparison and learning.',
        },
      ],

      timeline: [
        { time: '2024', event: 'Group founded at USYD' },
        { time: '2025', event: 'Photocatalyst library released' },
        { time: 'Now', event: 'Active collaborations and open datasets' },
      ],

      team: [
        { name: 'PI & Faculty', role: 'Research & Teaching', bio: 'Leads strategy and collaboration.' },
        { name: 'Students & RAs', role: 'Research', bio: 'Synthesis, characterisation, and analysis.' },
        { name: 'Collaborators', role: 'Partners', bio: 'Joint projects across departments.' },
      ],

      clients: [
        { name: 'School of Chemistry' },
        { name: 'Faculty of Engineering' },
        { name: 'Sydney Nano' },
        { name: 'Industry Partners' },
        { name: 'International Labs' },
      ],

      testimonials: [],

      careers: {
        note: 'We welcome motivated students and collaborators. Reach out with your CV and interests.',
        roles: [
          { title: 'Honours/MPhil/PhD', type: 'Open', link: '#contact' },
          { title: 'Visiting Students', type: 'Open', link: '#contact' },
          { title: 'Industry Collaboration', type: 'Open', link: '#contact' },
        ],
      },

      contact: {
        email: '',
        phone: '',
        address: 'F23, City Rd, University of Sydney NSW 2006',
        map: 'https://www.google.com/maps?q=University+of+Sydney+NSW+2006',
      },

      footer: '© ' + new Date().getFullYear() + ' University of Sydney Catalysis Group.',
    }),
    []
  );

  const nav = [
    { id: 'team', label: 'People' },
    { id: 'publications', label: 'Publications' },
    { id: 'blog', label: 'Rearch Blog' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'projects', label: 'Project' },
  ];


  return (
    <div className="min-h-screen w-full text-neutral-900 bg-orange-100">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-orange-100 border-b border-orange-200">
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
        </div>
      </header>


      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">{data.tagline}</h1>
            <p className="mt-5 text-neutral-700">{data.mission}</p>


            {/* stats 仅显示 value */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {data.stats.map((s: { value: string }, i: number) => (
                <div
                  key={i}
                  className="rounded-2xl border border-orange-200 p-4 bg-white/70 backdrop-blur"
                >
                  <div className="text-2xl font-semibold leading-snug whitespace-nowrap">
                    {s.value}
                  </div>

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
            <div className="aspect-[4/3] rounded-3xl border border-orange-200 bg-orange-100 grid place-items-center">
              <Globe className="w-24 h-24 opacity-60" />
            </div>
            <div className="hidden md:block absolute -bottom-6 -left-6 rounded-2xl px-4 py-3 bg-white/85 border border-orange-200 text-sm shadow">
              <span className="font-medium">Open Research</span>
              <span className="mx-2">•</span>
              <span>Education</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <Section id="about" title="About">
        <p className="text-neutral-700 leading-relaxed">{data.vision}</p>
        <ul className="mt-6 grid sm:grid-cols-3 gap-4">
          {data.values.map((v, i) => (
            <li key={i} className="rounded-2xl border border-orange-200 p-5 bg-white/70 backdrop-blur">
              <div className="font-semibold flex items-center gap-2">
                <Check className="w-5 h-5" /> {v.title}
              </div>
              <div className="text-sm text-neutral-600 mt-1">{v.desc}</div>
            </li>
          ))}
        </ul>
      </Section>

      {/* Activities */}
      <Section id="services" title="Activities">
        <div className="grid md:grid-cols-2 gap-4">
          {data.services.map((s, i) => (
            <Card key={i}>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl border border-orange-200">{s.icon}</div>
                <div>
                  <div className="font-semibold">{s.title}</div>
                  <div className="text-sm text-neutral-600 mt-1 leading-relaxed">{s.desc}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Resources */}
      <Section id="products" title="Resources">
        <div className="grid gap-4 md:grid-cols-2">
          {data.products.map((p, i) => (
            <Card key={i}>
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="text-lg font-semibold">{p.name}</div>
                  <div className="text-sm text-neutral-600">{p.tagline}</div>
                </div>
                <Badge>Open</Badge>
              </div>
              <p className="mt-4 text-sm text-neutral-700 leading-relaxed">{p.brief}</p>
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
          <div className="absolute left-0 top-0 bottom-0 w-px bg-orange-300" />
          <div className="grid gap-4">
            {data.timeline.map((t, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-neutral-900" />
                <div className="ml-2">
                  <div className="text-sm text-neutral-600">{t.time}</div>
                  <div className="font-medium">{t.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* People */}
      <Section id="team" title="People">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.team.map((m, i) => (
            <Card key={i}>
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 mb-4" />
              <div className="font-semibold">{m.name}</div>
              <div className="text-sm text-neutral-600">{m.role}</div>
              <p className="text-sm text-neutral-700 mt-2 leading-relaxed">{m.bio}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Affiliations */}
      <Section title="Affiliations">
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <div className="text-sm text-neutral-600 mb-3">Affiliated Groups</div>
            <div className="grid grid-cols-2 gap-3">
              {data.clients.map((c, i) => (
                <div key={i} className="rounded-xl border border-orange-200 p-4 text-sm text-center">
                  {c.name}
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <div className="text-sm text-neutral-600 mb-3">Testimonials</div>
            <div className="text-sm text-neutral-500">—</div>
          </Card>
        </div>
      </Section>

      {/* Join */}
      <Section id="careers" title="Join">
        <p className="text-neutral-700 leading-relaxed">{data.careers.note}</p>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {data.careers.roles.map((r, i) => (
            <Card key={i}>
              <div className="font-medium">{r.title}</div>
              <div className="text-xs text-neutral-600 mt-1">{r.type}</div>
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
                <input required placeholder="Your name" className="px-3 py-2 rounded-xl border border-orange-200 bg-transparent" />
                <input required placeholder="Your email" type="email" className="px-3 py-2 rounded-xl border border-orange-200 bg-transparent" />
                <textarea required placeholder="What would you like to know?" rows={4} className="px-3 py-2 rounded-xl border border-orange-200 bg-transparent" />
                <button className="rounded-2xl px-4 py-2 text-sm bg-neutral-900 text-white hover:opacity-90">Send</button>
              </form>
            ) : (
              <div className="text-sm text-neutral-600">
                Add an email in <code>data.contact.email</code> to enable the form.
              </div>
            )}
          </Card>
        </div>
      </Section>
      {/* Publications */}
      <Section id="publications" title="Publications">
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <div className="text-sm text-neutral-600 mb-2">Recent</div>
            <ul className="text-sm leading-relaxed list-disc pl-5">
              <li>Coming soon — add your latest papers here.</li>
            </ul>
          </Card>
          <Card>
            <div className="text-sm text-neutral-600 mb-2">Archive</div>
            <p className="text-sm text-neutral-700">
              Link to Google Scholar / ORCID / group BibTeX later.
            </p>
          </Card>
        </div>
      </Section>

      {/* Rearch Blog */}
      <Section id="blog" title="Rearch Blog">
        <Card>
          <p className="text-sm text-neutral-700">
            Post short updates, figures, or lab notes here. You can also link to an external blog.
          </p>
        </Card>
      </Section>

      {/* Facilities */}
      <Section id="facilities" title="Facilities">
        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <div className="font-medium">Spectroscopy</div>
            <div className="text-sm text-neutral-600 mt-1">UV–Vis, PL, time-resolved...</div>
          </Card>
          <Card>
            <div className="font-medium">Photoelectrochemistry</div>
            <div className="text-sm text-neutral-600 mt-1">Potentiostats, solar simulators...</div>
          </Card>
          <Card>
            <div className="font-medium">Materials</div>
            <div className="text-sm text-neutral-600 mt-1">Synthesis & characterization.</div>
          </Card>
        </div>
      </Section>

      {/* Project */}
      <Section id="projects" title="Project">
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <div className="font-medium">Photocatalytic CO₂ Reduction</div>
            <div className="text-sm text-neutral-700 mt-1">
              Brief intro or external link.
            </div>
          </Card>
          <Card>
            <div className="font-medium">Selective Oxidation</div>
            <div className="text-sm text-neutral-700 mt-1">
              Brief intro or external link.
            </div>
          </Card>
        </div>
      </Section>


      {/* Footer */}
      <footer className="mt-16 border-t border-orange-200">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-600">{data.footer}</div>
      </footer>
    </div>
  );
}

function Section({ id, title, children }: { id?: string; title: string; children: ReactNode }) {
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
  return <div className="rounded-2xl border border-orange-200 p-5 bg-white/70 backdrop-blur">{children}</div>;
}

function Badge({ children }: { children: ReactNode }) {
  return <span className="inline-flex items-center rounded-xl border border-orange-300 px-2 py-1 text-xs">{children}</span>;
}
