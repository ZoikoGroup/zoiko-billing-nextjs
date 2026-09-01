export default function AbuseControl() {
  return (
    <section className="w-full bg-[#091127]">
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
            gap-6
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
              <span className="h-px w-4 shrink-0 bg-white opacity-40" />

              <span
                className="
                  text-[10px] font-bold uppercase leading-4
                  tracking-[0.16em] text-white/55
                  sm:text-xs sm:tracking-[0.18em]
                "
              >
                Abuse, rate limit &amp; lockout
              </span>

              <span className="h-px w-4 shrink-0 bg-white opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0 w-full max-w-[662px]
                !text-[30px] !font-extrabold !leading-[1.2]
                !tracking-[-0.035em] !text-white
                sm:!text-[34px]
                md:!text-[36px]
                lg:!text-[40px]
              "
            >
              Protective controls exist. The
              interface does not describe them.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0 w-full max-w-[687px]
                text-[15px] font-normal leading-7 text-white/72
                sm:text-base
              "
            >
              Thresholds, counters, timing windows, detection rules, risk
              scores and bypass conditions stay behind the interface — the
              visible UX remains neutral and consistent.
            </p>
          </div>

          {/* IMAGE */}
          <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]">
            <img
              src="/images/account-access/abuse-control.png"
              alt="Abuse, rate limit and lockout controls"
              className="block h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}