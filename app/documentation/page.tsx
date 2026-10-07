import { Inter, Plus_Jakarta_Sans } from "next/font/google";

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
  title: "Documentation | Zoiko Billing",
  description:
    "How Zoiko Billing works, as it works today. Current product-usage documentation for billing operations — concepts, procedures, states, fields, roles and permissions.",
};

export default function DocumentationPage() {
  return (
    <main
      className={`${inter.variable} ${plusJakartaSans.variable} min-h-screen w-full bg-white text-slate-900 font-[family-name:var(--font-inter)] antialiased`}
    >
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
