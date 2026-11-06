import { FileText } from "lucide-react";
import Image from "next/image";

import { ExploreButton, SectionIntro } from "./shared";

const steps = [
  { step: "Step 1", title: "Invoice", body: "A bill is generated as a draft.", bars: ["w-32", "w-24"] },
  { step: "Step 2", title: "Review", body: "Your team checks it before it goes out.", bars: ["w-28", "w-20"] },
  { step: "Step 3", title: "Follow-up", body: "Collections follow-up stays in the same view.", bars: ["w-32", "w-20"], active: true },
];

export default function WorkflowSection() {
  return (
    <section className="mx-auto w-full max-w-[1140px] px-5 pt-20 sm:px-6 lg:pt-28">
      <SectionIntro
        title="From bill generation through follow-up"
        intro="Billing, invoicing, collections and revenue operations in disciplined workflows."
      />

      <div className="mt-7 grid gap-5 lg:grid-cols-[1fr_2fr] lg:gap-5">
        {/* Billing, unified */}
        <div className="relative flex min-h-[420px] flex-col items-center justify-center overflow-hidden bg-[#0f2a47] px-6 py-12 text-center">
          <Image
            src="/images/black-friday/workflow-signing-document.webp"
            alt=""
            fill
            sizes="(max-width: 1023px) 100vw, 360px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#e6ebf1]/[0.82]" />
          <div className="relative flex flex-col items-center">
            <FileText aria-hidden strokeWidth={1.75} className="size-14 text-[#1a62f0]" />
            <p className="!mb-0 !mt-3 text-base font-semibold !leading-6 !text-[#1a62f0]">One workflow</p>
            <h3 className="!mb-0 !mt-3 text-4xl font-bold leading-9 text-[#082f49]">Billing, unified</h3>
            <p className="!mb-0 !mt-3 max-w-64 text-base !leading-6 !text-[#2c3e57]">
              Clearer billing without more spreadsheets and reconciliations.
            </p>
            <ExploreButton tone="navy" className="mt-6" />
          </div>
        </div>

        {/* Invoice, review, follow-up */}
        <div className="relative overflow-hidden bg-[#0f2a47] px-6 py-9 sm:px-8">
          <Image
            src="/images/black-friday/workflow-office-corridor.webp"
            alt=""
            fill
            sizes="(max-width: 1023px) 100vw, 720px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0a1730]/[0.82]" />
          <div className="relative">
            <h3 className="!mb-0 text-2xl font-semibold leading-10 text-white">Invoice, review, follow-up</h3>
            <ol className="mt-6 grid gap-4 sm:grid-cols-3">
              {steps.map((s) => (
                <li
                  key={s.title}
                  className={`flex min-h-48 flex-col rounded-[10px] p-5 ${s.active ? "bg-[#1a62f0]" : "bg-white"}`}
                >
                  <span className={`text-xs font-semibold leading-5 ${s.active ? "text-[#e3ecfd]" : "text-[#1a62f0]"}`}>
                    {s.step}
                  </span>
                  <span className={`mt-2.5 text-xl font-semibold leading-8 ${s.active ? "text-white" : "text-[#082f49]"}`}>
                    {s.title}
                  </span>
                  <span className={`mt-3 text-sm leading-5 ${s.active ? "text-[#eef3fd]" : "text-[#48566a]"}`}>
                    {s.body}
                  </span>
                  <span aria-hidden className="mt-auto flex flex-col gap-2.5 pt-5">
                    {s.bars.map((w) => (
                      <span key={w} className={`h-2 rounded-sm ${w} ${s.active ? "bg-[#4f8cf5]" : "bg-[#e6ebf1]"}`} />
                    ))}
                  </span>
                </li>
              ))}
            </ol>
            <p className="!mb-0 !mt-6 text-xs !leading-5 !text-[#a9bfdc]">
              Conceptual workflow. It shows no payment status and no customer data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
