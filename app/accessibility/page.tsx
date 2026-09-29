import { Inter, Plus_Jakarta_Sans } from "next/font/google";

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
