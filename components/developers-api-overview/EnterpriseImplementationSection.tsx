import Link from "next/link";
import Image from "next/image";

export default function EnterpriseImplementationSection() {
  return (
    <section id="enterprise" className="w-full bg-[#f7f8fa]">
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
              lg:max-w-[580px]
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
              className="
                !m-0
                w-full
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
              Need to fit Zoiko Billing into a larger finance architecture?
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
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href="/integrations"
                className="
                  inline-flex
                  min-h-11
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-[#dfe5ee]
                  bg-[#091127]
                  px-5
                  text-center
                  text-xs
                  font-semibold
                  !text-white
                  transition-colors
                  duration-200
                  hover:bg-[#17213a]
                  sm:px-6
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
                  rounded-lg
                  border
                  border-[#dfe5ee]
                  bg-white
                  px-5
                  text-center
                  text-xs
                  font-semibold
                  text-[#5d7192]
                  transition-colors
                  duration-200
                  hover:bg-[#f7f8fa]
                  hover:text-[#091127]
                  sm:px-6
                "
              >
                Talk to Sales
              </Link>
            </div>

            {/* QUICK REFERENCE LINKS */}
            <div
              className="
                flex
                flex-wrap
                items-center
                gap-x-3
                gap-y-1.5
                text-xs
                font-semibold
                text-[#5d7192]
              "
            >
              <Link
                href="/developers-api-documentation"
                className="transition-colors hover:text-[#091127]"
              >
                API Documentation
              </Link>

              <span className="text-[#dfe5ee]">·</span>

              <Link
                href="#"
                className="transition-colors hover:text-[#091127]"
              >
                Authentication
              </Link>

              <span className="text-[#dfe5ee]">·</span>

              <Link
                href="developers-webhooks"
                className="transition-colors hover:text-[#091127]"
              >
                Webhooks
              </Link>

              <span className="text-[#dfe5ee]">·</span>

              <Link
                href="/developer-sandbox"
                className="transition-colors hover:text-[#091127]"
              >
                Developer Sandbox
              </Link>
            </div>

            {/* WHAT THE CONVERSATION COVERS */}
            <div
              className="
                w-full
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                p-5
                text-left
                shadow-[0_6px_20px_rgba(15,23,42,0.04)]
                sm:p-6
              "
            >
              <h3
                className="
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
                  mt-2
                  text-sm
                  font-normal
                  leading-6
                  text-[#5d7192]
                "
              >
                Architecture fit, object and permission modeling, environment
                and rollout sequencing, and operational ownership.
              </p>

              <p
                className="
                  !m-0
                  mt-3
                  text-sm
                  font-normal
                  leading-6
                  text-[#5d7192]
                "
              >
                <span className="font-bold text-[#091127]">
                  What it does not do:
                </span>{" "}
                promise custom features, delivery timelines or capability that
                the canonical documentation does not already support.
              </p>

              <p
                className="
                  !m-0
                  mt-3
                  text-sm
                  font-normal
                  leading-6
                  text-[#5d7192]
                "
              >
                No long lead form appears on this page. Where a form exists in
                the global system, it requests only the minimum needed to route
                a technical conversation.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full lg:w-1/2">
            <div
              className="
                relative
                mx-auto
                w-full
                max-w-[540px]
                overflow-hidden
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                shadow-[0_6px_20px_rgba(15,23,42,0.04)]
                lg:ml-auto
              "
            >
              <Image
                src="/images/developers/dao6.png"
                alt="Need to fit Zoiko Billing into a larger finance architecture?"
                width={540}
                height={420}
                priority
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 540px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}