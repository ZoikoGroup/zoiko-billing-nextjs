export default function BillingOne() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 px-4 py-14 sm:px-6 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto w-full max-w-[1320px]">
        {/* Header */}
        <div className="mx-auto max-w-[1240px] text-center">
          {/* Eyebrow */}
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600 sm:text-xs">
              Zoiko Billing + Zoiko One
            </span>

            <span className="h-px w-6 bg-blue-600/50" />
          </div>

          {/* Heading */}
          <h2 className="mx-auto max-w-[1120px] text-3xl font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Run Zoiko Billing independently — or{" "}
            <span className="text-blue-600">
              connect it to Zoiko One
            </span>{" "}
            where your operating model benefits from shared context.
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-[1100px] text-sm font-normal leading-6 text-slate-500 sm:text-base">
            Compare how identity, customer and organization context, approved
            workflows, governance, reporting and support can differ between
            standalone Zoiko Billing and a connected Zoiko One deployment.
            Exact connections are enabled only where supported, authorized and
            configured.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#zoiko-one"
              className="inline-flex h-11 items-center justify-center rounded-full bg-blue-600 px-5 text-sm font-semibold text-white shadow-[0_6px_16px_rgba(31,111,235,0.24)] transition hover:bg-blue-700"
            >
              Explore Zoiko One
            </a>

            <a
              href="/create-account"
              className="inline-flex h-11 items-center justify-center rounded-full border border-gray-200 bg-white px-5 text-sm font-semibold text-slate-900 transition hover:bg-gray-50"
            >
              Create account
            </a>
          </div>
        </div>

        {/* Deployment Cards */}
        <div
          id="zoiko-one"
          className="mt-14 grid grid-cols-1 gap-5 lg:mt-16 lg:grid-cols-2 lg:gap-6"
        >
          {/* Deployment A */}
          <div className="rounded-2xl border border-blue-500 bg-white p-5 shadow-[0_0_0_3px_rgba(31,111,235,0.10)] sm:p-6">
            {/* Label */}
            <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-blue-600 sm:text-xs">
              Deployment A
            </div>

            {/* Title */}
            <h3 className="mt-3 text-lg font-bold leading-7 text-slate-900 sm:text-xl">
              Standalone
            </h3>

            {/* Billing Logo */}
            <div className="mt-3 flex h-12 items-center">
              <img
                src="/images/zoiko-billing-plus-zoiko-one/billing-logo.png"
                alt="Zoiko Billing"
                className="h-12 w-auto object-contain object-left"
              />
            </div>

            {/* Description */}
            <p className="mt-3 text-sm font-normal leading-5 text-slate-500">
              Billing operates as its own product, with its own identity model,
              administration and commercial record.
            </p>

            {/* Features */}
            <ul className="mt-5 space-y-2.5 pl-4">
              <li className="relative text-xs font-normal leading-5 text-slate-500 before:absolute before:-left-3 before:top-[9px] before:h-1 before:w-1 before:rounded-full before:bg-slate-400">
                Complete on its own — nothing is withheld pending a connection
              </li>

              <li className="relative text-xs font-normal leading-5 text-slate-500 before:absolute before:-left-3 before:top-[9px] before:h-1 before:w-1 before:rounded-full before:bg-slate-400">
                Approved external integrations remain available
              </li>

              <li className="relative text-xs font-normal leading-5 text-slate-500 before:absolute before:-left-3 before:top-[9px] before:h-1 before:w-1 before:rounded-full before:bg-slate-400">
                No cross-product data sharing beyond what you configure
              </li>
            </ul>

            {/* Status */}
            <div className="mt-5 inline-flex items-center rounded-md border border-emerald-200 bg-emerald-50 px-2.5 py-1">
              <span className="text-xs font-semibold leading-4 text-emerald-700">
                Current model
              </span>
            </div>
          </div>

          {/* Deployment B */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
            {/* Label */}
            <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-blue-600 sm:text-xs">
              Deployment B
            </div>

            {/* Title */}
            <h3 className="mt-3 text-lg font-bold leading-7 text-slate-900 sm:text-xl">
              Connected through
            </h3>

            {/* Zoiko One Branding */}
            <div className="mt-3 flex h-10 items-center gap-2">
              {/* Icon */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center">
                <img
                  src="/images/zoiko-billing-plus-zoiko-one/zoiko-one-icon.png"
                  alt="Zoiko One icon"
                  className="h-10 w-10 object-contain"
                />
              </div>

              {/* Logo */}
              <div className="flex h-10 w-[105px] shrink-0 items-center">
                <img
                  src="/images/zoiko-billing-plus-zoiko-one/zoiko-one-logo.png"
                  alt="Zoiko One"
                  className="h-10 w-auto object-contain object-left"
                />
              </div>
            </div>

            {/* Description */}
            <p className="mt-3 text-sm font-normal leading-5 text-slate-500">
              Billing stays authoritative for its own domains while approved
              context and handoffs connect to the suite.
            </p>

            {/* Features */}
            <ul className="mt-5 space-y-2.5 pl-4">
              <li className="relative text-xs font-normal leading-5 text-slate-500 before:absolute before:-left-3 before:top-[9px] before:h-1 before:w-1 before:rounded-full before:bg-slate-400">
                Only the categories you explicitly scope are connected
              </li>

              <li className="relative text-xs font-normal leading-5 text-slate-500 before:absolute before:-left-3 before:top-[9px] before:h-1 before:w-1 before:rounded-full before:bg-slate-400">
                Identity and tenant mapping are verified, never inferred
              </li>

              <li className="relative text-xs font-normal leading-5 text-slate-500 before:absolute before:-left-3 before:top-[9px] before:h-1 before:w-1 before:rounded-full before:bg-slate-400">
                Governed pause, change, disconnect and reconnect
              </li>
            </ul>

            {/* Status */}
            <div className="mt-5 inline-flex items-center rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1">
              <span className="text-xs font-semibold leading-4 text-slate-600">
                Connection available — needs setup
              </span>
            </div>
          </div>
        </div>

        {/* Main Image */}
        <div className="mt-7 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05)] sm:mt-8">
          <img
            src="/images/zoiko-billing-plus-zoiko-one/billing-one-overview.png"
            alt="Zoiko Billing and Zoiko One deployment overview"
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}