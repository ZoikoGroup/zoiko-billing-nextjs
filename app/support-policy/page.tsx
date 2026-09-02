import {
  SupportPolicyHeroSection,
  DirectPolicySummarySection,
  CoverageEligibilitySection,
  SupportCommitmentsSection,
  ApprovedChannelsAvailabilitySection,
  PriorityDefinitionsSection,
  ResponseMeasurementContractSection,
  SupportedRequestCategoriesSection,
  ResponsibilitiesSection,
  EscalationIncidentsVulnerabilitiesSection,
  VersioningChangeNoticesSection,
  SupportPolicyFaqSection,
  SupportPolicyFinalCtaSection,
} from "@/components/support-policy";

export const metadata = {
  title: "Support Policy | Zoiko Billing",
  description:
    "What support covers, and what it commits to. Coverage, eligibility, approved channels, availability, priority definitions, commitments, exclusions and responsibilities.",
};

export default function SupportPolicyPage() {
  return (
    <main className="min-h-screen w-full bg-white text-slate-900 font-sans antialiased">
      <SupportPolicyHeroSection />
      <DirectPolicySummarySection />
      <CoverageEligibilitySection />
      <SupportCommitmentsSection />
      <ApprovedChannelsAvailabilitySection />
      <PriorityDefinitionsSection />
      <ResponseMeasurementContractSection />
      <SupportedRequestCategoriesSection />
      <ResponsibilitiesSection />
      <EscalationIncidentsVulnerabilitiesSection />
      <VersioningChangeNoticesSection />
      <SupportPolicyFaqSection />
      <SupportPolicyFinalCtaSection />
    </main>
  );
}
