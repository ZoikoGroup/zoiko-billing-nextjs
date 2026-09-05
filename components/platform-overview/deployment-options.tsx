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
    <section className="w-full bg-[#f7f8fa]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-start
          px-5
          py-14
          sm:px-8
          sm:py-16
          md:px-10
          md:py-20
          lg:px-14
          xl:px-20
        "
      >
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1240px]
            grid-cols-1
            gap-4
            sm:grid-cols-2
            sm:gap-5
            lg:grid-cols-3
            lg:gap-5
          "
        >
          {featureData.map((card) => (
            <div
              key={card.title}
              className="
                group
                flex
                min-h-[230px]
                flex-col
                justify-between
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                p-5
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                transition-all
                duration-200
                hover:border-[#cbd5e1]
                hover:shadow-[0_12px_28px_rgba(15,23,42,0.07),0_2px_4px_rgba(15,23,42,0.04)]
                sm:p-6
              "
            >
              {/* CARD CONTENT */}
              <div className="flex flex-col gap-3">
                {/* CATEGORY */}
                <span
                  className="
                    block
                    text-[10px]
                    font-bold
                    uppercase
                    leading-4
                    tracking-[0.14em]
                    text-[#7890b2]
                    sm:text-[11px]
                  "
                >
                  {card.category}
                </span>

                {/* TITLE */}
                <h3
                  className="
                    !m-0
                    text-[18px]
                    font-semibold
                    leading-6
                    text-[#091127]
                    sm:text-xl
                  "
                >
                  {card.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    !m-0
                    text-sm
                    font-normal
                    leading-6
                    text-[#5d7192]
                  "
                >
                  {card.description}
                </p>
              </div>

              {/* ACTION */}
              <div className="mt-auto pt-6">
                <Link
                  href={card.href || '#'}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-xs
                    font-semibold
                    uppercase
                    leading-4
                    tracking-[0.08em]
                    text-[#45658f]
                    transition-colors
                    duration-150
                    hover:text-[#091127]
                    focus:outline-none
                  "
                >
                  <span>{card.actionText}</span>

                  <span
                    className="
                      transition-transform
                      duration-200
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}