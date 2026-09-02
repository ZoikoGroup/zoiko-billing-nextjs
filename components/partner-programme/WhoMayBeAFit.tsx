import React from 'react'

const characteristics = [
  {
    title: 'Works with billing operations',
    description:
      'Organizations whose work touches invoicing, receivables, payments or reconciliation for their own clients.',
  },
  {
    title: 'Serves a defined customer base',
    description:
      'An existing client relationship or market focus the partnership would serve, rather than a speculative one.',
  },
  {
    title: 'Has relevant capability',
    description:
      'Implementation, advisory, technical or operational capability the partnership would draw on.',
  },
  {
    title: 'Can meet program obligations',
    description: (
      <>
        Participation carries obligations as well as elements —{' '}
        <span className="font-bold">
          both come from the program record
        </span>
        , not from this page.
      </>
    ),
  },
  {
    title: 'Operates where the program applies',
    description: (
      <>
        Program applicability varies.{' '}
        <span className="font-bold">
          No territory or country list is published here
        </span>
        ; the review process determines it.
      </>
    ),
  },
  {
    title: 'Builds an integration',
    description: (
      <>
        A technical fit may exist independently of a program relationship —{' '}
        <span className="font-semibold text-[#58729b]">
          Submit an Integration
        </span>{' '}
        is its own route.
      </>
    ),
  },
]

export default function WhoMayBeAFit() {
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
              max-w-[662px]
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
                Who may be a fit
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[662px]
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
              Six characteristics, stated as indicators rather than criteria.
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
              These describe the kind of organization the program is designed
              for.{' '}
              <span className="font-bold">They are not eligibility criteria</span>{' '}
              — eligibility is determined by the review process against the
              current program record.
            </p>
          </div>

          {/* CHARACTERISTICS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-5

              sm:grid-cols-2

              lg:grid-cols-3
            "
          >
            {characteristics.map((item) => (
              <div
                key={item.title}
                className="
                  flex
                  min-h-[176px]
                  w-full
                  flex-col
                  items-start
                  gap-1.5
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  px-5
                  py-5
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                "
              >
                {/* TITLE */}
                <h3
                  className="
                    !m-0
                    w-full
                    text-sm
                    font-bold
                    leading-6
                    text-[#091127]
                  "
                >
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    !m-0
                    w-full
                    text-xs
                    font-normal
                    leading-5
                    text-[#5d7192]
                  "
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}