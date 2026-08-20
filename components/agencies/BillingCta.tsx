import Image from "next/image";

export default function BillingCta() {
  return (
    <section className="w-full px-4 py-8 sm:px-6 lg:px-14 lg:py-12">
      <div className="relative mx-auto flex w-full max-w-[1320px] overflow-hidden rounded-3xl bg-slate-950 p-6 sm:p-10 lg:min-h-[496px] lg:p-14">
        {/* Background glow */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-blue-600/30 blur-3xl" />

        <div className="relative z-10 grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1fr)_520px] lg:gap-12">
          {/* Content */}
          <div className="flex flex-col items-start gap-3.5">
            {/* Heading */}
            <h2 className="!m-0 max-w-[620px] !text-[30px] !font-extrabold !leading-[1.15] tracking-tight text-white">
              Keep every client-billing
              <br className="hidden sm:block" />
              decision connected to its source.
            </h2>

            {/* Description */}
            <p className="max-w-[511px] text-sm font-normal leading-6 text-white/70 sm:text-base">
              Coordinate fee bases, retainers, pass-through costs, invoices,
              delivery and receivables without losing ownership or correction
              history.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 pt-2.5">
              <button
                type="button"
                className="min-h-11 rounded-full bg-white px-5 text-sm font-semibold leading-6 text-slate-950 transition hover:bg-gray-100"
              >
                Create account
              </button>

              <button
                type="button"
                className="min-h-11 rounded-full border border-white/30 px-5 text-sm font-semibold leading-6 text-white transition hover:bg-white/10"
              >
                Book a demo
              </button>

              <button
                type="button"
                className="min-h-11 rounded-full border border-white/30 px-5 text-sm font-semibold leading-6 text-white transition hover:bg-white/10"
              >
                View pricing
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full overflow-hidden rounded-2xl border border-white/15">
            <Image
              src="/images/agencies/cta.png"
              alt="Client billing workflow"
              width={520}
              height={384}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}