export default function ChooseAccessPathSection() {
  return (
    <section className="w-full bg-white py-12 lg:py-24 border-t border-slate-100" id="access-path">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          CHOOSE YOUR ACCESS PATH
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          Method cards render from a verified registry, never hard-coded.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Eight fields per card. Until the security source supplies method names, every card
          renders as a structural placeholder rather than a named mechanism.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-12 w-full max-w-[1240px] overflow-hidden rounded-3xl shadow-xl border border-slate-800/80 bg-[#060D20]">
          <img
            src="/images/devolpers-authentication/da2.png"
            alt="Method cards render from a verified registry, never hard-coded"
            className="w-full h-auto object-cover rounded-3xl block"
          />
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787663259198.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* 3 Method Cards (2-Column Mobile Grid) */}
          <div className="grid grid-cols-2 gap-3.5 mb-5">
            
            {/* Card 1 */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm text-xs">
              <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-2 py-0.5 rounded border border-purple-200/60 inline-block mb-2">
                {`{canonical_method_label}`}
              </span>
              <div className="text-[11px] text-slate-600 mb-1">
                <span className="font-bold text-slate-900">Best for:</span>{" "}
                <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] px-1.5 py-0.5 rounded border border-purple-200/60 font-semibold inline-block">
                  {`{approved_use_case}`}
                </span>
              </div>
              <div className="text-[11px] text-slate-600 mb-2">
                <span className="inline-flex items-center gap-1 bg-purple-100/70 text-purple-700 font-mono text-[10px] px-1.5 py-0.5 rounded border border-purple-200/60 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                  Availability: {`{registry}`}
                </span>
              </div>
              <div className="text-[11px] text-slate-600 mb-1.5">
                <div className="text-slate-500">Credential ownership:</div>
                <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] px-1.5 py-0.5 rounded border border-purple-200/60 font-semibold inline-block">
                  {`{who_owns_it}`}
                </span>
              </div>
              <div className="text-[11px] text-slate-600 mb-1.5">
                <div className="text-slate-500">Permission model:</div>
                <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] px-1.5 py-0.5 rounded border border-purple-200/60 font-semibold inline-block">
                  {`{summary_no_scope_names}`}
                </span>
              </div>
              <div className="text-[11px] text-slate-600 mb-1.5">
                <div className="text-slate-500">Environment:</div>
                <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] px-1.5 py-0.5 rounded border border-purple-200/60 font-semibold inline-block">
                  {`{if_verified}`}
                </span>
              </div>
              <div className="text-[11px] text-slate-600">
                <div className="text-slate-500">Setup action:</div>
                <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] px-1.5 py-0.5 rounded border border-purple-200/60 font-semibold inline-block">
                  {`{configure_or_request}`}
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm text-xs">
              <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-2 py-0.5 rounded border border-purple-200/60 inline-block mb-2">
                {`{canonical_method_label}`}
              </span>
              <div className="text-[11px] text-slate-600 mb-1">
                <span className="font-bold text-slate-900">Best for:</span>{" "}
                <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] px-1.5 py-0.5 rounded border border-purple-200/60 font-semibold inline-block">
                  {`{approved_use_case}`}
                </span>
              </div>
              <div className="text-[11px] text-slate-600 mb-2">
                <span className="inline-flex items-center gap-1 bg-purple-100/70 text-purple-700 font-mono text-[10px] px-1.5 py-0.5 rounded border border-purple-200/60 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                  Availability: {`{registry}`}
                </span>
              </div>
              <div className="text-[11px] text-slate-600 mb-1.5">
                <div className="text-slate-500">Credential ownership:</div>
                <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] px-1.5 py-0.5 rounded border border-purple-200/60 font-semibold inline-block">
                  {`{who_owns_it}`}
                </span>
              </div>
              <div className="text-[11px] text-slate-600 mb-1.5">
                <div className="text-slate-500">Permission model:</div>
                <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] px-1.5 py-0.5 rounded border border-purple-200/60 font-semibold inline-block">
                  {`{summary_no_scope_names}`}
                </span>
              </div>
              <div className="text-[11px] text-slate-600 mb-1.5">
                <div className="text-slate-500">Environment:</div>
                <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] px-1.5 py-0.5 rounded border border-purple-200/60 font-semibold inline-block">
                  {`{if_verified}`}
                </span>
              </div>
              <div className="text-[11px] text-slate-600">
                <div className="text-slate-500">Setup action:</div>
                <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] px-1.5 py-0.5 rounded border border-purple-200/60 font-semibold inline-block">
                  {`{configure_or_request}`}
                </span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm text-xs col-span-1">
              <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-2 py-0.5 rounded border border-purple-200/60 inline-block mb-2">
                {`{canonical_method_label}`}
              </span>
              <div className="text-[11px] text-slate-600 mb-1">
                <span className="font-bold text-slate-900">Best for:</span>{" "}
                <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] px-1.5 py-0.5 rounded border border-purple-200/60 font-semibold inline-block">
                  {`{approved_use_case}`}
                </span>
              </div>
              <div className="text-[11px] text-slate-600 mb-2">
                <span className="inline-flex items-center gap-1 bg-purple-100/70 text-purple-700 font-mono text-[10px] px-1.5 py-0.5 rounded border border-purple-200/60 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                  Availability: {`{registry}`}
                </span>
              </div>
              <div className="text-[11px] text-slate-600 mb-1.5">
                <div className="text-slate-500">Credential ownership:</div>
                <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] px-1.5 py-0.5 rounded border border-purple-200/60 font-semibold inline-block">
                  {`{who_owns_it}`}
                </span>
              </div>
              <div className="text-[11px] text-slate-600 mb-1.5">
                <div className="text-slate-500">Permission model:</div>
                <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] px-1.5 py-0.5 rounded border border-purple-200/60 font-semibold inline-block">
                  {`{summary_no_scope_names}`}
                </span>
              </div>
              <div className="text-[11px] text-slate-600 mb-1.5">
                <div className="text-slate-500">Environment:</div>
                <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] px-1.5 py-0.5 rounded border border-purple-200/60 font-semibold inline-block">
                  {`{if_verified}`}
                </span>
              </div>
              <div className="text-[11px] text-slate-600">
                <div className="text-slate-500">Setup action:</div>
                <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] px-1.5 py-0.5 rounded border border-purple-200/60 font-semibold inline-block">
                  {`{configure_or_request}`}
                </span>
              </div>
            </div>

          </div>

          {/* Yellow Warning Callout Box */}
          <div className="rounded-xl border border-amber-200/90 bg-amber-50 p-3.5 text-xs text-amber-900 leading-relaxed font-normal">
            <span className="font-bold">Availability values come from the site-wide registry:</span> Available, Requires setup, Enterprise-assisted, Preview or Not available. A card with no verified method does not render as a generic &quot;secure connection&quot; option.
          </div>

        </div>

      </div>
    </section>
  );
}
