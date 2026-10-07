import {
  ComplianceRequirementRegistry,
  CurrentnessVersioningSupersession,
  LocalCompliance,
  LocalComplianceBoundaries,
  LocalComplianceFaq,
  OrientationNotDetermination,
  RecommendedRequirementCategories,
  RecommendedReviewReadinessWorkflow,
  RelatedGlobalBillingNavigation,
  ResponsibilityModel,
  SixPartLocalComplianceModel,
} from "@/components/local-compliance";

export default function LocalCompliancePage() {
  return (
    <main className="w-full">
      <LocalCompliance />

      <OrientationNotDetermination />

      <SixPartLocalComplianceModel />

      <RecommendedRequirementCategories />

      <ComplianceRequirementRegistry />

      <CurrentnessVersioningSupersession />

      <RecommendedReviewReadinessWorkflow />

      <LocalComplianceBoundaries />

      <ResponsibilityModel />

      <RelatedGlobalBillingNavigation />

      <LocalComplianceFaq />
    </main>
  );
}