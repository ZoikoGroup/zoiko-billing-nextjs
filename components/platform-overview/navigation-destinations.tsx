import Link from 'next/link';

interface NavigationCard {
  title: string;
  description: string;
  isCurrent?: boolean;
  href?: string;
}

interface PlatformGroup {
  category: string;
  cards: NavigationCard[];
}

const platformData: PlatformGroup[] = [
  {
    category: 'Platform',
    cards: [
      {
        title: 'Platform Overview',
        description: 'Complete billing control',
        isCurrent: true,
      },
      {
        title: 'Customer Records',
        description: 'Central billing profiles',
        href: '/customer-records',
      },
      {
        title: 'Automation & Workflows',
        description: 'Reduce repetitive work',
        href: '/automation',
      },
      {
        title: 'Roles & Approvals',
        description: 'Govern sensitive actions',
        href: '/roles-and-approvals',
      },
    ],
  },
  {
    category: 'Billing Operations',
    cards: [
      {
        title: 'Invoices & Credit Notes',
        description: 'Create and manage billing',
        href: '/invoices',
      },
      {
        title: 'Charges & Adjustments',
        description: 'Control line items and fees',
        href: '/charges-and-adjustments',
      },
      {
        title: 'Billing Schedules',
        description: 'Manage billing timing',
        href: '/billing-schedules',
      },
      {
        title: 'Documents & Delivery',
        description: 'Issue professional records',
        href: '/documents-and-delivery',
      },
    ],
  },
  {
    category: 'Revenue Control',
    cards: [
      {
        title: 'Accounts Receivable',
        description: 'Track what is owed',
        href: '/accounts-receivable',
      },
      {
        title: 'Payments & Reconciliation',
        description: 'Record and reconcile payments',
        href: '/payments-and-reconcilliation',
      },
      {
        title: 'Outstanding Balances',
        description: 'Prioritise collection activity',
        href: '/outstanding-balances',
      },
      {
        title: 'Reporting & Analytics',
        description: 'Monitor billing performance',
        href: '/reporting-and-analytics',
      },
    ],
  },
];

export default function PlatformDestinationsSection() {
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
            gap-8
            sm:gap-10
            md:gap-11
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
                The complete platform
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
              One connected platform for billing operations and revenue
              control.
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
              Twelve destinations across three groups. Every card links to its
              own capability page.
            </p>
          </div>

          {/* PLATFORM GROUPS */}
          <div className="flex w-full flex-col gap-10 sm:gap-12">
            {platformData.map((group) => (
              <div
                key={group.category}
                className="flex w-full flex-col gap-4"
              >
                {/* CATEGORY */}
                <div className="border-b border-[#dfe5ee] pb-2">
                  <h3
                    className="
                      !m-0
                      text-[11px]
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.14em]
                      text-[#7890b2]
                    "
                  >
                    {group.category}
                  </h3>
                </div>

                {/* CARDS */}
                <div
                  className="
                    grid
                    w-full
                    grid-cols-1
                    gap-4
                    sm:grid-cols-2
                    sm:gap-5
                    lg:grid-cols-4
                    lg:gap-5
                  "
                >
                  {group.cards.map((card) => (
                    <div
                      key={card.title}
                      className={`
                        group
                        flex
                        min-h-[150px]
                        flex-col
                        justify-between
                        rounded-2xl
                        border
                        p-5
                        transition-all
                        duration-200
                        sm:p-6
                        ${
                          card.isCurrent
                            ? 'border-[#7890b2] bg-[#f8fafc] shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]'
                            : 'border-[#dfe5ee] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)] hover:border-[#cbd5e1] hover:shadow-[0_12px_28px_rgba(15,23,42,0.07),0_2px_4px_rgba(15,23,42,0.04)]'
                        }
                      `}
                    >
                      {/* CARD CONTENT */}
                      <div className="flex flex-col gap-1">
                        <h4
                          className="
                            !m-0
                            text-[15px]
                            font-semibold
                            leading-5
                            text-[#091127]
                            sm:text-base
                          "
                        >
                          {card.title}
                        </h4>

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

                      {/* CARD ACTION */}
                      <div className="mt-auto pt-5">
                        {card.isCurrent ? (
                          <span
                            className="
                              inline-flex
                              rounded-full
                              border
                              border-[#dfe5ee]
                              bg-white
                              px-2.5
                              py-1
                              text-[10px]
                              font-bold
                              uppercase
                              leading-4
                              tracking-[0.08em]
                              text-[#7890b2]
                            "
                          >
                            You are here
                          </span>
                        ) : (
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
                            <span>Open</span>

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
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}