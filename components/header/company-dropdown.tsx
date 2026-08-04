'use client';

import Link from 'next/link';
import {
  ArrowRight,
  Boxes,
  Briefcase,
  Building2,
  Handshake,
  Headphones,
  Mail,
  Mic,
  Newspaper,
  Send,
  Star,
  UserCheck,
  Users,
  type LucideIcon,
} from 'lucide-react';

type MenuItem = {
  title: string;
  href: string;
  icon: LucideIcon;
};

const ABOUT_ITEMS: MenuItem[] = [
  { title: 'About', href: '/about', icon: Building2 },
  { title: 'Why Zoiko Billing', href: '/why-zoiko-billing', icon: Star },
  { title: 'Zoiko Group',  href: '/zoiko-group', icon: Users },
  { title: 'Leadership', href: '/leadership', icon: UserCheck },
];

const WORK_ITEMS: MenuItem[] = [
  { title: 'Partners',  href: '/partners', icon: Handshake },
  { title: 'Partner Programme', href: '/partner-programme', icon: Users },
  { title: 'Careers', href: '/careers', icon: Briefcase },
  { title: 'Become a Partner',  href: '/become-a-partner', icon: Send },
];

const CONNECT_ITEMS: MenuItem[] = [
  { title: 'Contact',  href: '/contact', icon: Headphones },
  { title: 'Newsroom',  href: '/newsroom', icon: Newspaper },
  { title: 'Media Enquiries',  href: '/media-enquiries', icon: Mic },
  { title: 'Sales Enquiries',  href: '/sales-enquiries', icon: Mail },
];

export default function CompanyDropdown() {
  return (
    <div className="mx-auto flex max-h-[calc(100vh-132px)] w-full max-w-[1080px] flex-col overflow-y-auto no-scrollbar rounded-2xl border border-gray-200 bg-white shadow-[0_22px_70px_rgba(15,23,42,0.16)] dark:border-gray-700 dark:bg-gray-900 dark:shadow-[0_22px_70px_rgba(0,0,0,0.5)]">
      <div className="px-5 pt-5 sm:px-6">
        <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
          Company
        </span>
      </div>

      <div className="grid grid-cols-1 gap-5 px-5 pb-5 pt-4 sm:px-6 md:grid-cols-3 md:divide-x md:divide-slate-100 dark:md:divide-gray-800">
        <MenuColumn title="About Zoiko Billing" items={ABOUT_ITEMS} />
        <MenuColumn title="Work With Us" items={WORK_ITEMS} className="md:pl-8" />
        <MenuColumn title="Connect" items={CONNECT_ITEMS} className="md:pl-8" />
      </div>

      <div className="mx-5 mb-5 flex flex-col gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:mx-6 sm:flex-row sm:items-center sm:gap-5 dark:border-gray-800 dark:bg-gray-800/60">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg">
         <img src="/images/dropdown/Ecosystem Mark.png"></img>
        </div>
        <div className="flex-1">
          <h3 className="text-[15px] font-semibold text-slate-900 dark:text-white">
            Part of the Zoiko ecosystem
          </h3>
          <p className="mt-1 text-sm leading-snug text-gray-500 dark:text-gray-400">
            Zoiko Billing operates independently and can also connect with the Zoiko One suite.
          </p>
          <div><Link
          href="/zoiko-one"
          className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          style={{ color: '#2563EB' }}
        >
          Explore Zoiko One
          <ArrowRight className="h-3.5 w-3.5" />
        </Link></div>
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
      <div className="flex flex-col gap-3">
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
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
