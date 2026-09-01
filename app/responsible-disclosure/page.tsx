import { Inter, Plus_Jakarta_Sans } from "next/font/google";

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

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800"],
  variable: "--font-jakarta",
});

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
