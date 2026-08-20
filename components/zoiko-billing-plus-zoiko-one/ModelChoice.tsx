export default function ModelChoice() {
  const rows = [
    {
      question: (
        <>
          Do you need billing to operate
          <br className="hidden sm:block" /> independently?
        </>
      ),
      standalone: (
        <>
          Primary fit when billing ownership, integrations and
          <br className="hidden lg:block" /> administration are intentionally self-contained.
        </>
      ),
      connected: (
        <>
          Still possible where connected scope is selective. Connection must not remove
          <br className="hidden lg:block" /> billing autonomy unless explicitly designed to.
        </>
      ),
    },
    {
      question: (
        <>
          Do teams already operate across
          <br className="hidden sm:block" /> Zoiko One?
        </>
      ),
      standalone: <>No dependency either way.</>,
      connected: (
        <>
          Potential fit when approved shared context reduces duplicate setup or manual
          <br className="hidden lg:block" /> handoffs.
        </>
      ),
    },
    {
      question: (
        <>
          Do you need one identity and
          <br className="hidden sm:block" /> admin experience?
        </>
      ),
      standalone: <>Use Billing&apos;s approved identity and admin model.</>,
      connected: (
        <>
          Only where an approved shared identity or tenant configuration actually exists.
        </>
      ),
    },
    {
      question: (
        <>
          Do workflows span other Zoiko
          <br className="hidden sm:block" /> products?
        </>
      ),
      standalone: (
        <>Use approved external integrations or Billing-native workflows.</>
      ),
      connected: (
        <>Potential connected handoffs where production capabilities exist.</>
      ),
    },
    {
      question: (
        <>
          Is minimum data sharing
          <br className="hidden sm:block" /> important?
        </>
      ),
      standalone: <>Simpler product boundary.</>,
      connected: <>Selective connection with an explicit object and field scope.</>,
    },
    {
      question: (
        <>
          Do you need independent
          <br className="hidden sm:block" /> disconnectability?
        </>
      ),
      standalone: <>Native state.</>,
      connected: (
        <>
          Connection must support governed pause, revoke and disconnect behavior.
        </>
      ),
    },
  ];

  return (
    <section className="w-full border-t border-gray-200 bg-gray-50 px-4 py-14 sm:px-6 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto w-full max-w-[1320px] px-0 sm:px-4 lg:px-7">
        {/* Eyebrow */}
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600 sm:text-xs">
            Choose the right operating model
          </span>

          <span className="h-px w-6 bg-blue-600/50" />
        </div>

        {/* Heading */}
        <h2 className="mt-4 text-2xl font-bold leading-9 tracking-tight text-slate-900 sm:text-3xl sm:leading-10">
          Six questions decide this, and none of them is about your size.
        </h2>

        {/* Description */}
        <p className="mt-3 max-w-[700px] text-sm font-normal leading-6 text-slate-500 sm:text-base">
          This guide uses only the operating needs you declare. It does not
          profile your company size, revenue, or behavior to steer a
          recommendation.
        </p>

        {/* =========================
            COMPARISON TABLE
        ========================== */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
          {/* Intro */}
          <div className="border-b border-gray-200 bg-gray-50 px-5 py-4">
            <p className="text-sm font-normal leading-5 text-slate-500">
              Both columns are legitimate outcomes. Neither is presented as the
              upgrade.
            </p>
          </div>

          {/* Desktop Header */}
          <div className="hidden lg:grid lg:grid-cols-[256px_1fr_1.45fr]">
            <div className="border-b border-r border-gray-200 bg-gray-50 px-4 py-3.5">
              <span className="text-xs font-bold uppercase tracking-wide text-blue-600">
                Decision question
              </span>
            </div>

            <div className="border-b border-r border-gray-200 bg-gray-50 px-4 py-3.5">
              <span className="text-xs font-bold uppercase tracking-wide text-blue-600">
                Standalone Zoiko Billing
              </span>
            </div>

            <div className="border-b border-gray-200 bg-gray-50 px-4 py-3.5">
              <span className="text-xs font-bold uppercase tracking-wide text-blue-600">
                Connected through Zoiko One
              </span>
            </div>
          </div>

          {/* Rows */}
          <div>
            {rows.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-[256px_1fr_1.45fr] ${
                  index !== rows.length - 1
                    ? "border-b border-gray-200"
                    : ""
                }`}
              >
                {/* Question */}
                <div className="bg-gray-50 px-5 py-4 lg:border-r lg:border-gray-200">
                  <div className="mb-2 text-[10px] font-bold uppercase tracking-wide text-blue-600 lg:hidden">
                    Decision question
                  </div>

                  <p className="text-sm font-semibold leading-5 text-slate-900">
                    {row.question}
                  </p>
                </div>

                {/* Standalone */}
                <div className="px-5 py-4 lg:border-r lg:border-gray-200">
                  <div className="mb-2 text-[10px] font-bold uppercase tracking-wide text-blue-600 lg:hidden">
                    Standalone Zoiko Billing
                  </div>

                  <p className="text-sm font-normal leading-5 text-slate-500">
                    {row.standalone}
                  </p>
                </div>

                {/* Connected */}
                <div className="px-5 py-4">
                  <div className="mb-2 text-[10px] font-bold uppercase tracking-wide text-blue-600 lg:hidden">
                    Connected through Zoiko One
                  </div>

                  <p className="text-sm font-normal leading-5 text-slate-500">
                    {row.connected}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}