export default function ConnectCategories() {
  return (
    <section className="w-full border-t border-gray-200 bg-gray-50 px-4 py-14 sm:px-6 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start px-0 sm:px-4 lg:px-7">
        {/* Eyebrow */}
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600 sm:text-xs">
            What Zoiko One can connect
          </span>

          <span className="h-px w-6 bg-blue-600/50" />
        </div>

        {/* Heading */}
        <h2 className="mt-4 text-2xl font-bold leading-9 tracking-tight text-slate-900 sm:text-3xl sm:leading-10">
          Connection categories, not a product list.
        </h2>

        {/* Description */}
        <p className="mt-3 max-w-[700px] text-sm font-normal leading-6 text-slate-500 sm:text-base">
          Specific Zoiko One module names and relationships appear only where a
          current product registry authorizes them. Until then this page
          describes categories and their publication rules.
        </p>

        {/* Main Image */}
        <div className="mt-8 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]">
          <img
            src="/images/zoiko-billing-plus-zoiko-one/connection-categories.png"
            alt="Zoiko One connection categories and publication rules"
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}