import Link from 'next/link';

interface NavigationCard {
  title: string;
  description: string;
  isCurrent?: boolean;
  href?: string;
}

interface PlatformGroup {
  category: string;
  cards: NavigationCard[];
}

const platformData: PlatformGroup[] = [
  {
    category: 'Platform',
    cards: [
      {
        title: 'Platform Overview',
        description: 'Complete billing control',
        isCurrent: true,
      },
      {
        title: 'Customer Records',
        description: 'Central billing profiles',
        href: '/customer-records',
      },
      {
        title: 'Automation & Workflows',
        description: 'Reduce repetitive work',
        href: '/automation',
      },
      {
        title: 'Roles & Approvals',
        description: 'Govern sensitive actions',
        href: '/roles-and-approvals',
      },
    ],
  },
  {
    category: 'Billing Operations',
    cards: [
      {
        title: 'Invoices & Credit Notes',
        description: 'Create and manage billing',
        href: '/invoices',
      },
      {
        title: 'Charges & Adjustments',
        description: 'Control line items and fees',
        href: '/charges-and-adjustments',
      },
      {
        title: 'Billing Schedules',
        description: 'Manage billing timing',
        href: '/billing-schedules',
      },
      {
        title: 'Documents & Delivery',
        description: 'Issue professional records',
        href: '/documents-and-delivery',
      },
    ],
  },
  {
    category: 'Revenue Control',
    cards: [
      {
        title: 'Accounts Receivable',
        description: 'Track what is owed',
        href: '/accounts-receivable',
      },
      {
        title: 'Payments & Reconciliation',
        description: 'Record and reconcile payments',
        href: '/payments-and-reconcilliation',
      },
      {
        title: 'Outstanding Balances',
        description: 'Prioritise collection activity',
        href: '/outstanding-balances',
      },
      {
        title: 'Reporting & Analytics',
        description: 'Monitor billing performance',
        href: '/reporting-and-analytics',
      },
    ],
  },
];

export default function PlatformDestinationsSection() {
  return (
    <section className="w-full bg-white px-4 py-12 text-slate-800 sm:px-6 lg:px-12 md:py-20">
      <div className="mx-auto max-w-7xl space-y-12 md:space-y-16">
        <div className="flex flex-col gap-6 pb-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2.5">
              <span className="h-0.5 w-5 shrink-0 rounded-xs bg-gradient-to-r from-cyan-500 to-sky-500" />
              <span className="text-xs font-medium uppercase tracking-wider text-sky-600 font-mono">
                The complete platform
              </span>
            </div>
            <h2 className="text-3xl font-medium leading-tight text-sky-950 sm:text-4xl lg:text-5xl font-sans">
              One connected platform for billing operations and revenue control.
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-slate-600">
            Twelve destinations across three groups. Every card links to its own capability page.
          </p>
        </div>

        <div className="space-y-12">
          {platformData.map((group) => (
            <div key={group.category} className="space-y-4">
              <div className="border-b border-zinc-200 pb-2">
                <h3 className="text-xs font-medium uppercase tracking-wider text-sky-700 font-mono">
                  {group.category}
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {group.cards.map((card) => (
                  <div
                    key={card.title}
                    className={`group flex min-h-[128px] flex-col justify-between rounded-2xl border p-5 transition-all duration-200 ${
                      card.isCurrent
                        ? 'border-sky-500 bg-slate-50 shadow-xs'
                        : 'border-zinc-200 bg-white hover:border-slate-300 hover:shadow-md'
                    }`}
                  >
                    <div className="space-y-1">
                      <h4 className="text-base font-semibold leading-snug text-sky-950 font-sans">
                        {card.title}
                      </h4>
                      <p className="text-sm font-normal leading-normal text-slate-500">
                        {card.description}
                      </p>
                    </div>

                    <div className="mt-auto pt-4">
                      {card.isCurrent ? (
                        <span className="inline-block rounded-full border border-sky-200 bg-white px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-sky-600 font-mono">
                          You are here
                        </span>
                      ) : (
                        <Link
                          href={card.href || '#'}
                          className="inline-flex items-center gap-1.5 text-xs font-normal uppercase tracking-wide text-sky-600 transition-colors hover:text-sky-700 focus:outline-none font-mono"
                        >
                          <span>Open</span>
                          <span className="transition-transform duration-200 group-hover:translate-x-1">
                            →
                          </span>
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
