"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { leadership } from "@/data/leadership";
import { profile } from "@/data/profile";
import { GraduationCap, MapPin, Target, Users } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    label: "Graduate Degree",
    value: "MSc in Applied Modelling\n& Quantitative Methods",
    color: "blue",
  },
  {
    icon: MapPin,
    label: "Based In",
    value: "Oshawa, ON\nCanada",
    color: "blue",
  },
  {
    icon: Target,
    label: "Focused On",
    value: "Data Analysis\nMachine Learning\nReal-World Impact",
    color: "teal",
  },
];

export function About() {
  return (
    <AnimatedSection id="about" className="about-section">
      <div className="about-container">
        {/* ── Main 3-column grid ── */}
        <div className="about-grid">

          {/* ── LEFT: Photo column ── */}
          <div className="about-photo-col">
            {/* Decorative dot matrix */}
            <div className="about-dots" aria-hidden="true" />

            {/* Blob photo frame with organic backdrop */}
            <div className="about-blob-frame">
              <div className="about-blob-bg" />
              <Image
                src={profile.photoPath}
                alt="Shaik Munthaj – Data Analyst"
                fill
                className="about-blob-img object-[85%_top]"
                sizes="(max-width: 768px) 90vw, 360px"
                priority
              />
            </div>

            {/* Floating quote badge */}
            <div className="about-quote-card">
              <span className="about-quote-icon">“</span>
              <p className="about-quote-text">
                Turning data into<br />meaningful insights
              </p>
            </div>
          </div>

          {/* ── CENTER: Bio column ── */}
          <div className="about-bio-col">
            <div className="about-bio-header">
              <p className="about-eyebrow">ABOUT ME</p>
              <h2 className="about-bio-title">
                <span className="about-bio-title-accent">Data-Driven</span> Problem Solver
              </h2>
              <p className="about-bio-sub">
                Building data-driven solutions from pipelines to production.
              </p>
            </div>

            <div className="about-bio-body">
              <p>
                I am a Data Analyst and Machine Learning Specialist holding a
                Master of Science in Applied Modelling &amp; Quantitative Methods
                from Trent University. I have a strong background in computer
                science, predictive modelling, deep learning, and full-stack web
                development.
              </p>
              <p>
                Currently based in Oshawa, Ontario, I combine rigorous
                quantitative methods with practical software engineering to
                deliver actionable insights. My work spans municipal policy
                analysis, medical imaging diagnostics, financial forecasting,
                and full-stack application development.
              </p>
            </div>

            {/* 3 Horizontal Highlight Tiles */}
            <div className="about-tiles">
              {highlights.map(({ icon: Icon, label, value, color }) => (
                <div key={label} className={`about-tile about-tile-${color}`}>
                  <div className={`about-tile-icon about-tile-icon-${color}`}>
                    <Icon size={18} />
                  </div>
                  <div className="about-tile-content">
                    <p className="about-tile-label">{label}</p>
                    <p className="about-tile-value">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Leadership & Volunteer card ── */}
          <div className="about-leadership-card">
            <div className="about-lead-header">
              <div className="about-lead-title-row">
                <div className="about-lead-icon-wrap">
                  <Users size={16} />
                </div>
                <h3 className="about-lead-title">Leadership &amp; Volunteer</h3>
              </div>
              <span className="about-giving-badge">Giving Back</span>
            </div>

            <div className="about-lead-timeline">
              {leadership.map((item, index) => (
                <div key={item.role} className="about-lead-item">
                  <div className="about-lead-marker-col">
                    <span className={`about-lead-dot dot-${index === 0 ? "blue" : "teal"}`} />
                    {index < leadership.length - 1 && <span className="about-lead-line" />}
                  </div>
                  <div className="about-lead-content">
                    <h4 className="about-lead-role">{item.role}</h4>
                    <p className="about-lead-org">{item.organization}</p>
                    <p className="about-lead-period">{item.period}</p>
                    <p className="about-lead-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </AnimatedSection>
  );
}

