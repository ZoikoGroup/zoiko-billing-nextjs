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
    <section className="w-full bg-sky-950">
      <div className="mx-auto w-full max-w-[1220px] px-6 py-16 sm:px-8 lg:px-12 lg:py-24">

        {/* =========================================================
            HERO
        ========================================================= */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:gap-16">

          {/* LEFT */}
          <div className="flex-1">
            <div className="mb-5 flex items-center gap-2.5">
              <div className="h-0.5 w-5 shrink-0 rounded-xs bg-gradient-to-r from-color-cyan-42 to-color-blue-58" />

              <span
                className="text-xs font-medium uppercase leading-4 tracking-wider !text-color-cyan-63"
                style={{ color: "#8BE7F5" }}
              >
                Timezone and calendar
              </span>
            </div>

            <h2
              className="max-w-[638px] text-4xl font-medium leading-tight sm:text-5xl sm:leading-[53.82px]"
              style={{ color: "#FFFFFF" }}
            >
              Keep local time and
              <br className="hidden sm:block" />
              business context
              <br className="hidden sm:block" />
              separate.
            </h2>
          </div>

          {/* RIGHT */}
          <div className="flex-1 lg:max-w-[529px]">
            <p
              className="text-base font-normal leading-8"
              style={{ color: "#9CC1D4" }}
            >
              A schedule runs on the timezone it was configured with — not the
              one the viewer happens to be sitting in.
            </p>
          </div>
        </div>

        {/* =========================================================
            TIMEZONE RULES
        ========================================================= */}
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {timezoneItems.map((item) => (
            <div
              key={item.title}
              className="flex min-h-[220px] flex-col bg-sky-950 px-5 py-5"
            >
              <h3
                className="pb-2 text-sm font-semibold leading-5"
                style={{ color: "#FFFFFF" }}
              >
                {item.title}
              </h3>

              <p
                className="text-sm font-normal leading-5"
                style={{ color: "#9CC1D4" }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* =========================================================
            OCCURRENCE RESOLUTION
        ========================================================= */}
        <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">

          {/* LEFT CONTENT */}
          <div className="flex w-full flex-col gap-2 lg:w-1/2">

            <h3
              className="text-lg font-semibold leading-7"
              style={{ color: "#FFFFFF" }}
            >
              How one occurrence resolves
            </h3>

            <p
              className="max-w-[560px] text-sm font-normal leading-6"
              style={{ color: "#9CC1D4" }}
            >
              The governing timezone, the resolved UTC instant and the policy
              used are all recorded together, so the same occurrence reads the
              same way from anywhere.
            </p>

            {/* CTA GROUP */}
            <div className="mt-3 flex flex-wrap items-center gap-3">

              {/* PRIMARY CTA */}
              <Link
                href="/global-billing"
                className="inline-flex min-h-11 items-center justify-center rounded-lg px-5 py-2.5 text-base font-normal leading-6 no-underline outline-none transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: "#FFFFFF",
                  color: "#082F49",
                }}
              >
                <span
                  style={{
                    color: "#082F49",
                  }}
                >
                  Explore global billing
                </span>
              </Link>

              {/* SECONDARY CTA */}
              <Link
                href="/availability"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/20 px-5 py-2.5 text-base font-normal leading-6 no-underline outline-none transition-colors hover:border-white/40 hover:bg-white/10"
                style={{
                  color: "#FFFFFF",
                }}
              >
                <span
                  style={{
                    color: "#FFFFFF",
                  }}
                >
                  Check availability
                </span>
              </Link>
            </div>
          </div>

          {/* IMAGE */}
          <div className="w-full lg:w-1/2">
            <div className="overflow-hidden rounded-2xl border border-zinc-200/20">
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
        <div className="mt-12 rounded-tr-2xl rounded-br-2xl border-l-[3px] border-color-cyan-42 bg-white/[0.06] px-7 py-7">

          <div
            className="text-[9.9px] font-normal uppercase leading-4 tracking-wide"
            style={{ color: "#8BE7F5" }}
          >
            Calendar boundary
          </div>

          <p
            className="mt-2 max-w-[900px] text-base font-normal leading-7"
            style={{ color: "#B6D2DF" }}
          >
            Holiday calendars and statutory timing are claimed only where
            current evidence exists. Language and browser timezone must never
            silently change a billing schedule.
          </p>

        </div>
      </div>
    </section>
  );
}