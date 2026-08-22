import Image from "next/image";

export default function DigitalServicePortfolio() {
  return (
    <section className="w-full bg-gray-50 px-4 py-12 sm:px-6 sm:py-14 lg:px-12 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-5 px-0 sm:px-4 lg:px-7">
        <div className="mx-auto flex w-full max-w-[950px] flex-col items-center gap-5">
  <h2 className="w-full text-center text-3xl font-extrabold leading-[1.15] text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[1.14]">
    <span className="block">A digital-service portfolio, with</span>
    <span className="block">nothing smoothed over.</span>
  </h2>

  <p className="mx-auto w-full max-w-[687px] text-center text-sm font-normal leading-6 text-slate-500 sm:text-base sm:leading-7">
    Recurring billing looks calm right up until a quantity goes stale or a
    change lands after issue. This view shows both.
  </p>
</div>

        <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05)]">
          <Image
            src="/images/saas-and-digital-services/portfolio.png"
            alt="Digital service portfolio"
            width={1184}
            height={592}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}