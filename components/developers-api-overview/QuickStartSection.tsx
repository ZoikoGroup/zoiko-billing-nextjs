import Image from "next/image";

interface OutcomeMobileRow {
  useCase: string;
  outcomeFraming: string;
  requiredEvidence: string;
}

const mobileRows: OutcomeMobileRow[] = [
  {
    useCase: "Connect a billing source",
    outcomeFraming:
      "Create or synchronize billing inputs from an approved upstream system.",
    requiredEvidence:
      "System identity, record mapping and ownership boundaries.",
  },
  {
    useCase: "Generate downstream finance workflows",
    outcomeFraming:
      "Move approved outcomes into accounting, reporting or operational systems without obscuring source identity.",
    requiredEvidence:
      "Issued record state, document identity and immutable history links.",
  },
  {
    useCase: "Automate exception-aware operations",
    outcomeFraming:
      "Route defined exceptions for review rather than silently overwriting records.",
    requiredEvidence: "Event → exception mapping and review queue state.",
  },
  {
    useCase: "Reconcile payments to billing records",
    outcomeFraming:
      "Connect payment evidence and allocation outcomes while maintaining invoice linkage.",
    requiredEvidence:
      "Payment evidence, allocation state and outstanding balance.",
  },
  {
    useCase: "Build customer or partner experiences",
    outcomeFraming:
      "Use authorized billing data in a product experience with clear boundaries.",
    requiredEvidence:
      "Your app → billing context, permission and status labels.",
  },
  {
    useCase: "Create governed reporting pipelines",
    outcomeFraming:
      "Export or query defined billing data for approved reporting purposes.",
    requiredEvidence:
      "API or export provenance, dimensions and purpose.",
  },
];

export default function IntegrationOutcomesSection() {
  return (
    <section
      id="outcomes"
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
                What You Can Build
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
              Six integration outcomes, each preserving record identity.
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
              Every pattern keeps the source record inspectable rather than
              flattening it into a destination system.
            </p>
          </div>

          {/* DESKTOP VERSION */}
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
              lg:block
            "
          >
            <Image
              src="/images/developers/dao2.png"
              alt="Six integration outcomes, each preserving record identity"
              width={1240}
              height={500}
              unoptimized
              priority
              className="h-auto w-full object-cover"
            />
          </div>

          {/* MOBILE / TABLET VERSION */}
          <div
            className="
              block
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              text-left
              shadow-[0_6px_20px_rgba(15,23,42,0.04)]
              lg:hidden
            "
          >
            {/* SUB-HEADER */}
            <div
              className="
                border-b
                border-[#edf0f4]
                bg-[#f7f8fa]
                px-5
                py-4
                sm:px-6
                sm:py-5
              "
            >
              <p
                className="
                  !m-0
                  text-xs
                  font-normal
                  leading-5
                  text-[#7890b2]
                  sm:text-sm
                "
              >
                Use case, outcome framing and the evidence the interface must
                show.
              </p>
            </div>

            {/* TABLE */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] border-collapse">
                <thead>
                  <tr className="border-b border-[#dfe5ee] bg-[#f7f8fa]">
                    <th
                      scope="col"
                      className="
                        w-1/3
                        px-5
                        py-4
                        text-left
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.14em]
                        text-[#7890b2]
                        sm:px-6
                      "
                    >
                      Use case
                    </th>

                    <th
                      scope="col"
                      className="
                        w-1/3
                        px-5
                        py-4
                        text-left
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.14em]
                        text-[#7890b2]
                        sm:px-6
                      "
                    >
                      Outcome framing
                    </th>

                    <th
                      scope="col"
                      className="
                        w-1/3
                        px-5
                        py-4
                        text-left
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.14em]
                        text-[#7890b2]
                        sm:px-6
                      "
                    >
                      Required evidence
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {mobileRows.map((row) => (
                    <tr
                      key={row.useCase}
                      className="
                        border-b
                        border-[#edf0f4]
                        transition-colors
                        last:border-b-0
                        hover:bg-[#f7f8fa]/70
                      "
                    >
                      {/* USE CASE */}
                      <td
                        className="
                          px-5
                          py-5
                          align-top
                          text-xs
                          font-bold
                          leading-6
                          text-[#091127]
                          sm:px-6
                          sm:py-6
                        "
                      >
                        {row.useCase}
                      </td>

                      {/* OUTCOME FRAMING */}
                      <td
                        className="
                          px-5
                          py-5
                          align-top
                          text-xs
                          font-normal
                          leading-6
                          text-[#5d7192]
                          sm:px-6
                          sm:py-6
                        "
                      >
                        {row.outcomeFraming}
                      </td>

                      {/* REQUIRED EVIDENCE */}
                      <td
                        className="
                          px-5
                          py-5
                          align-top
                          text-xs
                          font-normal
                          leading-6
                          text-[#5d7192]
                          sm:px-6
                          sm:py-6
                        "
                      >
                        {row.requiredEvidence}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}