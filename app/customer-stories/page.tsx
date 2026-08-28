import {
  CustomerStoriesHeroSection,
  StoryFinderContractSection,
  FeaturedCurrentStorySection,
  BrowseByOutcomeBillingContextSection,
  CustomerEvidenceMethodologySection,
  StoryDetailTemplateSection,
  MetricClaimPresentationSection,
  CustomerVoiceEditorialIntegritySection,
  AssetsScreenshotsPrivacySection,
  CorrectionsPermissionChangesWithdrawalSection,
  StoryAuthoritativeHandoffsSection,
  CustomerStoriesFaqSection,
  CustomerStoriesFinalCtaSection,
} from "@/components/customer-stories";

export const metadata = {
  title: "Customer Stories | Zoiko Billing",
  description:
    "See how better billing operations take shape in practice. Explore approved Zoiko Billing customer stories with documented context, implementation choices, evidence, outcomes, and lessons.",
};

export default function CustomerStoriesPage() {
  return (
    <main className="min-h-screen w-full bg-white text-slate-900 font-sans antialiased">
      <CustomerStoriesHeroSection />
      <StoryFinderContractSection />
      <FeaturedCurrentStorySection />
      <BrowseByOutcomeBillingContextSection />
      <CustomerEvidenceMethodologySection />
      <StoryDetailTemplateSection />
      <MetricClaimPresentationSection />
      <CustomerVoiceEditorialIntegritySection />
      <AssetsScreenshotsPrivacySection />
      <CorrectionsPermissionChangesWithdrawalSection />
      <StoryAuthoritativeHandoffsSection />
      <CustomerStoriesFaqSection />
      <CustomerStoriesFinalCtaSection />
    </main>
  );
}
