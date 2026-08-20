import Image from "next/image";

export default function BoundaryModel() {
  return (
    <section className="w-full bg-slate-950 px-4 py-12 sm:px-6 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-8">
        {/* Heading */}
        <div className="w-full max-w-[680px] pt-2 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-4 bg-white/40" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/55">
              Usage, seat &amp; entitlement references
            </span>

            <span className="h-px w-4 bg-white/40" />
          </div>

          <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl sm:leading-[1.15] lg:text-5xl lg:leading-[1.14]">
            The boundary model, stated plainly.
          </h2>

          <p className="mx-auto mt-5 max-w-[687px] text-sm font-normal leading-6 text-white/70 sm:text-base sm:leading-7">
            External quantities can become billable input. That is an input
            boundary — not proof that Zoiko Billing collects raw product
            events, meters them, applies rating tiers or enforces usage limits.
          </p>
        </div>

        {/* Image */}
        <div className="w-full overflow-hidden rounded-2xl">
          <Image
            src="/images/saas-and-digital-services/boundary-model.png"
            alt="Usage, seat and entitlement boundary model"
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