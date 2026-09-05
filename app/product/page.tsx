import {
  ClaimsGovernance,
  CompletePlatformMap,
  ConnectedBillingRecordJourney,
  DeploymentContexts,
  Product,
  ProductFAQ,
  ProductUIProof,
  ScreenStates,
  TechnicalGlobalTrustHandoffs,
} from "@/components/product";

export default function ProductPage() {
  return (
    <main>
      <Product />
      <CompletePlatformMap />
      <ConnectedBillingRecordJourney />
      <ProductUIProof />
      <DeploymentContexts />
      <TechnicalGlobalTrustHandoffs />
      <ClaimsGovernance />
      <ScreenStates />
      <ProductFAQ />
    </main>
  );
}