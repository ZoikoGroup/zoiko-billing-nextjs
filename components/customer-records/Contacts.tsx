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
    <section className="w-full bg-white px-4 py-12 sm:px-6 lg:px-14 lg:py-20">
      <div className="mx-auto w-full max-w-[1240px] px-0 sm:px-4 lg:px-7">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left Content */}
          <div className="flex w-full flex-col items-start">
            {/* Eyebrow */}
            <div className="flex h-4 items-center gap-2">
              <div className="h-px w-6 bg-blue-600 opacity-75" />

              <span className="text-xs font-bold uppercase leading-4 tracking-widest text-blue-600">
                Contacts &amp; responsibilities
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-4 text-3xl font-extrabold leading-9 tracking-tight text-slate-900 sm:text-4xl">
              One email field cannot carry six
              <br className="hidden sm:block" />
              purposes.
            </h2>

            {/* Description */}
            <p className="mt-4 w-full max-w-[687px] text-sm font-normal leading-6 text-slate-600 sm:text-base sm:leading-7">
              Billing questions, document delivery, finance coordination,
              administrative change, procurement and support are different
              jobs, often different people. Each contact role is purpose-bound
              and separately stated.
            </p>

            {/* Contact List */}
            <div className="mt-6 flex w-full flex-col">
              {contacts.map((contact) => (
                <div
                  key={contact.title}
                  className="flex w-full flex-col gap-1 py-2.5 sm:flex-row sm:items-start sm:gap-4"
                >
                  {/* Bullet */}
                  <div className="mt-2 shrink-0">
                    <div className="h-1.5 w-1.5 rounded-sm bg-blue-600" />
                  </div>

                  {/* Title */}
                  <div className="w-full shrink-0 sm:w-[190px]">
                    <p className="text-sm font-bold leading-6 text-slate-600">
                      {contact.title}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm font-normal leading-6 text-slate-600">
                    {contact.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full rounded-3xl bg-gray-100 p-3 sm:p-4">
            <div className="relative w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/customer-records/contacts.png"
                alt="Contacts and responsibilities"
                width={548}
                height={554}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}