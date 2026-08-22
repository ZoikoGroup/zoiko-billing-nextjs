"use client";

import Image from "next/image";

export default function RemindersExceptions() {
  return (
    <section className="w-full border-t border-gray-200 bg-white px-5 py-20 sm:px-8 lg:px-14 lg:py-24">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start gap-3.5 px-0 sm:px-7">
        {/* Eyebrow */}
        <div className="relative flex h-6 w-full max-w-[340px] items-center">
          <span className="text-xs font-bold uppercase leading-4 tracking-widest text-blue-600">
            Reminders, disputes &amp; exceptions
          </span>

          <span className="ml-4 h-px w-6 shrink-0 bg-blue-600 opacity-50" />
        </div>

        {/* Heading */}
        <div className="w-full pb-[0.61px]">
          <h2 className="m-0 text-2xl font-bold leading-8 text-slate-900 sm:text-3xl sm:leading-10">
            A reminder checks the current state before it sends.
          </h2>
        </div>

        {/* Description */}
        <div className="w-full max-w-[686.38px]">
          <p className="m-0 text-base font-normal leading-6 text-slate-600">
            Chasing an invoice that is disputed, undelivered, or awaiting a
            credit note damages the customer relationship and the record. Each
            state below is checked first.
          </p>
        </div>

        {/* Main Image */}
        <div className="mt-6 w-full overflow-hidden rounded-2xl border border-gray-200 shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]">
          <Image
            src="/images/finance-and-account-receivable/reminders-exceptions.png"
            alt="Reminders, disputes and exceptions"
            width={1264}
            height={637}
            priority
            className="h-auto w-full object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1320px) 100vw, 1264px"
          />
        </div>

        {/* Bottom Cards */}
        <div className="flex w-full flex-col items-stretch gap-5 pt-5 lg:flex-row">
          {/* Human Authority */}
          <div className="flex-1 rounded-2xl bg-gray-100 px-5 pb-9 pt-6 outline outline-1 outline-offset-[-1px] outline-gray-200 sm:px-6">
            <h3 className="m-0 text-base font-bold leading-7 text-slate-900">
              Human authority is retained
            </h3>

            <p className="m-0 mt-3 text-sm font-normal leading-5 text-slate-600">
              Automation may recommend or execute configured operational steps
              where production capability exists. Sensitive exceptions,
              disputes and financial corrections keep explicit human authority
              and review.
            </p>
          </div>

          {/* Nothing Disappears */}
          <div className="flex-1 rounded-2xl bg-white px-5 pb-14 pt-6 shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)] outline outline-1 outline-offset-[-1px] outline-gray-200 sm:px-6">
            <h3 className="m-0 text-base font-bold leading-7 text-slate-900">
              Nothing disappears quietly
            </h3>

            <p className="m-0 mt-3 text-sm font-normal leading-5 text-slate-600">
              An unresolved exception stays visible in the queue. Communication
              history records the approved reminder or contact event without
              exposing unrelated communication content.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}