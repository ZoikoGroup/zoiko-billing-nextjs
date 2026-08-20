import Image from "next/image";

export default function InvoiceDelivery() {
  return (
    <section className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-10 lg:gap-11">
        {/* Heading */}
        <div className="w-full max-w-[680px] pt-2 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-4 bg-blue-600/40" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              Invoices, documents &amp; digital delivery
            </span>

            <span className="h-px w-4 bg-blue-600/40" />
          </div>

          <h2 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl sm:leading-[1.15] lg:text-5xl lg:leading-[1.14]">
            Issued billing does not prove a
            <br className="hidden sm:block" />
            service is active.
          </h2>

          <p className="mx-auto mt-5 max-w-[687px] text-sm font-normal leading-6 text-slate-600 sm:text-base sm:leading-7">
            A generated invoice is not sent, sent is not delivered, and none
            of those states says anything about entitlement.
          </p>
        </div>

        {/* Image card */}
        <div className="w-full overflow-hidden rounded-2xl bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05)] shadow-[0px_1px_2px_0px_rgba(15,23,42,0.04)] outline outline-1 outline-offset-[-1px] outline-slate-200">
          <Image
            src="/images/saas-and-digital-services/invoice-delivery.png"
            alt="Invoices, documents and digital delivery"
            width={1182}
            height={632}
            className="h-auto w-full object-cover"
            sizes="(max-width: 1240px) 100vw, 1182px"
          />
        </div>
      </div>
    </section>
  );
}