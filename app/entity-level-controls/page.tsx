import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import {
  AccessReviews,
  ApprovalPolicies,
  CentralOversight,
  ConfigurationChangeControl,
  ControlsCta,
  ControlsFAQ,
  ControlsHero,
  DelegationTemporaryAccess,
  EffectiveAccessModel,
  EntityScopeInheritance,
  ExplainableAccess,
  FailureStates,
  NonHumanPrincipals,
  RolesCapabilities,
  WorkflowState,
} from "@/components/entity-level-controls";

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
  title: "Entity-Level Controls | Zoiko Billing",
  description:
    "Control who can configure, review, approve and act for each billing entity — with entity-scoped access, approval policy, delegation and evidence.",
};

export default function EntityLevelControlsPage() {
  return (
    <main
      className={`${inter.variable} ${plusJakartaSans.variable} font-[family-name:var(--font-inter)]`}
    >
      <ControlsHero />
      <EffectiveAccessModel />
      <EntityScopeInheritance />
      <RolesCapabilities />
      <WorkflowState />
      <ApprovalPolicies />
      <ConfigurationChangeControl />
      <DelegationTemporaryAccess />
      <ExplainableAccess />
      <CentralOversight />
      <NonHumanPrincipals />
      <AccessReviews />
      <FailureStates />
      <ControlsFAQ />
      <ControlsCta />
    </main>
  );
}
