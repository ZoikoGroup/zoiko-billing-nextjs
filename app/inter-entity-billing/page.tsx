import { inter, plusJakartaSans } from "@/styles/fonts";

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
