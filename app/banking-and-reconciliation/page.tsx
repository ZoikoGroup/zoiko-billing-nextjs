import {
  BankConnectionSecurity,
  BankDataScope,
  BankingAvailability,
  BankingConnectionsFAQ,
  BankingReconciliation,
  BankingReconciliationCTA,
  BankReconModel,
  ConnectionFreshness,
  IntegrationSupport,
  PaymentDataProvenance,
  PaymentMatchModel,
  PaymentStateModel,
  ReconciliationDifferences,
  ReconciliationExceptions,
  ReconciliationStates,
} from "@/components/banking-and-reconciliation";

export default function Page() {
  return (
    <main>
      <BankingReconciliation />
      <BankReconModel />
      <BankingAvailability />
      <BankDataScope />
      <PaymentDataProvenance />
      <PaymentMatchModel />
      <ReconciliationStates />
      <ReconciliationDifferences />
      <ReconciliationExceptions />
      <PaymentStateModel />
      <ConnectionFreshness />
      <BankConnectionSecurity />
      <IntegrationSupport />
      <BankingConnectionsFAQ />
      <BankingReconciliationCTA />
    </main>
  );
}