interface MatchingControlRow {
  control: string;
  requiredBehavior: React.ReactNode;
}

const matchingControlRows: MatchingControlRow[] = [
  {
    control: "Stable external IDs",
    requiredBehavior: "The primary mapping key once a connection is established",
  },
  {
    control: "Billing customer ID",
    requiredBehavior: "A stable internal reference, preserved throughout",
  },
  {
    control: "CRM account / contact ID",
    requiredBehavior: "An opaque external reference — no meaning inferred from its format",
  },
  {
    control: "Name, email, domain",
    requiredBehavior: "Possible review signals only, never destructive merge authority",
  },
  {
    control: "Relationship type",
    requiredBehavior: "Account association, entity relationship, parent, child or reference if supported",
  },
  {
    control: "Duplicate candidate",
    requiredBehavior: "Explain why records appear similar, with side-by-side sources and dependencies",
  },
  {
    control: "Decision",
    requiredBehavior: "Keep separate, link, merge identity where governed, remap, reject or defer",
  },
  {
    control: "Merge preview",
    requiredBehavior: "Contacts, billing profiles, issued records, external IDs, relationships and downstream impact",
  },
  {
    control: "Lineage",
    requiredBehavior: "Survivor, alias, external mappings and history preserved",
  },
  {
    control: "Unlink",
    requiredBehavior: (
      <>
        Stops mapping{" "}
        <span className="font-bold text-slate-900">
          without deleting historical Billing evidence
        </span>
      </>
    ),
  },
];

export default function CustomerAccountContactMatchingSection() {
  return (
    <section className="w-full bg-slate-50/60 py-12 lg:py-24 border-t border-slate-100" id="customer-matching">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          CUSTOMER, ACCOUNT, CONTACT &amp; RELATIONSHIP MATCHING
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          Weak signals suggest review. They never authorize a merge.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Name, email, domain, phone, address, fuzzy similarity, AI similarity and sales-owner
          overlap are review signals only — never destructive merge authority.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-14 w-full max-w-[1240px] overflow-hidden rounded-3xl shadow-xl border border-slate-200/80 bg-slate-50">
          <img
            src="/images/crm-platforms/crm3.png"
            alt="Weak signals suggest review. They never authorize a merge"
            className="w-full h-auto object-cover rounded-3xl block"
          />
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787711250277.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Mobile Table Card */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
            <div className="p-3 px-4 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Matching controls and required behavior.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[460px]">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200/80">
                    <th scope="col" className="py-2.5 px-4 text-[10px] font-bold uppercase tracking-wider text-slate-500 w-2/5">
                      CONTROL
                    </th>
                    <th scope="col" className="py-2.5 px-4 text-[10px] font-bold uppercase tracking-wider text-slate-500 w-3/5">
                      REQUIRED BEHAVIOR
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {matchingControlRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3 px-4 text-xs font-bold text-slate-900 align-top">
                        {row.control}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-normal text-slate-600 leading-relaxed align-top">
                        {row.requiredBehavior}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
