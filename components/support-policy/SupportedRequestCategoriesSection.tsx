import Link from "next/link";

interface CategoryRow {
  category: string;
  policyTreatment: React.ReactNode;
  route: React.ReactNode;
}

const categoryRows: CategoryRow[] = [
  {
    category: "General product usage",
    policyTreatment:
      "Covered per approved scope; self-service expected first",
    route: (
      <>
        <Link
          href="/resource-center"
          className="font-semibold !text-blue-600 hover:underline"
        >
          Help Center
        </Link>{" "}
        ·{" "}
        <Link
          href="/documentation"
          className="font-semibold !text-blue-600 hover:underline"
        >
          Documentation
        </Link>
      </>
    ),
  },
  {
    category: "Account-specific behavior",
    policyTreatment:
      "Covered where behavior differs from documented behavior",
    route: (
      <Link
        href="/contact-support"
        className="font-semibold !text-blue-600 hover:underline"
      >
        Contact Support
      </Link>
    ),
  },
  {
    category: "Account & subscription billing",
    policyTreatment: (
      <>
        Coverage stated here;{" "}
        <span className="font-bold text-slate-900">
          evidence is not collected on this page
        </span>
      </>
    ),
    route: (
      <Link
        href="/billing-support"
        className="font-semibold !text-blue-600 hover:underline"
      >
        Billing Support
      </Link>
    ),
  },
  {
    category: "Integration diagnostics",
    policyTreatment:
      "Coverage boundaries defined here; technical detail stays elsewhere",
    route: (
      <Link
        href="/integration-support"
        className="font-semibold !text-blue-600 hover:underline"
      >
        Integration Support
      </Link>
    ),
  },
  {
    category: "Access & identity",
    policyTreatment: (
      <>
        Covered, with{" "}
        <span className="font-bold text-slate-900">
          no support bypass of identity controls
        </span>
      </>
    ),
    route: (
      <Link
        href="/account-access"
        className="font-semibold !text-blue-600 hover:underline"
      >
        Account Access
      </Link>
    ),
  },
  {
    category: "Implementation questions",
    policyTreatment:
      "Guidance scope, not a professional-services commitment",
    route: (
      <Link
        href="/implementation-guidance"
        className="font-semibold !text-blue-600 hover:underline"
      >
        Implementation Guidance
      </Link>
    ),
  },
  {
    category: "Security vulnerability",
    policyTreatment:
      "Not routed through ordinary support channels",
    route: (
      <Link
        href="/responsible-disclosure"
        className="font-medium !text-blue-600 hover:underline"
      >
        Responsible Disclosure
      </Link>
    ),
  },
];

export default function SupportedRequestCategoriesSection() {
  return (
    <section
      className="w-full border-t border-slate-100 bg-slate-50/60 py-14 sm:py-16 lg:py-24"
      id="request-categories"
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-start
          px-5

          sm:px-8

          md:px-10

          lg:px-14

          xl:px-20
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1240px]
            flex-col
            items-center
            text-center
          "
        >
          {/* EYEBROW */}
          <div className="flex items-center justify-center gap-3 text-[10px] font-bold uppercase leading-4 tracking-[0.16em] text-[#7890b2] sm:text-xs sm:tracking-[0.18em]">
            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            SUPPORTED REQUEST CATEGORIES
            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
          </div>

          {/* HEADING */}
          <h2
            className="
              !m-0
              mt-3.5
              w-full
              max-w-[662px]
              !text-[30px]
              !font-extrabold
              !leading-[1.2]
              !tracking-[-0.035em]
              !text-[#091127]

              sm:!text-[34px]

              md:!text-[36px]

              lg:!text-[40px]
            "
          >
            Seven categories, each with a route
            <br className="hidden sm:block" /> rather than a queue.
          </h2>

          {/* SUBTITLE */}
          <p
            className="
              !m-0
              mt-3
              w-full
              max-w-[687px]
              text-[15px]
              font-normal
              leading-7
              text-[#5d7192]

              sm:text-base
            "
          >
            Policy describes whether a category is covered. It does not
            perform intake — that belongs to the destination.
          </p>

          {/* TABLE */}
          <div
            className="
              mt-8
              w-full
              max-w-[1240px]
              overflow-hidden
              rounded-2xl
              border
              border-slate-200/90
              bg-white
              text-left
              shadow-sm

              sm:mt-10

              lg:mt-14
            "
          >
            <div className="w-full overflow-x-auto">
              <table className="w-full min-w-[680px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-slate-200/80 bg-slate-50/80">
                    <th
                      scope="col"
                      className="
                        w-1/4
                        px-5
                        py-3.5
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-slate-500

                        sm:px-8
                        sm:text-[11px]
                      "
                    >
                      CATEGORY
                    </th>

                    <th
                      scope="col"
                      className="
                        w-1/2
                        px-5
                        py-3.5
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-slate-500

                        sm:px-8
                        sm:text-[11px]
                      "
                    >
                      POLICY TREATMENT
                    </th>

                    <th
                      scope="col"
                      className="
                        w-1/4
                        px-5
                        py-3.5
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-slate-500

                        sm:px-8
                        sm:text-[11px]
                      "
                    >
                      ROUTE
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {categoryRows.map((row) => (
                    <tr
                      key={row.category}
                      className="transition hover:bg-slate-50/40"
                    >
                      <td
                        className="
                          px-5
                          py-4
                          align-top
                          text-[13px]
                          font-bold
                          leading-6
                          text-slate-900

                          sm:px-8
                          sm:text-sm
                        "
                      >
                        {row.category}
                      </td>

                      <td
                        className="
                          px-5
                          py-4
                          align-top
                          text-[13px]
                          font-normal
                          leading-6
                          text-slate-600

                          sm:px-8
                          sm:text-sm
                        "
                      >
                        {row.policyTreatment}
                      </td>

                      <td
                        className="
                          px-5
                          py-4
                          align-top
                          text-[13px]
                          font-normal
                          leading-6
                          text-slate-600

                          sm:px-8
                          sm:text-sm
                        "
                      >
                        {row.route}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}