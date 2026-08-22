import {
  BalanceReconciliation,
  BillingAdjustments,
  BillingBasis,
  BillingContext,
  BillingCta,
  BillingFaq,
  BillingReadiness,
  BillingReporting,
  BillingSchedules,
  InvoiceDelivery,
  ProServices,
  RetainerBilling,
  RoleOwnership,
  WorkQueue,
} from "@/components/professional-services";

export default function Page() {
  return (
    <main>
      <ProServices />
      <BillingBasis />
      <BillingContext />
      <BillingReadiness />
      <RetainerBilling />
      <BillingSchedules />
      <InvoiceDelivery />
      <BillingAdjustments />
      <BalanceReconciliation />
      <WorkQueue />
      <RoleOwnership />
      <BillingReporting />
      <BillingFaq />
      <BillingCta />
    </main>
  );
}
