'use client';

import Link from 'next/link';
import {
  ArrowLeftRight,
  ArrowRight,
  Building2,
  CreditCard,
  DollarSign,
  FileText,
  Globe2,
  Landmark,
  RefreshCw,
  Settings,
  ShieldCheck,
  Sliders,
  type LucideIcon,
} from 'lucide-react';

type MenuItem = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

const MULTI_CURRENCY_ITEMS: MenuItem[] = [
  { title: 'Multi-Currency', description: 'Price, bill and collect in multiple currencies with real-time exchange rates.', href: '/global-billing/multi-currency', icon: DollarSign },
  { title: 'FX Management', description: 'Automated FX rate updates, markups, rounding and revaluation.', href: '/global-billing/fx', icon: RefreshCw },
  { title: 'Currency Controls', description: 'Define primary, billing and settlement currencies per entity or customer.', href: '/global-billing/currency-controls', icon: Sliders },
];

const MULTI_ENTITY_ITEMS: MenuItem[] = [
  { title: 'Multi-Entity', description: 'Manage multiple legal entities, subsidiaries and business units.', href: '/global-billing/multi-entity', icon: Building2 },
  { title: 'Entity Configuration', description: 'Separate branding, tax profiles, bank accounts and documents.', href: '/global-billing/entity-config', icon: Settings },
  { title: 'Inter-Entity Billing', description: 'Bill between entities with automated intercompany workflows.', href: '/global-billing/inter-entity', icon: ArrowLeftRight },
];

const LOCALISATION_ITEMS: MenuItem[] = [
  { title: 'Localised Invoicing', description: 'Generate invoices in local languages with region-specific formats.', href: '/global-billing/localised-invoicing', icon: FileText },
  { title: 'Local Payment Methods', description: 'Offer preferred payment methods for each region to improve conversion.', href: '/global-billing/local-payments', icon: CreditCard },
  { title: 'Local Compliance', description: 'Adhere to local invoicing rules, legal requirements and business practices.', href: '/global-billing/local-compliance', icon: ShieldCheck },
];

const TAX_COMPLIANCE_ITEMS: MenuItem[] = [
  { title: 'Tax Configuration', description: 'Configure tax rules, rates and exemptions by country or region.', href: '/global-billing/tax-config', icon: FileText },
  { title: 'Indirect Tax', description: 'Handle VAT, GST, sales tax and other indirect taxes with accuracy.', href: '/global-billing/indirect-tax', icon: Landmark },
  { title: 'Jurisdiction Availability', description: 'View supported countries, coverage status and compliance readiness.', href: '/global-billing/jurisdictions', icon: Globe2 },
];

const QUICK_LINKS = [
  'Supported Countries',
  'Tax & Compliance',
  'Multi-Currency Pricing',
  'Local Payment Methods',
  'Global Capabilities Overview',
];

export default function GlobalBillingDropdown() {
  return (
    <div className="mx-auto w-full max-w-[1120px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_22px_70px_rgba(15,23,42,0.16)] dark:border-gray-700 dark:bg-gray-900 dark:shadow-[0_22px_70px_rgba(0,0,0,0.5)]">
      <div className="px-5 pt-5 sm:px-6">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
          Overview
        </span>
        <h2 className="mt-2 text-[13px] font-semibold leading-tight text-slate-900 dark:text-white">
          Bill globally. Operate locally.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-5 px-5 pb-5 pt-4 sm:px-6 md:grid-cols-4 md:divide-x md:divide-slate-100 dark:md:divide-gray-800">
        <MenuColumn title="Multi-Currency" items={MULTI_CURRENCY_ITEMS} />
        <MenuColumn title="Multi-Entity" items={MULTI_ENTITY_ITEMS} className="md:pl-6" />
        <MenuColumn title="Localisation" items={LOCALISATION_ITEMS} className="md:pl-6" />
        <MenuColumn title="Tax & Compliance" items={TAX_COMPLIANCE_ITEMS} className="md:pl-6" />
      </div>

      <div className="mx-5 mb-5 flex flex-col gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:mx-6 sm:flex-row sm:items-center sm:justify-between dark:border-gray-800 dark:bg-gray-800/60">
        <div>
          <h3 className="text-[15px] font-semibold text-slate-900 dark:text-white">
            Global scale. Local precision.
          </h3>
          <p className="mt-1 max-w-md text-sm leading-snug text-gray-600 dark:text-gray-400">
            Zoiko Billing gives you the flexibility to grow anywhere while staying compliant everywhere.
          </p>
        </div>
        <Link
          href="/global-billing/capabilities"
          className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
        >
          Explore Global Capabilities
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="flex flex-wrap items-center gap-2.5 border-t border-slate-100 px-5 py-3 sm:px-6 dark:border-gray-800">
        <span className="mr-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-gray-500">
          Quick links
        </span>
        {QUICK_LINKS.map((link) => (
          <Link
            key={link}
            href="/global-billing"
            className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-gray-600 dark:hover:bg-gray-700"
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
}

function MenuColumn({
  title,
  items,
  className = '',
}: {
  title: string;
  items: MenuItem[];
  className?: string;
}) {
  return (
    <section className={`flex flex-col gap-3 ${className}`}>
      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">{title}</span>
      <div className="flex flex-col gap-2.5">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="group flex items-start gap-2.5 rounded-lg p-1 transition-colors hover:bg-slate-50 dark:hover:bg-gray-800"
            >
              <Icon className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" />
              <div className="min-w-0">
                <p className="text-[13px] font-semibold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                  {item.title}
                </p>
                <p className="mt-0.5 text-[12px] leading-snug text-slate-500 dark:text-gray-400">
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
