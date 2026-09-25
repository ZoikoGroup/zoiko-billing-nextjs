export default function AuthoritativeHandoffs() {
  const rows = [
    {
      question: "How does Zoiko Billing actually behave?",
      authority: "Product · Documentation",
      behavior:
        "The definition summarizes the concept; current behavior lives there",
    },
    {
      question: "What does this API or webhook term mean technically?",
      authority: "Developers",
      behavior: (
        <>
          Business meaning only —{" "}
          <strong className="font-bold text-[#091127]">
            the technical contract stays in Developers
          </strong>
        </>
      ),
    },
    {
      question: "What does it cost, or which plan includes it?",
      authority: "Pricing",
      authorityHighlight: true,
      behavior: (
        <strong className="font-bold text-[#091127]">
          No duplicated price or entitlement values
        </strong>
      ),
    },
    {
      question: "Is this compliant, secure or private?",
      authority: "Trust · Security · Privacy",
      behavior: "No duplicated assurance claims",
    },
    {
      question: "How do I solve this account-specific issue?",
      authority: "Help Center · Support",
      behavior: (
        <strong className="font-bold text-[#091127]">
          No account diagnosis in a glossary
        </strong>
      ),
    },
    {
      question: "Is this a legal, accounting or tax obligation?",
      authority: "Approved professional source",
      behavior:
        "No interpretation beyond a scoped educational definition",
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
          items-center
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
          {/* Intro */}
          <div
            className="
              flex
              w-full
              max-w-[800px]
              flex-col
              items-center
              gap-3
              text-center
            "
          >
            {/* Eyebrow */}
            <div className="flex h-4 items-center justify-center gap-3">
              <span className="h-px w-4 bg-[#7890b2] opacity-40" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.14em]
                  text-[#7890b2]
                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Authoritative handoffs
              </span>

              <span className="h-px w-4 bg-[#7890b2] opacity-40" />
            </div>

            {/* Heading */}
            <h2
              className="
                !m-0
                w-full
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
              Six questions hiding behind a term.
            </h2>

            {/* Description */}
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
              Someone searching a term usually has a question the glossary is
              not allowed to answer.
            </p>
          </div>

          {/* Desktop Table */}
          <div
            className="
              hidden
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              shadow-[0_6px_20px_rgba(15,23,42,0.04)]
              md:block
            "
          >
            {/* Header */}
            <div className="grid grid-cols-[384px_240px_minmax(0,1fr)]">
              <div className="border-b border-[#dfe5ee] bg-[#f7f8fa] px-5 py-4">
                <span
                  className="
                    text-xs
                    font-bold
                    uppercase
                    leading-4
                    tracking-[0.14em]
                    text-[#7890b2]
                  "
                >
                  Question behind the term
                </span>
              </div>

              <div className="border-b border-[#dfe5ee] bg-[#f7f8fa] px-5 py-4">
                <span
                  className="
                    text-xs
                    font-bold
                    uppercase
                    leading-4
                    tracking-[0.14em]
                    text-[#7890b2]
                  "
                >
                  Authority
                </span>
              </div>

              <div className="border-b border-[#dfe5ee] bg-[#f7f8fa] px-5 py-4">
                <span
                  className="
                    text-xs
                    font-bold
                    uppercase
                    leading-4
                    tracking-[0.14em]
                    text-[#7890b2]
                  "
                >
                  Glossary behavior
                </span>
              </div>
            </div>

            {/* Rows */}
            {rows.map((row, index) => (
              <div
                key={index}
                className={`
                  grid
                  grid-cols-[384px_240px_minmax(0,1fr)]
                  transition-colors
                  hover:bg-[#f7f8fa]/70
                  ${
                    index !== rows.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }
                `}
              >
                {/* Question */}
                <div className="px-5 py-4">
                  <p className="m-0 text-sm font-semibold leading-6 text-[#091127]">
                    {row.question}
                  </p>
                </div>

                {/* Authority */}
                <div className="px-5 py-4">
                  <p
                    className={
                      row.authorityHighlight
                        ? "m-0 text-sm font-semibold leading-6 text-blue-600"
                        : "m-0 text-sm font-normal leading-6 text-[#5d7192]"
                    }
                  >
                    {row.authority}
                  </p>
                </div>

                {/* Behavior */}
                <div className="px-5 py-4">
                  <p className="m-0 text-sm font-normal leading-6 text-[#5d7192]">
                    {row.behavior}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Cards */}
          <div className="flex w-full flex-col gap-3 md:hidden">
            {rows.map((row, index) => (
              <div
                key={index}
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  shadow-[0_6px_20px_rgba(15,23,42,0.04)]
                "
              >
                <div className="flex flex-col gap-4 p-5">
                  {/* Question */}
                  <div>
                    <p
                      className="
                        mb-1.5
                        text-[11px]
                        font-bold
                        uppercase
                        leading-4
                        tracking-[0.12em]
                        text-[#7890b2]
                      "
                    >
                      Question behind the term
                    </p>

                    <p className="m-0 text-sm font-semibold leading-6 text-[#091127]">
                      {row.question}
                    </p>
                  </div>

                  {/* Authority */}
                  <div>
                    <p
                      className="
                        mb-1.5
                        text-[11px]
                        font-bold
                        uppercase
                        leading-4
                        tracking-[0.12em]
                        text-[#7890b2]
                      "
                    >
                      Authority
                    </p>

                    <p
                      className={
                        row.authorityHighlight
                          ? "m-0 text-sm font-semibold leading-6 text-blue-600"
                          : "m-0 text-sm font-normal leading-6 text-[#5d7192]"
                      }
                    >
                      {row.authority}
                    </p>
                  </div>

                  {/* Glossary Behavior */}
                  <div>
                    <p
                      className="
                        mb-1.5
                        text-[11px]
                        font-bold
                        uppercase
                        leading-4
                        tracking-[0.12em]
                        text-[#7890b2]
                      "
                    >
                      Glossary behavior
                    </p>

                    <p className="m-0 text-sm font-normal leading-6 text-[#5d7192]">
                      {row.behavior}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}