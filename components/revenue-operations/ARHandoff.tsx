export default function ARHandoff() {
  return (
    <section className="w-full border-t border-gray-200 bg-gray-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start gap-3.5 px-0 sm:px-4 lg:px-7">
        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <div className="h-px w-6 bg-blue-600 opacity-70" />
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Payment, AR &amp; reconciliation handoff
          </span>
        </div>

        {/* Heading */}
        <h2 className="w-full text-2xl font-bold leading-8 text-slate-900 sm:text-3xl sm:leading-10">
          Revenue Operations sees the downstream state. Finance decides it.
        </h2>

        {/* Description */}
        <p className="w-full max-w-[686px] text-sm leading-6 text-slate-600 sm:text-base">
          Visibility is what makes coordination possible. It is not the same
          as authority, and this page does not conflate them.
        </p>

        {/* Image */}
        <div className="mt-2 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <img
            src="/images/revenue-operations/ar-handoff.png"
            alt="Payment, accounts receivable and reconciliation handoff"
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}