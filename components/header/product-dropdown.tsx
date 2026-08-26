'use client';

import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  Calendar,
  CreditCard,
  DollarSign,
  FileCheck2,
  FileText,
  LayoutGrid,
  LineChart,
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
  { title: 'Platform Overview', description: 'Complete billing control', href: '/platform-overview', icon: LayoutGrid },
  { title: 'Customer Records', description: 'Central billing profiles', href: '/customer-records', icon: User },
  { title: 'Automation & Workflows', description: 'Reduce repetitive work', href: '/automation', icon: Workflow },
  { title: 'Roles & Approvals', description: 'Govern sensitive actions', href: '/roles-and-approvals', icon: ShieldCheck },
];

const BILLING_OPERATIONS_ITEMS: MenuItem[] = [
  { title: 'Invoices & Credit Notes', description: 'Create and manage billing', href: '/invoices', icon: FileText },
  { title: 'Charges & Adjustments', description: 'Control line items, fees', href: '#', icon: Tag },
  { title: 'Billing Schedules', description: 'Manage billing timing', href: '#', icon: Calendar },
  { title: 'Documents & Delivery', description: 'Issue professional records', href:'/documents-and-delivery', icon: FileCheck2 },
];

const REVENUE_CONTROL_ITEMS: MenuItem[] = [
  { title: 'Accounts Receivable', description: 'Track what is owed', href: '/accounts-receivable', icon: DollarSign },
  { title: 'Payments & Reconciliation', description: 'Record and reconcile payments', href: '/payments-and-reconcilliation', icon: CreditCard },
  { title: 'Outstanding Balances', description: 'Prioritise collection activity', href: '/outstanding-balances', icon: BarChart3 },
  { title: 'Reporting & Analytics', description: 'Monitor billing performance', href: '/reporting-and-analytics', icon: LineChart },
];

export default function ProductDropdown() {
  return (
    <div className="mx-auto flex max-h-[calc(100vh-132px)] w-full max-w-5xl flex-col overflow-y-auto no-scrollbar rounded-2xl border border-gray-200 bg-white px-5 py-5 shadow-xl dark:border-gray-800 dark:bg-gray-900 sm:px-6 sm:py-6 lg:px-7 lg:py-7">
      {/* Eyebrow Header */}
      <div className="mb-4">
        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400">
          PRODUCT
        </span>
      </div>

      {/* Product Columns */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
        <MenuColumn title="Platform" items={PLATFORM_ITEMS} />
        <MenuColumn title="Billing Operations" items={BILLING_OPERATIONS_ITEMS} />
        <MenuColumn title="Revenue Control" items={REVENUE_CONTROL_ITEMS} />
      </div>

      {/* Suite Banner Card */}
      <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-gray-800 dark:bg-gray-800/50 sm:p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          {/* Suite Logo Badge */}
          <div className="relative h-10 w-10 shrink-0">
            <img src="/images/dropdown/Suite Mark.png" alt="Zoiko suite mark" />
          </div>

          <div className="flex-1 space-y-1">
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">
              Zoiko Billing + Zoiko One
            </h3>
            <p className="text-sm font-normal leading-relaxed text-gray-600 dark:text-gray-400">
              Use Zoiko Billing independently or as part of the integrated Zoiko One suite.
            </p>
            <div>
              <Link
                href="/zoiko-billing-plus-zoiko-one"
                className="inline-flex items-center gap-1.5 pt-1 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                style={{ color: '#2563EB' }}
              >
                <span>Compare deployment options</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Link */}
      <div className="mt-5 pt-1">
        <Link
          href="/platform-overview"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          style={{ color: '#2563EB' }}
        >
          <span>Explore the complete platform</span>
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
    <section className="flex flex-col gap-3.5">
      <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{title}</h3>
      <div className="flex flex-col gap-4">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="group flex items-start gap-3 rounded-lg transition-colors hover:opacity-80"
            >
              <Icon className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" />
              <div className="min-w-0">
                <p className="text-sm font-medium leading-snug text-slate-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                  {item.title}
                </p>
                <p className="mt-0.5 text-xs font-normal leading-snug text-gray-500 dark:text-gray-400">
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
