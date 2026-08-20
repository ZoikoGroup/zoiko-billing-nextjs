import Image from "next/image";

const lifecycleSteps = [
  {
    title: "Create",
    description:
      "— minimum authoritative billing fields, with source and creator recorded.",
  },
  {
    title: "Activate",
    description:
      "— usable for permitted workflows after validation and approval gates.",
  },
  {
    title: "Update",
    description:
      "— material changes capture before and after, actor, source, reason and effective date.",
  },
  {
    title: "Schedule a future change",
    description:
      "— future values stay distinct from current state.",
  },
  {
    title: "Restrict",
    description:
      "— limit use or access without deleting history when policy requires.",
  },
  {
    title: "Close",
    description:
      "— no new billing activity where product rules say so; open items stay visible and governed.",
  },
  {
    title: "Reactivate",
    description:
      "— requires authority and effective-date treatment, with no history reset.",
  },
  {
    title: "Merge, archive, delete or anonymize",
    description:
      "— only under the relevant authority, covered in the sections below.",
  },
];

export default function Lifecycle() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 lg:px-14 lg:py-20">
      <div className="mx-auto w-full max-w-[1184px]">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left Image */}
          <div className="w-full rounded-3xl bg-gray-100 p-3 sm:p-4">
            <div className="relative w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/customer-records/lifecycle.png"
                alt="Customer record lifecycle"
                width={548}
                height={519}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="flex w-full flex-col items-start">
            {/* Eyebrow */}
            <div className="flex h-4 items-center gap-2">
              <div className="h-px w-6 bg-blue-600 opacity-75" />

              <span className="text-xs font-bold uppercase leading-4 tracking-widest text-blue-600">
                Lifecycle &amp; effective-dated change
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-4 text-3xl font-extrabold leading-9 tracking-tight text-slate-900 sm:text-4xl">
              Separate what is true now from what
              <br className="hidden sm:block" />
              was used then.
            </h2>

            {/* Description */}
            <p className="mt-4 w-full max-w-[687px] text-sm font-normal leading-6 text-slate-600 sm:text-base sm:leading-7">
              Material historical values are never replaced without preserving
              a change event. That is what makes an issued invoice defensible
              after the account has moved on.
            </p>

            {/* Lifecycle List */}
            <div className="mt-6 flex w-full flex-col">
              {lifecycleSteps.map((step) => (
                <div
                  key={step.title}
                  className="flex w-full items-start gap-3 py-2"
                >
                  {/* Bullet */}
                  <div className="mt-2 shrink-0">
                    <div className="h-1.5 w-1.5 rounded-sm bg-blue-600" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col sm:flex-row sm:items-start sm:gap-2">
                    <span className="shrink-0 text-sm font-bold leading-6 text-slate-600 sm:min-w-fit">
                      {step.title}
                    </span>

                    <span className="text-sm font-normal leading-6 text-slate-600">
                      {step.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}