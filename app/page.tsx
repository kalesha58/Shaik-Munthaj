import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { SkillsEducationExperience } from "@/components/sections/SkillsEducationExperience";
import { Stats } from "@/components/sections/Stats";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Stats />
        <About />
        <Projects />
        <SkillsEducationExperience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
