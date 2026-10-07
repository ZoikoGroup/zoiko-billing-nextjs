import { Inter, Plus_Jakarta_Sans } from "next/font/google";

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
