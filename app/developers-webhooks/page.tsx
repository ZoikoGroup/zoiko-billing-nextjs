import { Inter, Plus_Jakarta_Sans } from "next/font/google";
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

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata = {
  title: "Developers Webhooks | Zoiko Billing",
  description:
    "Connect approved Zoiko Billing events to your systems with a delivery model that makes verification, delivery status, failures and operational evidence understandable.",
};

export default function DevelopersWebhooksPage() {
  return (
    <main
      className={`${inter.variable} ${plusJakartaSans.variable} min-h-screen w-full bg-white text-slate-900 font-[family-name:var(--font-inter)] antialiased`}
    >
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
