import {
  
  BothSidesSection,
  CapabilitiesSection,
  CommercialModelSection,
  EvidenceDemoSection,
  FaqAnswersSection,
  GetStartedCtaSection,
  GlobalMultiEntitySection,
  HeroSection,
  IntegrationsSection,
  OperatingProblemSection,
  PlatformProofSection,
 
} from "@/components/Home";

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <PlatformProofSection/>
      <OperatingProblemSection/>
      <CapabilitiesSection/>
      <GlobalMultiEntitySection/>
      <BothSidesSection/>
      <IntegrationsSection/>
      <EvidenceDemoSection/>
      <CommercialModelSection/>  
      <FaqAnswersSection/>
      <GetStartedCtaSection/>    
    </main>
  );
}
