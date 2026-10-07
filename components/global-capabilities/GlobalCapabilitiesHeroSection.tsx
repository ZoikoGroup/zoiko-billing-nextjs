import Image from "next/image";
import Link from "next/link";

export default function GlobalCapabilitiesHeroSection() {
  return (
    <section className="w-full overflow-hidden bg-white font-[family-name:var(--font-inter)]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-5 pb-12 pt-8 sm:px-8 sm:pb-16 sm:pt-12 md:px-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-14 lg:py-16 xl:gap-14 xl:px-[100px]">
        {/* LEFT CONTENT */}
        <div className="w-full min-w-0 lg:w-[56%] xl:w-[55%]">
          {/* EYEBROW */}
          <div className="mb-4 flex items-center gap-2.5 sm:mb-5">
            <span className="h-px w-6 shrink-0 bg-[#1D70F5] opacity-75" />
            <span className="text-[10px] font-bold uppercase leading-4 tracking-[0.18em] text-[#7890b2] sm:text-xs">
              Global Capabilities Overview
            </span>
          </div>

          {/* HEADING */}
          <h1 className="!font-[family-name:var(--font-jakarta)] !m-0 !text-[30px] font-extrabold !leading-[1.15] !tracking-[-0.035em] text-[#091127] sm:!text-[38px] md:!text-[44px] lg:!text-[36px] xl:!text-[48px]">
            Eleven capabilities,{" "}
            <span className="text-[#1D70F5]">
              and <br className="hidden md:inline" />
              eleven things they don&apos;t <br className="hidden md:inline" />
              mean.
            </span>
          </h1>

          {/* SUBTITLE */}
          <p className="!m-0 !mt-4 max-w-[690px] !text-sm !leading-7 !text-[#5d7192] sm:!text-base">
            <span className="xl:block xl:whitespace-nowrap">
              Each Global Billing capability governs one thing and is routinely
              read as{" "}
            </span>
            <span className="xl:block xl:whitespace-nowrap">
              governing several. This page states what each one covers, what
              must not be{" "}
            </span>
            <span className="xl:block xl:whitespace-nowrap">
              inferred from it, and where its availability truth actually lives.
            </span>
          </p>

          {/* ACTION BUTTONS */}
          <div className="mt-6 flex flex-wrap items-center gap-2.5 sm:mt-7">
            <Link
              href="/book-demo"
              style={{ color: "#ffffff" }}
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#1D70F5] px-6 py-2.5 text-sm font-semibold shadow-[0_8px_20px_rgba(31,111,235,0.26)] transition hover:bg-[#1660d8]"
            >
              Book Demo
            </Link>
            <Link
              href="/create-account"
              style={{ color: "#091127" }}
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#dfe5ee] bg-white px-6 py-2.5 text-sm font-semibold transition hover:bg-slate-50"
            >
              Create Account
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex w-full justify-center lg:w-[40%] lg:justify-end xl:w-[42%]">
          <Image
            src="/images/global-capabilities/hero.webp"
            alt="Eleven capabilities on the left, connected through a central hub to eleven crossed-out inferences on the right"
            width={530}
            height={530}
            priority
            className="h-auto w-full max-w-[530px] rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
