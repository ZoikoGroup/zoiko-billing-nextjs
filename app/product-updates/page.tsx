import { Inter, Plus_Jakarta_Sans } from "next/font/google";

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
  title: "Product Updates | Zoiko Billing",
  description:
    "See what changed in Zoiko Billing — and what it means for your work. Browse approved shipped changes across billing operations, administration, reporting, integrations, and accessibility.",
};

export default function ProductUpdatesPage() {
  return (
    <main
      className={`${inter.variable} ${plusJakartaSans.variable} min-h-screen w-full bg-white text-slate-900 font-[family-name:var(--font-inter)] antialiased`}
    >
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
