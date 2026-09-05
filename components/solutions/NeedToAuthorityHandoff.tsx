import Link from "next/link";

type Authority = {
  label: string;
  href: string;
};

type Row = {
  question: string;
  authority: Authority[];
  behavior: React.ReactNode;
};

export default function NeedToAuthorityHandoff() {
  const rows: Row[] = [
    {
      question: "What does the product actually do?",
      authority: [
        {
          label: "Product",
          href: "/product",
        },
        {
          label: "Documentation",
          href: "/documentation",
        },
      ],
      behavior: (
        <>
          Short summary plus a deep link.{" "}
          <strong className="font-bold">
            Never replaces the product page.
          </strong>
        </>
      ),
    },
    {
      question:
        "Can it support multiple entities, currencies or regions?",
      authority: [
        {
          label: "Global Billing",
          href: "/global-billing",
        },
        {
          label: "Availability",
          href: "/integration-availability",
        },
      ],
      behavior: (
        <>
          Routes{" "}
          <strong className="font-bold">
            with current scope qualifiers
          </strong>{" "}
          — never a bare yes.
        </>
      ),
    },
    {
      question: "Which systems can it connect to?",
      authority: [
        {
          label: "Integrations",
          href: "/integration-availability",
        },
        {
          label: "Developers",
          href: "/developer-sandbox",
        },
      ],
      behavior: (
        <>
          Routes to the{" "}
          <strong className="font-bold">
            verified integration registry
          </strong>{" "}
          and technical docs.
        </>
      ),
    },
    {
      question: "What does it cost, and what plan includes it?",
      authority: [
        {
          label: "Pricing",
          href: "/pricing-and-plans",
        },
      ],
      behavior: (
        <>
          <strong className="font-bold">
            No price or plan content beyond an approved summary.
          </strong>
        </>
      ),
    },
    {
      question: "Is it secure, and what evidence exists?",
      authority: [
        {
          label: "Security",
          href: "/security-overview",
        },
        {
          label: "Trust Center",
          href: "/trust-center",
        },
      ],
      behavior: (
        <>
          Routes to{" "}
          <strong className="font-bold">
            current evidence with its scope
          </strong>
          .
        </>
      ),
    },
    {
      question: "I need help with my current account.",
      authority: [
        {
          label: "Help",
          href: "/help-center",
        },
        {
          label: "Support",
          href: "/support-policy",
        },
      ],
      behavior: (
        <>
          <strong className="font-bold">
            Support-first, not sales.
          </strong>{" "}
          An existing customer is never pushed through a lead flow.
        </>
      ),
    },
    {
      question: "I want a partnership or an integration listing.",
      authority: [
        {
          label: "Partners & Connect",
          href: "/become-a-partner",
        },
      ],
      behavior: (
        <>
          Routes to{" "}
          <strong className="font-bold">
            partner or integration intake, not sales
          </strong>
          .
        </>
      ),
    },
    {
      question: "I want to evaluate commercially.",
      authority: [
        {
          label: "Pricing",
          href: "/pricing-and-plans",
        },
        {
          label: "Sales",
          href: "/sales-enquiries",
        },
        {
          label: "Demo",
          href: "/book-demo",
        },
      ],
      behavior: (
        <>
          <strong className="font-bold">
            Commercial-state controlled.
          </strong>
        </>
      ),
    },
  ];

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
                Need-to-authority handoff
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
              Eight questions, and Solutions owns none of them.
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
              This page&apos;s job is to route accurately. Answering these
              itself would create a second version of every fact.
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
              {/* HEADER */}
              <div
                className="
                  grid
                  grid-cols-[minmax(0,1fr)_208px_minmax(0,1fr)]
                  bg-[#091127]
                "
              >
                <div className="border-r border-white/15 px-3.5 py-3">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-white
                    "
                  >
                    Question
                  </span>
                </div>

                <div className="border-r border-white/15 px-3.5 py-3">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-white
                    "
                  >
                    Primary authority
                  </span>
                </div>

                <div className="px-3.5 py-3">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-white
                    "
                  >
                    Solutions behavior
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {rows.map((row, index) => (
                <div
                  key={row.question}
                  className={`
                    grid
                    grid-cols-[minmax(0,1fr)_208px_minmax(0,1fr)]
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* QUESTION */}
                  <div
                    className="
                      border-r
                      border-[#edf0f4]
                      bg-[#fafbfc]
                      px-3.5
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
                      {row.question}
                    </span>
                  </div>

                  {/* AUTHORITY */}
                  <div
                    className="
                      flex
                      flex-wrap
                      items-center
                      gap-x-1
                      gap-y-0.5
                      border-r
                      border-[#edf0f4]
                      px-3.5
                      py-3
                    "
                  >
                    {row.authority.map((authority, authorityIndex) => (
                      <span
                        key={authority.label}
                        className="flex items-center"
                      >
                        <Link
                          href={authority.href}
                          className="
                            !font-semibold
                            !text-[#2563eb]
                            hover:!text-[#1d4ed8]
                            hover:underline
                          "
                        >
                          {authority.label}
                        </Link>

                        {authorityIndex !== row.authority.length - 1 && (
                          <span
                            className="
                              ml-1
                              text-xs
                              font-normal
                              leading-5
                              text-[#7890b2]
                            "
                          >
                            ·
                          </span>
                        )}
                      </span>
                    ))}
                  </div>

                  {/* BEHAVIOR */}
                  <div className="px-3.5 py-3">
                    <span
                      className="
                        text-xs
                        font-normal
                        leading-5
                        text-[#091127]
                      "
                    >
                      {row.behavior}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE / SMALL TABLET */}
            <div className="flex flex-col md:hidden">
              {rows.map((row, index) => (
                <div
                  key={row.question}
                  className={`
                    p-5
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* QUESTION */}
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
                      Question
                    </p>

                    <p
                      className="
                        !m-0
                        mt-1.5
                        text-sm
                        font-semibold
                        leading-6
                        text-[#091127]
                      "
                    >
                      {row.question}
                    </p>
                  </div>

                  {/* PRIMARY AUTHORITY */}
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
                      Primary authority
                    </p>

                    <div className="mt-1.5 flex flex-wrap items-center gap-x-1">
                      {row.authority.map((authority, authorityIndex) => (
                        <span
                          key={authority.label}
                          className="flex items-center"
                        >
                          <Link
                            href={authority.href}
                            className="
                              !font-semibold
                              !text-[#2563eb]
                              hover:!text-[#1d4ed8]
                              hover:underline
                            "
                          >
                            {authority.label}
                          </Link>

                          {authorityIndex !== row.authority.length - 1 && (
                            <span
                              className="
                                ml-1
                                text-xs
                                text-[#7890b2]
                              "
                            >
                              ·
                            </span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* SOLUTIONS BEHAVIOR */}
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
                      Solutions behavior
                    </p>

                    <p
                      className="
                        !m-0
                        mt-1.5
                        text-sm
                        font-normal
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      {row.behavior}
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