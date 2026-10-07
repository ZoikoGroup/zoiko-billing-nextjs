import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import {
  ReadinessChecklistHeroSection,
  ChecklistDashboardSection,
  DomainReadinessSummarySection,
  AuditingExportIntegritySection,
  ChecklistBehaviorsSection,
  EveryDomainRoutesSection,
  ReadinessChecklistFaqSection,
  ReadinessChecklistFinalCtaSection,
} from "@/components/readiness-checklist";

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
  title: "Global Billing Readiness Checklist | Zoiko Billing",
  description:
    "Thirty-two prompts, five statuses, and no score. Work through eight domains, mark what you have verified against a source, and export the result.",
};

export default function ReadinessChecklistPage() {
  return (
    <main
      className={`${inter.variable} ${plusJakartaSans.variable} min-h-screen w-full bg-white text-slate-900 font-[family-name:var(--font-inter)] antialiased`}
    >
      <ReadinessChecklistHeroSection />
      <ChecklistDashboardSection />
      <DomainReadinessSummarySection />
      <AuditingExportIntegritySection />
      <ChecklistBehaviorsSection />
      <EveryDomainRoutesSection />
      <ReadinessChecklistFaqSection />
      <ReadinessChecklistFinalCtaSection />
    </main>
  );
}
