import {
  CurrencySettlement,
  PaymentDataBoundaries,
  PaymentEvidence,
  PaymentExceptions,
  PaymentLifecycle,
  PaymentModel,
  PaymentOperations,
  PaymentOperationCta,
  PaymentProviderFaq,
  PaymentProviders,
  PaymentRetry,
  PaymentSecurity,
  PaymentTruth,
  ProviderDiscovery,
  SettlementHandoff,
} from "@/components/payment-providers";

export default function Page() {
  return (
    <main className="w-full overflow-hidden bg-white">
      <PaymentProviders />
      <PaymentModel />
      <ProviderDiscovery />
      <PaymentOperations />
      <PaymentDataBoundaries />
      <CurrencySettlement />
      <PaymentEvidence />
      <PaymentExceptions />
      <SettlementHandoff />
      <PaymentRetry />
      <PaymentSecurity />
      <PaymentLifecycle />
      <PaymentTruth />
      <PaymentProviderFaq />
      <PaymentOperationCta />
    </main>
  );
}