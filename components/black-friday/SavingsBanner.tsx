import Image from "next/image";

import { ExploreButton } from "./shared";

const MARQUEE = Array.from({ length: 6 }, () => "BLACK FRIDAY 2026    ZOIKO BILLING").join("    ");

function Strip({ reverse, position }: { reverse?: boolean; position: "top" | "bottom" }) {
  const text = reverse ? MARQUEE.split("    ").reverse().join("    ") : MARQUEE;
  return (
    <div
      aria-hidden
      className={`overflow-hidden whitespace-nowrap pb-2 pt-1.5 text-xs leading-5 tracking-[6px] text-[#3f6a9e] ${
        position === "top" ? "border-b" : "border-t"
      } border-[#163a5f]`}
    >
      {text}
    </div>
  );
}

function SidePhoto({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative hidden min-h-[444px] bg-[#0f2a47] md:block">
      <Image src={src} alt={alt} fill sizes="(max-width: 1023px) 25vw, 336px" className="object-cover" />
      <div className="absolute inset-0 bg-[#0a1730]/25" />
    </div>
  );
}

export default function SavingsBanner() {
  return (
    <section aria-labelledby="bf-savings-title" className="mx-auto w-full max-w-[1140px] px-5 pt-20 sm:px-6 lg:pt-28">
      <div className="overflow-hidden bg-[#0c2340] outline outline-1 outline-offset-[-1px] outline-[#163a5f]">
        <Strip position="top" />
        <div className="grid md:grid-cols-[1fr_1.25fr_1fr]">
          <SidePhoto
            src="/images/black-friday/banner-team-presentation.webp"
            alt="A finance team reviewing a presentation together"
          />
          <div className="flex flex-col items-center justify-center gap-3.5 px-7 py-14 text-center">
            <p className="!mb-0 text-base !leading-6 tracking-[4.5px] !text-[#a9bfdc]">BLACK FRIDAY 2026</p>
            <h2
              id="bf-savings-title"
              className="!mb-0 !text-4xl !font-bold !leading-tight !tracking-normal text-white lg:!text-5xl lg:!leading-[47px]"
            >
              Black Friday savings for better billing operations.
            </h2>
            <p className="!mb-0 text-sm !leading-6 !text-[#8aa3c4]">Offer details subject to confirmation.</p>
            <ExploreButton className="mt-2" />
          </div>
          <SidePhoto src="/images/black-friday/banner-glass-towers.webp" alt="Glass office towers seen from below" />
        </div>
        <Strip position="bottom" reverse />
      </div>
    </section>
  );
}
