import Image from "next/image";

export default function RevenueCycleOperatingModel() {
  return (
    <section className="w-full border-t border-slate-200 bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start gap-3.5 px-0 sm:px-2 lg:px-7">
        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <div className="h-px w-6 bg-blue-600 opacity-70" />

          <span className="text-xs font-bold uppercase leading-4 tracking-[0.16em] text-blue-600">
            Revenue-cycle operating model
          </span>
        </div>

        {/* Heading */}
        <div className="w-full">
          <h2 className="m-0 text-2xl font-bold leading-8 text-slate-900 sm:text-3xl sm:leading-10">
            Ten stages, each with an owner and a piece of evidence.
          </h2>
        </div>

        {/* Description */}
        <div className="w-full max-w-[686px]">
          <p className="m-0 text-sm font-normal leading-6 text-slate-600 sm:text-base">
            Coordination works when everyone can see which stage a thing is
            actually in. Approved is not issued, and issued is not delivered.
          </p>
        </div>

        {/* Operating Model Image */}
        <div className="mt-5 w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]">
          <Image
            src="/images/revenue-operations/revenue-cycle-operating-model.png"
            alt="Revenue-cycle operating model"
            width={1264}
            height={623}
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}