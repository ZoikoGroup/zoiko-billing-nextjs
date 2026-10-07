import Image from "next/image";

export default function ProductTourScenesSection() {
  return (
    <section className="hidden w-full bg-[#f8faff] py-16 font-[family-name:var(--font-inter)] text-slate-900 sm:py-20 md:py-24 lg:block">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20">
        {/* EYEBROW */}
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-0.5 w-6 bg-[#1D70F5]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7890b2] sm:text-xs">
            The Tour &middot; 7 Scenes
          </span>
          <span className="h-0.5 w-6 bg-[#1D70F5]" />
        </div>

        {/* HEADING */}
        <h2 className="!font-[family-name:var(--font-jakarta)] !m-0 max-w-[850px] text-center !text-[30px] font-extrabold !leading-[1.18] !tracking-[-0.035em] text-[#091127] sm:!text-[38px] md:!text-[44px]">
          Jump to any chapter. There is no <br className="hidden sm:inline" />
          forced sequence.
        </h2>

        {/* SUBTITLE */}
        <p className="!m-0 mt-3.5 max-w-[720px] text-center text-xs leading-relaxed text-[#5d7192] sm:text-sm md:text-base">
          Progress is descriptive &mdash;{" "}
          <strong className="font-semibold text-slate-800">Chapter 3 of 7</strong>
          , never a completion score. Text-only mode gives the full equivalent
          content without the specimen interface.
        </p>

        {/* 3D SCENES ILLUSTRATION */}
        <div className="mt-10 w-full max-w-[1240px] overflow-hidden rounded-[24px] bg-white shadow-[0_24px_60px_rgba(15,23,42,0.06)] sm:mt-12 sm:rounded-[32px] md:mt-14">
          <Image
            src="/images/product-tour/pt2.png"
            alt="Jump to any chapter seven scenes illustration"
            width={1240}
            height={680}
            priority
            className="h-auto w-full object-cover"
            sizes="(max-width: 1280px) 100vw, 1240px"
          />
        </div>
      </div>
    </section>
  );
}
