import Image from "next/image";

export default function PolicyChangesVersioning() {
  return (
    <section className="w-full bg-[#091127]">
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
            gap-6

            sm:gap-8

            md:gap-10
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
              <span className="h-px w-4 shrink-0 bg-white/45" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.16em]
                  text-white/55

                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Policy changes, versioning & supersession
              </span>

              <span className="h-px w-4 shrink-0 bg-white/45" />
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
                !text-white

                sm:!text-[34px]

                md:!text-[36px]

                lg:!text-[40px]
              "
            >
              Seven states, and a superseded policy never disappears.
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
                text-white/72

                sm:text-base
              "
            >
              Conduct is judged against the policy in force when it occurred,
              which makes prior versions operationally necessary.
            </p>
          </div>

          {/* IMAGE */}
          <div
            className="
              w-full
              overflow-hidden
              rounded-xl
              border-2
              border-[#dfe5ee]
              bg-white
              px-4
              pt-5
              pb-7

              sm:px-5
              sm:pt-6
              sm:pb-8

              md:px-6
              md:pt-7
              md:pb-10
            "
          >
            <Image
              src="/images/acceptable-use-policy/image2.png"
              alt="Policy changes, versioning and supersession wireframe"
              width={1184}
              height={592}
              className="
                h-auto
                w-full
                rounded-lg
                object-contain
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}