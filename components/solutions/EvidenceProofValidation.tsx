import Link from "next/link";
import type { ReactNode } from "react";

type EvidenceRule = {
  title: string;
  description: ReactNode;
};

export default function EvidenceProofValidation() {
  const rules: EvidenceRule[] = [
    {
      title: "Permission",
      description: (
        <>
          Current consent from the named party.{" "}
          <strong className="font-bold">
            Consent expires and is re-confirmed
          </strong>{" "}
          — it is not granted once.
        </>
      ),
    },
    {
      title: "Attribution",
      description: (
        <>
          Who said it, in what role, at what time.{" "}
          <strong className="font-bold">
            An anonymized quote is not proof
          </strong>
          , it is a sentence.
        </>
      ),
    },
    {
      title: "Scope",
      description: (
        <>
          What the claim covers and what it does not. A result from one
          configuration is not a general outcome.
        </>
      ),
    },
    {
      title: "Review status",
      description: (
        <>
          When the evidence was last validated.{" "}
          <strong className="font-bold">
            Stale proof is withdrawn, not left standing.
          </strong>
        </>
      ),
    },
    {
      title: "No proof rendered here",
      description: (
        <>
          No customer name, logo, quote, metric or outcome appears on this
          page —{" "}
          <Link
            href="/customer-stories"
            className="
              !font-semibold
              !text-[#2563eb]
              hover:!text-[#2563eb]
              hover:underline
            "
          >
            Customer Stories
          </Link>{" "}
          owns them with these conditions attached.
        </>
      ),
    },
    {
      title: "No borrowed metrics",
      description: (
        <>
          <strong className="font-bold">
            No industry benchmark, analyst figure or category statistic
          </strong>{" "}
          is presented as evidence about Zoiko Billing.
        </>
      ),
    },
  ];

  return (
    <section className="w-full bg-[#f7f8fa]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-start
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
            gap-5

            sm:gap-7

            md:gap-8
          "
        >
          {/* SECTION INTRO */}
          <div
            className="
              flex
              w-full
              max-w-[662px]
              flex-col
              items-center
              gap-3
              pt-2
              text-center
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

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
                Evidence, proof &amp; validation
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
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
              Proof requires permission, attribution, scope and review.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              Four conditions, and all four must hold. A solutions hub is where
              unattributed proof tends to accumulate.
            </p>
          </div>

          {/* EVIDENCE RULES */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4
              pt-3

              sm:grid-cols-2

              lg:grid-cols-3
            "
          >
            {rules.map((rule) => (
              <article
                key={rule.title}
                className="
                  flex
                  min-h-[144px]
                  flex-col
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  px-5
                  py-5
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                "
              >
                {/* TITLE */}
                <h3
                  className="
                    !m-0
                    text-sm
                    font-bold
                    leading-6
                    text-[#091127]
                  "
                >
                  {rule.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    !m-0
                    mt-1.5
                    text-xs
                    font-normal
                    leading-5
                    text-[#5d7192]
                  "
                >
                  {rule.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}