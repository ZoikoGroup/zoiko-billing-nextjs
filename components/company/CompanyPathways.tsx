'use client';

import Link from 'next/link';

type Pathway = {
  number: string;
  title: string;
  description: React.ReactNode;
  href: string;
};

const PATHWAYS: Pathway[] = [
  {
    number: '01',
    title: 'About',
    description:
      'Understand the product and company context, and how Zoiko Billing fits the Zoiko ecosystem.',
    href: '/about',
  },
  {
    number: '02',
    title: 'Why Zoiko Billing',
    description:
      'Review the approved strategic rationale, operating principles and differentiation.',
    href: '/why-zoiko-billing',
  },
  {
    number: '03',
    title: 'Zoiko Group',
    description: 'Open the approved group-level corporate destination.',
    href: '/zoiko-group',
  },
  {
    number: '04',
    title: 'Leadership',
    description: 'See current approved public leadership and accountability.',
    href: '/leadership',
  },
  {
    number: '05',
    title: 'Careers',
    description: 'Explore current employer information and open roles.',
    href: '/careers',
  },
  {
    number: '06',
    title: 'Newsroom',
    description: 'Find approved company announcements and media resources.',
    href: '/newsroom',
  },
  {
    number: '07',
    title: 'Contact',
    description:
      'Choose the right approved company, sales, support or media contact path.',
    href: '/contact',
  },
];

function PathwayCard({ pathway }: { pathway: Pathway }) {
  return (
    <div
      className="
        flex
        min-h-[245px]
        flex-col
        justify-between
        rounded-2xl
        border
        border-[#dfe5ee]
        bg-white
        p-4
        shadow-[0_8px_24px_rgba(15,23,42,0.05)]
        shadow-[0_1px_2px_rgba(15,23,42,0.04)]
      "
    >
      <div>
        {/* NUMBER */}
        <div className="text-[10px] font-normal leading-4 text-[#7890b2]">
          {pathway.number}
        </div>

        {/* TITLE */}
        <h3
          className="
            !m-0
            pt-1
            !text-sm
            !font-bold
            !leading-6
            !tracking-normal
            !text-[#091127]
          "
        >
          {pathway.title}
        </h3>

        {/* DESCRIPTION */}
        <p
          className="
            !m-0
            pt-1.5
            pb-3
            text-xs
            font-normal
            leading-4
            text-[#5d7192]
          "
        >
          {pathway.description}
        </p>
      </div>

      {/* LINK */}
      <div className="pt-3">
        <Link
          href={pathway.href}
          className="
            text-xs
            font-bold
            leading-5
            text-blue-600
            transition
            hover:text-blue-700
          "
        >
          {pathway.title} →
        </Link>
      </div>
    </div>
  );
}

export default function CompanyPathways() {
  return (
    <section className="w-full bg-[#f5f6f8]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
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
        {/* SECTION INTRO */}
        <div className="mx-auto w-full max-w-[662px] text-center">
          {/* EYEBROW */}
          <div className="mb-5 flex items-center justify-center gap-3 sm:mb-6">
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
              Company Pathways
            </span>

            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
          </div>

          {/* HEADING */}
          <h2
            className="
              !m-0
              !text-[32px]
              !font-extrabold
              !leading-[1.12]
              !tracking-[-0.035em]
              !text-slate-900

              sm:!text-[36px]

              md:!text-[40px]
            "
          >
            Seven destinations, each with a decision cue.
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              !m-0
              mx-auto
              mt-6
              max-w-[687px]
              text-[15px]
              font-normal
              leading-7
              text-[#5d7192]

              sm:mt-7
              sm:text-base
            "
          >
            A cue tells you whether this is the page you want before you
            click. That is the entire job of a routing hub.
          </p>
        </div>

        {/* PATHWAY CARDS */}
        <div
          className="
            mt-10
            grid
            w-full
            grid-cols-1
            gap-4

            sm:mt-12
            sm:grid-cols-2

            lg:mt-14
            lg:grid-cols-3

            xl:grid-cols-4
          "
        >
          {PATHWAYS.map((pathway) => (
            <PathwayCard key={pathway.number} pathway={pathway} />
          ))}

          {/* BOUNDARY CARD */}
          <div
            className="
              flex
              min-h-[245px]
              flex-col
              justify-between
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-[#fafafa]
              p-4
              shadow-[0_8px_24px_rgba(15,23,42,0.05)]
              shadow-[0_1px_2px_rgba(15,23,42,0.04)]
            "
          >
            <div>
              {/* LABEL */}
              <div className="text-xs font-normal leading-4 text-[#7890b2]">
                Boundary
              </div>

              {/* TITLE */}
              <h3
                className="
                  !m-0
                  pt-1
                  !text-sm
                  !font-bold
                  !leading-6
                  !tracking-normal
                  !text-[#091127]
                "
              >
                Not company pages
              </h3>

              {/* DESCRIPTION */}
              <p
                className="
                  !m-0
                  pt-1.5
                  pb-3
                  text-xs
                  font-normal
                  leading-4
                  text-[#5d7192]
                "
              >
                <strong className="font-bold">
                  Trust, Legal, Support and Partners are separate estates
                </strong>{' '}
                with their own authorities. Linked from the footer, never
                absorbed here.
              </p>
            </div>

            {/* LINK */}
            <div className="pt-3">
              <Link
                href="/trust-center"
                className="
                  text-xs
                  font-bold
                  leading-5
                  text-blue-600
                  transition
                  hover:text-blue-700
                "
              >
                Trust Center →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}