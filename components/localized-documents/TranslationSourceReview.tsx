import Image from "next/image";

export default function TranslationSourceReview() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 md:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1000px] flex-col items-center gap-8">
        {/* Heading Section */}
        <div className="flex w-full max-w-[1000px] flex-col items-center gap-3 text-center">
          {/* Label */}
          <div className="flex w-full items-center justify-center gap-3">
            <span className="h-px w-4 shrink-0 bg-sky-600/40 sm:w-6" />

            <span className="whitespace-nowrap text-[10px] font-bold uppercase leading-4 tracking-[0.15em] text-sky-600 sm:text-xs">
              Translation source, review &amp; fallback
            </span>

            <span className="h-px w-4 shrink-0 bg-sky-600/40 sm:w-6" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl sm:leading-10">
            <span className="block">
              Partial translation is a state, not a
            </span>
            <span className="block">rounding error.</span>
          </h2>

          {/* Description */}
          <p className="w-full max-w-[687px] text-sm font-normal leading-6 text-slate-600 sm:text-base sm:leading-7">
            Eight translation states, each with defined production behavior.
            A partially translated document never silently looks complete.
          </p>
        </div>

        {/* Image */}
        <div className="w-full">
          <Image
            src="/images/localized-documents/translation-source-review.png"
            alt="Translation source, review and fallback"
            width={1184}
            height={592}
            priority
            className="h-auto w-full rounded-2xl border border-slate-200 bg-white object-contain shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05)]"
          />
        </div>
      </div>
    </section>
  );
}