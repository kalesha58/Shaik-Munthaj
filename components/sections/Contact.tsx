"use client";

import { useState, FormEvent } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { profile } from "@/data/profile";
import {
  Check,
  CheckCircle2,
  Copy,
  Download,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";


type FormStatus = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedTopic, setSelectedTopic] = useState<string>("AI / ML Project");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  function handleCopyEmail() {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("inquiry_type", selectedTopic);

    if (!formspreeId) {
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
        `[${selectedTopic}] ${String(formData.get("subject") || "Portfolio Inquiry")}`
      )}&body=${encodeURIComponent(
        `Inquiry Type: ${selectedTopic}\nName: ${formData.get("name")}\nEmail: ${formData.get("email")}\n\n${formData.get("message")}`
      )}`;
      setStatus("idle");
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        const data = await response.json();
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Network error. Please try again or email directly.");
      setStatus("error");
    }
  }

  return (
    <AnimatedSection id="contact" className="uk-contact-section">
      <div className="uk-contact-container">
        {/* ── Header ── */}
        <div className="uk-contact-header">
          <div className="uk-contact-header-left">
            <div className="uk-contact-eyebrow">
              <Sparkles size={14} />
              <span>Get In Touch & Collaboration</span>
            </div>
            <h2 className="uk-contact-title">Let&apos;s Build Something Impactful</h2>
            <p className="uk-contact-subtitle">
              Whether you are looking to deploy real-world machine learning
              models, develop high-performance analytics pipelines, or discuss
              full-time technical roles, I would love to connect.
            </p>
          </div>
        </div>

        {/* ── Asymmetric Layout Grid ── */}
        <div className="uk-contact-grid">
          {/* ══════════════════════════════════════════
              LEFT COLUMN: EXECUTIVE CONTACT DOSSIER
             ══════════════════════════════════════════ */}
          <div className="uk-contact-dossier">
            <div className="uk-dossier-top">
              <h3 className="uk-dossier-title">Direct Communication</h3>
              <p className="uk-dossier-desc">
                Feel free to reach out directly through any of my verified
                channels or leave a detailed message.
              </p>

              {/* Channels List */}
              <div className="uk-channels-list">
                {/* Email Channel */}
                <div className="uk-channel-card">
                  <div className="uk-channel-left">
                    <div className="uk-channel-icon-box channel-icon-blue">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="uk-channel-label">Direct Email</span>
                      <p className="uk-channel-val">{profile.email}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="uk-copy-btn"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <>
                        <Check size={13} className="text-emerald-600" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Phone Channel */}
                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="uk-channel-card"
                >
                  <div className="uk-channel-left">
                    <div className="uk-channel-icon-box channel-icon-teal">
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className="uk-channel-label">Direct Telephone</span>
                      <p className="uk-channel-val">{profile.phone}</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-teal">Call</span>
                </a>

                {/* Location Channel */}
                <div className="uk-channel-card">
                  <div className="uk-channel-left">
                    <div className="uk-channel-icon-box channel-icon-purple">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <span className="uk-channel-label">Location / Base</span>
                      <p className="uk-channel-val">{profile.location}</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-slate-400">EST / EDT</span>
                </div>
              </div>

              {/* Quick Actions & Social Buttons */}
              <div className="mb-6 flex flex-wrap items-center gap-2">
                <a
                  href={profile.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-3.5 py-2 text-xs font-bold text-slate-800 transition-colors hover:bg-slate-200"
                >
                  <Download size={14} className="text-primary" />
                  <span>Curriculum Vitae</span>
                </a>

                {profile.social.linkedin && (
                  <a
                    href={profile.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-white px-3 py-2 text-xs font-bold text-slate-700 transition-all hover:border-primary hover:text-primary"
                  >
                    <LinkedInIcon size={14} />
                    <span>LinkedIn</span>
                  </a>
                )}

                {profile.social.github && (
                  <a
                    href={profile.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-white px-3 py-2 text-xs font-bold text-slate-700 transition-all hover:border-dark hover:text-dark"
                  >
                    <GitHubIcon size={14} />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>

            {/* Availability Status Box */}
            <div className="uk-availability-badge">
              <span className="uk-pulse-dot" />
              <span className="uk-availability-text">
                Available for Full-Time Roles, Co-ops & AI Consulting
              </span>
            </div>
          </div>

          {/* ══════════════════════════════════════════
              RIGHT COLUMN: INTERACTIVE INQUIRY FORM
             ══════════════════════════════════════════ */}
          <div className="uk-contact-form-panel">
            {status === "success" ? (
              <div className="uk-form-success-box">
                <div className="uk-success-icon-wrap">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">
                  Message Dispatched Successfully
                </h3>
                <p className="mt-2 max-w-md text-sm text-slate-600">
                  Thank you for reaching out, Shaik Munthaj has received your
                  inquiry and will reply promptly within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-bold text-white shadow-xs transition-transform hover:scale-105"
                >
                  <MessageSquare size={16} />
                  <span>Send Another Message</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="uk-form-header">
                  <h3 className="uk-form-heading">Send an Inquiry</h3>
                  <p className="uk-form-subheading">
                    Please provide project or role details and I&apos;ll get back to you shortly.
                  </p>
                </div>

                {/* Inquiry Topic Selection */}
                <div className="uk-inquiry-topics-wrap">
                  <label className="uk-topic-label">Inquiry Focus</label>
                  <div className="uk-topics-grid">
                    {[
                      "AI / ML Project",
                      "Data Analytics",
                      "Full-Time Opportunity",
                      "Quantitative Research",
                      "General Inquiry",
                    ].map((topic) => (
                      <button
                        type="button"
                        key={topic}
                        onClick={() => setSelectedTopic(topic)}
                        className={`uk-topic-chip ${
                          selectedTopic === topic ? "active" : ""
                        }`}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email Row */}
                <div className="uk-form-row-2">
                  <div className="uk-input-field-group">
                    <label htmlFor="name" className="uk-field-label">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      className="uk-input-control"
                    />
                  </div>

                  <div className="uk-input-field-group">
                    <label htmlFor="email" className="uk-field-label">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="alex@company.com"
                      className="uk-input-control"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="uk-input-field-group">
                  <label htmlFor="subject" className="uk-field-label">
                    Subject / Project Headline
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="Brief summary of your inquiry..."
                    className="uk-input-control"
                  />
                </div>

                {/* Message */}
                <div className="uk-input-field-group">
                  <label htmlFor="message" className="uk-field-label">
                    Message Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about your objectives, timeline, or opportunity..."
                    className="uk-textarea-control"
                  />
                </div>

                {status === "error" && (
                  <p className="mb-4 text-xs font-bold text-red-600">
                    {errorMessage}
                  </p>
                )}

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="uk-submit-action-btn"
                >
                  <Send size={16} />
                  <span>
                    {status === "submitting"
                      ? "Dispatching Inquiry..."
                      : "Send Inquiry"}
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

