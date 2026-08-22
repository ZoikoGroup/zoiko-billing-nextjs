import Image from "next/image";
import Link from "next/link";

export default function BillingControlCta() {
  return (
    <section className="w-full bg-white px-4 py-8 sm:px-6 sm:py-12 md:px-8 lg:px-12 xl:px-16">
      <div className="relative mx-auto flex w-full max-w-[1240px] flex-col overflow-hidden rounded-3xl bg-[#17283A] px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 lg:min-h-[525px] lg:px-14 lg:py-14">
        {/* Background Glow */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(55,135,255,0.55)_0%,rgba(55,135,255,0)_70%)] sm:h-80 sm:w-80 lg:-right-20 lg:-top-28 lg:h-96 lg:w-96" />

        {/* Content */}
        <div className="relative z-10 flex w-full flex-col items-start gap-3.5 lg:max-w-[650px]">
          {/* Heading */}
          <h2 className="w-full text-2xl font-extrabold leading-8 tracking-tight text-white sm:text-3xl sm:leading-9 lg:text-4xl lg:leading-10">
            Scale billing control without collapsing authority.
          </h2>

          {/* Description */}
          <p className="w-full max-w-[511px] text-sm font-normal leading-6 !text-white/70 sm:text-base sm:leading-6">
            Separate teams and entities where needed, connect approved
            systems, make exceptions visible, and keep every decision tied to
            its policy, source and evidence.
          </p>

          {/* CTA Buttons */}
          <div className="flex w-full flex-wrap items-center gap-3 pt-2 sm:pt-3">
            {/* Book a demo */}
            <Link
              href="#"
              className="inline-flex min-h-11 items-center justify-center rounded-full !bg-white px-6 py-2.5 text-sm font-semibold leading-6 !text-[#17283A] transition-colors hover:!bg-slate-100"
            >
              Book a demo
            </Link>

            {/* Check availability */}
            <Link
              href="#"
              className="inline-flex min-h-11 items-center justify-center rounded-full border !border-white bg-transparent px-6 py-2.5 text-sm font-semibold leading-6 !text-white transition-colors hover:!bg-white hover:!text-[#17283A]"
            >
              Check availability
            </Link>

            {/* View pricing */}
            <Link
              href="#"
              className="inline-flex min-h-11 items-center justify-center rounded-full border !border-white bg-transparent px-6 py-2.5 text-sm font-semibold leading-6 !text-white transition-colors hover:!bg-white hover:!text-[#17283A]"
            >
              View pricing
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="relative z-10 mt-8 w-full lg:absolute lg:bottom-8 lg:right-8 lg:mt-0 lg:w-[42%] xl:right-14 xl:w-[40%]">
          <div className="w-full overflow-hidden rounded-2xl border border-white/20 bg-white/5 p-3 sm:p-4">
            <Image
              src="/images/enterprise-organizations/authority-scale.png"
              alt="Billing control and authority"
              width={478}
              height={361}
              className="h-auto w-full rounded-xl object-cover"
              sizes="(max-width: 1024px) 100vw, 478px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}