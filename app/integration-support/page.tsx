import {
  AuthorityBoundary,
  DeterministicHandoffs,
  IntegrationSupport,
  IntegrationSupportFAQ,
  IssueFamilies,
  SecureIntake,
  SensitiveData,
  UnknownOutcomesRetrySafety,
  WebhookContract,
} from "@/components/integration-support";

export default function Page() {
  return (
    <main>
      <IntegrationSupport />
      <AuthorityBoundary />
      <IssueFamilies />
      <SecureIntake />
      <SensitiveData />
      <WebhookContract />
      <UnknownOutcomesRetrySafety />
      <DeterministicHandoffs />
      <IntegrationSupportFAQ />
    </main>
  );
}