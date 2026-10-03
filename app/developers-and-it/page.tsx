import {
  ConceptualIntegrationBoundaryMap,
  DevelopersAndITFaq,
  DevelopersAndItHero,
  FailureOwnershipRecovery,
  ImplementationReadiness,
  ObservabilityEvidenceTroubleshooting,
  OperationalStateModel,
  SecurityPrivacyDataBoundary,
  SystemOfRecordWriteAuthority,
  TechnicalEvaluationLenses,
  TechnicalResourcesCrossNavigation,
} from "@/components/developers-and-it";

export default function DevelopersAndItPage() {
  return (
    <main>
      <DevelopersAndItHero />

      <TechnicalEvaluationLenses />

      <ConceptualIntegrationBoundaryMap />

      <SystemOfRecordWriteAuthority />

      <ImplementationReadiness />

      <OperationalStateModel />

      <FailureOwnershipRecovery />

      <ObservabilityEvidenceTroubleshooting />

      <SecurityPrivacyDataBoundary />

      <TechnicalResourcesCrossNavigation />

      <DevelopersAndITFaq />
    </main>
  );
}