import {
  ExistingRelationship,
  Partners,
  PartnersFaq,
  PartnershipModels,
  PartnershipQualificationFramework,
  PartnershipReviewLifecycle,
  PartnershipTrustEvidence,
  RelatedZoikoBillingNavigation,
} from "@/components/partners";

export default function PartnersPage() {
  return (
    <main>
      <Partners />

      <PartnershipModels />

      <PartnershipQualificationFramework />

      <PartnershipReviewLifecycle />

      <PartnershipTrustEvidence />

      <ExistingRelationship />

      <RelatedZoikoBillingNavigation />

      <PartnersFaq />
    </main>
  );
}