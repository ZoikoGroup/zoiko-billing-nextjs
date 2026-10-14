import Image from "next/image";

import SectionHeader from "@/components/global-capabilities/SectionHeader";

export default function RelationshipWorksheetSection() {
  return (
    <section className="w-full bg-[#f5f7fb] py-14 font-[family-name:var(--font-inter)] sm:py-16 md:py-20">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 sm:px-8 md:px-10 lg:px-14 xl:px-[100px]">
        <SectionHeader
          eyebrow="Entity relationship worksheet"
          title={
            <>
              Ten fields, and none of them holds a{" "}
              <br className="hidden lg:inline" />
              real value.
            </>
          }
          subtitle={
            <strong className="font-bold">
              Never place real customer entities, contracts, tax positions,
              charges, bank details or legal documents in a public mockup.
            </strong>
          }
        />

        <Image
          src="/images/multi-entity-guide/worksheet.webp"
          alt="A protected entity record surrounded by locked contracts, bank, tax, legal and payment details"
          width={1232}
          height={640}
          className="mt-8 h-auto w-full max-w-[1232px] sm:mt-10"
        />
      </div>
    </section>
  );
}
