import {
  BillingBasis,
  BillingCta,
  BillingFaq,
  BillingLifecycle,
  BillingReadiness,
  BoundaryModel,
  CustomerServiceContext,
  DigitalServicePortfolio,
  FeeAdjustments,
  InvoiceDelivery,
  ReminderChecks,
  RoleMatrix,
  SaasHero,
  SaasIntegrations,
  WorkQueue,
} from "@/components/saas-and-digital-services";

export default function Page() {
  return (
    <main>
      <SaasHero />
      <DigitalServicePortfolio />
      <BillingBasis />
      <CustomerServiceContext />
      <BillingReadiness />
      <BillingLifecycle />
      <FeeAdjustments />
      <BoundaryModel />
      <InvoiceDelivery />
      <ReminderChecks />
      <WorkQueue />
      <RoleMatrix />
      <SaasIntegrations />
      <BillingFaq />
      <BillingCta />
    </main>
  );
}
