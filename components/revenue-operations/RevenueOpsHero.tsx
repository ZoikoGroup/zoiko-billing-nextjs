"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
});

export default function RevenueOpsHero() {
  return (
    <section
      className={`${plusJakarta.variable} w-full`}
    >
      <div
        className="
          relative
          mx-auto
          h-[530.84px]
          w-full
          max-w-[1440px]
          bg-gradient-to-b
          from-color-white-solid
          to-color-grey-98-6
        "
      >
        {/* Left Content */}
        <div
          className="
            absolute
            left-[60px]
            top-[22px]
            z-10
            flex
            w-[713px]
            max-w-[1320px]
            flex-col
            items-start
            justify-start
            gap-3.5
            px-7
            pt-2
          "
        >
         
       {/* Eyebrow */}
<div className="relative h-4 w-72">
  <div
    className="
      absolute
      left-0
      top-[8.30px]
      h-px
      w-6
      bg-blue-600
      opacity-70
    "
  />

  <div
    className="
      absolute
      left-[36px]
      top-[-1px]
      whitespace-nowrap
      font-['Plus_Jakarta_Sans']
      text-xs
      font-bold
      uppercase
      leading-4
      tracking-widest
      text-color-azure-60
    "
  >
    Solution for Revenue Operations
  </div>
</div>
          {/* Heading */}
          <div className="self-stretch pb-[0.75px] flex flex-col justify-start items-start">
  <h1
    className="
      !m-0
      !w-full
      !font-['Plus_Jakarta_Sans']
      !text-[48px]
      !font-extrabold
      !leading-[54.5px]
      !tracking-[-0.02em]
      !text-color-azure-11-2
    "
  >
    Keep billing operations moving across teams —
    <br />
    <span className="!text-blue-600">
      without losing control of the record.
    </span>
  </h1>
</div>

          {/* Description */}
          <div className="flex w-[686.38px] max-w-[686.38px] flex-col items-start">
            <p
              className="
                m-0
                font-['Plus_Jakarta_Sans']
                text-base
                font-normal
                leading-6
                text-color-azure-44-3
              "
            >
              Coordinate approved customer and commercial context, billing
              readiness, schedules,
              <br />
              documents, changes, payment and AR handoffs, exceptions and
              reporting in one
              <br />
              governed operating model — while keeping each system and team
              accountable for its own
              <br />
              authority.
            </p>
          </div>

          {/* Buttons */}
          <div
            className="
              flex
              w-full
              flex-wrap
              items-start
              justify-start
              gap-2.5
              pt-3
            "
          >
            <Link
              href="#"
              className="
                inline-flex
                h-11
                min-h-11
                items-center
                justify-center
                rounded-[999px]
                bg-blue-600
                px-5
                font-['Plus_Jakarta_Sans']
                text-sm
                font-semibold
                leading-6
                text-white
                shadow-[0px_6px_16px_0px_rgba(31,111,235,0.24)]
                outline
                outline-1
                outline-offset-[-1px]
              "
            >
              View Pricing &amp; Plans
            </Link>

            <Link
              href="#"
              className="
                inline-flex
                h-11
                min-h-11
                items-center
                justify-center
                rounded-[999px]
                bg-white
                px-5
                font-['Plus_Jakarta_Sans']
                text-sm
                font-semibold
                leading-6
                text-color-azure-11-2
                outline
                outline-1
                outline-offset-[-1px]
                outline-color-grey-92-4
              "
            >
              Create account
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <Image
          src="/images/revenue-operations/revenue-operations.png"
          alt="Revenue Operations"
          width={528}
          height={490}
          priority
          className="
            absolute
            left-[802px]
            top-[4px]
            z-10
            h-[490px]
            w-[528px]
            rounded-2xl
            object-cover
          "
        />
      </div>
    </section>
  );
}