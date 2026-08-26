import {
  CreditNotes,
  DocumentAnatomy,
  DocumentLifecycle,
  GlobalContext,
  InvoiceLifecycle,
  InvoicesFAQ,
  InvoicesHero,
  InvoicesNextStep,
  IssueControls,
  PaymentAndBalance,
  SourcesAndHandoffs,
  TrustPrivacySecurity,
} from "@/components/invoices";

export default function Page() {
  return (
    <main className="w-full">
      <InvoicesHero />
      <InvoiceLifecycle />
      <DocumentLifecycle />
      <DocumentAnatomy />
      <IssueControls />
      <CreditNotes />
      <PaymentAndBalance />
      <GlobalContext />
      <SourcesAndHandoffs />
      <TrustPrivacySecurity />
      <InvoicesFAQ />
      <InvoicesNextStep />
    </main>
  );
}