interface CapabilityCardData {
  title: string;
  summary: string;
  tags: string;
  badgeText: string;
  extraText?: string;
}

const capabilityCards: CapabilityCardData[] = [
  {
    title: "Customer records",
    summary:
      "Create or synchronize billing-account context while preserving record identity and ownership.",
    tags:
      "Customer and account records · identifiers · contact and billing attributes · lifecycle metadata",
    badgeText: "State pending canonical source",
    extraText: "Per object and action",
  },
  {
    title: "Invoices & credit notes",
    summary:
      "Integrate document lifecycle without rewriting issued history.",
    tags:
      "Draft and issued documents · line items · credit notes · status and evidence links",
    badgeText: "State pending canonical source",
    extraText: "Per object and action",
  },
  {
    title: "Charges & adjustments",
    summary:
      "Bring controlled changes into billing workflows.",
    tags:
      "Charges · adjustments · reason and context · approval and evidence references",
    badgeText: "State pending canonical source",
    extraText: "Per action",
  },
  {
    title: "Billing schedules",
    summary:
      "Coordinate recurring or scheduled billing behavior.",
    tags:
      "Schedules · effective periods · lifecycle state · next-action metadata",
    badgeText: "State pending canonical source",
  },
  {
    title: "Documents & delivery",
    summary:
      "Connect generated billing documents and delivery outcomes.",
    tags:
      "Documents · delivery state · channels · evidence and status",
    badgeText: "State pending canonical source",
  },
  {
    title: "Accounts receivable",
    summary:
      "Read and act on receivable operational state where authorized.",
    tags:
      "Balances · aging context · collections and workflow references",
    badgeText: "State pending canonical source",
  },
  {
    title: "Payments & reconciliation",
    summary:
      "Integrate payment evidence and allocation or reconciliation workflows.",
    tags:
      "Payments · allocations · reconciliation state · exceptions",
    badgeText: "State pending canonical source",
  },
  {
    title: "Outstanding balances",
    summary:
      "Surface what remains due without mutating source documents.",
    tags:
      "Outstanding amounts · invoice linkage · aging and status",
    badgeText: "State pending canonical source",
  },
  {
    title: "Reporting & analytics",
    summary:
      "Export or query governed billing information for defined reporting purposes.",
    tags:
      "Report dimensions · filters · exports · aggregates where supported",
    badgeText: "State pending canonical source",
  },
  {
    title: "Roles, approvals & automation",
    summary:
      "Connect governed actions to permission, approval and workflow boundaries.",
    tags:
      "Approval state · role context · workflow events · policy outcomes",
    badgeText: "State pending canonical source",
    extraText: "Explicitly permission-aware",
  },
];

export default function ApiCapabilityMapSection() {
  return (
    <section
      id="capability-map"
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
              max-w-[800px]
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
                  tracking-[0.14em]
                  text-[#7890b2]
                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                API Capability Map
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
              Ten billing domains, each with its own availability state.
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
              This maps the product architecture into integration domains. It
              does not imply that every object or action in a domain is already
              exposed by API.
            </p>
          </div>

          {/* CAPABILITY CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-5
              text-left
              md:grid-cols-2
              md:gap-6
            "
          >
            {capabilityCards.map((card) => (
              <div
                key={card.title}
                className="
                  flex
                  min-h-[250px]
                  flex-col
                  justify-between
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  p-5
                  shadow-[0_6px_20px_rgba(15,23,42,0.04)]
                  sm:p-6
                  md:p-7
                "
              >
                {/* CONTENT */}
                <div>
                  <h3
                    className="
                      !m-0
                      text-base
                      font-bold
                      leading-6
                      text-[#091127]
                      sm:text-lg
                    "
                  >
                    {card.title}
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
                    {card.summary}
                  </p>
                </div>

                {/* FOOTER */}
                <div className="mt-6 border-t border-[#edf0f4] pt-4">
                  <p
                    className="
                      !m-0
                      text-xs
                      font-normal
                      leading-5
                      text-[#7890b2]
                    "
                  >
                    {card.tags}
                  </p>

                  <div className="mt-3 flex flex-wrap items-center gap-2.5">
                    <div
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-md
                        border
                        border-[#dfe5ee]
                        bg-[#f7f8fa]
                        px-2.5
                        py-1.5
                        text-[11px]
                        font-medium
                        text-[#5d7192]
                      "
                    >
                      <span className="h-1.5 w-1.5 rounded-sm bg-[#7890b2]" />
                      {card.badgeText}
                    </div>

                    {card.extraText && (
                      <span
                        className="
                          text-[11px]
                          font-normal
                          text-[#7890b2]
                        "
                      >
                        {card.extraText}
                      </span>
                    )}
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