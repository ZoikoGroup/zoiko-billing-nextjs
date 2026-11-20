import { inter, plusJakartaSans } from "@/styles/fonts";

import {
  DestinationStates,
  EntitySeparation,
  GroupFAQ,
  GroupHero,
  GroupQuestionClasses,
  LinkGovernance,
  TaskContinuity,
  TwoRelationships,
} from "@/components/zoiko-group";

export const metadata = {
  title: "Zoiko Group | Zoiko Billing",
  description:
    "Zoiko Billing is a Zoiko Group product. What that relationship establishes, what it does not, and which questions the group destination owns.",
};

export default function ZoikoGroupPage() {
  return (
    <main
      className={`${inter.variable} ${plusJakartaSans.variable} font-[family-name:var(--font-inter)]`}
    >
      <GroupHero />
      <DestinationStates />
      <EntitySeparation />
      <TwoRelationships />
      <GroupQuestionClasses />
      <TaskContinuity />
      <LinkGovernance />
      <GroupFAQ />
    </main>
  );
}
