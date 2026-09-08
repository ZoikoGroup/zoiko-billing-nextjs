const comparisons = [
  {
    dimension: "Customer record authority",
    standalone: "Billing-native for defined billing domains.",
    connected:
      "Billing stays authoritative for defined billing domains; approved context and handoffs connect",
  },
  {
    dimension: "Organization context",
    standalone: "Billing tenant and account context.",
    connected: "Explicit tenant, organization and customer mapping",
  },
  {
    dimension: "Identity",
    standalone: "The Billing-approved identity model.",
    connected: "Separate, federated, linked or shared only when authoritative",
  },
  {
    dimension: "Data sharing",
    standalone: "Approved external integrations only.",
    connected: "Configured object and field categories only",
  },
  {
    dimension: "Workflow",
    standalone: "Billing-native plus approved external integrations.",
    connected: "Approved cross-product events and handoffs only",
  },
  {
    dimension: "Permissions",
    standalone: "Billing roles.",
    connected: "Mapped roles and permissions — no permission union by default",
  },
  {
    dimension: "Conflict",
    standalone: "Integration-specific.",
    connected: "Per-field mapping and reconciliation state",
  },
  {
    dimension: "Disconnect",
    standalone: "Native standalone.",
    connected: "Governed pause, disconnect and disposition",
  },
  {
    dimension: "Commercial",
    standalone: "Billing commercial state.",
    connected: "Zoiko One packaging or term only where approved",
  },
];

export default function Connected() {
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
                Standalone vs Zoiko One connected
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
              Connection adds governed context. It
              <br className="hidden sm:block" />
              does not erase boundaries.
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
              Use Customer Records independently, or as part of an approved
              connected deployment. Either way, source authority, permissions
              and recovery responsibilities remain explicit.
            </p>
          </div>

          {/* COMPARISON TABLE */}
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
              <div className="grid grid-cols-[20%_27%_53%] bg-[#fafbfc]">
                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-[#7890b2]
                    "
                  >
                    Dimension
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-[#7890b2]
                    "
                  >
                    Standalone Zoiko Billing
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-[#7890b2]
                    "
                  >
                    Zoiko One connected
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {comparisons.map((item, index) => (
                <div
                  key={item.dimension}
                  className={`
                    grid
                    grid-cols-[20%_27%_53%]
                    ${
                      index !== comparisons.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* DIMENSION */}
                  <div className="px-4 py-3.5">
                    <p
                      className="
                        !m-0
                        text-sm
                        font-semibold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {item.dimension}
                    </p>
                  </div>

                  {/* STANDALONE */}
                  <div className="px-4 py-3.5">
                    <p
                      className="
                        !m-0
                        text-sm
                        font-normal
                        leading-5
                        text-[#5d7192]
                      "
                    >
                      {item.standalone}
                    </p>
                  </div>

                  {/* CONNECTED */}
                  <div className="px-4 py-3.5">
                    <p
                      className="
                        !m-0
                        text-sm
                        font-normal
                        leading-5
                        text-[#5d7192]
                      "
                    >
                      {item.connected}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE / SMALL TABLET CARDS */}
            <div className="flex flex-col md:hidden">
              {comparisons.map((item, index) => (
                <div
                  key={item.dimension}
                  className={`
                    p-5
                    ${
                      index !== comparisons.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* DIMENSION */}
                  <div>
                    <p
                      className="
                        !m-0
                        text-sm
                        font-semibold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {item.dimension}
                    </p>
                  </div>

                  {/* STANDALONE */}
                  <div className="mt-4">
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
                      Standalone Zoiko Billing
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
                      {item.standalone}
                    </p>
                  </div>

                  {/* CONNECTED */}
                  <div className="mt-4">
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
                      Zoiko One connected
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
                      {item.connected}
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