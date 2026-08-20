import Image from "next/image";

export default function FeeAdjustments() {
  const items = [
    {
      title: "Setup or onboarding fee",
      description:
        "— an approved one-time charge with source and effective date.",
    },
    {
      title: "Add-on reference",
      description:
        "— an approved service-change reference; no product entitlement inference.",
    },
    {
      title: "Downgrade reference",
      description:
        "— a billing change where approved, preserving prior periods and documents.",
    },
    {
      title: "Credit or correction after issue",
      description:
        "— explicitly related to the original, with no silent overwrite.",
    },
    {
      title: "Proration",
      description:
        "— not claimed and not calculated unless a separately approved rule exists.",
    },
    {
      title: "Unknown outcome",
      description:
        "— reconcile before retrying any financial mutation.",
    },
  ];

  return (
    <section className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Content */}
          <div className="w-full">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-6 bg-blue-600" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                One-time fees, add-ons &amp; adjustments
              </span>
            </div>

            <h2 className="max-w-[680px] text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl sm:leading-[1.15] lg:text-5xl lg:leading-[1.14]">
              Upgrade and downgrade describe what happened upstream.
            </h2>

            <p className="mt-6 max-w-[680px] text-sm font-normal leading-6 text-slate-600 sm:text-base sm:leading-7">
              Those words can label a change reference that arrives from your
              product system. They never mean Zoiko Billing owns a plan
              catalog, changed an entitlement, provisioned a service or
              prorated an amount.
            </p>

            <div className="mt-7 space-y-5">
              {items.map((item) => (
                <div
                  key={item.title}
                  className="grid grid-cols-[6px_1fr] gap-x-3 gap-y-1 sm:grid-cols-[6px_180px_1fr] sm:gap-x-3"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-sm bg-blue-600" />

                  <p className="text-sm font-bold leading-6 text-slate-700">
                    {item.title}
                  </p>

                  <p className="col-start-2 text-sm font-normal leading-6 text-slate-600 sm:col-start-3">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="w-full rounded-3xl bg-[#f2f2f2] p-3 sm:p-4">
            <div className="relative min-h-[300px] overflow-hidden rounded-2xl bg-black sm:min-h-[430px] lg:min-h-[562px]">
              <Image
                src="/images/saas-and-digital-services/fee-adjustments.png"
                alt="One-time fees, add-ons and billing adjustments"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}