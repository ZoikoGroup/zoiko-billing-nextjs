import { Inter, Plus_Jakarta_Sans } from "next/font/google";

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
