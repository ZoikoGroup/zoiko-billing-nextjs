"use client";

import Link from "next/link";

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
      className="w-full bg-white"
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          px-5
          py-12
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
            bg-[#071126]
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
              className="
                !m-0
                !text-[28px]
                !font-extrabold
                !leading-[1.15]
                !tracking-[-0.03em]
                !text-white
                sm:!text-[34px]
                md:!text-[38px]
                lg:!text-[42px]
              "
            >
              Know which system owns which field.
            </h2>

            <p
              className="
                !m-0
                mt-3
                max-w-[500px]
                text-sm
                font-normal
                leading-6
                text-slate-400
                sm:text-base
              "
            >
              Check direction, authority, freshness and conflict behavior per
              field before sales context starts touching billing truth.
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/integrations"
                className="
                  inline-flex
                  min-h-11
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  px-5
                  text-sm
                  font-semibold
                  !text-slate-900
                  shadow-md
                  transition
                  hover:bg-slate-100
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
                  border-slate-700
                  px-5
                  text-sm
                  font-semibold
                  !text-white
                  transition
                  hover:bg-white/10
                "
              >
                Integration availability
              </Link>

              <Link
                href="/pricing-and-plans"
                className="
                  inline-flex
                  min-h-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-700
                  px-5
                  text-sm
                  font-semibold
                  !text-white
                  transition
                  hover:bg-white/10
                  lg:hidden
                "
              >
                View pricing
              </Link>
            </div>

            {/* ROUTE BY EVALUATION */}
            <div
              className="
                mt-7
                w-full
                rounded-2xl
                border
                border-slate-800
                bg-[#070D1E]/70
                p-4
                sm:p-5
                lg:max-w-[600px]
              "
            >
              <p className="!m-0 text-xs font-bold text-slate-200">
                Route by evaluation
              </p>

              <div className="mt-2 divide-y divide-slate-800/80">
                {routeByEvaluationItems.map((item) => (
                  <div
                    key={item.evaluator}
                    className="
                      flex
                      items-center
                      justify-between
                      gap-4
                      py-3
                    "
                  >
                    <span className="text-xs text-slate-400 sm:text-sm">
                      {item.evaluator}
                    </span>

                    <Link
                      href={item.href}
                      className="
                        text-right
                        text-xs
                        font-semibold
                        !text-white
                        transition
                        hover:text-blue-400
                        sm:text-sm
                      "
                    >
                      {item.route}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div
            className="
              relative
              z-10
              mt-7
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-slate-800
              shadow-xl
              lg:mt-0
              lg:max-w-[520px]
              xl:max-w-[540px]
            "
          >
            <img
              src="/images/crm-platforms/crm7.png"
              alt="Know which system owns which field"
              className="block h-auto w-full object-cover"
            />
          </div>
        </div>

        {/* DEPLOYMENT STATEMENT */}
        <div
          className="
            mx-auto
            mt-6
            w-full
            max-w-[1240px]
            rounded-2xl
            border
            border-[#dfe5ee]
            bg-[#f7f8fa]
            px-5
            py-6
            sm:px-7
            sm:py-7
          "
        >
          <h3
            className="
              !m-0
              text-xl
              font-extrabold
              leading-tight
              tracking-tight
              text-[#091127]
              sm:text-2xl
            "
          >
            Sales context in. Billing truth intact.
          </h3>

          <p
            className="
              !m-0
              mt-2
              max-w-[760px]
              text-sm
              leading-6
              text-[#5d7192]
              sm:text-base
            "
          >
            Field authority, external IDs, versions, effective dates and
            conflict history remain traceable on every mapped value.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Link
              href="#crm-catalog"
              className="
                inline-flex
                min-h-11
                items-center
                justify-center
                rounded-full
                bg-[#1D60EB]
                px-5
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-[#1754d1]
              "
            >
              Browse CRM integrations
            </Link>

            <Link
              href="/integrations-directory"
              className="
                inline-flex
                min-h-11
                items-center
                justify-center
                rounded-full
                border
                border-[#dfe5ee]
                bg-white
                px-5
                text-sm
                font-semibold
                text-[#091127]
                transition
                hover:bg-[#f7f8fa]
              "
            >
              Integrations directory
            </Link>
          </div>

          <p
            className="
              !m-0
              !mt-5
              max-w-[850px]
              text-xs
              leading-6
              text-[#7890b2]
              sm:text-sm
            "
          >
            Available as standalone software, and as an integrated component
            of Zoiko One where that deployment is evaluated separately.{" "}
            <Link
              href="/pricing-and-plans"
              className="font-semibold text-[#091127] underline"
            >
              Compare deployment options
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}