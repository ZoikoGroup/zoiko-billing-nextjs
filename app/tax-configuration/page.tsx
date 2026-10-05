import {
  ApprovalEffectiveness,
  AuthorityReviewSeparation,
  ExceptionsOverridesConflictsCorrections,
  LifecycleVersioningEffectiveDating,
  RecommendedConfigurationCategories,
  RelatedGlobalBillingNavigation,
  SevenPartTaxConfiguration,
  SystemsDataProductBoundaries,
  TaxConfiguration,
  TaxConfigurationFaq,
  TaxConfigurationRegistry,
} from '@/components/tax-configuration'

export default function Page() {
  return (
    <main>
      <TaxConfiguration />
      <ApprovalEffectiveness />
      <SevenPartTaxConfiguration />
      <RecommendedConfigurationCategories />
      <TaxConfigurationRegistry />
      <LifecycleVersioningEffectiveDating />
      <AuthorityReviewSeparation />
      <ExceptionsOverridesConflictsCorrections />
      <SystemsDataProductBoundaries />
      <RelatedGlobalBillingNavigation />
      <TaxConfigurationFaq />
    </main>
  )
}