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

export const metadata = {
  title: "Business Continuity | Zoiko Billing",
  description:
    "How continuity is governed, and what our terms actually mean. Criticality classifications, recovery objectives, dependency governance, and shared responsibility.",
};

export default function BusinessContinuityPage() {
  return (
    <main className="min-h-screen w-full bg-white text-slate-900 font-sans antialiased">
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
