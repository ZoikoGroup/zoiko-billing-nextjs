import { Inter, Plus_Jakarta_Sans } from "next/font/google";

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
