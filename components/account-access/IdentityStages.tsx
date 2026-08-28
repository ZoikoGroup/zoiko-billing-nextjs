export default function IdentityStages() {
  const rows = [
    {
      stage: "Pre-identity",
      mayShow:
        "Brand, generic sign-in instruction, and approved public method labels where globally safe.",
      mustNotShow: (
        <>
          <strong>Whether an account exists</strong>; organization membership;
          configured factors; security policy detail
        </>
      ),
    },
    {
      stage: "Identifier entered",
      mayShow:
        "Only the next safe interface element required to continue.",
      mustNotShow: (
        <>
          <strong>Confirmation that the identifier is registered</strong>,
          unless explicitly security-reviewed
        </>
      ),
    },
    {
      stage: (
        <>
          Sufficient identity
          <br />
          established
        </>
      ),
      mayShow:
        "Organization and method context, only to the extent the approved flow needs.",
      mustNotShow:
        "Other organizations or accounts; admin and security configuration; hidden factors",
    },
    {
      stage: "Authenticated",
      mayShow:
        "The application determines authorization and accessible workspace content.",
      mustNotShow: (
        <strong>
          The login page never infers or promises role or entitlement
        </strong>
      ),
    },
  ];

  return (
    <section className="w-full bg-[#f7f8fa]">
      <div
        className="
          mx-auto flex w-full max-w-[1440px] flex-col items-start
          px-5 py-14 sm:px-8 sm:py-16 md:px-10 md:py-20
          lg:px-14 xl:px-20
        "
      >
        <div
          className="
            mx-auto flex w-full max-w-[1240px] flex-col items-center
            gap-8 sm:gap-10 md:gap-11
          "
        >
          {/* INTRO */}
          <div
            className="
              flex w-full max-w-[1000px] flex-col items-center
              gap-3 pt-2 text-center
            "
          >
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

              <span
                className="
                  text-[10px] font-bold uppercase leading-4
                  tracking-[0.16em] text-[#7890b2]
                  sm:text-xs sm:tracking-[0.18em]
                "
              >
                Identity disclosure stages
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            <h2
              className="
                !m-0 w-full max-w-[662px]
                !text-[30px] !font-extrabold !leading-[1.2]
                !tracking-[-0.035em] !text-[#091127]
                sm:!text-[34px] md:!text-[36px] lg:!text-[40px]
              "
            >
              Four stages, and account existence is
              never confirmed.
            </h2>

            <p
              className="
                !m-0 w-full max-w-[687px]
                text-[15px] font-normal leading-7 text-[#5d7192]
                sm:text-base
              "
            >
              What may appear on screen expands only as identity is genuinely
              established — never earlier.
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
            {/* DESKTOP */}
            <div className="hidden md:block">
              <div
                className="
                  grid
                  grid-cols-[176px_minmax(0,1.05fr)_minmax(0,1fr)]
                  bg-[#fafbfc]
                "
              >
                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Stage
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    May show
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Must not show
                  </span>
                </div>
              </div>

              {rows.map((row, index) => (
                <div
                  key={index}
                  className={`
                    grid grid-cols-[176px_minmax(0,1.05fr)_minmax(0,1fr)]
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  <div className="px-4 py-3.5">
                    <span className="text-sm font-semibold leading-5 text-[#091127]">
                      {row.stage}
                    </span>
                  </div>

                  <div className="px-4 py-3.5">
                    <span className="text-sm font-normal leading-5 text-[#5d7192]">
                      {row.mayShow}
                    </span>
                  </div>

                  <div className="px-4 py-3.5">
                    <span className="text-sm font-normal leading-5 text-[#5d7192]">
                      {row.mustNotShow}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE */}
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
                  <div className="mb-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Stage
                    </p>
                    <p className="!m-0 mt-1.5 text-sm font-semibold leading-5 text-[#091127]">
                      {row.stage}
                    </p>
                  </div>

                  <div className="mb-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      May show
                    </p>
                    <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                      {row.mayShow}
                    </p>
                  </div>

                  <div>
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Must not show
                    </p>
                    <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                      {row.mustNotShow}
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