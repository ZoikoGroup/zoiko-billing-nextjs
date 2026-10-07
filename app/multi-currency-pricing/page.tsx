import {
  CommercialGovernancePatterns,
  CurrencyFxPaymentTaxBoundaries,
  LifecycleVersioningEffectiveDating,
  MultiCurrencyPricing,
  MultiCurrencyPricingFaq,
  PricingContextRegistry,
  RelatedNavigation,
  SevenPartMultiCurrencyPricing,
  SystemDataDownstreamHandoffs,
} from "@/components/multi-currency-pricing";

export default function Page() {
  return (
    <main>
      <MultiCurrencyPricing />
      <SevenPartMultiCurrencyPricing />
      <PricingContextRegistry />
      <LifecycleVersioningEffectiveDating />
      <CurrencyFxPaymentTaxBoundaries />
      <CommercialGovernancePatterns />
      <SystemDataDownstreamHandoffs />
      <RelatedNavigation />
      <MultiCurrencyPricingFaq />
    </main>
  );
}