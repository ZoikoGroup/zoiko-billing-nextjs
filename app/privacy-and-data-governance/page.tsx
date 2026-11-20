import { inter, plusJakartaSans } from "@/styles/fonts";

import {
  DataCategories,
  DataLifecycle,
  DataLocationTransfers,
  DownstreamCopies,
  GovernancePrinciples,
  PrivacyFAQ,
  PrivacyHero,
  PrivacyRightsRouting,
  RetentionDeletionHolds,
  SecurityTrustHandoffs,
} from "@/components/privacy-and-data-governance";

export default function PrivacyAndDataGovernancePage() {
  return (
    <main
      className={`${inter.variable} ${plusJakartaSans.variable} font-[family-name:var(--font-inter)]`}
    >
      <PrivacyHero />
      <GovernancePrinciples />
      <DataCategories />
      <DataLifecycle />
      <RetentionDeletionHolds />
      <PrivacyRightsRouting />
      <DownstreamCopies />
      <DataLocationTransfers />
      <SecurityTrustHandoffs />
      <PrivacyFAQ />
    </main>
  );
}
