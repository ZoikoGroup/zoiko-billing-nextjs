"use client";

export default function ReceivablesHandoff() {
  return (
    <section className="w-full bg-[#f7f8f8] px-6 py-16 sm:px-10 lg:px-28 lg:py-24">
      <div className="mx-auto flex w-full max-w-[1220px] flex-col items-start gap-9 lg:px-12">

        {/* ==================== HEADER ==================== */}
        <div className="flex w-full flex-col items-end justify-center gap-10 lg:flex-row lg:gap-16">

          {/* Left */}
          <div className="flex w-full flex-1 flex-col items-start gap-5 pt-2.5 pb-6">
            <div className="relative h-4 w-48">
              <div className="absolute left-0 top-[7.94px] h-0.5 w-5 rounded bg-gradient-to-r from-cyan-400 to-blue-500" />

              <span className="absolute left-[30px] top-[-1px] whitespace-nowrap text-xs font-medium uppercase leading-4 tracking-wider text-blue-500">
                Receivables handoff
              </span>
            </div>

            <div className="w-full max-w-[638px]">
              <h2 className="text-4xl font-medium leading-tight text-sky-950 sm:text-5xl sm:leading-[53.82px]">
                Delivery evidence
                <br />
                informs follow-up. It
                <br />
                does not prove the debt.
              </h2>
            </div>
          </div>

          {/* Right */}
          <div className="w-full max-w-[529px]">
            <p className="text-base font-normal leading-8 text-slate-600">
              Knowing whether a document actually reached someone changes how
              you follow up — and nothing more than that.
            </p>
          </div>
        </div>

        {/* ==================== MAIN CONTENT ==================== */}
        <div className="flex w-full flex-col items-start justify-center gap-10 pt-6 lg:flex-row lg:gap-16">

          {/* ==================== IMAGE ==================== */}
          <div className="flex w-full flex-col items-start gap-5 lg:w-[526px]">

            <img
              src="/images/documents-and-delivery/secure-access.png"
              alt="Receivables handoff and delivery evidence"
              className="h-auto max-h-[404px] w-full rounded-2xl border border-zinc-200 object-cover shadow-[0px_4px_14px_0px_rgba(14,33,27,0.04)]"
            />

            <div className="w-full">
              <p className="text-[10px] font-normal uppercase leading-5 tracking-wide text-slate-500">
                Balance and due-date context comes from approved sources, with
                its currency, date and allocation context attached.
              </p>
            </div>
          </div>

          {/* ==================== RIGHT CONTENT ==================== */}
          <div className="flex w-full flex-col items-start gap-1.5 lg:w-[526px]">

            <h3 className="text-lg font-semibold leading-6 text-sky-950">
              What the handoff carries
            </h3>

            <div className="flex w-full flex-col items-start gap-0.5 pb-9">

              {/* 01 */}
              <div className="flex w-full flex-col items-start gap-4 border-b border-zinc-200 py-3.5 sm:flex-row">
                <div className="w-full shrink-0 sm:w-36">
                  <p className="text-sm font-semibold leading-6 text-sky-950">
                    Document reference
                  </p>
                </div>

                <div className="flex-1">
                  <p className="text-sm font-normal leading-6 text-slate-600">
                    The invoice or credit note the follow-up relates to.
                  </p>
                </div>
              </div>

              {/* 02 */}
              <div className="flex w-full flex-col items-start gap-4 border-b border-zinc-200 py-3.5 sm:flex-row">
                <div className="w-full shrink-0 sm:w-36">
                  <p className="text-sm font-semibold leading-6 text-sky-950">
                    Current recipient and
                    <br />
                    state
                  </p>
                </div>

                <div className="flex-1">
                  <p className="text-sm font-normal leading-6 text-slate-600">
                    Who it was sent to, and the current delivery state.
                  </p>
                </div>
              </div>

              {/* 03 */}
              <div className="flex w-full flex-col items-start gap-4 border-b border-zinc-200 py-3.5 sm:flex-row">
                <div className="w-full shrink-0 sm:w-36">
                  <p className="text-sm font-semibold leading-6 text-sky-950">
                    Last verified attempt
                  </p>
                </div>

                <div className="flex-1">
                  <p className="text-sm font-normal leading-6 text-slate-600">
                    The most recent attempt with its result and failure reason.
                  </p>
                </div>
              </div>

              {/* 04 */}
              <div className="flex w-full flex-col items-start gap-4 border-b border-zinc-200 py-3.5 sm:flex-row">
                <div className="w-full shrink-0 sm:w-36">
                  <p className="text-sm font-semibold leading-6 text-sky-950">
                    Balance and due date
                  </p>
                </div>

                <div className="flex-1">
                  <p className="text-sm font-normal leading-6 text-slate-600">
                    Outstanding balance and due-date context from approved
                    sources.
                  </p>
                </div>
              </div>

              {/* 05 */}
              <div className="flex w-full flex-col items-start gap-4 border-b border-zinc-200 py-3.5 sm:flex-row">
                <div className="w-full shrink-0 sm:w-36">
                  <p className="text-sm font-semibold leading-6 text-sky-950">
                    Next permitted action
                  </p>
                </div>

                <div className="flex-1">
                  <p className="text-sm font-normal leading-6 text-slate-600">
                    Communication preference and what may legitimately happen
                    next.
                  </p>
                </div>
              </div>

              {/* 06 */}
              <div className="flex w-full flex-col items-start gap-4 py-3.5 sm:flex-row">
                <div className="w-full shrink-0 sm:w-36">
                  <p className="text-sm font-semibold leading-6 text-sky-950">
                    Pause conditions
                  </p>
                </div>

                <div className="flex-1">
                  <p className="text-sm font-normal leading-6 text-slate-600">
                    Dispute, hold, privacy concern or contact correction all
                    pause follow-up.
                  </p>
                </div>
              </div>

            </div>

            {/* ==================== INTERPRETATION BOUNDARY ==================== */}
            <div className="flex w-full flex-col items-start gap-2 rounded-r-2xl border-l-[3px] border-blue-500 bg-[#f7f8f8] px-7 py-7">

              <div className="w-full">
                <p className="text-[10px] font-normal uppercase leading-4 tracking-wide text-blue-500">
                  Interpretation boundary
                </p>
              </div>

              <div className="w-full">
                <p className="text-base font-normal leading-7 text-sky-950">
                  Delivery state is not proof that a debt is valid or
                  undisputed. External follow-up requires approved content,
                  recipient, timing and permission before anything is sent.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* ==================== CTA ==================== */}
       {/* CTA */}
<div className="flex w-full items-center pt-2">
  <a
    href="#"
    style={{ color: "#ffffff" }}
    className="inline-flex min-h-11 items-center justify-center rounded-lg bg-sky-950 px-5 py-2.5 text-base font-normal leading-6 no-underline outline outline-1 outline-sky-950 transition-colors hover:bg-sky-900"
  >
    <span style={{ color: "#ffffff" }}>
      Explore Accounts Receivable
    </span>
  </a>
</div>
      </div>
    </section>
  );
}