import React from "react";

import {
  ARHero,
  Boundary,
  Communication,
  Disputes,
  GlobalContext,
  Model,
  NextStep,
  Ownership,
  Payments,
  Position,
  Questions,
  Sources,
  TrustSecurity,
} from "@/components/accounts-receivable";

export default function Page() {
  return (
    <main>
      <ARHero />
      <Boundary />
      <Model />
      <Position />
      <Ownership />
      <Communication />
      <Disputes />
      <Payments />
      <GlobalContext />
      <Sources />
      <TrustSecurity />
      <Questions />
      <NextStep />
    </main>
  );
}


