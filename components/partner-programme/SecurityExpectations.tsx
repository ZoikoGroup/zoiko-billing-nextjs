import React from 'react'

const expectations = [
  {
    expectation: 'Customer data stays governed',
    practice: (
      <>
        Where a partner handles customer data,{' '}
        <span className="font-semibold text-[#2563eb]">
          Privacy &amp; Data Governance
        </span>{' '}
        and the applicable agreement govern —{' '}
        <strong>not the program page</strong>
      </>
    ),
  },
  {
    expectation: 'No credentials, ever',
    practice: (
      <>
        <strong>
          No Zoiko process asks a partner for an API key, password or secret
        </strong>
        , at any stage, through any partner route
      </>
    ),
  },
  {
    expectation: 'Assurance is not inherited',
    practice: (
      <>
        A partner cannot cite Zoiko&apos;s assurance evidence as their own, and{' '}
        <strong>Zoiko does not cite a partner&apos;s as ours</strong>
      </>
    ),
  },
  {
    expectation: 'Security findings have a route',
    practice: (
      <>
        <span className="font-semibold text-[#2563eb]">
          Responsible Disclosure
        </span>{' '}
        — <strong>never a partner or program channel</strong>
      </>
    ),
  },
  {
    expectation: 'Brand usage is scoped',
    practice: (
      <>
        Rights carry a version and usage terms;{' '}
        <strong>availability of an asset is not permission for a use</strong>
      </>
    ),
  },
]

export default function SecurityExpectations() {
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
                Trust, privacy &amp; security expectations
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
              Five expectations, and one thing never requested.
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
              A partner relationship often involves a partner&apos;s own
              customers, which raises obligations neither party should discover
              late.
            </p>
          </div>

          {/* DESKTOP TABLE */}
          <div
            className="
              hidden
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
              md:block
            "
          >
            {/* HEADER */}
            <div className="grid grid-cols-[256px_minmax(0,1fr)] bg-[#fafbfc]">
              <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                  Expectation
                </span>
              </div>

              <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                  In practice
                </span>
              </div>
            </div>

            {/* ROWS */}
            {expectations.map((item, index) => (
              <div
                key={item.expectation}
                className={`grid grid-cols-[256px_minmax(0,1fr)] ${
                  index !== expectations.length - 1
                    ? 'border-b border-[#edf0f4]'
                    : ''
                }`}
              >
                <div className="px-4 py-3.5">
                  <span className="text-sm font-semibold leading-5 text-[#091127]">
                    {item.expectation}
                  </span>
                </div>

                <div className="px-4 py-3.5 text-sm font-normal leading-5 text-[#5d7192]">
                  {item.practice}
                </div>
              </div>
            ))}
          </div>

          {/* MOBILE CARDS */}
          <div className="flex w-full flex-col gap-3 md:hidden">
            {expectations.map((item) => (
              <div
                key={item.expectation}
                className="
                  w-full
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  p-5
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                "
              >
                <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                  Expectation
                </p>

                <p className="!m-0 mt-1.5 text-sm font-semibold leading-5 text-[#091127]">
                  {item.expectation}
                </p>

                <p className="!m-0 mt-4 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                  In practice
                </p>

                <div className="mt-1.5 text-sm font-normal leading-6 text-[#5d7192]">
                  {item.practice}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}