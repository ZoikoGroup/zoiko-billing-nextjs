import { inter, plusJakartaSans } from "@/styles/fonts";

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
