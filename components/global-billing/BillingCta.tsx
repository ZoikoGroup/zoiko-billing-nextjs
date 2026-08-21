import Image from "next/image";
import Link from "next/link";

export default function BillingCta() {
  return (
    <section className="w-full px-5 py-10 sm:px-8 lg:px-12 xl:px-24">
      <div
        className="
          relative mx-auto
          w-full max-w-[1184px]
          overflow-hidden
          rounded-[32px]
          bg-[#0B1C40]
          px-6 py-8
          sm:px-8 sm:py-10
          lg:h-[458.95px]
          lg:px-14 lg:py-14
        "
      >
        {/* Background glow */}
        <div
          className="
            pointer-events-none
            absolute
            -right-[110px]
            -top-[110px]
            h-[380px]
            w-[380px]
            rounded-full
          "
          style={{
            background:
              "radial-gradient(circle, rgba(55,125,255,0.55) 0%, rgba(55,125,255,0) 70%)",
          }}
        />

        {/* LEFT CONTENT */}
        <div
          className="
            relative z-10
            flex flex-col
            items-start
            gap-[14px]
            lg:w-[510px]
          "
        >
          {/* Figma heading */}
          <div
            style={{
              width: "510px",
              maxWidth: "100%",
              paddingBottom: "0.69px",
            }}
          >
            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "36px",
                lineHeight: "40px",
                fontWeight: 800,
                letterSpacing: "-0.5px",
                color: "#FFFFFF",
                margin: 0,
                padding: 0,
              }}
            >
              Billing clarity from
              <br />
              invoice to payment.
            </div>
          </div>

          {/* Description */}
          <div
            style={{
              width: "511px",
              maxWidth: "100%",
            }}
          >
            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 400,
                color: "rgba(255,255,255,0.72)",
                margin: 0,
                padding: 0,
              }}
            >
              Operate across approved currencies, entities, document locales,
              controls, jurisdictions and languages — with visible scope and
              evidence at every step.
            </div>
          </div>

          {/* Buttons */}
          <div
            className="
              flex
              flex-wrap
              items-start
              gap-3
              pt-3
            "
          >
            <Link
              href="/global-billing"
              style={{
                height: "44px",
                minHeight: "44px",
                paddingLeft: "24px",
                paddingRight: "24px",
                borderRadius: "999px",
                background: "#FFFFFF",
                color: "#0B1C40",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                whiteSpace: "nowrap",
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                lineHeight: "24px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Check availability
            </Link>

            <Link
              href="/pricing"
              style={{
                height: "44px",
                minHeight: "44px",
                paddingLeft: "24px",
                paddingRight: "24px",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.34)",
                background: "transparent",
                color: "#FFFFFF",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                whiteSpace: "nowrap",
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                lineHeight: "24px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              View pricing
            </Link>

            <Link
              href="/book-a-demo"
              style={{
                height: "44px",
                minHeight: "44px",
                paddingLeft: "24px",
                paddingRight: "24px",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.34)",
                background: "transparent",
                color: "#FFFFFF",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                whiteSpace: "nowrap",
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                lineHeight: "24px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Book a demo
            </Link>
          </div>
        </div>

        {/* FIGMA IMAGE */}
        <div
          className="
            relative z-10
            mt-6
            w-full
            overflow-hidden
            rounded-2xl
            lg:absolute
            lg:right-14
            lg:top-14
            lg:mt-0
            lg:h-[388px]
            lg:w-[478px]
          "
          style={{
            border: "1px solid rgba(255,255,255,0.14)",
          }}
        >
          <Image
            src="/images/global-billing/billing-clarity.png"
            alt="Billing clarity from invoice to payment"
            width={478}
            height={388}
            priority
            className="block h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}