import Image from "next/image";

import SectionHeader from "./SectionHeader";

export default function AvailabilityStatesSection() {
  return (
    <section className="w-full bg-white py-14 font-[family-name:var(--font-inter)] sm:py-16 md:py-20">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 sm:px-8 md:px-10 lg:px-14 xl:px-[100px]">
        <SectionHeader
          eyebrow="Availability, currentness & evidence model"
          title={
            <>
              Six states, and orientation is not{" "}
              <br className="hidden lg:inline" />
              availability.
            </>
          }
          subtitle="Select a state to see what an overview page may say."
        />

        <Image
          src="/images/global-capabilities/availability-states.webp"
          alt="A reader at a junction facing six paths, each leading to a different availability state"
          width={1232}
          height={471}
          className="mt-8 h-auto w-full max-w-[1232px] sm:mt-11"
        />
      </div>
    </section>
  );
}
