import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import {
  DevelopersApiDocHeroSection,
  SixFirstStepsSection,
  DocumentationShellSection,
  ResourceCatalogSection,
  OperationPageAnatomySection,
  SchemasFieldSemanticsSection,
  MoneyTimeConventionsSection,
  StatesLifecycleBehaviorSection,
  PaginationFilteringOrderingSection,
  IdempotencyRetriesSection,
  ErrorsTroubleshootingSection,
  VersioningDeprecationSection,
  AuthPermissionBoundaryDocSection,
  EventsWebhookBoundaryDocSection,
  SixRoutesNextStepsSection,
  DocumentationFaqDocSection,
  DeveloperDocFinalCtaSection,
} from "@/components/developers-api-documentation";

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
  title: "Developers API Documentation | Zoiko Billing",
  description:
    "Find source-governed API reference, resource contracts, field semantics, errors, lifecycle rules and implementation guidance for Zoiko Billing.",
};

export default function DevelopersApiDocumentationPage() {
  return (
    <main
      className={`${inter.variable} ${plusJakartaSans.variable} min-h-screen w-full bg-white text-slate-900 font-[family-name:var(--font-inter)] antialiased`}
    >
      <DevelopersApiDocHeroSection />
      <SixFirstStepsSection />
      <DocumentationShellSection />
      <ResourceCatalogSection />
      <OperationPageAnatomySection />
      <SchemasFieldSemanticsSection />
      <MoneyTimeConventionsSection />
      <StatesLifecycleBehaviorSection />
      <PaginationFilteringOrderingSection />
      <IdempotencyRetriesSection />
      <ErrorsTroubleshootingSection />
      <VersioningDeprecationSection />
      <AuthPermissionBoundaryDocSection />
      <EventsWebhookBoundaryDocSection />
      <SixRoutesNextStepsSection />
      <DocumentationFaqDocSection />
      <DeveloperDocFinalCtaSection />
    </main>
  );
}
