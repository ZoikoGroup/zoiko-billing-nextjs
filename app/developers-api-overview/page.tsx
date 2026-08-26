import { Metadata } from "next";
import {
  DevelopersHeroSection,
  QuickStartSection,
  ApiCapabilityMapSection,
  IntegrationOutcomesSection,
  ProductProofSection,
  AuthenticationBoundarySection,
  EventsWebhooksSection,
  FourRoutesSection,
  IntegrationLifecycleSection,
  ReliabilityDisciplineSection,
  GovernanceIntegritySection,
  EnterpriseImplementationSection,
  DeveloperFaqSection,
  DeveloperFinalCtaSection,
} from "@/components/developers-api-overview";

export const metadata: Metadata = {
  title: "Developers & API Overview | Zoiko Billing",
  description:
    "Build billing workflows on governed records. Use Zoiko Billing APIs to connect billing operations while preserving controls and access boundaries.",
};

export default function DevelopersApiOverviewPage() {
  return (
    <main>
      <DevelopersHeroSection />
      <QuickStartSection />
      <ApiCapabilityMapSection />
      <IntegrationOutcomesSection />
      <ProductProofSection />
      <AuthenticationBoundarySection />
      <EventsWebhooksSection />
      <FourRoutesSection />
      <IntegrationLifecycleSection />
      <ReliabilityDisciplineSection />
      <GovernanceIntegritySection />
      <EnterpriseImplementationSection />
      <DeveloperFaqSection />
      <DeveloperFinalCtaSection />
    </main>
  );
}
