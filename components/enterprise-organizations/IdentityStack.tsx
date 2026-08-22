import Image from "next/image";

export default function IdentityStack() {
  return (
    <section className="w-full bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-5">
        {/* Heading Content */}
        <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2">
          {/* Eyebrow */}
          <div className="flex w-full max-w-[472px] items-center justify-center gap-3">
            <span className="h-px w-4 shrink-0 bg-blue-600 opacity-40" />

            <span className="text-center text-xs font-bold uppercase leading-4 tracking-[0.18em] text-blue-600">
              Identity, roles, approvals &amp; segregation of duties
            </span>

            <span className="h-px w-4 shrink-0 bg-blue-600 opacity-40" />
          </div>

          {/* Heading */}
          <h2 className="w-full text-center text-2xl font-extrabold leading-8 tracking-tight text-slate-900 sm:text-3xl sm:leading-9 lg:text-4xl lg:leading-10">
            What this page will not assume about your identity stack.
          </h2>

          {/* Description */}
          <p className="w-full max-w-[687px] text-center text-sm font-normal leading-6 text-slate-600 sm:text-base sm:leading-7">
            Enterprise pages usually list identity acronyms as features. Each
            row below states its publication rule and its current state instead.
          </p>
        </div>

        {/* Image */}
        <div className="w-full pt-1 sm:pt-3 lg:pt-5">
          <Image
            src="/images/enterprise-organizations/identity-stack.png"
            alt="Identity, roles, approvals and segregation of duties"
            width={1184}
            height={603}
            className="h-auto w-full rounded-2xl border border-slate-200 object-cover shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]"
            priority
          />
        </div>
      </div>
    </section>
  );
}