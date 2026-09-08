"use client";

import Link from "next/link";

const rows = [
  {
    type: "Executive quote",
    content: (
      <>
        Exact approved wording, speaker,{" "}
        <strong>title at publication</strong>, context and approval date.
        Reuse scope recorded — a quote cleared for one release does not travel.
      </>
    ),
  },
  {
    type: "Leadership title",
    content: (
      <>
        Sourced from the Leadership Registry.{" "}
        <strong>A historical title is preserved on an old publication</strong>{" "}
        where it was correct at the publication date.
      </>
    ),
  },
  {
    type: "Customer reference",
    content: (
      <>
        Permission and claim evidence required.{" "}
        <Link
          href="/customer-stories"
          className="
            font-semibold
            !text-[#5276ad]
            !hover:text-[#091127]
            hover:underline
          "
        >
          Customer Stories
        </Link>{" "}
        <strong>remains the outcome-proof authority</strong> — a press release
        does not become a shortcut around its consent gate.
      </>
    ),
  },
  {
    type: "Partner reference",
    content: (
      <>
        Relationship and rights source required, with{" "}
        <strong>
          no implied endorsement, exclusivity, reseller status or integration
          capability beyond evidence
        </strong>
        .
      </>
    ),
  },
  {
    type: "Financial or growth number",
    content: (
      <>
        Finance, Legal and Analytics authority, with a stated definition, date
        and scope.
      </>
    ),
  },
  {
    type: "Market or customer count",
    content: (
      <>
        Canonical source, period and denominator or population —{" "}
        <strong>otherwise omitted</strong>.
      </>
    ),
  },
  {
    type: "Award or certification",
    content: (
      <>
        Source and scope required.{" "}
        <Link
          href="/trust-center"
          className="
            font-semibold
            !text-[#5276ad]
            !hover:text-[#091127]
            hover:underline
          "
        >
          Trust Center
        </Link>{" "}
        <strong>remains the assurance authority</strong> for anything security
        or compliance related.
      </>
    ),
  },
];

export default function QuoteReferenceGovernance() {
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

            sm:gap-7

            md:gap-8
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
                Quote, number and reference governance
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[1000px]
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
              Seven content types, each with a
             
              control that must clear before
              
              publication.
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
              A press release is where unverified claims most often enter a
              company&apos;s public record, because it is written to persuade
              and read as fact.
            </p>
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
              {rows.map((row, index) => (
                <div
                  key={row.type}
                  className={`
                    grid
                    grid-cols-[224px_minmax(0,1fr)]
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* CONTENT TYPE */}
                  <div
                    className="
                      bg-[#fafbfc]
                      border-r
                      border-[#edf0f4]
                      px-4
                      py-3
                    "
                  >
                    <span
                      className="
                        text-xs
                        font-bold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {row.type}
                    </span>
                  </div>

                  {/* GOVERNANCE */}
                  <div className="px-4 py-3">
                    <span
                      className="
                        text-xs
                        font-normal
                        leading-5
                        text-[#091127]
                      "
                    >
                      {row.content}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE / SMALL TABLET CARDS */}
            <div className="flex flex-col md:hidden">
              {rows.map((row, index) => (
                <div
                  key={row.type}
                  className={`
                    p-5
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* CONTENT TYPE */}
                  <div className="mb-3">
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
                      Content type
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
                      {row.type}
                    </p>
                  </div>

                  {/* GOVERNANCE */}
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
                      Publication control
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
                      {row.content}
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