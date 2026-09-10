"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  Sparkles,
  ShieldCheck,
  Building2,
  Brain,
  Database,
  Eye,
  Layers,
  Cpu,
  TrendingUp,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

export function EducationTimeline() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <AnimatedSection id="education" className="relative bg-gradient-to-b from-white via-slate-50/60 to-white py-16 sm:py-24 border-b border-slate-200/80 overflow-hidden">
      
      {/* Ambient background glow effects */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-teal-400/10 blur-3xl"
      />
      
      {/* Background dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-20 xl:px-28">
        
        {/* ── Section Header Block ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="flex flex-col max-w-3xl">
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full bg-blue-50 text-primary border border-blue-200/60 shadow-xs mb-3.5">
              <Sparkles size={14} className="text-primary animate-pulse" />
              <span>ACADEMIC FOUNDATIONS &amp; RESEARCH</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold text-dark tracking-tight leading-[1.15]">
              Education &amp; Quantitative Mastery
            </h2>
            
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              Rigorous graduate and undergraduate training bridging advanced big data analytics,
              computational statistics, and deep artificial intelligence.
            </p>
          </div>

          {/* Right Script Accent */}
          <div className="hidden md:flex flex-col items-center rotate-[-6deg] select-none shrink-0" aria-hidden="true">
            <span
              className="text-2xl font-bold text-slate-400"
              style={{ fontFamily: "var(--font-caveat), cursive, sans-serif" }}
            >
              Academic Rigor
            </span>
            <svg
              className="w-28 h-4 text-blue-300 -mt-1 opacity-80"
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

        {/* ── 2-Column Luxury Academic Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* ═══════════════════════════════════════════════════
              CARD 1: TRENT UNIVERSITY (M.Sc. Master's)
              ═══════════════════════════════════════════════════ */}
          <div
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative flex flex-col justify-between bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
          >
            {/* Top decorative gradient accent bar */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600" />
            
            {/* Ambient inner card glow on hover */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-40"
            />

            <div>
              {/* Top Row: Degree status pill & Timeline period */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-xs">
                    <CheckCircle2 size={13} className="text-emerald-600" />
                    <span>Degree Conferred</span>
                  </span>
                  
                  <span className="text-xs font-semibold text-blue-800 bg-blue-50/80 px-2.5 py-1 rounded-md border border-blue-200/60">
                    Master of Science (M.Sc.)
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 bg-slate-100/90 px-3 py-1 rounded-lg border border-slate-200">
                  <Calendar size={13} className="text-primary shrink-0" />
                  <span>Jan 2025 – Apr 2026</span>
                </div>
              </div>

              {/* University Header */}
              <div className="flex items-start gap-4 mb-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-lg shadow-blue-600/25 group-hover:scale-105 transition-transform">
                  <GraduationCap size={28} />
                </div>
                
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-dark tracking-tight leading-snug">
                    Master of Science in Applied Modelling &amp; Quantitative Methods
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5 text-xs sm:text-sm font-semibold text-slate-600">
                    <span className="flex items-center gap-1.5 text-primary">
                      <Building2 size={14} />
                      Trent University
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="flex items-center gap-1 text-slate-500">
                      <MapPin size={13} className="text-slate-400" />
                      Peterborough, ON, Canada
                    </span>
                  </div>
                </div>
              </div>

              {/* Specialization Highlight Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-50 to-sky-50 px-3.5 py-2 border border-blue-100 text-xs font-bold text-blue-900">
                <Sparkles size={14} className="text-blue-600 shrink-0" />
                <span>Specialization: Big Data Analytics &amp; Statistical Machine Learning</span>
              </div>

              {/* Interactive Performance / GPA Score Widget */}
              <div className="mb-6 grid grid-cols-1 sm:grid-cols-12 gap-3.5 bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4">
                {/* GPA Ring */}
                <div className="sm:col-span-5 flex items-center gap-3.5">
                  <div className="relative flex h-14 w-14 shrink-0 items-center justify-center">
                    <svg className="h-full w-full -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-slate-200"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-blue-600 transition-all duration-1000 ease-out"
                        strokeDasharray="97.5, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute text-xs font-black text-dark">3.9</span>
                  </div>
                  
                  <div>
                    <div className="text-xs font-bold text-dark">Cumulative GPA</div>
                    <div className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
                      <Award size={12} />
                      Top 5% Standing
                    </div>
                  </div>
                </div>

                {/* Accreditation info */}
                <div className="sm:col-span-7 flex flex-col justify-center border-t sm:border-t-0 sm:border-l border-slate-200 pt-2.5 sm:pt-0 sm:pl-3.5 text-slate-600">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-0.5">
                    <ShieldCheck size={14} className="text-emerald-600 shrink-0" />
                    <span>Canadian Accreditation</span>
                  </div>
                  <p className="text-[11px] leading-tight text-slate-500">
                    Council of Ontario Universities (COU) &amp; Universities Canada
                  </p>
                </div>
              </div>

              {/* Research & Applied Focus Modules */}
              <div className="mb-6 space-y-2.5">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Brain size={13} className="text-primary" />
                  <span>Key Research Pillars</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="flex items-start gap-2.5 rounded-xl bg-white border border-slate-200/80 p-3 shadow-2xs hover:border-blue-300 transition-colors">
                    <Database size={16} className="text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-dark">Big Data Pipelines</h4>
                      <p className="text-[11px] text-slate-500 leading-tight mt-0.5">Distributed processing &amp; municipal data mining</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 rounded-xl bg-white border border-slate-200/80 p-3 shadow-2xs hover:border-blue-300 transition-colors">
                    <TrendingUp size={16} className="text-teal shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-dark">Predictive Analytics</h4>
                      <p className="text-[11px] text-slate-500 leading-tight mt-0.5">Cross-validated regression &amp; XGBoost modelling</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coursework Pills Footer */}
            <div className="border-t border-slate-100 pt-4">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                <BookOpen size={13} className="text-slate-400" />
                <span>Coursework &amp; Competencies:</span>
              </div>
              
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Big Data Analytics",
                  "Applied Modelling",
                  "Statistical Learning",
                  "Quantitative Methods",
                  "High-Dimensional Data",
                  "Python & R Modeling",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg bg-slate-100/90 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-all text-xs font-semibold text-slate-700 px-2.5 py-1 border border-slate-200/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════
              CARD 2: JNTU KAKINADA (B.Tech in AI & ML)
              ═══════════════════════════════════════════════════ */}
          <div
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative flex flex-col justify-between bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
          >
            {/* Top decorative gradient accent bar */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500" />

            {/* Ambient inner card glow on hover */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-teal-500/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-40"
            />

            <div>
              {/* Top Row: Degree status pill & Timeline period */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-xs">
                    <CheckCircle2 size={13} className="text-emerald-600" />
                    <span>Degree Conferred</span>
                  </span>

                  <span className="text-xs font-semibold text-teal-800 bg-teal-50/80 px-2.5 py-1 rounded-md border border-teal-200/60">
                    First Class with Distinction
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 bg-slate-100/90 px-3 py-1 rounded-lg border border-slate-200">
                  <Calendar size={13} className="text-teal shrink-0" />
                  <span>Jan 2020 – May 2024</span>
                </div>
              </div>

              {/* University Header */}
              <div className="flex items-start gap-4 mb-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-600 to-emerald-700 text-white shadow-lg shadow-teal-600/25 group-hover:scale-105 transition-transform">
                  <Cpu size={28} />
                </div>
                
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-dark tracking-tight leading-snug">
                    Bachelor of Computer Science in AI &amp; Machine Learning
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5 text-xs sm:text-sm font-semibold text-slate-600">
                    <span className="flex items-center gap-1.5 text-teal">
                      <Building2 size={14} />
                      PSRCMR College of Engineering
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="flex items-center gap-1 text-slate-500">
                      <MapPin size={13} className="text-slate-400" />
                      JNTU Kakinada, India
                    </span>
                  </div>
                </div>
              </div>

              {/* Specialization Highlight Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-teal-50 to-emerald-50 px-3.5 py-2 border border-teal-100 text-xs font-bold text-teal-900">
                <Sparkles size={14} className="text-teal shrink-0" />
                <span>Specialization: Deep Neural Networks &amp; Computer Vision</span>
              </div>

              {/* Interactive Performance / CGPA Score Widget */}
              <div className="mb-6 grid grid-cols-1 sm:grid-cols-12 gap-3.5 bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4">
                {/* CGPA Ring */}
                <div className="sm:col-span-5 flex items-center gap-3.5">
                  <div className="relative flex h-14 w-14 shrink-0 items-center justify-center">
                    <svg className="h-full w-full -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-slate-200"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-teal-600 transition-all duration-1000 ease-out"
                        strokeDasharray="79.7, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute text-xs font-black text-dark">7.97</span>
                  </div>
                  
                  <div>
                    <div className="text-xs font-bold text-dark">Graduation CGPA</div>
                    <div className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
                      <Award size={12} />
                      First Class Honors
                    </div>
                  </div>
                </div>

                {/* Accreditation info */}
                <div className="sm:col-span-7 flex flex-col justify-center border-t sm:border-t-0 sm:border-l border-slate-200 pt-2.5 sm:pt-0 sm:pl-3.5 text-slate-600">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-0.5">
                    <ShieldCheck size={14} className="text-emerald-600 shrink-0" />
                    <span>University Affiliation</span>
                  </div>
                  <p className="text-[11px] leading-tight text-slate-500">
                    Jawaharlal Nehru Technological University (JNTUK) • AICTE Approved
                  </p>
                </div>
              </div>

              {/* Research & Applied Focus Modules */}
              <div className="mb-6 space-y-2.5">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Cpu size={13} className="text-teal" />
                  <span>Key Engineering Disciplines</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="flex items-start gap-2.5 rounded-xl bg-white border border-slate-200/80 p-3 shadow-2xs hover:border-teal-300 transition-colors">
                    <Eye size={16} className="text-teal shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-dark">Computer Vision (CV)</h4>
                      <p className="text-[11px] text-slate-500 leading-tight mt-0.5">Convolutional nets &amp; OpenCV radiography processing</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 rounded-xl bg-white border border-slate-200/80 p-3 shadow-2xs hover:border-teal-300 transition-colors">
                    <Layers size={16} className="text-indigo-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-dark">Full-Stack AI Systems</h4>
                      <p className="text-[11px] text-slate-500 leading-tight mt-0.5">End-to-end model serving with REST APIs &amp; MongoDB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coursework Pills Footer */}
            <div className="border-t border-slate-100 pt-4">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                <BookOpen size={13} className="text-slate-400" />
                <span>Coursework &amp; Competencies:</span>
              </div>
              
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Deep Neural Networks",
                  "Computer Vision",
                  "Data Structures & Alg",
                  "Database Management (DBMS)",
                  "Software Engineering",
                  "Object-Oriented Java",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg bg-slate-100/90 hover:bg-teal-50 hover:text-teal-700 hover:border-teal-200 transition-all text-xs font-semibold text-slate-700 px-2.5 py-1 border border-slate-200/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* ── Global Accreditations & Academic Standards Trust Bar ── */}
        <div className="mt-10 sm:mt-14 rounded-2xl bg-white border border-slate-200/90 p-4 sm:p-6 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-dark">Accredited Academic Credentials</h4>
              <p className="text-xs text-slate-500">
                Verified international programs adhering to strict Canadian and international academic standards.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[
              "Council of Ontario Universities (COU)",
              "Universities Canada",
              "Association of Commonwealth Universities (ACU)",
              "AICTE India",
            ].map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-[11px]"
              >
                <CheckCircle2 size={12} className="text-emerald-600" />
                <span>{badge}</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </AnimatedSection>
  );
}
