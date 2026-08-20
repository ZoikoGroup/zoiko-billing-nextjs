import Image from "next/image";
import Link from "next/link";

export default function CustomerRecords() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 px-4 py-12 sm:px-6 lg:px-14 lg:py-20">
      <div className="mx-auto w-full max-w-[1240px] px-0 sm:px-4 lg:px-7">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left Content */}
          <div className="flex w-full flex-col items-start">
            {/* Eyebrow */}
            <div className="flex h-4 items-center gap-2">
              <div className="h-px w-6 bg-blue-600 opacity-75" />

              <span className="text-xs font-bold uppercase leading-4 tracking-widest text-blue-600">
                Customer Records
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[1.16]">
              Keep every billing
              <br className="hidden sm:block" />
              account clear, current,
              <br className="hidden sm:block" />
              <span className="text-blue-600">and traceable.</span>
            </h2>

            {/* Description */}
            <p className="mt-5 w-full max-w-[620px] text-sm font-normal leading-6 text-slate-600 sm:text-base sm:leading-7">
              Centralize approved billing profiles, purpose-specific contacts,
              account context, customer-level controls and change history — so
              billing operations can use the right record without hiding
              source, authority or correction history.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                href="/create-account"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold leading-6 text-white shadow-[0px_8px_20px_0px_rgba(31,111,235,0.26)] transition hover:bg-blue-700"
              >
                Create account
              </Link>

              <Link
                href="/pricing-and-plans"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-gray-200 bg-white px-6 py-2.5 text-sm font-semibold leading-6 text-slate-900 transition hover:bg-gray-50"
              >
                View Pricing &amp; Plans
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full">
            <div className="relative w-full overflow-hidden rounded-3xl bg-gray-100 p-3 sm:p-4">
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/images/customer-records/customer-records.png"
                  alt="Customer records"
                  width={1200}
                  height={560}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}