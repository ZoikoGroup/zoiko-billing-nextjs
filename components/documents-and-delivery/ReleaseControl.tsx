"use client";

import Link from "next/link";

const releaseChecks = [
  {
    number: "01",
    title: "Document state and version",
    description:
      "The document must be in a releasable state, and the version is pinned to the decision.",
  },
  {
    number: "02",
    title: "Release permission and scope",
    description:
      "The actor holds release permission for this document class, entity and recipient scope.",
  },
  {
    number: "03",
    title: "Approval policy and decision",
    description:
      "Any required approval has a recorded decision before the attempt is created.",
  },
  {
    number: "04",
    title: "Recipient and endpoint validation",
    description:
      "The resolved recipient and endpoint are active, permitted and suitable for this document.",
  },
  {
    number: "05",
    title: "Sensitivity and channel suitability",
    description:
      "Content classification is checked against what the chosen channel is allowed to carry.",
  },
  {
    number: "06",
    title: "Timing, hold and embargo",
    description:
      "Scheduled send time, hold or manual release where those controls are supported.",
  },
  {
    number: "07",
    title: "External and cross-border disclosure",
    description:
      "External-domain or cross-border disclosure checks where your policy requires them.",
  },
  {
    number: "08",
    title: "Recorded release decision",
    description:
      "Actor, approver, conditions, version and time all stay attached to the attempt.",
  },
];

export default function ReleaseControl() {
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
            gap-10

            sm:gap-12

            md:gap-14
          "
        >
          {/* =====================================================
              SECTION INTRO
          ===================================================== */}

          <div
            className="
              flex
              w-full
              max-w-[760px]
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
                Release control
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[760px]
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
              Authorize the exact document, recipient and channel.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[720px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              Release is its own decision, evaluated against current
              permission and policy — not inherited from whoever approved the
              invoice.
            </p>
          </div>

          {/* =====================================================
              8 RELEASE CHECKS
          ===================================================== */}

          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-3

              sm:grid-cols-2
            "
          >
            {releaseChecks.map((item) => (
              <div
                key={item.number}
                className="
                  flex
                  min-h-[180px]
                  w-full
                  items-start
                  gap-4
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  px-5
                  py-5
                  shadow-[0_1px_2px_rgba(15,23,42,0.02)]

                  sm:px-6
                  sm:py-6
                "
              >
                {/* NUMBER */}
                <div
                  className="
                    flex
                    h-7
                    w-7
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-[#dfe5ee]
                    bg-[#f7f8fa]
                  "
                >
                  <span
                    className="
                      text-[10px]
                      font-semibold
                      leading-4
                      text-[#7890b2]
                    "
                  >
                    {item.number}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="min-w-0 flex-1">
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
              </div>
            ))}
          </div>

          {/* =====================================================
              RELEASE BOUNDARY
          ===================================================== */}

          <div
            className="
              w-full
              rounded-r-2xl
              border-l-2
              border-[#7890b2]
              bg-white
              px-5
              py-5
              shadow-[0_1px_2px_rgba(15,23,42,0.02)]

              sm:px-6
              sm:py-6
            "
          >
            <p
              className="
                !m-0
                text-[10px]
                font-bold
                uppercase
                leading-4
                tracking-[0.08em]
                text-[#7890b2]
              "
            >
              Release boundary
            </p>

            <p
              className="
                !m-0
                mt-2
                max-w-[900px]
                text-sm
                font-normal
                leading-6
                text-[#5d7192]

                sm:text-base
                sm:leading-7
              "
            >
              Approval applies to the exact document, recipient, channel and
              version reviewed. It authorizes the attempt — it never
              guarantees that the provider or the recipient will succeed.
            </p>
          </div>

          {/* =====================================================
              CTA
          ===================================================== */}

          <div className="flex w-full justify-center pt-1">
            <Link
              href="/roles-and-approvals"
              className="
                inline-flex
                min-h-11
                items-center
                justify-center
                rounded-lg
                bg-[#091127]
                px-5
                py-2
                text-base
                font-normal
                leading-6
                !text-white
                no-underline
                transition
                hover:bg-[#17213a]
              "
            >
              Explore Roles &amp; Approvals
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}