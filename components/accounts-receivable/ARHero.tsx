"use client";

import Image from "next/image";
import Link from "next/link";

export default function ARHero() {
  return (
    <section className="w-full bg-white py-16 dark:bg-slate-950 sm:py-20 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1440px] justify-center">
        <div className="w-full max-w-[1220px] px-5 sm:px-8 lg:px-12">
          <div
            className="
              grid
              w-full
              grid-cols-1
              items-center
              gap-10
              md:grid-cols-[minmax(0,1fr)_450px]
              md:gap-8
              lg:grid-cols-[minmax(0,1fr)_500px]
              lg:gap-10
            "
          >
            {/* =========================
                LEFT CONTENT
            ========================== */}
            <div className="flex w-full max-w-[540px] flex-col items-start pt-2.5">

              {/* Eyebrow */}
              <div className="mb-4 flex h-4 items-center gap-2.5">
                <span
                  className="
                    h-[2px]
                    w-5
                    rounded-full
                    bg-gradient-to-r
                    from-cyan-400
                    to-blue-600
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-medium
                    uppercase
                    leading-4
                    tracking-[0.12em]
                    text-blue-600
                    dark:text-blue-400
                  "
                >
                  Accounts Receivable
                </span>
              </div>

              {/* Heading */}
              <h1
                className="
                  text-[34px]
                  font-medium
                  leading-[1.08]
                  tracking-[-0.04em]
                  text-slate-950
                  sm:text-[38px]
                  md:text-[40px]
                  lg:text-[40px]
                  dark:text-white
                "
              >
                Know what is due,
                who owns it, and
                <span className="text-blue-600 dark:text-blue-400">
                  what should
                  happen next.
                </span>
              </h1>

              {/* Description */}
              <p
                className="
                  mt-5
                  max-w-[530px]
                  text-[13px]
                  font-normal
                  leading-7
                  text-slate-500
                  sm:text-[14px]
                  dark:text-slate-300
                "
              >
                Zoiko Billing connects issued documents, credits, due dates,
                ownership, reminders, disputes, promises, exceptions and
                current payment status so teams can act with current context
                and accountable evidence.
              </p>

              {/* Buttons */}
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/start"
                  className="
                    inline-flex
                    min-h-11
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-blue-600
                    bg-blue-600
                    px-5
                    py-2
                    text-sm
                    font-normal
                    leading-6
                    text-white
                    transition
                    hover:bg-blue-700
                    dark:border-blue-500
                    dark:bg-blue-600
                    dark:hover:bg-blue-500
                  "
                >
                  Create Account
                </Link>

                <Link
                  href="/book-a-demo"
                  className="
                    inline-flex
                    min-h-11
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-slate-200
                    bg-white
                    px-5
                    py-2
                    text-sm
                    font-normal
                    leading-6
                    text-slate-900
                    transition
                    hover:bg-slate-50
                    dark:border-slate-700
                    dark:bg-slate-950
                    dark:text-white
                    dark:hover:bg-slate-900
                  "
                >
                  Book a Demo
                </Link>
              </div>
            </div>

            {/* =========================
                LARGE IMAGE
            ========================== */}
            <div
              className="
                mx-auto
                flex
                w-full
                max-w-[500px]
                items-center
                justify-center
                md:mx-0
                md:justify-self-end
                lg:max-w-[500px]
              "
            >
              <Image
                src="/accounts-receivable/image.png"
                alt="Zoiko Billing Accounts Receivable"
                width={1000}
                height={1000}
                priority
                className="
                  block
                  h-auto
                  w-full
                  object-contain
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}