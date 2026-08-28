export default function IndexPolicy() {
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
                Indexing &amp; conversion policy
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
              An authentication surface is not a
              landing page.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0 w-full max-w-[687px]
                text-[15px] font-normal leading-7 text-[#5d7192]
                sm:text-base
              "
            >
              Two rules that keep the primary path clean and out of search
              results.
            </p>
          </div>

          {/* CARDS */}
          <div className="flex w-full flex-col items-stretch gap-5 md:flex-row">
            {/* INDEXING */}
            <div
              className="
                flex-1 rounded-2xl border border-[#dfe5ee] bg-white
                px-5 pt-5 pb-8
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                sm:px-6 sm:pt-6 sm:pb-9
              "
            >
              <h3
                className="
                  !m-0 pb-1
                  text-lg font-bold leading-7 tracking-[-0.02em]
                  text-[#091127]
                "
              >
                Indexing
              </h3>

              <p
                className="
                  !m-0 pt-2
                  text-sm font-normal leading-5 text-[#5d7192]
                "
              >
                The sign-in surface is{" "}
                <strong className="font-normal">noindex</strong>. Recovery,
                verification and error states are never indexed, and no state
                carries a sensitive identifier in its URL that could be
                captured by a referrer, browser history or analytics.
              </p>

              <p
                className="
                  !m-0 pt-4
                  text-sm font-normal leading-5 text-[#5d7192]
                "
              >
                Public help content about sign-in problems lives in Help
                Center, where it can be indexed safely without exposing an
                authentication flow.
              </p>
            </div>

            {/* CONVERSION RESTRAINT */}
            <div
              className="
                flex-1 rounded-2xl border border-[#dfe5ee] bg-[#eef0f3]
                px-5 pt-5 pb-8
                sm:px-6 sm:pt-6 sm:pb-10
              "
            >
              <h3
                className="
                  !m-0 pb-1
                  text-lg font-bold leading-7 tracking-[-0.02em]
                  text-[#091127]
                "
              >
                Conversion restraint
              </h3>

              <p
                className="
                  !m-0 pt-2
                  text-sm font-normal leading-5 text-[#5d7192]
                "
              >
                No marketing navigation, pricing, promotion or demo prompt
                competes with the sign-in action. A person who reaches this
                page is trying to get into an account they already have.
              </p>

              <p
                className="
                  !m-0 pt-4
                  text-sm font-normal leading-5 text-[#5d7192]
                "
              >
                A single approved account-creation link may appear where the
                commercial state supports it — visually subordinate, never a
                competing primary action.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}