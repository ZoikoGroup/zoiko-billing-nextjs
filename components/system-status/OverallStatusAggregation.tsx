export default function OverallStatusAggregation() {
  return (
    <section className="w-full bg-white">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-start
          px-5
          py-10

          sm:px-8
          sm:py-12

          md:px-10
          md:py-16

          lg:px-14

          xl:px-20
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1240px]
            flex-col
            items-start
            gap-4
            px-0

            sm:px-2

            md:px-7
          "
        >
          <img
            src="/images/system-status/system-status-overview.png"
            alt="System status overview"
            className="
              h-auto
              w-full
              rounded-2xl
              border
              border-[#dfe5ee]
              object-cover
            "
          />
        </div>
      </div>
    </section>
  );
}