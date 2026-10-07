import Image from "next/image";

import SectionHeader from "./SectionHeader";

export default function ProofEvidenceSection() {
  return (
    <section className="w-full bg-[#0b1b3c] py-14 font-[family-name:var(--font-inter)] sm:py-16 md:py-20">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 sm:px-8 md:px-10 lg:px-14 xl:px-[100px]">
        <SectionHeader
          dark
          eyebrow="Proof, evidence & claim architecture"
          title={
            <>
              What an overview may assert, and{" "}
              <br className="hidden lg:inline" />
              what it may only point at.
            </>
          }
          subtitle="A hub is the page most likely to summarize a claim into something stronger than its source."
        />

        <Image
          src="/images/global-capabilities/proof-evidence.webp"
          alt="Evidence sources such as reports, documents, media and data flowing into a central overview hub"
          width={1232}
          height={640}
          className="mt-8 h-auto w-full max-w-[1232px] sm:mt-10"
        />
      </div>
    </section>
  );
}
