export default function SecretHandlingDeveloperSafetySection() {
  return (
    <section className="w-full bg-[#0B132B] py-12 lg:py-24 text-white border-t border-slate-800" id="secret-handling">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
          <span className="h-px w-5 bg-slate-600" />
          SECRET HANDLING &amp; DEVELOPER SAFETY
          <span className="h-px w-5 bg-slate-600" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-white tracking-tight max-w-3xl">
          A documentation page is not exempt from security rules.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-300">
          Search, code copy, feedback, analytics, screenshots and browser persistence can all
          become accidental secret sinks.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:grid)                             */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid mt-14 w-full max-w-[1240px] grid-cols-2 gap-6 text-left">
          
          {/* Card 1: Never a destination for credential material */}
          <div className="rounded-2xl border border-slate-800 bg-[#0E1A3C] p-6 sm:p-8 shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-3">
                Never a destination for credential material
              </h3>
              <p className="text-xs sm:text-sm font-normal leading-relaxed text-slate-300">
                URLs · screenshots · HTML source examples · static page source · client-side
                telemetry · feedback text · searchable page content · marketing and behavior
                analytics · support ticket bodies.
              </p>
            </div>
          </div>

          {/* Card 2: Required handling */}
          <div className="rounded-2xl border border-slate-800 bg-[#0E1A3C] p-6 sm:p-8 shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-3">
                Required handling
              </h3>
              <p className="text-xs sm:text-sm font-normal leading-relaxed text-slate-300">
                Masked values retain enough shape to distinguish records without revealing secret
                material. Copy controls copy only the intended value and announce success{" "}
                <span className="font-bold text-white">
                  without exposing the copied value
                </span>
                . Where the product reveals a secret once, the one-time state warns explicitly
                before dismissal — and that behavior is never invented if unsupported.
              </p>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787663414275.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Card 1 */}
          <div className="rounded-2xl border border-slate-800 bg-[#0E1A3C] p-5 shadow-lg mb-4">
            <h3 className="text-sm font-bold text-white mb-2">
              Never a destination for credential material
            </h3>
            <p className="text-xs font-normal leading-relaxed text-slate-300">
              URLs · screenshots · HTML source examples · static page source · client-side
              telemetry · feedback text · searchable page content · marketing and behavior
              analytics · support ticket bodies.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-slate-800 bg-[#0E1A3C] p-5 shadow-lg mb-4">
            <h3 className="text-sm font-bold text-white mb-2">
              Required handling
            </h3>
            <p className="text-xs font-normal leading-relaxed text-slate-300">
              Masked values retain enough shape to distinguish records without revealing secret
              material. Copy controls copy only the intended value and announce success{" "}
              <span className="font-bold text-white">without exposing the copied value</span>.
              Where the product reveals a secret once, the one-time state warns explicitly before
              dismissal — and that behavior is never invented if unsupported.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-slate-800 bg-[#0E1A3C] p-5 shadow-lg">
            <h3 className="text-sm font-bold text-white mb-2">
              Placeholder discipline
            </h3>
            <p className="text-xs font-normal leading-relaxed text-slate-300">
              Examples use unmistakably synthetic placeholders such as{" "}
              <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] px-1.5 py-0.5 rounded border border-purple-200/60 font-semibold">
                {`<YOUR_CREDENTIAL>`}
              </span>{" "}
              rather than secret-looking random strings. A realistic-looking fake string invites copy-paste and trains developers to expect a format that may not exist.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
