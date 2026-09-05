'use client';

import Image from 'next/image';
import Link from 'next/link';

interface LinkItem {
  label: string;
  href?: string;
}

interface CapabilityBlock {
  number: string;
  category: string;
  title: string;
  description: string;
  links: LinkItem[];
  imageUrl: string;
  imageAlt: string;
  bgGradient: string;
  reverseLayout?: boolean;
}

const capabilityBlocks: CapabilityBlock[] = [
  {
    number: '05',
    category: 'Customer and operational control',
    title: 'The foundation that billing operations sit on.',
    description:
      'Central profiles, controlled workflow routing and explicit authority over sensitive actions. Every automated step exposes its owner, trigger, status and exception path.',
    links: [
      { label: 'Customer Records', href: '/customer-records' },
      { label: 'Automation & Workflows', href: '/automation' },
      { label: 'Roles & Approvals', href: '/roles-and-approvals' },
    ],
    imageUrl: '/images/platform-overview/div (3).png',
    imageAlt: 'Customer and operational control dashboard',
    bgGradient: 'bg-[#f7f8fa]',
    reverseLayout: false,
  },
  {
    number: '06',
    category: 'Billing operations',
    title: 'Document and charge control, with delivery you can evidence.',
    description:
      'Create invoices and credit notes, control charges and corrections, manage repeat timing, and keep a record of how each document was generated, sent and received.',
    links: [
      { label: 'Invoices & Credit Notes', href: '/invoices' },
      { label: 'Charges & Adjustments', href: '/charges-and-adjustments' },
      { label: 'Billing Schedules', href: '/billing-schedules' },
      { label: 'Documents & Delivery', href: '/documents-and-delivery' },
    ],
    imageUrl: '/images/platform-overview/div (6).png',
    imageAlt: 'Billing operations and delivery management',
    bgGradient: 'bg-[#f7f8fa]',
    reverseLayout: true,
  },
  {
    number: '07',
    category: 'Revenue control',
    title: 'What happens after the invoice leaves.',
    description:
      'Receivables queues and prioritisation, recorded payment allocation, ageing on outstanding balances, and reporting that always states its source, period, currency and entity.',
    links: [
      { label: 'Accounts Receivable', href: '/accounts-receivable' },
      { label: 'Payments & Reconciliation', href: '/payments-and-reconcilliation' },
      { label: 'Outstanding Balances', href: '/outstanding-balances' },
      { label: 'Reporting & Analytics', href: '/reporting-and-analytics' },
    ],
    imageUrl: '/images/platform-overview/div (7).png',
    imageAlt: 'Revenue control and analytics preview',
    bgGradient: 'bg-[#f7f8fa]',
    reverseLayout: false,
  },
];

export default function CapabilityBlocksSection() {
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
            flex
            w-full
            max-w-[1240px]
            flex-col
            items-center
            gap-10
            sm:gap-12
            md:gap-14
          "
        >
          {/* SECTION INTRO */}
          <div
            className="
              flex
              w-full
              max-w-[760px]
              flex-col
              items-center
              gap-3
              pt-2
              text-center
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.16em]
                  text-[#7890b2]
                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Capabilities
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[760px]
                !text-[30px]
                !font-extrabold
                !leading-[1.2]
                !tracking-[-0.035em]
                !text-[#091127]
                sm:!text-[34px]
                md:!text-[36px]
                lg:!text-[40px]
              "
            >
              Three groups of capability, one record underneath.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]
                sm:text-base
              "
            >
              Foundation, document control and post-issue visibility. Each
              links to its dedicated page.
            </p>
          </div>

          {/* CAPABILITY BLOCKS */}
          <div className="flex w-full flex-col gap-12 sm:gap-16 lg:gap-20">
            {capabilityBlocks.map((block) => (
              <div
                key={block.number}
                className="
                  grid
                  w-full
                  grid-cols-1
                  items-center
                  gap-8
                  lg:grid-cols-12
                  lg:gap-14
                  xl:gap-16
                "
              >
                {/* IMAGE */}
                <div
                  className={`
                    flex
                    min-h-[280px]
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-3xl
                    border
                    border-[#dfe5ee]
                    p-5
                    ${block.bgGradient}
                    sm:min-h-[340px]
                    sm:p-7
                    lg:col-span-6
                    lg:min-h-[400px]
                    ${
                      block.reverseLayout
                        ? 'lg:order-2'
                        : 'lg:order-1'
                    }
                  `}
                >
                  <Image
                    src={block.imageUrl}
                    alt={block.imageAlt}
                    width={484}
                    height={393}
                    className="
                      h-auto
                      max-h-[400px]
                      w-full
                      rounded-2xl
                      border
                      border-[#dfe5ee]
                      object-cover
                      shadow-[0_12px_30px_rgba(15,23,42,0.08),0_2px_6px_rgba(15,23,42,0.04)]
                    "
                  />
                </div>

                {/* CONTENT */}
                <div
                  className={`
                    flex
                    flex-col
                    items-start
                    justify-start
                    lg:col-span-6
                    ${
                      block.reverseLayout
                        ? 'lg:order-1'
                        : 'lg:order-2'
                    }
                  `}
                >
                  {/* NUMBER + CATEGORY */}
                  <div className="flex items-center gap-3">
                    <span
                      className="
                        flex
                        h-7
                        min-w-7
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-[#dfe5ee]
                        bg-white
                        px-2
                        text-[10px]
                        font-bold
                        leading-4
                        text-[#7890b2]
                      "
                    >
                      {block.number}
                    </span>

                    <span
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        leading-4
                        tracking-[0.14em]
                        text-[#7890b2]
                        sm:text-xs
                      "
                    >
                      {block.category}
                    </span>
                  </div>

                  {/* TITLE + DESCRIPTION */}
                  <div className="mt-5 flex flex-col gap-3">
                    <h3
                      className="
                        !m-0
                        text-[24px]
                        font-extrabold
                        leading-[1.25]
                        tracking-[-0.025em]
                        text-[#091127]
                        sm:text-[28px]
                        md:text-[30px]
                      "
                    >
                      {block.title}
                    </h3>

                    <p
                      className="
                        !m-0
                        text-[15px]
                        font-normal
                        leading-7
                        text-[#5d7192]
                        sm:text-base
                      "
                    >
                      {block.description}
                    </p>
                  </div>

                  {/* LINKS */}
                  <div
                    className="
                      mt-6
                      w-full
                      divide-y
                      divide-[#edf0f4]
                      border-y
                      border-[#edf0f4]
                    "
                  >
                    {block.links.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href || '#'}
                        className="
                          group
                          flex
                          items-center
                          justify-between
                          gap-4
                          rounded-lg
                          px-2
                          py-3.5
                          text-[#091127]
                          transition-colors
                          duration-150
                          hover:bg-white
                          hover:text-[#45658f]
                          focus:outline-none
                        "
                      >
                        <span
                          className="
                            text-sm
                            font-medium
                            leading-5
                            sm:text-base
                          "
                        >
                          {link.label}
                        </span>

                        <span
                          className="
                            text-base
                            text-[#9aa9be]
                            transition-transform
                            duration-150
                            group-hover:translate-x-1
                            group-hover:text-[#45658f]
                          "
                        >
                          →
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}