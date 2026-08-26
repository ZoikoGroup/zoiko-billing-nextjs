'use client';

import Link from 'next/link';
import {
  ArrowRight,
  Award,
  Boxes,
  Briefcase,
  Building,
  Building2,
  Cloud,
  Code2,
  Eye,
  FileText,
  Network,
  ShieldCheck,
  UserCircle,
  Users,
  Zap,
  BarChart3,
  LineChart,
  type LucideIcon,
} from 'lucide-react';

type MenuItem = {
  title: string;
  href: string;
  icon: LucideIcon;
};

const BUSINESS_NEED_ITEMS: MenuItem[] = [
  { title: 'Create invoices faster', href: '#', icon: Zap },
  { title: 'Improve payment visibility', href: '#', icon: Eye },
  { title: 'Reduce outstanding balances', href: '#', icon: BarChart3 },
  { title: 'Standardise billing control', href: '#', icon: ShieldCheck },
  { title: 'Consolidate multiple entities', href: '/multi-entity-billing', icon: Building2 },
  { title: 'Strengthen auditability', href: '#', icon: FileText },
];

const TEAM_ITEMS: MenuItem[] = [
  { title: 'Finance & AR', href: '/finance-and-account-receivable', icon: UserCircle },
  { title: 'Revenue Operations', href: '/revenue-operations', icon: LineChart },
  { title: 'Business Operations', href: '/small-businesses', icon: Users },
  { title: 'Founders & Owners', href: '#', icon: Award },
  { title: 'Developers & IT', href: '#', icon: Code2 },
];

const ORGANISATION_ITEMS: MenuItem[] = [
  { title: 'Small Businesses', href: '/small-businesses', icon: Building },
  { title: 'Professional Services', href: '/professional-services', icon: Briefcase },
  { title: 'Agencies', href: '/agencies', icon: Users },
  { title: 'SaaS & Digital Services', href: '/saas-and-digital-services', icon: Cloud },
  { title: 'Multi-Entity Groups', href: '/multi-entity-billing', icon: Network },
  { title: 'Enterprise Organisations', href: '/enterprise-organizations', icon: Building2 },
];

export default function SolutionsDropdown() {
  return (
    <div className="mx-auto flex max-h-[calc(100vh-132px)] w-full max-w-[1080px] flex-col overflow-y-auto no-scrollbar rounded-2xl border border-gray-200 bg-white shadow-[0_22px_70px_rgba(15,23,42,0.16)] dark:border-gray-700 dark:bg-gray-900 dark:shadow-[0_22px_70px_rgba(0,0,0,0.5)]">
      <div className="px-5 pt-5 sm:px-6">
        <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
          Solutions
        </span>
      </div>

      <div className="grid grid-cols-1 gap-5 px-5 pb-5 pt-4 sm:px-6 md:grid-cols-3 md:divide-x md:divide-slate-100 dark:md:divide-gray-800">
        <MenuColumn title="By Business Need" items={BUSINESS_NEED_ITEMS} />
        <MenuColumn title="By Team" items={TEAM_ITEMS} className="md:pl-8" />
        <MenuColumn title="By Organisation" items={ORGANISATION_ITEMS} className="md:pl-8" />
      </div>

      <div className="mx-5 mb-5 flex flex-col gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:mx-6 sm:flex-row sm:items-center sm:gap-5 dark:border-gray-800 dark:bg-gray-800/60">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg">
            <img src="/images/dropdown/Suite Mark.png" alt="Zoiko suite mark" />
        </div>
        <div className="flex-1">
          <h3 className="text-[15px] font-semibold text-slate-900 dark:text-white">
            Find the right Zoiko Billing configuration
          </h3>
          <p className="mt-1 text-sm leading-snug text-gray-600 dark:text-gray-400">
            Answer a small number of questions about entities, billing volume and integrations.
          </p>
          <div>
              <Link
                href="/deployment-options"
                className="inline-flex items-center gap-1.5 pt-1 text-sm font-medium hover:text-blue-700"
                style={{ color: '#2563EB' }}
              >
                <span style={{ color: '#2563EB' }}>Find your solution</span>
                <ArrowRight className="h-3.5 w-3.5" style={{ color: '#2563EB' }} />
              </Link>
            </div>
        </div>
        
      </div>

      <div className="border-t border-slate-100 px-5 py-3 sm:px-6 dark:border-gray-800">
        <Link
          href="/solutions"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          style={{ color: '#2563EB' }}
        >
          View all solutions
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
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
      <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{title}</h3>
      <div className="flex flex-col gap-2.5">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="group flex items-center gap-3 rounded-lg p-1 transition-colors hover:bg-slate-50 dark:hover:bg-gray-800"
            >
              <Icon className="h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" />
              <p className="text-[13px] font-medium text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                {item.title}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
