import { ExecHistory } from "@/components/home/ExecHistory";
import { Hero } from "@/components/home/Hero";
import { HireBand } from "@/components/home/HireBand";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ScrollWorkGallery } from "@/components/home/ScrollWorkGallery";
import { Services } from "@/components/home/Services";
import { SkillsSection } from "@/components/home/SkillsSection";
import { VitalStats } from "@/components/home/VitalStats";
import { WorkShowcase } from "@/components/home/WorkShowcase";

export default function HomePage() {
  return (
    <main className="bg-dot-grid">
      <Hero />
      <VitalStats />
      <SkillsSection />
      <ProcessSection />
      <ScrollWorkGallery />
      <WorkShowcase />
      <HireBand />
      <Services />
      <ExecHistory />
    </main>
  );
}
