"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { skillGroups } from "@/data/skills";
import {
  Brain,
  Code2,
  Cpu,
  Database,
  Eye,
  Layers,
  Network,
  Sparkles,
  Terminal,
} from "lucide-react";

// Top Specialisms / Domain Focus
const specialisms = [
  {
    icon: <Eye size={20} />,
    colorClass: "uk-spec-icon-teal",
    badgeClass: "spec-badge-teal",
    title: "Computer Vision & Medical AI",
    badge: "Specialized Deep Learning",
    description:
      "Engineered diagnostic CNN architectures and Transfer Learning pipelines for COVID-19 detection from multi-modal lung X-ray radiography with OpenCV.",
    pills: ["CNNs", "Transfer Learning", "OpenCV", "Diagnostic AI"],
  },
  {
    icon: <Brain size={20} />,
    colorClass: "uk-spec-icon-blue",
    badgeClass: "spec-badge-blue",
    title: "Predictive Analytics & Big Data",
    badge: "Quantitative Research",
    description:
      "Advanced statistical modelling, feature engineering, and high-dimensional predictive pipelines using XGBoost, Scikit-Learn, and distributed quantitative methods.",
    pills: ["Big Data Analysis", "Scikit-Learn", "XGBoost", "Quantitative Analytics"],
  },
  {
    icon: <Network size={20} />,
    colorClass: "uk-spec-icon-purple",
    badgeClass: "spec-badge-purple",
    title: "Full-Stack Analytics & APIs",
    badge: "Enterprise Web Systems",
    description:
      "Architected responsive full-stack applications with NoSQL data pipelines, RESTful backend services, and interactive client dashboards.",
    pills: ["MongoDB", "Express.js", "Angular", "Node.js", "REST APIs"],
  },
];

export function Skills() {
  const [activeSkillCategory, setActiveSkillCategory] = useState<string>("All");

  const filteredSkillGroups =
    activeSkillCategory === "All"
      ? skillGroups
      : skillGroups.filter((g) => g.category === activeSkillCategory);

  const totalSkillsCount = skillGroups.reduce(
    (acc, group) => acc + group.skills.length,
    0
  );

  return (
    <AnimatedSection id="skills" className="uk-luxury-section">
      <div className="uk-luxury-container">
        {/* ── Section Header ── */}
        <div className="uk-luxury-header">
          <div className="uk-luxury-header-left">
            <div className="uk-luxury-eyebrow">
              <Sparkles size={14} />
              <span>TECHNICAL CAPABILITIES &amp; PROFICIENCIES</span>
            </div>
            <h2 className="uk-luxury-title">Skills &amp; Technology Stack</h2>
            <p className="uk-luxury-subtitle">
              A comprehensive dossier bridging advanced academic quantitative research, production-grade artificial intelligence pipelines, and scalable software engineering.
            </p>
          </div>
        </div>

        {/* ── Dynamic Content Canvas ── */}
        <div className="uk-canvas-card">
          <div className="uk-tech-layout">
            {/* Left Column: Specialism Highlights */}
            <div className="uk-specialisms-col">
              <div className="mb-1 flex items-center justify-between">
                <h3 className="text-base font-extrabold text-slate-900">
                  Core Specialisms
                </h3>
                <span className="text-xs font-semibold text-slate-500">
                  Key Focus Areas
                </span>
              </div>

              {specialisms.map((spec, i) => (
                <div key={i} className="uk-specialism-card">
                  <div className="uk-spec-header">
                    <div className={`uk-spec-icon-box ${spec.colorClass}`}>
                      {spec.icon}
                    </div>
                    <h4 className="uk-spec-title">{spec.title}</h4>
                    <span className={`uk-spec-badge ${spec.badgeClass}`}>
                      {spec.badge}
                    </span>
                  </div>
                  <p className="uk-spec-desc">{spec.description}</p>
                  <div className="uk-spec-pills">
                    {spec.pills.map((pill) => (
                      <span key={pill} className="uk-spec-mini-pill">
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Full Skills Cloud Matrix */}
            <div className="uk-skills-panel">
              <div className="uk-skills-panel-top">
                <div>
                  <h3 className="uk-skills-panel-title">Technology Matrix</h3>
                  <p className="text-xs font-medium text-slate-500">
                    {totalSkillsCount} Verified Proficiencies
                  </p>
                </div>

                {/* Filter Pills */}
                <div className="uk-skill-filter-tabs">
                  {[
                    { id: "All", label: "All Stack" },
                    { id: "Languages & Frameworks", label: "Languages" },
                    { id: "Data Science & ML", label: "AI / ML" },
                    { id: "Tools & Databases", label: "Tools & DB" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveSkillCategory(tab.id)}
                      className={`uk-filter-tab-btn ${
                        activeSkillCategory === tab.id ? "active" : ""
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Skills Cloud List */}
              <div className="uk-skills-grid-cloud">
                {filteredSkillGroups.map((group) => (
                  <div key={group.category} className="uk-skill-category-block">
                    <div className="uk-skill-cat-title">
                      <Code2 size={13} className="text-primary" />
                      <span>{group.category}</span>
                      <span className="text-[10px] font-normal text-slate-400">
                        ({group.skills.length})
                      </span>
                    </div>

                    <div className="uk-skills-pills-flow">
                      {group.skills.map((skill) => {
                        const isFeatured = [
                          "Python",
                          "Machine Learning",
                          "Deep Learning",
                          "CNNs",
                          "MongoDB",
                          "Node.js",
                          "Big Data Analysis",
                          "Computer Vision",
                        ].includes(skill);

                        return (
                          <span
                            key={skill}
                            className={`uk-cloud-pill ${
                              isFeatured ? "featured" : ""
                            }`}
                          >
                            <span className="uk-cloud-pill-dot" />
                            {skill}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </AnimatedSection>
  );
}
