import {
  AutomationWorkflowsHero,
  WorkflowRulesSection,
  BuildingBlocksSection,
  UseCasesSection,
  WorkflowLifecycleSection,
  ReviewAndExceptionsSection,
  RuntimeReliabilitySection,
  GovernanceSection,
  IntegrationsAndZoikoOneSection,
  AutomationFaqSection,
  NextStepCtaSection,
  TrustSecuritySection,
} from '@/components/automation';

export default function AutomationPage() {
  return (
    <>
      <AutomationWorkflowsHero />
      <WorkflowRulesSection />
      <BuildingBlocksSection />
      <UseCasesSection />
      <WorkflowLifecycleSection />
      <ReviewAndExceptionsSection />
      <RuntimeReliabilitySection />
      <GovernanceSection />
      <IntegrationsAndZoikoOneSection />
      <TrustSecuritySection/>
      <AutomationFaqSection />
      <NextStepCtaSection />
    </>
  );
}
