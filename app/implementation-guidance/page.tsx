import {
  AuthorityBoundaries,
  ConfigIntegration,
  DataReadiness,
  DecisionRightsOwnership,
  GoLiveGates,
  ImplementationFAQ,
  ImplementationGuidance,
  RecommendedImplementationPath,
  RiskEscalation,
  Stabilization,
  TestingValidation,
  TrainingReadiness,
} from "@/components/implementation-guidance";

export default function Page() {
  return (
    <main>
      <ImplementationGuidance />
      <AuthorityBoundaries />
      <RecommendedImplementationPath />
      <DecisionRightsOwnership />
      <DataReadiness />
      <ConfigIntegration />
      <TestingValidation />
      <GoLiveGates />
      <TrainingReadiness />
      <Stabilization />
      <RiskEscalation />
      <ImplementationFAQ />
    </main>
  );
}