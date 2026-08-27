export default function CanonicalTermEntry() {
  const aboveTheFold = [
    {
      label: "Term class",
      value: "An optional controlled class — not a marketing category",
      boldPart: "not a marketing category",
    },
    {
      label: "Canonical term",
      value: "The heading, one record per meaning",
    },
    {
      label: "Alias line",
      value:
        '"Also known as", acronym or "formerly called" only when registry-controlled',
    },
    {
      label: "Direct definition",
      value: "One to three sentences, answer first, never circular",
      boldPart: "never circular",
    },
    {
      label: "Scope note",
      value:
        "Shown near the definition when meaning varies by context, jurisdiction, profession, provider or product usage",
    },
    {
      label: "Last reviewed",
      value: "A visible date",
    },
    {
      label: "Primary authority",
      value:
        "Product, technical or professional source according to class",
    },
  ];

  const mainBody = [
    {
      label: "Why it matters",
      value:
        "Operational relevance and decision context — not product marketing",
      boldPart: "not product marketing",
    },
    {
      label: "How the term is used",
      value: "Plain-language usage context in billing workflows",
    },
    {
      label: "In Zoiko Billing",
      value:
        "Only when the term maps to approved product concepts; summarize and link",
    },
    {
      label: "Example",
      value: "Conceptual or product-accurate, synthetic data only",
      boldPart: "synthetic data only",
    },
    {
      label: "Related concepts",
      value:
        "A typed list: broader, narrower, related, synonym, contrast",
    },
    {
      label: "Common confusion",
      value:
        "Explains a nearby term where users conflate meanings",
    },
    {
      label: "Scope & limitations",
      value:
        "Professional, jurisdictional, provider, technical or product caveats",
    },
    {
      label: "Sources & governance",
      value: "Authority label, owner and last reviewed",
    },
    {
      label: "Next steps",
      value:
        "Guide, template, product, docs, help, developers, trust or pricing per need",
    },
  ];

  const renderValue = (value: string, boldPart?: string) => {
    if (!boldPart) return value;

    const parts = value.split(boldPart);

    return (
      <>
        {parts[0]}
        <strong className="font-bold">{boldPart}</strong>
        {parts[1]}
      </>
    );
  };

  const TableRows = ({
    rows,
  }: {
    rows: {
      label: string;
      value: string;
      boldPart?: string;
    }[];
  }) => (
    <>
      {/* DESKTOP */}
      <div className="hidden md:block">
        {rows.map((row, index) => (
          <div
            key={row.label}
            className={`grid grid-cols-[128px_minmax(0,1fr)] ${
              index !== rows.length - 1
                ? "border-b border-[#edf0f4]"
                : ""
            }`}
          >
            <div className="px-4 py-3.5">
              <span className="text-sm font-semibold leading-5 text-[#091127]">
                {row.label}
              </span>
            </div>

            <div className="px-4 py-3.5">
              <span className="text-sm font-normal leading-5 text-[#5d7192]">
                {renderValue(row.value, row.boldPart)}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* MOBILE */}
      <div className="flex flex-col md:hidden">
        {rows.map((row, index) => (
          <div
            key={row.label}
            className={`p-5 ${
              index !== rows.length - 1
                ? "border-b border-[#edf0f4]"
                : ""
            }`}
          >
            <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
              {row.label}
            </p>

            <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
              {renderValue(row.value, row.boldPart)}
            </p>
          </div>
        ))}
      </div>
    </>
  );

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
                Canonical term entry
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
              Nine body blocks, in a fixed order.
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
              The entry rendered in the finder above follows this template
              exactly. Definition first, scope beside it, governance at the
              end.
            </p>
          </div>

          {/* TWO TABLE CARDS */}
          <div
            className="
              flex
              w-full
              flex-col
              items-stretch
              gap-5

              md:flex-row
              md:items-start
            "
          >
            {/* ABOVE THE FOLD */}
            <div
              className="
                min-w-0
                flex-1
                overflow-hidden
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
              "
            >
              <div className="border-b border-[#dfe5ee] bg-[#fafbfc] px-5 py-4">
                <span className="text-sm font-normal leading-5 text-[#5d7192]">
                  Above the fold.
                </span>
              </div>

              <TableRows rows={aboveTheFold} />
            </div>

            {/* MAIN BODY */}
            <div
              className="
                min-w-0
                flex-1
                overflow-hidden
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
              "
            >
              <div className="border-b border-[#dfe5ee] bg-[#fafbfc] px-5 py-4">
                <span className="text-sm font-normal leading-5 text-[#5d7192]">
                  Main body.
                </span>
              </div>

              <TableRows rows={mainBody} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}