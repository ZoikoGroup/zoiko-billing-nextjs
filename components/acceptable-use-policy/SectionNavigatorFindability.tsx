import Image from "next/image";

export default function SectionNavigatorFindability() {
  return (
    <section className="w-full bg-[#f7f8fa]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start px-5 py-14 sm:px-8 sm:py-16 md:px-10 md:py-20 lg:px-14 xl:px-20">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-5">
          
          {/* Intro */}
          <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2">
            
            {/* Eyebrow */}
            <div className="relative flex h-4 w-full max-w-[320px] items-center justify-center">
              <span className="absolute left-0 h-px w-4 bg-[#7890b2] opacity-40" />

              <span className="px-3 text-center text-xs font-bold uppercase leading-4 tracking-widest text-[#7890b2]">
                Section navigator &amp; findability
              </span>

              <span className="absolute right-0 h-px w-4 bg-[#7890b2] opacity-40" />
            </div>

            {/* Heading */}
            <div className="w-full text-center">
              <h2 className="text-[#091127] !text-[30px] font-extrabold leading-tight sm:!text-[34px] md:!text-[36px] lg:!text-[40px] lg:leading-10">
                A legal page is scanned, not read.
              </h2>
            </div>

            {/* Description */}
            <div className="w-full max-w-[687px] pt-1 text-center">
              <p className="text-base leading-7 text-[#5d7192]">
                Readers arrive looking for one clause.{" "}
                <span className="font-bold">
                  Operative clauses are never hidden inside tooltips or
                  accordions
                </span>{" "}
                — they render in full, in place.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="w-full pt-2">
            <div className="overflow-hidden rounded-xl border border-[#dfe5ee] bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]">
              <Image
                src="/images/acceptable-use-policy/image.png"
                alt="Section navigator and findability"
                width={1184}
                height={592}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}