import Image from "next/image";

export default function IntegrationRoutes() {
  return (
    <section className="w-full bg-[#0B0F14] px-5 py-12 sm:px-8 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-5">
        {/* Heading Content */}
        <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2">
          {/* Eyebrow */}
          <div className="flex w-full max-w-[455px] items-center justify-center gap-3">
            <span className="h-px w-4 shrink-0 bg-white opacity-40" />

            <span className="whitespace-nowrap text-center text-xs font-bold uppercase leading-4 tracking-[0.18em] text-white/55">
              Integrations, APIs &amp; system-of-record handoffs
            </span>

            <span className="h-px w-4 shrink-0 bg-white opacity-40" />
          </div>

          {/* Heading */}
          <h2 className="w-full text-center text-2xl font-extrabold leading-8 tracking-tight text-white sm:text-3xl sm:leading-9 lg:text-4xl lg:leading-10">
            Every route names its authority, direction and last verification.
          </h2>

          {/* Description */}
          <p className="w-full max-w-[687px] text-center text-sm font-normal leading-6 text-white/72 sm:text-base sm:leading-7">
            This is category-level architecture built from synthetic route
            records — not a decorative ecosystem map. No connector appears
            here without a corresponding record.
          </p>
        </div>

        {/* Image */}
        <div className="w-full pt-1 sm:pt-3 lg:pt-5">
          <Image
            src="/images/enterprise-organizations/integration-routes.png"
            alt="Integrations, APIs and system-of-record handoffs"
            width={1184}
            height={592}
            className="h-auto w-full rounded-2xl object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}