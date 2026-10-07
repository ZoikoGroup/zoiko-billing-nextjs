import {
  AuthorityReviewApprovalModel,
  ExceptionsOverridesCorrections,
  FXManagement,
  FXManagementFAQ,
  IllustrativeFXDecisionWorkspace,
  RateProvenanceTable,
  RelatedGlobalBillingNavigation,
  SixPartFXDecisionModel,
  SystemsDataAccountingBoundary,
  WhyFXGovernanceMatters,
} from '@/components/fx-management'

export default function Page() {
  return (
    <main>
      <FXManagement />
      <WhyFXGovernanceMatters />
      <SixPartFXDecisionModel />
      <IllustrativeFXDecisionWorkspace />
      <RateProvenanceTable />
      <AuthorityReviewApprovalModel />
      <ExceptionsOverridesCorrections />
      <SystemsDataAccountingBoundary />
      <RelatedGlobalBillingNavigation />
      <FXManagementFAQ />
    </main>
  )
}
