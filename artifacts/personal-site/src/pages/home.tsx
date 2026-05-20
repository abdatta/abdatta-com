import { motion, type Variants } from "framer-motion";
import { ArrowRight, ChevronRight, Mail, MapPin, Code2, Cpu, Wrench, Database, LineChart, MessageSquare, Briefcase, Building2, ExternalLink, Zap, Globe } from "lucide-react";
import { SiGithub } from "react-icons/si";
import headshot from "@assets/ChatGPT_Image_Apr_24,_2026,_03_56_07_PM_1779248386830.png";

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } }
};

const STAGGER: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
};

const HERO_FADE_UP: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT } }
};

const HERO_STAGGER: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } }
};

export default function Home() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">

      {/* 1. Hero */}
      <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden px-6 py-24 md:px-12 lg:px-24">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-violet-400/8 blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-cyan-400/5 blur-[80px]" />
        </div>

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left: text */}
            <motion.div initial="hidden" animate="visible" variants={HERO_STAGGER} className="space-y-7">
              <motion.div variants={HERO_FADE_UP} className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium tracking-wide">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>Engineer + MBA + AI Builder</span>
              </motion.div>

              <motion.h1 variants={HERO_FADE_UP} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                Building AI agents and product systems for{" "}
                <span className="text-primary italic font-serif font-medium">real-world workflows.</span>
              </motion.h1>

              <motion.p variants={HERO_FADE_UP} className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                I'm Abhishek Datta — a UCLA Anderson MBA candidate and former Microsoft/Adobe software engineer. I've built production systems at scale and AI tools across developer productivity, language learning, communication, and proposal workflows.
              </motion.p>

              <motion.div variants={HERO_FADE_UP} className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => scrollTo("projects")}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/25 transition-all hover:scale-105 hover:shadow-primary/40 active:scale-95"
                  data-testid="button-view-projects"
                >
                  View Projects
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollTo("contact")}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold border border-primary/20 transition-all hover:bg-primary/10 hover:border-primary/40"
                  data-testid="button-contact"
                >
                  Contact Me
                </button>
              </motion.div>

              <motion.div variants={HERO_FADE_UP} className="flex flex-wrap gap-3 pt-2">
                {["UCLA Anderson MBA", "Microsoft SWE", "IIT Kanpur", "AI Agent Builder"].map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs font-medium rounded-md bg-muted text-muted-foreground border border-border">
                    {tag}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center md:justify-end"
            >
              <div className="relative">
                <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-primary/30 via-violet-400/20 to-cyan-400/15 blur-xl" />
                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl shadow-primary/15">
                  <img
                    src={headshot}
                    alt="Abhishek Datta"
                    className="w-full h-full object-cover object-top"
                    data-testid="img-headshot"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-sm border border-border shadow-md text-xs font-mono text-muted-foreground flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-primary" />
                  Los Angeles, CA
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Credibility Snapshot */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-primary/5 via-violet-500/5 to-cyan-500/5 border-y border-primary/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER}
            className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16"
          >
            <motion.div variants={FADE_UP} className="space-y-3">
              <div className="text-primary font-mono text-xs tracking-widest uppercase font-bold mb-4">Background</div>
              <ul className="space-y-2.5 text-muted-foreground">
                {[
                  "UCLA Anderson MBA Candidate",
                  "Former Microsoft SWE (4+ yrs)",
                  "Former Adobe Engineer",
                  "IIT Kanpur B.Tech",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={FADE_UP} className="space-y-3">
              <div className="text-emerald-600 font-mono text-xs tracking-widest uppercase font-bold mb-4">Scale & Impact</div>
              <ul className="space-y-2.5 text-muted-foreground">
                {[
                  "125M+ users impacted via Word Web",
                  "1st place — Microsoft FHL Hackathon",
                  "750M annual transactions scaled",
                  "$1.5M/yr saved via TS migration",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 mt-0.5 shrink-0 text-emerald-500" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={FADE_UP} className="space-y-3">
              <div className="text-violet-600 font-mono text-xs tracking-widest uppercase font-bold mb-4">Core Stack</div>
              <div className="flex flex-wrap gap-2">
                {["TypeScript", "React", "Python", "Rust", "Node.js", "Playwright", "LangChain", "Claude"].map((s) => (
                  <span key={s} className="px-2 py-1 text-xs rounded-md bg-violet-50 text-violet-700 border border-violet-200 font-mono">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Featured AI and Product Builds */}
      <section id="projects" className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto space-y-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-3">Featured Builds</h2>
            <p className="text-xl text-muted-foreground max-w-2xl">Systems designed to automate friction, structure data, and enhance human workflows.</p>
          </motion.div>

          <div className="space-y-10">
            {/* Project 1: Highlighted — AI Playwright Copilot */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}
              className="group relative bg-gradient-to-br from-primary/5 via-primary/3 to-violet-500/5 rounded-2xl p-8 md:p-12 border border-primary/20 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/6 blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-violet-400/6 blur-3xl pointer-events-none" />
              <div className="relative z-10 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-mono font-bold uppercase tracking-wider border border-primary/20">
                    <Zap className="w-3 h-3" /> Featured Project
                  </span>
                  <span className="px-3 py-1 rounded-md bg-amber-50 text-amber-700 text-xs font-mono border border-amber-200">
                    Internal Microsoft
                  </span>
                </div>
                <h3 className="text-3xl font-bold">AI Playwright Copilot</h3>

                <div className="grid md:grid-cols-2 gap-8 pt-2">
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest">The Problem</h4>
                    <p className="text-foreground/80 leading-relaxed">Teams need reliable end-to-end tests, but writing them is slow, brittle, and blocks shipping velocity.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest">The Build</h4>
                    <p className="text-foreground/80 leading-relaxed">An LLM + RAG powered Playwright coding agent that generates TypeScript E2E tests from developer prompts via tool-calling and iterative validation against repo-specific helpers. <span className="font-semibold text-primary">Won 1st place at Microsoft FHL Hackathon.</span></p>
                  </div>
                </div>

                <div className="pt-6 border-t border-primary/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {["AI agents", "Playwright", "TypeScript", "RAG", "evals", "iterative repair"].map((tag) => (
                      <span key={tag} className="px-2.5 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium border border-primary/15">{tag}</span>
                    ))}
                  </div>
                  <div className="flex gap-4 text-sm font-semibold text-emerald-600 whitespace-nowrap">
                    <span>+22% coverage</span>
                    <span>+90% dev productivity</span>
                    <span>-30% regressions</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 2x2 project grid */}
            <div className="grid md:grid-cols-2 gap-8">

              {/* Project 2: TacNet */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}
                className="group bg-card rounded-2xl p-8 border border-border flex flex-col h-full hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-100 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-cyan-600 rounded-l-2xl" />
                <div className="pl-4 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-5">
                    <div>
                      <span className="text-xs font-mono text-cyan-600 uppercase tracking-wider font-bold">On-device AI</span>
                      <h3 className="text-2xl font-bold mt-1">TacNet</h3>
                    </div>
                    <a href="https://github.com/abdatta/tacnet-yc" target="_blank" rel="noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors p-1.5 rounded-lg hover:bg-muted"
                      data-testid="link-github-tacnet">
                      <SiGithub className="w-5 h-5" />
                    </a>
                  </div>
                  <div className="space-y-3 flex-grow text-sm text-muted-foreground">
                    <p><strong className="text-foreground">Problem:</strong> Critical communications fail without connectivity, latency guarantees, or absolute privacy.</p>
                    <p><strong className="text-foreground">Build:</strong> An on-device AI communications system for high-stakes environments — local-first, resilient, privacy-preserving.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-border">
                    {["On-device AI", "local-first", "privacy", "edge"].map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-cyan-50 text-cyan-700 border border-cyan-200 rounded text-xs">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Project 3: NihongoFlash */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}
                className="group bg-card rounded-2xl p-8 border border-border flex flex-col h-full hover:border-rose-300 hover:shadow-lg hover:shadow-rose-100 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-rose-400 to-rose-600 rounded-l-2xl" />
                <div className="pl-4 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-5">
                    <div>
                      <span className="text-xs font-mono text-rose-600 uppercase tracking-wider font-bold">EdTech</span>
                      <h3 className="text-2xl font-bold mt-1">NihongoFlash / KikiJLPT</h3>
                    </div>
                    <div className="flex gap-1.5">
                      <a href="https://github.com/abdatta/nihongo-flash" target="_blank" rel="noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors p-1.5 rounded-lg hover:bg-muted"
                        data-testid="link-github-nihongo">
                        <SiGithub className="w-5 h-5" />
                      </a>
                      <a href="https://github.com/abdatta/kiki-jlpt" target="_blank" rel="noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors p-1.5 rounded-lg hover:bg-muted"
                        data-testid="link-github-kiki">
                        <SiGithub className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <div className="space-y-3 flex-grow text-sm text-muted-foreground">
                    <p><strong className="text-foreground">Problem:</strong> Japanese language learning tools are often poorly designed for motivated beginners.</p>
                    <p><strong className="text-foreground">Build:</strong> EdTech tools for vocabulary practice, listening support, and JLPT-style learning with a beginner-friendly UX.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-border">
                    {["EdTech", "Language learning", "UX", "JLPT"].map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-rose-50 text-rose-700 border border-rose-200 rounded text-xs">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Project 4: WhatsApp Pulse */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}
                className="group bg-card rounded-2xl p-8 border border-border flex flex-col h-full hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-100 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-l-2xl" />
                <div className="pl-4 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-5">
                    <div>
                      <span className="text-xs font-mono text-emerald-600 uppercase tracking-wider font-bold">Consumer AI</span>
                      <h3 className="text-2xl font-bold mt-1">WhatsApp Pulse</h3>
                    </div>
                    <a href="https://github.com/abdatta/wapp-pulse" target="_blank" rel="noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors p-1.5 rounded-lg hover:bg-muted"
                      data-testid="link-github-wapp">
                      <SiGithub className="w-5 h-5" />
                    </a>
                  </div>
                  <div className="space-y-3 flex-grow text-sm text-muted-foreground">
                    <p><strong className="text-foreground">Problem:</strong> Messy inbound WhatsApp activity makes it hard to see what needs attention, which threads matter, and what was said about a topic.</p>
                    <p><strong className="text-foreground">Build:</strong> A private, local, read-only dashboard that organizes conversations, prioritizes active threads, and answers questions with message evidence.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-border">
                    {["personal inbox", "semantic search", "private AI", "read-only"].map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded text-xs">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Project 5: Kingmaker */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}
                className="group bg-card rounded-2xl p-8 border border-border flex flex-col h-full hover:border-violet-300 hover:shadow-lg hover:shadow-violet-100 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-violet-400 to-violet-600 rounded-l-2xl" />
                <div className="pl-4 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-5">
                    <div>
                      <span className="text-xs font-mono text-violet-600 uppercase tracking-wider font-bold">Workflow Automation</span>
                      <h3 className="text-2xl font-bold mt-1">Kingmaker</h3>
                    </div>
                    <a href="https://github.com/abdatta/kingmaker" target="_blank" rel="noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors p-1.5 rounded-lg hover:bg-muted"
                      data-testid="link-github-kingmaker">
                      <SiGithub className="w-5 h-5" />
                    </a>
                  </div>
                  <div className="space-y-3 flex-grow text-sm text-muted-foreground">
                    <p><strong className="text-foreground">Problem:</strong> Turning complex opportunities into structured, high-quality proposals takes enormous human effort.</p>
                    <p><strong className="text-foreground">Build:</strong> An AI proposal-generation agent that assembles context, drafts sections, and checks requirements automatically.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-border">
                    {["AI agents", "proposal generation", "enterprise AI"].map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-violet-50 text-violet-700 border border-violet-200 rounded text-xs">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Production Engineering Work */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-slate-50 via-background to-primary/3 border-y border-border">
        <div className="max-w-5xl mx-auto space-y-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-3">Production Engineering</h2>
            <p className="text-xl text-muted-foreground">Built inside real complex systems. Reliability and scale matter.</p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                icon: <Building2 className="w-5 h-5" />,
                iconColor: "text-blue-600 bg-blue-50 border-blue-200",
                dot: "bg-primary border-primary",
                date: "Sep 2022 – Jul 2025",
                title: "Software Engineer II, Word Web",
                sub: "Microsoft — Performance & Reliability",
                bullets: [
                  "Improved latency across top 100 actions for 125M+ users via browser profiling, DevTools traces, and targeted frontend optimizations — 15% perf gain, 23% monthly usage increase.",
                  "Re-architected real-time co-authoring stack with piece-trees, Redis caches, and in-memory optimization — 25% speed boost, -16% save failures across 750M annual transactions.",
                  "Built production automation infrastructure with feature-flag workflows and alerting — reduced production incidents by 20%.",
                ],
              },
              {
                icon: <Building2 className="w-5 h-5" />,
                iconColor: "text-blue-600 bg-blue-50 border-blue-200",
                dot: "bg-muted border-border",
                date: "Apr 2021 – Aug 2022",
                title: "Software Engineer, Word Web",
                sub: "Microsoft — Lists & Immersive Reader",
                bullets: [
                  "Built editor features in TypeScript, React, Redux, C#/.NET, and Rust/WASM — driving 15% user rating improvement across 10M+ daily interactions.",
                  "Spearheaded org-wide strict TypeScript null-check migration across 60+ engineers — eliminated 1,800+ runtime errors, saving an estimated $1.5M annually.",
                  "Launched Immersive Reader integration acquiring 250K+ new EDU customers; shipped Loop integration for 1.1M users.",
                ],
              },
              {
                icon: <Briefcase className="w-5 h-5" />,
                iconColor: "text-red-600 bg-red-50 border-red-200",
                dot: "bg-muted border-border",
                date: "Aug 2020 – Apr 2021",
                title: "Member of Technical Staff",
                sub: "Adobe Systems — AEM Forms",
                bullets: [
                  "Developed and shipped enterprise workflow features for 270K+ users — high-volume document and form automation using Java, jQuery, and TypeScript.",
                  "Contributed to PS5 launch infrastructure supporting 2M orders in 24 hours.",
                ],
              },
              {
                icon: <Globe className="w-5 h-5" />,
                iconColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
                dot: "bg-muted border-border",
                date: "Feb 2020 – Jul 2020",
                title: "Fullstack Software Engineer",
                sub: "Affable.ai — Influencer Analytics",
                bullets: [
                  "Built analytics pipeline processing 100K influencers via BullMQ, Google Pub/Sub, and Cassandra — helped secure a $200K client deal.",
                  "Reduced database costs 50% ($60K/year) by speeding up queries 10x.",
                ],
              },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={FADE_UP}
                className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className={`p-2.5 rounded-xl border ${item.iconColor} shrink-0`}>
                    {item.icon}
                  </div>
                  {i < 3 && <div className="w-0.5 flex-grow my-2 bg-gradient-to-b from-border to-transparent" />}
                </div>
                <div className="flex-1 pb-8">
                  <div className="font-mono text-xs text-muted-foreground mb-2">{item.date}</div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <div className="text-primary font-medium text-sm mb-4">{item.sub}</div>
                  <ul className="space-y-2">
                    {item.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Skills & Strengths */}
      <section className="py-28 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="mb-14">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-3">Skills & Strengths</h2>
            <p className="text-xl text-muted-foreground">Deep engineering foundations. Product and AI on top.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={STAGGER}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              {
                icon: <Cpu className="w-6 h-6" />,
                color: "text-violet-600 bg-violet-50 border-violet-200",
                accent: "from-violet-500/5 to-transparent",
                title: "AI & Agents",
                body: "AI agents, agentic workflows, evals, LLM-powered tools, RAG/context retrieval, on-device AI, prompting, LangChain, Claude Code, Codex, OpenClaw",
              },
              {
                icon: <Code2 className="w-6 h-6" />,
                color: "text-primary bg-primary/10 border-primary/20",
                accent: "from-primary/5 to-transparent",
                title: "Product Engineering",
                body: "TypeScript, JavaScript, React, Angular, Node.js, Rust/WASM, C#/.NET, Java, Python, Go — frontend systems and UX-minded development",
              },
              {
                icon: <Wrench className="w-6 h-6" />,
                color: "text-amber-600 bg-amber-50 border-amber-200",
                accent: "from-amber-500/5 to-transparent",
                title: "Developer Tools",
                body: "Playwright, test automation, repo-aware tooling, TypeScript migration, validation loops, browser performance profiling, Kusto",
              },
              {
                icon: <Database className="w-6 h-6" />,
                color: "text-cyan-600 bg-cyan-50 border-cyan-200",
                accent: "from-cyan-500/5 to-transparent",
                title: "Data & Infrastructure",
                body: "MongoDB, Cassandra, Elasticsearch, Postgres, Neo4j, Redis, BullMQ, Google Pub/Sub, Kusto",
              },
              {
                icon: <LineChart className="w-6 h-6" />,
                color: "text-emerald-600 bg-emerald-50 border-emerald-200",
                accent: "from-emerald-500/5 to-transparent",
                title: "Product & Business",
                body: "Product strategy, user research, A/B testing, telemetry-driven decisions, cross-functional collaboration, startup execution, MBA coursework",
              },
            ].map((skill) => (
              <motion.div key={skill.title} variants={FADE_UP}
                className={`relative bg-gradient-to-br ${skill.accent} bg-card rounded-2xl p-6 border border-border hover:shadow-md transition-all duration-300 overflow-hidden`}>
                <div className={`inline-flex p-2.5 rounded-xl border ${skill.color} mb-4`}>
                  {skill.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{skill.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{skill.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. Experience Timeline */}
      <section className="py-28 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-muted/30 to-background border-t border-border">
        <div className="max-w-4xl mx-auto space-y-14">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-3">Experience</h2>
            <p className="text-xl text-muted-foreground">The journey so far.</p>
          </motion.div>

          <div className="space-y-10">
            {[
              {
                company: "UCLA Anderson",
                role: "M.B.A. — Technology Leadership & AI Specialization",
                date: "Aug 2025 – Present",
                desc: "UCLA Anderson Merit Fellowship and Forte Ally Fellowship (80%). VP of Enterprise Relations, AnderTech.",
                color: "bg-blue-500",
              },
              {
                company: "Microsoft",
                role: "Software Engineer II — Performance & Reliability, Word Web",
                date: "Sep 2022 – Jul 2025",
                desc: "Built across Word Web performance, co-authoring reliability, experimentation systems, and AI-powered developer tooling.",
                color: "bg-primary",
              },
              {
                company: "Microsoft",
                role: "Software Engineer — Lists & Immersive Reader, Word Web",
                date: "Apr 2021 – Aug 2022",
                desc: "Built editor features, shipped Immersive Reader and Loop integration, led org-wide TypeScript migration.",
                color: "bg-primary",
              },
              {
                company: "Adobe Systems",
                role: "Member of Technical Staff — AEM Forms",
                date: "Aug 2020 – Apr 2021",
                desc: "Shipped enterprise forms features, contributed to PlayStation 5 launch infrastructure.",
                color: "bg-red-500",
              },
              {
                company: "Affable.ai",
                role: "Fullstack Software Engineer — Influencer Analytics",
                date: "Feb 2020 – Jul 2020",
                desc: "Built analytics pipeline and dashboard integrations.",
                color: "bg-emerald-500",
              },
              {
                company: "IIT Kanpur",
                role: "B.Tech, Electrical Engineering",
                date: "Jul 2016 – Jul 2020",
                desc: "Lead vocalist at Music Club. Head of Tech, Student Executive Committee — built automation saving $20K/year.",
                color: "bg-amber-500",
              },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={FADE_UP}
                className="flex gap-5 md:gap-8 group">
                <div className="flex flex-col items-center pt-1.5">
                  <div className={`w-3 h-3 rounded-full ${item.color} shrink-0 shadow-sm`} />
                  {i < 5 && <div className="w-0.5 flex-grow mt-2 bg-gradient-to-b from-border to-transparent" />}
                </div>
                <div className="flex-1 pb-8 space-y-1">
                  <div className="font-mono text-xs text-muted-foreground">{item.date}</div>
                  <h3 className="text-lg font-bold text-foreground">{item.company}</h3>
                  <div className="text-primary font-medium text-sm">{item.role}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed pt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Career Direction & 8. Personal */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-primary/5 via-violet-500/4 to-background border-y border-primary/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest font-bold">
              <Zap className="w-4 h-4" /> Where I'm headed
            </div>
            <h2 className="text-2xl font-bold tracking-tight">Open to the right opportunity</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm focused on AI products that turn messy, high-friction workflows into structured, useful systems. The areas I'm most interested in are AI agents, developer tooling, productivity, language learning, and workflow automation.
              </p>
              <p>
                Currently exploring AI product, product engineering, technical PM, and founder's office opportunities where engineering depth and product judgment both matter.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {["AI Product", "Product Engineering", "Technical PM", "Founder's Office"].map((role) => (
                <span key={role} className="px-3 py-1.5 text-xs font-medium rounded-lg bg-primary/10 text-primary border border-primary/20">{role}</span>
              ))}
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-rose-500 uppercase tracking-widest font-bold">
              <MessageSquare className="w-4 h-4" /> Beyond the build
            </div>
            <h2 className="text-2xl font-bold tracking-tight">The human behind the code</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Outside work, I'm usually learning Japanese, singing, trekking, or thinking about stories involving time travel and emotional stakes. Originally from Kolkata, India.
              </p>
              <blockquote className="border-l-4 border-primary/30 pl-4 text-foreground italic font-medium">
                "A lot of my work comes back to one theme: making powerful tools easier for more people to access."
              </blockquote>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Singing", "Trekking", "Learning Japanese", "Time-travel stories"].map((interest) => (
                <span key={interest} className="px-3 py-1.5 text-xs font-medium rounded-lg bg-rose-50 text-rose-600 border border-rose-200">{interest}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 9. Contact */}
      <section id="contact" className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[120px]" />
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}
          className="max-w-2xl mx-auto space-y-8 text-center relative z-10">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
            <MessageSquare className="w-7 h-7 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Let's talk</h2>
          <p className="text-xl text-muted-foreground">
            Want to talk AI agents, product engineering, developer tools, education, or early-stage ideas? I'd love to connect.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a href="mailto:abdatta1998@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:scale-105 hover:shadow-primary/40 transition-all"
              data-testid="link-email">
              <Mail className="w-4 h-4" />
              abdatta1998@gmail.com
            </a>
            <div className="flex justify-center gap-3">
              <a href="https://linkedin.com/in/abdatta" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-card border border-border font-semibold hover:border-primary/40 hover:bg-primary/5 transition-all"
                data-testid="link-linkedin">
                <ExternalLink className="w-4 h-4" />
                LinkedIn
              </a>
              <a href="https://github.com/abdatta" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-card border border-border font-semibold hover:border-primary/40 hover:bg-primary/5 transition-all"
                data-testid="link-github">
                <SiGithub className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
        <p>© {new Date().getFullYear()} Abhishek Datta · Built for real-world workflows.</p>
      </footer>
    </div>
  );
}
