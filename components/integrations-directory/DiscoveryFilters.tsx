import Image from "next/image";

export default function DiscoveryFilters() {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1240px]
          flex-col
          items-center
          gap-5
          px-5
          py-12

          sm:px-8
          sm:py-16

          md:px-10
          md:py-20

          lg:px-14

          xl:px-20
        "
      >
        {/* HEADING CONTENT */}
        <div
          className="
            flex
            w-full
            max-w-[662px]
            flex-col
            items-center
            gap-3
            pt-2
            text-center
          "
        >
          {/* EYEBROW */}
          <div className="flex items-center gap-3">
            <span className="h-px w-4 bg-[#7890b2] opacity-40" />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                leading-4
                tracking-[0.16em]
                text-[#7890b2]

                sm:text-xs
                sm:tracking-[0.18em]
              "
            >
              Search, filters &amp; guided discovery
            </span>

            <span className="h-px w-4 bg-[#7890b2] opacity-40" />
          </div>

          {/* TITLE */}
          <h2
            className="
              !m-0
              text-[30px]
              font-extrabold
              leading-[1.15]
              tracking-[-0.025em]
              text-[#091127]

              sm:text-[34px]

              md:text-[36px]
            "
          >
            Filters describe facts, not fashion.
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              !m-0
              w-full
              max-w-[687px]
              pt-1
              text-center
              text-[15px]
              font-normal
              leading-7
              text-[#5d7192]

              sm:text-base
            "
          >
            Twelve discovery controls, each backed by a registered value.
            Sorting uses relevance and current fit metadata.
          </p>
        </div>

        {/* IMAGE */}
        <div
          className="
            relative
            mt-1
            w-full
            overflow-hidden
            rounded-2xl
            border
            border-[#dfe5ee]
            bg-white
            shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
          "
        >
          <Image
            src="/images/integrations-directory/filters.png"
            alt="Search filters and guided discovery"
            width={1184}
            height={592}
            className="
              h-auto
              w-full
              object-cover
            "
            sizes="
              (max-width: 639px) 100vw,
              (max-width: 1023px) 90vw,
              1184px
            "
          />
        </div>
      </div>
    </section>
  );
}