import { inter, plusJakartaSans } from "@/styles/fonts";

import {
  GlobalBillingGuideHeroSection,
  PhaseGuideMapSection,
  PhaseOutputRuleSection,
  RoleChecklistViewsSection,
  EdgeCaseConditionsSection,
  EvidenceCurrentnessSection,
  GuideSpecialistDestinationsSection,
  GlobalBillingGuideFaqSection,
} from "@/components/global-billing-guide";

export const metadata = {
  title: "Global Billing Guide | Zoiko Billing",
  description:
    "A planning sequence for teams designing a global billing program — scope, availability, currency, payment, tax, entity boundaries and readiness. Branches are allowed. Skipping availability verification or specialist review where they apply is not.",
};

export default function GlobalBillingGuidePage() {
  return (
    <main
      className={`${inter.variable} ${plusJakartaSans.variable} min-h-screen w-full bg-white text-slate-900 font-[family-name:var(--font-inter)] antialiased`}
    >
      <GlobalBillingGuideHeroSection />
      <PhaseGuideMapSection />
      <PhaseOutputRuleSection />
      <RoleChecklistViewsSection />
      <EdgeCaseConditionsSection />
      <EvidenceCurrentnessSection />
      <GuideSpecialistDestinationsSection />
      <GlobalBillingGuideFaqSection />
    </main>
  );
}
