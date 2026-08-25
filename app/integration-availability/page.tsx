import {
  AvailabilityFaq,
  AvailabilityStates,
  CapabilityRules,
  DetailMatrix,
  EvidenceHistory,
  EvidenceRules,
  FailRules,
  IntegrationAvailability,
  IntegrationAvailabilityMeaning,
  OpsStatus,
  PlanQualifiers,
  QualifierCta,
  RegionRules,
  SearchContext,
  VersionRules,
} from "@/components/integration-availability";

export default function Page() {
  return (
    <main>
      <IntegrationAvailability />
      <IntegrationAvailabilityMeaning />
      <SearchContext />
      <AvailabilityStates />
      <RegionRules />
      <PlanQualifiers />
      <CapabilityRules />
      <EvidenceRules />
      <OpsStatus />
      <VersionRules />
      <DetailMatrix />
      <EvidenceHistory />
      <FailRules />
      <AvailabilityFaq />
      <QualifierCta />
    </main>
  );
}