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
  ChevronRight,
  Users,
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
  { label: 'Supported Countries', href: '/global-billing' },
  { label: 'Tax & Compliance', href: '/global-billing' },
  { label: 'Multi-Currency Pricing', href: '/global-billing' },
  { label: 'Local Payment Methods', href: '/global-billing' },
  { label: 'Global Capabilities Overview', href: '/global-billing' },
];

const RELATED_RESOURCES = [
  { label: 'Global Billing Guide', href: '/resources/global-billing-guide', icon: FileText },
  { label: 'Multi-Entity Guide', href: '/resources/multi-entity-guide', icon: Building2 },
  { label: 'Tax Compliance Guide', href: '/resources/tax-compliance-guide', icon: ShieldCheck },
  { label: 'Customer Stories', href: '/resources/customer-stories', icon: Users },
];

export default function GlobalBillingDropdown() {
  return (
    <div className="mx-auto flex max-h-[calc(100vh-132px)] w-full max-w-7xl flex-col overflow-y-auto no-scrollbar rounded-2xl border border-slate-100 bg-white p-8 shadow-2xl dark:border-gray-800 dark:bg-gray-900">
      <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-6 lg:items-start">

        {/* Column 1: Overview & Quick Links */}
        <div className="flex flex-col justify-between border-b border-slate-100 pb-6 pr-4 lg:border-b-0 lg:border-r lg:pb-0 dark:border-gray-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Overview
            </span>
            <h3 className="mt-3 text-xl font-bold leading-snug text-slate-900 dark:text-white">
              Bill globally.<br />
              Operate locally.
            </h3>
            <p className="mt-7 text-sm leading-relaxed text-slate-600 dark:text-gray-400">
              Zoiko Billing helps you manage complex global billing with confidence—from multi-currency transactions to localised invoices and tax compliance.
            </p>
            <img src="/images/dropdown/image (17).png" alt="Overview graphic" className="mt-4" />
          </div>

          <div className="mt-8">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Quick Links
            </span>
            <ul className="mt-3 divide-y divide-slate-100 dark:divide-gray-800">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center justify-between py-2.5 text-sm font-normal text-slate-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-blue-600 dark:text-gray-500" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Column 2: Multi-Currency */}
        <MenuColumn title="Multi-Currency" items={MULTI_CURRENCY_ITEMS} />

        {/* Column 3: Multi-Entity */}
        <MenuColumn title="Multi-Entity" items={MULTI_ENTITY_ITEMS} />

        {/* Column 4: Localisation */}
        <MenuColumn title="Localisation" items={LOCALISATION_ITEMS} />

        {/* Column 5: Tax & Compliance */}
        <MenuColumn title="Tax & Compliance" items={TAX_COMPLIANCE_ITEMS} />

        {/* Column 6: Highlight Card / Call to Action */}
        <div className="flex flex-col justify-between rounded-xl bg-slate-50 p-6 dark:bg-gray-800/60">
          <div>
            <h3 className="mt-5 text-lg font-bold leading-snug text-slate-900 dark:text-white">
              Global scale.<br />
              Local precision.
            </h3>
            <p className="mt-10 text-sm leading-relaxed text-slate-600 dark:text-gray-400">
              Zoiko Billing gives you the flexibility to grow anywhere while staying compliant everywhere.
            </p>
            <Link
              href="/global-billing/capabilities"
              className="mt-6 inline-flex items-center justify-between gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
            >
              <span>Explore Global Capabilities</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <img className="mt-10" src="/images/dropdown/image (31).png" alt="Capabilities graphic" />
          </div>
        </div>

      </div>

      {/* Bottom Banner Section */}
      <div className="mt-8 grid grid-cols-1 gap-4 rounded-xl border border-slate-100 bg-[#F7F9FC] p-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] dark:border-gray-800 dark:bg-gray-800/50">

        {/* Not sure where to start? */}
        <div className="flex gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm dark:bg-gray-900">
            <Globe2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-900 dark:text-white">
              Not sure where to start?
            </p>
            <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-gray-400">
              Use our Global Billing Readiness Checklist to assess your requirements and plan your rollout.
            </p>
            <Link
              href="/global-billing/readiness-checklist"
              className="mt-2 inline-block text-sm font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400"
            >
              Download Checklist
            </Link>
          </div>
        </div>

        {/* Related Resources */}
        <div className="border-t border-slate-200 pt-4 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0 dark:border-gray-700">
          <p className="text-sm font-bold text-slate-900 dark:text-white">Related Resources</p>
          <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-4">
            {RELATED_RESOURCES.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-2 text-sm text-slate-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                >
                  <Icon className="h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" />
                  <span>{item.label}</span>
                  <ChevronRight className="h-3.5 w-3.5 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5" />
                </Link>
              );
            })}
          </div>
        </div>
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
    <div className="flex flex-col border-b border-slate-100 pb-6 pr-2 lg:border-b-0 lg:border-r lg:pb-0 dark:border-gray-800">
      <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
        {title}
      </span>
      <div className="mt-4 flex flex-col divide-y divide-slate-100 dark:divide-gray-800">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="group py-4 first:pt-0 last:pb-0"
            >
              <div className="flex items-center gap-2">
                <Icon className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400" />
                <p className="text-sm font-bold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                  {item.title}
                </p>
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-gray-400">
                {item.description}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}