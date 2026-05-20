import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Download, Github, Linkedin, Mail, MapPin, Code2, Cpu, Wrench, Database, LineChart, MessageSquare, Briefcase, Building2 } from "lucide-react";
import { SiGithub } from "react-icons/si";

const FADE_UP = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

const STAGGER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
};

const HERO_FADE_UP = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }
};

const HERO_STAGGER = {
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
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden px-6 py-24 md:px-12 lg:px-24">
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
        <div className="max-w-5xl mx-auto w-full relative z-10">
          <motion.div initial="hidden" animate="visible" variants={HERO_STAGGER} className="space-y-8">
            <motion.div variants={HERO_FADE_UP} className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Engineer + MBA + AI Builder</span>
            </motion.div>
            
            <motion.h1 variants={HERO_FADE_UP} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[1.1]">
              Building AI agents and product systems for <span className="text-primary italic font-serif font-medium">real-world workflows.</span>
            </motion.h1>

            <motion.div variants={HERO_FADE_UP} className="max-w-2xl">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                I'm Abhishek Datta — a UCLA Anderson MBA candidate and former Microsoft/Adobe software engineer. I've built production systems at scale and AI tools across developer productivity, language learning, communication, and proposal workflows.
              </p>
            </motion.div>

            <motion.div variants={HERO_FADE_UP} className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={() => scrollTo("projects")}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-transform hover:scale-105 active:scale-95"
                data-testid="button-view-projects"
              >
                View Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <button 
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium transition-colors hover:bg-secondary/80"
                data-testid="button-contact"
              >
                Contact Me
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Credibility Snapshot */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-card border-y border-border">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
          >
            <motion.div variants={FADE_UP} className="space-y-3">
              <div className="text-primary font-mono text-sm tracking-wider uppercase">Background</div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start"><ChevronRight className="w-5 h-5 mr-2 shrink-0 text-primary/50" /> UCLA Anderson MBA Candidate</li>
                <li className="flex items-start"><ChevronRight className="w-5 h-5 mr-2 shrink-0 text-primary/50" /> Former Microsoft SWE (4+ yrs)</li>
                <li className="flex items-start"><ChevronRight className="w-5 h-5 mr-2 shrink-0 text-primary/50" /> Former Adobe SWE</li>
                <li className="flex items-start"><ChevronRight className="w-5 h-5 mr-2 shrink-0 text-primary/50" /> IIT Kanpur B.Tech</li>
              </ul>
            </motion.div>

            <motion.div variants={FADE_UP} className="space-y-3">
              <div className="text-primary font-mono text-sm tracking-wider uppercase">Scale & Impact</div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start"><ChevronRight className="w-5 h-5 mr-2 shrink-0 text-primary/50" /> 125M+ users impacted via Word Web perf improvements</li>
                <li className="flex items-start"><ChevronRight className="w-5 h-5 mr-2 shrink-0 text-primary/50" /> 1st place at Microsoft FHL Hackathon (AI Copilot)</li>
                <li className="flex items-start"><ChevronRight className="w-5 h-5 mr-2 shrink-0 text-primary/50" /> 750M annual transactions scaled</li>
              </ul>
            </motion.div>

            <motion.div variants={FADE_UP} className="space-y-3">
              <div className="text-primary font-mono text-sm tracking-wider uppercase">Core Stack</div>
              <p className="text-muted-foreground leading-relaxed">
                TypeScript, React, Node.js, Rust, Python, Playwright, LangChain, Claude Code
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Featured AI and Product Builds */}
      <section id="projects" className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto space-y-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Featured Builds</h2>
            <p className="text-xl text-muted-foreground max-w-2xl">Systems designed to automate friction, structure data, and enhance human workflows.</p>
          </motion.div>

          <div className="space-y-12">
            {/* Project 1: Highlighted */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}
              className="group relative bg-card rounded-2xl p-8 md:p-12 border border-primary/20 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Code2 className="w-48 h-48" />
              </div>
              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-mono font-bold uppercase tracking-wider">
                  Internal Microsoft Project
                </div>
                <h3 className="text-3xl font-bold">AI Playwright Copilot</h3>
                
                <div className="grid md:grid-cols-2 gap-8 pt-4">
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-widest">The Problem</h4>
                    <p className="text-foreground leading-relaxed">Teams need reliable end-to-end tests, but writing them is slow, brittle, and blocks shipping velocity.</p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-widest">The Build</h4>
                    <p className="text-foreground leading-relaxed">An LLM + RAG powered Playwright coding agent that generates TypeScript E2E tests from developer prompts. It uses tool-calling and iterative validation against repo-specific helpers. <span className="font-semibold text-primary">Won 1st place at Microsoft FHL Hackathon.</span></p>
                  </div>
                </div>

                <div className="pt-6 border-t border-border mt-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {["AI agents", "Playwright", "TypeScript", "evals", "RAG", "iterative repair"].map(tag => (
                        <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground rounded text-sm">{tag}</span>
                      ))}
                    </div>
                    <div className="text-sm font-medium text-muted-foreground">
                      Impact: +22% cvg / +90% dev prod / -30% regressions
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Project 2 */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="bg-card rounded-2xl p-8 border border-border flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold">TacNet</h3>
                  <a href="https://github.com/abdatta/tacnet-yc" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                    <SiGithub className="w-6 h-6" />
                  </a>
                </div>
                <div className="space-y-4 flex-grow">
                  <p className="text-muted-foreground"><strong className="text-foreground font-medium">Problem:</strong> Critical communications in high-stakes environments fail without connectivity, latency guarantees, or absolute privacy.</p>
                  <p className="text-muted-foreground"><strong className="text-foreground font-medium">Build:</strong> An on-device AI communications system for high-stakes environments built local-first for resilience.</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-border">
                  {["On-device AI", "local-first", "privacy"].map(tag => (
                    <span key={tag} className="px-2 py-1 bg-secondary/50 text-secondary-foreground rounded text-xs">{tag}</span>
                  ))}
                </div>
              </motion.div>

              {/* Project 3 */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="bg-card rounded-2xl p-8 border border-border flex flex-col h-full">
                <h3 className="text-2xl font-bold mb-6">Kingmaker</h3>
                <div className="space-y-4 flex-grow">
                  <p className="text-muted-foreground"><strong className="text-foreground font-medium">Problem:</strong> Turning complex opportunities into structured, high-quality proposals takes enormous human effort.</p>
                  <p className="text-muted-foreground"><strong className="text-foreground font-medium">Build:</strong> An AI proposal-generation agent that helps teams assemble context, draft sections, and check requirements.</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-border">
                  {["AI agents", "proposal generation", "enterprise AI"].map(tag => (
                    <span key={tag} className="px-2 py-1 bg-secondary/50 text-secondary-foreground rounded text-xs">{tag}</span>
                  ))}
                </div>
              </motion.div>

              {/* Project 4 */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="bg-card rounded-2xl p-8 border border-border flex flex-col h-full">
                <h3 className="text-2xl font-bold mb-6">WhatsApp AI Layer</h3>
                <div className="space-y-4 flex-grow">
                  <p className="text-muted-foreground"><strong className="text-foreground font-medium">Problem:</strong> WhatsApp is a serious work tool but lacks organization, search, and intelligence.</p>
                  <p className="text-muted-foreground"><strong className="text-foreground font-medium">Build:</strong> An AI layer that organizes chats into threads, surfaces insights, and supports scheduling via natural language.</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-border">
                  {["messaging intelligence", "workflow automation"].map(tag => (
                    <span key={tag} className="px-2 py-1 bg-secondary/50 text-secondary-foreground rounded text-xs">{tag}</span>
                  ))}
                </div>
              </motion.div>

              {/* Project 5 */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="bg-card rounded-2xl p-8 border border-border flex flex-col h-full">
                <h3 className="text-2xl font-bold mb-6">NihongoFlash</h3>
                <div className="space-y-4 flex-grow">
                  <p className="text-muted-foreground"><strong className="text-foreground font-medium">Problem:</strong> Japanese language learning tools are often poorly designed for motivated beginners.</p>
                  <p className="text-muted-foreground"><strong className="text-foreground font-medium">Build:</strong> EdTech tools designed around vocabulary practice, beginner-friendly UX, and JLPT-style learning.</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-border">
                  {["EdTech", "Language learning", "UX design"].map(tag => (
                    <span key={tag} className="px-2 py-1 bg-secondary/50 text-secondary-foreground rounded text-xs">{tag}</span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Production Engineering Work */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-muted/30 border-y border-border">
        <div className="max-w-4xl mx-auto space-y-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Production Engineering</h2>
            <p className="text-xl text-muted-foreground">Built inside real complex systems. Reliability and scale matter.</p>
          </motion.div>

          <div className="space-y-16 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            
            {/* Microsoft Role 1 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={FADE_UP} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-5 h-5 rounded-full border border-primary bg-background shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow shadow-primary/20"></div>
              <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] bg-card p-6 rounded-xl border border-border shadow-sm">
                <div className="flex items-center space-x-3 mb-2">
                  <Building2 className="w-5 h-5 text-[#00a4ef]" />
                  <span className="font-mono text-sm text-muted-foreground">Sep 2022 – Jul 2025</span>
                </div>
                <h3 className="text-xl font-bold">Software Engineer II, Word Web</h3>
                <h4 className="text-primary font-medium text-sm mb-4">Performance & Reliability</h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>• Improved latency across top 100 actions for 125M+ users via browser profiling, resulting in 15% perf gain.</li>
                  <li>• Re-architected real-time co-authoring stack using piece-trees and Redis, boosting speed by 25% across 750M annual transactions.</li>
                  <li>• Built production automation and feature-flag infrastructure, reducing incidents by 20%.</li>
                </ul>
              </div>
            </motion.div>

            {/* Microsoft Role 2 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={FADE_UP} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-5 h-5 rounded-full border border-border bg-background shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
              <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] bg-card p-6 rounded-xl border border-border shadow-sm">
                <div className="flex items-center space-x-3 mb-2">
                  <Building2 className="w-5 h-5 text-[#00a4ef]" />
                  <span className="font-mono text-sm text-muted-foreground">Apr 2021 – Aug 2022</span>
                </div>
                <h3 className="text-xl font-bold">Software Engineer, Word Web</h3>
                <h4 className="text-primary font-medium text-sm mb-4">Lists & Immersive Reader</h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>• Shipped editor features (TS, React, Rust/WASM) driving 15% user rating improvement.</li>
                  <li>• Spearheaded org-wide strict TS null checks migration across 60+ engineers, eliminating 1,800+ runtime errors.</li>
                  <li>• Launched Immersive Reader and Loop integrations for millions of users.</li>
                </ul>
              </div>
            </motion.div>

            {/* Adobe Role */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={FADE_UP} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-5 h-5 rounded-full border border-border bg-background shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
              <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] bg-card p-6 rounded-xl border border-border shadow-sm">
                <div className="flex items-center space-x-3 mb-2">
                  <Briefcase className="w-5 h-5 text-[#ff0000]" />
                  <span className="font-mono text-sm text-muted-foreground">Aug 2020 – Apr 2021</span>
                </div>
                <h3 className="text-xl font-bold">Member of Technical Staff</h3>
                <h4 className="text-primary font-medium text-sm mb-4">AEM Forms</h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>• Developed enterprise workflow features for 70K+ users.</li>
                  <li>• Contributed to high-scale signup/order flows for the PS5 launch (2M orders/24hrs).</li>
                </ul>
              </div>
            </motion.div>

            {/* Affable.ai */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={FADE_UP} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-5 h-5 rounded-full border border-border bg-background shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
              <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] bg-card p-6 rounded-xl border border-border shadow-sm">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="font-mono text-sm text-muted-foreground">Feb 2020 – Jul 2020</span>
                </div>
                <h3 className="text-xl font-bold">Fullstack Software Engineer</h3>
                <h4 className="text-primary font-medium text-sm mb-4">Affable.ai</h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>• Designed scraping pipelines processing 100K influencers via BullMQ/Cassandra.</li>
                  <li>• Reduced DB costs by 50% through 10x query optimizations.</li>
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. Skills & Strengths */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={STAGGER} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            
            <motion.div variants={FADE_UP}>
              <div className="flex items-center space-x-3 mb-4 text-primary">
                <Cpu className="w-6 h-6" />
                <h3 className="font-bold text-lg">AI & Agents</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                AI agents, agentic workflows, evals, LLM-powered tools, RAG/context retrieval, on-device AI, prompting, LangChain, Claude Code, Codex, OpenClaw
              </p>
            </motion.div>

            <motion.div variants={FADE_UP}>
              <div className="flex items-center space-x-3 mb-4 text-primary">
                <Code2 className="w-6 h-6" />
                <h3 className="font-bold text-lg">Product Engineering</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                TypeScript, JavaScript, React, Angular, Node.js, Rust/WASM, C#/.NET, Java, Python, Go, frontend systems, UX-minded development
              </p>
            </motion.div>

            <motion.div variants={FADE_UP}>
              <div className="flex items-center space-x-3 mb-4 text-primary">
                <Wrench className="w-6 h-6" />
                <h3 className="font-bold text-lg">Developer Tools</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Playwright, test automation, repo-aware tooling, TypeScript migration, validation loops, browser performance profiling, Kusto
              </p>
            </motion.div>

            <motion.div variants={FADE_UP}>
              <div className="flex items-center space-x-3 mb-4 text-primary">
                <Database className="w-6 h-6" />
                <h3 className="font-bold text-lg">Data & Infrastructure</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                MongoDB, Cassandra, Elasticsearch, Postgres, Neo4j, Redis, BullMQ, Google Pub/Sub
              </p>
            </motion.div>

            <motion.div variants={FADE_UP}>
              <div className="flex items-center space-x-3 mb-4 text-primary">
                <LineChart className="w-6 h-6" />
                <h3 className="font-bold text-lg">Product & Business</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Product strategy, user research, A/B testing, telemetry-driven decisions, cross-functional collaboration, startup execution, MBA coursework
              </p>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* 7. Experience Timeline */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto space-y-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Experience</h2>
            <p className="text-xl text-muted-foreground">The journey so far.</p>
          </motion.div>

          <div className="space-y-12">
            {[
              {
                company: "UCLA Anderson",
                role: "M.B.A. — Technology Leadership & AI Specialization",
                date: "Aug 2025 – Present",
                desc: "UCLA Anderson Merit Fellowship and Forte Ally Fellowship (80%). VP of Enterprise Relations, AnderTech."
              },
              {
                company: "Microsoft",
                role: "Software Engineer II — Performance & Reliability, Word Web",
                date: "Sep 2022 – Jul 2025",
                desc: "Built across Word Web performance, co-authoring reliability, experimentation systems, and AI-powered developer tooling."
              },
              {
                company: "Microsoft",
                role: "Software Engineer — Lists & Immersive Reader, Word Web",
                date: "Apr 2021 – Aug 2022",
                desc: "Built editor features, shipped Immersive Reader and Loop integration, led org-wide TypeScript migration."
              },
              {
                company: "Adobe Systems",
                role: "Member of Technical Staff — AEM Forms",
                date: "Aug 2020 – Apr 2021",
                desc: "Shipped enterprise forms features, contributed to PlayStation 5 launch infrastructure."
              },
              {
                company: "Affable.ai",
                role: "Fullstack Software Engineer — Influencer Analytics",
                date: "Feb 2020 – Jul 2020",
                desc: "Built analytics pipeline and dashboard integrations."
              },
              {
                company: "IIT Kanpur",
                role: "B.Tech, Electrical Engineering",
                date: "Jul 2016 – Jul 2020",
                desc: "Lead vocalist at Music Club. Head of Tech, Student Executive Committee — built automation saving $20K/year."
              }
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={FADE_UP} className="flex flex-col md:flex-row gap-4 md:gap-8 group">
                <div className="md:w-1/4 shrink-0">
                  <div className="font-mono text-sm text-muted-foreground pt-1">{item.date}</div>
                </div>
                <div className="md:w-3/4 space-y-2 pb-8 border-b border-border group-last:border-0 group-last:pb-0">
                  <h3 className="text-xl font-bold text-foreground">{item.company}</h3>
                  <h4 className="text-primary font-medium">{item.role}</h4>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Career Direction & 8. Personal */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-card border-y border-border">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">Where I'm headed</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm focused on AI products that turn messy, high-friction workflows into structured, useful systems. The areas I'm most interested in are AI agents, developer tooling, productivity, language learning, and workflow automation.
              </p>
              <p>
                Currently exploring AI product, product engineering, technical PM, and founder's office opportunities where engineering depth and product judgment both matter.
              </p>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">Beyond the build</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Outside work, I'm usually learning Japanese, singing, trekking, or thinking about stories involving time travel and emotional stakes. Originally from Kolkata, India.
              </p>
              <p className="font-medium text-foreground italic">
                "A lot of my work comes back to one theme: making powerful tools easier for more people to access."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 9. Contact */}
      <section id="contact" className="py-32 px-6 md:px-12 lg:px-24 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="max-w-2xl mx-auto space-y-8">
          <MessageSquare className="w-12 h-12 mx-auto text-primary opacity-80" />
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Let's talk</h2>
          <p className="text-xl text-muted-foreground">
            Want to talk AI agents, product engineering, developer tools, education, or early-stage ideas? I'd love to connect.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 pt-8">
            <a href="mailto:abdatta1998@gmail.com" className="inline-flex items-center text-foreground hover:text-primary transition-colors font-medium">
              <Mail className="w-5 h-5 mr-2" />
              abdatta1998@gmail.com
            </a>
            <a href="https://linkedin.com/in/abdatta" target="_blank" rel="noreferrer" className="inline-flex items-center text-foreground hover:text-primary transition-colors font-medium">
              <Linkedin className="w-5 h-5 mr-2" />
              linkedin.com/in/abdatta
            </a>
            <a href="https://github.com/abdatta" target="_blank" rel="noreferrer" className="inline-flex items-center text-foreground hover:text-primary transition-colors font-medium">
              <SiGithub className="w-5 h-5 mr-2" />
              github.com/abdatta
            </a>
          </div>
        </motion.div>
      </section>

      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
        <p>© {new Date().getFullYear()} Abhishek Datta. Building for the future.</p>
      </footer>
    </div>
  );
}
