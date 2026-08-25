export default function DocumentSurface() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1000px] flex-col items-center gap-5">
        {/* Heading */}
        <div className="flex w-full max-w-[1000px] flex-col items-center gap-3 pt-2">
          <div className="flex w-full max-w-[384px] items-center justify-center gap-3">
            <span className="h-px w-4 shrink-0 bg-sky-600/40" />

            <span className="text-center text-xs font-bold uppercase leading-4 tracking-[0.15em] text-sky-600">
              Language support by document surface
            </span>

            <span className="h-px w-4 shrink-0 bg-sky-600/40" />
          </div>

          <div className="w-full text-center">
            <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl sm:leading-10">
              An invoice PDF is not a credit note, and
              neither is an email.
            </h2>
          </div>

          <div className="w-full max-w-[687px] pt-1 text-center">
            <p className="text-sm font-normal leading-6 text-slate-600 sm:text-base sm:leading-7">
              Support is tracked independently per surface, in the same
              governed vocabulary.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05)]">
          <img
            src="/images/localized-documents/localized-documents.png"
            alt="Language support by document surface"
            className="block h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}