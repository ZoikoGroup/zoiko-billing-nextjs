interface AreaRoleCard {
  title: string;
  description: string;
}

const areaRoleCards: AreaRoleCard[] = [
  {
    title: "Customer records",
    description: "Billing identity, contacts and terms.",
  },
  {
    title: "Invoices & credit notes",
    description: "Document lifecycle, issuance and correction.",
  },
  {
    title: "Charges & adjustments",
    description: "Charges, fees, discounts and corrections.",
  },
  {
    title: "Payments & reconciliation",
    description: "Allocation, matching and exceptions.",
  },
  {
    title: "Outstanding balances",
    description: "Aging, prioritization and review.",
  },
  {
    title: "Administration",
    description: "Roles, permissions and configuration.",
  },
];

interface RoleFocusRow {
  role: string;
  focus: string;
}

const roleFocusRows: RoleFocusRow[] = [
  {
    role: "Billing operator",
    focus: "Day-to-day document, receivable and payment procedures",
  },
  {
    role: "AR specialist",
    focus: "Aging, follow-up, disputes and exception handling",
  },
  {
    role: "Administrator",
    focus: "Roles, permissions, approvals and configuration",
  },
  {
    role: "Finance reviewer",
    focus: "Balances, metric definitions, reporting and close preparation",
  },
  {
    role: "Implementer",
    focus: "Setup sequence and integration context — protocol detail in Developers",
  },
];

export default function BrowseByProductAreaRoleSection() {
  return (
    <section className="w-full bg-slate-50/60 py-12 lg:py-24 border-t border-slate-100" id="browse-product-areas">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          BROWSE BY PRODUCT AREA &amp; ROLE
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          Areas render only where documentation exists.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          An area with no current articles is not shown as an empty shelf.
        </p>

        {/* 6 Grid Cards */}
        <div className="mt-8 lg:mt-14 w-full max-w-[1240px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 text-left mb-8 lg:mb-14">
          {areaRoleCards.map((card, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-sm hover:shadow-md transition text-left"
            >
              <h3 className="text-sm sm:text-lg font-bold text-slate-900 mb-1.5 sm:mb-2">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm font-normal leading-relaxed text-slate-600">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION GRAPHIC (UNTOUCHED - hidden lg:block)                     */}
        {/* ========================================================================= */}
        <div className="hidden lg:block w-full max-w-[1240px] overflow-hidden rounded-3xl shadow-xl border border-slate-200/80 bg-slate-50">
          <img
            src="/images/documentation/d2.png"
            alt="Areas render only where documentation exists"
            className="w-full h-auto object-cover rounded-3xl block"
          />
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION ROLE TABLE CARD (MATCHING media_1787836345737.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden w-full max-w-[640px] text-left">
          
          {/* Mobile Table Card */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
            <div className="p-3 px-4 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Role-based entry points.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[480px]">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    <th scope="col" className="py-2.5 px-4 w-1/3">ROLE</th>
                    <th scope="col" className="py-2.5 px-4 w-2/3">DOCUMENTATION FOCUS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {roleFocusRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3 px-4 text-xs font-bold text-slate-900 align-top">
                        {row.role}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-normal text-slate-600 leading-relaxed align-top">
                        {row.focus}
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
