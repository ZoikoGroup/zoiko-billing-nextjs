"use client";

import Link from "next/link";

const contactPurposes = [
  {
    title: "Billing contact",
    description:
      "Receives invoices, credit notes and statements as routine billing correspondence.",
  },
  {
    title: "Finance contact",
    description:
      "Receives finance-facing documents where that separation is configured.",
  },
  {
    title: "Legal contact",
    description:
      "Receives documents that your policy routes to a legal recipient.",
  },
  {
    title: "Delivery contact",
    description:
      "A destination used specifically for document transport rather than commercial dialogue.",
  },
  {
    title: "Escalation contact",
    description:
      "Used when the primary route fails or a follow-up escalates.",
  },
  {
    title: "Fallback endpoint",
    description:
      "An alternate approved destination, used only where it has been configured.",
  },
];

const endpointTypes = [
  {
    title: "Email address",
    description:
      "The most common route, with provider evidence that varies by provider.",
  },
  {
    title: "Postal address",
    description:
      "Where a print or postal route is supported for that document and market.",
  },
  {
    title: "Portal identity",
    description:
      "A customer identity that documents are published to rather than sent at.",
  },
  {
    title: "API endpoint",
    description:
      "A system destination for programmatic document handoff.",
  },
  {
    title: "Other approved route",
    description:
      "Any additional channel that has been verified for your configuration.",
  },
];

const recordedPerEndpoint = [
  {
    title: "Authority and consent",
    description:
      "Whether this recipient is permitted to receive this class of document.",
  },
  {
    title: "Verification state",
    description:
      "Whether the endpoint itself has been verified, where verification applies.",
  },
  {
    title: "Language and channel preference",
    description:
      "The preferred document language and route for this recipient.",
  },
  {
    title: "Effective dates and status",
    description:
      "When the endpoint is valid, and whether it is currently active.",
  },
  {
    title: "Source",
    description:
      "Where the endpoint came from — manual entry, import or an approved integration.",
  },
];

export default function Recipients() {
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
                Recipients
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
              Who receives it, where, and on what authority.
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
              A contact is never automatically authorized for every document.
              Purpose, authority and verification are separate attributes.
            </p>
          </div>

          {/* =====================================================
              CONTACT PURPOSE
          ===================================================== */}

          <div className="flex w-full flex-col items-start">
            {/* SECTION LABEL */}
            <div className="flex items-center gap-3">
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
                Contact purpose
              </span>
            </div>

            {/* CARDS */}
            <div
              className="
                mt-5
                grid
                w-full
                grid-cols-1
                gap-3

                sm:grid-cols-2

                lg:grid-cols-3
              "
            >
              {contactPurposes.map((item) => (
                <div
                  key={item.title}
                  className="
                    flex
                    min-h-[170px]
                    flex-col
                    items-start
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
                  <h3
                    className="
                      !m-0
                      text-base
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
                      mt-3
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
          </div>

          {/* =====================================================
              TWO COLUMN INFORMATION
          ===================================================== */}

          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-10

              lg:flex-row
              lg:gap-12

              xl:gap-16
            "
          >
            {/* ===================================================
                ENDPOINT TYPES
            =================================================== */}

            <div className="flex w-full flex-1 flex-col items-start">
              <h3
                className="
                  !m-0
                  text-xl
                  font-bold
                  leading-7
                  tracking-[-0.02em]
                  text-[#091127]
                "
              >
                Endpoint types
              </h3>

              <div className="mt-4 flex w-full flex-col">
                {endpointTypes.map((item, index) => (
                  <div
                    key={item.title}
                    className={`
                      flex
                      w-full
                      flex-col
                      gap-2
                      py-4

                      sm:flex-row
                      sm:items-start
                      sm:gap-6

                      ${
                        index !== endpointTypes.length - 1
                          ? "border-b border-[#dfe5ee]"
                          : ""
                      }
                    `}
                  >
                    <div className="w-full shrink-0 sm:w-36">
                      <h4
                        className="
                          !m-0
                          text-sm
                          font-semibold
                          leading-6
                          text-[#091127]
                        "
                      >
                        {item.title}
                      </h4>
                    </div>

                    <div className="min-w-0 flex-1">
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
                  </div>
                ))}
              </div>
            </div>

            {/* ===================================================
                WHAT IS RECORDED
            =================================================== */}

            <div className="flex w-full flex-1 flex-col items-start">
              <h3
                className="
                  !m-0
                  text-xl
                  font-bold
                  leading-7
                  tracking-[-0.02em]
                  text-[#091127]
                "
              >
                What is recorded per endpoint
              </h3>

              <div className="mt-4 flex w-full flex-col">
                {recordedPerEndpoint.map((item, index) => (
                  <div
                    key={item.title}
                    className={`
                      flex
                      w-full
                      flex-col
                      gap-2
                      py-4

                      sm:flex-row
                      sm:items-start
                      sm:gap-6

                      ${
                        index !== recordedPerEndpoint.length - 1
                          ? "border-b border-[#dfe5ee]"
                          : ""
                      }
                    `}
                  >
                    <div className="w-full shrink-0 sm:w-36">
                      <h4
                        className="
                          !m-0
                          text-sm
                          font-semibold
                          leading-6
                          text-[#091127]
                        "
                      >
                        {item.title}
                      </h4>
                    </div>

                    <div className="min-w-0 flex-1">
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
                  </div>
                ))}
              </div>

              {/* RECIPIENT BOUNDARY */}
              <div
                className="
                  mt-5
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
                  Recipient boundary
                </p>

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
                  Address or email validation does not prove legal identity
                  or receipt. It confirms an endpoint is well-formed and,
                  where supported, reachable — nothing about who is behind it.
                </p>
              </div>
            </div>
          </div>

          {/* =====================================================
              CTA
          ===================================================== */}

          <div className="flex w-full justify-center pt-1">
            <Link
              href="/customer-records"
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
              Explore Customer Records
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}