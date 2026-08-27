export default function PrivacyDataMinimizationLoggingSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-100" id="privacy-data">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          PRIVACY, DATA MINIMIZATION &amp; LOGGING
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Analytics is never a place where a payload can land.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Webhook payloads can carry customer, invoice, payment and account data. The page
          does not claim payload content until schema authority exists.
        </p>

        {/* 2-Card Grid */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] grid grid-cols-1 md:grid-cols-2 gap-6 text-left items-stretch">
          
          {/* Left Card: Never captured by analytics */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3">
                Never captured by analytics
              </h3>
              <p className="text-xs sm:text-sm font-normal leading-relaxed text-slate-600 mb-4">
                Webhook secrets, verification material, endpoint query secrets, authorization-like
                headers, raw payloads, raw receiver responses and sensitive object data.
              </p>
              <p className="text-xs sm:text-sm font-normal leading-relaxed text-slate-600">
                Feedback widgets never auto-attach raw payloads or secrets. They ask for safe
                delivery and request identifiers instead.
              </p>
            </div>
          </div>

          {/* Right Card: Scoped clipboard */}
          <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3">
                Scoped clipboard
              </h3>
              <p className="text-xs sm:text-sm font-normal leading-relaxed text-slate-700 mb-4">
                Copy controls are scoped so that copying a safe identifier cannot also copy
                adjacent payload or hidden secret text — a common accidental leak in log
                interfaces.
              </p>
              <p className="text-xs sm:text-sm font-normal leading-relaxed text-slate-700">
                Retention, export, legal hold and deletion behavior for delivery evidence comes
                from canonical data-governance policy, never from this page.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
