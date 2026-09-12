import { Button } from "@/components/ui/Button";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { navLinks, profile } from "@/data/profile";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const FOOTER_GITHUB = "https://github.com/Munthaj";

const contactItems = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    icon: Phone,
  },
  {
    label: "Location",
    value: profile.location,
    href: null,
    icon: MapPin,
  },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      <div className="h-1 bg-primary" />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-sm font-bold tracking-wide text-white">
              SM
            </div>
            <h3 className="mt-5 text-2xl font-semibold tracking-tight">
              {profile.name}
            </h3>
            <p className="mt-1 text-sm font-medium text-white/65">
              {profile.title}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
              Turning data into decisions through predictive modelling, applied
              research, and production-ready machine learning systems.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <Link
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={18} />
              </Link>
              <Link
                href={FOOTER_GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
                aria-label="GitHub"
              >
                <GitHubIcon size={18} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
              Explore
            </p>
            <nav className="mt-5 flex flex-col gap-2.5" aria-label="Footer">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit text-sm text-white/65 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
              Contact
            </p>
            <ul className="mt-5 space-y-3">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-white/70">
                      <Icon size={16} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[11px] font-medium uppercase tracking-wider text-white/40">
                        {item.label}
                      </span>
                      <span className="mt-0.5 block truncate text-sm text-white/80">
                        {item.value}
                      </span>
                    </span>
                  </>
                );

                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.03] p-3 transition-colors hover:border-white/15 hover:bg-white/[0.06]"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.03] p-3">
                        {content}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#1e293b] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
                Let&apos;s Connect
              </p>
              <h4 className="mt-3 text-xl font-semibold tracking-tight">
                Open to opportunities
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                Data analyst, ML, and quantitative research roles across Canada.
              </p>
              <div className="mt-6">
                <Button href="#contact" variant="primary" className="w-full">
                  Get In Touch
                </Button>
              </div>
              <p className="mt-4 text-xs text-white/40">
                Typically replies within 24 hours
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/40 sm:flex-row">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              Available in Canada
            </span>
            <Link
              href="#home"
              className="inline-flex items-center gap-1.5 text-white/55 transition-colors hover:text-white"
            >
              Back to top
              <ArrowUp size={14} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
