import Image from "next/image";
import Link from "next/link";
import MobileCrmHeroInspector from "./MobileCrmHeroInspector";

export default function CrmPlatformsHeroSection() {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          px-5
          pb-14
          pt-8

          sm:px-8
          sm:pb-16
          sm:pt-12

          md:px-10
          md:pb-20

          lg:flex-row
          lg:items-center
          lg:justify-between
          lg:gap-10
          lg:px-14
          lg:py-20

          xl:gap-14
          xl:px-20
        "
      >
        {/* LEFT CONTENT */}
        <div className="w-full min-w-0 lg:w-[52%]">
          {/* MOBILE BREADCRUMB */}
          <nav
            aria-label="Breadcrumb"
            className="mb-4 flex items-center gap-1.5 text-[11px] font-medium text-slate-500 lg:hidden"
          >
            <Link href="/" className="transition hover:text-slate-800">
              Home
            </Link>
            <span>/</span>
            <Link href="/integrations" className="transition hover:text-slate-800">
              Integrations
            </Link>
            <span>/</span>
            <span className="font-semibold text-slate-900">CRM Platforms</span>
          </nav>

          {/* EYEBROW */}
          <div className="mb-4 flex items-center gap-2.5 sm:mb-6">
            <span className="h-0.5 w-5 shrink-0 bg-[#1D70F5]" />
            <span
              className="
                text-[10px]
                font-bold
                uppercase
                leading-4
                tracking-[0.16em]
                text-[#7890b2]
                sm:text-xs
                sm:tracking-[0.18em]
              "
            >
              CRM Platforms
            </span>
          </div>

          {/* DESKTOP HEADING (Unchanged for lg+) */}
          <h1
            className="!font-[family-name:var(--font-jakarta)] 
              !m-0
              hidden
              lg:block
              w-full
              !text-[48px]
              xl:!text-[52px]
              !font-extrabold
              !leading-[1.12]
              !tracking-[-0.035em]
              !text-slate-900
            "
          >
            Connect customer and <br />
            sales systems to billing <br />
            <span className="text-[#1D70F5]">
              without losing source <br className="hidden sm:inline" /> authority.
            </span>
          </h1>

          {/* MOBILE HEADING */}
          <h1
            className="!font-[family-name:var(--font-jakarta)] 
              !m-0
              block
              lg:hidden
              w-full
              !text-[28px]
              sm:!text-[36px]
              !font-extrabold
              !leading-[1.16]
              !tracking-[-0.03em]
              !text-slate-900
            "
          >
            Connect customer and sales systems<br />
            to billing <span className="text-[#1D70F5]">without losing source<br />authority.</span>
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              !mt-5
              sm:!mt-6
              w-full
              max-w-[620px]
              text-[14px]
              font-normal
              leading-relaxed
              text-[#5d7192]
              sm:text-base
              sm:leading-7
            "
          >
            Evaluate approved CRM integrations by supported objects, actions,
            direction, field authority, authentication, customer matching,
            lifecycle handling, availability, currentness, documentation and
            verification. Keep sales context useful without turning CRM data
            into financial truth — or billing data into hidden sales scoring.
          </p>

          {/* CTA BUTTONS */}
          <div
            className="
              mt-6
              flex
              w-full
              flex-row
              flex-wrap
              items-center
              gap-3
              sm:mt-8
            "
          >
            <Link
              href="/integrations"
              className="
                inline-flex
                min-h-11
                items-center
                justify-center
                rounded-full
                bg-[#1D70F5]
                px-6
                text-xs
                font-semibold
                text-white
                shadow-[0_8px_20px_rgba(31,111,235,0.26)]
                transition
                hover:bg-blue-600
                sm:text-sm
              "
            >
              Browse CRM integrations
            </Link>

            <Link
              href="/integration-availability"
              className="
                inline-flex
                min-h-11
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                bg-white
                px-6
                text-xs
                font-semibold
                text-slate-900
                shadow-sm
                transition
                hover:bg-slate-50
                sm:text-sm
              "
            >
              Check Integration Availability
            </Link>
          </div>

          {/* MOBILE ONLY EXPLORE LINK */}
          <div className="mt-4 block lg:hidden">
            <Link
              href="/customer-records"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#1D70F5] hover:underline"
            >
              Explore Customer Records &gt;
            </Link>
          </div>

          {/* MOBILE ONLY CALLOUT BOX */}
          <div className="mt-6 block rounded-xl border border-blue-100 border-l-4 border-l-[#1D70F5] bg-white p-4 shadow-sm lg:hidden">
            <p className="!m-0 text-xs leading-relaxed text-[#5d7192]">
              A CRM record represents separated accounts or commercial context. Billing debtor accounts, balances, payments and permissions remain under entity/tax rule and manual controls.
            </p>
          </div>

          {/* MOBILE ONLY INSPECTOR COMPONENT */}
          <div className="mt-8 block w-full lg:hidden">
            <MobileCrmHeroInspector />
          </div>
        </div>

        {/* RIGHT IMAGE (DESKTOP ONLY) */}
        <div
          className="
            hidden
            lg:block
            lg:w-[46%]
            xl:w-[45%]
          "
        >
          <div
            className="
              relative
              mx-auto
              w-full
              max-w-[540px]
              overflow-hidden
              rounded-2xl
              shadow-xl
            "
          >
            <Image
              src="/images/crm-platforms/crm1.png"
              alt="Connect customer and sales systems to billing without losing source authority"
              width={540}
              height={540}
              priority
              className="h-auto w-full object-cover rounded-2xl"
              sizes="(max-width: 1024px) 100vw, 540px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}