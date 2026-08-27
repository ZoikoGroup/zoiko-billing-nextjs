import {
  DevelopersWebhooksHeroSection,
  WebhookMentalModelSection,
  EventCatalogWebhooksSection,
  EndpointSubscriptionSetupSection,
  VerificationSecurityWebhooksSection,
  DeliveryContractWebhooksSection,
  DeliveryAttemptEvidenceWebhooksSection,
  FailuresRetriesDuplicateSafetySection,
  OrderingConcurrencyCausalitySection,
  TestingReplayWebhooksSection,
  TroubleshootingWebhooksSection,
  LifecycleVersioningChangeManagementSection,
  EnvironmentAvailabilityBoundariesSection,
  RolesPermissionsAuditWebhooksSection,
  PrivacyDataMinimizationLoggingSection,
  ReliabilityClaimGovernanceSection,
  EnterpriseTrustWebhooksSection,
  RelatedDeveloperJourneysSection,
  WebhooksFaqSection,
  DeveloperWebhooksFinalCtaSection,
} from "@/components/developers-webhooks";

export const metadata = {
  title: "Developers Webhooks | Zoiko Billing",
  description:
    "Connect approved Zoiko Billing events to your systems with a delivery model that makes verification, delivery status, failures and operational evidence understandable.",
};

export default function DevelopersWebhooksPage() {
  return (
    <main className="min-h-screen w-full bg-white text-slate-900 font-sans antialiased">
      <DevelopersWebhooksHeroSection />
      <WebhookMentalModelSection />
      <EventCatalogWebhooksSection />
      <EndpointSubscriptionSetupSection />
      <VerificationSecurityWebhooksSection />
      <DeliveryContractWebhooksSection />
      <DeliveryAttemptEvidenceWebhooksSection />
      <FailuresRetriesDuplicateSafetySection />
      <OrderingConcurrencyCausalitySection />
      <TestingReplayWebhooksSection />
      <TroubleshootingWebhooksSection />
      <LifecycleVersioningChangeManagementSection />
      <EnvironmentAvailabilityBoundariesSection />
      <RolesPermissionsAuditWebhooksSection />
      <PrivacyDataMinimizationLoggingSection />
      <ReliabilityClaimGovernanceSection />
      <EnterpriseTrustWebhooksSection />
      <RelatedDeveloperJourneysSection />
      <WebhooksFaqSection />
      <DeveloperWebhooksFinalCtaSection />
    </main>
  );
}
