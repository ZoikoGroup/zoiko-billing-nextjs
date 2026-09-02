import React from 'react'

const destinations = [
  {
    title: 'Apply',
    content: (
      <>
        <span className="font-semibold text-[#2563eb]">
          Become a Partner
        </span>{' '}
        is the canonical application.{' '}
        <strong>Submitting does not create a relationship</strong>, and no
        timeline is promised.
      </>
    ),
  },
  {
    title: 'Already a partner',
    content: (
      <>
        <span className="font-semibold text-[#2563eb]">Partner Portal</span>{' '}
        where launched and authorized. Access requires a current approved
        relationship and your role.
      </>
    ),
  },
  {
    title: 'Build an integration',
    content: (
      <>
        <span className="font-semibold text-[#2563eb]">
          Submit an Integration
        </span>
        . Independent of program status in both directions.
      </>
    ),
  },
  {
    title: 'Find an existing partner',
    content: (
      <>
        <span className="font-semibold text-[#2563eb]">
          Technology Partners
        </span>{' '}
        lists approved public relationships —{' '}
        <strong>a directory, not an application route</strong>.
      </>
    ),
  },
  {
    title: 'Buying Zoiko Billing',
    content: (
      <>
        <span className="font-semibold text-[#2563eb]">Contact</span> for
        commercial enquiries. <strong>Buyer intent is not partner intent</strong>,
        and this route is slower for it.
      </>
    ),
  },
  {
    title: 'Product support',
    content: (
      <>
        <span className="font-semibold text-[#2563eb]">Help Center</span> and{' '}
        <span className="font-semibold text-[#2563eb]">
          Contact Support
        </span>
        . Never collected through a partner route.
      </>
    ),
  },
]

export default function WhereToGoNext() {
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

          xl:px-24
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
            gap-11
            px-0

            md:px-7
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
                Where to go next
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
              Six destinations, by what you are actually trying to do.
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
              This page explains the model. Every action it describes happens
              somewhere else.
            </p>
          </div>

          {/* DESTINATIONS */}
          <div className="w-full space-y-3">
            {destinations.map((destination) => (
              <div
                key={destination.title}
                className="
                  w-full
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  px-5
                  py-5
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
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
                  {destination.title}
                </h3>

                <div
                  className="
                    mt-1.5
                    max-w-[900px]
                    text-xs
                    font-normal
                    leading-5
                    text-[#5d7192]
                  "
                >
                  {destination.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}