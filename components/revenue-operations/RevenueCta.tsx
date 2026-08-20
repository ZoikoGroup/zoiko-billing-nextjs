import Link from "next/link";

export default function RevenueCta() {
  return (
    <section className="w-full bg-white px-4 pb-8 pt-12 sm:px-6 sm:pt-16 lg:px-14">
      <div className="mx-auto w-full max-w-[1320px] px-0 sm:px-4 lg:px-7">
        <div className="relative overflow-hidden rounded-3xl bg-[#17233f] px-6 py-8 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
          {/* Background glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.5)_0%,rgba(59,130,246,0)_70%)]" />

          <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_520px]">
            {/* Content */}
            <div className="flex flex-col items-start gap-3.5">
              <h2 className="text-2xl font-bold leading-8 !text-white sm:text-3xl sm:leading-10">
                Keep the billing revenue cycle
                <br className="hidden sm:block" />
                moving with visible ownership.
              </h2>

              <p className="max-w-[511px] text-sm leading-6 !text-white/70 sm:text-base">
                Coordinate inputs, schedules, documents, changes, exceptions
                and downstream finance handoffs without losing the source
                record or the reason behind each state.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 pt-2.5">
                <Link
                  href="#"
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold leading-6 !text-[#17233f] shadow-sm transition-opacity hover:opacity-90"
                >
                  Create account
                </Link>

                <Link
                  href="#"
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/35 bg-transparent px-5 text-sm font-semibold leading-6 !text-white transition-colors hover:bg-white/10"
                >
                  Book a demo
                </Link>

                <Link
                  href="#"
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/35 bg-transparent px-5 text-sm font-semibold leading-6 !text-white transition-colors hover:bg-white/10"
                >
                  View pricing
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="w-full overflow-hidden rounded-2xl border border-white/15">
              <img
                src="/images/revenue-operations/revenue-cta.png"
                alt="Revenue operations billing workflow"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}