import type { ReactNode } from "react";

import SectionHeader from "@/components/global-capabilities/SectionHeader";

interface Role {
  title: string;
  description: ReactNode;
  phases: string;
}

const roles: Role[] = [
  {
    title: "Program / finance lead",
    description:
      "Owns entity scoping, charge context and the readiness record across phases.",
    phases: "Phases 1 · 2 · 5 · 7",
  },
  {
    title: "Tax / legal specialist",
    description: (
      <>
        Owns phase 4.{" "}
        <strong className="font-bold">No other role may close it</strong>, and
        listing the questions is not completing the review.
      </>
    ),
    phases: "Phase 4 · inputs to 5 and 6",
  },
  {
    title: "Controller / accounting",
    description:
      "Owns evidence expectations, correction authority and downstream acceptance.",
    phases: "Phases 5 · 6 · 7",
  },
  {
    title: "Technical / integration",
    description:
      "Owns system boundaries, handoff confirmation and dependency verification.",
    phases: "Phases 3 · 7",
  },
];

export default function RoleGuideViewsSection() {
  return (
    <section className="w-full bg-white py-14 font-[family-name:var(--font-inter)] sm:py-16 md:py-20">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 sm:px-8 md:px-10 lg:px-14 xl:px-[100px]">
        <SectionHeader
          eyebrow="Role-based guide views"
          title={
            <>
              Four roles, and phase 4 belongs to one{" "}
              <br className="hidden lg:inline" />
              of them.
            </>
          }
          subtitle={
            <>
              A role view filters visibility.{" "}
              <strong className="font-bold">
                It never transfers competence to close an item.
              </strong>
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
