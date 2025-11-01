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
      name: "The Stanford Natural Language Processing Group",
      tagline: "Performing groundbreaking NLP research since 1999.",
      heroCTA: {
        primary: { label: "People", href: "https://nlp.stanford.edu/people/" },
        secondary: { label: "Research Blog", href: "https://ai.stanford.edu/blog/nlp/" },
      },

      // About
      mission:
        "We are a passionate, inclusive group of students, faculty, postdocs, and research engineers working on algorithms that enable computers to process, generate, and understand human languages.",
      vision:
        "Interdisciplinary research and education spanning computational linguistics, machine learning, human-centered AI, and applications across social and cognitive sciences. Part of Stanford AI Lab (SAIL) and closely affiliated with HAI, CRFM, Stanford Data Science, and CSLI.",

      values: [
        { title: "Open Research", desc: "Advance fundamental NLP with rigor and reproducibility." },
        { title: "Interdisciplinary", desc: "Collaborate across linguistics, CS, psychology, and education." },
        { title: "Community & Education", desc: "Build tools and teaching materials widely used by the community." },
      ],

      // Some safe, site-aligned facts (no guessing)
      stats: [
        { label: "Founded", value: "1999" },
        { label: "Stanza languages", value: "60+" },
        { label: "Affiliations", value: "SAIL • HAI • CRFM • SDS • CSLI" },
        { label: "Location", value: "Stanford, CA" },
      ],

      // Map to site sections/links conceptually
      services: [
        {
          icon: <Rocket className="w-6 h-6" />,
          title: "Research",
          desc: "Core NLP, computational linguistics, ML for language, and interdisciplinary projects.",
        },
        {
          icon: <Sparkles className="w-6 h-6" />,
          title: "Software",
          desc: "Open-source tools used worldwide, including Stanza and CoreNLP.",
        },
        {
          icon: <Code2 className="w-6 h-6" />,
          title: "Teaching",
          desc: "Courses, seminars, and extensive educational materials for the NLP community.",
        },
        {
          icon: <Shield className="w-6 h-6" />,
          title: "Community",
          desc: "Reading groups, NLP lunch, seminars, and collaboration across Stanford labs.",
        },
      ],

      // Representative tools mentioned on the site
      products: [
        {
          name: "Stanza",
          tagline: "Python NLP toolkit for 60+ human languages",
          features: [
            "Neural pipelines for tokenization, POS, NER, parsing",
            "Pretrained models across many languages",
            "Easy-to-use Python API",
          ],
          brief:
            "Open-source toolkit developed by the group to process text in over 60 languages.",
        },
        {
          name: "Stanford CoreNLP",
          tagline: "Widely used Java toolkit for natural language processing",
          features: [
            "Tokenization, POS, NER, parsing",
            "Coreference, sentiment, and more",
            "Extensible annotators and pipelines",
          ],
          brief:
            "A long-standing NLP toolkit offering a broad set of text analysis annotators.",
        },
      ],

      // Lightweight timeline without unverifiable claims
      timeline: [
        { time: "1999", event: "NLP Group founded at Stanford" },
        { time: "2020", event: "Stanza released with multilingual neural pipelines" },
        { time: "Today", event: "Active research, teaching, and community engagement" },
      ],

      // Keep team generic to avoid outdated roster; link out via CTA above
      team: [
        { name: "Core Faculty", role: "Research & Teaching", bio: "Lead research programs and courses in NLP and ML." },
        { name: "Students & Postdocs", role: "Research", bio: "Drive day-to-day research across projects and publications." },
        { name: "Research Engineers", role: "Tools & Infrastructure", bio: "Build and maintain widely used NLP software." },
      ],

      // Use affiliations as “clients” section visually
      clients: [
        { name: "Stanford AI Lab (SAIL)" },
        { name: "Stanford HAI" },
        { name: "CRFM" },
        { name: "Stanford Data Science" },
        { name: "CSLI" },
      ],

      // No quotes on homepage → leave empty or add later
      testimonials: [],

      // “Join” info from homepage
      careers: {
        note:
          "Want to work with us? Stanford students can apply for research; others should apply to Stanford programs.",
        roles: [
          { title: "Stanford students — research (CLIPS)", type: "Apply", link: "https://nlp.stanford.edu/clips/" },
          { title: "Graduate programs — CS or Linguistics", type: "Admissions", link: "https://gradadmissions.stanford.edu/" },
          { title: "Prospective students overview", type: "Info", link: "https://nlp.stanford.edu/prospective/" },
        ],
      },

      // Footer shows the public address on the site
      contact: {
        email: "", // put your own email if you want the mailto form to work
        phone: "",
        address: "Gates Computer Science Building, 353 Jane Stanford Way, Stanford, CA 94305-9020",
        map:
          "https://www.google.com/maps?q=Gates+Computer+Science+Building,+353+Jane+Stanford+Way,+Stanford,+CA+94305",
      },

      footer: "© " + new Date().getFullYear() + " Stanford NLP Group (unofficial template).",
    }),
    []
  );
}
