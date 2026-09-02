import { Inter, Plus_Jakarta_Sans } from "next/font/google";

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
