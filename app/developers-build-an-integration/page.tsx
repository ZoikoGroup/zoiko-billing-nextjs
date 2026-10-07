import { Inter, Plus_Jakarta_Sans } from "next/font/google";
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

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata = {
  title: "Developers Build an Integration | Zoiko Billing",
  description:
    "Plan how systems connect to Zoiko Billing across access, object lifecycle, events, testing, failures, reconciliation, production rollout and long-term ownership.",
};

export default function DevelopersBuildAnIntegrationPage() {
  return (
    <main
      className={`${inter.variable} ${plusJakartaSans.variable} min-h-screen w-full bg-white text-slate-900 font-[family-name:var(--font-inter)] antialiased`}
    >
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
