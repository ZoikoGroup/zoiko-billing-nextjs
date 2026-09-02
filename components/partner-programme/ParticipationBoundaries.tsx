import React from 'react'

const boundaries = [
  {
    title: 'Not an endorsement',
    description: (
      <>
        Partner status does not mean Zoiko guarantees a partner&apos;s
        services, outcomes or compliance. A customer choosing a partner is
        making their own assessment.
      </>
    ),
  },
  {
    title: 'Not a certification',
    description: (
      <>
        Program membership does not itself certify an integration, a security
        posture, a service quality or a professional competence.{' '}
        <span className="font-bold">Assurance evidence lives in </span>
        <span className="font-semibold underline">
          Trust Center
        </span>{' '}
        and is not conferred by a relationship.
      </>
    ),
  },
  {
    title: 'Not exclusivity',
    description: (
      <>
        No exclusive territory, category or customer relationship exists unless
        an approved agreement explicitly says so.{' '}
        <span className="font-bold">Membership alone grants none.</span>
      </>
    ),
  },
  {
    title: 'Not guaranteed business',
    description: (
      <>
        No guarantee of leads, customer introductions, revenue, transactions or
        sales volume. A program is a participation model, not a pipeline.
      </>
    ),
  },
  {
    title: 'Not technical approval',
    description: (
      <>
        Partner acceptance does not automatically approve or publish an
        integration.{' '}
        <span className="font-semibold underline">
          Submit an Integration
        </span>{' '}
        owns that review, and its outcome is independent.
      </>
    ),
  },
  {
    title: 'Not a customer entitlement change',
    description: (
      <>
        A partner relationship does not change a customer&apos;s plan, support
        or availability unless product and commercial authority says so.{' '}
        <span className="font-bold">
          Working with a partner does not upgrade anyone.
        </span>
      </>
    ),
  },
  {
    title: 'Not legal agency',
    description: (
      <>
        No agency, employment, joint venture or authority to bind is implied by
        this page.{' '}
        <span className="font-bold">
          A partner cannot commit Zoiko to anything
        </span>
        , and public program copy creates no such power.
      </>
    ),
  },
]

export default function ParticipationBoundaries() {
  return (
    <section 
    id = "participation-boundaries"
    className="w-full bg-[#f7f8fa]">
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
                What participation does not mean
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
              Seven misreadings, stated as plainly as possible.
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
              Each of these is something a partner or their customer may
              reasonably infer from the existence of a program. None of them
              follows.
            </p>
          </div>

          {/* BOUNDARY CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4

              sm:grid-cols-2

              lg:grid-cols-1
            "
          >
            {boundaries.map((item) => (
              <div
                key={item.title}
                className="
                  w-full
                  rounded-[10px]
                  border
                  border-[#e9b7b7]
                  bg-[#fffafa]
                  px-4
                  py-4
                "
              >
                {/* TITLE */}
                <h3
                  className="
                    !m-0
                    text-sm
                    font-bold
                    leading-6
                    text-[#8f2626]
                  "
                >
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    !m-0
                    mt-1.5
                    text-xs
                    font-normal
                    leading-5
                    text-[#a33333]
                  "
                >
                  {item.description}
                </p>
              </div>
            ))}

            {/* WHY THESE ARE CARDS */}
            <div
              className="
                w-full
                rounded-[10px]
                border
                border-[#dfe5ee]
                bg-[#fafbfc]
                px-4
                py-4
              "
            >
              <h3
                className="
                  !m-0
                  text-sm
                  font-bold
                  leading-6
                  text-[#091127]
                "
              >
                Why these are cards, not footnotes
              </h3>

              <p
                className="
                  !m-0
                  mt-1.5
                  text-xs
                  font-normal
                  leading-5
                  text-[#5d7192]
                "
              >
                Boundary language placed in small print at the bottom of a
                partner page is read by almost nobody and relied on by the
                company anyway. Giving each misreading equal visual weight to
                the proposition is the only way the boundary actually
                functions as one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}