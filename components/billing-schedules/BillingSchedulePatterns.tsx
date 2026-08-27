import Link from "next/link";

const patterns = [
  {
    label: "Single",
    title: "One-time date and time",
    description:
      "A single occurrence at a defined local date and time, with no recurrence.",
    example: "e.g. 15 Sep 2026 · 09:00 local",
  },
  {
    label: "Interval",
    title: "Verified repeating intervals",
    description:
      "Daily, weekly, monthly, annual or another interval verified for your configuration.",
    example: "e.g. monthly on day 1",
  },
  {
    label: "Calendar",
    title: "Calendar or business day",
    description:
      "Calendar-day timing, or supported business-day behaviour where it is verified.",
    example: "e.g. first business day of month",
  },
  {
    label: "Anchor",
    title: "Short-month treatment",
    description:
      "An explicit day-of-month anchor rule for months where the chosen day does not exist.",
    example: "e.g. day 31 → last day of month",
  },
  {
    label: "Anchor",
    title: "End-of-month or anniversary",
    description:
      "End-of-month and anniversary logic, available only where it has been verified.",
    example: "Where verified only",
  },
  {
    label: "Event",
    title: "Usage or event-driven timing",
    description:
      "Timing derived from a usage or event condition, where that is supported for you.",
    example: "Where supported only",
  },
  {
    label: "Manual",
    title: "Manual or API execution",
    description:
      "A distinct mechanism for starting a schedule on demand rather than by pattern.",
    example: "Separate from recurrence",
  },
  {
    label: "Boundary",
    title: "Timing is not terms",
    description:
      "A recurrence pattern says when work becomes eligible — nothing about amounts or contracts.",
    example: "See Charges & Adjustments",
    boundary: true,
  },
];

export default function BillingSchedulePatterns() {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          px-5
          pb-14
          pt-12

          sm:px-8
          sm:pb-16
          sm:pt-16

          md:px-10
          md:pb-20

          lg:px-14
          lg:pb-24
          lg:pt-24

          xl:px-20
        "
      >
        <div className="mx-auto w-full max-w-[1220px]">
          {/* HEADER */}
          <div
            className="
              flex
              w-full
              flex-col
              gap-7

              lg:flex-row
              lg:items-end
              lg:justify-between
              lg:gap-14
            "
          >
            {/* LEFT CONTENT */}
            <div className="min-w-0 flex-1">
              {/* EYEBROW */}
              <div className="mb-5 flex items-center gap-3 sm:mb-6">
                <span
                  className="
                    h-px
                    w-6
                    shrink-0
                    bg-blue-600
                    opacity-75
                  "
                />

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
                  Patterns
                </span>
              </div>

              {/* HEADING */}
              <h2
                className="
                  !m-0
                  max-w-[700px]
                  text-[40px]
                  font-extrabold
                  leading-[1.08]
                  tracking-[-0.035em]
                  text-slate-900

                  sm:text-[46px]

                  md:text-[50px]

                  lg:text-[48px]
                "
              >
                Supported timing concepts, stated plainly.
              </h2>
            </div>

            {/* RIGHT DESCRIPTION */}
            <div className="w-full lg:max-w-[529px]">
              <p
                className="
                  !m-0
                  text-[15px]
                  font-normal
                  leading-7
                  text-[#5d7192]

                  sm:text-base
                  sm:leading-8
                "
              >
                Not every recurrence standard or calendar is supported.
                Recurring timing on its own defines no price, proration,
                usage or contract term.
              </p>
            </div>
          </div>

          {/* PATTERN CARDS */}
          <div
            className="
              mt-10
              -mx-5
              overflow-x-auto
              px-5
              pb-4
              scrollbar-hide

              sm:-mx-8
              sm:px-8

              md:-mx-10
              md:px-10

              lg:mx-0
              lg:mt-14
              lg:overflow-visible
              lg:px-0
            "
          >
            <div
              className="
                flex
                min-w-max
                gap-4

                lg:grid
                lg:min-w-0
                lg:grid-cols-4
                lg:gap-4
              "
            >
              {patterns.map((pattern, index) => (
                <article
                  key={`${pattern.title}-${index}`}
                  className={`
                    flex
                    h-[208px]
                    w-[256px]
                    shrink-0
                    flex-col
                    rounded-2xl
                    border
                    px-5
                    py-6

                    ${
                      pattern.boundary
                        ? "border-[#8aa2c2] bg-[#f1f4f7]"
                        : "border-[#e1e6ed] bg-white"
                    }
                  `}
                >
                  {/* LABEL */}
                  <span
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      leading-4
                      tracking-[0.12em]
                      text-[#7890b2]
                    "
                  >
                    {pattern.label}
                  </span>

                  {/* TITLE */}
                  <h3
                    className="
                      !m-0
                      mt-2
                      text-base
                      font-semibold
                      leading-5
                      text-slate-900
                    "
                  >
                    {pattern.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      !m-0
                      mt-3
                      text-sm
                      font-normal
                      leading-5
                      text-[#5d7192]
                    "
                  >
                    {pattern.description}
                  </p>

                  {/* EXAMPLE */}
                  <div
                    className="
                      mt-auto
                      flex
                      min-h-8
                      items-center
                      overflow-hidden
                      rounded-full
                      border
                      border-[#e3e7ec]
                      bg-[#f8fafc]
                      px-2.5
                      text-[10px]
                      font-normal
                      leading-4
                      text-[#5d7192]
                      whitespace-nowrap
                    "
                  >
                    {pattern.example}
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 flex justify-center lg:mt-10">
            <Link
              href="/charges-and-adjustments"
              className="
                !inline-flex
                !min-h-11
                !w-full
                !items-center
                !justify-center
                !rounded-lg
                !border
                !border-blue-600
                !bg-blue-600
                !px-5
                !py-2.5
                !text-center
                !text-base
                !font-normal
                !leading-6
                !text-white
                !no-underline
                transition
                hover:!border-blue-700
                hover:!bg-blue-700

                sm:!w-auto
              "
            >
              Explore Charges &amp; Adjustments
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}