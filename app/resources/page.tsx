import {
  Boundaries,
  CanonicalTypes,
  EvidenceAndProof,
  FeaturedEligibilityMatrix,
  FinderStateModel,
  ResourceCenterFAQ,
  ResourceCenterHero,
  SearchPrivacySecurity,
  StartWithBillingGoal,
  UnifiedFinder,
} from '@/components/resources'

export default function Page() {
  return (
    <main>
      <ResourceCenterHero />
      <UnifiedFinder />
      <CanonicalTypes />
      <StartWithBillingGoal />
      <FeaturedEligibilityMatrix />
      <Boundaries />
      <FinderStateModel />
      <EvidenceAndProof />
      <SearchPrivacySecurity />
      <ResourceCenterFAQ />
    </main>
  )
}