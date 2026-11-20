import { inter, plusJakartaSans } from "@/styles/fonts";

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
    <main
      className={`${inter.variable} ${plusJakartaSans.variable} min-h-screen w-full bg-white text-slate-900 font-[family-name:var(--font-inter)] antialiased`}
    >
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
