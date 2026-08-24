import Image from "next/image";

const items = [
  {
    title: "Shared sign-in",
    description:
      "may identify the same person across products, but grants no cross-product permission.",
  },
  {
    title: "Federated identity",
    description:
      "an authentication input only; each product evaluates authorization itself.",
  },
  {
    title: "Role or group mapping",
    description:
      "may map context, with no direct permission union.",
  },
  {
    title: "Billing role",
    description:
      "controls Billing actions and entities, and cannot be imported blindly.",
  },
  {
    title: "Service principal",
    description:
      "a product-to-product identity with its own owner, scope and lifecycle; never a human super-admin equivalent.",
  },
  {
    title: "Approval",
    description:
      "the receiving product applies its own current policy; an upstream approval may not satisfy a downstream one.",
  },
];

export default function IdentityPermissions() {
  return (
    <section className="w-full bg-[#f7f8fa]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          px-5
          py-14

          sm:px-8
          sm:py-16

          md:px-10
          md:py-20

          lg:px-14
          lg:py-20

          xl:px-20
        "
      >
        <div
          className="
            flex
            w-full
            items-center
            gap-10

            lg:gap-14
          "
        >
          {/* LEFT CONTENT */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-3.5

              lg:w-1/2
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center gap-3">
              <span className="h-px w-6 shrink-0 bg-blue-600 opacity-75" />

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
                Identity, roles, permissions & no permission union
              </span>
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                max-w-[650px]
                text-[30px]
                font-extrabold
                leading-[1.15]
                tracking-[-0.03em]
                text-[#091127]

                sm:text-[34px]

                md:text-[36px]
              "
            >
              The same person can have different rights in each product.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                pt-1
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              A principal can be known across the ecosystem and still hold
              different authority everywhere. Billing re-checks current
              Billing permissions before any sensitive action.
            </p>

            {/* LIST */}
            <div className="mt-1.5 flex w-full flex-col">
              {items.map((item) => (
                <div
                  key={item.title}
                  className="
                    flex
                    w-full
                    items-start
                    gap-3
                    py-2
                  "
                >
                  {/* BULLET */}
                  <span
                    className="
                      mt-2
                      h-1.5
                      w-1.5
                      shrink-0
                      rounded-[2px]
                      bg-blue-600
                    "
                  />

                  {/* CONTENT */}
                  <p
                    className="
                      !m-0
                      text-sm
                      leading-6
                      text-[#5d7192]
                    "
                  >
                    <span className="font-bold text-[#5d7192]">
                      {item.title}
                    </span>{" "}
                    — {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="
              hidden
              w-full
              lg:block
              lg:w-1/2
            "
          >
            <div
              className="
                relative
                mx-auto
                aspect-[589/574]
                w-full
                max-w-[589px]
                overflow-hidden
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
              "
            >
              <Image
                src="/images/ecosystem/identity-permissions.png"
                alt="Identity, roles and permissions"
                fill
                className="object-cover"
                sizes="
                  (max-width: 1023px) 100vw,
                  (max-width: 1279px) 45vw,
                  589px
                "
              />
            </div>
          </div>

          {/* MOBILE IMAGE */}
          <div className="mt-2 block w-full lg:hidden">
            <div
              className="
                relative
                aspect-[589/574]
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
              "
            >
              <Image
                src="/images/ecosystem/identity-permissions.png"
                alt="Identity, roles and permissions"
                fill
                className="object-cover"
                sizes="
                  (max-width: 639px) 100vw,
                  90vw
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}