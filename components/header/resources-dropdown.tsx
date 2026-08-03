'use client';

import Link from 'next/link';
import {
  Activity,
  ArrowRight,
  BarChart3,
  Bell,
  BookOpen,
  Calendar,
  FileText,
  Headphones,
  HelpCircle,
  LayoutGrid,
  PlaySquare,
  ShieldCheck,
  Type,
  Users,
  Video,
  type LucideIcon,
} from 'lucide-react';

type MenuItem = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

const LEARN_ITEMS: MenuItem[] = [
  { title: 'Resource Centre', description: '/resources', href: '/resources', icon: BookOpen },
  { title: 'Billing Guides', description: '/resources/guides', href: '/resources/guides', icon: FileText },
  { title: 'Templates', description: '/resources/templates', href: '/resources/templates', icon: LayoutGrid },
  { title: 'Billing Glossary', description: '/resources/glossary', href: '/resources/glossary', icon: Type },
  { title: 'Reports & Insights', description: '/resources/insights', href: '/resources/insights', icon: BarChart3 },
];

const EVALUATE_ITEMS: MenuItem[] = [
  { title: 'Customer Stories', description: '/customers', href: '/customers', icon: Users },
  { title: 'Product Tour', description: '/product-tour', href: '/product-tour', icon: PlaySquare },
  { title: 'Demo Library', description: '/resources/demos', href: '/resources/demos', icon: Video },
  { title: 'Webinars & Events', description: '/resources/events', href: '/resources/events', icon: Calendar },
  { title: 'Security Overview', description: '/security', href: '/security', icon: ShieldCheck },
];

const HELP_ITEMS: MenuItem[] = [
  { title: 'Help Centre', description: '/help', href: '/help', icon: HelpCircle },
  { title: 'Documentation', description: '/docs', href: '/docs', icon: BookOpen },
  { title: 'Release Notes', description: '/releases', href: '/releases', icon: Bell },
  { title: 'System Status', description: 'External or approved status subdomain', href: '/status', icon: Activity },
  { title: 'Contact Support', description: '/support/contact', href: '/support/contact', icon: Headphones },
];

export default function ResourcesDropdown() {
  return (
    <div className="mx-auto w-full max-w-[1080px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_22px_70px_rgba(15,23,42,0.16)] dark:border-gray-700 dark:bg-gray-900 dark:shadow-[0_22px_70px_rgba(0,0,0,0.5)]">
      <div className="px-5 pt-5 sm:px-6">
        <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
          Resources
        </span>
      </div>

      <div className="grid grid-cols-1 gap-5 px-5 pb-5 pt-4 sm:px-6 md:grid-cols-3 md:divide-x md:divide-slate-100 dark:md:divide-gray-800">
        <MenuColumn title="Learn" items={LEARN_ITEMS} />
        <MenuColumn title="Evaluate" items={EVALUATE_ITEMS} className="md:pl-8" />
        <MenuColumn title="Help & Updates" items={HELP_ITEMS} className="md:pl-8" />
      </div>

      <div className="mx-5 mb-5 flex flex-col gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:mx-6 sm:flex-row sm:items-center sm:gap-5 dark:border-gray-800 dark:bg-gray-800/60">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white dark:border-gray-700 dark:bg-gray-900">
          <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-[15px] font-semibold text-slate-900 dark:text-white">
            Invoice-to-payment control guide
          </h3>
          <p className="mt-1 text-sm leading-snug text-gray-500 dark:text-gray-400">
            A practical framework for strengthening billing operations and revenue visibility.
          </p>
        </div>
        <Link
          href="/resources/invoice-to-payment-guide"
          className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          Read the guide
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="border-t border-slate-100 px-5 py-3 sm:px-6 dark:border-gray-800">
        <Link
          href="/resources"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          Explore all resources
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
              className="group flex items-start gap-3 rounded-lg p-1 transition-colors hover:bg-slate-50 dark:hover:bg-gray-800"
            >
              <Icon className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" />
              <div className="min-w-0">
                <p className="text-[13px] font-semibold text-slate-800 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                  {item.title}
                </p>
                <p className="mt-0.5 text-[12px] leading-snug text-slate-500 dark:text-gray-400">{item.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
