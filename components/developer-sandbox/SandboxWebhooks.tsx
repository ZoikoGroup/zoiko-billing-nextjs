export default function SandboxWebhooks() {
  const rows = [
    {
      aspect: "Event availability",
      treatment: (
        <>
          <strong className="font-bold">
            Never assume all events exist in the sandbox
          </strong>{" "}
          — parity is a fidelity record
        </>
      ),
    },
    {
      aspect: "Verification",
      treatment:
        "The canonical method applies; material is environment-bound",
    },
    {
      aspect: "Retry & ordering",
      treatment:
        "Governed by Webhooks; sandbox timing may be representative rather than equivalent",
    },
    {
      aspect: "Replay",
      treatment:
        "Reuses the locked Webhooks replay governance, including side-effect warnings",
    },
    {
      aspect: "Endpoint configuration",
      treatment: (
        <>
          Sandbox subscriptions are separate objects and are{" "}
          <strong className="font-bold">not portable to production</strong>
        </>
      ),
    },
    {
      aspect: "Delivery evidence",
      treatment:
        "Attempt evidence follows the same redaction defaults as production logs",
    },
  ];

  return (
    <section className="w-full overflow-hidden bg-[#f7f8fa]">
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
            flex
            w-full
            max-w-[1240px]
            flex-col
            items-center
            gap-8

            sm:gap-10

            lg:gap-11
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
                Webhooks &amp; asynchronous behavior
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                !max-w-[662px]
                !text-[30px]
                !font-extrabold
                !leading-[1.2]
                !tracking-[-0.03em]
                !text-[#091127]

                sm:!text-[34px]

                md:!text-[36px]
              "
            >
              Delivery semantics stay owned by Webhooks.
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
              The sandbox may exercise event delivery where supported, but it
              does not redefine verification, retry, ordering or replay.
            </p>
          </div>

          {/* DESKTOP TABLE */}
          <div
            className="
              hidden
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

              md:block
            "
          >
            {/* TABLE HEADER */}
            <div className="grid grid-cols-[288px_minmax(0,1fr)] bg-[#fafbfc]">
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
                  Aspect
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
                  Sandbox treatment
                </span>
              </div>
            </div>

            {/* TABLE ROWS */}
            {rows.map((row, index) => (
              <div
                key={row.aspect}
                className={`
                  grid
                  grid-cols-[288px_minmax(0,1fr)]
                  ${
                    index !== rows.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }
                `}
              >
                <div className="px-4 py-3.5">
                  <span className="text-sm font-semibold leading-5 text-[#091127]">
                    {row.aspect}
                  </span>
                </div>

                <div className="px-4 py-3.5">
                  <span className="text-sm font-normal leading-5 text-[#5d7192]">
                    {row.treatment}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* MOBILE / SMALL TABLET CARDS */}
          <div className="flex w-full flex-col gap-4 md:hidden">
            {rows.map((row) => (
              <div
                key={row.aspect}
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
                {/* ASPECT */}
                <div
                  className="
                    border-b
                    border-[#e8ecf2]
                    bg-[#fafbfc]
                    px-5
                    py-4
                  "
                >
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    {row.aspect}
                  </span>
                </div>

                {/* SANDBOX TREATMENT */}
                <div className="px-5 py-4">
                  <p className="mb-1 text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Sandbox treatment
                  </p>

                  <p className="text-sm font-normal leading-6 text-[#5d7192]">
                    {row.treatment}
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