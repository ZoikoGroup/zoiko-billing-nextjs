import { Barlow_Condensed, Jost } from "next/font/google";

import {
  AudienceSection,
  BlackFridayHero,
  CampaignCountdown,
  EligibilitySection,
  FinalCta,
  OfferDisclaimer,
  OfferPricing,
  OfferTerms,
  SavingsBanner,
  WorkflowSection,
} from "@/components/black-friday";

const jost = Jost({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-jost",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
  variable: "--font-barlow",
});

export const metadata = {
  title: "Zoiko Billing Black Friday Sale Save 20%  | Zoiko Billing",
  description:
  "Save 20% on annual billing plans with Zoiko Billing. Simplify invoicing, automate recurring billing, track payments, and manage finances with ease."
};

export default function BlackFridayPage() {
  return (
    <main
      className={`${jost.variable} ${barlowCondensed.variable} w-full overflow-x-hidden bg-[#0a1730] text-white font-[family-name:var(--font-jost)] antialiased`}
    >
      <BlackFridayHero />
      <OfferPricing />
      <CampaignCountdown />
      <SavingsBanner />
      <WorkflowSection />
      <AudienceSection />
      <EligibilitySection />
      <OfferTerms />
      <FinalCta />
      <OfferDisclaimer />
    </main>
  );
}
