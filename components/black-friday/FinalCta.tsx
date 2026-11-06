import Image from "next/image";

import { ExploreButton } from "./shared";

export default function FinalCta() {
  return (
    <section className="pt-20 lg:pt-28">
      <div className="relative overflow-hidden bg-[#0f2a47] px-5 py-20 sm:px-8">
        <Image src="/images/black-friday/final-cta-office.webp" alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[#010814]/[0.86]" />
        <div className="relative mx-auto flex max-w-[585px] flex-col items-center gap-4 text-center">
          <h2 className="!mb-0 !text-3xl !font-medium !leading-10 !tracking-normal text-white sm:!text-4xl">
            Your revenue workflows deserve a simpler view.
          </h2>
          <ExploreButton />
        </div>
      </div>
    </section>
  );
}
