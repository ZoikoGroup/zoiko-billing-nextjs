import {
  AuthorityReviewChangeGovernance,
  CurrentnessVersioningSupersession,
  DecisionQuestionFramework,
  IndirectTax,
  IndirectTaxContextModel,
  IndirectTaxContextRegistry,
  IndirectTaxFaq,
  RelatedGlobalBillingNavigation,
  SystemDataOperationalBoundary,
  TaxLegalProductBoundaries,
} from "@/components/indirect-tax";

export default function Page() {
  return (
    <main>
      <IndirectTax />
      <DecisionQuestionFramework />
      <IndirectTaxContextModel />
      <IndirectTaxContextRegistry />
      <CurrentnessVersioningSupersession />
      <TaxLegalProductBoundaries />
      <AuthorityReviewChangeGovernance />
      <SystemDataOperationalBoundary />
      <RelatedGlobalBillingNavigation />
      <IndirectTaxFaq />
    </main>
  );
}
