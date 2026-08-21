import Image from "next/image";

export default function Boundaries() {
  return (
    <section className="w-full bg-color-black-solid px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-24">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-6">
        {/* Heading */}
        <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2">
          {/* Eyebrow */}
          <div className="flex w-full max-w-[320px] items-center justify-center gap-3">
            <span className="h-px w-4 shrink-0 bg-color-white-solid opacity-40" />

            <span className="whitespace-nowrap text-center text-xs font-bold uppercase leading-4 tracking-widest text-color-white-solid opacity-55">
              Payment, tax & provider boundaries
            </span>

            <span className="h-px w-4 shrink-0 bg-color-white-solid opacity-40" />
          </div>

          {/* Title */}
          <h2 className="text-center text-3xl font-extrabold leading-9 text-color-white-solid sm:text-4xl sm:leading-10">
            What may be said about adjacent
            <br className="hidden sm:block" />
            domains.
          </h2>

          {/* Description */}
          <p className="w-full max-w-[687px] text-center text-sm font-normal leading-6 text-color-white-solid opacity-72 sm:text-base sm:leading-7">
            These are the domains most likely to be over-read on a global
            page. Each row states the allowed statement and the inference it
            must not create.
          </p>
        </div>

        {/* Image */}
        <div className="w-full pt-1 sm:pt-3 lg:pt-5">
          <div className="relative w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/global-billing/boundaries.png"
              alt="Payment, tax and provider boundaries"
              width={1184}
              height={592}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}