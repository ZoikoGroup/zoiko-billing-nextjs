import { inter, plusJakartaSans } from "@/styles/fonts";

import {
  AfterYouReport,
  CoordinatedDisclosure,
  DisclosureFAQ,
  DisclosureHero,
  SafeHarborRewards,
  ScopeStatement,
  SensitiveEvidence,
  WhatToInclude,
  WrongRoute,
} from "@/components/responsible-disclosure";

export default function ResponsibleDisclosurePage() {
  return (
    <main
      className={`${inter.variable} ${plusJakartaSans.variable} font-[family-name:var(--font-inter)]`}
    >
      <DisclosureHero />
      <ScopeStatement />
      <SensitiveEvidence />
      <WhatToInclude />
      <AfterYouReport />
      <SafeHarborRewards />
      <CoordinatedDisclosure />
      
      <WrongRoute />
      <DisclosureFAQ />
    </main>
  );
}
