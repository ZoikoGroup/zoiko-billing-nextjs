import Image from "next/image";

import SectionHeader from "@/components/global-capabilities/SectionHeader";

export default function ReadinessMatrixSection() {
  return (
    <section className="w-full bg-white py-14 font-[family-name:var(--font-inter)] sm:py-16 md:py-20">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 sm:px-8 md:px-10 lg:px-14 xl:px-[100px]">
        <SectionHeader
          eyebrow="Multi-entity readiness matrix"
          title={
            <>
              Six inputs per phase, and the status{" "}
              <br className="hidden lg:inline" />
              derives from all of them.
            </>
          }
          subtitle={
            <>
              Guide status is computed, never set directly.{" "}
              <strong className="font-bold">
                Any missing input, or a blocked dependency, holds the phase.
              </strong>
            </>
          }
        />

        <Image
          src="/images/multi-entity-guide/readiness-matrix.webp"
          alt="Phase inputs flowing along a path, with missing inputs routed to a hold warning"
          width={1228}
          height={636}
          className="mt-8 h-auto w-full max-w-[1232px] sm:mt-11"
        />
      </div>
    </section>
  );
}
