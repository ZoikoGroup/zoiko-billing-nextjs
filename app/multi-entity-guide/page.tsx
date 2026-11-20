import { inter, plusJakartaSans } from "@/styles/fonts";

import {
  MultiEntityGuideHeroSection,
  ReadinessModelSection,
  ReadinessMatrixSection,
  RelationshipWorksheetSection,
  RoleGuideViewsSection,
  EvidenceRecordsSection,
  EntitySpecialistDestinationsSection,
  MultiEntityGuideFaqSection,
} from "@/components/multi-entity-guide";

export const metadata = {
  title: "Multi-Entity Guide | Zoiko Billing",
  description:
    "Billing between your own entities needs verification that a customer relationship provides for free. This guide sequences that work — and names the condition at each phase that must stop progress rather than be reasoned past.",
};

export default function MultiEntityGuidePage() {
  return (
    <main
      className={`${inter.variable} ${plusJakartaSans.variable} min-h-screen w-full bg-white text-slate-900 font-[family-name:var(--font-inter)] antialiased`}
    >
      <MultiEntityGuideHeroSection />
      <ReadinessModelSection />
      <ReadinessMatrixSection />
      <RelationshipWorksheetSection />
      <RoleGuideViewsSection />
      <EvidenceRecordsSection />
      <EntitySpecialistDestinationsSection />
      <MultiEntityGuideFaqSection />
    </main>
  );
}
