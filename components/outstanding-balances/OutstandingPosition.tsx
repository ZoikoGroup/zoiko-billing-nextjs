"use client";

import React from "react";

const summaryCards = [
  {
    label: "Total outstanding",
    value: "£2,486,310",
    detail: (
      <>
        Across <strong>412</strong> accounts
      </>
    ),
    accent: "bg-blue-600",
  },
  {
    label: "Overdue",
    value: "£934,720",
    detail: (
      <>
        <strong>37.6%</strong> of the balance
      </>
    ),
    accent: "bg-orange-500",
  },
  {
    label: "90+ days",
    value: "£186,940",
    detail: (
      <>
        <strong>24</strong> accounts at risk
      </>
    ),
    accent: "bg-red-500",
  },
  {
    label: "In dispute",
    value: "£141,205",
    detail: (
      <>
        <strong>11</strong> open cases
      </>
    ),
    accent: "bg-blue-500",
  },
  {
    label: "Collected this month",
    value: "£1,072,480",
    detail: (
      <>
        Avg. days to pay <strong>34</strong>
      </>
    ),
    accent: "bg-emerald-500",
  },
];

const agingData = [
  {
    label: "Current",
    value: "£1,551,590",
    detail: "62.4% · 288 accounts",
    color: "bg-emerald-500",
    width: "62.4%",
  },
  {
    label: "1–30 days",
    value: "£400,455",
    detail: "16.1% · 61 accounts",
    color: "bg-slate-400",
    width: "16.1%",
  },
  {
    label: "31–60 days",
    value: "£208,850",
    detail: "8.4% · 24 accounts",
    color: "bg-orange-500",
    width: "8.4%",
  },
  {
    label: "61–90 days",
    value: "£138,475",
    detail: "5.6% · 15 accounts",
    color: "bg-orange-600",
    width: "5.6%",
  },
  {
    label: "90+ days",
    value: "£186,940",
    detail: "7.5% · 24 accounts",
    color: "bg-red-500",
    width: "7.5%",
  },
];

export default function OutstandingPosition() {
  return (
    <section
      className="
        w-full
        bg-white
        py-16
        sm:py-20
        lg:py-24
        dark:bg-slate-950
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1240px]
          px-5
          sm:px-8
          lg:px-7
        "
      >
        {/* Section Header */}
        <div className="flex flex-col items-start gap-3.5">
          {/* Eyebrow */}
          <div className="relative flex h-4 items-center">
            <div
              className="
                h-px
                w-5
                bg-slate-400
                opacity-60
                dark:bg-slate-500
              "
            />

            <span
              className="
                ml-3
                whitespace-nowrap
                text-xs
                font-semibold
                uppercase
                tracking-[0.16em]
                text-slate-500
                dark:text-slate-400
              "
            >
              What is outstanding
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              max-w-[900px]
              pt-px
              text-3xl
              font-bold
              leading-tight
              tracking-[-0.02em]
              text-slate-950
              sm:text-4xl
              dark:text-white
            "
          >
            The position, before you open a single account.
          </h2>

          {/* Description */}
          <p
            className="
              max-w-[606px]
              text-sm
              font-normal
              leading-6
              text-slate-500
              sm:text-base
              dark:text-slate-400
            "
          >
            Figures update as payments post. Nothing here is estimated or
            rolled forward.
          </p>
        </div>

        {/* Summary Cards */}
        <div
          className="
            mt-7
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-5
          "
        >
          {summaryCards.map((card) => (
            <div
              key={card.label}
              className="
                relative
                min-w-0
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05)]
                dark:border-slate-800
                dark:bg-slate-900
                dark:shadow-none
              "
            >
              {/* Accent */}
              <div
                className={`
                  absolute
                  left-0
                  top-0
                  h-full
                  w-[3px]
                  ${card.accent}
                `}
              />

              <div className="flex flex-col gap-1">
                {/* Label */}
                <div
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    leading-5
                    tracking-wide
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  {card.label}
                </div>

                {/* Value */}
                <div className="pt-1 text-right">
                  <div
                    className="
                      text-xl
                      font-extrabold
                      leading-9
                      tracking-tight
                      text-slate-950
                      sm:text-2xl
                      dark:text-white
                    "
                  >
                    {card.value}
                  </div>
                </div>

                {/* Detail */}
                <div
                  className="
                    text-xs
                    leading-5
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  {card.detail}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Aging Distribution */}
        <div
          className="
            mt-6
            overflow-hidden
            rounded-2xl
            border
            border-slate-200
            bg-white
            shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05)]
            dark:border-slate-800
            dark:bg-slate-900
            dark:shadow-none
          "
        >
          {/* Aging Header */}
          <div
            className="
              flex
              flex-col
              gap-3
              border-b
              border-slate-200
              px-5
              py-4
              sm:flex-row
              sm:items-center
              sm:justify-between
              dark:border-slate-800
            "
          >
            <div>
              <h3
                className="
                  text-base
                  font-bold
                  leading-6
                  text-slate-950
                  dark:text-white
                "
              >
                Aging distribution
              </h3>

              <p
                className="
                  text-xs
                  leading-5
                  text-slate-500
                  dark:text-slate-400
                "
              >
                Select a band to filter the table below.
              </p>
            </div>

            <p
              className="
                text-xs
                leading-5
                text-slate-500
                sm:text-right
                dark:text-slate-400
              "
            >
              Buckets counted from invoice due date, not issue date.
            </p>
          </div>

          {/* Aging Bar */}
          <div className="px-5 pt-8 sm:px-6">
            <div
              className="
                flex
                h-3.5
                w-full
                overflow-hidden
                rounded-full
                bg-slate-100
                dark:bg-slate-800
              "
            >
              {agingData.map((item) => (
                <div
                  key={item.label}
                  className={`${item.color} h-full`}
                  style={{ width: item.width }}
                />
              ))}
            </div>
          </div>

          {/* Aging Details */}
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-5
            "
          >
            {agingData.map((item, index) => (
              <div
                key={item.label}
                className={`
                  px-5
                  py-5
                  lg:px-4
                  ${
                    index > 0
                      ? "border-t border-slate-200 lg:border-l lg:border-t-0 dark:border-slate-800"
                      : ""
                  }
                `}
              >
                {/* Label */}
                <div className="flex items-center gap-2">
                  <span
                    className={`
                      h-2
                      w-2
                      shrink-0
                      rounded-[3px]
                      ${item.color}
                    `}
                  />

                  <span
                    className="
                      text-xs
                      font-semibold
                      leading-5
                      tracking-tight
                      text-slate-600
                      dark:text-slate-300
                    "
                  >
                    {item.label}
                  </span>
                </div>

                {/* Value */}
                <div className="pt-1.5">
                  <div
                    className="
                      text-lg
                      font-bold
                      leading-8
                      tracking-tight
                      text-slate-950
                      sm:text-xl
                      dark:text-white
                    "
                  >
                    {item.value}
                  </div>
                </div>

                {/* Percentage */}
                <div
                  className="
                    text-xs
                    leading-5
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}