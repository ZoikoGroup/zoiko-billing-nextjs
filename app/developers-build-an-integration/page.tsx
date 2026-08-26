import {
  DevelopersBuildIntegrationHeroSection,
  ChooseIntegrationOutcomeSection,
  EndToEndIntegrationLifecycleSection,
  ArchitectureResponsibilityModelSection,
  IntegrationContractRegistrySection,
  ObjectStateDataMappingSection,
  AuthenticationPermissionPlanningSection,
  SynchronousRequestsWriteSafetySection,
  EventsAsynchronousProcessingSection,
  SandboxTestStrategySection,
  SdksImplementationExamplesSection,
  FailuresUnknownOutcomesReconciliationSection,
  ObservabilityEvidenceSection,
  SecurityPrivacyDataGovernanceSection,
  VersioningChangeDeprecationSection,
  ProductionReadinessGateSection,
  RolloutValidationBackoutSection,
  OperateIncidentResponseSection,
  HandoverDecommissionSection,
  EnterpriseReviewSection,
  RelatedDeveloperJourneysBuildSection,
  FromEvaluationToOperationSection,
  IntegrationFaqSection,
  DeveloperBuildIntegrationFinalCtaSection,
} from "@/components/developers-build-an-integration";

export const metadata = {
  title: "Developers Build an Integration | Zoiko Billing",
  description:
    "Plan how systems connect to Zoiko Billing across access, object lifecycle, events, testing, failures, reconciliation, production rollout and long-term ownership.",
};

export default function DevelopersBuildAnIntegrationPage() {
  return (
    <main className="min-h-screen w-full bg-white text-slate-900 font-sans antialiased">
      <DevelopersBuildIntegrationHeroSection />
      <ChooseIntegrationOutcomeSection />
      <EndToEndIntegrationLifecycleSection />
      <ArchitectureResponsibilityModelSection />
      <IntegrationContractRegistrySection />
      <ObjectStateDataMappingSection />
      <AuthenticationPermissionPlanningSection />
      <SynchronousRequestsWriteSafetySection />
      <EventsAsynchronousProcessingSection />
      <SandboxTestStrategySection />
      <SdksImplementationExamplesSection />
      <FailuresUnknownOutcomesReconciliationSection />
      <ObservabilityEvidenceSection />
      <SecurityPrivacyDataGovernanceSection />
      <VersioningChangeDeprecationSection />
      <ProductionReadinessGateSection />
      <RolloutValidationBackoutSection />
      <OperateIncidentResponseSection />
      <HandoverDecommissionSection />
      <EnterpriseReviewSection />
      <RelatedDeveloperJourneysBuildSection />
      <FromEvaluationToOperationSection />
      <IntegrationFaqSection />
      <DeveloperBuildIntegrationFinalCtaSection />
    </main>
  );
}
