'use client';

import Link from 'next/link';

interface RouteLink {
  label: string;
  href?: string;
}

interface RoutingRow {
  intent: string;
  routes: RouteLink[];
  rule: React.ReactNode;
}

const ROUTING_ROWS: RoutingRow[] = [
  {
    intent: 'General company enquiry',
    routes: [
      {
        label: 'Contact',
        href: '/contact',
      },
    ],
    rule: (
      <>
        Contact authority owns the intent router.{' '}
        <strong>No channel hard-coded here</strong>
      </>
    ),
  },
  {
    intent: 'Media or press',
    routes: [
      {
        label: 'Newsroom',
        href: '/newsroom',
      },
      {
        label: ' · approved media route',
      },
    ],
    rule: (
      <>
        <strong>
          No media contact, personal email, phone number or SLA hard-coded
          outside Contact authority
        </strong>
      </>
    ),
  },
  {
    intent: 'Candidate',
    routes: [
      {
        label: 'Careers',
        href: '/careers',
      },
    ],
    rule: (
      <strong>
        Candidate intent is never routed into a sales flow
      </strong>
    ),
  },
  {
    intent: 'Existing customer with a problem',
    routes: [
      {
        label: 'Support',
        href: '/support-policy',
      },
      {
        label: ' · ',
      },
      {
        label: 'Help Center',
        href: '/help-center',
      },
    ],
    rule: (
      <>
        <strong>Support-first.</strong> Never a new-sales form
      </>
    ),
  },
  {
    intent: 'Partnership or integration',
    routes: [
      {
        label: 'Partners & Connect',
        href: '/partner-portal',
      },
    ],
    rule: <>Partner intake, not sales</>,
  },
  {
    intent: 'Commercial evaluation',
    routes: [
      {
        label: 'Pricing',
        href: '/pricing',
      },
      {
        label: ' · ',
      },
      {
        label: 'Demo',
        href: '/book-demo',
      },
      {
        label: ' · ',
      },
      {
        label: 'Sales',
        href: '/contact',
      },
    ],
    rule: (
      <>
        <strong>Resolved from market and commercial state</strong>, and placed
        after the routing above
      </>
    ),
  },
];

function RouteItem({ route }: { route: RouteLink }) {
  const isSeparator = route.label.includes('·');

  if (isSeparator) {
    return (
      <span className="text-sm font-normal leading-5 text-[#5d7192]">
        {route.label}
      </span>
    );
  }

  if (route.href) {
    return (
      <Link
        href={route.href}
        className="
          text-sm
          font-semibold
          leading-6
          !text-blue-600
          transition-colors
          !hover:text-blue-800
          hover:underline
        "
      >
        {route.label}
      </Link>
    );
  }

  return (
    <span className="text-sm font-semibold leading-6 text-blue-600">
      {route.label}
    </span>
  );
}

export default function ContactPressSupportRouting() {
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
            gap-5
          "
        >
          {/* SECTION INTRO */}
          <div
            className="
              flex
              w-full
              max-w-[1000px]
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
                Contact, press &amp; support routing
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <div className="w-full pb-[0.69px]">
              <h2
                className="
                  !m-0
                  w-full
                  text-center
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
                Six intents, and the commercial CTA
               
                must not hijack four of them.
              </h2>
            </div>

            {/* DESCRIPTION */}
            <div className="w-full max-w-[687px] pt-[3.11px]">
              <p
                className="
                  !m-0
                  text-center
                  text-[15px]
                  font-normal
                  leading-7
                  text-[#5d7192]

                  sm:text-base
                "
              >
                A company page attracts candidates, journalists and existing
                customers as often as buyers.
              </p>
            </div>
          </div>

          {/* TABLE */}
          <div
            className="
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
            "
          >
            {/* DESKTOP TABLE */}
            <div className="hidden md:block">
              {/* HEADER */}
              <div
                className="
                  grid
                  grid-cols-[256px_256px_minmax(0,1fr)]
                  bg-[#fafbfc]
                "
              >
                {/* INTENT HEADER */}
                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-[#7890b2]
                    "
                  >
                    Intent
                  </span>
                </div>

                {/* ROUTE HEADER */}
                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-[#7890b2]
                    "
                  >
                    Route
                  </span>
                </div>

                {/* RULE HEADER */}
                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-[#7890b2]
                    "
                  >
                    Rule
                  </span>
                </div>
              </div>

              {/* TABLE ROWS */}
              {ROUTING_ROWS.map((row, index) => (
                <div
                  key={row.intent}
                  className={`
                    grid
                    grid-cols-[256px_256px_minmax(0,1fr)]
                    ${
                      index !== ROUTING_ROWS.length - 1
                        ? 'border-b border-[#edf0f4]'
                        : ''
                    }
                  `}
                >
                  {/* INTENT */}
                  <div className="px-4 py-3.5">
                    <span
                      className="
                        text-sm
                        font-semibold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {row.intent}
                    </span>
                  </div>

                  {/* ROUTES */}
                  <div
                    className="
                      flex
                      flex-wrap
                      items-center
                      gap-0
                      px-4
                      py-3.5
                    "
                  >
                    {row.routes.map((route, routeIndex) => (
                      <RouteItem
                        key={`${route.label}-${routeIndex}`}
                        route={route}
                      />
                    ))}
                  </div>

                  {/* RULE */}
                  <div className="px-4 py-3.5">
                    <p
                      className="
                        !m-0
                        text-sm
                        font-normal
                        leading-5
                        text-[#5d7192]
                      "
                    >
                      {row.rule}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE / SMALL TABLET */}
            <div className="flex flex-col md:hidden">
              {ROUTING_ROWS.map((row, index) => (
                <div
                  key={row.intent}
                  className={`
                    p-5
                    ${
                      index !== ROUTING_ROWS.length - 1
                        ? 'border-b border-[#edf0f4]'
                        : ''
                    }
                  `}
                >
                  {/* INTENT */}
                  <div className="mb-4">
                    <p
                      className="
                        !m-0
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[#7890b2]
                      "
                    >
                      Intent
                    </p>

                    <p
                      className="
                        !m-0
                        mt-1.5
                        text-sm
                        font-semibold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {row.intent}
                    </p>
                  </div>

                  {/* ROUTE */}
                  <div className="mb-4">
                    <p
                      className="
                        !m-0
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[#7890b2]
                      "
                    >
                      Route
                    </p>

                    <div
                      className="
                        mt-1.5
                        flex
                        flex-wrap
                        items-center
                        gap-0
                      "
                    >
                      {row.routes.map((route, routeIndex) => (
                        <RouteItem
                          key={`${route.label}-${routeIndex}`}
                          route={route}
                        />
                      ))}
                    </div>
                  </div>

                  {/* RULE */}
                  <div>
                    <p
                      className="
                        !m-0
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[#7890b2]
                      "
                    >
                      Rule
                    </p>

                    <p
                      className="
                        !m-0
                        mt-1.5
                        text-sm
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      {row.rule}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}