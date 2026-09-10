"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { skillGroups } from "@/data/skills";
import {
  Award,
  BookOpen,
  Brain,
  Briefcase,
  Calendar,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  Eye,
  Globe2,
  GraduationCap,
  Layers,
  MapPin,
  Network,
  ShieldCheck,
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

// Tech tags for experience items
const experienceTechTags: Record<string, string[]> = {
  "Smart Bridge Educational Services": [
    "Python",
    "Predictive Modeling",
    "Multi-Modal AI",
    "Accuracy Optimization",
    "Data Preprocessing",
  ],
  "Indian Servers": [
    "CNNs",
    "Transfer Learning",
    "OpenCV",
    "Medical Radiography",
    "Tensor Pipelines",
  ],
  Brainovision: [
    "MongoDB",
    "Express.js",
    "Angular",
    "Node.js",
    "RESTful APIs",
    "Microservices",
  ],
};

export function SkillsEducationExperience() {
  const [activeTab, setActiveTab] = useState<"skills" | "education" | "experience">("skills");
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
        {/* ── Section Header (Editorial British Studio) ── */}
        <div className="uk-luxury-header">
          <div className="uk-luxury-header-left">
            <div className="uk-luxury-eyebrow">
              <Sparkles size={14} />
              <span>Curriculum Vitae & Technical Portfolio</span>
            </div>
            <h2 className="uk-luxury-title">Skills, Education & Experience</h2>
            <p className="uk-luxury-subtitle">
              A comprehensive dossier bridging advanced academic quantitative
              research, production-grade artificial intelligence pipelines, and
              scalable software engineering.
            </p>
          </div>
        </div>

        {/* ── Luxury Segment Switcher Bar ── */}
        <div className="uk-switcher-wrap">
          <div className="uk-switcher-bar">
            <button
              onClick={() => setActiveTab("skills")}
              className={`uk-switcher-btn ${activeTab === "skills" ? "active" : ""}`}
            >
              <span className="uk-switcher-num">01</span>
              <Cpu size={16} />
              <span>Technical Capabilities</span>
            </button>

            <button
              onClick={() => setActiveTab("education")}
              className={`uk-switcher-btn ${activeTab === "education" ? "active" : ""}`}
            >
              <span className="uk-switcher-num">02</span>
              <GraduationCap size={16} />
              <span>Academic Pedigree & Honors</span>
            </button>

            <button
              onClick={() => setActiveTab("experience")}
              className={`uk-switcher-btn ${activeTab === "experience" ? "active" : ""}`}
            >
              <span className="uk-switcher-num">03</span>
              <Briefcase size={16} />
              <span>Industry Experience</span>
            </button>
          </div>
        </div>

        {/* ── Dynamic Content Canvas ── */}
        <div className="uk-canvas-card">
          {/* ══════════════════════════════════════════════
              TAB 1: TECHNICAL MATRIX & CAPABILITIES
             ══════════════════════════════════════════════ */}
          {activeTab === "skills" && (
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
          )}

          {/* ══════════════════════════════════════════════
              TAB 2: ACADEMIC CREDENTIALS & PEDIGREE
             ══════════════════════════════════════════════ */}
          {activeTab === "education" && (
            <div className="uk-edu-layout">
              {/* Trent University Card */}
              <div className="uk-academic-card">
                <div className="uk-academic-top">
                  <div className="uk-institution-badge">
                    <div className="uk-institution-icon institution-icon-trent">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <h3 className="uk-institution-name">Trent University</h3>
                      <p className="uk-institution-country">
                        Peterborough, Ontario · Canada
                      </p>
                    </div>
                  </div>

                  <div className="uk-gpa-seal">
                    <span className="uk-gpa-val">3.9</span>
                    <span className="uk-gpa-label">MSc GPA / 4.0</span>
                  </div>
                </div>

                <p className="uk-degree-name">
                  Master of Science in Applied Modelling & Quantitative Methods:
                  Big Data Analytics
                </p>

                <div className="uk-academic-meta">
                  <span className="inline-flex items-center gap-1.5 font-semibold text-slate-700">
                    <Calendar size={14} className="text-primary" />
                    Jan 2025 – Apr 2026
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1.5 font-semibold text-teal">
                    <Globe2 size={14} />
                    Full-Time Graduate Degree
                  </span>
                </div>

                <div className="uk-academic-accreditation">
                  <ShieldCheck size={20} className="uk-accreditation-icon" />
                  <div>
                    <span className="font-bold text-slate-800">
                      Commonwealth & Ontario Institutional Accreditation:
                    </span>{" "}
                    Enrolled in a fully accredited graduate curriculum recognized by the
                    Council of Ontario Universities (COU), Universities Canada, and
                    the Association of Commonwealth Universities (ACU).
                  </div>
                </div>
              </div>

              {/* Undergraduate Degree Card */}
              <div className="uk-academic-card">
                <div className="uk-academic-top">
                  <div className="uk-institution-badge">
                    <div className="uk-institution-icon institution-icon-jntu">
                      <BookOpen size={24} />
                    </div>
                    <div>
                      <h3 className="uk-institution-name">
                        PSCMRCET · JNTU Kakinada
                      </h3>
                      <p className="uk-institution-country">Vijayawada · India</p>
                    </div>
                  </div>

                  <div className="uk-gpa-seal">
                    <span className="uk-gpa-val">7.97</span>
                    <span className="uk-gpa-label">B.Tech CGPA / 10.0</span>
                  </div>
                </div>

                <p className="uk-degree-name">
                  Bachelor of Computer Science in Artificial Intelligence and Machine
                  Learning
                </p>

                <div className="uk-academic-meta">
                  <span className="inline-flex items-center gap-1.5 font-semibold text-slate-700">
                    <Calendar size={14} className="text-primary" />
                    Jan 2020 – May 2024
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1.5 font-semibold text-primary">
                    <Award size={14} />
                    First Class with Distinction
                  </span>
                </div>

                <div className="uk-academic-accreditation">
                  <CheckCircle2 size={20} className="uk-accreditation-icon" />
                  <div>
                    <span className="font-bold text-slate-800">
                      University Affiliation & Honors:
                    </span>{" "}
                    Completed comprehensive undergraduate degree under JNTU
                    Kakinada University specialized in AI foundations, neural
                    architectures, and algorithms.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════
              TAB 3: INDUSTRY EXPERIENCE CHRONICLE
             ══════════════════════════════════════════════ */}
          {activeTab === "experience" && (
            <div className="uk-experience-timeline">
              {experience.map((exp, idx) => {
                const tags = experienceTechTags[exp.company] || [];
                return (
                  <div key={idx} className="uk-exp-row-card">
                    {/* Left Meta Column */}
                    <div className="uk-exp-left-meta">
                      <span className="uk-exp-period-badge">
                        <Calendar size={13} />
                        {exp.period}
                      </span>
                      <h4 className="uk-exp-company-title">{exp.company}</h4>
                      <span className="uk-exp-loc-tag">
                        <MapPin size={13} />
                        {exp.location}
                      </span>
                    </div>

                    {/* Right Content Column */}
                    <div className="uk-exp-right-content">
                      <h3 className="uk-exp-role-title">{exp.role}</h3>

                      <div className="uk-exp-bullets-list">
                        {exp.highlights.map((point, pi) => (
                          <div key={pi} className="uk-exp-bullet-row">
                            <CheckCircle2
                              size={16}
                              className="uk-exp-bullet-check"
                            />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>

                      {tags.length > 0 && (
                        <div className="uk-exp-stack-row">
                          {tags.map((t) => (
                            <span key={t} className="uk-exp-tech-badge">
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
}



