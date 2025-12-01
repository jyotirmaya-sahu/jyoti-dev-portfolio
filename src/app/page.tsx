import Hero from "@/components/Hero";
import StickyActions from "@/components/StickyActions";
import WhatIDo from "@/components/WhatIDo";
import CaseStudies from "@/components/CaseStudies";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <StickyActions />
      <WhatIDo />
      <CaseStudies />
      <Skills />
      <Experience />
      <Achievements />
      <Contact />
    </main>
  );
}
