export default function TemplateLifecyclePublicStates() {
  return (
    <section className="w-full px-4 py-16 sm:px-6 md:px-10 lg:px-16 xl:px-24 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-11 px-0 sm:px-4 lg:px-7">
        {/* Heading */}
        <div className="flex w-full max-w-[1000px] flex-col items-center gap-3 pt-2 text-center">
          {/* Eyebrow */}
          <div className="flex h-4 items-center justify-center gap-3">
            <div className="h-px w-4 shrink-0 bg-color-azure-60 opacity-40" />

            <span className="text-xs font-bold uppercase leading-4 tracking-widest text-color-azure-60">
              Template lifecycle &amp; public states
            </span>

            <div className="h-px w-4 shrink-0 bg-color-azure-60 opacity-40" />
          </div>

          {/* Title */}
          <h2 className="pb-[0.69px] text-2xl font-extrabold leading-8 text-color-azure-11-2 sm:text-3xl sm:leading-9 md:text-4xl md:leading-10">
            Eight states, and a broken asset is
            <br className="hidden sm:block" /> never offered.
          </h2>

          {/* Description */}
          <p className="w-full max-w-[687px] pt-[3.1px] text-sm font-normal leading-6 text-color-azure-44-3 sm:text-base sm:leading-7">
            An archived template carries no current-use action that implies it
            still reflects how things work.
          </p>
        </div>

        {/* Lifecycle image */}
        <div className="w-full overflow-hidden rounded-2xl border border-color-grey-92-4 shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]">
          <img
            src="/images/templates/template-lifecycle.png"
            alt="Template lifecycle and public states"
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}