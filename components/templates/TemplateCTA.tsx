import Link from "next/link";

export default function TemplateCTA() {
  return (
    <section className="w-full px-4 py-12 sm:px-6 lg:px-12">
      <div className="relative mx-auto flex w-full max-w-[1184px] min-h-[384px] overflow-hidden rounded-3xl bg-[#0B1B3C] p-7 sm:p-10 lg:p-14">
        
        {/* Background glow */}
        <div className="pointer-events-none absolute -right-[110px] -top-[110px] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,#1F5FBF_0%,rgba(31,95,191,0.45)_35%,rgba(31,95,191,0)_70%)]" />

        {/* Content */}
        <div className="relative z-10 flex w-full flex-col justify-center lg:w-1/2">
          <div>
            <div
              className="!m-0 !p-0 text-[36px] font-extrabold leading-[42px] tracking-[-1px] !text-white sm:text-[40px] sm:leading-[46px]"
            >
              Structure the work,
              <br />
              then check the source.
            </div>

            <div
              className="mt-4 max-w-[510px] !text-[15px] !font-normal !leading-[22px] !text-white/70"
            >
              Templates organize a task. The authoritative product, accounting,
              legal and provider sources settle it.
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/signup"
                className="!inline-flex !h-11 !items-center !justify-center !rounded-full !bg-white !px-6 !text-sm !font-semibold !leading-6 !text-[#0B1B3C] !no-underline transition-opacity hover:opacity-90"
              >
                Create account
              </Link>

              <Link
                href="/book-a-demo"
                className="!inline-flex !h-11 !items-center !justify-center !rounded-full !border !border-white/35 !bg-transparent !px-6 !text-sm !font-semibold !leading-6 !text-white !no-underline transition-colors hover:!bg-white/10"
              >
                Book a demo
              </Link>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative z-10 hidden w-1/2 items-center justify-end lg:flex">
          <div className="w-full max-w-[510px] overflow-hidden rounded-2xl">
            <img
              src="/images/templates/template-cta.png"
              alt="Template workflow preview"
              className="block h-auto w-full object-cover"
            />
          </div>
        </div>

        {/* Mobile image */}
        <div className="relative z-10 mt-8 flex w-full justify-center lg:hidden">
          <div className="w-full max-w-[510px] overflow-hidden rounded-2xl">
            <img
              src="/images/templates/template-cta.png"
              alt="Template workflow preview"
              className="block h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}