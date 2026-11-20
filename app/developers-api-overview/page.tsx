import { Metadata } from "next";
import { inter, plusJakartaSans } from "@/styles/fonts";
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
    <main
      className={`${inter.variable} ${plusJakartaSans.variable} min-h-screen w-full bg-white text-slate-900 font-[family-name:var(--font-inter)] antialiased`}
    >
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
