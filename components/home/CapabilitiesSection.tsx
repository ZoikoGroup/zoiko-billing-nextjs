import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

interface FeatureSection {
  number: string;
  category: string;
  title: string;
  description: string;
  bullets: string[];
  primaryButtonText?: string;
  linkText: string;
  imageSrc: string;
  imageBgColor: string;
  imageHeightClass: string;
  reverseLayout?: boolean;
}

const features: FeatureSection[] = [
  {
    number: '01',
    category: 'Invoices',
    title: 'Create, approve, issue, and preserve every version',
    description:
      'Nothing leaves the platform without the approval its value requires, and every version stays on the record.',
    bullets: [
      'Approval thresholds and maker-checker',
      'Delivery and view state confirmed',
      'Credit and correct without overwriting history',
    ],
    primaryButtonText: 'View All Features',
    linkText: 'Create Your Account',
    imageSrc: '/images/home/div(1).png',
    imageBgColor: 'bg-blue-100',
    imageHeightClass: 'max-h-[803px]',
    reverseLayout: false,
  },
  {
    number: '02',
    category: 'Charges and Billing Models',
    title: 'Define approved prices, terms, dates, and discounts once',
    description:
      'Charges reference a released price and version, so the same agreement always bills the same way.',
    bullets: [
      'One-time, recurring, usage-derived, contract-driven',
      'Customer terms, effective dates, and proration',
      'Versions retained so old invoices stay explainable',
    ],
    linkText: 'See billing models',
    imageSrc: '/images/home/div(2).png',
    imageBgColor: 'bg-indigo-50',
    imageHeightClass: 'max-h-[361px]',
    reverseLayout: true,
  },
  {
    number: '03',
    category: 'Payments and Reconciliation',
    title: 'Track outcomes, not assumptions',
    description:
      'Every outcome attaches to the invoice with its reference. Anything unmatched becomes a reviewable exception.',
    bullets: [
      'References, value dates, provider responses',
      'Short-payment and unidentified-receipt exceptions',
      'Refunds and reversals kept in sequence',
    ],
    linkText: 'See payment integrations',
    imageSrc: '/images/home/div(3).png',
    imageBgColor: 'bg-slate-200',
    imageHeightClass: 'max-h-[349px]',
    reverseLayout: false,
  },
  {
    number: '04',
    category: 'Outstanding Balances',
    title: 'Aging, reminders, disputes, and action queues in one place',
    description:
      'Contact attempts log against the balance, not a mailbox. Open disputes suppress reminders.',
    bullets: [
      'Aging buckets with owner and next action',
      'Reminders that stop when a dispute is raised',
      'Payment plans where formally approved',
    ],
    linkText: 'See reporting',
    imageSrc: '/images/home/div (5).png',
    imageBgColor: 'bg-teal-100',
    imageHeightClass: 'max-h-[361px]',
    reverseLayout: true,
  },
  {
    number: '05',
    category: 'Automation and Audit',
    title: 'No automated financial action is concealed',
    description:
      'Every action is attributable to a rule and version. A suggestion is never shown as an executed financial action.',
    bullets: [
      'Scheduled runs with validation holds',
      'Approvals and exception routing',
      'Actor, rule, version, and previous state',
    ],
    linkText: 'Read the control model',
    imageSrc: '/images/home/div (4).png',
    imageBgColor: 'bg-sky-950',
    imageHeightClass: 'max-h-[334px]',
    reverseLayout: false,
  },
];

export default function CapabilitiesSection() {
  return (
    <section className="w-full bg-slate-50 py-16 px-4 sm:px-6 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto space-y-16 lg:space-y-24">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2">
            <span className="w-4 h-0.5 bg-blue-600 rounded-full" />
            <span className="text-blue-600 text-xs font-mono font-medium uppercase tracking-wider">
              Capabilities
            </span>
          </div>

          <h2 className="text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
            Everything your team needs to run billing with control.
          </h2>

          <p className="text-gray-600 text-base sm:text-lg font-normal">
            Five workspaces, one record.
          </p>
        </div>

        {/* Capabilities Feature Rows */}
        <div className="space-y-20 lg:space-y-32">
          {features.map((feature) => (
            <div
              key={feature.number}
              className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${
                feature.reverseLayout ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Text Description Content */}
              <div className="flex-1 space-y-6">
                {/* Badge Category Header */}
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-slate-100 border border-emerald-300 rounded-lg flex items-center justify-center text-blue-600 text-[10px] font-mono font-semibold">
                    {feature.number}
                  </span>
                  <span className="text-blue-600 text-xs font-mono uppercase tracking-wide">
                    {feature.category}
                  </span>
                </div>

                {/* Feature Title & Description */}
                <div className="space-y-3">
                  <h3 className="text-zinc-900 text-2xl sm:text-3xl font-medium leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3 pt-1">
                  {feature.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-blue-600 mt-1 shrink-0" />
                      <span className="text-gray-700 text-sm">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Actions */}
                <div className="pt-3 flex flex-wrap items-center gap-4">
                  {feature.primaryButtonText && (
                    <button
                      type="button"
                      className="px-5 py-2.5 bg-blue-600 text-white font-normal text-base rounded-md hover:bg-blue-700 transition-colors shadow-xs"
                    >
                      {feature.primaryButtonText}
                    </button>
                  )}
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-blue-600 font-normal text-base hover:text-blue-700 transition-colors group"
                  >
                    <span>{feature.linkText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Graphic/Image Container */}
              <div
                className={`flex-1 w-full p-6 sm:p-9 rounded-3xl ${feature.imageBgColor} flex justify-center items-center shadow-xs`}
              >
                <img
                  src={feature.imageSrc}
                  alt={feature.title}
                  className={`w-full h-auto rounded-2xl object-cover ${feature.imageHeightClass}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}