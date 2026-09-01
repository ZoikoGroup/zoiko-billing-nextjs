'use client';

import Link from 'next/link';
import {
  ArrowRight,
  Boxes,
  Calculator,
  Code2,
  CreditCard,
  Grid,
  HelpCircle,
  Landmark,
  Lock,
  Puzzle,
  Send,
  Share2,
  ShieldCheck,
  Terminal,
  Users,
  BookOpen,
  Webhook,
  Box,
  type LucideIcon,
} from 'lucide-react';

type MenuItem = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

const CATEGORY_ITEMS: MenuItem[] = [
  { title: 'Payment Providers', description: 'Connect with leading payment gateways.', href: '/payment-providers', icon: CreditCard },
  { title: 'Accounting & ERP', description: 'Sync with accounting and ERP systems.', href: '/accounting-and-erp', icon: Calculator },
  { title: 'CRM Platforms', description: 'Integrate with popular CRM platforms.', href: '/crm-platforms', icon: Users },
  { title: 'Banking & Reconciliation', description: 'Automate bank feeds and reconciliation.', href: '/banking-and-reconciliation', icon: Landmark },
  { title: 'Zoiko Ecosystem', description: 'Connect with Zoiko products and services.', href: '/ecosystem', icon: Boxes },
  { title: 'View All Integrations', description: 'Browse our full integration catalogue.', href: '/integration-availability', icon: Grid },
];

const DEVELOPER_ITEMS: MenuItem[] = [
  { title: 'API Overview', description: 'Learn how the Zoiko Billing API works.', href: '/developers-api-overview', icon: Code2 },
  { title: 'API Documentation', description: 'Complete technical reference and guides.', href: '/developers-api-documentation', icon: BookOpen },
  { title: 'Webhooks', description: 'Real-time event notifications.', href: '/developers-webhooks', icon: Webhook },
  { title: 'Developer Sandbox', description: 'Test and build in a safe environment.', href: '/developer-sandbox', icon: Box },
  { title: 'Authentication', description: 'Secure access with OAuth and API keys.', href: '/developers-authentication', icon: Lock },
  { title: 'SDKs & Examples', description: 'Libraries and sample code to get started.', href: '/sdks-and-examples', icon: Terminal },
];

const PARTNER_ITEMS: MenuItem[] = [
  { title: 'Build an Integration', description: 'Create a custom integration with Zoiko.', href: '/developers-build-an-integration', icon: Puzzle },
  { title: 'Technology Partners', description: 'Explore our technology partner network.', href: '#', icon: Share2 },
  { title: 'Integration Standards', description: 'Guidelines and best practices.', href: '#', icon: ShieldCheck },
  { title: 'Partner Programme', description: 'Join the Zoiko partner programme.', href: '#', icon: Users },
  { title: 'Submit an Integration', description: 'Propose your integration to Zoiko.', href: '#', icon: Send },
  { title: 'Integration Support', description: 'Get help for integration-related queries.', href: '#', icon: HelpCircle },
];

export default function IntegrationsDropdown() {
  return (
    <div className="mx-auto flex max-h-[calc(100vh-132px)] w-full max-w-[1080px] flex-col overflow-y-auto no-scrollbar rounded-2xl border border-gray-200 bg-white shadow-[0_22px_70px_rgba(15,23,42,0.16)] dark:border-gray-700 dark:bg-gray-900 dark:shadow-[0_22px_70px_rgba(0,0,0,0.5)]">
      <div className="px-5 pt-5 sm:px-6">
        <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
          Integrations
        </span>
      </div>

      <div className="grid grid-cols-1 gap-5 px-5 pb-5 pt-4 sm:px-6 md:grid-cols-3 md:divide-x md:divide-slate-100 dark:md:divide-gray-800">
        <MenuColumn title="Integration Categories" items={CATEGORY_ITEMS} />
        <MenuColumn title="Developer Platform" items={DEVELOPER_ITEMS} className="md:pl-8" />
        <MenuColumn title="Build & Partner" items={PARTNER_ITEMS} className="md:pl-8" />
      </div>

      <div className="mx-5 mb-5 flex flex-col gap-3 rounded-xl bg-slate-50 p-4 sm:mx-6 sm:flex-row sm:items-center sm:gap-5 dark:bg-gray-800/60">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white dark:border-gray-700 dark:bg-gray-900">
           <img src="/images/dropdown/Plug Icon.png"></img>
        </div>
        <div className="flex-1">
          <h3 className="text-[15px] font-semibold text-slate-900 dark:text-white">
            Connect Zoiko Billing to the systems your business already uses.
          </h3>
        
        <div className="flex shrink-0 mt-4 items-center gap-4 sm:border-l sm:border-slate-200 sm:pl-5 dark:sm:border-gray-700">
          <Link
            href="/integrations"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            style={{ color: '#2563EB' }}
          >
            Explore integrations
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <Link
            href="/developers/docs"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            style={{ color: '#2563EB' }}
          >
            Read the API documentation
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        </div>
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
