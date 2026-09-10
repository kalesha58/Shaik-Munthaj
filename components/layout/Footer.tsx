import { Button } from "@/components/ui/Button";
import { profile } from "@/data/profile";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:items-start lg:justify-between lg:text-left">
          <div>
            <h3 className="text-xl font-bold">{profile.name}</h3>
            <p className="mt-1 text-sm text-white/70">{profile.title}</p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
              >
                <Mail size={16} />
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
              >
                <Phone size={16} />
                {profile.phone}
              </a>
              <span className="flex items-center gap-2 text-sm text-white/70">
                <MapPin size={16} />
                {profile.location}
              </span>
            </div>
            <div className="mt-4 flex justify-center gap-4 lg:justify-start">
              <Link
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={18} />
              </Link>
              <Link
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20"
                aria-label="GitHub"
              >
                <GitHubIcon size={18} />
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 lg:items-end">
            <div>
              <h4 className="text-lg font-semibold">Let&apos;s Connect</h4>
              <p className="mt-1 max-w-sm text-sm text-white/70">
                Open to data analyst, ML, and quantitative research opportunities
                in Canada.
              </p>
            </div>
            <Button href="#contact" variant="primary">
              Get In Touch
            </Button>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/50">
          © {year} {profile.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
