"use client";

import Image from "next/image";
import { useState } from "react";

import SectionHeader from "@/components/global-capabilities/SectionHeader";

interface Phase {
  id: number;
  title: string;
  // Gates are the verification phases that cannot be skipped.
  gate?: boolean;
}

const phases: Phase[] = [
  { id: 1, title: "Scope the operating model" },
  { id: 2, title: "Verify availability", gate: true },
  { id: 3, title: "Currency, FX & pricing" },
  { id: 4, title: "Payment context" },
  { id: 5, title: "Tax & compliance", gate: true },
  { id: 6, title: "Entity & system boundaries" },
  { id: 7, title: "Readiness & proof" },
];

export default function PhaseGuideMapSection() {
  const [selected, setSelected] = useState(1);

  return (
    <section className="w-full bg-[#f5f7fb] py-14 font-[family-name:var(--font-inter)] sm:py-16 md:py-20">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 sm:px-8 md:px-10 lg:px-14 xl:px-[100px]">
        <SectionHeader
          eyebrow="Seven-phase guide map"
          title="Select a phase to see its contract."
          subtitle={
            <>
              Each phase carries questions, expected evidence, specialist
              handoffs, stop <br className="hidden lg:inline" />
              conditions and a decision output.{" "}
              <strong className="font-bold">
                Amber-marked phases are verification gates.
              </strong>
            </>
          }
        />

        {/* PHASE PICKER */}
        <div className="mt-8 grid w-full max-w-[1184px] grid-cols-2 gap-2 sm:mt-10 sm:grid-cols-4 lg:grid-cols-7">
          {phases.map((phase) => {
            const isSelected = selected === phase.id;
            return (
              <button
                key={phase.id}
                type="button"
                onClick={() => setSelected(phase.id)}
                aria-pressed={isSelected}
                className={`flex min-h-[84px] flex-col items-start justify-center gap-1 rounded-[10px] px-3 py-3 text-left last:col-span-2 sm:min-h-[98px] sm:last:col-span-1 shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)] transition ${
                  isSelected
                    ? "bg-[#eaf2fe] outline-2 outline-solid -outline-offset-2 outline-[#1f6feb]"
                    : "bg-white hover:bg-slate-50"
                } ${
                  phase.gate
                    ? "border border-l-[3px] border-[#e5d3b8] border-l-[#b7791f]"
                    : "border border-[#dfe5ee]"
                }`}
              >
                <span className="text-[10px] leading-4 text-[#7890b2] lg:text-[9.5px]">
                  Phase {phase.id}
                </span>
                <span className="text-[13px] font-bold leading-4 text-black lg:text-xs">
                  {phase.title}
                </span>
                {phase.gate && (
                  <span className="pt-1 text-[10px] font-bold sm:pt-3 lg:text-[9.5px] uppercase leading-4 tracking-wide text-[#854d0e]">
                    Gate
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <Image
          src="/images/global-billing-guide/phase-map.webp"
          alt="Seven phases laid out along a path, with phases 2 and 5 marked as amber verification gates"
          width={1232}
          height={567}
          className="mt-4 h-auto w-full max-w-[1232px]"
        />
      </div>
    </section>
  );
}
