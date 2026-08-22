import Image from "next/image";
import Link from "next/link";

export default function Cta() {
  return (
    <section className="w-full px-4 py-8 sm:px-6 lg:px-14 lg:py-12">
      <div className="relative mx-auto w-full max-w-[1184px] overflow-hidden rounded-3xl bg-slate-900 p-6 sm:p-10 lg:p-14">
        {/* Background Glow */}
        <div className="pointer-events-none absolute -right-24 -top-28 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.55)_0%,rgba(59,130,246,0)_70%)]" />

        <div className="relative z-10 grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-12">
          {/* Left Content */}
          <div className="flex w-full flex-col items-start gap-3.5">
            {/* Heading */}
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight !text-white sm:text-4xl sm:leading-10">
              Keep the billing account
              <br className="hidden sm:block" />
              understandable end to end.
            </h2>

            {/* Description */}
            <p className="w-full max-w-[511px] text-sm font-normal leading-6 !text-white/70 sm:text-base">
              Know who the account is for, which profile applies, where
              documents go, what changed, who changed it, where the data came
              from, and what downstream billing work could be affected.
            </p>

            {/* Buttons */}
            <div className="flex w-full flex-col gap-3 pt-3 sm:w-auto sm:flex-row sm:flex-wrap">
              <Link
                href="#"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold leading-6 !text-slate-900 shadow-none transition hover:bg-gray-100"
              >
                Create account
              </Link>

              <Link
                href="#"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/35 bg-transparent px-6 py-2.5 text-sm font-semibold leading-6 !text-white transition hover:bg-white/10"
              >
                View pricing
              </Link>

              <Link
                href="#"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/35 bg-transparent px-6 py-2.5 text-sm font-semibold leading-6 !text-white transition hover:bg-white/10"
              >
                Book a demo
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full">
            <div className="relative overflow-hidden rounded-2xl border border-white/15">
              <Image
                src="/images/customer-records/cta.png"
                alt="Customer records billing account"
                width={478}
                height={340}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}