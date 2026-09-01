import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import {
  ActionGuidance,
  AdvisoriesFAQ,
  AdvisoriesHero,
  AdvisoryDetailTemplate,
  AdvisoryStates,
  ApplicabilityStates,
  AuthorityHandoffs,
  Notifications,
  SeverityIdentifiers,
} from "@/components/security-advisories";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800"],
  variable: "--font-jakarta",
});

export default function SecurityAdvisoriesPage() {
  return (
    <main
      className={`${inter.variable} ${plusJakartaSans.variable} font-[family-name:var(--font-inter)]`}
    >
      <AdvisoriesHero />
      <AdvisoryStates />
      <ApplicabilityStates />
      <SeverityIdentifiers />
      <AdvisoryDetailTemplate />
      <ActionGuidance />
      <AuthorityHandoffs />
      <Notifications />
      <AdvisoriesFAQ />
    </main>
  );
}
