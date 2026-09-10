"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { projects, Project } from "@/data/projects";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Cpu,
  Eye,
  Layers,
  Check,
  X,
  Sparkles,
  Target,
  Wrench,
  CheckCircle2,
  Layers as ArchitectureIcon,
  TrendingUp,
  Activity,
  ShieldAlert,
  Zap,
  Filter,
} from "lucide-react";
import Link from "next/link";

const categories = [
  { id: "all", label: "All Projects", count: 4 },
  { id: "featured", label: "Data Science & Policy", count: 1 },
  { id: "ml", label: "Machine Learning & Quant", count: 1 },
  { id: "cv", label: "Computer Vision & Medical AI", count: 1 },
  { id: "fullstack", label: "Full-Stack Systems", count: 1 },
];

const badgeIcons = {
  featured: BarChart3,
  ml: TrendingUp,
  cv: Eye,
  fullstack: Layers,
};

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close modal on Escape key press & lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.badgeType === activeCategory);

  const flagshipProject = projects.find((p) => p.id === "ontario-housing");
  const otherProjects = projects.filter((p) => p.id !== "ontario-housing");

  const modalNode =
    mounted && selectedProject
      ? createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-dark/70 backdrop-blur-md p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
            onClick={() => setSelectedProject(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-title"
          >
            <div
              className="relative w-full max-w-4xl rounded-3xl bg-white shadow-2xl border border-slate-200 overflow-hidden my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-6 py-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                    <Sparkles size={13} />
                    <span>{selectedProject.category} Case Study</span>
                  </span>
                  <span className="text-xs font-semibold text-slate-500">{selectedProject.period}</span>
                </div>
                
                <button
                  type="button"
                  className="rounded-full p-2 text-slate-400 hover:bg-slate-200 hover:text-dark transition-colors"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close Case Study Modal"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Scrollable Body */}
              <div className="max-h-[75vh] overflow-y-auto p-6 sm:p-8 space-y-6">
                {/* Title & Overview */}
                <div>
                  <h3 id="case-study-title" className="text-2xl sm:text-3xl font-extrabold text-dark tracking-tight leading-tight">
                    {selectedProject.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
                    {selectedProject.caseStudy.overview}
                  </p>
                </div>

                {/* Challenge & Solution Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Challenge */}
                  <div className="rounded-2xl bg-amber-50/60 border border-amber-200/70 p-5">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 mb-2">
                      <Target size={15} className="text-amber-600" />
                      <span>The Problem &amp; Challenge</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {selectedProject.caseStudy.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="rounded-2xl bg-blue-50/60 border border-blue-200/70 p-5">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-800 mb-2">
                      <Wrench size={15} className="text-blue-600" />
                      <span>Engineered Methodology</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {selectedProject.caseStudy.solution}
                    </p>
                  </div>
                </div>

                {/* Key Quantified Outcomes */}
                <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 sm:p-6">
                  <div className="flex items-center gap-2 text-sm font-bold text-dark mb-3.5">
                    <CheckCircle2 size={18} className="text-emerald-600" />
                    <h4>Key Quantified Outcomes &amp; Discoveries</h4>
                  </div>
                  <div className="space-y-2.5">
                    {selectedProject.caseStudy.keyOutcomes.map((outcome, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <div className="h-2 w-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{outcome}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Architecture Details */}
                <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 sm:p-6">
                  <div className="flex items-center gap-2 text-sm font-bold text-dark mb-3.5">
                    <ArchitectureIcon size={18} className="text-indigo-600" />
                    <h4>Technical Architecture &amp; Data Pipeline</h4>
                  </div>
                  <div className="space-y-2">
                    {selectedProject.caseStudy.architectureDetails.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/80 px-6 py-4">
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="rounded-xl bg-primary px-5 py-2 text-xs font-bold text-white shadow-sm hover:bg-[#1e40af] transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <AnimatedSection id="projects" className="relative bg-slate-900 text-white py-16 sm:py-24 border-b border-slate-800 overflow-hidden">
      
      {/* High-tech ambient glowing backdrops */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/15 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/4 h-[500px] w-[500px] rounded-full bg-indigo-600/15 blur-[120px]"
      />

      {/* Cyber/Data Grid Backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #38bdf8 1px, transparent 1px), linear-gradient(to bottom, #38bdf8 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-20 xl:px-28">
        
        {/* ── Section Header Block ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="flex flex-col max-w-3xl">
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full bg-blue-500/10 text-cyan-400 border border-cyan-500/20 shadow-xs mb-3.5">
              <Zap size={14} className="text-cyan-400 animate-pulse" />
              <span>PRODUCTION &amp; QUANTITATIVE PORTFOLIO</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold text-white tracking-tight leading-[1.15]">
              Real Problems. <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">Measurable Impact.</span>
            </h2>
            
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              End-to-end data analytics, quantitative policy forecasting, medical computer vision,
              and full-stack applications built for production-grade reliability.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-5 py-3 text-xs font-bold text-white shadow-lg shadow-blue-500/25 hover:from-blue-500 hover:to-cyan-500 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Discuss a Project</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        {/* ── Interactive Category Filter Tabs ── */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 ring-2 ring-blue-400/40"
                    : "bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 hover:text-white border border-slate-700/60"
                }`}
              >
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* ── Projects Layout ── */}
        <div className="space-y-8">
          
          {/* ═══════════════════════════════════════════════════
              FLAGSHIP SPOTLIGHT: ONTARIO HOUSING PROJECT
              (Rendered if active category is 'all' or 'featured')
              ═══════════════════════════════════════════════════ */}
          {(activeCategory === "all" || activeCategory === "featured") && flagshipProject && (
            <div className="relative rounded-3xl bg-gradient-to-br from-slate-800/90 via-slate-850 to-slate-900 border border-blue-500/30 p-6 sm:p-9 shadow-2xl shadow-blue-950/50 backdrop-blur-xl overflow-hidden group hover:border-blue-400/60 transition-all duration-300">
              
              {/* Glowing Corner Badge */}
              <div className="absolute top-0 right-0 rounded-bl-2xl bg-gradient-to-l from-blue-600 to-cyan-600 px-4 py-1.5 text-[11px] font-bold tracking-wider uppercase text-white shadow-md">
                ⭐ Flagship Case Study
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left 6 Columns: Title, Policy Scope, Metrics */}
                <div className="lg:col-span-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-cyan-300 border border-cyan-500/30">
                        <BarChart3 size={13} />
                        <span>Ontario Ministry of Municipal Affairs Data</span>
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                      {flagshipProject.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {flagshipProject.description}
                    </p>
                  </div>

                  {/* 4 Metrics Highlight Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-6 bg-slate-950/60 border border-slate-800 rounded-2xl p-3.5">
                    {flagshipProject.metrics?.map((m) => (
                      <div key={m.label} className="flex flex-col p-2">
                        <span className="text-xl sm:text-2xl font-black text-cyan-400 tracking-tight">
                          {m.value}
                        </span>
                        <span className="text-[10.5px] font-medium text-slate-400 leading-tight mt-0.5">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tags & Action */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {flagshipProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg bg-slate-800 px-2.5 py-1 text-xs font-semibold text-slate-300 border border-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedProject(flagshipProject)}
                      className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-xs px-4 py-2.5 shadow-md shadow-cyan-500/20 transition-transform active:scale-95 cursor-pointer"
                    >
                      <span>Explore Case Study</span>
                      <ArrowUpRight size={15} />
                    </button>
                  </div>
                </div>

                {/* Right 6 Columns: Interactive Visualizations (Feature Importance + Curve) */}
                <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Top Feature Importance Box */}
                  <div className="rounded-2xl bg-slate-950/70 border border-slate-800 p-4 flex flex-col justify-between">
                    <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">
                      Feature Importance (Top 3)
                    </h4>
                    
                    <div className="space-y-3">
                      {flagshipProject.featureImportance?.map((item) => (
                        <div key={item.label} className="space-y-1">
                          <div className="flex items-center justify-between text-[11px]">
                            <span className="text-slate-300 font-medium truncate max-w-[140px]">
                              {item.label}
                            </span>
                            <span className="font-mono font-bold text-cyan-400">
                              {item.percentage.toFixed(1)}%
                            </span>
                          </div>
                          <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                              style={{ width: `${item.percentage}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Model Benchmark Curve */}
                  <div className="rounded-2xl bg-slate-950/70 border border-slate-800 p-4 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                        Model Accuracy
                      </h4>
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                        Random Forest
                      </span>
                    </div>

                    <div className="my-2 relative flex items-center justify-center">
                      <svg className="w-full h-24" viewBox="0 0 220 100" fill="none">
                        <line x1="20" y1="20" x2="200" y2="20" stroke="#334155" strokeWidth="0.8" strokeDasharray="2 2" />
                        <line x1="20" y1="50" x2="200" y2="50" stroke="#334155" strokeWidth="0.8" strokeDasharray="2 2" />
                        <line x1="20" y1="80" x2="200" y2="80" stroke="#475569" strokeWidth="1" />
                        
                        {/* Shaded confidence region */}
                        <path
                          d="M30 40 Q75 32 115 36 T190 34 L190 48 Q150 50 115 46 T30 50 Z"
                          fill="rgba(56, 189, 248, 0.2)"
                        />
                        {/* Accuracy line */}
                        <path
                          d="M30 45 L70 40 L110 42 L150 36 L190 38"
                          stroke="#38bdf8"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                        <circle cx="30" cy="45" r="3.5" fill="#38bdf8" />
                        <circle cx="70" cy="40" r="3.5" fill="#38bdf8" />
                        <circle cx="110" cy="42" r="3.5" fill="#38bdf8" />
                        <circle cx="150" cy="36" r="3.5" fill="#38bdf8" />
                        <circle cx="190" cy="38" r="3.5" fill="#38bdf8" />
                      </svg>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>5-Fold Cross Validation</span>
                      <span className="font-mono font-bold text-cyan-400">R² = 0.803</span>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          )}

          {/* ═══════════════════════════════════════════════════
              SECONDARY PROJECTS GRID (3-Column Layout on Desktop)
              ═══════════════════════════════════════════════════ */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(activeCategory === "all" ? otherProjects : filteredProjects).map((project) => {
              if (activeCategory === "all" && project.id === "ontario-housing") return null;

              const BadgeIcon = badgeIcons[project.badgeType] || BarChart3;

              return (
                <div
                  key={project.id}
                  className="group relative flex flex-col justify-between rounded-3xl bg-slate-800/80 border border-slate-700/70 p-6 shadow-xl backdrop-blur-md hover:border-cyan-400/50 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1.5"
                >
                  <div>
                    {/* Top Row: Category Badge & Period */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-700/80 text-cyan-300 border border-slate-600/60">
                        <BadgeIcon size={13} />
                        <span>{project.category}</span>
                      </span>

                      <span className="text-xs text-slate-400 font-semibold">{project.period}</span>
                    </div>

                    {/* Title & Description */}
                    <h3
                      onClick={() => setSelectedProject(project)}
                      className="text-lg sm:text-xl font-extrabold text-white tracking-tight leading-snug cursor-pointer hover:text-cyan-400 transition-colors"
                    >
                      {project.title}
                    </h3>

                    <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* ── PROJECT SPECIFIC LIVE WIDGETS ── */}
                    {/* Crypto Widget */}
                    {project.id === "crypto-prediction" && (
                      <div className="my-5 rounded-2xl bg-slate-950/80 border border-slate-800 p-3.5 space-y-3">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-slate-300">Live Trade Signals</span>
                          <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                            LSTM + ARIMA
                          </span>
                        </div>

                        {/* Tickers */}
                        <div className="grid grid-cols-3 gap-2">
                          {project.cryptoTickers?.map((t) => (
                            <div key={t.symbol} className="flex flex-col items-center rounded-xl bg-slate-900 border border-slate-800 p-2">
                              <span className="text-xs font-black text-white">{t.symbol}</span>
                              <span className="text-[11px] font-mono font-bold text-emerald-400">{t.change}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* COVID Detection Widget */}
                    {project.id === "covid-detection" && (
                      <div className="my-5 rounded-2xl bg-slate-950/80 border border-slate-800 p-3.5 space-y-2.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-slate-300">Diagnostic Metrics</span>
                          <span className="text-[10px] font-bold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                            VGG16 / ResNet
                          </span>
                        </div>

                        <div className="grid grid-cols-3 gap-2 text-center">
                          <div className="rounded-xl bg-slate-900 border border-slate-800 p-2">
                            <span className="text-sm font-black text-cyan-400">94.8%</span>
                            <span className="block text-[9.5px] text-slate-400">Accuracy</span>
                          </div>
                          <div className="rounded-xl bg-slate-900 border border-slate-800 p-2">
                            <span className="text-sm font-black text-purple-400">0.96</span>
                            <span className="block text-[9.5px] text-slate-400">ROC-AUC</span>
                          </div>
                          <div className="rounded-xl bg-slate-900 border border-slate-800 p-2">
                            <span className="text-sm font-black text-emerald-400">Grad-CAM</span>
                            <span className="block text-[9.5px] text-slate-400">Explainable</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Attendance Portal Widget */}
                    {project.id === "attendance-system" && (
                      <div className="my-5 rounded-2xl bg-slate-950/80 border border-slate-800 p-3.5 space-y-2.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-slate-300">Full-Stack Platform</span>
                          <span className="text-[10px] font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                            MEAN Stack
                          </span>
                        </div>

                        <div className="grid grid-cols-3 gap-2 text-center">
                          <div className="rounded-xl bg-slate-900 border border-slate-800 p-2">
                            <span className="text-sm font-black text-cyan-400">1,200+</span>
                            <span className="block text-[9.5px] text-slate-400">Students</span>
                          </div>
                          <div className="rounded-xl bg-slate-900 border border-slate-800 p-2">
                            <span className="text-sm font-black text-emerald-400">+65%</span>
                            <span className="block text-[9.5px] text-slate-400">Efficiency</span>
                          </div>
                          <div className="rounded-xl bg-slate-900 border border-slate-800 p-2">
                            <span className="text-sm font-black text-indigo-400">&lt;85ms</span>
                            <span className="block text-[9.5px] text-slate-400">API Speed</span>
                          </div>
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Card Footer: Tags & Action */}
                  <div className="border-t border-slate-700/60 pt-4 mt-2 flex items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-slate-900/80 px-2 py-0.5 text-[11px] font-semibold text-slate-300 border border-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer group-hover:translate-x-0.5"
                    >
                      <span>Case Study</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* Render Portal Modal */}
      {modalNode}

    </AnimatedSection>
  );
}
