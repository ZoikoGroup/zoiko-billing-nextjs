import {
  DeveloperSandbox,
  EnterpriseTrust,
  ProductionReadinessGate,
  RelatedDeveloperJourneys,
  SafeSideEffectBehavior,
  SandboxApiAuthentication,
  SandboxCTA,
  SandboxDataGovernance,
  SandboxFAQ,
  SandboxFidelityLimitations,
  SandboxLifecycle,
  SandboxMentalModel,
  SandboxProductionJourney,
  SandboxProductionTransition,
  SandboxReliabilityClaims,
  SandboxRequestsEvidence,
  SandboxRolesAudit,
  SandboxWebhooks,
  SandboxWorkspace,
  ScenarioFailureControls,
  SyntheticDataFixtures,
} from "@/components/developer-sandbox";

export default function Page() {
  return (
    <main className="w-full">
      <DeveloperSandbox />

      <SandboxMentalModel />

      <SandboxWorkspace />

      <SyntheticDataFixtures />

      <SandboxApiAuthentication />

      <SandboxWebhooks />

      <SafeSideEffectBehavior />

      <ScenarioFailureControls />

      <SandboxFidelityLimitations />

      <SandboxLifecycle />

      <SandboxRequestsEvidence />

      <SandboxRolesAudit />

      <SandboxDataGovernance />

      <ProductionReadinessGate />

      <SandboxProductionTransition />

      <SandboxReliabilityClaims />

      <EnterpriseTrust />

      <RelatedDeveloperJourneys />

      <SandboxProductionJourney />

      <SandboxFAQ />

      <SandboxCTA />
    </main>
  );
}