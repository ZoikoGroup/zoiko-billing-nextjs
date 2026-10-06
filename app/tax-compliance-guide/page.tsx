import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import {
  TaxComplianceHeroSection,
  SevenPhaseReadinessModelSection,
  StopHoldEscalationStatesSection,
  RoleBasedGuideViewsSection,
  WhatTriggersReReviewSection,
  SpecialistDestinationsSection,
  TaxComplianceFaqSection,

} from "@/components/tax-compliance-guide";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata = {
  title: "Tax & Compliance Guide | Zoiko Billing",
  description:
    "A seven-phase sequence for tax and compliance questions in billing. The guide never blocks learning — but an open stop condition from phase 2 is still open at phase 7, and nothing downstream is presented as approved while it stands.",
};

export default function TaxComplianceGuidePage() {
  return (
    <main
      className={`${inter.variable} ${plusJakartaSans.variable} min-h-screen w-full bg-white text-slate-900 font-[family-name:var(--font-inter)] antialiased`}
    >
      <TaxComplianceHeroSection />
      <SevenPhaseReadinessModelSection />
      <StopHoldEscalationStatesSection />
      <RoleBasedGuideViewsSection />
      <WhatTriggersReReviewSection />
      <SpecialistDestinationsSection />
      <TaxComplianceFaqSection />
    
    </main>
  );
}
