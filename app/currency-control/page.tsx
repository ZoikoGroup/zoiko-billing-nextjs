import { inter, plusJakartaSans } from "@/styles/fonts";

import {
  AuthorityReview,
  ControlModel,
  CurrencyFAQ,
  CurrencyHero,
  DependencyBoundary,
  DisplayBoundary,
  PolicyStates,
  PolicyWorkspace,
  RelatedNavigation,
  ScopeLayers,
  WhyCurrencyControl,
} from "@/components/currency-control";

export const metadata = {
  title: "Currency Control | Zoiko Billing",
  description:
    "Govern which currencies are permitted, where, and on whose authority — with scoped policy, reviewed changes, effective dates and evidence.",
};

export default function CurrencyControlPage() {
  return (
    <main
      className={`${inter.variable} ${plusJakartaSans.variable} font-[family-name:var(--font-inter)]`}
    >
      <CurrencyHero />
      <WhyCurrencyControl />
      <ControlModel />
      <PolicyWorkspace />
      <ScopeLayers />
      <DisplayBoundary />
      <AuthorityReview />
      <PolicyStates />
      <DependencyBoundary />
      <RelatedNavigation />
      <CurrencyFAQ />
    </main>
  );
}
