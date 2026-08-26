import Image from "next/image";

export default function ConnectionFreshness() {
  return (
    <section className="w-full overflow-hidden bg-[#091127]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-start
          px-5
          py-14

          sm:px-8
          sm:py-16

          md:px-10
          md:py-20

          lg:px-14

          xl:px-20
        "
      >
        <div
          className="
            flex
            w-full
            max-w-[1240px]
            flex-col
            items-center
            gap-8

            sm:gap-10

            lg:gap-11
          "
        >
          {/* SECTION INTRO */}
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
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-4 shrink-0 bg-white opacity-40" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.16em]
                  text-white
                  opacity-55

                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Events, polling, files, idempotency, backfill &amp; freshness
              </span>

              <span className="h-px w-4 shrink-0 bg-white opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                !max-w-[662px]
                !text-[30px]
                !font-extrabold
                !leading-[1.2]
                !tracking-[-0.03em]
                !text-white

                sm:!text-[34px]

                md:!text-[36px]
              "
            >
              &quot;Connected&quot; only describes the
              <br className="hidden sm:block" />
              connection.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                text-[15px]
                font-normal
                leading-7
                text-white
                opacity-72

                sm:text-base
              "
            >
              It does not prove the source is current. Last successful
              ingestion and currentness are shown separately from
              authentication health.
            </p>
          </div>

          {/* IMAGE CARD */}
          <div
            className="
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
            "
          >
            <div className="relative aspect-[1184/582] w-full">
              <Image
                src="/images/banking-and-reconciliation/connection-freshness.png"
                alt="Connection freshness showing events, polling, files, idempotency, backfill and currentness"
                fill
                className="object-cover"
                sizes="
                  (max-width: 639px) 100vw,
                  (max-width: 1023px) 90vw,
                  1184px
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}