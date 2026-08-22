import React from "react";

import {
  Allocation,
  ControlModel,
  CorrectiveEvents,
  Exceptions,
  GlobalCurrency,
  Matching,
  NextStep,
  PayHero,
  PaymentsFAQ,
  PayRules,
  Sources,
  SourcesHandoffs,
  TrustPrivacySecurity,
} from "@/components/payments-and-reconcilliation";

export default function Page() {
  return (
    <main className="w-full">
      <PayHero />
      <PayRules />
      <ControlModel />
      <Sources />
      <Matching />
      <Allocation />
      <Exceptions />
      <CorrectiveEvents />
      <GlobalCurrency />
      <SourcesHandoffs />
      <TrustPrivacySecurity />
      <PaymentsFAQ />
      <NextStep />
    </main>
  );
}
