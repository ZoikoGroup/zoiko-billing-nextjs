export default function MethodRender() {
  const rows = [
    {
      method: "Identifier + secret",
      rule: (
        <>
          Only if the current identity service uses it, with correct
          password-manager semantics and accessible reveal control.
        </>
      ),
      doNotAssume: (
        <>
          Password policy, storage or hashing, breach logic, lockout threshold
        </>
      ),
    },
    {
      method: (
        <>
          Federated / organization
          <br />
          identity
        </>
      ),
      rule: (
        <>
          Approved provider option shown only when public-safe or after
          sufficient identity context.
        </>
      ),
      doNotAssume: (
        <>
          Tenant relationships, provider configuration, metadata endpoints,
          trust topology
        </>
      ),
    },
    {
      method: "Additional verification",
      rule: "The approved next step rendered when required.",
      doNotAssume: (
        <>
          <strong>Full factor inventory</strong>, enrollment status, backup
          structure, risk score
        </>
      ),
    },
    {
      method: (
        <>
          Device / credential
          <br />
          method
        </>
      ),
      rule: "Rendered only if actually supported and available.",
      doNotAssume: (
        <>
          Implementation detail, credential identifiers, attestation or device
          internals
        </>
      ),
    },
    {
      method: "Recovery",
      rule: 'Abstracted as "Recover access" into the approved secure flow.',
      doNotAssume: (
        <>
          <strong>Any assumption of email, SMS, MFA or admin bypass</strong>
        </>
      ),
    },
  ];

  return (
    <section className="w-full bg-[#f7f8fa]">
      <div
        className="
          mx-auto flex w-full max-w-[1440px] flex-col items-start
          px-5 py-14
          sm:px-8 sm:py-16
          md:px-10 md:py-20
          lg:px-14
          xl:px-20
        "
      >
        <div
          className="
            mx-auto flex w-full max-w-[1240px] flex-col items-center
            gap-8
            sm:gap-10
            md:gap-11
          "
        >
          {/* SECTION INTRO */}
          <div
            className="
              flex w-full max-w-[1000px] flex-col items-center
              gap-3 pt-2 text-center
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

              <span
                className="
                  text-[10px] font-bold uppercase leading-4
                  tracking-[0.16em] text-[#7890b2]
                  sm:text-xs sm:tracking-[0.18em]
                "
              >
                Sign-in method rendering contract
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0 w-full max-w-[662px]
                !text-[30px] !font-extrabold !leading-[1.2]
                !tracking-[-0.035em] !text-[#091127]
                sm:!text-[34px]
                md:!text-[36px]
                lg:!text-[40px]
              "
            >
              Five method classes, none of them
              assumed.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0 w-full max-w-[687px]
                text-[15px] font-normal leading-7 text-[#5d7192]
                sm:text-base
              "
            >
              A method renders only where the current identity configuration
              actually supports it — which is why every label on this page is
              a placeholder.
            </p>
          </div>

          {/* TABLE */}
          <div
            className="
              w-full overflow-hidden rounded-2xl border border-[#dfe5ee]
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
                  grid-cols-[176px_minmax(0,1.15fr)_minmax(0,0.8fr)]
                  bg-[#fafbfc]
                "
              >
                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Method class
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Visible UX rule
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Do not assume or expose
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {rows.map((row, index) => (
                <div
                  key={index}
                  className={`
                    grid
                    grid-cols-[176px_minmax(0,1.15fr)_minmax(0,0.8fr)]
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  <div className="px-4 py-3.5">
                    <span className="text-sm font-semibold leading-5 text-[#091127]">
                      {row.method}
                    </span>
                  </div>

                  <div className="px-4 py-3.5">
                    <span className="text-sm font-normal leading-5 text-[#5d7192]">
                      {row.rule}
                    </span>
                  </div>

                  <div className="px-4 py-3.5">
                    <span className="text-sm font-normal leading-5 text-[#5d7192]">
                      {row.doNotAssume}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE / SMALL TABLET CARDS */}
            <div className="flex flex-col md:hidden">
              {rows.map((row, index) => (
                <div
                  key={index}
                  className={`
                    p-5
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* METHOD */}
                  <div className="mb-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Method class
                    </p>

                    <p className="!m-0 mt-1.5 text-sm font-semibold leading-5 text-[#091127]">
                      {row.method}
                    </p>
                  </div>

                  {/* RULE */}
                  <div className="mb-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Visible UX rule
                    </p>

                    <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                      {row.rule}
                    </p>
                  </div>

                  {/* DO NOT ASSUME */}
                  <div>
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Do not assume or expose
                    </p>

                    <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                      {row.doNotAssume}
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