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
  title: "Black Friday 2026 | Zoiko Billing",
  description:
    "Black Friday through Cyber Monday, 27–30 Nov 2026: 25% off Essentials, Professional and Business plans. Eligibility and offer terms are confirmed before you commit.",
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
