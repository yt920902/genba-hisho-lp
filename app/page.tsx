import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { MonitorSection } from "@/components/monitor-section";
import { PainSection } from "@/components/pain-section";
import { PricingSection } from "@/components/pricing-section";
import { RoadmapSection } from "@/components/roadmap-section";
import { ServiceSection } from "@/components/service-section";
import { WorkflowSection } from "@/components/workflow-section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PainSection />
        <WorkflowSection />
        <ServiceSection />
        <RoadmapSection />
        <PricingSection />
        <MonitorSection />
        <Footer />
      </main>
    </>
  );
}
