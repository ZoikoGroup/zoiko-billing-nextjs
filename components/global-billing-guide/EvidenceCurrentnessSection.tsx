import Image from "next/image";

import SectionHeader from "@/components/global-capabilities/SectionHeader";

export default function EvidenceCurrentnessSection() {
  return (
    <section
      style={{
        background:
          "radial-gradient(ellipse at 50% 30%, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0) 70%), #0b1b3c",
      }}
      className="w-full py-14 font-[family-name:var(--font-inter)] sm:py-16 md:py-20"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 sm:px-8 md:px-10 lg:px-14 xl:px-[100px]">
        <SectionHeader
          dark
          eyebrow="Evidence, currentness & guide maintenance"
          title={
            <>
              A guide ages differently from the{" "}
              <br className="hidden lg:inline" />
              sources it routes to.
            </>
          }
          subtitle="Every specialist destination maintains its own currentness. A guide that restates them inherits the staleness without the review cycle."
        />

        <Image
          src="/images/global-billing-guide/evidence-currentness.webp"
          alt="Specialist sources refreshing independently while a guide that copies them goes stale"
          width={1232}
          height={640}
          className="mt-8 h-auto w-full max-w-[1232px] sm:mt-10"
        />
      </div>
    </section>
  );
}
