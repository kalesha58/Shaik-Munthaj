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

      {/* ── Card 2: Continuous Learning ── */}
      <GlassCard
        className="hero-anim-right right-6 top-[30%] z-10 w-52 p-4"
        style={anim(900)}
      >
        <div className="mb-2.5 flex h-9 w-9 items-center justify-center rounded-xl bg-teal/10">
          <Sparkles size={17} className="text-teal" />
        </div>
        <p className="text-[13px] font-bold leading-snug text-dark">
          Continuous Learning
        </p>
        <p className="mt-1 text-[11px] leading-snug text-slate">
          Exploring new ideas in AI &amp; Data Science.
        </p>
      </GlassCard>

      {/* ── Card 3: MSc Education ── */}
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
      {/* Dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          opacity: 0.3,
        }}
      />

      {/* ── Left content column ──────────────────────────── */}
      <div className="relative z-10 flex flex-1 flex-col justify-center px-8 py-16 sm:px-12 lg:px-20 xl:px-28 xl:max-w-[58%]">

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

        {/* Mobile-only centered photo — scale in */}
        <div
          className="hero-anim-scale lg:hidden mt-8 flex justify-center"
          style={anim(300)}
        >
          <div className="relative">
            <div
              className="absolute -inset-1.5 rounded-3xl opacity-60 blur-sm"
              style={{
                background:
                  "linear-gradient(135deg, #1d4ed8 0%, #0ea5e9 50%, #0f766e 100%)",
              }}
            />
            <div className="relative h-72 w-56 overflow-hidden rounded-3xl shadow-2xl sm:h-80 sm:w-64">
              <Image
                src="/images/munthaj.jpeg"
                alt="Shaik Munthaj – Data Analyst & Machine Learning Specialist"
                fill
                priority
                className="object-cover object-top"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-16"
                style={{
                  background:
                    "linear-gradient(to top, rgba(247,248,250,0.7) 0%, transparent 100%)",
                }}
              />
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-emerald-200 bg-white px-3 py-1 text-[11px] font-semibold text-emerald-700 shadow-md">
              <span className="mr-1.5 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500 align-middle" />
              Open to Opportunities
            </div>
          </div>
        </div>

        {/* Summary */}
        <p
          className="hero-anim-up mt-10 max-w-lg text-[0.97rem] leading-relaxed text-slate lg:mt-6"
          style={anim(350)}
        >
          Data Analyst and Machine Learning Specialist currently pursuing a
          Master of Science in Applied Modelling &amp; Quantitative Methods at
          Trent University. Passionate about using data, machine learning and
          modern tools to solve real-world problems and create measurable impact.
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
