import {
  Award,
  BriefcaseBusiness,
  Code2,
  FolderKanban,
  GraduationCap,
  Mail,
  User,
  Wrench,
} from "lucide-react";

export default function DomePortfolioSite() {
  const nav = [
    { label: "About", href: "#about" },
    { label: "What I Do", href: "#what-i-do" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Certifications", href: "#certifications" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  const pillars = [
    {
      title: "Software Development",
      description:
        "I build technical solutions with a focus on clarity, maintainability, and real-world execution. My work spans backend logic, frontend interfaces, APIs, and system-oriented problem solving.",
    },
    {
      title: "Project Building",
      description:
        "I do not just study technology, I use it to shape concrete projects. I like turning ideas into structured roadmaps, prototypes, and working systems with a clear direction.",
    },
    {
      title: "Technical & Product Thinking",
      description:
        "I approach projects by connecting engineering, usability, and strategic thinking. I care about how a system works, why it matters, and how it can create value for real users or stakeholders.",
    },
  ];

  const projects = [
    {
      name: "PLUS – Realistic Model",
      problem:
        "PLUS is an AI-powered blockchain platform designed to transform corporate financial data into tokenized, verifiable, and tradable digital assets.",
      solution:
        "Built the landing website, product presentation, and B2B platform demo to communicate the product vision and structure the platform in a credible, execution-oriented way.",
      stack: ["Python", "FastAPI", "Solidity", "Smart Contracts", "Data Pipelines", "AI Models", "Blockchain Architecture"],
      outcome:
        "A project that reflects technical leadership, product vision, and startup execution across software, data, and blockchain-oriented architecture.",
      cta: "Project Overview",
      href: "https://github.com/domedtms/",
    },
    {
      name: "Financial Data Reconciliation",
      problem:
        "Operational financial workflows often require accurate reconciliation between accounting records, banking data, and internal system outputs.",
      solution:
        "During my internship, I worked on financial systems and data-driven processes, extending reconciliation logic and validation workflows around real-world financial data handling.",
      stack: ["Python", "FastAPI", "Docker", "Swagger", "Data Processing"],
      outcome:
        "A project experience that highlights financial systems problem solving and real-world software exposure inside a professional ERP context.",
      cta: "View Experience",
      href: "#experience",
    },
    {
      name: "CoachRetain",
      problem:
        "Personal trainers and online coaches often lose clients because renewals, check-ins, and follow-ups are managed in a fragmented and disorganized way.",
      solution:
        "Currently developing a reminder and client management micro-SaaS designed to help trainers organize recurring workflows and maintain client relationships more effectively.",
      stack: ["Micro-SaaS", "Product Design", "Workflow Logic", "Client Management"],
      outcome:
        "An early-stage product that reflects user-focused problem solving and a practical builder mindset.",
      cta: "Currently in Development",
      href: "https://coachretain.vercel.app/",
    },
  ];

  const certifications = [
    {
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "In Progress",
      note: "Currently preparing for the AWS Certified Cloud Practitioner certification.",
    },
    {
      name: "TOEIC C1",
      issuer: "ETS",
      year: "2026",
      note: "English certification portfolio including TOEIC Listening & Reading and TOEIC Speaking & Writing, with C1 level reached.",
    },
    {
      name: "English for IT 1 & 2",
      issuer: "Cisco Networking Academy x OpenEDG",
      year: "2026",
      note: "Two complementary certifications focused on professional English for software, networking, support, and technical communication contexts.",
    },
    {
      name: "IT Essentials",
      issuer: "Cisco Networking Academy",
      year: "2019",
      note: "Foundational certification on PC hardware, software, and core IT systems knowledge.",
    },
  ];

  const skillGroups = [
    {
      title: "Languages",
      items: ["Python", "JavaScript", "TypeScript", "C++", "SQL", "HTML", "CSS"],
    },
    {
      title: "Frontend",
      items: ["React", "Tailwind CSS", "Next.js", "ComponentDesign", "UI structuring"],
    },
    {
      title: "Backend & APIs",
      items: ["FastAPI", "REST APIs", "Swagger", "Data Processing", "Service Logic"],
    },
    {
      title: "Tools & Platforms",
      items: ["VS Code", "GitHub", "Docker", "Vercel", "Hardhat", "Linear"],
    },
    {
      title: "Technical Areas",
      items: ["Software Engineering", "Web Development", "Project building", "Blockchain Prototyping"],
    },
  ];

  const experience = [
    {
      title: "Software Engineer Intern",
      place: "Zucchetti Centro Sistemi Spa",
      period: "Apr 2026 — Present",
      description:
        "Working on financial systems and data-driven workflows within ERP environments, focusing on reconciliation logic, validation processes, and software support for real operational use cases. This role is giving me direct exposure to applied software engineering in business-critical environments.",
    },
    {
      title: "CTO & Technical Lead",
      place: "PLUS – Realistic Model",
      period: "Sep 2025 — Present",
      description:
        "Leading the technical direction of PLUS - Realistic Model by defining product structure, shaping platform logic, and translating a complex vision into a credible execution path across software, data, AI, and blockchain-related components. My work includes technical positioning, architecture reasoning, roadmap definition, and the development of project assets such as the website, product presentation, and B2B demo.",
    },
  ];

  const education = [
    {
      title: "BSc in Computer Engineering",
      place: "Politecnico di Milano",
      period: "Sep 2023 — 2026",
      description:
        "Developing a strong engineering foundation across software systems, algorithms, architecture, and structured problem solving, while building the analytical mindset needed to turn technical knowledge into real projects and practical execution.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-slate-100 selection:bg-cyan-400/20 selection:text-cyan-100">
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          background: #0a0f1a;
        }

        .grid-glow {
          background-image:
            linear-gradient(rgba(148, 163, 184, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.06) 1px, transparent 1px);
          background-size: 36px 36px;
          mask-image: radial-gradient(circle at center, black 45%, transparent 85%);
          -webkit-mask-image: radial-gradient(circle at center, black 45%, transparent 85%);
        }
      `}</style>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0f1a]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="text-sm font-semibold tracking-[0.2em] text-slate-200 uppercase">
            Domenico Di Tommaso
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:border-cyan-300/50 hover:bg-cyan-400/20"
          >
            Let&apos;s Talk
          </a>
        </div>
      </header>

      <main>
        <section id="hero" className="relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="grid-glow absolute inset-0 opacity-80" />
            <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="absolute right-20 top-32 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-10 px-6 pt-8 pb-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:pt-10 lg:pb-20">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-[0.18em] text-slate-300 uppercase">
                Software Engineering Student focused on real-world execution
              </div>

              <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Software Engineering student building real software systems and technical projects.
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                I am Domenico Di Tommaso, a Software Engineering student at Politecnico di Milano focused on software development, technical problem solving, and building credible projects that connect code, structure, and execution.
              </p>

              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-400">
                My work sits at the intersection of software engineering, project building, and technical strategy - with interests across software systems, automation, AI-driven workflows, and startup-oriented execution.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:translate-y-[-1px] hover:bg-cyan-300"
                >
                  Explore Projects
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
                >
                  Contact Me
                </a>
              </div>
            </div>

            <div className="flex items-start lg:pt-20">
              <div className="w-full rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-cyan-950/10 backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Current Positioning</p>
                    <p className="mt-2 text-lg font-semibold text-white">Technical Profile Overview

</p>
                  </div>
                  <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                    Open to opportunities
                  </div>
                </div>

                <div className="mt-5 space-y-4">
                  <div>
                    <p className="text-sm text-slate-400">Primary Focus</p>
                    <p className="mt-1 text-base font-medium text-slate-100">
                      Software engineering, technical projects, and execution
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Working Style</p>
                    <p className="mt-1 text-base font-medium text-slate-100">
                      Structured thinking, clear priorities, and implementation-driven work
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Core Strength</p>
                    <p className="mt-1 text-base font-medium text-slate-100">
                      Building technical solutions with real-world relevance and entrepreneurial perspective
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12">
              <div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-cyan-300" />
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">About / Who I Am</p>
                </div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  A technical profile shaped by structure, execution, and entrepreneurial thinking.
                </h2>
              </div>

              <div className="space-y-5 text-base leading-7 text-slate-300">
                <p>
                  I am a Computer Engineering student with a strong interest in software systems, practical execution, and the process of turning technical ideas into structured, credible projects.
                </p>
                <p>
                  I enjoy working where engineering meets direction: understanding how a system should be designed, how it should evolve, and how to make it useful in a real context.
                </p>
                <p>
                  What distinguishes me is not only the interest in writing code, but the habit of approaching projects with structure first: roadmap, priorities, implementation path, and long-term direction. I care about clarity, substance, and building with method.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="what-i-do" className="border-t border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2">
                <Wrench className="h-4 w-4 text-cyan-300" />
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">What I Do</p>
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                I work across development, project structure, and technical reasoning.
              </h2>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {pillars.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-[#0f1728] p-7 transition hover:-translate-y-1 hover:border-cyan-300/30"
                >
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <div className="flex items-center gap-2">
                  <FolderKanban className="h-4 w-4 text-cyan-300" />
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">Projects / Portfolio</p>
                </div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Selected projects that show how I think, build, and execute.
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-slate-400">
                Each project is presented as a structured problem-solving effort, designed to show not only the technologies involved, but also the reasoning, execution, and real context behind the work.
              </p>
            </div>

            <div className="mt-8 grid gap-6 xl:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.name}
                  className="flex h-full flex-col rounded-3xl border border-white/10 bg-[#0f1728] p-7 transition hover:-translate-y-1 hover:border-cyan-300/30"
                >
                  <h3 className="text-xl font-semibold text-white">{project.name}</h3>

                  <div className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
                    <div>
                      <p className="font-medium text-slate-100">Problem</p>
                      <p>{project.problem}</p>
                    </div>
                    <div>
                      <p className="font-medium text-slate-100">Solution</p>
                      <p>{project.solution}</p>
                    </div>
                    <div>
                      <p className="font-medium text-slate-100">Outcome</p>
                      <p>{project.outcome}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 pt-1">
                    <a
                      href={project.href}
                      className="inline-flex items-center text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
                    >
                      {project.cta} →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="border-t border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2">
                <Code2 className="h-4 w-4 text-cyan-300" />
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">Skills / Tech Stack</p>
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Structured technical competencies, not a random list of tools.
              </h2>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {skillGroups.map((group) => (
                <article key={group.title} className="rounded-3xl border border-white/10 bg-[#0f1728] p-7">
                  <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-cyan-300" />
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">Certifications</p>
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Certifications that strengthen my technical foundation and professional profile.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-300">
                This section highlights certifications that support my learning path and validate specific technical skills.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {certifications.map((item) => (
                <article key={item.name} className="rounded-3xl border border-white/10 bg-[#0f1728] p-7">
                  <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">{item.issuer}</p>
                  <h3 className="mt-3 text-xl font-semibold text-white">{item.name}</h3>
                  <p className="mt-1.5 text-sm text-slate-400">{item.year}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{item.note}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2">
                <BriefcaseBusiness className="h-4 w-4 text-cyan-300" />
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">Experience</p>
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Professional exposure grounded in financial systems and technical execution.
              </h2>
            </div>

            <div className="mt-8 space-y-5">
              {experience.map((item) => (
                <article key={item.title} className="rounded-3xl border border-white/10 bg-[#0f1728] p-7">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm text-cyan-300">{item.place}</p>
                    </div>
                    <p className="text-sm text-slate-400">{item.period}</p>
                  </div>
                  <p className="mt-4 max-w-4xl text-sm leading-6 text-slate-300">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="border-t border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-cyan-300" />
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">Education</p>
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Academic foundation shaped by engineering rigor and software-oriented thinking.
              </h2>
            </div>

            <div className="mt-8 space-y-5">
              {education.map((item) => (
                <article key={item.title} className="rounded-3xl border border-white/10 bg-[#0f1728] p-7">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm text-cyan-300">{item.place}</p>
                    </div>
                    <p className="text-sm text-slate-400">{item.period}</p>
                  </div>
                  <p className="mt-4 max-w-4xl text-sm leading-6 text-slate-300">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
            <div className="rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-400/10 via-white/[0.04] to-indigo-500/10 p-7 sm:p-8 lg:p-10">
              <div className="max-w-3xl">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-cyan-300" />
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">Contact</p>
                </div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Let&apos;s connect if you are building something serious, technical, or worth solving.
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-300">
                  Open to junior software engineering opportunities, selected freelance work, and technical collaborations.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <a
                  href="mailto:domeditommaso2004@gmail.com"
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Email</p>
                  <p className="mt-3 text-sm font-medium text-white">domeditommaso2004@gmail.com</p>
                </a>
                <a
                  href="https://www.linkedin.com/in/domenico-di-tommaso"
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">LinkedIn</p>
                  <p className="mt-3 text-sm font-medium text-white">Professional Profile</p>
                </a>
                <a
                  href="https://github.com/domedtms"
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">GitHub</p>
                  <p className="mt-3 text-sm font-medium text-white">Code & Projects</p>
                </a>
                <a
                  href="#"
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">CV</p>
                  <p className="mt-3 text-sm font-medium text-white">CV available on request</p>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© 2026 Domenico Di Tommaso. Built with clarity, structure, and intention.</p>
          <p>Software Engineering Student building real technical projects</p>
        </div>
      </footer>
    </div>
  );
}
