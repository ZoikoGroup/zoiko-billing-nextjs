import Image from "next/image";

export default function InvoiceDelivery() {
  return (
    <section className="w-full border-t border-slate-200 bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start gap-3.5 px-0 sm:px-2 lg:px-7">
        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <div className="h-px w-6 bg-blue-600 opacity-70" />

          <span className="text-xs font-bold uppercase leading-4 tracking-[0.16em] text-blue-600">
            Invoice, document &amp; delivery execution
          </span>
        </div>

        {/* Heading */}
        <h2 className="m-0 w-full text-2xl font-bold leading-8 text-slate-900 sm:text-3xl sm:leading-10">
          Issued is not delivered, and approved is not issued.
        </h2>

        {/* Description */}
        <div className="w-full max-w-[686px]">
          <p className="m-0 text-sm font-normal leading-6 text-slate-600 sm:text-base">
            Coordination depends on knowing exactly where the lifecycle stopped.
            A single &quot;sent&quot; success badge would hide that.
          </p>
        </div>

        {/* Image */}
        <div className="mt-5 w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]">
          <Image
            src="/images/revenue-operations/invoice-delivery.png"
            alt="Invoice, document and delivery execution"
            width={1264}
            height={632}
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}