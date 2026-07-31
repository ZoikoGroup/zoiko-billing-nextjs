import {
  BusinessMarketsSection,
  DemoSection,
  FeaturesSection,
  FooterSection,
  FragmentationSection,
  FrequentlyAskedQuestionsSection,
  HeroSection,
  IntegrationsSection,
  NavbarSection,
  ReconciliationSection,
  SecuritySection,
  TrustControlSection,
  WorkflowCallToActionSection,
} from "@/components/home";

export default function Home() {
  return (
    <main>
      <NavbarSection />
      <HeroSection />
      <TrustControlSection />
      <FragmentationSection />
      <FeaturesSection />
      <BusinessMarketsSection />
      <ReconciliationSection />
      <IntegrationsSection />
      <DemoSection />
      <SecuritySection />
      <FrequentlyAskedQuestionsSection />
      <WorkflowCallToActionSection />
      <FooterSection />
    </main>
  );
}
