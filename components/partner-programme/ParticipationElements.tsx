import React from 'react'

const rows = [
  {
    elementClass: 'Program resources',
    requires:
      'Which resources, for which path, at which relationship state.',
    neverAssumed: 'No training or certification program is invented',
  },
  {
    elementClass: 'Technical access',
    requires:
      'Scope and route, per relationship and integration state.',
    neverAssumed: (
      <>
        <span className="font-bold">
          No sandbox, API entitlement or key
        </span>{' '}
        — those are Developers&apos; authority
      </>
    ),
  },
  {
    elementClass: 'Commercial mechanism',
    requires: 'The exact mechanism, its terms and its authority.',
    neverAssumed:
      'No referral fee, commission, margin or co-sell right',
  },
  {
    elementClass: 'Directory presence',
    requires: (
      <>
        An approved relationship <span className="font-bold">and</span>{' '}
        publication rights.
      </>
    ),
    neverAssumed: (
      <>
        <span className="font-bold">Listing is never automatic</span> — see{' '}
        <span className="font-semibold text-[#58729b]">
          Technology Partners
        </span>
      </>
    ),
  },
  {
    elementClass: 'Brand usage',
    requires:
      'Rights version, entitled relationship state and usage terms.',
    neverAssumed: (
      <>
        <span className="font-bold">
          No logo or trademark permission
        </span>{' '}
        from membership alone
      </>
    ),
  },
  {
    elementClass: 'Support arrangement',
    requires:
      'The approved arrangement, if any, for that path.',
    neverAssumed: (
      <>
        <span className="font-bold">No support tier or entitlement</span> —{' '}
        <span className="font-semibold text-[#58729b]">
          Support Policy
        </span>{' '}
        governs
      </>
    ),
  },
]

export default function ParticipationElements() {
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
                What participation may include
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
              Six element classes, and every one is conditional.
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
              &quot;May include&quot; is doing real work in that heading. Each
              element renders only where the current program record establishes
              it for a specific path —{' '}
              <span className="font-bold">
                and none is established by this wireframe
              </span>
              .
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
            <div
              className="
                grid
                grid-cols-[176px_minmax(0,384px)_minmax(0,1fr)]
                bg-[#fafbfc]
              "
            >
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
                  Element class
                </span>
              </div>

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
                  Requires from the record
                </span>
              </div>

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
                  Never assumed
                </span>
              </div>
            </div>

            {/* ROWS */}
            {rows.map((row, index) => (
              <div
                key={row.elementClass}
                className={`
                  grid
                  grid-cols-[176px_minmax(0,384px)_minmax(0,1fr)]
                  ${
                    index !== rows.length - 1
                      ? 'border-b border-[#edf0f4]'
                      : ''
                  }
                `}
              >
                {/* ELEMENT CLASS */}
                <div className="px-4 py-3.5">
                  <span
                    className="
                      text-sm
                      font-semibold
                      leading-5
                      text-[#091127]
                    "
                  >
                    {row.elementClass}
                  </span>
                </div>

                {/* REQUIRES */}
                <div className="px-4 py-3.5">
                  <span
                    className="
                      text-sm
                      font-normal
                      leading-5
                      text-[#5d7192]
                    "
                  >
                    {row.requires}
                  </span>
                </div>

                {/* NEVER ASSUMED */}
                <div className="px-4 py-3.5">
                  <span
                    className="
                      text-sm
                      leading-5
                      text-[#5d7192]
                    "
                  >
                    {row.neverAssumed}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* MOBILE CARDS */}
          <div className="flex w-full flex-col gap-4 md:hidden">
            {rows.map((row) => (
              <div
                key={row.elementClass}
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
                {/* ELEMENT CLASS */}
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
                    Element class
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
                    {row.elementClass}
                  </p>
                </div>

                {/* REQUIRES */}
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
                    Requires from the record
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
                    {row.requires}
                  </p>
                </div>

                {/* NEVER ASSUMED */}
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
                    Never assumed
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
                    {row.neverAssumed}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}