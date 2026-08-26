import Image from "next/image";

interface OutcomeMobileRow {
  useCase: string;
  outcomeFraming: string;
  requiredEvidence: string;
}

const mobileRows: OutcomeMobileRow[] = [
  {
    useCase: "Connect a billing source",
    outcomeFraming:
      "Create or synchronize billing inputs from an approved upstream system.",
    requiredEvidence:
      "System identity, record mapping and ownership boundaries.",
  },
  {
    useCase: "Generate downstream finance workflows",
    outcomeFraming:
      "Move approved outcomes into accounting, reporting or operational systems without obscuring source identity.",
    requiredEvidence:
      "Issued record state, document identity and immutable history links.",
  },
  {
    useCase: "Automate exception-aware operations",
    outcomeFraming:
      "Route defined exceptions for review rather than silently overwriting records.",
    requiredEvidence: "Event → exception mapping and review queue state.",
  },
  {
    useCase: "Reconcile payments to billing records",
    outcomeFraming:
      "Connect payment evidence and allocation outcomes while maintaining invoice linkage.",
    requiredEvidence:
      "Payment evidence, allocation state and outstanding balance.",
  },
  {
    useCase: "Build customer or partner experiences",
    outcomeFraming:
      "Use authorized billing data in a product experience with clear boundaries.",
    requiredEvidence:
      "Your app → billing context, permission and status labels.",
  },
  {
    useCase: "Create governed reporting pipelines",
    outcomeFraming:
      "Export or query defined billing data for approved reporting purposes.",
    requiredEvidence:
      "API or export provenance, dimensions and purpose.",
  },
];

export default function IntegrationOutcomesSection() {
  return (
    <section className="w-full bg-slate-50/50 py-12 lg:py-24 border-t border-slate-100" id="outcomes">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          WHAT YOU CAN BUILD
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl font-extrabold leading-tight text-slate-900 sm:text-3xl lg:text-4xl max-w-3xl">
          Six integration outcomes, each preserving record identity.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-xl text-xs font-normal leading-relaxed text-slate-600 sm:text-base">
          Every pattern keeps the source record inspectable rather than flattening it into a destination system.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-12 w-full max-w-[1240px] overflow-hidden rounded-3xl shadow-xl">
          <Image
            src="/images/developers/dao2.png"
            alt="Six integration outcomes, each preserving record identity"
            width={1240}
            height={500}
            unoptimized
            priority
            className="h-auto w-full rounded-3xl object-cover"
          />
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787568070382.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          
          {/* Sub-header inside card */}
          <div className="p-4 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
            Use case, outcome framing and the evidence the interface must show.
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[580px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3 px-4 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/3">
                    USE CASE
                  </th>
                  <th scope="col" className="py-3 px-4 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/3">
                    OUTCOME FRAMING
                  </th>
                  <th scope="col" className="py-3 px-4 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/3">
                    REQUIRED EVIDENCE
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {mobileRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-3.5 px-4 text-xs font-bold text-slate-900 align-top">
                      {row.useCase}
                    </td>
                    <td className="py-3.5 px-4 text-xs font-normal text-slate-600 leading-relaxed align-top">
                      {row.outcomeFraming}
                    </td>
                    <td className="py-3.5 px-4 text-xs font-normal text-slate-600 leading-relaxed align-top">
                      {row.requiredEvidence}
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
