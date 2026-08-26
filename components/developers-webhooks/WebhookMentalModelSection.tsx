interface StepModelRow {
  step: string;
  meaning: string;
  notTheSameAs: string;
}

const stepModelRows: StepModelRow[] = [
  {
    step: "1 · Event occurs",
    meaning: "An approved billing state change is recorded in the platform.",
    notTheSameAs: "An outbound delivery",
  },
  {
    step: "2 · Subscription matches",
    meaning: "Configured event selection determines whether an endpoint is eligible.",
    notTheSameAs: "Proof that the endpoint received anything",
  },
  {
    step: "3 · Delivery is created",
    meaning: "The platform prepares an outbound delivery per the canonical contract.",
    notTheSameAs: "A successful attempt",
  },
  {
    step: "4 · Receiver responds",
    meaning: "The consumer receives, verifies, processes and responds.",
    notTheSameAs: "Business processing being complete",
  },
  {
    step: "5 · Evidence is recorded",
    meaning: "Attempt and result evidence becomes available per permission and retention.",
    notTheSameAs: "Unlimited retention of payload content",
  },
];

export default function WebhookMentalModelSection() {
  return (
    <section className="w-full bg-slate-50/60 py-16 lg:py-24 border-t border-slate-100" id="mental-model">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          WEBHOOK MENTAL MODEL
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          A business event and a delivery attempt are different things.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          One event can produce several delivery attempts. One failed attempt does not mean
          the event did not happen.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[680px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    STEP
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-[45%]">
                    MEANING
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-[30%]">
                    NOT THE SAME AS
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {stepModelRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.step}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.meaning}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.notTheSameAs}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
