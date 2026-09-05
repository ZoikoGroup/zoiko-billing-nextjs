import Link from "next/link";

const trustItems = [
  {
    title: "Role-based schedule actions",
    description:
      "Create, activate, pause, revise, backfill and retire are separately permissioned.",
  },
  {
    title: "Full audit evidence",
    description:
      "Definition, version, approval, run, exception and next occurrence all leave evidence.",
  },
  {
    title: "Operational data protection",
    description:
      "Contract, customer and operational timing data is protected in access and handling.",
  },
  {
    title: "Least-privilege scheduler",
    description:
      "The scheduler and its downstream actions run under a minimum-scope service identity.",
  },
  {
    title: "Retention and incidents",
    description:
      "Defined retention treatment, and a defined path when something goes wrong.",
  },
  {
    title: "Nothing sensitive in analytics",
    description:
      "No sensitive schedule, customer or financial data in ordinary analytics or logs.",
  },
];

export default function TrustPrivacySecurity() {
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
                Trust, privacy and security
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
              Timing controls are operational controls.
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
              Who may activate, pause, backfill or retire a schedule is as
              consequential as any amount decision, and it is governed the
              same way.
            </p>
          </div>

          {/* =========================================================
              TRUST CONTROLS
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

              lg:grid-cols-3
            "
          >
            {trustItems.map((item) => (
              <div
                key={item.title}
                className="
                  flex
                  min-h-[180px]
                  flex-col
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  px-6
                  py-6
                  shadow-[0_4px_14px_rgba(15,23,42,0.035)]
                "
              >
                <h3
                  className="
                    !m-0
                    text-base
                    font-semibold
                    leading-6
                    text-[#091127]
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    !m-0
                    mt-2
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
              SCOPE BOUNDARY
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
              Scope boundary
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
              Internal queue, scheduler and security architecture are never
              published. Scheduling controls do not replace contractual, tax
              or accounting review.
            </p>
          </div>

          {/* =========================================================
              CTA
          ========================================================= */}
          <div
            className="
              mt-8
              flex
              w-full
              flex-col
              items-center
              justify-center
              gap-3

              sm:flex-row
              sm:flex-wrap
            "
          >
            {/* PRIMARY CTA */}
            <Link
              href="/security-overview"
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
              Review security and trust
            </Link>

            {/* SECONDARY CTA */}
            <Link
              href="/privacy-and-data-governance"
              className="
                inline-flex
                min-h-11
                items-center
                justify-center
                gap-2
                px-5
                py-2.5
                text-base
                font-normal
                leading-6
                !text-[#5d7192]
                no-underline
                outline-none
                transition-colors
                hover:!text-[#091127]
              "
            >
              <span>Read the privacy notice</span>

              <span
                aria-hidden="true"
                className="text-base font-bold leading-6"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}