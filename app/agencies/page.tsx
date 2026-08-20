import {
  AgencyHero,
  BillingBasis,
  BillingContext,
  BillingCta,
  BillingReady,
  BillingSchedules,
  ClientQueue,
  Faq,
  InvoiceStates,
  PassThrough,
  ReminderChecks,
  Reports,
  RetainerStates,
  RoleAudit,
} from "@/components/agencies";

export default function Page() {
  return (
    <main>
      <AgencyHero />
      <BillingBasis />
      <BillingContext />
      <BillingReady />
      <RetainerStates />
      <BillingSchedules />
      <PassThrough />
      <InvoiceStates />
      <ReminderChecks />
      <ClientQueue />
      <RoleAudit />
      <Reports />
      <Faq />
      <BillingCta />
    </main>
  );
}