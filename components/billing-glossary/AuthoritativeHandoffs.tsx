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
          <strong>the technical contract stays in Developers</strong>
        </>
      ),
    },
    {
      question: "What does it cost, or which plan includes it?",
      authority: "Pricing",
      authorityHighlight: true,
      behavior: <strong>No duplicated price or entitlement values</strong>,
    },
    {
      question: "Is this compliant, secure or private?",
      authority: "Trust · Security · Privacy",
      behavior: "No duplicated assurance claims",
    },
    {
      question: "How do I solve this account-specific issue?",
      authority: "Help Center · Support",
      behavior: <strong>No account diagnosis in a glossary</strong>,
    },
    {
      question: "Is this a legal, accounting or tax obligation?",
      authority: "Approved professional source",
      behavior:
        "No interpretation beyond a scoped educational definition",
    },
  ];

  return (
    <section className="w-full px-4 py-12 sm:px-6 lg:px-12 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-8 sm:gap-10 lg:gap-11">

        {/* Heading */}
        <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2">

          {/* Eyebrow */}
          <div className="flex h-4 items-center justify-center gap-3">
            <span className="h-px w-4 bg-color-azure-60 opacity-40" />

            <span className="whitespace-nowrap text-center text-xs font-bold uppercase leading-4 tracking-widest text-color-azure-60">
              Authoritative handoffs
            </span>

            <span className="h-px w-4 bg-color-azure-60 opacity-40" />
          </div>

          {/* Title */}
          <div className="w-full pb-1 text-center">
            <h2 className="text-3xl font-extrabold leading-9 text-color-azure-11-2 sm:text-4xl sm:leading-10">
              Six questions hiding behind a term.
            </h2>
          </div>

          {/* Description */}
          <div className="w-full max-w-[687px] pt-1 text-center">
            <p className="text-sm font-normal leading-6 text-color-azure-44-3 sm:text-base sm:leading-7">
              Someone searching a term usually has a question the glossary is
              not allowed to answer.
            </p>
          </div>
        </div>

        {/* Table */}
        <div className="w-full overflow-x-auto rounded-2xl border border-color-grey-92-4 bg-color-white-solid shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]">
          <div className="min-w-[1040px]">

            {/* Header */}
            <div className="grid grid-cols-[384px_240px_1fr]">
              <div className="border-b border-color-grey-92-4 bg-color-grey-99-2 px-4 py-3">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-color-azure-60">
                  Question behind the term
                </span>
              </div>

              <div className="border-b border-color-grey-92-4 bg-color-grey-99-2 px-4 py-3">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-color-azure-60">
                  Authority
                </span>
              </div>

              <div className="border-b border-color-grey-92-4 bg-color-grey-99-2 px-4 py-3">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-color-azure-60">
                  Glossary behavior
                </span>
              </div>
            </div>

            {/* Rows */}
            {rows.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-[384px_240px_1fr] ${
                  index !== rows.length - 1
                    ? "border-b border-color-grey-95-10"
                    : ""
                }`}
              >
                {/* Question */}
                <div className="px-4 py-3.5">
                  <p className="text-sm font-semibold leading-5 text-color-azure-11-2">
                    {row.question}
                  </p>
                </div>

                {/* Authority */}
                <div className="px-4 py-3.5">
                  <p
                    className={
                      row.authorityHighlight
                        ? "text-sm font-semibold leading-6 text-color-azure-52"
                        : "text-sm font-normal leading-5 text-color-azure-44-3"
                    }
                  >
                    {row.authority}
                  </p>
                </div>

                {/* Behavior */}
                <div className="px-4 py-3.5">
                  <p className="text-sm font-normal leading-5 text-color-azure-44-3">
                    {row.behavior}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}