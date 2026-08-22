import Image from "next/image";
import Link from "next/link";

export default function OperatingModel() {
  return (
    <section className="w-full px-4 py-8 sm:px-6 lg:px-14">
      <div className="relative mx-auto flex min-h-[496px] w-full max-w-[1320px] flex-col overflow-hidden rounded-3xl bg-color-azure-14-2 p-6 sm:p-10 lg:p-14">
        {/* Background glow */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.5)_0%,rgba(56,189,248,0)_70%)] sm:h-96 sm:w-96" />

        <div className="relative z-10 flex w-full flex-col gap-3.5">
          {/* Heading */}
          <h2 className="text-2xl font-bold leading-9 text-white sm:text-3xl sm:leading-10">
            Choose the operating model,
            <br className="hidden sm:block" />
            then connect only what you scope.
          </h2>

          {/* Description */}
          <p className="max-w-[492px] text-sm leading-6 text-white/70 sm:text-base">
            Verify current availability, preserve authority and recoverability,
            and use the route that matches your situation — commercial or
            operational, never both at once.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 pt-2.5">
            <Link
              href="/create-account"
              className="inline-flex h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold leading-6 text-color-azure-14-2 transition hover:bg-white/90"
            >
              Create account
            </Link>

            <Link
              href="/pricing"
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/35 px-5 text-sm font-semibold leading-6 text-white transition hover:bg-white/10"
            >
              View pricing
            </Link>

            <Link
              href="/book-a-demo"
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/35 px-5 text-sm font-semibold leading-6 text-white transition hover:bg-white/10"
            >
              Book a demo
            </Link>
          </div>

          {/* Supporting text */}
          <p className="max-w-[384px] pt-1.5 text-xs leading-5 text-white/60">
            Zoiko Billing is standalone SaaS and may also be provided as an
            integrated component of Zoiko One.
          </p>
        </div>

        {/* Image */}
        <div className="relative z-10 mt-8 w-full lg:absolute lg:bottom-14 lg:right-14 lg:mt-0 lg:w-[42%] lg:max-w-[520px]">
          <div className="relative aspect-[520/384] w-full overflow-hidden rounded-2xl border border-white/15">
            <Image
              src="/images/zoiko-billing-plus-zoiko-one/operating-model.png"
              alt="Zoiko Billing operating model"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 520px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}