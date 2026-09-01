import Link from "next/link";

export default function AuthorityBoundaries() {
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
                Authority Boundaries
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
              What this page owns, and what it
              never claims.
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
              Guidance can recommend a safe sequence. It cannot imply that
              anything happens automatically.
            </p>
          </div>

          {/* CARDS */}
          <div
            className="
              flex
              w-full
              flex-col
              gap-5

              lg:flex-row
              lg:items-stretch
            "
          >
            {/* OWNED HERE */}
            <div
              className="
                flex
                flex-1
                flex-col
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                px-6
                py-6
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

                lg:min-h-[230px]
              "
            >
              <h3
                className="
                  !m-0
                  text-lg
                  font-bold
                  leading-7
                  text-[#091127]
                "
              >
                Owned here
              </h3>

              <p
                className="
                  !m-0
                  mt-2
                  text-sm
                  font-normal
                  leading-5
                  text-[#5d7192]
                "
              >
                Readiness assessment, implementation phases, prerequisites,
                stakeholder and decision ownership, data preparation
                principles, configuration planning, integration readiness,
                test strategy, cutover planning, training and adoption, change
                control, stabilization, implementation risks, go-live criteria,
                and reusable checklists.
              </p>
            </div>

            {/* AUTHORITATIVE ELSEWHERE */}
            <div
              className="
                flex
                flex-1
                flex-col
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-[#f2f4f7]
                px-6
                py-6

                lg:min-h-[230px]
              "
            >
              <h3
                className="
                  !m-0
                  text-lg
                  font-bold
                  leading-7
                  text-[#091127]
                "
              >
                Authoritative elsewhere
              </h3>

              <div
                className="
                  mt-2
                  space-y-1
                  text-sm
                  font-normal
                  leading-5
                  text-[#5d7192]
                "
              >
                <p className="!m-0">
                  Current product behavior →{" "}
                  <Link
                    href="/documentation"
                    className="font-semibold text-blue-600 hover:underline"
                  >
                    Documentation
                  </Link>
                  .
                </p>

                <p className="!m-0">
                  API, auth and webhook contracts →{" "}
                  <Link
                    href="/developers"
                    className="font-semibold text-blue-600 hover:underline"
                  >
                    Developers
                  </Link>
                  .
                </p>

                <p className="!m-0">
                  Account troubleshooting →{" "}
                  <Link
                    href="/help-center"
                    className="font-semibold text-blue-600 hover:underline"
                  >
                    Help Center
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/contact-support"
                    className="font-semibold text-blue-600 hover:underline"
                  >
                    Contact Support
                  </Link>
                  .
                </p>

                <p className="!m-0">
                  Support commitments →{" "}
                  <Link
                    href="/support-policy"
                    className="font-semibold text-blue-600 hover:underline"
                  >
                    Support Policy
                  </Link>
                  .
                </p>

                <p className="!m-0">
                  Plan eligibility →{" "}
                  <Link
                    href="/pricing"
                    className="font-semibold text-blue-600 hover:underline"
                  >
                    Pricing
                  </Link>
                  .
                </p>

                <p className="!m-0">
                  Security assurance →{" "}
                  <Link
                    href="/trust"
                    className="font-semibold text-blue-600 hover:underline"
                  >
                    Trust
                  </Link>
                  .
                </p>

                <p className="!m-0">
                  Service health →{" "}
                  <Link
                    href="/system-status"
                    className="font-semibold text-blue-600 hover:underline"
                  >
                    System Status
                  </Link>
                  .
                </p>

                <p className="!m-0">
                  Legal, tax, accounting and jurisdictional obligations → a
                  qualified professional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}