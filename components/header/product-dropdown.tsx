'use client';

import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  Boxes,
  CreditCard,
  DollarSign,
  FileCheck2,
  FileText,
  Grid,
  ShieldCheck,
  Tag,
  User,
  Workflow,
  type LucideIcon,
} from 'lucide-react';

type MenuItem = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

const PLATFORM_ITEMS: MenuItem[] = [
  { title: 'Platform Overview', description: 'Complete billing control', href: '/platform', icon: Grid },
  { title: 'Customer Records', description: 'Central billing profiles', href: '/platform/customers', icon: User },
  { title: 'Automation & Workflows', description: 'Reduce repetitive work', href: '/platform/automation', icon: Workflow },
  { title: 'Roles & Approvals', description: 'Govern sensitive actions', href: '/platform/roles', icon: ShieldCheck },
];

const BILLING_OPERATIONS_ITEMS: MenuItem[] = [
  { title: 'Invoices & Credit Notes', description: 'Create and manage billing', href: '/platform/invoices', icon: FileText },
  { title: 'Charges & Adjustments', description: 'Control line items, fees', href: '/platform/charges', icon: Tag },
  { title: 'Billing Schedules', description: 'Manage billing timing', href: '/platform/schedules', icon: Tag },
  { title: 'Documents & Delivery', description: 'Issue professional records', href: '/platform/documents', icon: FileCheck2 },
];

const REVENUE_CONTROL_ITEMS: MenuItem[] = [
  { title: 'Accounts Receivable', description: 'Track what is owed', href: '/platform/receivable', icon: DollarSign },
  { title: 'Payments & Reconciliation', description: 'Record and reconcile payments', href: '/platform/payments', icon: CreditCard },
  { title: 'Outstanding Balances', description: 'Prioritise collection activity', href: '/platform/balances', icon: BarChart3 },
  { title: 'Reporting & Analytics', description: 'Monitor billing performance', href: '/platform/analytics', icon: BarChart3 },
];

export default function ProductDropdown() {
  return (
    <div className="mx-auto w-full max-w-[1080px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_22px_70px_rgba(15,23,42,0.16)] dark:border-gray-700 dark:bg-gray-900 dark:shadow-[0_22px_70px_rgba(0,0,0,0.5)]">
      <div className="px-5 pt-5 sm:px-6">
        <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
          Product
        </span>
      </div>

      <div className="grid grid-cols-1 gap-5 px-5 pb-5 pt-4 sm:px-6 md:grid-cols-3 md:gap-6">
        <MenuColumn title="Platform" items={PLATFORM_ITEMS} />
        <MenuColumn title="Billing Operations" items={BILLING_OPERATIONS_ITEMS} />
        <MenuColumn title="Revenue Control" items={REVENUE_CONTROL_ITEMS} />
      </div>

      <div className="mx-5 mb-5 flex flex-col gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:mx-6 sm:flex-row sm:items-center sm:gap-5 dark:border-gray-800 dark:bg-gray-800/60">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg">
          <Boxes className="h-8 w-8 text-blue-600 dark:text-blue-400" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-[15px] font-semibold text-slate-900 dark:text-white">
            Zoiko Billing + Zoiko One
          </h3>
          <p className="mt-1 text-sm leading-snug text-gray-600 dark:text-gray-400">
            Use Zoiko Billing independently or as part of the integrated Zoiko One suite.
          </p>
        </div>
        <Link
          href="/deployment-options"
          className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          Compare deployment options
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="border-t border-slate-100 px-5 py-3 sm:px-6 dark:border-gray-800">
        <Link
          href="/platform"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          Explore the complete platform
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}

function MenuColumn({
  title,
  items,
}: {
  title: string;
  items: MenuItem[];
}) {
  return (
    <section className="flex flex-col gap-3">
      <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{title}</h3>
      <div className="flex flex-col gap-3.5">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="group flex items-start gap-3 rounded-lg p-1 transition-colors hover:bg-slate-50 dark:hover:bg-gray-800"
            >
              <Icon className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" />
              <div className="min-w-0">
                <p className="text-[15px] font-medium leading-snug text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                  {item.title}
                </p>
                <p className="mt-0.5 text-[13px] leading-snug text-slate-500 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
