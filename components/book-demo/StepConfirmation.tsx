"use client";

import Link from "next/link";
import {
  CalendarDays,
  Clock,
  Download,
  Info,
  Link2,
  User,
} from "lucide-react";

import { SuccessBadgeIcon } from "./icons";
import type { DemoBooking, DemoFormData } from "./types";

const WEEKDAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function formatDate(date: Date | null) {
  if (!date) return "—";
  return `${WEEKDAYS[date.getDay()]}, ${
    MONTHS[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`;
}

export default function StepConfirmation({
  data,
  booking,
}: {
  data: DemoFormData;
  booking: DemoBooking;
}) {
  const rows = [
    {
      icon: CalendarDays,
      label: "Date",
      value: formatDate(booking.date),
    },
    {
      icon: Clock,
      label: "Time",
      value: `${booking.time} . 30 minutes . ${booking.timezone.replace(
        /^\(GMT[^)]*\)\s*/,
        ""
      )}`,
    },
    {
      icon: User,
      label: "With",
      value: "Zoiko Billing Demo Specialist",
    },
    {
      icon: Link2,
      label: "Meeting link",
      value: "View meeting details in your email",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Success */}
      <div className="flex flex-col items-center gap-3 pt-4 text-center">
        <SuccessBadgeIcon className="size-[72px]" />

        <h2 className="!m-0 !text-xl !font-bold !leading-7 !tracking-normal !text-[#0F172A]">
          Your demo is scheduled
        </h2>

        <p className="m-0 text-base font-normal !leading-6 !text-[#64748B]">
          We&apos;ve sent a calendar invite to{" "}
          <span className="font-bold !text-[#0F172A]">
            {data.email || "your inbox"}
          </span>
        </p>
      </div>

      {/* Details */}
      <div className="w-full overflow-hidden rounded-[10px] border border-[#E2E8F0]">
        {rows.map(({ icon: Icon, label, value }, index) => (
          <div
            key={label}
            className={`flex items-start gap-3 px-4 py-3.5 ${
              index === rows.length - 1 ? "" : "border-b border-[#E2E8F0]"
            }`}
          >
            <Icon
              className="mt-0.5 size-5 shrink-0 text-[#0F172A]"
              strokeWidth={1.5}
            />

            <div className="flex min-w-0 flex-col">
              <span className="text-xs font-normal !leading-4 !text-[#64748B]">
                {label}
              </span>

              <span className="text-base font-bold !leading-6 !text-[#0F172A]">
                {value}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Reschedule note */}
      <div className="flex w-full items-start gap-3 rounded-[10px] border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3.5">
        <Info className="mt-0.5 size-5 shrink-0 text-[#64748B]" strokeWidth={1.5} />

        <div className="flex flex-col gap-0.5">
          <span className="text-sm font-bold !leading-5 !text-[#0F172A]">
            Need to reschedule?
          </span>

          <span className="text-xs font-normal !leading-4 !text-[#64748B]">
            You can reschedule or cancel from the calendar invite - no account
            needed.
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex w-full flex-col-reverse items-stretch gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#1F6FEB] bg-white px-6 text-base font-semibold !leading-6 !text-[#1F6FEB] transition hover:bg-[#EFF4FF]"
        >
          <Download className="size-5" strokeWidth={1.5} />
          Add to Calendar
        </button>

        <Link
          href="/"
          className="text-center text-lg font-semibold !leading-6 !text-[#1F6FEB] hover:underline"
        >
          Return to website
        </Link>
      </div>
    </div>
  );
}
