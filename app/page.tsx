import { OperatingPrinciplesSection } from "@/components/about";
import {
  
  BothSidesSection,
  CapabilitiesSection,
  GlobalMultiEntitySection,
  HeroSection,
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
      
    </main>
  );
}
