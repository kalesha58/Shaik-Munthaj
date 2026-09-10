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
} from "lucide-react";
import Link from "next/link";

const badgeIcons = {
  featured: BarChart3,
  ml: Cpu,
  cv: Eye,
  fullstack: Layers,
};

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
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

  const modalNode =
    mounted && selectedProject
      ? createPortal(
          <div
            className="modal-overlay-backdrop"
            onClick={() => setSelectedProject(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-title"
          >
            <div
              className="modal-container-card"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="modal-header-bar">
                <div className="modal-header-meta">
                  <span className={`modal-badge-pill badge-${selectedProject.badgeType}`}>
                    <Sparkles size={13} className="text-current" />
                    <span>{selectedProject.category} Case Study</span>
                  </span>
                  <span className="modal-period-text">{selectedProject.period}</span>
                </div>
                <button
                  type="button"
                  className="modal-close-btn"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close Case Study Modal"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Scrollable Body */}
              <div className="modal-scroll-content">
                {/* Title & Overview */}
                <div className="modal-hero-block">
                  <h3 id="case-study-title" className="modal-project-title">
                    {selectedProject.title}
                  </h3>
                  <p className="modal-lead-overview">
                    {selectedProject.caseStudy.overview}
                  </p>
                </div>

                {/* Challenge & Solution Grid */}
                <div className="modal-two-col-grid">
                  {/* Challenge */}
                  <div className="modal-info-panel panel-challenge">
                    <div className="panel-badge-label">
                      <Target size={14} className="text-amber-600" />
                      <span>The Problem & Challenge</span>
                    </div>
                    <p className="panel-body-text">
                      {selectedProject.caseStudy.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="modal-info-panel panel-solution">
                    <div className="panel-badge-label">
                      <Wrench size={14} className="text-blue-600" />
                      <span>Engineered Methodology</span>
                    </div>
                    <p className="panel-body-text">
                      {selectedProject.caseStudy.solution}
                    </p>
                  </div>
                </div>

                {/* Key Quantified Outcomes */}
                <div className="modal-section-card">
                  <div className="modal-section-header">
                    <CheckCircle2 size={16} className="text-emerald-600" />
                    <h4 className="modal-section-title">Key Quantified Outcomes & Discoveries</h4>
                  </div>
                  <div className="modal-outcomes-list">
                    {selectedProject.caseStudy.keyOutcomes.map((outcome, idx) => (
                      <div key={idx} className="modal-outcome-row">
                        <div className="outcome-bullet-dot" />
                        <p className="outcome-text">{outcome}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Architecture Details */}
                <div className="modal-section-card">
                  <div className="modal-section-header">
                    <ArchitectureIcon size={16} className="text-indigo-600" />
                    <h4 className="modal-section-title">Technical Architecture & Data Pipeline</h4>
                  </div>
                  <div className="modal-arch-list">
                    {selectedProject.caseStudy.architectureDetails.map((arch, idx) => (
                      <div key={idx} className="modal-arch-row">
                        <span className="arch-num-badge">0{idx + 1}</span>
                        <p className="arch-text">{arch}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology Stack Tags */}
                <div className="modal-tech-block">
                  <span className="modal-tech-label">Technology Stack:</span>
                  <div className="modal-tech-pills">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="modal-tech-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Sticky Footer */}
              <div className="modal-footer-bar">
                <span className="modal-footer-hint">Shaik Munthaj · Portfolio Case Study</span>
                <div className="modal-footer-actions">
                  <Link
                    href="#contact"
                    onClick={() => setSelectedProject(null)}
                    className="modal-action-btn modal-action-primary"
                  >
                    <span>Discuss This Project</span>
                    <ArrowRight size={14} />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="modal-action-btn modal-action-secondary"
                  >
                    Close
                  </button>
                </div>
              </div>

            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <AnimatedSection id="projects" className="featured-projects-section">
      <div className="featured-projects-container">
        
        {/* ── Section Header ── */}
        <div className="projects-header-block">
          <div className="projects-header-left">
            <span className="projects-eyebrow-pill">FEATURED PROJECTS</span>
            <h2 className="projects-main-title">
              Real Problems. Measurable Impact.
            </h2>
            <p className="projects-main-subtitle">
              A selection of my academic and personal projects that showcase my skills
              in data analysis, machine learning and full-stack development. Click any case study to explore quantitative metrics and architecture.
            </p>
          </div>

          <div className="projects-header-right">
            <div className="projects-script-flourish" aria-hidden="true">
              <span className="script-text">Data Creates<br />Opportunities</span>
              <svg className="script-underline" viewBox="0 0 120 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3 14C35 4 85 3 117 12M15 17C45 10 75 9 105 15"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <Link
              href="#contact"
              className="projects-view-all-link"
            >
              <span>Discuss a Project</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* ── Projects Grid ── */}
        <div className="projects-grid-modern">
          {projects.map((project) => {
            const BadgeIcon = badgeIcons[project.badgeType] || BarChart3;

            return (
              <div
                key={project.id}
                className="project-card-modern"
              >
                
                {/* Top Meta Row */}
                <div className="project-meta-row">
                  <div className={`project-badge-pill badge-${project.badgeType}`}>
                    <BadgeIcon size={14} className="project-badge-icon" />
                    <span>{project.category}</span>
                  </div>

                  <div className="project-meta-right">
                    <span className="project-date">{project.period}</span>
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className={`project-arrow-btn arrow-btn-${project.badgeType}`}
                      aria-label={`Open Case Study for ${project.title}`}
                      title="Open Case Study Modal"
                    >
                      <ArrowUpRight size={18} />
                    </button>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="project-info-block">
                  <h3
                    className="project-card-title cursor-pointer hover:text-blue-600 transition-colors"
                    onClick={() => setSelectedProject(project)}
                  >
                    {project.title}
                  </h3>
                  <p className="project-card-desc">{project.description}</p>
                </div>

                {/* ── WIDGET: Housing Project Data Widgets ── */}
                {project.id === "ontario-housing" && (
                  <div className="project-housing-widgets">
                    
                    {/* 4 Mini Metrics Row */}
                    {project.metrics && (
                      <div className="project-metrics-grid">
                        {project.metrics.map((m) => (
                          <div key={m.label} className="project-mini-stat">
                            <span className={`stat-num stat-color-${m.color}`}>
                              {m.value}
                            </span>
                            <span className="stat-lbl">{m.label}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Side-by-Side Viz Cards */}
                    <div className="housing-viz-row">
                      {/* Left: Feature Importance */}
                      <div className="viz-subcard feature-importance-card">
                        <h4 className="viz-card-title">Feature Importance (Top 3)</h4>
                        <div className="feature-bars-list">
                          {project.featureImportance?.map((item) => (
                            <div key={item.label} className="feature-bar-item">
                              <span className="feature-bar-label">{item.label}</span>
                              <div className="feature-bar-track">
                                <div
                                  className="feature-bar-fill"
                                  style={{
                                    width: `${item.percentage}%`,
                                    backgroundColor: item.color,
                                  }}
                                />
                              </div>
                              <span className="feature-bar-val">{item.percentage.toFixed(1)}%</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right: Model Performance Chart */}
                      <div className="viz-subcard model-performance-card">
                        <h4 className="viz-card-title">
                          Model Performance <span className="text-slate-400 font-normal">(Random Forest)</span>
                        </h4>
                        <div className="perf-chart-container">
                          <svg className="perf-chart-svg" viewBox="0 0 220 110" fill="none">
                            {/* Y axis guide lines */}
                            <line x1="30" y1="20" x2="210" y2="20" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="2 2" />
                            <line x1="30" y1="55" x2="210" y2="55" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="2 2" />
                            <line x1="30" y1="90" x2="210" y2="90" stroke="#e2e8f0" strokeWidth="1" />
                            
                            {/* Y axis labels */}
                            <text x="24" y="24" fill="#94a3b8" fontSize="9" textAnchor="end">1.0</text>
                            <text x="24" y="59" fill="#94a3b8" fontSize="9" textAnchor="end">0.5</text>
                            <text x="24" y="93" fill="#94a3b8" fontSize="9" textAnchor="end">0.0</text>

                            {/* X axis labels */}
                            <text x="45" y="104" fill="#94a3b8" fontSize="9" textAnchor="middle">1</text>
                            <text x="82" y="104" fill="#94a3b8" fontSize="9" textAnchor="middle">2</text>
                            <text x="120" y="104" fill="#94a3b8" fontSize="9" textAnchor="middle">3</text>
                            <text x="158" y="104" fill="#94a3b8" fontSize="9" textAnchor="middle">4</text>
                            <text x="195" y="104" fill="#94a3b8" fontSize="9" textAnchor="middle">5</text>

                            {/* Shaded Confidence Area */}
                            <path
                              d="M45 42 Q82 36 120 40 T195 38 L195 52 Q158 54 120 50 T45 54 Z"
                              fill="rgba(59, 130, 246, 0.12)"
                            />

                            {/* Line */}
                            <path
                              d="M45 48 L82 43 L120 45 L158 39 L195 41"
                              stroke="#2563eb"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />

                            {/* Data points */}
                            <circle cx="45" cy="48" r="3.5" fill="#2563eb" stroke="#ffffff" strokeWidth="1.5" />
                            <circle cx="82" cy="43" r="3.5" fill="#2563eb" stroke="#ffffff" strokeWidth="1.5" />
                            <circle cx="120" cy="45" r="3.5" fill="#2563eb" stroke="#ffffff" strokeWidth="1.5" />
                            <circle cx="158" cy="39" r="3.5" fill="#2563eb" stroke="#ffffff" strokeWidth="1.5" />
                            <circle cx="195" cy="41" r="3.5" fill="#2563eb" stroke="#ffffff" strokeWidth="1.5" />
                          </svg>

                          {/* Float Badge */}
                          <div className="perf-badge-pill">
                            <span>R² = 0.803 ± 0.061</span>
                          </div>
                          <span className="perf-x-axis-label">Cross-Validation Folds</span>
                        </div>
                      </div>
                    </div>

                  </div>
                )}

                {/* ── WIDGET: Crypto Project Data Widgets ── */}
                {project.id === "crypto-prediction" && (
                  <div className="project-crypto-widgets">
                    
                    {/* Top Chart & Tickers Box */}
                    <div className="crypto-chart-widget">
                      
                      {/* Left: Candlestick/Trend Chart */}
                      <div className="crypto-main-chart">
                        {/* Buy/Sell Signal Badges */}
                        <div className="signal-marker buy-signal" style={{ left: "28%", top: "18%" }}>
                          <span className="signal-pill signal-pill-buy">Buy Signal</span>
                          <div className="signal-stem signal-stem-buy" />
                        </div>

                        <div className="signal-marker sell-signal" style={{ right: "18%", top: "4%" }}>
                          <span className="signal-pill signal-pill-sell">Sell Signal</span>
                          <div className="signal-stem signal-stem-sell" />
                        </div>

                        {/* Candlestick Wave Graphic */}
                        <svg className="crypto-candlestick-svg" viewBox="0 0 380 140" fill="none">
                          <defs>
                            <linearGradient id="cryptoGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="rgba(16, 185, 129, 0.22)" />
                              <stop offset="100%" stopColor="rgba(16, 185, 129, 0.0)" />
                            </linearGradient>
                          </defs>

                          {/* Shaded Area */}
                          <path
                            d="M10 120 Q50 110 90 95 T170 85 T250 90 T330 35 L370 20 L370 135 L10 135 Z"
                            fill="url(#cryptoGrad)"
                          />

                          {/* Candlestick Bars */}
                          <g opacity="0.85">
                            {/* Bar 1 */}
                            <line x1="25" y1="110" x2="25" y2="128" stroke="#10b981" strokeWidth="1.5" />
                            <rect x="22" y="114" width="6" height="10" rx="1.5" fill="#10b981" />
                            {/* Bar 2 */}
                            <line x1="55" y1="98" x2="55" y2="118" stroke="#10b981" strokeWidth="1.5" />
                            <rect x="52" y="102" width="6" height="12" rx="1.5" fill="#10b981" />
                            {/* Bar 3 */}
                            <line x1="85" y1="88" x2="85" y2="108" stroke="#10b981" strokeWidth="1.5" />
                            <rect x="82" y="92" width="6" height="11" rx="1.5" fill="#10b981" />
                            {/* Bar 4 (Dip / Buy) */}
                            <line x1="115" y1="85" x2="115" y2="105" stroke="#10b981" strokeWidth="1.5" />
                            <rect x="112" y="88" width="6" height="12" rx="1.5" fill="#10b981" />
                            {/* Bar 5 */}
                            <line x1="145" y1="75" x2="145" y2="95" stroke="#10b981" strokeWidth="1.5" />
                            <rect x="142" y="78" width="6" height="12" rx="1.5" fill="#10b981" />
                            {/* Bar 6 */}
                            <line x1="175" y1="70" x2="175" y2="90" stroke="#3b82f6" strokeWidth="1.5" />
                            <rect x="172" y="74" width="6" height="11" rx="1.5" fill="#3b82f6" />
                            {/* Bar 7 */}
                            <line x1="205" y1="78" x2="205" y2="98" stroke="#3b82f6" strokeWidth="1.5" />
                            <rect x="202" y="82" width="6" height="12" rx="1.5" fill="#3b82f6" />
                            {/* Bar 8 */}
                            <line x1="235" y1="82" x2="235" y2="104" stroke="#10b981" strokeWidth="1.5" />
                            <rect x="232" y="86" width="6" height="14" rx="1.5" fill="#10b981" />
                            {/* Bar 9 */}
                            <line x1="265" y1="70" x2="265" y2="92" stroke="#10b981" strokeWidth="1.5" />
                            <rect x="262" y="74" width="6" height="12" rx="1.5" fill="#10b981" />
                            {/* Bar 10 (Peak / Sell) */}
                            <line x1="295" y1="42" x2="295" y2="70" stroke="#10b981" strokeWidth="1.5" />
                            <rect x="292" y="48" width="6" height="16" rx="1.5" fill="#10b981" />
                            {/* Bar 11 */}
                            <line x1="325" y1="28" x2="325" y2="55" stroke="#10b981" strokeWidth="1.5" />
                            <rect x="322" y="32" width="6" height="18" rx="1.5" fill="#10b981" />
                            {/* Bar 12 */}
                            <line x1="355" y1="12" x2="355" y2="42" stroke="#10b981" strokeWidth="1.5" />
                            <rect x="352" y="18" width="6" height="18" rx="1.5" fill="#10b981" />
                          </g>

                          {/* Smooth Trend Curve */}
                          <path
                            d="M10 120 C 50 110, 80 96, 115 94 C 150 92, 170 76, 205 84 C 240 92, 270 70, 305 45 C 330 28, 350 22, 370 18"
                            stroke="#0284c7"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>

                      {/* Right: Ticker Column */}
                      <div className="crypto-tickers-col">
                        {project.cryptoTickers?.map((ticker) => (
                          <div key={ticker.symbol} className="crypto-ticker-pill">
                            <div className={`ticker-icon-circle ticker-icon-${ticker.symbol.toLowerCase()}`}>
                              {ticker.symbol === "BTC" && "₿"}
                              {ticker.symbol === "ETH" && "◆"}
                              {ticker.symbol === "SOL" && "◎"}
                            </div>
                            <div className="ticker-info">
                              <span className="ticker-symbol">{ticker.symbol}</span>
                              <span className="ticker-change">{ticker.change}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                    </div>

                    {/* Bottom: Key Highlights Card */}
                    {project.highlights && (
                      <div className="project-highlights-box">
                        <h4 className="highlights-box-title">Key Highlights</h4>
                        <div className="highlights-box-list">
                          {project.highlights.map((h, i) => (
                            <div key={i} className="highlight-item-row">
                              <span className="highlight-check-icon">
                                <Check size={14} />
                              </span>
                              <p className="highlight-text">{h}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>
                )}

                {/* ── WIDGET: Other Projects (COVID / Attendance) ── */}
                {project.summaryStats && (
                  <div className="project-generic-widgets">
                    
                    {/* Summary Stats Grid */}
                    <div className="project-metrics-grid">
                      {project.summaryStats.map((s) => (
                        <div key={s.label} className="project-mini-stat">
                          <span className="stat-num stat-color-teal">{s.value}</span>
                          <span className="stat-lbl">{s.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Highlights Box */}
                    {project.highlights && (
                      <div className="project-highlights-box">
                        <h4 className="highlights-box-title">Key Highlights</h4>
                        <div className="highlights-box-list">
                          {project.highlights.map((h, i) => (
                            <div key={i} className="highlight-item-row">
                              <span className="highlight-check-icon">
                                <Check size={14} />
                              </span>
                              <p className="highlight-text">{h}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>
                )}

                {/* ── Bottom Row: Tags & Action Link ── */}
                <div className="project-footer-row">
                  <div className="project-tags-list">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="project-action-link group"
                  >
                    <span>{project.actionText}</span>
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Render Modal via React Portal into document.body */}
      {modalNode}

    </AnimatedSection>
  );
}
