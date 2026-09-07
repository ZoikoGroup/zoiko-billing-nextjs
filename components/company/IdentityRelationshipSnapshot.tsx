'use client';

import Link from 'next/link';

type EntityCard = {
  title: string;
  description: string;
  linkText: string;
  href: string;
};

const ENTITY_CARDS: EntityCard[] = [
  {
    title: 'Zoiko Billing',
    description:
      'An approved concise description and invoice-to-payment product context — billing, payments and receivables kept on one connected record.',
    linkText: 'About →',
    href: '/about',
  },
  {
    title: 'Zoiko Group',
    description:
      'relationship statement only, from group authority.',
    linkText: 'Visit Zoiko Group →',
    href: '/zoiko-group',
  },
  {
    title: 'Standalone & Zoiko One',
    description:
      'An approved statement of the integrated-product relationship. Zoiko Billing runs on its own or alongside the wider Zoiko One estate.',
    linkText: 'Zoiko Billing + Zoiko One →',
    href: '/zoiko-billing-plus-zoiko-one',
  },
];

export default function IdentityRelationshipSnapshot() {
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
        {/* SECTION HEADER */}
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
              Identity &amp; Relationship Snapshot
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
            Three entities, three carefully limited statements.
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
            Readers conflate these constantly, and the conflation has
            commercial consequences.
          </p>
        </div>

        {/* ENTITY CARDS */}
        <div
          className="
            mt-10
            grid
            w-full
            grid-cols-1
            gap-4

            sm:mt-12

            md:grid-cols-2

            lg:grid-cols-3
          "
        >
          {ENTITY_CARDS.map((card) => (
            <div
              key={card.title}
              className="
                flex
                min-h-[176px]
                flex-col
                items-start
                justify-between
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                px-5
                pb-6
                pt-5
                shadow-[0_8px_24px_rgba(15,23,42,0.05)]
                shadow-[0_1px_2px_rgba(15,23,42,0.04)]
              "
            >
              <div className="w-full">
                {/* TITLE */}
                <h3
                  className="
                    !m-0
                    !text-base
                    !font-bold
                    !leading-6
                    !tracking-normal
                    !text-[#091127]
                  "
                >
                  {card.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    !m-0
                    mt-2
                    text-xs
                    font-normal
                    leading-5
                    text-[#5d7192]
                  "
                >
                  {card.description}
                </p>
              </div>

              {/* LINK */}
              <div className="mt-3">
                <Link
                  href={card.href}
                  className="
                    text-xs
                    font-bold
                    leading-5
                    text-blue-600
                    transition
                    hover:text-blue-700
                  "
                >
                  {card.linkText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}