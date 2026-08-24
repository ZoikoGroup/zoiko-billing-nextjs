"use client";

import { useState } from "react";

type Account = {
  initials: string;
  name: string;
  id: string;
  currency: string;
  invoices: number;
  due: string;
  days: string;
  aging: number[];
  amount: string;
  status:
    | "Overdue"
    | "In dispute"
    | "Due soon"
    | "Payment plan"
    | "Current";
  owner: string;
};

const accounts: Account[] = [
  {
    initials: "NC",
    name: "Northgate Communications",
    id: "ACC-10241",
    currency: "GBP",
    invoices: 7,
    due: "12 Apr 2026",
    days: "121 days",
    aging: [6, 10, 16, 20, 56],
    amount: "£186,940",
    status: "Overdue",
    owner: "A. Rahman",
  },
  {
    initials: "HF",
    name: "Halden Freight Services",
    id: "ACC-10192",
    currency: "GBP",
    invoices: 4,
    due: "03 May 2026",
    days: "100 days",
    aging: [10, 14, 20, 28, 40],
    amount: "£158,900",
    status: "Overdue",
    owner: "J. Whitfield",
  },
  {
    initials: "LM",
    name: "Larkspur Media Group",
    id: "ACC-10488",
    currency: "EUR",
    invoices: 3,
    due: "29 Jun 2026",
    days: "43 days",
    aging: [20, 28, 44, 16],
    amount: "€124,450",
    status: "In dispute",
    owner: "S. Delaunay",
  },
  {
    initials: "VH",
    name: "Verity Health Trust",
    id: "ACC-10077",
    currency: "GBP",
    invoices: 9,
    due: "01 Aug 2026",
    days: "10 days",
    aging: [64, 36],
    amount: "£112,380",
    status: "Due soon",
    owner: "M. Okonkwo",
  },
  {
    initials: "CE",
    name: "Cobalt Energy Partners",
    id: "ACC-10315",
    currency: "USD",
    invoices: 2,
    due: "18 Jul 2026",
    days: "24 days",
    aging: [32, 48, 28],
    amount: "$98,420",
    status: "Payment plan",
    owner: "A. Rahman",
  },
  {
    initials: "ML",
    name: "Meridian Logistics",
    id: "ACC-10520",
    currency: "GBP",
    invoices: 6,
    due: "09 Aug 2026",
    days: "2 days",
    aging: [100],
    amount: "£87,610",
    status: "Current",
    owner: "J. Whitfield",
  },
  {
    initials: "AU",
    name: "Ashgrove Utilities",
    id: "ACC-10063",
    currency: "GBP",
    invoices: 5,
    due: "21 May 2026",
    days: "82 days",
    aging: [8, 16, 20, 40, 20],
    amount: "£76,240",
    status: "Overdue",
    owner: "M. Okonkwo",
  },
  {
    initials: "PR",
    name: "Pelham Retail Group",
    id: "ACC-10402",
    currency: "EUR",
    invoices: 3,
    due: "04 Aug 2026",
    days: "7 days",
    aging: [100],
    amount: "€64,180",
    status: "Current",
    owner: "S. Delaunay",
  },
  {
    initials: "SI",
    name: "Strandmoor Interiors",
    id: "ACC-10259",
    currency: "GBP",
    invoices: 4,
    due: "27 Jun 2026",
    days: "45 days",
    aging: [16, 20, 48, 20],
    amount: "£58,720",
    status: "In dispute",
    owner: "A. Rahman",
  },
  {
    initials: "KA",
    name: "Kingsley Analytics",
    id: "ACC-10511",
    currency: "USD",
    invoices: 2,
    due: "31 Jul 2026",
    days: "11 days",
    aging: [50, 50],
    amount: "$47,960",
    status: "Due soon",
    owner: "J. Whitfield",
  },
  {
    initials: "BC",
    name: "Braemar Civil Works",
    id: "ACC-10130",
    currency: "GBP",
    invoices: 8,
    due: "14 Jun 2026",
    days: "58 days",
    aging: [14, 24, 40, 32],
    amount: "£41,305",
    status: "Payment plan",
    owner: "M. Okonkwo",
  },
  {
    initials: "OF",
    name: "Orrin Foods Ltd",
    id: "ACC-10344",
    currency: "GBP",
    invoices: 1,
    due: "07 Aug 2026",
    days: "4 days",
    aging: [100],
    amount: "£28,470",
    status: "Current",
    owner: "S. Delaunay",
  },
];

const statusStyles: Record<Account["status"], string> = {
  Overdue: "bg-red-50 text-red-600",
  "In dispute": "bg-blue-50 text-blue-600",
  "Due soon": "bg-orange-50 text-orange-600",
  "Payment plan": "bg-slate-100 text-slate-600",
  Current: "bg-green-50 text-green-600",
};

const avatarStyles = [
  "bg-slate-100",
  "bg-blue-50",
  "bg-violet-50",
  "bg-orange-50",
];

function AgingBar({ values }: { values: number[] }) {
  const agingColors = [
    "bg-emerald-400",
    "bg-slate-500",
    "bg-orange-400",
    "bg-orange-500",
    "bg-red-500",
  ];

  return (
    <div
      className="
        flex
        h-1.5
        w-28
        overflow-hidden
        rounded-full
        bg-slate-100
      "
    >
      {values.map((value, index) => (
        <div
          key={`${value}-${index}`}
          className={`${agingColors[index] ?? "bg-slate-400"} h-full`}
          style={{ width: `${value}%` }}
        />
      ))}
    </div>
  );
}

function StatusBadge({ status }: { status: Account["status"] }) {
  return (
    <span
      className={`
        inline-flex
        whitespace-nowrap
        rounded-full
        px-2.5
        py-0.5
        text-xs
        font-semibold
        ${statusStyles[status]}
      `}
    >
      {status}
    </span>
  );
}

export default function NextStep() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filters = [
    { label: "All", count: 12 },
    { label: "Overdue", count: 3 },
    { label: "Disputed", count: 2 },
    { label: "On payment plan", count: 2 },
    { label: "Current", count: 3 },
  ];

  const filteredAccounts = accounts.filter((account) => {
    const searchValue = search.toLowerCase().trim();

    const matchesSearch =
      account.name.toLowerCase().includes(searchValue) ||
      account.id.toLowerCase().includes(searchValue);

    const matchesFilter =
      activeFilter === "All" ||
      (activeFilter === "Disputed" && account.status === "In dispute") ||
      (activeFilter === "On payment plan" &&
        account.status === "Payment plan") ||
      account.status === activeFilter;

    return matchesSearch && matchesFilter;
  });

  const clearFilters = () => {
    setActiveFilter("All");
    setSearch("");
  };

  return (
    <section className="w-full overflow-hidden bg-white">
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-5
          py-12

          sm:px-8
          sm:py-16

          md:px-10
          md:py-20

          lg:px-14

          xl:px-20
        "
      >
        <div className="mx-auto w-full max-w-[1240px]">
          {/* SECTION HEADER */}
          <div className="mb-8">
            <div className="mb-5 flex items-center gap-3 sm:mb-6">
              <span className="h-px w-6 shrink-0 bg-blue-600 opacity-70" />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  leading-4
                  tracking-[0.16em]
                  text-[#7890b2]

                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Account detail
              </span>
            </div>

            <h2
              className="
                !m-0
                !text-[32px]
                !font-extrabold
                !leading-[1.1]
                !tracking-[-0.03em]
                !text-slate-900

                sm:!text-[40px]

                md:!text-[46px]

                lg:!text-[50px]
              "
            >
              Balances by account.
            </h2>

            <p
              className="
                mt-5
                w-full
                max-w-[605px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:mt-6
                sm:text-base
              "
            >
              Open a row for the invoice-level breakdown, applied payments,
              and the reminder history.
            </p>
          </div>

          {/* FILTERS */}
          <div className="mb-6 flex flex-col gap-4">
            {/* FILTER PILLS */}
            <div
              className="
                flex
                w-full
                flex-wrap
                items-center
                gap-1
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-1

                sm:w-fit
                sm:rounded-full
              "
            >
              {filters.map((filter) => {
                const active = activeFilter === filter.label;

                return (
                  <button
                    key={filter.label}
                    type="button"
                    onClick={() => setActiveFilter(filter.label)}
                    className={`
                      rounded-full
                      px-4
                      py-2
                      text-sm
                      font-semibold
                      transition

                      ${
                        active
                          ? "bg-[#18233b] text-white"
                          : "text-[#53657b] hover:bg-slate-50"
                      }
                    `}
                  >
                    {filter.label}

                    <span
                      className={`
                        ml-1.5
                        ${
                          active
                            ? "text-white/60"
                            : "text-[#7c8da0]"
                        }
                      `}
                    >
                      {filter.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* SEARCH + CONTROLS */}
            <div
              className="
                flex
                flex-col
                gap-3

                lg:flex-row
                lg:items-center
                lg:justify-between
              "
            >
              {/* SEARCH */}
              <div className="relative w-full lg:max-w-[320px]">
                <input
                  type="text"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search account, ID or invoice"
                  className="
                    h-11
                    w-full
                    rounded-full
                    border
                    border-slate-200
                    bg-white
                    px-4
                    pl-10
                    text-sm
                    text-[#18233b]
                    outline-none
                    placeholder:text-[#8492a3]
                    transition
                    focus:border-blue-400
                    focus:ring-2
                    focus:ring-blue-100
                  "
                />

                <svg
                  className="
                    absolute
                    left-4
                    top-1/2
                    h-4
                    w-4
                    -translate-y-1/2
                    text-slate-400
                  "
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="6.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />

                  <path
                    d="M16 16L21 21"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* CONTROLS */}
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  className="
                    h-11
                    rounded-full
                    border
                    border-slate-200
                    bg-white
                    px-4
                    text-sm
                    text-[#18233b]
                    transition
                    hover:bg-slate-50
                  "
                >
                  All currencies
                  <span className="ml-3 text-slate-400">⌄</span>
                </button>

                <button
                  type="button"
                  className="
                    h-11
                    rounded-full
                    border
                    border-slate-200
                    bg-white
                    px-4
                    text-sm
                    text-[#18233b]
                    transition
                    hover:bg-slate-50
                  "
                >
                  All owners
                  <span className="ml-3 text-slate-400">⌄</span>
                </button>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="
                    h-11
                    rounded-full
                    border
                    border-slate-200
                    bg-white
                    px-4
                    text-xs
                    font-semibold
                    text-[#18233b]
                    transition
                    hover:bg-slate-50
                  "
                >
                  Clear filters
                </button>
              </div>
            </div>
          </div>

          {/* DESKTOP / TABLET TABLE */}
          <div
            className="
              hidden
              overflow-hidden
              rounded-2xl
              border
              border-slate-200
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05)]

              md:block
            "
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1020px] border-collapse">
                <thead>
                  <tr className="bg-[#fafbfc]">
                    <th className="w-14 border-b border-slate-200 px-5 py-4">
                      <div className="h-4 w-4 rounded-sm border border-slate-400 bg-white" />
                    </th>

                    {[
                      "Account",
                      "Open invoices",
                      "Oldest due",
                      "Aging",
                      "Outstanding",
                      "Status",
                      "Owner",
                      "",
                    ].map((heading, index) => (
                      <th
                        key={`${heading}-${index}`}
                        className={`
                          border-b
                          border-slate-200
                          px-4
                          py-4
                          text-left
                          text-[11px]
                          font-bold
                          uppercase
                          tracking-wide
                          text-[#708096]

                          ${
                            heading === "Outstanding"
                              ? "text-right"
                              : ""
                          }
                        `}
                      >
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {filteredAccounts.map((account, index) => (
                    <tr
                      key={account.id}
                      className="transition hover:bg-slate-50"
                    >
                      {/* Checkbox */}
                      <td className="border-b border-slate-100 px-5 py-5">
                        <div className="h-4 w-4 rounded-sm border border-slate-400 bg-white" />
                      </td>

                      {/* Account */}
                      <td className="border-b border-slate-100 px-4 py-3.5">
                        <div className="flex items-center gap-3">
                          <div
                            className={`
                              flex
                              h-8
                              w-8
                              shrink-0
                              items-center
                              justify-center
                              rounded-lg
                              ${avatarStyles[index % avatarStyles.length]}
                            `}
                          >
                            <span className="text-xs font-bold text-[#273753]">
                              {account.initials}
                            </span>
                          </div>

                          <div className="min-w-0">
                            <div className="text-sm font-semibold leading-6 text-[#18233b]">
                              {account.name}
                            </div>

                            <div className="text-xs leading-5 text-[#728298]">
                              {account.id} · {account.currency}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Open invoices */}
                      <td className="border-b border-slate-100 px-4 py-5 text-sm text-[#18233b]">
                        {account.invoices}
                      </td>

                      {/* Oldest due */}
                      <td className="border-b border-slate-100 px-4 py-5">
                        <div className="text-sm leading-6 text-[#18233b]">
                          {account.due}
                        </div>

                        <div className="text-xs leading-5 text-[#728298]">
                          {account.days}
                        </div>
                      </td>

                      {/* Aging */}
                      <td className="border-b border-slate-100 px-4 py-5">
                        <AgingBar values={account.aging} />
                      </td>

                      {/* Outstanding */}
                      <td className="border-b border-slate-100 px-4 py-5 text-right">
                        <span className="text-sm font-semibold text-[#18233b]">
                          {account.amount}
                        </span>
                      </td>

                      {/* Status */}
                      <td className="border-b border-slate-100 px-4 py-5">
                        <StatusBadge status={account.status} />
                      </td>

                      {/* Owner */}
                      <td className="border-b border-slate-100 px-4 py-5">
                        <span className="whitespace-nowrap text-sm text-[#18233b]">
                          {account.owner}
                        </span>
                      </td>

                      {/* Action */}
                      <td className="border-b border-slate-100 px-4 py-5">
                        <button
                          type="button"
                          className="
                            h-8
                            rounded-lg
                            border
                            border-slate-200
                            bg-white
                            px-2.5
                            text-xs
                            font-semibold
                            text-[#53657b]
                            transition
                            hover:bg-slate-50
                          "
                        >
                          Open
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* TABLE FOOTER */}
            <div
              className="
                border-t
                border-slate-200
                bg-[#fafbfc]
                px-5
                py-4
              "
            >
              <div
                className="
                  flex
                  flex-col
                  gap-2
                  text-xs
                  text-[#728298]

                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >
                <span>
                  Showing {filteredAccounts.length} of {accounts.length}{" "}
                  accounts
                </span>

                <span>
                  Total outstanding:{" "}
                  <strong className="text-[#18233b]">
                    £2,486,310
                  </strong>
                </span>
              </div>
            </div>
          </div>

          {/* MOBILE CARDS */}
          <div className="space-y-3 md:hidden">
            {filteredAccounts.map((account, index) => (
              <div
                key={account.id}
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  shadow-[0_4px_16px_rgba(15,23,42,0.04)]
                "
              >
                {/* Card Header */}
                <div className="flex items-start justify-between gap-3 p-4">
                  <div className="flex min-w-0 items-center gap-3">
                    <div
                      className={`
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        ${avatarStyles[index % avatarStyles.length]}
                      `}
                    >
                      <span className="text-xs font-bold text-[#273753]">
                        {account.initials}
                      </span>
                    </div>

                    <div className="min-w-0">
                      <h3 className="truncate text-sm font-semibold text-[#18233b]">
                        {account.name}
                      </h3>

                      <p className="text-xs text-[#728298]">
                        {account.id} · {account.currency}
                      </p>
                    </div>
                  </div>

                  <StatusBadge status={account.status} />
                </div>

                {/* Card Details */}
                <div className="grid grid-cols-2 border-t border-slate-100">
                  <div className="border-r border-slate-100 p-4">
                    <p className="text-[10px] font-bold uppercase tracking-wide text-[#8190a3]">
                      Open invoices
                    </p>

                    <p className="mt-1 text-sm text-[#18233b]">
                      {account.invoices}
                    </p>
                  </div>

                  <div className="p-4">
                    <p className="text-[10px] font-bold uppercase tracking-wide text-[#8190a3]">
                      Outstanding
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#18233b]">
                      {account.amount}
                    </p>
                  </div>

                  <div className="border-r border-t border-slate-100 p-4">
                    <p className="text-[10px] font-bold uppercase tracking-wide text-[#8190a3]">
                      Oldest due
                    </p>

                    <p className="mt-1 text-sm text-[#18233b]">
                      {account.due}
                    </p>

                    <p className="text-xs text-[#728298]">
                      {account.days}
                    </p>
                  </div>

                  <div className="border-t border-slate-100 p-4">
                    <p className="text-[10px] font-bold uppercase tracking-wide text-[#8190a3]">
                      Owner
                    </p>

                    <p className="mt-1 text-sm text-[#18233b]">
                      {account.owner}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    border-t
                    border-slate-100
                    px-4
                    py-3
                  "
                >
                  <div>
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-wide text-[#8190a3]">
                      Aging
                    </p>

                    <AgingBar values={account.aging} />
                  </div>

                  <button
                    type="button"
                    className="
                      h-8
                      rounded-lg
                      border
                      border-slate-200
                      bg-white
                      px-3
                      text-xs
                      font-semibold
                      text-[#53657b]
                      transition
                      hover:bg-slate-50
                    "
                  >
                    Open
                  </button>
                </div>
              </div>
            ))}

            {/* NO RESULTS */}
            {filteredAccounts.length === 0 && (
              <div
                className="
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-8
                  text-center
                  text-sm
                  text-[#728298]
                "
              >
                No accounts found.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}