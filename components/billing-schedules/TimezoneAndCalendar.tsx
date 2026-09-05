import Link from "next/link";

const timezoneItems = [
  {
    title: "Timezone identifier",
    description:
      "An IANA or otherwise supported timezone identifier recorded on the schedule.",
  },
  {
    title: "Daylight-saving treatment",
    description:
      "Documented policy for gap and overlap transitions, with the resolved instant recorded.",
  },
  {
    title: "Business date and cutoff",
    description:
      "The local business date and cutoff that determine eligibility.",
  },
  {
    title: "Entity and market",
    description:
      "Issuing entity, market and jurisdiction context for the schedule.",
  },
  {
    title: "Holiday logic",
    description:
      "Holiday and non-working-day rules only where they have been verified.",
  },
  {
    title: "Currency and service period",
    description:
      "Charge currency and the service period the occurrence relates to.",
  },
  {
    title: "Locale is display only",
    description:
      "Display language never becomes the source of legal timing.",
  },
  {
    title: "Browser time is ignored",
    description:
      "A viewer's browser timezone never silently changes the schedule.",
  },
];

export default function TimezoneAndCalendar() {
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
          "
        >
          {/* =========================================================
              SECTION INTRO
          ========================================================= */}
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
                Timezone and calendar
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
              Keep local time and business context separate.
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
              A schedule runs on the timezone it was configured with — not the
              one the viewer happens to be sitting in.
            </p>
          </div>

          {/* =========================================================
              TIMEZONE RULES
          ========================================================= */}
          <div
            className="
              mt-10
              grid
              w-full
              grid-cols-1
              gap-3

              sm:mt-12
              sm:grid-cols-2

              lg:grid-cols-4
            "
          >
            {timezoneItems.map((item) => (
              <div
                key={item.title}
                className="
                  flex
                  min-h-[190px]
                  flex-col
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  px-5
                  py-5
                  shadow-[0_4px_14px_rgba(15,23,42,0.035)]
                "
              >
                <h3
                  className="
                    !m-0
                    pb-2
                    text-sm
                    font-semibold
                    leading-5
                    text-[#091127]
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    !m-0
                    text-sm
                    font-normal
                    leading-6
                    text-[#5d7192]
                  "
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* =========================================================
              OCCURRENCE RESOLUTION
          ========================================================= */}
          <div
            className="
              mt-10
              grid
              w-full
              grid-cols-1
              gap-8

              sm:mt-12

              lg:grid-cols-2
              lg:items-start
              lg:gap-12
            "
          >
            {/* LEFT CONTENT */}
            <div className="flex w-full flex-col">
              <div
                className="
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  p-6
                  shadow-[0_4px_14px_rgba(15,23,42,0.035)]
                "
              >
                <h3
                  className="
                    !m-0
                    text-lg
                    font-semibold
                    leading-7
                    text-[#091127]
                  "
                >
                  How one occurrence resolves
                </h3>

                <p
                  className="
                    !m-0
                    mt-2
                    max-w-[560px]
                    text-sm
                    font-normal
                    leading-6
                    text-[#5d7192]
                  "
                >
                  The governing timezone, the resolved UTC instant and the
                  policy used are all recorded together, so the same occurrence
                  reads the same way from anywhere.
                </p>

                {/* CTA GROUP */}
                <div
                  className="
                    mt-5
                    flex
                    flex-col
                    items-start
                    gap-3

                    sm:flex-row
                    sm:flex-wrap
                    sm:items-center
                  "
                >
                  {/* PRIMARY CTA */}
                  <Link
                    href="/global-billing"
                    className="
                      inline-flex
                      min-h-11
                      items-center
                      justify-center
                      rounded-lg
                      !bg-[#091127]
                      px-5
                      py-2.5
                      text-base
                      font-normal
                      leading-6
                      !text-white
                      no-underline
                      outline-none
                      transition-opacity
                      hover:opacity-90
                      focus:outline-none
                    "
                  >
                    Explore global billing
                  </Link>

                  {/* SECONDARY CTA */}
                  <Link
                    href="/integration-availability"
                    className="
                      inline-flex
                      min-h-11
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-[#dfe5ee]
                      bg-white
                      px-5
                      py-2.5
                      text-base
                      font-normal
                      leading-6
                      !text-[#5d7192]
                      no-underline
                      outline-none
                      transition-colors
                      hover:border-[#c8d2df]
                      hover:!text-[#091127]
                      focus:outline-none
                    "
                  >
                    Check availability
                  </Link>
                </div>
              </div>
            </div>

            {/* IMAGE */}
            <div className="w-full">
              <div
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                "
              >
                <img
                  src="/images/billing-schedules/timezone-resolution.png"
                  alt="Timezone occurrence resolution"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* =========================================================
              CALENDAR BOUNDARY
          ========================================================= */}
          <div
            className="
              mt-10
              w-full
              rounded-r-2xl
              border-l-[3px]
              border-[#7890b2]
              bg-white
              px-6
              py-7
              shadow-[0_4px_14px_rgba(15,23,42,0.035)]

              sm:mt-12
              sm:px-7
              sm:py-8
            "
          >
            <div
              className="
                text-[10px]
                font-bold
                uppercase
                leading-4
                tracking-[0.12em]
                text-[#7890b2]
              "
            >
              Calendar boundary
            </div>

            <p
              className="
                !m-0
                mt-2
                max-w-[900px]
                text-[15px]
                font-normal
                leading-7
                text-[#091127]

                sm:text-base
              "
            >
              Holiday calendars and statutory timing are claimed only where
              current evidence exists. Language and browser timezone must never
              silently change a billing schedule.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}