export default function WorkQueue() {
  return (
    <section className="w-full border-t border-gray-200 bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start gap-3.5 px-0 sm:px-4 lg:px-7">
        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <div className="h-px w-6 bg-blue-600 opacity-70" />
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Work queue &amp; exceptions
          </span>
        </div>

        {/* Heading */}
        <h2 className="w-full text-2xl font-bold leading-8 text-slate-900 sm:text-3xl sm:leading-10">
          Every item names its stage, source, reason, owner and next action.
        </h2>

        {/* Description */}
        <p className="w-full max-w-[686px] text-sm leading-6 text-slate-600 sm:text-base">
          Priority comes from workflow state, written policy, timing and
          authorized human decisions — nothing else.
        </p>

        {/* Image */}
        <div className="mt-2 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <img
            src="/images/revenue-operations/work-queue.png"
            alt="Work queue and exceptions"
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}