import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import {
  BillingModel,
  DownstreamHandoff,
  ExceptionStates,
  InterEntityFAQ,
  InterEntityHero,
  LifecycleModel,
  RegistryWorkspace,
  RelatedNavigation,
  Responsibilities,
  SpecialistBoundary,
  WhyIntercompany,
} from "@/components/inter-entity-billing";

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
  title: "Inter-Entity Billing | Zoiko Billing",
  description:
    "Govern charges between your own entities with separate business, specialist, accounting and downstream approval states — and a versioned record of each instruction.",
};

export default function InterEntityBillingPage() {
  return (
    <main
      className={`${inter.variable} ${plusJakartaSans.variable} font-[family-name:var(--font-inter)]`}
    >
      <InterEntityHero />
      <WhyIntercompany />
      <BillingModel />
      <RegistryWorkspace />
      <LifecycleModel />
      <Responsibilities />
      <SpecialistBoundary />
      <ExceptionStates />
      <DownstreamHandoff />
      <RelatedNavigation />
      <InterEntityFAQ />
    </main>
  );
}
