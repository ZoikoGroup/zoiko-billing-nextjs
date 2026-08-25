import Image from "next/image";
import Link from "next/link";

export default function JurisdictionCta() {
  return (
    <section className="w-full bg-white px-4 py-8 sm:px-6 lg:px-12">
      <div className="relative mx-auto flex w-full max-w-[1240px] flex-col overflow-hidden rounded-3xl bg-[#172B3D] p-6 sm:p-8 lg:flex-row lg:items-center lg:p-14">

        {/* Background glow */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(67,135,168,0.55)_0%,rgba(67,135,168,0)_70%)]" />

        {/* Left Content */}
        <div className="relative z-10 flex w-full flex-col items-start gap-5 lg:w-1/2 lg:pr-8">

          {/* Heading */}
          <h2 className="w-full text-3xl font-extrabold leading-[1.15] tracking-[-0.02em] !text-white sm:text-4xl sm:leading-10 lg:text-[42px]">
            Check the jurisdiction
            <br />
            before you assume the answer.
          </h2>

          {/* Description */}
          <p className="max-w-[511px] text-sm font-normal leading-6 !text-white/70 sm:text-base">
            See the current status, what it covers, what it excludes, which
            dependencies apply, and how recently it was reviewed.
          </p>

          {/* Buttons */}
          <div className="flex w-full flex-wrap items-center gap-3 pt-1">

            {/* Primary */}
            <Link
              href="/jurisdiction-availability"
              className="!inline-flex !min-h-11 !items-center !justify-center !rounded-full !bg-white !px-6 !text-sm !font-semibold !leading-6 !text-[#172B3D] !no-underline transition-opacity hover:!opacity-90"
            >
              Check availability
            </Link>

            {/* Secondary */}
            <Link
              href="/pricing"
              className="!inline-flex !min-h-11 !items-center !justify-center !rounded-full !border !border-white/40 !bg-transparent !px-6 !text-sm !font-semibold !leading-6 !text-white !no-underline transition-colors hover:!bg-white/10"
            >
              View pricing
            </Link>

            {/* Third */}
            <Link
              href="/global-billing"
              className="!inline-flex !min-h-11 !items-center !justify-center !rounded-full !border !border-white/40 !bg-transparent !px-6 !text-sm !font-semibold !leading-6 !text-white !no-underline transition-colors hover:!bg-white/10"
            >
              Global Billing overview
            </Link>

          </div>
        </div>

        {/* Right Image */}
        <div className="relative z-10 mt-8 w-full lg:mt-0 lg:w-1/2">
          <div className="relative aspect-[599/410] w-full overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-3 sm:p-5">
            <Image
              src="/images/jurisdiction-availability/jurisdiction-check.png"
              alt="Jurisdiction availability lookup"
              fill
              className="rounded-xl object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

      </div>
    </section>
  );
}