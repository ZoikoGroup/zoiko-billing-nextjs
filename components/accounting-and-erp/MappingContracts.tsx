import Image from "next/image";

export default function MappingContracts() {
  const rows = [
    {
      label: (
        <>
          Entity to target
          <br />
          company
        </>
      ),
      value: (
        <>
          The exact target concept depends on the connector — no
          <br className="hidden xl:block" /> single accounting structure assumed
        </>
      ),
    },
    {
      label: (
        <>
          Customer /
          <br />
          account
        </>
      ),
      value: (
        <>
          Stable external ID mapping, with source authority and
          <br className="hidden xl:block" /> merge behavior
        </>
      ),
    },
    {
      label: "Account codes",
      value: (
        <>
          Only where connector and product policy support mapping
          <br className="hidden xl:block" /> — no auto-accounting inference
        </>
      ),
    },
    {
      label: "Tax code",
      value: (
        <>
          Maps an already-authorized tax result to a target code;{" "}
          <strong>
            a
            <br className="hidden xl:block" /> target code is not a tax
            determination
          </strong>
        </>
      ),
    },
    {
      label: "Currency",
      value: (
        <>
          Original document currency preserved; target reporting
          <br className="hidden xl:block" /> currency stays target authority
        </>
      ),
    },
    {
      label: (
        <>
          Dimension / cost
          <br />
          center
        </>
      ),
      value: (
        <>
          Mapped only where target object and product context
          <br className="hidden xl:block" /> explicitly support it
        </>
      ),
    },
    {
      label: (
        <>
          Payment method /
          <br />
          clearing
        </>
      ),
      value: "Only if the approved target accounting model requires it",
    },
    {
      label: (
        <>
          Document type /
          <br />
          status
        </>
      ),
      value: "An explicit source-to-target semantic map",
    },
    {
      label: (
        <>
          Default / fallback
        </>
      ),
      value: (
        <>
          Governed explicit fallback only — unknown critical
          <br className="hidden xl:block" /> mapping blocks handoff
        </>
      ),
    },
    {
      label: (
        <>
          Version &amp; effective
          <br />
          period
        </>
      ),
      value: (
        <>
          The mapping used for each handoff is preserved for
          <br className="hidden xl:block" /> reproduction
        </>
      ),
    },
  ];

  return (
    <section className="w-full overflow-hidden bg-white">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-center
          gap-8
          px-5
          py-12

          sm:px-8
          sm:py-16
          sm:gap-10

          md:px-10
          md:py-20

          lg:px-14

          xl:px-20
        "
      >
        {/* INTRO */}
        <div
          className="
            flex
            w-full
            max-w-[1000px]
            flex-col
            items-center
            gap-3
            pt-2
            text-center
          "
        >
          {/* EYEBROW */}
          <div className="flex items-center gap-3">
            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                leading-4
                tracking-[0.12em]
                text-[#7890b2]
                whitespace-nowrap

                sm:text-xs
                sm:tracking-[0.16em]
              "
            >
              Mapping: entities, customers, accounts, tax codes &amp;
              dimensions
            </span>

            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
          </div>

          {/* HEADING */}
          <h2
            className="
              !m-0
              w-full
              max-w-[1000px]
              text-center
              text-[30px]
              font-extrabold
              leading-[1.15]
              tracking-[-0.03em]
              text-[#091127]

              sm:text-[34px]

              md:text-[36px]
              md:leading-10
            "
          >
            An unknown critical mapping blocks
            the handoff.
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              !m-0
              w-full
              max-w-[687px]
              text-center
              text-sm
              font-normal
              leading-6
              text-[#5d7192]

              sm:text-base
              sm:leading-7
            "
          >
            Fallbacks exist only where explicitly governed. Nothing is guessed
            to keep a batch moving.
          </p>
        </div>

        {/* CONTENT */}
        <div
          className="
            flex
            w-full
            flex-col
            gap-6

            lg:flex-row
            lg:items-start
            lg:gap-5
          "
        >
          {/* MAPPING TABLE */}
          <div
            className="
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

              lg:flex-1
            "
          >
            {/* TABLE HEADER */}
            <div
              className="
                border-b
                border-[#dfe5ee]
                bg-[#fafbfc]
                px-5
                py-4
              "
            >
              <span className="text-sm font-normal leading-5 text-[#5d7192]">
                Required mapping contracts.
              </span>
            </div>

            {/* TABLE */}
            <div className="w-full overflow-x-auto">
              <div className="min-w-[580px]">
                {rows.map((row, index) => (
                  <div
                    key={index}
                    className={`
                      grid
                      grid-cols-[160px_minmax(390px,1fr)]
                      ${
                        index !== rows.length - 1
                          ? "border-b border-[#eef1f5]"
                          : ""
                      }
                    `}
                  >
                    {/* LABEL */}
                    <div className="px-4 py-3.5">
                      <div
                        className="
                          whitespace-pre-line
                          text-sm
                          font-semibold
                          leading-5
                          text-[#091127]
                        "
                      >
                        {row.label}
                      </div>
                    </div>

                    {/* VALUE */}
                    <div className="px-4 py-3.5">
                      <div
                        className="
                          text-sm
                          font-normal
                          leading-5
                          text-[#5d7192]
                        "
                      >
                        {row.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div
            className="
              relative
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white

              lg:w-[46%]
              lg:max-w-[580px]
            "
          >
            <div className="relative aspect-square w-full">
              <Image
                src="/images/accounting-and-erp/mapping.png"
                alt="Accounting and ERP mapping contracts"
                fill
                className="object-cover"
                sizes="
                  (max-width: 1023px) 100vw,
                  (max-width: 1279px) 45vw,
                  580px
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}