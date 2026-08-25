export default function CapabilityRules() {
  const rows = [
    {
      qualifier: "Capability group",
      representation:
        "A high-level connector function only if registry-backed",
    },
    {
      qualifier: "Object",
      representation:
        "Invoice, customer, payment, account, transaction, event or another registered object",
    },
    {
      qualifier: "Action",
      representation:
        "Create, read, update, link, export, import, refund or reconcile — only where the exact specification supports it",
    },
    {
      qualifier: "Direction",
      representation:
        "Source to Billing, Billing to target, controlled bidirectional, event-only, reference-only, or file",
    },
    {
      qualifier: "Environment",
      representation:
        "Production, sandbox or another registered environment",
    },
    {
      qualifier: "Provider product / edition",
      representation:
        "Only where the exact variant matters and is approved for publication",
    },
    {
      qualifier: "API / schema version",
      representation:
        "A compatibility qualifier where relevant",
    },
    {
      qualifier: "Limit / constraint",
      representation:
        "A named scope, operation, field or workflow limitation",
    },
  ];

  return (
    <section className="w-full overflow-hidden bg-white">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1240px]
          flex-col
          items-center
          gap-10
          px-5
          py-12

          sm:px-8
          sm:py-14

          md:px-10
          md:py-16

          lg:px-7
          lg:py-20

          xl:gap-11
        "
      >
        {/* HEADER */}
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
          <div className="flex w-full items-center justify-center gap-3">
            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                leading-4
                tracking-[0.11em]
                text-[#7890b2]

                sm:text-xs
                sm:tracking-[0.15em]
              "
            >
              Capability, object, action, direction &amp; environment
            </span>

            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
          </div>

          {/* TITLE */}
          <h2
            className="
              !m-0
              !text-center
              !text-[30px]
              !font-extrabold
              !leading-[1.2]
              !tracking-[-0.03em]
              !text-[#091127]

              sm:!text-[34px]

              md:!text-[36px]
            "
          >
            Whole-connector claims are unsafe.
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              !m-0
              w-full
              max-w-[687px]
              pt-1
              text-center
              text-[15px]
              font-normal
              leading-7
              text-[#5d7192]

              sm:text-base
            "
          >
            If a provider supports invoice export but not payment-status
            import, the integration is not simply &quot;fully available.&quot;
            The matrix preserves operation-level truth.
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
          {/* MOBILE HORIZONTAL SCROLL */}
          <div className="w-full overflow-x-auto">
            <div className="min-w-[900px]">
              {/* TABLE HEADER */}
              <div
                className="
                  grid
                  grid-cols-[256px_minmax(0,1fr)]
                  border-b
                  border-[#dfe5ee]
                  bg-[#fbfcfd]
                "
              >
                <div className="px-4 py-3.5">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.08em]
                      text-[#7890b2]
                    "
                  >
                    Qualifier
                  </span>
                </div>

                <div className="px-4 py-3.5">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.08em]
                      text-[#7890b2]
                    "
                  >
                    Required representation
                  </span>
                </div>
              </div>

              {/* TABLE ROWS */}
              {rows.map((row, index) => (
                <div
                  key={row.qualifier}
                  className={`
                    grid
                    grid-cols-[256px_minmax(0,1fr)]
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#e9edf3]"
                        : ""
                    }
                  `}
                >
                  {/* QUALIFIER */}
                  <div className="px-4 py-3.5">
                    <p
                      className="
                        m-0
                        text-sm
                        font-semibold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {row.qualifier}
                    </p>
                  </div>

                  {/* REPRESENTATION */}
                  <div className="px-4 py-3.5">
                    <p
                      className="
                        m-0
                        text-sm
                        font-normal
                        leading-5
                        text-[#5d7192]
                      "
                    >
                      {row.representation}
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