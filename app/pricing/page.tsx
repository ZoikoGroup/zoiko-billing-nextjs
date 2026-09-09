import React from "react";

import {
  FullComparison,
  PlanChanges,
  PricingCards,
  PricingFAQ,
  PricingHero,
  WhichPlanFits,
  EnterprisePricing,
} from "@/components/pricing";

export default function Page() {
  return (
    <main>
      <PricingHero />
      <PricingCards />
      <WhichPlanFits />
      <FullComparison />
      <PlanChanges />
      <EnterprisePricing />
      <PricingFAQ />
    </main>
  );
}
