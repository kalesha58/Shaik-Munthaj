"use client";

import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { profile } from "@/data/profile";
import { education } from "@/data/education";
import {
  ArrowRight,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  BarChart2,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/* ── helper: animation style with delay ─────────────────── */
const anim = (delay: number): React.CSSProperties => ({
  animationDelay: `${delay}ms`,
});

/* ── Glass floating card ─────────────────────────────────── */
function GlassCard({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`absolute rounded-2xl border border-white/60 bg-white/80 shadow-[0_8px_40px_rgba(15,23,42,0.12)] backdrop-blur-md ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

/* ── Right photo panel ───────────────────────────────────── */
function HeroPhoto() {
  const msc = education[0];
  return (
    <div className="relative h-full w-full">
      {/* Photo */}
      <Image
        src="/images/munthaj.jpeg"
        alt="Shaik Munthaj – Data Analyst & Machine Learning Specialist"
        fill
        priority
        className="object-cover object-center"
        sizes="45vw"
      />

      {/* Left-edge fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-40"
        style={{
          background:
            "linear-gradient(to right, #f7f8fa 0%, rgba(247,248,250,0.6) 55%, transparent 100%)",
        }}
      />
      {/* Top fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-24"
        style={{ background: "linear-gradient(to bottom, #f7f8fa 0%, transparent 100%)" }}
      />
      {/* Bottom fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
        style={{ background: "linear-gradient(to top, #f7f8fa 0%, transparent 100%)" }}
      />

      {/* ── Card 1: Better Decisions With Data ── */}
      <GlassCard
        className="hero-anim-left left-4 top-[4%] z-10 w-52 p-4"
        style={anim(700)}
      >
        <div className="mb-2.5 flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10">
          <BarChart2 size={17} className="text-primary" />
        </div>
        <p className="text-[13px] font-bold leading-snug text-dark">
          Better Decisions With Data
        </p>
        <p className="mt-1 text-[11px] leading-snug text-slate">
          Transforming complex data into real-world solutions.
        </p>
      </GlassCard>

      {/* ── Card 2: MSc Education ── */}
      <GlassCard
        className="hero-anim-left bottom-[16%] left-4 z-10 w-60 p-4"
        style={anim(1100)}
      >
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10">
            <GraduationCap size={17} className="text-primary" />
          </div>
          <div>
            <p className="text-[12px] font-bold leading-snug text-dark">
              MSc in Applied Modelling &amp; Quantitative Methods
            </p>
            <p className="mt-1 text-[11px] font-semibold text-primary">
              {msc.institution}
            </p>
            <p className="text-[10px] text-slate/80">{msc.period}</p>
          </div>
        </div>
      </GlassCard>

      {/* ── Card 4: Quote ── */}
      <GlassCard
        className="hero-anim-right bottom-[16%] right-6 z-10 w-52 p-4"
        style={{
          ...anim(1300),
          background: "rgba(17,24,39,0.88)",
        }}
      >
        <p className="mb-1 text-2xl leading-none" style={{ color: "#60a5fa" }}>
          &ldquo;
        </p>
        <p className="text-[11px] leading-relaxed text-white/90">
          Data is not just numbers — it&apos;s a story waiting to be understood.
        </p>
      </GlassCard>
    </div>
  );
}

/* ── Main Hero ───────────────────────────────────────────── */
export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-64px)] overflow-hidden bg-background"
    >
      {/* Dot grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          opacity: 0.3,
        }}
      />

      {/* ══════════════════════════════════════════════════════
          MOBILE HERO VIEW (< lg)
          ══════════════════════════════════════════════════════ */}
      <div className="relative z-10 flex w-full flex-col px-4 pt-3 pb-8 lg:hidden">
        
        {/* Top-right script flourish */}
        <div className="flex justify-end pr-1 pt-1">
          <div className="flex flex-col items-center rotate-[-7deg] select-none">
            <span
              className="text-lg font-bold text-slate-400 leading-tight"
              style={{ fontFamily: "var(--font-caveat), cursive, sans-serif" }}
            >
              Data Creates<br />Opportunities
            </span>
            <svg
              className="w-24 h-3.5 text-sky-300 -mt-1 opacity-85"
              viewBox="0 0 120 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 14C35 4 85 3 117 12M15 17C45 10 75 9 105 15"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Top Hero Row: Left text + Right organic photo */}
        <div className="relative -mt-4">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <div className="h-0.5 w-6 rounded-full bg-primary" />
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
              DATA ANALYST | MACHINE LEARNING
            </p>
          </div>

          {/* Two-column Hero Top Layout */}
          <div className="mt-2.5 grid grid-cols-12 items-start gap-1">
            
            {/* Left Column: Headline, Bio, Location */}
            <div className="col-span-7 pr-1">
              <h1 className="text-[1.85rem] font-extrabold leading-[1.12] tracking-tight text-dark sm:text-3xl">
                Turning<br />
                Data Into<br />
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #1d4ed8 0%, #2563eb 40%, #0ea5e9 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Meaningful<br />Insights
                </span>
              </h1>

              <p className="mt-3 text-[11px] leading-relaxed text-slate-600 sm:text-xs">
                Data Analyst and Machine Learning Specialist passionate about using
                data, analytical methods, and modern tools to solve real-world
                problems and create measurable impact.
              </p>

              <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                <MapPin size={13} className="shrink-0 text-primary" />
                <span>{profile.location}</span>
              </div>
            </div>

            {/* Right Column: Organic Curved Backdrop + Photo + Quote Badge */}
            <div className="col-span-5 relative flex justify-end">
              {/* Subtle dot matrix */}
              <div
                aria-hidden
                className="pointer-events-none absolute -left-4 top-6 h-28 w-28 opacity-40 z-0"
                style={{
                  backgroundImage: "radial-gradient(circle, #3b82f6 1.5px, transparent 1.5px)",
                  backgroundSize: "12px 12px",
                }}
              />

              {/* Curved backdrop container */}
              <div className="relative w-full aspect-[0.72] max-w-[190px] overflow-hidden rounded-tl-[100px] rounded-bl-[80px] rounded-tr-3xl rounded-br-2xl bg-gradient-to-br from-blue-100/90 via-sky-50 to-indigo-50/50 shadow-md">
                <Image
                  src="/images/munthaj1.png"
                  alt="Shaik Munthaj – Data Analyst & Machine Learning Specialist"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="45vw"
                />
              </div>

              {/* Floating Quote Card */}
              <div className="absolute -bottom-2 -left-3 right-0 z-20 rounded-xl border border-white/80 bg-white/95 p-2 shadow-lg backdrop-blur-md">
                <div className="flex items-start gap-1.5">
                  <span className="text-sm font-black leading-none text-primary">“</span>
                  <div>
                    <p className="text-[9.5px] font-bold leading-tight text-dark">
                      Turning data into<br />meaningful insights
                    </p>
                    <div className="mt-1 h-0.5 w-5 rounded-full bg-primary" />
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Action Buttons: View My Projects & Download Resume */}
          <div className="mt-6 grid grid-cols-2 gap-2.5 sm:gap-3">
            <Link
              href="#projects"
              className="flex items-center justify-center gap-1.5 rounded-xl bg-primary px-3 py-3 text-xs font-semibold text-white shadow-md shadow-primary/25 transition-all hover:bg-[#1e40af] active:scale-[0.98]"
            >
              <span>View My Projects</span>
              <ArrowRight size={14} />
            </Link>
            <Link
              href={profile.resumePath}
              download
              className="flex items-center justify-center gap-1.5 rounded-xl border-2 border-primary/70 bg-white px-3 py-3 text-xs font-semibold text-primary shadow-sm transition-all hover:bg-primary/5 active:scale-[0.98]"
            >
              <Download size={14} />
              <span>Download Resume</span>
            </Link>
          </div>

          {/* 4 Stats Card in Mobile */}
          <div className="mt-4 rounded-2xl border border-slate-100 bg-white p-3.5 shadow-sm">
            <div className="grid grid-cols-4 divide-x divide-slate-100 text-center">
              <div className="px-1">
                <span className="block text-lg font-black text-primary">13</span>
                <span className="block text-[9px] sm:text-[10.5px] font-medium text-slate-500 leading-tight mt-1">
                  Years of Data Analyzed
                </span>
              </div>
              <div className="px-1">
                <span className="block text-lg font-black text-primary">47</span>
                <span className="block text-[9px] sm:text-[10.5px] font-medium text-slate-500 leading-tight mt-1">
                  Municipal Managers Studied
                </span>
              </div>
              <div className="px-1">
                <span className="block text-lg font-black text-primary">610</span>
                <span className="block text-[9px] sm:text-[10.5px] font-medium text-slate-500 leading-tight mt-1">
                  Observations Processed
                </span>
              </div>
              <div className="px-1">
                <span className="block text-lg font-black text-primary">0.803</span>
                <span className="block text-[9px] sm:text-[10.5px] font-medium text-slate-500 leading-tight mt-1">
                  Best Model R² Score
                </span>
              </div>
            </div>
          </div>

          {/* Tech Stack Pills Carousel */}
          <div className="mt-3.5 flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
            {/* Python */}
            <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50/70 px-3 py-1.5 shadow-xs">
              <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24">
                <path fill="#3776AB" d="M11.91 0c-5.46 0-5.11 2.37-5.11 2.37l.01 2.46h5.2v.74H4.82S1.5 5.2 1.5 10.68c0 5.48 2.89 5.27 2.89 5.27h1.72v-2.43s-.1-2.89 2.84-2.89h4.88s2.74.05 2.74-2.69V3.08S16.97 0 11.91 0zm-2.8 1.48a.98.98 0 1 1 0 1.96.98.98 0 0 1 0-1.96z"/>
                <path fill="#FFD43B" d="M12.09 24c5.46 0 5.11-2.37 5.11-2.37l-.01-2.46h-5.2v-.74h7.19s3.32.37 3.32-5.11c0-5.48-2.89-5.27-2.89-5.27h-1.72v2.43s.1 2.89-2.84 2.89h-4.88s-2.74-.05-2.74 2.69v5.56S7.03 24 12.09 24zm2.8-1.48a.98.98 0 1 1 0-1.96.98.98 0 0 1 0 1.96z"/>
              </svg>
              <span className="text-[11px] font-bold text-slate-700">Python</span>
            </div>

            {/* Pandas */}
            <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-purple-100 bg-purple-50/70 px-3 py-1.5 shadow-xs">
              <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24">
                <path fill="#150458" d="M5.5 3h2v18h-2zM10.5 8h2v13h-2zM15.5 5h2v16h-2z"/>
                <rect width="2.5" height="7" x="1" y="7" fill="#E70488" rx="1"/>
                <rect width="2.5" height="10" x="20.5" y="6" fill="#FFD43B" rx="1"/>
              </svg>
              <span className="text-[11px] font-bold text-slate-700">Pandas</span>
            </div>

            {/* Scikit-learn */}
            <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-orange-100 bg-orange-50/70 px-3 py-1.5 shadow-xs">
              <div className="flex -space-x-1 shrink-0">
                <span className="h-3 w-3 rounded-full bg-[#007acc] opacity-90" />
                <span className="h-3 w-3 rounded-full bg-[#f89939] opacity-90" />
              </div>
              <span className="text-[11px] font-bold text-slate-700">Scikit-learn</span>
            </div>

            {/* More / Arrow Button */}
            <Link
              href="#skills"
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-primary transition-colors hover:bg-blue-100"
              aria-label="View all skills"
            >
              <ArrowRight size={13} />
            </Link>
          </div>

          {/* Opportunities & Connect Card */}
          <div className="mt-3.5 rounded-2xl border border-slate-100 bg-white p-3.5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                Open to Opportunities
              </span>
              <Mail size={16} className="text-slate-400" />
            </div>

            <p className="mt-2 text-xs text-slate-500">
              Let&apos;s connect and create impact through data.
            </p>

            <div className="my-2.5 h-px bg-slate-100" />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Link
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:opacity-80 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon size={16} />
                </Link>
                <Link
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark hover:opacity-80 transition-opacity"
                  aria-label="GitHub"
                >
                  <GitHubIcon size={16} />
                </Link>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-primary hover:opacity-80 transition-opacity"
                  aria-label="Email"
                >
                  <Mail size={16} />
                </a>
              </div>

              <Link
                href="#contact"
                className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
              >
                <span>Get In Touch</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

        </div>

      </div>

      {/* ══════════════════════════════════════════════════════
          DESKTOP HERO VIEW (lg+)
          ══════════════════════════════════════════════════════ */}
      {/* ── Left content column ──────────────────────────── */}
      <div className="relative z-10 hidden flex-1 flex-col justify-center px-8 py-16 sm:px-12 lg:flex lg:px-20 xl:px-28 xl:max-w-[58%]">

        {/* Eyebrow — slides in from left */}
        <div
          className="hero-anim-left flex items-center gap-3"
          style={anim(0)}
        >
          <div
            className="h-0.5 w-8 rounded-full"
            style={{ background: "linear-gradient(to right, #1d4ed8, #0ea5e9)" }}
          />
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
            {profile.eyebrow}
          </p>
        </div>

        {/* Headline */}
        <h1 className="mt-5 text-5xl font-extrabold leading-[1.1] tracking-tight text-dark sm:text-[3.4rem] lg:text-[3.8rem]">
          <span className="hero-anim-up block" style={anim(120)}>
            Turning Data Into
          </span>
          <span
            className="hero-anim-up block"
            style={{
              ...anim(240),
              background:
                "linear-gradient(135deg, #1d4ed8 0%, #2563eb 40%, #0ea5e9 70%, #0f766e 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Meaningful Insights
          </span>
        </h1>

        {/* Summary */}
        <p
          className="hero-anim-up mt-10 max-w-lg text-[0.97rem] leading-relaxed text-slate lg:mt-6"
          style={anim(350)}
        >
          Data Analyst and Machine Learning Specialist holding a Master of
          Science in Applied Modelling &amp; Quantitative Methods from Trent
          University. Passionate about using data, machine learning and modern
          tools to solve real-world problems and create measurable impact.
        </p>

        {/* CTAs */}
        <div
          className="hero-anim-up mt-8 flex flex-wrap gap-3"
          style={anim(460)}
        >
          <Link
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-200 hover:bg-[#1e40af] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30"
          >
            View My Projects
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Link>
          <Link
            href={profile.resumePath}
            download
            className="inline-flex items-center gap-2 rounded-xl border-2 border-primary/70 bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-sm transition-all duration-200 hover:bg-primary/5 hover:border-primary hover:-translate-y-0.5"
          >
            <Download size={16} />
            Download Resume
          </Link>
        </div>

        {/* Divider */}
        <div
          className="hero-anim-up my-8 h-px w-full max-w-lg bg-border"
          style={anim(540)}
        />

        {/* Contact info */}
        <div
          className="hero-anim-up flex flex-wrap items-center gap-x-6 gap-y-3"
          style={anim(580)}
        >
          <span className="flex items-center gap-2 text-sm text-slate">
            <MapPin size={14} className="shrink-0 text-primary" />
            {profile.location}
          </span>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 text-sm text-slate transition-colors hover:text-primary"
          >
            <Mail size={14} className="shrink-0 text-primary" />
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-sm text-slate transition-colors hover:text-primary"
          >
            <Phone size={14} className="shrink-0 text-primary" />
            {profile.phone}
          </a>
        </div>

        {/* Social + availability */}
        <div
          className="hero-anim-up mt-5 flex flex-wrap items-center gap-4"
          style={anim(640)}
        >
          <Link
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-slate transition-colors hover:text-primary"
          >
            <LinkedInIcon size={18} />
            LinkedIn
          </Link>
          <Link
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-slate transition-colors hover:text-primary"
          >
            <GitHubIcon size={18} />
            GitHub
          </Link>
          <span className="flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-[12px] font-semibold text-emerald-700">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            Open to Opportunities
          </span>
        </div>

        {/* Tagline */}
        <div
          className="hero-anim-up mt-10 flex items-center gap-3"
          style={anim(700)}
        >
          <div
            className="h-0.5 w-10 rounded-full"
            style={{ background: "linear-gradient(to right, #10b981, #0f766e)" }}
          />
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate/50">
            Data for a Better Tomorrow
          </p>
        </div>
      </div>

      {/* ── Right photo panel ─────────────────────────────── */}
      <div className="relative hidden flex-1 lg:block">
        <HeroPhoto />
      </div>
    </section>
  );
}
