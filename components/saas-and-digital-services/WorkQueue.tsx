import Image from "next/image";

export default function WorkQueue() {
  return (
    <section className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-8">
        {/* Heading */}
        <div className="w-full max-w-[680px] pt-2 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-4 bg-blue-600/40" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              Work queue &amp; exceptions
            </span>

            <span className="h-px w-4 bg-blue-600/40" />
          </div>

          <h2 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl sm:leading-[1.15] lg:text-5xl lg:leading-[1.14]">
            Every item names its basis, source,
            <br className="hidden sm:block" />
            reason and owner.
          </h2>

          <p className="mx-auto mt-5 max-w-[687px] text-sm font-normal leading-6 text-slate-600 sm:text-base sm:leading-7">
            Priority comes from operational state, timing, written policy and
            authorized human decisions.
          </p>
        </div>

        {/* Image */}
        <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05)] shadow-[0px_1px_2px_0px_rgba(15,23,42,0.04)]">
          <Image
            src="/images/saas-and-digital-services/work-queue.png"
            alt="Work queue and exceptions"
            width={1184}
            height={592}
            className="h-auto w-full object-cover"
            sizes="(max-width: 1240px) 100vw, 1184px"
          />
        </div>
      </div>
    </section>
  );
}