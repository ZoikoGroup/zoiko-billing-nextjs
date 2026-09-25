interface MatchingControlRow {
  control: string;
  requiredBehavior: string;
}

const matchingControlRows: MatchingControlRow[] = [
  {
    control: "Stable external IDs",
    requiredBehavior:
      "The primary mapping key once a connection is established",
  },
  {
    control: "Billing customer ID",
    requiredBehavior:
      "A stable internal reference, preserved throughout",
  },
  {
    control: "CRM account / contact ID",
    requiredBehavior:
      "An opaque external reference — no meaning inferred from its format",
  },
  {
    control: "Name, email, domain",
    requiredBehavior:
      "Possible review signals only, never destructive merge authority",
  },
  {
    control: "Relationship type",
    requiredBehavior:
      "Account association, entity relationship, parent, child or reference if supported",
  },
  {
    control: "Duplicate candidate",
    requiredBehavior:
      "Explain why records appear similar, with side-by-side sources and dependencies",
  },
  {
    control: "Decision",
    requiredBehavior:
      "Keep separate, link, merge identity where governed, remap, reject or defer",
  },
  {
    control: "Merge preview",
    requiredBehavior:
      "Contacts, billing profiles, issued records, external IDs, relationships and downstream impact",
  },
  {
    control: "Lineage",
    requiredBehavior:
      "Survivor, alias, external mappings and history preserved",
  },
  {
    control: "Unlink",
    requiredBehavior:
      "Stops mapping without deleting historical Billing evidence",
  },
];

export default function CustomerAccountContactMatchingSection() {
  return (
    <section
      id="customer-matching"
      className="w-full bg-[#f7f8fa]"
    >
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
          {/* INTRO */}
          <div
            className="
              flex
              w-full
              max-w-[760px]
              flex-col
              items-center
              gap-3
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
                Customer, Account, Contact &amp; Relationship Matching
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
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
              Weak signals suggest review. They never authorize a merge.
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
              Name, email, domain, phone, address, fuzzy similarity, AI
              similarity and sales-owner overlap are review signals only —
              never destructive merge authority.
            </p>
          </div>

          {/* MATCHING CONTROLS */}
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
            {/* CARD DESCRIPTION */}
            <div
              className="
                border-b
                border-[#edf0f4]
                bg-[#fafbfc]
                px-5
                py-3.5
                text-sm
                leading-6
                text-[#5d7192]
              "
            >
              Matching controls and required behavior.
            </div>

            {/* DESKTOP */}
            <div className="hidden md:block">
              <div className="grid grid-cols-[280px_minmax(0,1fr)] bg-white">
                <div className="border-b border-[#dfe5ee] px-5 py-3.5">
                  <span className="text-xs font-bold uppercase tracking-wide text-[#7890b2]">
                    Control
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-5 py-3.5">
                  <span className="text-xs font-bold uppercase tracking-wide text-[#7890b2]">
                    Required Behavior
                  </span>
                </div>
              </div>

              {matchingControlRows.map((row, index) => (
                <div
                  key={row.control}
                  className={`grid grid-cols-[280px_minmax(0,1fr)] ${
                    index !== matchingControlRows.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }`}
                >
                  <div className="px-5 py-4">
                    <span className="text-sm font-semibold leading-5 text-[#091127]">
                      {row.control}
                    </span>
                  </div>

                  <div className="px-5 py-4">
                    <span
                      className={`text-sm leading-6 ${
                        row.control === "Unlink"
                          ? "font-semibold text-[#091127]"
                          : "text-[#5d7192]"
                      }`}
                    >
                      {row.requiredBehavior}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE */}
            <div className="flex flex-col md:hidden">
              {matchingControlRows.map((row, index) => (
                <div
                  key={row.control}
                  className={`p-5 ${
                    index !== matchingControlRows.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }`}
                >
                  <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                    Control
                  </p>

                  <p className="!m-0 mt-1.5 text-sm font-semibold leading-5 text-[#091127]">
                    {row.control}
                  </p>

                  <p className="!m-0 mt-4 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                    Required Behavior
                  </p>

                  <p
                    className={`!m-0 mt-1.5 text-sm leading-6 ${
                      row.control === "Unlink"
                        ? "font-semibold text-[#091127]"
                        : "text-[#5d7192]"
                    }`}
                  >
                    {row.requiredBehavior}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}