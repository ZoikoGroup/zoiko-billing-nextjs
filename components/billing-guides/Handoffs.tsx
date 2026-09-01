import Image from "next/image";

const Handoffs = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-24 py-12 sm:py-16 lg:py-20">
      <div className="w-full max-w-[1240px] mx-auto px-0 sm:px-4 lg:px-7 flex flex-col items-center gap-8 sm:gap-10 lg:gap-11">
        {/* Heading */}
        <div className="w-full max-w-[1000px] pt-2 flex flex-col items-center gap-3">
          {/* Label */}
          <div className="flex items-center gap-3">
            <div className="w-4 h-px opacity-40 bg-color-azure-60" />

            <span className="text-center text-color-azure-60 text-xs font-bold font-['Inter'] uppercase leading-4 tracking-widest whitespace-nowrap">
              Authoritative handoffs
            </span>

            <div className="w-4 h-px opacity-40 bg-color-azure-60" />
          </div>

          {/* Title */}
          <h2 className="text-center text-color-azure-11-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-8 sm:leading-9 lg:leading-10">
            Where a guide stops and a system of
            record begins.
          </h2>

          {/* Description */}
          <p className="w-full max-w-[687px] pt-1 text-center text-color-azure-44-3 text-sm sm:text-base font-normal font-['Inter'] leading-6 sm:leading-7">
            Summarize and link. Never duplicate mutable detail.
          </p>
        </div>

        {/* Image */}
        <div className="w-full overflow-hidden rounded-2xl shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05)] shadow-[0px_1px_2px_0px_rgba(15,23,42,0.04)] border border-color-grey-92-4">
          <Image
            src="/images/billing-guides/handoffs.png"
            alt="Authoritative handoffs"
            width={1184}
            height={511}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Handoffs;