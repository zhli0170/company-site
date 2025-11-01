'use client';

import { useMemo } from "react";
import { motion } from "framer-motion";
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
} from "lucide-react";

// ✅ Replace the data below with your real company info.
// - name / tagline / mission / vision / values
// - services / products / stats / timeline / team / clients / testimonials / careers / contact
// You can edit only the `data` object and the whole site will update automatically.

export default function CompanyIntroSite() {
  const data = useMemo(
    () => ({
      name: "ExampleTech",
      tagline: "Build Sustainable Value with Frontier Tech",
      heroCTA: {
        primary: { label: "Contact Us", href: "#contact" },
        secondary: { label: "Learn More", href: "#about" },
      },
      mission:
        "We help enterprises leap from efficiency to growth with secure, reliable, and explainable digital solutions.",
      vision:
        "To become a globally trusted digital partner that turns technology into real social good.",
      values: [
        { title: "User-First", desc: "Understand real scenarios and solve critical pain points." },
        { title: "Long-Termism", desc: "Pursue excellence within sustainable boundaries." },
        { title: "Security & Compliance", desc: "Trust by design, transparent and auditable." },
      ],
      stats: [
        { label: "Enterprise customers", value: "120+" },
        { label: "Countries/regions served", value: "8" },
        { label: "Core patents", value: "23" },
        { label: "SLA availability", value: "99.95%" },
      ],
      services: [
        {
          icon: <Rocket className="w-6 h-6" />,
          title: "Product Acceleration",
          desc: "0→1 discovery & validation, 1→N architecture upgrades and performance optimization.",
        },
        {
          icon: <Shield className="w-6 h-6" />,
          title: "Security & Compliance",
          desc: "Threat modeling, penetration testing, privacy and compliance (GDPR / ISO 27001).",
        },
        {
          icon: <Code2 className="w-6 h-6" />,
          title: "Custom Development",
          desc: "End‑to‑end delivery for web/mobile/data platforms and automated workflows.",
        },
        {
          icon: <Sparkles className="w-6 h-6" />,
          title: "AI Enablement",
          desc: "RAG, agents, knowledge graphs, and industry LLM solutions in production.",
        },
      ],
      products: [
        {
          name: "Nebula DX",
          tagline: "All‑in‑one Data Intelligence Platform",
          features: [
            "Multi‑source ingestion & high‑performance cleansing",
            "Unified stream/batch with low‑latency analytics",
            "Explainable ML with visual analysis",
          ],
          brief:
            "Under strict compliance, unify data assets, establish a metric system, and build data‑driven capabilities for medium and large enterprises.",
        },
      ],
      timeline: [
        { time: "2019", event: "Company founded and raised angel round" },
        { time: "2021", event: "Launched Nebula DX 1.0 and served 20+ customers" },
        { time: "2023", event: "Achieved ISO 27001 certification and expanded globally" },
        { time: "2025", event: "Upgraded AI‑native solutions across the portfolio" },
      ],
      team: [
        {
          name: "Li Zhang",
          role: "Founder & CEO",
          bio: "Former tech lead at a top internet company; specializes in platformization and org building.",
        },
        {
          name: "Emily Chen",
          role: "CTO",
          bio: "Expert in distributed systems and security; leads core architecture and compliance.",
        },
        {
          name: "James Wu",
          role: "Head of AI",
          bio: "Leads algorithms and data products; focuses on explainable AI and industry adoption.",
        },
      ],
      clients: [
        { name: "Acme Bank" },
        { name: "Nova Retail" },
        { name: "Omni Health" },
        { name: "Sky Logistics" },
      ],
      testimonials: [
        {
          quote:
            "ExampleTech digitized our lead‑to‑close pipeline and improved conversion by 18%.",
          author: "VP Sales, Nova Retail",
        },
        {
          quote:
            "Compliance lead time dropped 40%, cloud cost down 22%, and audit pass rate reached 100%.",
          author: "CIO, Acme Bank",
        },
      ],
      careers: {
        note:
          "We welcome builders across engineering, product, design, and delivery to join our long‑term team.",
        roles: [
          { title: "Frontend Engineer (React/Next.js)", type: "Full‑time / Intern", link: "#contact" },
          { title: "Data Platform Engineer (Flink/Spark)", type: "Full‑time", link: "#contact" },
          { title: "Security Engineer (Pentest/Compliance)", type: "Full‑time", link: "#contact" },
        ],
      },
      contact: {
        email: "hello@exampletech.com",
        phone: "+61 2 0000 0000",
        address: "Level 10, 123 George St, Sydney NSW",
        map:
          "https://www.google.com/maps?q=Level+10,+123+George+St,+Sydney+NSW",
      },
      footer: "© " + new Date().getFullYear() + " ExampleTech. All rights reserved.",
    }),
    []
  );

  const nav = [
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "products", label: "Products" },
    { id: "timeline", label: "Timeline" },
    { id: "team", label: "Team" },
    { id: "careers", label: "Careers" },
    { id: "contact", label: "Contact" },
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
            href="#contact"
            className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90"
          >
            <Phone className="w-4 h-4" /> Contact
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              {data.tagline}
            </h1>
            <p className="mt-5 text-neutral-600 dark:text-neutral-300">
              {data.mission}
            </p>
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
              <span className="font-medium">ISO 27001</span>
              <span className="mx-2">•</span>
              <span>GDPR Ready</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <Section id="about" title="About">
        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
          {data.vision}
        </p>
        <ul className="mt-6 grid sm:grid-cols-3 gap-4">
          {data.values.map((v, i) => (
            <li key={i} className="rounded-2xl border border-neutral-200/70 dark:border-neutral-800 p-5">
              <div className="font-semibold flex items-center gap-2"><Check className="w-5 h-5" /> {v.title}</div>
              <div className="text-sm text-neutral-500 mt-1">{v.desc}</div>
            </li>
          ))}
        </ul>
      </Section>

      {/* Services */}
      <Section id="services" title="Services">
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
      <Section id="products" title="Products">
        <div className="grid gap-4 md:grid-cols-2">
          {data.products.map((p, i) => (
            <Card key={i}>
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="text-lg font-semibold">{p.name}</div>
                  <div className="text-sm text-neutral-500">{p.tagline}</div>
                </div>
                <Badge>Demo Available</Badge>
              </div>
              <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">{p.brief}</p>
              <ul className="mt-4 grid gap-2">
                {p.features.map((f, j) => (
                  <li key={j} className="text-sm flex items-start gap-2"><Check className="w-4 h-4 mt-1" /> {f}</li>
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
      <Section id="team" title="Team">
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
      <Section title="Clients & Testimonials">
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <div className="text-sm text-neutral-500 mb-3">Clients</div>
            <div className="grid grid-cols-2 gap-3">
              {data.clients.map((c, i) => (
                <div key={i} className="rounded-xl border border-neutral-200/70 dark:border-neutral-800 p-4 text-sm text-center">
                  {c.name}
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <div className="text-sm text-neutral-500 mb-3">Testimonials</div>
            <div className="grid gap-4">
              {data.testimonials.map((q, i) => (
                <blockquote key={i} className="rounded-xl border border-neutral-200/70 dark:border-neutral-800 p-4 text-sm leading-relaxed">
                  <p>“{q.quote}”</p>
                  <div className="mt-2 text-xs text-neutral-500">— {q.author}</div>
                </blockquote>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      {/* Careers */}
      <Section id="careers" title="Careers">
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
              <Mail className="w-4 h-4" /> {data.contact.email}
            </div>
            <div className="flex items-center gap-3 text-sm mt-2">
              <Phone className="w-4 h-4" /> {data.contact.phone}
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
            <form action={`mailto:${data.contact.email}`} method="post" encType="text/plain" className="grid gap-3">
              <input required placeholder="Your name" className="px-3 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent" />
              <input required placeholder="Your email" type="email" className="px-3 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent" />
              <textarea required placeholder="What would you like to know?" rows={4} className="px-3 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent" />
              <button className="rounded-2xl px-4 py-2 text-sm bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90">
                Send
              </button>
            </form>
          </Card>
        </div>
      </Section>

      {/* Footer */}
      <footer className="mt-16 border-t border-neutral-200/60 dark:border-neutral-800">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-500">
          {data.footer}
        </div>
      </footer>
    </div>
  );
}

function Section({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
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

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-neutral-200/70 dark:border-neutral-800 p-5 bg-white/70 dark:bg-neutral-900/60 backdrop-blur">
      {children}
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-xl border border-neutral-300 dark:border-neutral-700 px-2 py-1 text-xs">
      {children}
    </span>
  );
}
