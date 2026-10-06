import Image from "next/image";

interface RouteRow {
  domain: string;
  destination: string;
  badge: string;
}

const routes: RouteRow[] = [
  {
    domain: "Scope & operating context",
    destination: "Global Billing Guide · Multi-Entity Guide",
    badge: "Active",
  },
  {
    domain: "Availability & market readiness",
    destination: "Supported Countries",
    badge: "● 5 prompts",
  },
  {
    domain: "Currency, FX & pricing",
    destination: "Currency Control · FX Management · Multi-Currency Pricing",
    badge: "● 4 prompts",
  },
  {
    domain: "Payments",
    destination: "Local Payment Methods · Local Payment",
    badge: "● 5 prompts",
  },
  {
    domain: "Tax & compliance",
    destination: "Indirect Tax · Local Compliance · Tax Configuration",
    badge: "● 5 prompts",
  },
  {
    domain: "Multi-entity & system readiness",
    destination: "Inter-Entity Billing",
    badge: "● 4 prompts",
  },
  {
    domain: "Evidence, risks & approvals",
    destination: "Tax and Compliance · Internal governance",
    badge: "● 5 prompts",
  },
];

export default function EveryDomainRoutesSection() {
  return (
    <section className="w-full bg-[#091127] py-16 font-[family-name:var(--font-inter)] text-white sm:py-20 md:py-24">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20">
        {/* EYEBROW */}
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-0.5 w-6 bg-[#1D70F5]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7890b2] sm:text-xs">
            Specialist Destinations
          </span>
          <span className="h-0.5 w-6 bg-[#1D70F5]" />
        </div>

        {/* HEADING */}
        <h2 className="!font-[family-name:var(--font-jakarta)] !m-0 max-w-[850px] text-center !text-[30px] font-extrabold !leading-[1.18] !tracking-[-0.035em] text-white sm:!text-[38px] md:!text-[44px]">
          Every domain routes somewhere.
        </h2>

        {/* SUBTITLE */}
        <p className="!m-0 mt-3.5 max-w-[680px] text-center text-xs leading-relaxed text-slate-400 sm:text-sm md:text-base">
          The checklist prompts a question; the destination owns the answer. All
          routes below are pending in the governed registry.
        </p>

        {/* DESKTOP 3D ROUTING & GOVERNED REGISTRY ILLUSTRATION (Unchanged for lg+) */}
        <div className="mt-10 hidden w-full max-w-[1240px] overflow-hidden rounded-[24px] border border-slate-800/80 bg-[#070D1E] shadow-[0_24px_60px_rgba(0,0,0,0.5)] sm:mt-12 sm:rounded-[32px] md:mt-14 lg:block">
          <Image
            src="/images/readiness-checklist/rc3.png"
            alt="Every domain routes somewhere governed registry routing illustration"
            width={1240}
            height={680}
            priority
            className="h-auto w-full object-cover"
            sizes="(max-width: 1280px) 100vw, 1240px"
          />
        </div>

        {/* MOBILE SPECIALIST DESTINATIONS LIST (block lg:hidden) */}
        <div className="mt-8 block w-full max-w-[1240px] lg:hidden">
          {/* TOP WHITE BAR */}
          <div className="flex w-full items-center justify-between rounded-xl bg-white p-3.5 text-xs font-bold text-[#091127] shadow-sm">
            <span>Registry routing &amp; evidence lineages</span>
            <span className="rounded bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-[#1D70F5]">
              Active
            </span>
          </div>

          {/* TABLE ROWS */}
          <div className="mt-3 divide-y divide-slate-800/80 rounded-2xl border border-slate-800/80 bg-[#070D1E]/70 p-4 sm:p-5">
            {routes.map((row) => (
              <div
                key={row.domain}
                className="flex flex-col gap-1 py-3 first:pt-1 last:pb-1 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h4 className="!m-0 text-xs font-bold text-white">
                    {row.domain}
                  </h4>
                  <p className="!m-0 mt-0.5 text-[11px] text-slate-400">
                    {row.destination}
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

          {/* WHY A CHECKLIST IS THE RISKIEST FORMAT CARD */}
          <div className="mt-5 rounded-2xl border border-slate-800/90 bg-[#070D1E] p-4 text-left shadow-sm sm:p-5">
            <h4 className="!font-[family-name:var(--font-jakarta)] !m-0 text-xs font-bold text-white sm:text-sm">
              Why a checklist is the riskiest format in this sequence
            </h4>
            <p className="!m-0 mt-2 text-xs leading-relaxed text-slate-300">
              Every other page in the Global Billing set is read once and reasoned about.{" "}
              <strong className="font-semibold text-white">
                A checklist is filled in, saved, exported and circulated as a record of a decision
              </strong>{" "}
              &mdash; and the further it travels the less of its framing survives. That is why the statuses are strict rather than lax, the counts stay separate, the language is constrained to contract, and the disclaimers are required on the first and last page of any export.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
