"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { certifications } from "@/data/certifications";
import {
  Award,
  BookOpen,
  Brain,
  CheckCircle2,
  Code2,
  Cpu,
  GraduationCap,
  Layers,
  Ribbon,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

// Helper to get thematic banner gradient class
function getBannerThemeClass(theme: string) {
  switch (theme) {
    case "blue":
      return "cert-banner-blue";
    case "emerald":
      return "cert-banner-emerald";
    case "teal":
      return "cert-banner-teal";
    case "indigo":
      return "cert-banner-indigo";
    case "purple":
      return "cert-banner-purple";
    case "sky":
      return "cert-banner-sky";
    case "slate":
      return "cert-banner-slate";
    case "amber":
      return "cert-banner-amber";
    default:
      return "cert-banner-blue";
  }
}

// Helper to get category icon
function getCategoryIcon(category: string) {
  switch (category) {
    case "AI & Data Science":
      return <Brain size={14} className="text-teal" />;
    case "Computer Science":
      return <Code2 size={14} className="text-primary" />;
    case "Professional & Leadership":
      return <GraduationCap size={14} className="text-amber" />;
    default:
      return <Award size={14} className="text-primary" />;
  }
}

export function Certifications() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    { id: "All", label: "All Credentials", count: certifications.length },
    {
      id: "AI & Data Science",
      label: "AI & Data Science",
      count: certifications.filter((c) => c.category === "AI & Data Science").length,
    },
    {
      id: "Computer Science",
      label: "Computer Science",
      count: certifications.filter((c) => c.category === "Computer Science").length,
    },
    {
      id: "Professional & Leadership",
      label: "Leadership & Enterprise",
      count: certifications.filter((c) => c.category === "Professional & Leadership").length,
    },
  ];

  const filteredCerts =
    activeCategory === "All"
      ? certifications
      : certifications.filter((c) => c.category === activeCategory);

  return (
    <AnimatedSection id="certifications" className="uk-certs-section">
      <div className="uk-certs-container">
        {/* ── Section Header ── */}
        <div className="uk-certs-header">
          <div className="uk-certs-header-left">
            <div className="uk-certs-eyebrow">
              <Sparkles size={14} />
              <span>Verified Accreditations & Continuous Learning</span>
            </div>
            <h2 className="uk-certs-title">Certifications & Licenses</h2>
            <p className="uk-certs-subtitle">
              Professional credentials, algorithm masterclasses, and specialized AI
              certifications backed by global universities and accredited industry
              leaders.
            </p>
          </div>
        </div>

        {/* ── Filter Tabs ── */}
        <div className="uk-certs-filters-wrap">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`uk-cert-filter-btn ${isActive ? "active" : ""}`}
              >
                <span>{cat.label}</span>
                <span className="uk-cert-filter-count">{cat.count}</span>
              </button>
            );
          })}
        </div>

        {/* ── Certifications Gallery Grid ── */}
        <div className="uk-certs-grid">
          {filteredCerts.map((cert) => (
            <div key={cert.id} className="uk-cert-card">
              {/* Certificate Visual Header Banner */}
              <div className={`uk-cert-banner ${getBannerThemeClass(cert.theme)}`}>
                {/* Guilloche / Certificate Watermark Seal */}
                <svg
                  className="uk-cert-watermark"
                  viewBox="0 0 100 100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="50" cy="50" r="45" strokeDasharray="3 2" />
                  <circle cx="50" cy="50" r="38" />
                  <polygon points="50,15 61,38 85,38 66,54 73,78 50,63 27,78 34,54 15,38 39,38" />
                </svg>

                <div className="uk-cert-banner-top">
                  <span className="uk-cert-code-pill">
                    {cert.credentialCode || "VERIFIED"}
                  </span>
                  <div className="uk-cert-seal-icon">
                    <Award size={15} />
                  </div>
                </div>

                <div className="uk-cert-banner-bottom">
                  <span className="uk-cert-type-badge">
                    {cert.credentialType}
                  </span>
                </div>
              </div>

              {/* Certificate Body */}
              <div className="uk-cert-body">
                <div className="uk-cert-issuer-row">
                  {getCategoryIcon(cert.category)}
                  <span className="uk-cert-issuer-name">{cert.issuerShort}</span>
                </div>

                <h3 className="uk-cert-card-title">{cert.title}</h3>

                {/* Skill Taxonomy Tags */}
                <div className="uk-cert-skills-wrap">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="uk-cert-skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Footer Metadata */}
                <div className="uk-cert-footer">
                  <span className="uk-cert-date">{cert.date}</span>
                  <span className="uk-cert-verified-pill">
                    <ShieldCheck size={13} />
                    <span>Verified</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

