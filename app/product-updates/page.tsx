import {
  ProductUpdatesHeroSection,
  AvailabilityStateContractSection,
  ActionRequirementContractSection,
  BrowseByImpactProductAreaSection,
  ReleaseCommunicationStandardSection,
  UpdateDetailTemplateSection,
  DeprecationMigrationContractSection,
  CorrectionsHistoricalTruthSection,
  ProductUpdatesAuthoritativeHandoffsSection,
  ProductUpdatesFaqSection,
  ProductUpdatesFinalCtaSection,
} from "@/components/product-updates";

export const metadata = {
  title: "Product Updates | Zoiko Billing",
  description:
    "See what changed in Zoiko Billing — and what it means for your work. Browse approved shipped changes across billing operations, administration, reporting, integrations, and accessibility.",
};

export default function ProductUpdatesPage() {
  return (
    <main className="min-h-screen w-full bg-white text-slate-900 font-sans antialiased">
      <ProductUpdatesHeroSection />
      <AvailabilityStateContractSection />
      <ActionRequirementContractSection />
      <BrowseByImpactProductAreaSection />
      <ReleaseCommunicationStandardSection />
      <UpdateDetailTemplateSection />
      <DeprecationMigrationContractSection />
      <CorrectionsHistoricalTruthSection />
      <ProductUpdatesAuthoritativeHandoffsSection />
      <ProductUpdatesFaqSection />
      <ProductUpdatesFinalCtaSection />
    </main>
  );
}
