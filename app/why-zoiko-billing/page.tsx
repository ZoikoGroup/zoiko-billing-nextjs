import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import {
  ClaimClassification,
  DecisionStates,
  LifecycleContinuity,
  ProofPathways,
  SixReasons,
  StateDistinctions,
  ThreeBoundaries,
  WhyFAQ,
  WhyHero,
} from "@/components/why-zoiko-billing";

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

export const metadata = {
  title: "Why Zoiko Billing | Zoiko Billing",
  description:
    "Decision criteria, not a list of superlatives — how Zoiko Billing is designed, what that design is good for, and where it fits poorly.",
};

export default function WhyZoikoBillingPage() {
  return (
    <main
      className={`${inter.variable} ${plusJakartaSans.variable} font-[family-name:var(--font-inter)]`}
    >
      <WhyHero />
      <SixReasons />
      <ClaimClassification />
      <DecisionStates />
      <LifecycleContinuity />
      <StateDistinctions />
      <ThreeBoundaries />
      <ProofPathways />
      <WhyFAQ />
    </main>
  );
}
