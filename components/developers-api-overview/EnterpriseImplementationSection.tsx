import Link from "next/link";
import Image from "next/image";

export default function EnterpriseImplementationSection() {
  return (
    <section id="enterprise" className="w-full bg-[#f7f8fa] font-[family-name:var(--font-inter)]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-center
          px-5
          py-14
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
            mx-auto
            flex
            w-full
            max-w-[1240px]
            flex-col
            items-center
            gap-8
            sm:gap-10
            md:gap-11
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          {/* LEFT CONTENT */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-5
              lg:w-1/2
              lg:max-w-[560px]
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center gap-3">
              <span className="h-px w-4 bg-[#7890b2] opacity-40" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.14em]
                  text-[#7890b2]
                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Enterprise Implementation
              </span>
            </div>

            {/* HEADING */}
            <h2
              className="!font-[family-name:var(--font-jakarta)] 
                !m-0
                w-full
                !text-[30px]
                !font-extrabold
                !leading-[1.2]
                !tracking-[-0.035em]
                !text-[#091127]
                sm:!text-[34px]
                md:!text-[38px]
                lg:!text-[32px]
              "
            >
              Need to fit Zoiko Billing into a larger{" "}
              <br className="hidden sm:inline" />
              finance architecture?
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]
                sm:text-base
              "
            >
              For multi-system billing, complex identity models, regulated data
              flows, migration programs or enterprise rollout planning, a
              technical implementation conversation is available — without
              gating documentation behind it.
            </p>

            {/* MAIN CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <Link
                href="/developers-build-an-integration"
                className="
                  inline-flex
                  min-h-11
                  items-center
                  justify-center
                  rounded-full
                  bg-[#1D70F5]
                  px-6
                  text-center
                  text-sm
                  font-semibold
                  !text-white
                  shadow-[0_8px_20px_rgba(31,111,235,0.26)]
                  transition-colors
                  duration-200
                  hover:bg-blue-600
                "
              >
                Build an Integration
              </Link>

              <Link
                href="/contact"
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
                  text-center
                  text-sm
                  font-semibold
                  text-slate-800
                  shadow-sm
                  transition-colors
                  duration-200
                  hover:bg-slate-50
                "
              >
                Talk to Sales
              </Link>
            </div>

            {/* MOBILE ONLY: QUICK REFERENCE LINKS & CONVERSATION COVERS */}
            <div className="flex w-full flex-col gap-5 pt-3 block lg:hidden">
              <div
                className="
                  flex
                  flex-wrap
                  items-center
                  gap-x-4
                  gap-y-2
                  text-xs
                  font-semibold
                  text-[#1D70F5]
                "
              >
                <Link
                  href="/developers-api-documentation"
                  className="hover:underline"
                >
                  API Documentation
                </Link>

                <Link
                  href="/developers-authentication"
                  className="hover:underline"
                >
                  Authentication
                </Link>

                <Link
                  href="/developers-webhooks"
                  className="hover:underline"
                >
                  Webhooks
                </Link>

                <Link
                  href="/developer-sandbox"
                  className="hover:underline"
                >
                  Developer Sandbox
                </Link>
              </div>

              <div
                className="
                  w-full
                  rounded-2xl
                  bg-[#EAF7F1]
                  p-5
                  text-left
                  sm:p-6
                "
              >
                <h3
                  className="!font-[family-name:var(--font-jakarta)] 
                    !m-0
                    text-base
                    font-bold
                    leading-6
                    text-[#091127]
                  "
                >
                  What the conversation covers
                </h3>

                <p
                  className="
                    !m-0
                    mt-2.5
                    text-xs
                    font-normal
                    leading-relaxed
                    text-[#5d7192]
                    sm:text-sm
                  "
                >
                  Architecture fit, object and permission modeling, environment
                  and rollout sequencing, and operational ownership.
                </p>

                <p
                  className="
                    !m-0
                    mt-3
                    text-xs
                    font-normal
                    leading-relaxed
                    text-[#5d7192]
                    sm:text-sm
                  "
                >
                  <strong className="font-semibold text-slate-800">
                    What it does not do:
                  </strong>{" "}
                  promise custom features, delivery timelines or capability that
                  the canonical documentation does not already support.
                </p>

                <p
                  className="
                    !m-0
                    mt-3
                    text-xs
                    font-normal
                    leading-relaxed
                    text-[#5d7192]
                    sm:text-sm
                  "
                >
                  No long lead form appears on this page. Where a form exists in
                  the global system, it requests only the minimum needed to route
                  a technical conversation.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE (DESKTOP ONLY) */}
          <div className="hidden lg:flex relative w-full lg:w-1/2 justify-center lg:justify-end">
            <div
              className="
                relative
                mx-auto
                w-full
                max-w-[540px]
                overflow-hidden
                rounded-2xl
                shadow-xl
                lg:ml-auto
              "
            >
              <Image
                src="/images/developers/dao6.png"
                alt="Need to fit Zoiko Billing into a larger finance architecture?"
                width={540}
                height={420}
                priority
                className="h-auto w-full object-cover rounded-2xl"
                sizes="(max-width: 1024px) 100vw, 540px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}