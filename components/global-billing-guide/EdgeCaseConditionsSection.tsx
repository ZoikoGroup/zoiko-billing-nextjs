import Image from "next/image";

import SectionHeader from "@/components/global-capabilities/SectionHeader";

export default function EdgeCaseConditionsSection() {
  return (
    <section className="w-full bg-white py-14 font-[family-name:var(--font-inter)] sm:py-16 md:py-20">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 sm:px-8 md:px-10 lg:px-14 xl:px-[100px]">
        <SectionHeader
          eyebrow="States, edge cases & recovery"
          title={
            <>
              Eight conditions, and none of them fills{" "}
              <br className="hidden lg:inline" />a gap.
            </>
          }
          subtitle="Select a condition to see the required behavior."
        />

        <Image
          src="/images/global-billing-guide/conditions.webp"
          alt="Eight condition tiles connected to a central record of guide states"
          width={1232}
          height={640}
          className="mt-8 h-auto w-full max-w-[1232px] sm:mt-11"
        />
      </div>
    </section>
  );
}
