"use client";

import Link from "next/link";
import Image from "next/image";

interface RouteByEvaluationItem {
  evaluator: string;
  route: string;
  href: string;
}

const routeByEvaluationItems: RouteByEvaluationItem[] = [
  {
    evaluator: "CRM evaluator",
    route: "Browse integrations · Availability",
    href: "/integrations",
  },
  {
    evaluator: "RevOps evaluator",
    route: "Revenue operations · Customer records",
    href: "/customer-stories",
  },
  {
    evaluator: "Developer",
    route: "API docs · Webhooks",
    href: "/developers-api-documentation",
  },
  {
    evaluator: "Commercial evaluator",
    route: "Governed CTA · Pricing",
    href: "/pricing-and-plans",
  },
  {
    evaluator: "Existing customer incident",
    route: "Integration support · Status",
    href: "/integration-support",
  },
];

export default function CrmPlatformsFinalCtaSection() {
  return (
    <section
      id="final-cta"
      className="w-full bg-white font-[family-name:var(--font-inter)] lg:bg-[#f7f8fa]"
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          px-4
          py-10
          sm:px-8
          sm:py-16
          md:px-10
          md:py-20
          lg:px-14
          xl:px-20
        "
      >
        <div
          className="
            relative
            mx-auto
            flex
            w-full
            max-w-[1240px]
            flex-col
            overflow-hidden
            rounded-[24px]
            border
            border-[#1d2a42]
            bg-[#091127]
            p-6
            sm:rounded-[28px]
            sm:p-8
            md:p-10
            lg:flex-row
            lg:items-center
            lg:justify-between
            lg:gap-12
            lg:rounded-[32px]
            lg:p-12
            xl:p-14
          "
        >
          {/* Background Glow */}
          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-72
              w-72
              rounded-full
              bg-blue-600/15
              blur-[100px]
              sm:h-96
              sm:w-96
            "
          />

          {/* CONTENT */}
          <div
            className="
              relative
              z-10
              flex
              w-full
              max-w-[600px]
              flex-col
              items-start
              text-left
            "
          >
            <h2
              className="!font-[family-name:var(--font-jakarta)] 
                !m-0
                !text-[24px]
                !font-extrabold
                !leading-[1.18]
                !tracking-[-0.03em]
                !text-white
                sm:!text-[34px]
                md:!text-[38px]
                lg:!text-[42px]
              "
            >
              Know which system <br />
              owns which field.
            </h2>

            <p
              className="
                !m-0
                mt-3
                max-w-[500px]
                text-xs
                font-normal
                leading-relaxed
                text-slate-300
                sm:text-base
                sm:leading-6
                sm:text-slate-400
              "
            >
              Check direction, authority, freshness and conflict behavior per
              field before sales context starts touching billing truth.
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <Link
                href="/integrations"
                className="
                  inline-flex
                  min-h-10
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  px-5
                  text-xs
                  font-semibold
                  !text-slate-900
                  shadow-md
                  transition
                  hover:bg-slate-100
                  sm:min-h-11
                  sm:text-sm
                "
              >
                Browse CRM integrations
              </Link>

              <Link
                href="/integration-availability"
                className="
                  inline-flex
                  min-h-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-700
                  bg-white/5
                  px-5
                  text-xs
                  font-semibold
                  !text-white
                  transition
                  hover:bg-white/10
                  sm:min-h-11
                  sm:text-sm
                "
              >
                Integration availability
              </Link>

              <Link
                href="/pricing-and-plans"
                className="
                  inline-flex
                  min-h-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-700
                  bg-white/5
                  px-5
                  text-xs
                  font-semibold
                  !text-white
                  transition
                  hover:bg-white/10
                  sm:min-h-11
                  sm:text-sm
                  lg:hidden
                "
              >
                View pricing
              </Link>
            </div>

            {/* ROUTE BY EVALUATION (MOBILE ONLY) */}
            <div
              className="
                mt-6
                block
                w-full
                rounded-2xl
                border
                border-slate-800/80
                bg-[#070D1E]/70
                p-4
                sm:p-5
                lg:hidden
              "
            >
              <p className="!m-0 text-xs font-bold text-slate-200">
                Route by evaluation
              </p>

              <div className="mt-3 divide-y divide-slate-800/70">
                {routeByEvaluationItems.map((item) => (
                  <div
                    key={item.evaluator}
                    className="
                      flex
                      items-center
                      justify-between
                      gap-3
                      py-2.5
                    "
                  >
                    <span className="text-xs text-slate-400">
                      {item.evaluator}
                    </span>

                    <Link
                      href={item.href}
                      className="
                        text-right
                        text-xs
                        font-normal
                        !text-slate-200
                        transition
                        hover:!text-white
                      "
                    >
                      {item.route}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* IMAGE (DESKTOP ONLY) */}
          <div
            className="
              relative
              z-10
              hidden
              overflow-hidden
              rounded-2xl
              border
              border-slate-800
              shadow-xl
              lg:block
              lg:max-w-[520px]
              xl:max-w-[540px]
            "
          >
            <Image
              src="/images/crm-platforms/crm7.png"
              alt="Know which system owns which field"
              width={600}
              height={400}
              priority
              className="block h-auto w-full object-cover rounded-2xl"
              sizes="(max-width: 1024px) 100vw, 540px"
            />
          </div>
        </div>
      </div>

      {/* SECOND SECTION: BLUE BANNER (MOBILE ONLY) */}
      <div className="block w-full bg-gradient-to-r from-[#1d6ce8] via-[#2c53d4] to-[#4a4bc1] px-5 py-10 text-white sm:px-8 sm:py-12 lg:hidden">
        <div className="mx-auto w-full max-w-[640px]">
          <h3
            className="!font-[family-name:var(--font-jakarta)] 
              !m-0
              text-[22px]
              font-extrabold
              leading-tight
              tracking-tight
              text-white
              sm:text-2xl
            "
          >
            Sales context in. Billing truth intact.
          </h3>

          <p
            className="
              !m-0
              mt-2
              text-xs
              leading-relaxed
              text-blue-100
              sm:text-sm
            "
          >
            Field authority, external IDs, versions, effective dates and conflict
            history traceable on every mapped value.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Link
              href="/integrations"
              className="
                inline-flex
                min-h-10
                items-center
                justify-center
                rounded-full
                bg-white
                px-5
                text-xs
                font-semibold
                text-slate-900
                shadow-sm
                transition
                hover:bg-slate-50
                sm:min-h-11
                sm:px-6
                sm:text-sm
              "
            >
              Browse CRM integrations
            </Link>

            <Link
              href="/integrations-directory"
              className="
                inline-flex
                min-h-10
                items-center
                justify-center
                rounded-full
                border
                border-white/40
                bg-white/10
                px-5
                text-xs
                font-semibold
                text-white
                transition
                hover:bg-white/20
                sm:min-h-11
                sm:px-6
                sm:text-sm
              "
            >
              Integrations directory
            </Link>
          </div>

          <p
            className="
              !m-0
              mt-6
              text-[11px]
              leading-relaxed
              text-white/80
              sm:text-xs
            "
          >
            Available as standalone software, and as an integrated component of
            Zoiko One where that deployment is evaluated separately.{" "}
            <Link
              href="/pricing-and-plans"
              className="font-medium text-white underline hover:text-white/90"
            >
              Compare deployment options
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}