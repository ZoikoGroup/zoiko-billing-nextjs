import Image from "next/image";

import SectionHeader from "./SectionHeader";

export default function FindByNeedSection() {
  return (
    <section className="w-full bg-white py-14 font-[family-name:var(--font-inter)] sm:py-16 md:py-20">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 sm:px-8 md:px-10 lg:px-14 xl:px-[100px]">
        <SectionHeader
          eyebrow="Find by need"
          title={
            <>
              Eight needs, each with a first path and{" "}
              <br className="hidden lg:inline" />a follow-up.
            </>
          }
          subtitle={
            <strong className="font-bold">
              Navigational assistance — not a diagnostic, an eligibility
              decision, an entitlement determination or a legal or tax
              recommendation.
            </strong>
          }
        />

        <Image
          src="/images/global-capabilities/find-by-need.webp"
          alt="A reader follows a lit navigation path while diagnostic, eligibility, entitlement, legal and tax roads are marked as not offered"
          width={1232}
          height={640}
          className="mt-8 h-auto w-full max-w-[1232px] sm:mt-11"
        />
      </div>
    </section>
  );
}
