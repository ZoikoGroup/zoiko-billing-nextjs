import React from 'react';

interface GridLinkItem {
  title: string;
  category: string;
  href?: string;
}

const linkItems: GridLinkItem[] = [
  { title: 'Platform Overview', category: 'Platform', href: '#platform-overview' },
  { title: 'Customer Records', category: 'Platform', href: '#customer-records' },
  { title: 'Automation & Workflows', category: 'Platform', href: '#automation' },
  { title: 'Roles & Approvals', category: 'Platform', href: '#roles' },
  { title: 'Invoices & Credit Notes', category: 'Billing operations', href: '#invoices' },
  { title: 'Charges & Adjustments', category: 'Billing operations', href: '#charges' },
  { title: 'Billing Schedules', category: 'Billing operations', href: '#schedules' },
  { title: 'Documents & Delivery', category: 'Billing operations', href: '#documents' },
  { title: 'Accounts Receivable', category: 'Revenue control', href: '#accounts-receivable' },
  { title: 'Payments & Reconciliation', category: 'Revenue control', href: '#payments' },
  { title: 'Outstanding Balances', category: 'Revenue control', href: '#outstanding' },
  { title: 'Reporting & Analytics', category: 'Revenue control', href: '#reporting' },
];

export default function DarkBannerSection() {
  return (
    <section className="flex w-full items-center justify-center bg-slate-950 px-6 py-16 text-white sm:px-10 lg:px-16">
      <div className="flex w-full max-w-6xl flex-col items-center gap-10 rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center shadow-2xl sm:p-12 md:p-16">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-medium leading-tight tracking-tight text-white font-sans sm:text-4xl lg:text-5xl">
            Keep the billing record connected from customer to payment.
          </h2>
          <p className="mx-auto max-w-2xl text-base font-normal leading-relaxed text-slate-400 sm:text-lg">
            Twelve destinations across three groups. Every card links to its own capability page.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 pt-4 text-left sm:grid-cols-2 lg:grid-cols-4">
          {linkItems.map((item) => (
            <a
              key={item.title}
              href={item.href || '#'}
              className="group flex flex-col justify-between gap-3 rounded-2xl border border-slate-700/60 bg-slate-800/60 p-5 transition-all duration-200 hover:border-cyan-500/50 hover:bg-slate-800"
            >
              <div className="space-y-1">
                <span className="block text-[10px] font-medium uppercase tracking-wider text-cyan-400 font-mono">
                  {item.category}
                </span>
                <h3 className="text-base font-semibold text-white transition-colors group-hover:text-cyan-300 font-sans">
                  {item.title}
                </h3>
              </div>

              <div className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-wide text-cyan-400 font-mono">
                <span>Explore</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
