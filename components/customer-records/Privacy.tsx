import Image from "next/image";

export default function Privacy() {
  return (
    <section className="w-full bg-gray-50 px-4 py-12 sm:px-6 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-8 px-0 sm:px-4 lg:gap-5 lg:px-7">
        {/* Header */}
        <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2 text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-4 bg-blue-600 opacity-40" />

            <span className="text-xs font-bold uppercase leading-4 tracking-widest text-blue-600">
              Privacy, security, retention, export &amp; deletion
            </span>

            <div className="h-px w-4 bg-blue-600 opacity-40" />
          </div>

          {/* Heading */}
         <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl sm:leading-10">
  Deletion is not always the
  correct state.
</h2>

          {/* Description */}
          <p className="w-full max-w-[687px] text-sm font-normal leading-6 text-slate-600 sm:text-base sm:leading-7">
            Customer data rights and financial-record retention can both apply
            to the same account. This page does not promise instant deletion,
            and does not promise to keep everything forever.
          </p>
        </div>

        {/* Image */}
        <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]">
          <Image
            src="/images/customer-records/privacy.png"
            alt="Privacy, security, retention, export and deletion"
            width={1184}
            height={592}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}