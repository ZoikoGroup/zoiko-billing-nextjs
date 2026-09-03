import Image from "next/image";
import Link from "next/link";

export default function SaasIntegrations() {
  return (
    <section className="w-full !bg-white">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-6 px-4 py-10 sm:px-6 sm:py-14 lg:gap-8 lg:px-7 lg:py-16">
        {/* ================= HEADER ================= */}
        <div className="mx-auto flex w-full max-w-[900px] flex-col items-center gap-4 text-center">
          {/* Eyebrow */}
          <div className="flex w-full items-center justify-center gap-3">
            <span className="h-px w-4 shrink-0 bg-blue-600/40" />

            <span
              className="
                text-center
                text-[10px]
                font-bold
                uppercase
                leading-4
                tracking-[0.12em]
                !text-blue-600
                sm:text-[11px]
                sm:tracking-[0.16em]
                lg:text-xs
                lg:tracking-widest
              "
            >
              Reporting, integrations, developers &amp; growth
            </span>

            <span className="h-px w-4 shrink-0 bg-blue-600/40" />
          </div>

          {/* Heading */}
          <h2
            className="
              mx-auto
              w-full
              max-w-[900px]
              text-center
              !text-[30px]
              !font-extrabold
              !leading-[1.15]
              !tracking-[-0.02em]
              !text-gray-900
              sm:!text-[38px]
              sm:!leading-[1.14]
              lg:!text-[48px]
              lg:!leading-[1.12]
            "
          >
            
              Operational evidence, and approved
              technical handoffs.
          
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              w-full
              max-w-[687px]
              pt-1
              text-center
              text-sm
              font-normal
              leading-6
              !text-gray-500
              sm:pt-2
              sm:text-base
              sm:leading-7
            "
          >
            Every figure names its definition, source and as-of time. Every
            route names its direction and freshness.
          </p>
        </div>

        {/* ================= MAIN CARD ================= */}
        <div
          className="
            relative
            flex
            w-full
            flex-col
            overflow-hidden
            rounded-2xl
            !bg-slate-900
            px-5
            py-8
            sm:rounded-3xl
            sm:px-8
            sm:py-10
            lg:min-h-[526px]
            lg:flex-row
            lg:px-[60px]
            lg:py-[70px]
          "
        >
          {/* Background glow */}
          <div
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              h-64
              w-64
              rounded-full
              bg-blue-500/20
              blur-3xl
              sm:h-80
              sm:w-80
            "
          />

          {/* ================= CONTENT ================= */}
          <div
            className="
              relative
              z-10
              flex
              w-full
              flex-col
              items-start
              justify-center
              gap-4
              lg:max-w-[540px]
              lg:gap-3.5
            "
          >
            {/* Card Heading */}
            <h3
              className="
                w-full
                max-w-[520px]
                !text-2xl
                !font-extrabold
                !leading-[1.2]
                !text-white
                sm:!text-3xl
                sm:!leading-tight
                lg:!text-4xl
                lg:!leading-10
              "
            >
              <span className="block">
                Connect the product,
              </span>

              <span className="block">
                keep the authority explicit.
              </span>
            </h3>

            {/* Description */}
            <p
              className="
                w-full
                max-w-[511px]
                text-sm
                font-normal
                leading-6
                !text-white/70
                sm:text-base
                sm:leading-7
              "
            >
              Approved APIs, webhooks and connectors carry service, change and
              quantity context into Billing. Each route stays versioned,
              directional and registry-backed — and reports its own freshness
              rather than a whole-job green.
            </p>

            {/* ================= BUTTONS ================= */}
            <div
              className="
                flex
                w-full
                flex-col
                gap-3
                pt-2
                sm:w-auto
                sm:flex-row
                sm:flex-wrap
                sm:pt-3
              "
            >
              {/* EXPLORE INTEGRATIONS */}
              <Link
                href="/integration-availability"
                className="
                  inline-flex
                  min-h-11
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  !border-0
                  !bg-white
                  px-6
                  text-sm
                  font-semibold
                  leading-6
                  !text-slate-900
                  opacity-100
                  transition
                  hover:!bg-gray-100
                  hover:!text-slate-900
                  sm:w-auto
                "
              >
                Explore Integrations
              </Link>

              {/* DEVELOPER DOCUMENTATION */}
              <Link
                href="/documentation"
                className="
                  inline-flex
                  min-h-11
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  !border
                  !border-white/30
                  !bg-transparent
                  px-6
                  text-sm
                  font-semibold
                  leading-6
                  !text-white
                  opacity-100
                  transition
                  hover:!bg-white/10
                  hover:!text-white
                  sm:w-auto
                "
              >
                Developer documentation
              </Link>
            </div>

            {/* Note */}
            <p
              className="
                w-full
                max-w-[400px]
                pt-1
                text-xs
                font-normal
                leading-5
                !text-white/60
                sm:pt-2
              "
            >
              No universal real-time API or guaranteed event delivery is
              claimed. Connector availability is controlled by the Integration
              Registry.
            </p>
          </div>

          {/* ================= IMAGE ================= */}
          <div
            className="
              relative
              z-10
              mt-8
              w-full
              sm:mt-10
              lg:absolute
              lg:right-[60px]
              lg:top-[25px]
              lg:mt-0
              lg:w-[478px]
            "
          >
            <div
              className="
                relative
                aspect-[4/3]
                w-full
                overflow-hidden
                rounded-xl
                border
                border-white/10
                sm:aspect-square
                sm:rounded-2xl
                lg:aspect-square
              "
            >
              <Image
                src="/images/saas-and-digital-services/saas-integrations.png"
                alt="SaaS integrations"
                fill
                priority
                sizes="
                  (max-width: 639px) 100vw,
                  (max-width: 1023px) 90vw,
                  478px
                "
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}