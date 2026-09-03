import Link from "next/link";
import Image from "next/image";

export default function BillingCta() {
  return (
    <section className="w-full px-4 py-8 sm:px-6 lg:px-14">
      <div className="relative mx-auto flex min-h-[384px] w-full max-w-[1320px] overflow-hidden rounded-3xl bg-slate-950 p-6 sm:p-10 lg:p-14">
        {/* Background glow */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

        {/* Content */}
        <div className="relative z-20 flex w-full flex-col items-start gap-3.5 lg:w-[55%]">
          <div className="flex w-full flex-col items-start">
            <h2 className="!m-0 text-2xl font-bold leading-8 !text-white sm:text-3xl sm:leading-10">
              Keep service billing tied to
              <br className="hidden sm:block" />
              the work and approvals behind it.
            </h2>
          </div>

          <div className="w-full max-w-[511px]">
            <p className="!m-0 text-sm font-normal leading-6 !text-white/70 sm:text-base">
              Coordinate project, retainer and service-billing journeys with
              visible basis, owners, changes and downstream payment states.
            </p>
          </div>

          {/* Buttons */}
          <div className="relative z-30 flex w-full flex-wrap items-center gap-3 pt-2.5">
            {/* Create account */}
            <Link
              href="/create-account"
              className="!inline-flex min-h-11 items-center justify-center rounded-full !bg-white px-5 text-center text-sm font-semibold leading-6 !text-slate-950 no-underline transition-opacity hover:!bg-gray-100 hover:!text-slate-950"
            >
              Create account
            </Link>

            {/* Book a demo */}
            <Link
              href="/book-demo"
              className="!inline-flex min-h-11 items-center justify-center rounded-full !border !border-white/40 !bg-transparent px-5 text-center text-sm font-semibold leading-6 !text-white no-underline transition-colors hover:!bg-white/10 hover:!text-white"
            >
              Book a demo
            </Link>

            {/* View pricing */}
            <Link
              href="/pricing-and-plans"
              className="!inline-flex min-h-11 items-center justify-center rounded-full !border !border-white/40 !bg-transparent px-5 text-center text-sm font-semibold leading-6 !text-white no-underline transition-colors hover:!bg-white/10 hover:!text-white"
            >
              View pricing
            </Link>
          </div>
        </div>

        {/* CTA Image */}
        <div className="relative z-10 mt-8 w-full lg:absolute lg:right-8 lg:top-8 lg:mt-0 lg:w-[42%]">
          <div className="overflow-hidden rounded-2xl border border-white/15">
            <Image
              src="/images/professional-services/billing-cta.png"
              alt="Service billing workflow"
              width={520}
              height={339}
              className="block h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}