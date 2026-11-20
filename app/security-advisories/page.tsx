import { inter, plusJakartaSans } from "@/styles/fonts";

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
