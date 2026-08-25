import {
  BillingCta,
  BillingFaq,
  BillingLayers,
  Boundaries,
  ChangeEvidence,
  CrossBorder,
  CurrencyContexts,
  EntityControls,
  GlobalBilling,
  Implementation,
  LanguageSupport,
  LocalizedDocs,
  MarketCheck,
  MultiEntity,
  SourceAuthority,
} from "@/components/global-billing";

export default function Page() {
  return (
    <main>
      <GlobalBilling />
      <BillingLayers />
      <MarketCheck />
      <CurrencyContexts />
      <MultiEntity />
      <LocalizedDocs />
      <EntityControls />
      <CrossBorder />
      <Boundaries />
      <SourceAuthority />
      <ChangeEvidence />
      <LanguageSupport />
      <Implementation />
      <BillingFaq />
      <BillingCta />
    </main>
  );
}