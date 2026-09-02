import {
  DocumentationHeroSection,
  DocVsHelpVsApiSection,
  StartByTaskSection,
  BrowseByProductAreaRoleSection,
  ProcedureArticleTemplateSection,
  ReferenceTableContractSection,
  AssetGovernanceSection,
  DocStatesChangeImpactSection,
  DocumentationFaqSection,
} from "@/components/documentation";

export const metadata = {
  title: "Documentation | Zoiko Billing",
  description:
    "How Zoiko Billing works, as it works today. Current product-usage documentation for billing operations — concepts, procedures, states, fields, roles and permissions.",
};

export default function DocumentationPage() {
  return (
    <main className="min-h-screen w-full bg-white text-slate-900 font-sans antialiased">
      <DocumentationHeroSection />
      <DocVsHelpVsApiSection />
      <StartByTaskSection />
      <BrowseByProductAreaRoleSection />
      <ProcedureArticleTemplateSection />
      <ReferenceTableContractSection />
      <AssetGovernanceSection />
      <DocStatesChangeImpactSection />
      <DocumentationFaqSection />
    </main>
  );
}
