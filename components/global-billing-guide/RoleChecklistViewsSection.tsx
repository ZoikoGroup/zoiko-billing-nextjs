import type { ReactNode } from "react";

import SectionHeader from "@/components/global-capabilities/SectionHeader";

interface Role {
  title: string;
  description: ReactNode;
  phases: string;
}

const roles: Role[] = [
  {
    title: "Program / operations lead",
    description:
      "Owns scope, sequencing, owner assignment and unresolved-item tracking across all seven phases.",
    phases: "Phases 1 · 2 · 6 · 7",
  },
  {
    title: "Finance / billing",
    description:
      "Owns currency, pricing presentation and entity charge context questions.",
    phases: "Phases 3 · 6 · 7",
  },
  {
    title: "Tax / compliance specialist",
    description: (
      <>
        Owns the review that phase 5 routes to.{" "}
        <strong className="font-bold">
          Cannot be substituted by another role completing the phase.
        </strong>
      </>
    ),
    phases: "Phase 5 · inputs to 7",
  },
  {
    title: "Technical / integration",
    description:
      "Owns system and data handoff boundaries, and technical dependency verification.",
    phases: "Phases 4 · 6 · 7",
  },
];

export default function RoleChecklistViewsSection() {
  return (
    <section className="w-full bg-[#f5f7fb] py-14 font-[family-name:var(--font-inter)] sm:py-16 md:py-20">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 sm:px-8 md:px-10 lg:px-14 xl:px-[100px]">
        <SectionHeader
          eyebrow="Role-based checklist views"
          title={
            <>
              Four roles, and none of them owns the{" "}
              <br className="hidden lg:inline" />
              whole guide.
            </>
          }
          subtitle={
            <>
              A role view filters which questions are yours.{" "}
              <strong className="font-bold">
                It does not reduce the phases that must be completed
              </strong>
              , and no role view lets a gate be bypassed.
            </>
          }
        />

        <div className="mt-8 grid w-full max-w-[1184px] grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((role) => (
            <div
              key={role.title}
              className="flex flex-col gap-3 rounded-[10px] border border-[#dfe5ee] bg-white px-4 pb-4 pt-6 lg:pt-9"
            >
              <h3 className="!m-0 text-xs font-bold !leading-5 text-[#091127] sm:text-[13px]">
                {role.title}
              </h3>
              <p className="!m-0 pt-1 text-xs !leading-[18px] !text-[#5d7192] lg:pt-2.5">
                {role.description}
              </p>
              <p className="!m-0 mt-auto text-xs !leading-4 !text-[#7890b2]">
                {role.phases}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
