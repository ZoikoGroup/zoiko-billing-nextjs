export default function SearchSuggestionContract() {
  const searchBehavior = [
    {
      label: "Index scope",
      value: "Published current public term registry only",
    },
    {
      label: "Matching priority",
      value:
        "1 canonical exact · 2 acronym or alias exact · 3 normalized variant · 4 related term · 5 controlled keyword",
    },
    {
      label: "Typeahead",
      value:
        "Accessible combobox pattern with explicit selection only — no auto-navigation",
      boldPart: "explicit selection only — no auto-navigation",
    },
    {
      label: "Highlighting",
      value:
        "Highlight the matched token without altering canonical term text",
    },
    {
      label: "No result",
      value:
        "Suggest spelling-safe adjacent terms, topic browse, Resource Center, Guides, Help and Documentation. Never fabricate a definition",
      boldPart: "Never fabricate a definition",
    },
    {
      label: "Analytics",
      value:
        "Track the selected term identifier and result count — no raw query by default",
      boldPart: "no raw query by default",
    },
  ];

  const suggestionFields = [
    {
      label: "Canonical term",
      value: "The primary display name",
    },
    {
      label: "Match reason",
      value:
        '"Acronym for", "Also known as", or a topic label where useful',
    },
    {
      label: "Short definition",
      value:
        "One concise sentence — never truncating an essential qualifier",
      boldPart: "never truncating an essential qualifier",
    },
    {
      label: "Term class",
      value: "Shown only where it improves interpretation",
    },
    {
      label: "Scope note",
      value:
        "Only when ambiguity, jurisdiction or product context requires it",
    },
    {
      label: "No duplicate alias",
      value:
        "Alias and canonical do not appear as competing results",
      boldPart: "do not appear as competing results",
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

  const renderRows = (
    rows: {
      label: string;
      value: string;
      boldPart?: string;
    }[],
  ) => (
    <>
      {/* DESKTOP */}
      <div className="hidden md:block">
        {rows.map((row, index) => (
          <div
            key={row.label}
            className={`grid grid-cols-[144px_minmax(0,1fr)] ${
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

      {/* MOBILE / SMALL TABLET */}
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
                Search &amp; suggestion contract
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
              Five matching priorities, and no fabricated answer.
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
              An alias and its canonical term never compete as separate
              results — the alias resolves to the one canonical page.
            </p>
          </div>

          {/* TWO CONTRACT CARDS */}
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
            {/* SEARCH BEHAVIOR */}
            <div
              className="
                flex
                min-w-0
                flex-1
                flex-col
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
                  Search behavior.
                </span>
              </div>

              {renderRows(searchBehavior)}
            </div>

            {/* SUGGESTION CARD FIELDS */}
            <div
              className="
                flex
                min-w-0
                flex-1
                flex-col
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
                  Suggestion card fields.
                </span>
              </div>

              {renderRows(suggestionFields)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}