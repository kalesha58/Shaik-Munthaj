"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { experience, ExperienceStat } from "@/data/experience";
import {
  Briefcase,
  Code2,
  GraduationCap,
  TrendingUp,
  MapPin,
  Building2,
  CheckCircle2,
  ExternalLink,
  BookOpen,
  Layers,
  Database,
  Shield,
  ImageIcon,
} from "lucide-react";

function renderStatIcon(iconName: ExperienceStat["iconName"], color: "blue" | "teal" | "purple") {
  const colorClass =
    color === "blue"
      ? "text-blue-600"
      : color === "teal"
      ? "text-teal-600"
      : "text-purple-600";

  switch (iconName) {
    case "database":
      return <Database size={15} className={colorClass} />;
    case "trending":
      return <TrendingUp size={15} className={colorClass} />;
    case "shield":
      return <Shield size={15} className={colorClass} />;
    case "image":
      return <ImageIcon size={15} className={colorClass} />;
    case "layers":
      return <Layers size={15} className={colorClass} />;
    case "code":
      return <Code2 size={15} className={colorClass} />;
    default:
      return <CheckCircle2 size={15} className={colorClass} />;
  }
}

function getCompanyIcon(id: string) {
  switch (id) {
    case "smart-bridge":
      return (
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
          <BookOpen size={18} />
        </div>
      );
    case "indian-servers":
      return (
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600 border border-teal-100">
          <Layers size={18} />
        </div>
      );
    case "brainovision":
    default:
      return (
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600 border border-purple-100">
          <Code2 size={18} />
        </div>
      );
  }
}

function getTypeBadge(type: string, color: "blue" | "teal" | "purple") {
  switch (color) {
    case "blue":
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
          {type}
        </span>
      );
    case "teal":
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-50 text-teal-700 border border-teal-200">
          {type}
        </span>
      );
    case "purple":
    default:
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-200">
          {type}
        </span>
      );
  }
}

function getDotColor(color: "blue" | "teal" | "purple") {
  switch (color) {
    case "blue":
      return "bg-blue-600 ring-4 ring-blue-100";
    case "teal":
      return "bg-teal-600 ring-4 ring-teal-100";
    case "purple":
    default:
      return "bg-purple-600 ring-4 ring-purple-100";
  }
}

function getCheckmarkColor(color: "blue" | "teal" | "purple") {
  switch (color) {
    case "blue":
      return "text-blue-600";
    case "teal":
      return "text-teal-600";
    case "purple":
    default:
      return "text-purple-600";
  }
}

function getAccentColorText(color: "blue" | "teal" | "purple") {
  switch (color) {
    case "blue":
      return "text-blue-600";
    case "teal":
      return "text-teal-600";
    case "purple":
    default:
      return "text-purple-600";
  }
}

export function Experience() {
  return (
    <AnimatedSection
      id="experience"
      className="relative bg-[#f8fafc] py-16 sm:py-24 border-b border-slate-200/80 overflow-hidden"
    >
      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-20 xl:px-28">
        
        {/* ── Section Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="flex flex-col max-w-3xl">
            <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-2">
              EXPERIENCE
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Work &amp; Internship Experience
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              Hands-on contributions spanning production machine learning pipelines, deep learning computer vision architectures, and robust full-stack software development.
            </p>
          </div>

          {/* 4-Item Summary Metric Card in Top Right */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 bg-white border border-slate-200/90 rounded-2xl p-3 sm:p-4 shadow-xs self-start lg:self-auto shrink-0">
            {/* Metric 1 */}
            <div className="flex items-center gap-2.5 px-2 py-1">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Briefcase size={16} />
              </div>
              <div>
                <div className="text-xs font-extrabold text-slate-900">3+</div>
                <div className="text-[10px] text-slate-500 font-medium whitespace-nowrap">Industry Internships</div>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="flex items-center gap-2.5 px-2 py-1 border-t sm:border-t-0 sm:border-l border-slate-100">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                <Code2 size={16} />
              </div>
              <div>
                <div className="text-xs font-extrabold text-slate-900">AI/ML</div>
                <div className="text-[10px] text-slate-500 font-medium whitespace-nowrap">Core Focus</div>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="flex items-center gap-2.5 px-2 py-1 border-t sm:border-t-0 sm:border-l border-slate-100">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <GraduationCap size={16} />
              </div>
              <div>
                <div className="text-xs font-extrabold text-slate-900">Real-World</div>
                <div className="text-[10px] text-slate-500 font-medium whitespace-nowrap">Experience</div>
              </div>
            </div>

            {/* Metric 4 */}
            <div className="flex items-center gap-2.5 px-2 py-1 border-t sm:border-t-0 sm:border-l border-slate-100">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <TrendingUp size={16} />
              </div>
              <div>
                <div className="text-xs font-extrabold text-slate-900">Impact</div>
                <div className="text-[10px] text-slate-500 font-medium whitespace-nowrap">Through Data</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Timeline Track & Experience Cards List ── */}
        <div className="relative">
          {/* Vertical continuous timeline rail (desktop) */}
          <div
            className="hidden md:block absolute left-[30px] top-6 bottom-6 w-[2px] bg-slate-200"
            aria-hidden="true"
          />

          <div className="space-y-8 sm:space-y-10">
            {experience.map((item, index) => (
              <div
                key={item.id}
                className="relative flex flex-col md:flex-row items-start gap-4 md:gap-8"
              >
                {/* ── Left Timeline Node on desktop ── */}
                <div className="hidden md:flex flex-col items-center shrink-0 w-[120px] pt-4">
                  <div
                    className={`h-4 w-4 rounded-full ${getDotColor(
                      item.color
                    )} mb-2 z-10 transition-transform group-hover:scale-125`}
                  />
                  <span className="text-xs font-bold text-slate-800 text-center leading-tight">
                    {item.period}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium mt-0.5">
                    {item.duration}
                  </span>
                </div>

                {/* ── Main Experience Card ── */}
                <div className="w-full flex-1 bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-7 shadow-xs hover:shadow-md transition-all duration-200">
                  
                  {/* Mobile Date Header */}
                  <div className="flex md:hidden items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <div
                        className={`h-3 w-3 rounded-full ${getDotColor(
                          item.color
                        )}`}
                      />
                      <span className="text-xs font-bold text-slate-800">
                        {item.period}
                      </span>
                    </div>
                    <span className="text-xs font-medium text-slate-400">
                      {item.duration}
                    </span>
                  </div>

                  {/* 2-Column Grid: Left Details vs Right Preview Visual Card */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
                    
                    {/* ── Left 7-Cols: Company, Role, Bullets, Tech ── */}
                    <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                      <div>
                        {/* Company row */}
                        <div className="flex items-start justify-between gap-3 mb-2.5">
                          <div className="flex items-center gap-2.5">
                            {getCompanyIcon(item.id)}
                            <div>
                              <div className="flex flex-wrap items-center gap-2">
                                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                                  {item.company}
                                </h3>
                                {getTypeBadge(item.type, item.color)}
                              </div>
                              <p className="flex items-center gap-1 text-xs text-slate-500 mt-0.5 font-medium">
                                <MapPin size={12} className="text-slate-400" />
                                {item.location}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Role Title */}
                        <h4 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight mt-3">
                          {item.role}
                        </h4>

                        {/* Summary sentence */}
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1.5 mb-3.5">
                          {item.summary}
                        </p>

                        {/* Bullet Highlights */}
                        <ul className="space-y-2">
                          {item.highlights.map((highlight, hIdx) => (
                            <li
                              key={hIdx}
                              className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-700 leading-relaxed"
                            >
                              <CheckCircle2
                                size={15}
                                className={`${getCheckmarkColor(
                                  item.color
                                )} shrink-0 mt-0.5`}
                              />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies Footer */}
                      <div className="border-t border-slate-100 pt-3.5 mt-2">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="text-xs font-semibold text-slate-400 mr-1.5">
                            Technologies:
                          </span>
                          {item.techTags.map((tech) => (
                            <span
                              key={tech}
                              className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-100/90 text-slate-700 border border-slate-200/60 hover:bg-slate-200/70 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* ── Right 5-Cols: Interactive Case Preview Widget ── */}
                    <div className="lg:col-span-5 flex flex-col justify-between bg-slate-50/80 border border-slate-200/90 rounded-2xl p-4 sm:p-5">
                      
                      {/* Top Row: Visual Image + Title */}
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-3">
                          <span className="text-[11px] font-mono font-bold text-slate-400">
                            0{index + 1}
                          </span>
                        </div>

                        <div className="flex items-center gap-3.5 mb-4">
                          {/* Image thumbnail */}
                          <div className="relative h-20 w-24 sm:h-22 sm:w-28 shrink-0 rounded-xl overflow-hidden border border-slate-200 bg-white shadow-2xs">
                            <Image
                              src={item.preview.imagePath}
                              alt={item.preview.imageAlt}
                              fill
                              className="object-cover transition-transform duration-300 hover:scale-105"
                              sizes="(max-width: 768px) 100px, 120px"
                            />
                          </div>

                          {/* Preview Title */}
                          <div className="flex-1">
                            <p className="text-xs sm:text-[13px] font-bold text-slate-800 leading-snug">
                              {item.preview.titlePrefix}{" "}
                              <span className={getAccentColorText(item.color)}>
                                {item.preview.titleAccent}
                              </span>
                            </p>
                          </div>
                        </div>

                        {/* 2 Mini Metric Stat Badges */}
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          {item.preview.stats.map((stat) => (
                            <div
                              key={stat.label}
                              className="bg-white border border-slate-200/80 rounded-xl p-2.5 shadow-3xs"
                            >
                              <div className="flex items-center gap-1.5 text-xs font-extrabold text-slate-900">
                                {renderStatIcon(stat.iconName, item.color)}
                                <span>{stat.value}</span>
                              </div>
                              <div className="text-[10px] font-medium text-slate-500 mt-0.5 leading-tight">
                                {stat.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Certificate Link */}
                      <div className="pt-2 border-t border-slate-200/60 flex items-center justify-end">
                        <Link
                          href={item.preview.certificateUrl || "#certifications"}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-blue-800 transition-colors"
                        >
                          <span>View Certificate</span>
                          <ExternalLink size={13} />
                        </Link>
                      </div>

                    </div>

                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </AnimatedSection>
  );
}
