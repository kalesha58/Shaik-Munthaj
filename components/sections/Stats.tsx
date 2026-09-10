"use client";

import { stats } from "@/data/stats";
import { Database, Users, FileText, TrendingUp } from "lucide-react";

const iconMap = {
  Database,
  Users,
  FileText,
  TrendingUp,
};

export function Stats() {
  return (
    <section className="key-metrics-section">
      <div className="key-metrics-container">
        
        {/* ── Left info column ── */}
        <div className="key-metrics-info">
          <p className="key-metrics-eyebrow">KEY METRICS</p>
          <h2 className="key-metrics-title">
            Real-World Impact<br />Through Data
          </h2>
          <p className="key-metrics-desc">
            A snapshot of my analytical work and the real-world datasets I&apos;ve worked with.
          </p>
          <div className="key-metrics-accent-line" />
        </div>

        {/* ── Metric Cards Grid ── */}
        <div className="key-metrics-cards">
          {stats.map((stat) => {
            const Icon = iconMap[stat.iconName];
            return (
              <div key={stat.label} className={`metric-card metric-card-${stat.color}`}>
                <div className={`metric-icon-wrap metric-icon-${stat.color}`}>
                  <Icon size={18} />
                </div>
                
                <div className="metric-value-wrap">
                  <span className={`metric-value metric-value-${stat.color}`}>
                    {stat.value}
                  </span>
                </div>

                <div className="metric-label-wrap">
                  <p className="metric-label">{stat.label}</p>
                  {stat.sublabel && (
                    <span className="metric-sublabel">{stat.sublabel}</span>
                  )}
                </div>

                {/* Mini bar chart illustration */}
                <div className="metric-mini-chart" aria-hidden="true">
                  {stat.chartBars.map((h, i) => (
                    <span
                      key={i}
                      className={`metric-chart-bar metric-bar-${stat.color}`}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Right Script Accent ── */}
        <div className="key-metrics-script" aria-hidden="true">
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

      </div>
    </section>
  );
}

