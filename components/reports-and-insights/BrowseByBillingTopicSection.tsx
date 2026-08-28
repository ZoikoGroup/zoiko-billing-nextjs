import Link from "next/link";

interface BillingTopicRow {
  topic: string;
  permittedAngles: React.ReactNode;
  productHandoff: React.ReactNode;
}

const billingTopicRows: BillingTopicRow[] = [
  {
    topic: "Invoices & credit notes",
    permittedAngles: "Cycle patterns, correction and reissue patterns, operational controls, document lifecycle — only with evidence.",
    productHandoff: <Link href="/invoices" className="text-slate-600 hover:text-blue-600 transition">Invoices</Link>,
  },
  {
    topic: "Charges & adjustments",
    permittedAngles: "Adjustment patterns, exception categories, operational governance.",
    productHandoff: <Link href="/charges-and-adjustments" className="text-slate-600 hover:text-blue-600 transition">Charges &amp; Adjustments</Link>,
  },
  {
    topic: "Billing schedules",
    permittedAngles: "Schedule and repeat-billing operational patterns where the source supports them.",
    productHandoff: <span className="text-slate-600">Billing Schedules</span>,
  },
  {
    topic: "Documents & delivery",
    permittedAngles: "Delivery outcomes, exceptions and process controls where evidence exists.",
    productHandoff: <span className="text-slate-600">Documents &amp; Delivery</span>,
  },
  {
    topic: "Accounts receivable",
    permittedAngles: (
      <>
        Aging and process patterns, dispute and reminder practices, ownership models —{" "}
        <span className="font-bold text-slate-900">no fabricated benchmark</span>.
      </>
    ),
    productHandoff: <Link href="/accounts-receivable" className="text-slate-600 hover:text-blue-600 transition">Accounts Receivable</Link>,
  },
  {
    topic: "Payments & reconciliation",
    permittedAngles: "Reconciliation practices, exception and unknown-outcome analysis, payment-operations themes.",
    productHandoff: <Link href="/payments-and-reconcilliation" className="text-slate-600 hover:text-blue-600 transition">Payments &amp; Reconciliation</Link>,
  },
  {
    topic: "Outstanding balances",
    permittedAngles: (
      <>
        Aging, prioritization and collections analysis{" "}
        <span className="font-bold text-slate-900">
          with a defined denominator and period
        </span>
        .
      </>
    ),
    productHandoff: <Link href="/outstanding-balances" className="text-[#1D70F5] font-semibold hover:underline">Outstanding Balances</Link>,
  },
  {
    topic: "Reporting & analytics",
    permittedAngles: "Measurement and metric design and interpretation; product feature truth remains with Product.",
    productHandoff: <Link href="/reporting-and-analytics" className="text-slate-600 hover:text-blue-600 transition">Reporting &amp; Analytics</Link>,
  },
  {
    topic: "Integrations",
    permittedAngles: "Operational integration patterns and research; technical contracts stay in Developers.",
    productHandoff: <Link href="/integrations-directory" className="text-[#1D70F5] font-semibold hover:underline">Integrations</Link>,
  },
  {
    topic: "Implementation & governance",
    permittedAngles: "Process maturity, controls, rollout and readiness analysis when supported.",
    productHandoff: <span className="text-slate-600">Guides · Documentation</span>,
  },
];

export default function BrowseByBillingTopicSection() {
  return (
    <section className="w-full bg-slate-50/60 py-16 lg:py-24 border-t border-slate-100" id="billing-topics">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          BROWSE BY BILLING TOPIC
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Ten topics, each with permitted analytical angles.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          A topic defines what may be analyzed with evidence, not what may be asserted
          without it.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[680px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/5">
                    TOPIC
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-3/5">
                    PERMITTED ANALYTICAL ANGLES
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/5">
                    PRODUCT HANDOFF
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {billingTopicRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.topic}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.permittedAngles}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal align-top">
                      {row.productHandoff}
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
