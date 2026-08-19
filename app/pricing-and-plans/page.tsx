import React from "react";

import {
  BaselineProtections,
  BillingTerms,
  CommercialState,
  ComparePlans,
  Deployment,
  Included,
  IntegrationsApi,
  Limits,
  Plans,
  PricingFinalCta,
  PricingPlans,
  SupportImplementation,
  UsageAllowances,
} from "@/components/pricing-and-plans";

export default function PricingAndPlansPage() {
  return (
    <main>
      <PricingPlans />
      <CommercialState />
      <Plans />
      <Deployment />
      <Included />
      <Limits />
      <BillingTerms />
      <UsageAllowances />
      <IntegrationsApi />
      <SupportImplementation />
      <BaselineProtections />
      <ComparePlans />
      <PricingFinalCta />
    </main>
  );
}
