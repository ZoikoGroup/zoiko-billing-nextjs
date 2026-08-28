"use client";

import Image from "next/image";
import { useState } from "react";

export default function AccountAccess() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="w-full bg-gradient-to-b from-[#fafafa] to-[#f5f6f8]">
      <div
        className="
          mx-auto flex w-full max-w-[1440px] flex-col
          px-5 py-10
          sm:px-8 sm:py-12
          md:px-10 md:py-14
          lg:px-14 lg:py-11
          xl:px-20
        "
      >
        <div
          className="
            flex w-full flex-col items-stretch gap-8
            lg:flex-row lg:items-start
          "
        >
          {/* SIGN-IN CARD */}
          <div
            className="
              w-full overflow-hidden rounded-2xl border
              border-[#dfe5ee] bg-white
              shadow-[0_6px_28px_rgba(11,27,60,0.10)]
              lg:w-[384px] lg:shrink-0
            "
          >
            <div className="flex flex-col items-start gap-2 px-5 py-6 sm:px-6 sm:py-7">
              {/* TITLE */}
              <h2 className="!m-0 text-xl font-extrabold leading-7 text-[#091127]">
                Sign in to Zoiko Billing
              </h2>

              {/* DESCRIPTION */}
              <p className="!m-0 text-sm font-normal leading-5 text-[#5d7192]">
                Use your authorized account access method. Available options
                depend on your organization and account configuration.
              </p>

              {/* FORM */}
              <form
                className="flex w-full flex-col gap-3 pt-3 pb-2.5"
                onSubmit={(e) => e.preventDefault()}
              >
                {/* EMAIL */}
                <div className="flex w-full flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="
                      w-fit rounded-[5px] border border-[#e1e5eb]
                      bg-[#f5f6f8] px-2 py-0.5
                      text-xs font-bold leading-5 text-[#3b82f6]
                    "
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    autoComplete="email"
                    className="
                      min-h-11 w-full rounded-[10px]
                      border border-[#dfe5ee]
                      bg-white px-3 py-2.5
                      text-sm font-normal leading-6
                      text-[#091127]
                      outline-none
                      placeholder:text-[#7890b2]
                      focus:border-blue-600
                      focus:ring-1
                      focus:ring-blue-600
                    "
                  />
                </div>

                {/* PASSWORD */}
                <div className="flex w-full flex-col gap-1.5 py-1.5">
                  <label
                    htmlFor="password"
                    className="
                      w-fit rounded-[5px] border border-[#e1e5eb]
                      bg-[#f5f6f8] px-2 py-0.5
                      text-xs font-bold leading-5 text-[#3b82f6]
                    "
                  >
                    Password
                  </label>

                  <div className="relative w-full">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      autoComplete="current-password"
                      className="
                        min-h-11 w-full rounded-[10px]
                        border border-[#dfe5ee]
                        bg-white
                        px-3 py-2.5 pr-16
                        text-sm font-normal leading-6
                        text-[#091127]
                        outline-none
                        placeholder:text-[#7890b2]
                        focus:border-blue-600
                        focus:ring-1
                        focus:ring-blue-600
                      "
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="
                        absolute right-2 top-1/2
                        -translate-y-1/2
                        rounded-[5px]
                        border border-[#dfe5ee]
                        bg-white
                        px-2 py-0.5
                        text-xs font-semibold
                        leading-5 text-blue-600
                        hover:bg-[#f8faff]
                      "
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                {/* CONTINUE */}
                <button
                  type="submit"
                  className="
                    flex min-h-11 w-full items-center
                    justify-center rounded-[10px]
                    border border-blue-600
                    bg-blue-600 px-4 py-2.5
                    text-sm font-bold leading-6 text-white
                    transition hover:bg-blue-700
                  "
                >
                  Continue
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="
              relative min-h-[260px] w-full overflow-hidden
              rounded-2xl border border-[#dfe5ee]
              bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05)]
              sm:min-h-[360px]
              md:min-h-[440px]
              lg:min-h-0 lg:flex-1 lg:self-stretch
            "
          >
            <Image
              src="/images/account-access/account-access.png"
              alt="Zoiko Billing account access"
              fill
              className="object-cover"
              sizes="
                (max-width: 639px) 100vw,
                (max-width: 767px) 90vw,
                (max-width: 1023px) 85vw,
                (max-width: 1279px) 55vw,
                730px
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}