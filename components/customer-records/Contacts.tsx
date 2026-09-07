import Image from "next/image";

const contacts = [
  {
    title: "Billing contact",
    description:
      "— billing questions and account-level billing communications where supported.",
  },
  {
    title: "Document delivery contact",
    description:
      "— invoice and credit-note delivery, with channel, verification and failure history.",
  },
  {
    title: "Finance or accounts-payable contact",
    description:
      "— an organization-owned role, never an individual score.",
  },
  {
    title: "Administrative contact",
    description:
      "— authorized setup and change coordination, with authority separate from delivery.",
  },
  {
    title: "Contract or procurement contact",
    description:
      "— only where a commercial process owns it; the label never implies signing authority.",
  },
  {
    title: "Tax contact",
    description:
      "— only where a configured process requires it, and never a tax adviser or authority verification.",
  },
  {
    title: "General contact",
    description:
      "— a fallback that must not silently replace a purpose-specific role.",
  },
];

export default function Contacts() {
  return (
    <section className="w-full bg-white">
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
            grid
            w-full
            max-w-[1240px]
            grid-cols-1
            items-center
            gap-10

            lg:grid-cols-2
            lg:gap-14
          "
        >
          {/* LEFT CONTENT */}
          <div className="flex w-full flex-col items-start">
            {/* EYEBROW */}
            <div className="flex items-center gap-3">
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
                Contacts &amp; responsibilities
              </span>
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                mt-4
                w-full
                max-w-[600px]
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
              One email field cannot carry six purposes.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                mt-4
                w-full
                max-w-[687px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              Billing questions, document delivery, finance coordination,
              administrative change, procurement and support are different
              jobs, often different people. Each contact role is purpose-bound
              and separately stated.
            </p>

            {/* CONTACT LIST */}
            <div className="mt-6 flex w-full flex-col">
              {contacts.map((contact) => (
                <div
                  key={contact.title}
                  className="
                    flex
                    w-full
                    flex-col
                    gap-1
                    py-2.5

                    sm:flex-row
                    sm:items-start
                    sm:gap-4
                  "
                >
                  {/* BULLET */}
                  <div className="mt-2 shrink-0">
                    <div className="h-1.5 w-1.5 rounded-sm bg-[#7890b2]" />
                  </div>

                  {/* TITLE */}
                  <div className="w-full shrink-0 sm:w-[190px]">
                    <p
                      className="
                        !m-0
                        text-sm
                        font-semibold
                        leading-6
                        text-[#091127]
                      "
                    >
                      {contact.title}
                    </p>
                  </div>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      !m-0
                      text-sm
                      font-normal
                      leading-6
                      text-[#5d7192]
                    "
                  >
                    {contact.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="
              w-full
              overflow-hidden
              rounded-3xl
              border
              border-[#dfe5ee]
              bg-[#f7f8fa]
              p-3
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

              sm:p-4
            "
          >
            <div className="relative w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/customer-records/contacts.png"
                alt="Contacts and responsibilities"
                width={548}
                height={554}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 548px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}