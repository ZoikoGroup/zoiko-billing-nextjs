import Image from "next/image";

export default function RelatedZoikoBillingNavigation() {
  return (
    <section className="w-full bg-[#091127]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start px-5 py-14 sm:px-8 sm:py-16 md:px-10 md:py-20 lg:px-14 xl:px-20">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-6">
          
          {/* Intro */}
          <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2">
            
            {/* Eyebrow */}
            <div className="relative flex h-4 w-full max-w-[320px] items-center justify-center">
              <span className="absolute left-0 h-px w-4 bg-white opacity-40" />

              <span className="px-3 text-center text-xs font-bold uppercase leading-4 tracking-widest text-white/55">
                Related Zoiko Billing navigation
              </span>

              <span className="absolute right-0 h-px w-4 bg-white opacity-40" />
            </div>

            {/* Heading */}
            <div className="w-full text-center">
              <h2 className="text-white !text-[30px] font-extrabold leading-tight sm:!text-[34px] md:!text-[36px] lg:!text-[40px] lg:leading-10">
                Where each demo&apos;s underlying fact is
             
                owned.
              </h2>
            </div>

            {/* Description */}
            <div className="w-full max-w-[687px] pt-1 text-center">
              <p className="text-base leading-7 text-white/72">
                A demo shows an operating idea; these destinations hold the
                governed truth behind it.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="w-full">
            <div className="overflow-hidden rounded-2xl border border-[#dfe5ee] shadow-[0px_4px_24px_0px_rgba(11,27,60,0.07)]">
              <Image
                src="/images/demo-library/image1.png"
                alt="Related Zoiko Billing navigation"
                width={1184}
                height={537}
                priority
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}