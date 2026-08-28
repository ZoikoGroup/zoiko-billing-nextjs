import {
  Authority,
  BillingFAQ,
  BillingSupport,
  EvidenceContract,
  FinData,
  IdentityStates,
  Progressive,
  SpecialistHandoffs,
} from "@/components/billing-support";

export default function Page() {
  return (
    <main>
      <BillingSupport />
      <Authority />
      <Progressive />
      <FinData />
      <IdentityStates />
      <EvidenceContract />
      <SpecialistHandoffs />
      <BillingFAQ />
    </main>
  );
}