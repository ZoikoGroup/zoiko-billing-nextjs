"use client";

import Image from "next/image";
import { useState } from "react";

import SectionHeader from "@/components/global-capabilities/SectionHeader";

const phases = [
  { id: 1, title: "Entities & relationship" },
  { id: 2, title: "Charge context" },
  { id: 3, title: "Market, currency & FX" },
  { id: 4, title: "Tax, legal & compliance" },
  { id: 5, title: "Responsibility & evidence" },
  { id: 6, title: "Exceptions & corrections" },
  { id: 7, title: "System & downstream" },
];

export default function ReadinessModelSection() {
  const [selected, setSelected] = useState(1);

  return (
    <section className="w-full bg-[#f5f7fb] py-14 font-[family-name:var(--font-inter)] sm:py-16 md:py-20">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 sm:px-8 md:px-10 lg:px-14 xl:px-[100px]">
        <SectionHeader
          eyebrow="Seven-phase readiness model"
          title="Select a phase to see its contract."
          subtitle={
            <>
              Each carries an objective, questions, inputs, owner roles, a hold
              condition and a <br className="hidden lg:inline" />
              primary output.
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
                className={`flex min-h-[72px] flex-col items-start justify-center gap-1 rounded-[10px] border px-3 py-3 text-left shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)] transition last:col-span-2 sm:min-h-[76px] sm:last:col-span-1 ${
                  isSelected
                    ? "border-transparent bg-[#eaf2fe] outline-2 outline-solid -outline-offset-2 outline-[#1f6feb]"
                    : "border-[#dfe5ee] bg-white hover:bg-slate-50"
                }`}
              >
                <span className="text-[10px] leading-4 text-[#7890b2] lg:text-[9.5px]">
                  Phase {phase.id}
                </span>
                <span className="text-[13px] font-bold leading-4 text-black lg:text-xs">
                  {phase.title}
                </span>
              </button>
            );
          })}
        </div>

        <Image
          src="/images/multi-entity-guide/phase-model.webp"
          alt="Seven phases along a path, each with its own contract card beneath it"
          width={1232}
          height={540}
          className="mt-4 h-auto w-full max-w-[1232px]"
        />
      </div>
    </section>
  );
}
