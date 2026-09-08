'use client';

import Image from 'next/image';

const PREVIEW_MODULES = [
  {
    title: 'Leadership preview',
    image: '/images/company/leadership.png',
  },
  {
    title: 'Careers preview',
    image: '/images/company/careers.png',
  },
  {
    title: 'Newsroom preview',
    image: '/images/company/newsroom.png',
  },
];

export default function DynamicPreviewContract() {
  return (
    <section className="w-full">
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
            gap-5
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
                Dynamic preview contract
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <div className="flex w-full flex-col items-center pb-[0.69px]">
              <h2
                className="
                  !m-0
                  w-full
                  text-center
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
                Three preview modules, all
                <br />
                suppressed.
              </h2>
            </div>

            {/* DESCRIPTION */}
            <div className="w-full max-w-[687px] pt-[3.1px]">
              <p
                className="
                  !m-0
                  text-center
                  text-[15px]
                  font-normal
                  leading-7
                  text-[#5d7192]

                  sm:text-base
                "
              >
                Each renders only under a positive condition.{' '}
                <strong className="font-bold">
                  The page must remain visually
                  <br className="hidden sm:block" /> complete when all three
                  collapse
                </strong>{' '}
                — and here they all do.
              </p>
            </div>
          </div>

          {/* PREVIEW MODULES */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4
              pt-5

              md:grid-cols-3
            "
          >
            {PREVIEW_MODULES.map((module) => (
              <div
                key={module.title}
                className="
                  flex
                  min-w-0
                  flex-col
                  items-start
                  gap-2.5
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-[#fafbfc]
                  px-5
                  pb-9
                  pt-5
                "
              >
                {/* TITLE */}
                <div
                  className="
                    flex
                    min-h-6
                    w-full
                    items-center
                  "
                >
                  <h3
                    className="
                      !m-0
                      text-sm
                      font-bold
                      leading-6
                      text-[#091127]
                    "
                  >
                    {module.title}
                  </h3>
                </div>

                {/* PREVIEW IMAGE */}
                <div
                  className="
                    relative
                    h-44
                    w-full
                    overflow-hidden
                    rounded-[10px]
                    border
                    border-[#dfe5ee]
                    bg-white
                  "
                >
                  <Image
                    src={module.image}
                    alt={module.title}
                    fill
                    className="object-contain px-4 pb-7 pt-4"
                    sizes="
                      (max-width: 767px) 100vw,
                      (max-width: 1279px) 33vw,
                      342px
                    "
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}