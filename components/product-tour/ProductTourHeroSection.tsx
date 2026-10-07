import Image from "next/image";
import Link from "next/link";

export default function ProductTourHeroSection() {
  return (
    <section className="hidden w-full bg-white py-14 font-[family-name:var(--font-inter)] text-slate-900 sm:py-18 md:py-20 lg:block lg:py-24">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-between gap-10 px-5 sm:px-8 md:px-10 lg:flex-row lg:items-center lg:gap-12 xl:gap-16 xl:px-20">
        {/* LEFT CONTENT */}
        <div className="w-full min-w-0 lg:w-[50%] xl:w-[52%]">
          {/* EYEBROW */}
          <div className="mb-4 flex items-center gap-2.5 sm:mb-6">
            <span className="h-0.5 w-6 shrink-0 bg-[#1D70F5]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7890b2] sm:text-xs">
              Product Tour
            </span>
          </div>

          {/* HEADING */}
          <h1 className="!font-[family-name:var(--font-jakarta)] !m-0 !text-[34px] font-extrabold !leading-[1.12] !tracking-[-0.035em] text-[#091127] sm:!text-[44px] md:!text-[50px] lg:!text-[48px] xl:!text-[54px]">
            Seven chapters,{" "}
            <span className="text-[#1D70F5]">
              each <br className="hidden sm:inline" />
              labelled with what it <br className="hidden sm:inline" />
              isn&apos;t.
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="!m-0 mt-5 max-w-[540px] text-sm leading-relaxed text-[#5d7192] sm:text-base">
            A walkthrough of the operating grammar behind governed billing &mdash;
            context, policy, authority, state, evidence. Every scene is a
            specimen, says so in a label you cannot miss, and names the claim it is
            not making.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-8 flex w-full flex-col gap-3.5 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/book-demo"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#1D70F5] px-7 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(31,111,235,0.26)] transition hover:bg-blue-600 sm:w-auto"
            >
              Book Demo
            </Link>

            <Link
              href="/create-account"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-slate-200 bg-white px-7 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 sm:w-auto"
            >
              Create Account
            </Link>
          </div>
        </div>

        {/* RIGHT ILLUSTRATION */}
        <div className="w-full lg:w-[50%] xl:w-[48%]">
          <div className="relative overflow-hidden rounded-[24px] shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:rounded-[32px]">
            <Image
              src="/images/product-tour/pt1.png"
              alt="Seven chapters each labelled with what it isn't illustration"
              width={700}
              height={500}
              priority
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
