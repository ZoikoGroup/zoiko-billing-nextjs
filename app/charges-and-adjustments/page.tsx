import {
  AmountControlPrinciples,
  AmountModel,
  Application,
  Calculation,
  ChargesAdjustmentsFAQ,
  ChargesAdjustmentsNextStep,
  ChargesAndAdjustments,
  Corrections,
  GlobalTaxContext,
  Permissions,
  RepeatBilling,
  SourcesAndHandoffs,
  TrustPrivacySecurity,
} from "@/components/charges-and-adjustments";

export default function ChargesAndAdjustmentsPage() {
  return (
    <main className="w-full">
      <ChargesAndAdjustments />
      <AmountControlPrinciples />
      <AmountModel />
      <Calculation />
      <Permissions />
      <Application />
      <Corrections />
      <RepeatBilling />
      <GlobalTaxContext />
      <SourcesAndHandoffs />
      <TrustPrivacySecurity />
      <ChargesAdjustmentsFAQ />
      <ChargesAdjustmentsNextStep />
    </main>
  );
}