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
              max-w-[700px]
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
                Patterns
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[700px]
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
              Supported timing concepts, stated plainly.
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
              Not every recurrence standard or calendar is supported.
              Recurring timing on its own defines no price, proration, usage
              or contract term.
            </p>
          </div>

          {/* PATTERN CARDS */}
          <div
            className="
              w-full
              overflow-hidden
              rounded-2xl
            "
          >
            {/* DESKTOP GRID */}
            <div
              className="
                hidden

                lg:grid
                lg:grid-cols-4
                lg:gap-4
              "
            >
              {patterns.map((pattern, index) => (
                <PatternCard
                  key={`${pattern.title}-${index}`}
                  pattern={pattern}
                />
              ))}
            </div>

            {/* MOBILE / TABLET HORIZONTAL SCROLL */}
            <div
              className="
                -mx-5
                overflow-x-auto
                px-5
                pb-4
                scrollbar-hide

                sm:-mx-8
                sm:px-8

                md:-mx-10
                md:px-10

                lg:hidden
              "
            >
              <div className="flex min-w-max gap-4">
                {patterns.map((pattern, index) => (
                  <PatternCard
                    key={`${pattern.title}-${index}`}
                    pattern={pattern}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex w-full justify-center pt-1">
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

function PatternCard({
  pattern,
}: {
  pattern: (typeof patterns)[number];
}) {
  return (
    <article
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
            ? "border-[#b9c6d6] bg-[#eef1f5]"
            : "border-[#dfe5ee] bg-white"
        }

        shadow-[0_1px_2px_rgba(15,23,42,0.02)]
      `}
    >
      {/* LABEL */}
      <span
        className="
          text-[9px]
          font-bold
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
          !text-base
          !font-semibold
          !leading-5
          !text-[#091127]
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
          border-[#dfe5ee]
          bg-[#fafbfc]
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
  );
}