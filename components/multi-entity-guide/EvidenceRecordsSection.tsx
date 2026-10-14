import Image from "next/image";

import SectionHeader from "@/components/global-capabilities/SectionHeader";

export default function EvidenceRecordsSection() {
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
          eyebrow="Evidence, currentness & maintenance"
          title={
            <>
              What the guide records, and what it{" "}
              <br className="hidden lg:inline" />
              defers.
            </>
          }
          subtitle="Entity arrangements are examined across periods, so the record has to outlive the arrangement."
        />

        <Image
          src="/images/multi-entity-guide/evidence-records.webp"
          alt="Entity arrangements over successive periods feeding into a long-lived, protected record archive"
          width={1232}
          height={576}
          className="mt-8 h-auto w-full max-w-[1232px] sm:mt-10"
        />
      </div>
    </section>
  );
}
