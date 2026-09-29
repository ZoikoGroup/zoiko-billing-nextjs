import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import {
  BusinessContinuityHeroSection,
  ContinuityModelSection,
  ScopeCriticalServicesSection,
  DataContinuityRestorationSection,
  ActivationOperationalHandoffSection,
  ExercisesValidationSection,
  ThirdPartySupplierContinuitySection,
  SharedResponsibilityContinuitySection,
  EvidenceTrustPostureSection,
  BusinessContinuityFaqSection,
  BusinessContinuityFinalCtaSection,
} from "@/components/business-continuity";

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
  title: "Business Continuity | Zoiko Billing",
  description:
    "How continuity is governed, and what our terms actually mean. Criticality classifications, recovery objectives, dependency governance, and shared responsibility.",
};

export default function BusinessContinuityPage() {
  return (
    <main
      className={`${inter.variable} ${plusJakartaSans.variable} min-h-screen w-full bg-white text-slate-900 font-[family-name:var(--font-inter)] antialiased`}
    >
      <BusinessContinuityHeroSection />
      <ContinuityModelSection />
      <ScopeCriticalServicesSection />
      <DataContinuityRestorationSection />
      <ActivationOperationalHandoffSection />
      <ExercisesValidationSection />
      <ThirdPartySupplierContinuitySection />
      <SharedResponsibilityContinuitySection />
      <EvidenceTrustPostureSection />
      <BusinessContinuityFaqSection />
      <BusinessContinuityFinalCtaSection />
    </main>
  );
}
