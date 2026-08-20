import Image from "next/image";

export default function Integrations() {
  return (
    <section className="w-full bg-slate-950 px-4 py-12 sm:px-6 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-8 px-0 sm:px-4 lg:px-7">
        {/* Header */}
        <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2 text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-4 bg-white opacity-40" />

            <span className="text-xs font-bold uppercase leading-4 tracking-widest text-white/55">
              Integrations &amp; source authority
            </span>

            <div className="h-px w-4 bg-white opacity-40" />
          </div>
          
{/* Heading */} 

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl sm:leading-10"> 
            Integration convenience never transfers authority silently. 
          </h2>

          {/* Description */}
          <p className="w-full max-w-[687px] text-sm font-normal leading-6 text-white/70 sm:text-base sm:leading-7">
            Each connected domain has an allowed role and an explicit authority
            rule. Mapping is per field and per object, not per system.
          </p>
        </div>

        {/* Image */}
        <div className="w-full overflow-hidden rounded-2xl">
          <Image
            src="/images/customer-records/integrations.png"
            alt="Integrations and source authority"
            width={1184}
            height={590}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}