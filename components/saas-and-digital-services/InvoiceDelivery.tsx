import Image from "next/image";

export default function InvoiceDelivery() {
  return (
    <section className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-8 sm:gap-10 lg:gap-11">

        {/* ================= HEADER ================= */}
        <div className="flex w-full max-w-[900px] flex-col items-center pt-2 text-center">

          {/* Eyebrow */}
          <div className="mb-4 flex w-full items-center justify-center gap-3">
            <span className="h-px w-4 shrink-0 bg-blue-600/40" />

            <span className="text-center text-[10px] font-bold uppercase leading-4 tracking-[0.12em] text-blue-600 sm:text-[11px] sm:tracking-[0.14em] lg:text-xs lg:tracking-widest">
              Invoices, documents &amp; digital delivery
            </span>

            <span className="h-px w-4 shrink-0 bg-blue-600/40" />
          </div>

          {/* Heading */}
          <h2
            className="
              mx-auto
              w-full
              max-w-[900px]
              text-center
              text-[30px]
              font-extrabold
              leading-[1.15]
              tracking-[-0.02em]
              text-gray-900
              sm:text-[38px]
              sm:leading-[1.15]
              lg:text-5xl
              lg:leading-[1.14]
            "
          >
            <span className="block">
              Issued billing does not prove a
            </span>

            <span className="block">
              service is active.
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-4
              w-full
              max-w-[687px]
              text-center
              text-sm
              font-normal
              leading-6
              text-slate-600
              sm:mt-5
              sm:text-base
              sm:leading-7
            "
          >
            A generated invoice is not sent, sent is not delivered, and none
            of those states says anything about entitlement.
          </p>
        </div>

        {/* ================= IMAGE ================= */}
        <div
          className="
            w-full
            overflow-hidden
            rounded-xl
            border
            border-slate-200
            bg-white
            shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05)]
            shadow-[0px_1px_2px_0px_rgba(15,23,42,0.04)]
            sm:rounded-2xl
          "
        >
          <Image
            src="/images/saas-and-digital-services/invoice-delivery.png"
            alt="Invoices, documents and digital delivery"
            width={1182}
            height={632}
            className="h-auto w-full object-cover"
            sizes="
              (max-width: 639px) 100vw,
              (max-width: 1023px) 100vw,
              1182px
            "
          />
        </div>
      </div>
    </section>
  );
}