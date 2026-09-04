import React from "react";

import {
  ApplicabilityStateVocabulary,
  CurrentnessRule,
  GlobalBillingFAQ,
  GlobalBillingHeader,
  GlobalBillingModel,
  GlobalBillingReadiness,
  GlobalOperatingControls,
  GlobalRequirementsResolver,
  ProviderDependencies,
  WhereToGoNext,
} from "@/components/global-billing-header";

export default function Page() {
  return (
    <main>
      <GlobalBillingHeader />
      <GlobalBillingModel />
      <GlobalRequirementsResolver />
      <ApplicabilityStateVocabulary />
      <ProviderDependencies />
      <GlobalOperatingControls />
      <CurrentnessRule />
      <GlobalBillingReadiness />
      <WhereToGoNext />
      <GlobalBillingFAQ />
    </main>
  );
}