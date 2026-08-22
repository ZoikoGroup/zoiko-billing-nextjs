import Image from "next/image";
import Link from "next/link";

export default function SaasHero() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-6 py-14 sm:px-8 sm:py-16 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(420px,539px)] lg:items-center lg:gap-10 lg:px-14 lg:py-20">
        {/* Content */}
        <div className="flex w-full max-w-[660px] flex-col items-start gap-3.5 lg:justify-self-center">
          {/* Eyebrow */}
          <div className="relative flex h-4 items-center">
            <div className="h-px w-6 bg-blue-600 opacity-70" />

            <span className="ml-2.5 text-xs font-bold uppercase leading-4 tracking-widest text-blue-600">
              Solution for SaaS &amp; digital services
            </span>
          </div>

          {/* Heading */}
          <h1 className="!max-w-[500px] !text-[40px] !font-extrabold !leading-[1.12] !text-gray-900">
            Keep recurring digital-service billing controlled{" "}
            <span className="!text-blue-600">
              without hiding the source of change.
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-[650px] text-sm font-normal leading-6 text-gray-600 sm:text-base">
            Coordinate approved customer and service context, service
            periods, repeat billing schedules, one-time fees or add-ons,
            approved external usage or seat references where supported,
            invoices, delivery, changes, outstanding balances and payment
            handoffs — with visible ownership and evidence.
          </p>

          {/* Buttons */}
          <div className="mt-3 flex w-full flex-wrap gap-2.5">
            <Link
              href="/signup"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-blue-600 px-5 text-sm font-semibold leading-6 text-white shadow-[0px_6px_16px_0px_rgba(31,111,235,0.24)] transition hover:bg-blue-700"
            >
              Create Account
            </Link>

            <Link
              href="/pricing"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-gray-200 bg-white px-5 text-sm font-semibold leading-6 text-gray-900 transition hover:bg-gray-50"
            >
              View Pricing &amp; Plans
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full max-w-[480px] overflow-hidden rounded-2xl lg:justify-self-center">
          <div className="rounded-[26px] bg-[#f1edff] p-3.5 sm:p-4">
            <div className="relative aspect-square w-full overflow-hidden rounded-[20px]">
              <Image
                src="/images/saas-and-digital-services/image.png"
                alt="SaaS and digital services billing"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-3 px-6 pb-14 sm:grid-cols-2 sm:px-8 sm:pb-16 lg:grid-cols-4 lg:gap-4 lg:px-14 lg:pb-20">
        {/* Card 1 */}
        <div className="flex min-h-[145px] flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-[0px_8px_24px_rgba(15,23,42,0.05)]">
          <span className="text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">
            Ready to bill
          </span>

          <span className="pt-1.5 text-2xl font-extrabold leading-9 text-slate-950">
            42
          </span>

          <p className="text-xs leading-5 text-slate-500">
            Service periods with requirements satisfied
            <br />
            · as of 09:20 BST
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex min-h-[145px] flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-[0px_8px_24px_rgba(15,23,42,0.05)]">
          <span className="text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">
            Source stale
          </span>

          <span className="pt-1.5 text-2xl font-extrabold leading-9 text-slate-950">
            6
          </span>

          <p className="text-xs leading-5 text-slate-500">
            External quantities past the freshness
            <br />
            policy
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex min-h-[145px] flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-[0px_8px_24px_rgba(15,23,42,0.05)]">
          <span className="text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">
            Changes pending
          </span>

          <span className="pt-1.5 text-2xl font-extrabold leading-9 text-slate-950">
            9
          </span>

          <p className="text-xs leading-5 text-slate-500">
            Add-on or service-change references
            <br />
            awaiting approval
          </p>
        </div>

        {/* Card 4 */}
        <div className="flex min-h-[145px] flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-[0px_8px_24px_rgba(15,23,42,0.05)]">
          <span className="text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">
            Open exceptions
          </span>

          <span className="pt-1.5 text-2xl font-extrabold leading-9 text-slate-950">
            7
          </span>

          <p className="text-xs leading-5 text-slate-500">
            Schedule, delivery, reminder or payment
            <br />
            issues
          </p>
        </div>
      </div>
    </section>
  );
}