'use client';

import Image from 'next/image';
import Link from 'next/link';

interface LinkItem {
  label: string;
  href?: string;
}

interface CapabilityBlock {
  number: string;
  category: string;
  title: string;
  description: string;
  links: LinkItem[];
  imageUrl: string;
  imageAlt: string;
  bgGradient: string;
  reverseLayout?: boolean;
}

const capabilityBlocks: CapabilityBlock[] = [
  {
    number: '05',
    category: 'Customer and operational control',
    title: 'The foundation that billing operations sit on.',
    description:
      'Central profiles, controlled workflow routing and explicit authority over sensitive actions. Every automated step exposes its owner, trigger, status and exception path.',
    links: [
      { label: 'Customer Records', href: '/customer-records' },
      { label: 'Automation & Workflows', href: '/automation' },
      { label: 'Roles & Approvals', href: '/roles-and-approvals' },
    ],
    imageUrl: '/images/platform-overview/div (3).png',
    imageAlt: 'Customer and operational control dashboard',
    bgGradient: 'bg-slate-100',
    reverseLayout: false,
  },
  {
    number: '06',
    category: 'Billing operations',
    title: 'Document and charge control, with delivery you can evidence.',
    description:
      'Create invoices and credit notes, control charges and corrections, manage repeat timing, and keep a record of how each document was generated, sent and received.',
    links: [
      { label: 'Invoices & Credit Notes', href: '/invoices' },
      { label: 'Charges & Adjustments', href: '/charges-and-adjustments' },
      { label: 'Billing Schedules', href: '/billing-schedules' },
      { label: 'Documents & Delivery', href: '/documents-and-delivery' },
    ],
    imageUrl: '/images/platform-overview/div (6).png',
    imageAlt: 'Billing operations and delivery management',
    bgGradient: 'bg-stone-100',
    reverseLayout: true,
  },
  {
    number: '07',
    category: 'Revenue control',
    title: 'What happens after the invoice leaves.',
    description:
      'Receivables queues and prioritisation, recorded payment allocation, ageing on outstanding balances, and reporting that always states its source, period, currency and entity.',
    links: [
      { label: 'Accounts Receivable', href: '/accounts-receivable' },
      { label: 'Payments & Reconciliation', href: '/payments-and-reconcilliation' },
      { label: 'Outstanding Balances', href: '/outstanding-balances' },
      { label: 'Reporting & Analytics', href: '/reporting-and-analytics' },
    ],
    imageUrl: '/images/platform-overview/div (7).png',
    imageAlt: 'Revenue control and analytics preview',
    bgGradient: 'bg-cyan-50/70',
    reverseLayout: false,
  },
];

export default function CapabilityBlocksSection() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-16 lg:space-y-24">
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-7">
            <div className="inline-flex items-center gap-2.5">
              <span className="h-0.5 w-5 shrink-0 rounded-xs bg-gradient-to-r from-cyan-500 to-sky-500" />
              <span className="text-xs font-medium uppercase tracking-wider text-sky-600 font-mono">
                Capabilities
              </span>
            </div>
            <h2 className="text-3xl font-medium leading-tight text-sky-950 font-sans sm:text-4xl lg:text-5xl">
              Three groups of capability, one record underneath.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base font-normal leading-relaxed text-slate-600 sm:text-lg">
              Foundation, document control and post-issue visibility. Each links to its dedicated page.
            </p>
          </div>
        </div>

        <div className="space-y-16 lg:space-y-20">
          {capabilityBlocks.map((block) => (
            <div key={block.number} className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-16">
              <div
                className={`flex items-center justify-center rounded-3xl p-6 sm:p-9 lg:col-span-6 ${block.bgGradient} ${
                  block.reverseLayout ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <Image
                  src={block.imageUrl}
                  alt={block.imageAlt}
                  width={484}
                  height={393}
                  className="h-auto w-full max-h-[400px] rounded-2xl border border-zinc-200 object-cover shadow-[0_22px_50px_-20px_rgba(14,33,27,0.24),0_2px_6px_0_rgba(14,33,27,0.06)]"
                />
              </div>

              <div
                className={`flex flex-col items-start justify-start space-y-6 lg:col-span-6 ${
                  block.reverseLayout ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <div className="inline-flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg border border-slate-200 bg-slate-100 text-[10px] font-semibold uppercase text-sky-600 font-mono">
                    {block.number}
                  </span>
                  <span className="text-xs font-medium uppercase tracking-wider text-sky-600 font-mono">
                    {block.category}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-medium leading-snug text-sky-950 font-sans sm:text-3xl">
                    {block.title}
                  </h3>
                  <p className="text-base font-normal leading-relaxed text-slate-600">
                    {block.description}
                  </p>
                </div>

                <div className="w-full divide-y divide-slate-100 border-y border-slate-100 pt-2">
                  {block.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href || '#'}
                      className="group flex items-center justify-between rounded-lg px-2 py-3.5 text-sky-950 transition-colors duration-150 hover:bg-slate-50 hover:text-sky-600"
                    >
                      <span className="text-sm font-normal font-sans sm:text-base">{link.label}</span>
                      <span className="font-mono text-base text-slate-400 transition-transform duration-150 group-hover:translate-x-1 group-hover:text-sky-600">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
