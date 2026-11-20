import { inter, plusJakartaSans } from "@/styles/fonts";

import {
  ReportsInsightsHeroSection,
  InsightFinderContractSection,
  StartByQuestionSection,
  BrowseByBillingTopicSection,
  EvidenceTypesSection,
  FeaturedCurrentInsightSection,
  ReportDetailTemplateSection,
  QuantitativeClaimCausalityRulesSection,
  VisualizationIntegritySection,
  DataEthicsPrivacyConfidentialitySection,
  CorrectionsErrataVersionHistorySection,
  DownloadsReuseBoundariesSection,
  AuthoritativeHandoffsSection,
  ReportsInsightsFaqSection,
  ReportsInsightsFinalCtaSection,
} from "@/components/reports-and-insights";

export const metadata = {
  title: "Reports & Insights | Zoiko Billing",
  description:
    "Evidence for better billing decisions. Explore current, methodology-backed Zoiko Billing reports and insights on invoicing, accounts receivable, payment and reconciliation operations.",
};

export default function ReportsInsightsPage() {
  return (
    <main
      className={`${inter.variable} ${plusJakartaSans.variable} min-h-screen w-full bg-white text-slate-900 font-[family-name:var(--font-inter)] antialiased`}
    >
      <ReportsInsightsHeroSection />
      <InsightFinderContractSection />
      <StartByQuestionSection />
      <BrowseByBillingTopicSection />
      <EvidenceTypesSection />
      <FeaturedCurrentInsightSection />
      <ReportDetailTemplateSection />
      <QuantitativeClaimCausalityRulesSection />
      <VisualizationIntegritySection />
      <DataEthicsPrivacyConfidentialitySection />
      <CorrectionsErrataVersionHistorySection />
      <DownloadsReuseBoundariesSection />
      <AuthoritativeHandoffsSection />
      <ReportsInsightsFaqSection />
      <ReportsInsightsFinalCtaSection />
    </main>
  );
}
