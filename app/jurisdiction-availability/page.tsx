import {
  AccessibilityTable,
  AvailabilityFaq,
  AvailabilityScope,
  CapabilityMatrix,
  ChangeHistory,
  DocumentBoundaries,
  EligibilityGates,
  Jurisdiction,
  JurisdictionCta,
  JurisdictionSearch,
  JurisdictionWorkspace,
  PartnerDependency,
  PlannedStates,
  ProviderDeps,
  StatusStates,
} from '@/components/jurisdiction-availability'

export default function Page() {
  return (
    <main>
      <Jurisdiction />
      <AvailabilityScope />
      <JurisdictionSearch />
      <StatusStates />
      <CapabilityMatrix />
      <ProviderDeps />
      <EligibilityGates />
      <DocumentBoundaries />
      <JurisdictionWorkspace />
      <PartnerDependency />
      <PlannedStates />
      <ChangeHistory />
      <AccessibilityTable />
      <AvailabilityFaq />
      <JurisdictionCta />
    </main>
  )
}