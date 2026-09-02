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
    <main className="min-h-screen w-full bg-white text-slate-900 font-sans antialiased">
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
