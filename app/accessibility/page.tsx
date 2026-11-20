import { inter, plusJakartaSans } from "@/styles/fonts";

import {
  AccessibilityHeroSection,
  AccessibilityApproachSection,
  CurrentAccessibilityEvidenceSection,
  InteractionAccessibilityDomainsSection,
  DocumentsExportsCommunicationsSection,
  KnownLimitationsSection,
  AssistiveTechnologyTestingSection,
  ReportAccessibilityBarrierSection,
  ProcurementConformanceRequestsSection,
  AccessibilityFaqSection,
  AccessibilityFinalCtaSection,
} from "@/components/accessibility";

export const metadata = {
  title: "Accessibility | Zoiko Billing",
  description:
    "Our accessibility approach, stated precisely. How we approach accessibility across Zoiko Billing, what evidence currently exists, limitations we know about, and how to report a barrier.",
};

export default function AccessibilityPage() {
  return (
    <main
      className={`${inter.variable} ${plusJakartaSans.variable} min-h-screen w-full bg-white text-slate-900 font-[family-name:var(--font-inter)] antialiased`}
    >
      <AccessibilityHeroSection />
      <AccessibilityApproachSection />
      <CurrentAccessibilityEvidenceSection />
      <InteractionAccessibilityDomainsSection />
      <DocumentsExportsCommunicationsSection />
      <KnownLimitationsSection />
      <AssistiveTechnologyTestingSection />
      <ReportAccessibilityBarrierSection />
      <ProcurementConformanceRequestsSection />
      <AccessibilityFaqSection />
      <AccessibilityFinalCtaSection />
    </main>
  );
}
