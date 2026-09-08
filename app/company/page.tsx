import {
  Boundaries,
  CompanyFAQ,
  CompanyHero,
  CompanyPathways,
  ContactPressSupportRouting,
  DynamicPreviewContract,
  IdentityRelationshipSnapshot,
  UIStates,
  VerifiedInformation,
} from '@/components/company';

export default function CompanyPage() {
  return (
    <main>
      <CompanyHero />

      <CompanyPathways />

      <IdentityRelationshipSnapshot />

      <Boundaries />

      <DynamicPreviewContract />

      <ContactPressSupportRouting />

      <VerifiedInformation />

      <UIStates />

      <CompanyFAQ />
    </main>
  );
}