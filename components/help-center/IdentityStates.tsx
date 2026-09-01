export default function IdentityStates() {
  const rows = [
    {
      state: "Signed out",
      behavior:
        "Offer sign-in where runtime policy uses authenticated support; the public fallback collects only approved minimum matching data",
    },
    {
      state: "Signed in",
      behavior: (
        <>
          Prefill only approved account context from a trusted session —{" "}
          <strong>never display unrelated billing records by default</strong>
        </>
      ),
    },
    {
      state: "Multiple organizations",
      behavior:
        "Selection shown only after identity proof and only if the account model authorizes it",
    },
    {
      state: "Not authorized",
      behavior:
        "Explain that this path cannot provide the requested information or change, and give a safe next step",
    },
    {
      state: "Account not found",
      behavior: (
        <>
          <strong>Non-enumerating wording:</strong>{" "}
          &quot;We could not match the information to an eligible
          billing-support context&quot;
        </>
      ),
    },
    {
      state: "Expired session",
      behavior: (
        <>
          Require reauthentication where needed —{" "}
          <strong>never submit with stale authentication</strong>
        </>
      ),
    },
    {
      state: "Support agent override",
      behavior: <strong>No public bypass and no secret support override</strong>,
    },
  ];

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
                Identity, matching &amp; authorization
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
              Seven states, and none of them confirms an account exists.
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
              Account matching uses non-enumerating wording throughout, and
              support never overrides identity controls.
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
            {/* DESKTOP TABLE */}
            <div className="hidden md:block">
              {/* HEADER */}
              <div
                className="
                  grid
                  grid-cols-[minmax(0,0.45fr)_minmax(0,2fr)]
                  bg-[#fafbfc]
                "
              >
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
                    State
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
                    Required behavior
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {rows.map((row, index) => (
                <div
                  key={row.state}
                  className={`
                    grid
                    grid-cols-[minmax(0,0.45fr)_minmax(0,2fr)]
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* STATE */}
                  <div className="px-4 py-3.5">
                    <span
                      className="
                        text-sm
                        font-semibold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {row.state}
                    </span>
                  </div>

                  {/* BEHAVIOR */}
                  <div className="px-4 py-3.5">
                    <span
                      className="
                        text-sm
                        font-normal
                        leading-5
                        text-[#5d7192]
                      "
                    >
                      {row.behavior}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE / SMALL TABLET CARDS */}
            <div className="flex flex-col md:hidden">
              {rows.map((row, index) => (
                <div
                  key={row.state}
                  className={`
                    p-5
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* STATE */}
                  <div className="mb-4">
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
                      State
                    </p>

                    <p
                      className="
                        !m-0
                        mt-1.5
                        text-sm
                        font-semibold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {row.state}
                    </p>
                  </div>

                  {/* REQUIRED BEHAVIOR */}
                  <div>
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
                      Required behavior
                    </p>

                    <p
                      className="
                        !m-0
                        mt-1.5
                        text-sm
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      {row.behavior}
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