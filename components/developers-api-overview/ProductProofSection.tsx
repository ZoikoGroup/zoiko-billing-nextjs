import React from "react";

interface ProofRow {
  uiArea: string;
  requiredContent: React.ReactNode;
}

const proofRows: ProofRow[] = [
  {
    uiArea: "Resource selector",
    requiredContent: "One confirmed resource family from the API catalog",
  },
  {
    uiArea: "Operation selector",
    requiredContent: "A confirmed method or action label only",
  },
  {
    uiArea: "Environment",
    requiredContent: (
      <>
        A verified environment label —{" "}
        <span className="font-semibold text-slate-900">omit rather than invent</span> if
        environments are not yet defined
      </>
    ),
  },
  {
    uiArea: "Request pane",
    requiredContent:
      "Canonical headers and body fields, with syntax highlighting and a copy control",
  },
  {
    uiArea: "Response pane",
    requiredContent:
      "Canonical status and result fields, line wrapping, copy control, no horizontal clipping",
  },
  {
    uiArea: "Metadata rail",
    requiredContent:
      "Variant, permission or scope requirement, idempotency behavior if applicable, and a link to the exact reference",
  },
  {
    uiArea: "States",
    requiredContent:
      "Ready, loading, success, validation error, permission error, rate response if canonical, service error, and unknown outcome if canonical",
  },
  {
    uiArea: "Accessibility",
    requiredContent:
      "Text alternative for the code pane, keyboard scroll, focusable copy control, status never color-only, minimum readable code size",
  },
];

export default function ProductProofSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-100" id="product-proof">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-5 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
          <span
            className="
              text-[10px]
              font-bold
              uppercase
              leading-4
              tracking-[0.16em]
              text-[#7890b2]
              sm:text-xs
              sm:tracking-[0.18em]
            "
          >
            REQUEST &amp; RESPONSE PRODUCT PROOF
          </span>
          <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
        </div>

        {/* Heading */}
        <h2 className="!font-[family-name:var(--font-jakarta)] mt-4 !m-0 w-full !text-[30px] !font-extrabold !leading-[1.2] !tracking-[-0.035em] !text-[#091127] sm:!text-[34px] md:!text-[36px] lg:!text-[40px] max-w-3xl">
          One credible technical visual, zero <br className="hidden sm:inline" /> invented facts.
        </h2>

        {/* Subtitle */}
        <p className="mt-3.5 max-w-2xl text-[15px] font-normal leading-relaxed text-[#5d7192] sm:text-base">
          The console above is schema-driven. Until canonical documentation supplies exact
          examples, every token is a marked placeholder rather than production syntax.
        </p>

        {/* Table Container */}
        <div className="mt-12 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-[#dfe5ee] bg-white shadow-[0_6px_20px_rgba(15,23,42,0.04)]">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-[#fafbfc] border-b border-[#dfe5ee]">
                  <th scope="col" className="py-4 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-[#7890b2] w-1/4">
                    UI AREA
                  </th>
                  <th scope="col" className="py-4 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-[#7890b2] w-3/4">
                    REQUIRED CONTENT
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#edf0f4]">
                {proofRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-[#091127] align-top whitespace-nowrap">
                      {row.uiArea}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-[#5d7192] leading-relaxed align-top">
                      {row.requiredContent}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}