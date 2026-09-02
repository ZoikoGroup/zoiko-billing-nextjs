import {
  AccessRelationshipStates,
  EntitlementResolution,
  NotAPartnerYet,
  PartnerFAQ,
  PartnerPortal,
  PortalBoundaries,
  PortalResourceRegistry,
  SecurityDataHandling,
} from '@/components/partner-portal'

export default function Page() {
  return (
    <main>
      <PartnerPortal />
      <AccessRelationshipStates />
      <EntitlementResolution />
      <PortalResourceRegistry />
      <PortalBoundaries />
      <SecurityDataHandling />
      <NotAPartnerYet />
      <PartnerFAQ />
    </main>
  )
}
