import Image from "next/image";

interface MaintenanceRow {
  title: string;
  detail: string;
  badge: string;
}

const maintenanceRows: MaintenanceRow[] = [
  {
    title: "Tax and compliance tests",
    detail: "Routed to governed missions.",
    badge: "● To tab 7a",
  },
  {
    title: "Phase questions",
    detail: "Source-safe and audit-ready source change.",
    badge: "● 3 conditions",
  },
  {
    title: "Stop conditions",
    detail: "Defined by the guide, triggered by specialist state.",
    badge: "● The guide s...",
  },
  {
    title: "Approved orientation",
    detail: "Positioned explanatory content, scoped.",
    badge: "● Never a claim",
  },
  {
    title: "Currentness triggers",
    detail: "Second-loss re-review can be scheduled.",
    badge: "● 6 triggers",
  },
  {
    title: "Superseded content",
    detail: "Replacement linked, lineage preserved.",
    badge: "● Precedence...",
  },
];

export default function WhatTriggersReReviewSection() {
  return (
    <section className="w-full bg-[#091127] py-14 font-[family-name:var(--font-inter)] text-white sm:py-16 md:py-20">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20">
        {/* EYEBROW */}
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-0.5 w-6 bg-[#1D70F5]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7890b2] sm:text-xs">
            Evidence, Currentness &amp; Content Maintenance
          </span>
          <span className="h-0.5 w-6 bg-[#1D70F5]" />
        </div>

        {/* HEADING */}
        <h2 className="!font-[family-name:var(--font-jakarta)] !m-0 max-w-[850px] text-center !text-[28px] font-extrabold !leading-[1.18] !tracking-[-0.035em] text-white sm:!text-[38px] md:!text-[44px]">
          What triggers a re-review, and what a <br className="hidden sm:inline" />
          guide may never hold.
        </h2>

        {/* SUBTITLE */}
        <p className="!mt-4 text-center text-xs font-normal text-slate-400 sm:text-base">
          Tax content decays on legislative timetables that no product roadmap tracks.
        </p>

        {/* DESKTOP 3D ILLUSTRATION (Unchanged for lg+) */}
        <div className="mt-10 hidden w-full max-w-[1240px] overflow-hidden rounded-[24px] border border-slate-800/80 bg-[#070D1E] shadow-[0_24px_60px_rgba(0,0,0,0.5)] sm:mt-12 sm:rounded-[28px] md:mt-14 lg:block">
          <Image
            src="/images/tax-compliance-guide/tcg3.png"
            alt="Evidence, currentness and legislative content maintenance"
            width={1774}
            height={887}
            priority
            className="h-auto w-full object-cover"
            sizes="(max-width: 1280px) 100vw, 1240px"
          />
        </div>

        {/* MOBILE MAINTENANCE TABLE & CARD */}
        <div className="mt-8 block w-full max-w-[1240px] lg:hidden">
          {/* TOP WHITE BOX */}
          <div className="w-full rounded-xl bg-white p-3.5 shadow-sm text-xs font-bold text-[#091127] flex items-center justify-between">
            <span>Maintenance registry &amp; evidence lineage</span>
            <span className="rounded bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-[#1D70F5]">
              Active
            </span>
          </div>

          {/* TABLE ROWS */}
          <div className="mt-3 divide-y divide-slate-800/80 rounded-2xl border border-slate-800/80 bg-[#070D1E]/70 p-4 sm:p-5">
            {maintenanceRows.map((row) => (
              <div
                key={row.title}
                className="flex flex-col gap-1 py-3 first:pt-1 last:pb-1 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h4 className="!m-0 text-xs font-bold text-white">
                    {row.title}
                  </h4>
                  <p className="!m-0 mt-0.5 text-[11px] text-slate-400">
                    {row.detail}
                  </p>
                </div>

                <div className="mt-1.5 sm:mt-0">
                  <span className="inline-flex items-center rounded-full border border-rose-500/30 bg-rose-950/40 px-2.5 py-0.5 text-[10px] font-medium text-rose-300">
                    {row.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* WHY PHASE 7 EXISTS AT ALL CARD */}
          <div className="mt-5 rounded-2xl border border-slate-800/90 bg-[#070D1E] p-4 sm:p-5 text-left shadow-sm">
            <h4 className="!font-[family-name:var(--font-jakarta)] !m-0 text-xs sm:text-sm font-bold text-white">
              Why phase 7 exists at all
            </h4>
            <p className="!m-0 mt-2 text-xs leading-relaxed text-slate-300">
              Six phases produce a reviewed posture. The seventh exists because that posture has a shelf-life: namely, a backing &mdash;{" "}
              <strong className="font-semibold text-white">
                a source changes, and the only thing that surfaces it is someone having written down what would trigger a re-review.
              </strong>{" "}
              Without phase 7 the guide produces a conclusion that is correct on the day it is reached and silently regresses from then on, with no mechanism that could ever say so.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
