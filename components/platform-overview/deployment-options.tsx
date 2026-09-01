import React from 'react';
import Link from 'next/link';

interface FeatureCardProps {
  category: string;
  title: string;
  description: string;
  actionText: string;
  href?: string;
}

const featureData: FeatureCardProps[] = [
  {
    category: 'Deployment',
    title: 'Standalone SaaS',
    description:
      'Buy, configure and run Zoiko Billing on its own. No Zoiko One subscription is required.',
    actionText: 'See deployment options',
    href: '#deployment-options',
  },
  {
    category: 'Deployment',
    title: 'Integrated Zoiko One component',
    description:
      'Connect approved workflows, shared identity and cross-product navigation where enabled.',
    actionText: 'Compare deployment options',
    href: '/zoiko-billing-plus-zoiko-one',
  },
  {
    category: 'Availability',
    title: 'Varies by region and provider',
    description:
      'Currency, payment provider, tax service and jurisdiction all affect what is available to you.',
    actionText: 'Check product availability',
    href: '/jurisdiction-availability',
  },
];

export default function DeploymentOptionsSection() {
  return (
    <section className="w-full bg-slate-100/70 px-4 py-12 sm:px-6 md:py-20 lg:px-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featureData.map((card) => (
          <div
            key={card.title}
            className="group flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs transition-all duration-200 hover:shadow-md sm:p-7"
          >
            <div className="space-y-3">
              <span className="block text-[10px] font-medium uppercase tracking-wider text-sky-600 font-mono">
                {card.category}
              </span>

              <h3 className="text-lg font-semibold leading-snug text-sky-950 font-sans">
                {card.title}
              </h3>

              <p className="text-sm font-normal leading-relaxed text-slate-600">
                {card.description}
              </p>
            </div>

            <div className="mt-auto pt-6">
              <Link
                href={card.href || '#'}
                className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-sky-600 transition-colors group-hover:text-sky-700 focus:outline-none font-mono"
              >
                <span>{card.actionText}</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
