import Image from "next/image";
import Link from "next/link";

export default function AgencyHero() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto flex min-h-[477px] w-full max-w-[1320px] flex-col items-center gap-10 px-6 py-10 sm:px-8 lg:flex-row lg:items-center lg:gap-12 lg:px-14 lg:py-8">
        
        {/* Content */}
        <div className="flex w-full max-w-[714px] flex-col items-start gap-4">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-blue-600 opacity-70" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              Solution for agencies
            </span>
          </div>
{/* Heading */}
{/* Heading */}
<h1 className="!m-0 w-full max-w-[620px] !text-[30px] !font-extrabold !leading-[1.15] tracking-tight text-slate-900 sm:!text-[30px] lg:!text-[30px]">
  Keep client billing clear
  <br />
  from{" "}
  <span className="text-blue-600">
    approved fee to
  </span>
  <br />
  <span className="text-blue-600">
    outstanding balance.
  </span>
</h1>
          {/* Description */}
          <p className="max-w-[686px] text-base font-normal leading-6 text-slate-600">
            Coordinate client accounts, approved fee arrangements, retainers,
            project or recurring-service billing, pass-through costs, invoices,
            delivery, changes, disputes, outstanding balances and payment
            handoffs — without turning billing into a campaign-management,
            media-buying or project-management system.
          </p>

          {/* Buttons */}
          <div className="flex w-full flex-col gap-3 pt-2 sm:w-auto sm:flex-row">
            <Link
              href="/pricing-and-plans"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-blue-600 px-5 text-center text-sm font-semibold leading-6 text-white shadow-[0px_6px_16px_0px_rgba(31,111,235,0.24)] transition hover:bg-blue-700"
            >
              View Pricing &amp; Plans
            </Link>

            <Link
              href="/create-account"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-gray-200 bg-white px-5 text-center text-sm font-semibold leading-6 text-slate-900 transition hover:bg-gray-50"
            >
              Create account
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full max-w-[480px] shrink-0">
          <Image
            src="/images/agencies/agency.png"
            alt="Agency billing"
            width={480}
            height={397}
            priority
            className="h-auto w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}