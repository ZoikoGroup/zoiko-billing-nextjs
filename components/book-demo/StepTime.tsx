"use client";

import { useState } from "react";

import { ChevronIcon } from "./icons";
import { TIMEZONES, TIME_SLOTS, type DemoBooking } from "./types";

const WEEKDAY_LABELS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const WEEKDAY_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

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

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function isSameDay(a: Date | null, b: Date | null) {
  if (!a || !b) return false;
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

/** Days of `month`, padded with nulls so the 1st lands on its weekday. */
function buildMonthGrid(month: Date) {
  const first = new Date(month.getFullYear(), month.getMonth(), 1);
  const daysInMonth = new Date(
    month.getFullYear(),
    month.getMonth() + 1,
    0
  ).getDate();

  const cells: (Date | null)[] = Array.from(
    { length: first.getDay() },
    () => null
  );

  for (let day = 1; day <= daysInMonth; day += 1) {
    cells.push(new Date(month.getFullYear(), month.getMonth(), day));
  }

  return cells;
}

export default function StepTime({
  booking,
  error,
  onSelectDate,
  onSelectTime,
  onSelectTimezone,
  onBack,
  onSubmit,
}: {
  booking: DemoBooking;
  error: string | null;
  onSelectDate: (date: Date) => void;
  onSelectTime: (time: string) => void;
  onSelectTimezone: (timezone: string) => void;
  onBack: () => void;
  onSubmit: () => void;
}) {
  const today = startOfDay(new Date());

  const [visibleMonth, setVisibleMonth] = useState(() => {
    const base = booking.date ?? today;
    return new Date(base.getFullYear(), base.getMonth(), 1);
  });

  const cells = buildMonthGrid(visibleMonth);

  const atCurrentMonth =
    visibleMonth.getFullYear() === today.getFullYear() &&
    visibleMonth.getMonth() === today.getMonth();

  const selectedLabel = booking.date
    ? `${WEEKDAY_SHORT[booking.date.getDay()]}, ${MONTHS[
        booking.date.getMonth()
      ].slice(0, 3)} ${booking.date.getDate()}`
    : null;

  return (
    <div className="flex flex-col gap-5">
      {/* Header */}
      <div className="flex flex-col gap-[5px]">
        <h2 className="!m-0 !text-2xl !font-extrabold !leading-9 !tracking-normal !text-[#0F172A]">
          Select a date &amp; time
        </h2>

        <p className="m-0 text-sm font-normal !leading-5 !text-[#64748B]">
          30-minute demo, shown in your timezone
        </p>
      </div>

      {/* Back */}
      <button
        type="button"
        onClick={onBack}
        className="inline-flex w-fit items-center gap-2 text-base font-semibold !leading-6 !text-[#1F6FEB] hover:underline"
      >
        <ChevronIcon className="size-3.5 rotate-90" />
        Back to your details
      </button>

      <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-2">
        {/* Calendar */}
        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() =>
                setVisibleMonth(
                  new Date(
                    visibleMonth.getFullYear(),
                    visibleMonth.getMonth() - 1,
                    1
                  )
                )
              }
              disabled={atCurrentMonth}
              aria-label="Previous month"
              className="flex size-8 items-center justify-center rounded-lg border border-[#E2E8F0] bg-white transition enabled:hover:bg-[#F8FAFC] disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronIcon className="size-3.5 rotate-90" />
            </button>

            <span className="text-base font-bold !leading-6 !text-[#0F172A]">
              {MONTHS[visibleMonth.getMonth()]} {visibleMonth.getFullYear()}
            </span>

            <button
              type="button"
              onClick={() =>
                setVisibleMonth(
                  new Date(
                    visibleMonth.getFullYear(),
                    visibleMonth.getMonth() + 1,
                    1
                  )
                )
              }
              aria-label="Next month"
              className="flex size-8 items-center justify-center rounded-lg border border-[#E2E8F0] bg-white transition hover:bg-[#F8FAFC]"
            >
              <ChevronIcon className="size-3.5 -rotate-90" />
            </button>
          </div>

          <div className="grid grid-cols-7 pt-6">
            {WEEKDAY_LABELS.map((day) => (
              <span
                key={day}
                className="pb-6 text-center text-[11px] font-semibold uppercase !leading-4 tracking-[0.06em] !text-[#94A3B8]"
              >
                {day}
              </span>
            ))}

            {cells.map((date, index) => {
              if (!date) {
                return <span key={`pad-${index}`} aria-hidden />;
              }

              const past = date < today;
              const selected = isSameDay(date, booking.date);

              return (
                <button
                  key={date.toISOString()}
                  type="button"
                  disabled={past}
                  onClick={() => onSelectDate(date)}
                  aria-pressed={selected}
                  className="flex h-[52px] w-full items-center justify-center disabled:cursor-not-allowed"
                >
                  <span
                    className={`flex size-[22px] items-center justify-center rounded-[4px] text-sm font-normal transition ${
                      selected
                        ? "bg-[#1F6FEB] !text-white"
                        : past
                          ? "!text-[#CBD5E1]"
                          : "!text-[#64748B] hover:bg-[#EFF4FF] hover:!text-[#0F172A]"
                    }`}
                  >
                    {String(date.getDate()).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2 pt-5">
            <svg viewBox="0 0 17 17" fill="none" className="size-4 shrink-0">
              <path
                d="M8.5 14.875C12.0208 14.875 14.875 12.0208 14.875 8.5C14.875 4.97918 12.0208 2.125 8.5 2.125C4.97918 2.125 2.125 4.97918 2.125 8.5C2.125 12.0208 4.97918 14.875 8.5 14.875Z"
                stroke="#94A3B8"
                strokeWidth="1.19522"
              />
              <path
                d="M2.125 8.5H14.875M8.5 2.125C10.2 3.96667 11.05 6.1625 11.05 8.5C11.05 10.8375 10.2 13.0333 8.5 14.875C6.8 13.0333 5.95 10.8375 5.95 8.5C5.95 6.1625 6.8 3.96667 8.5 2.125Z"
                stroke="#94A3B8"
                strokeWidth="1.19522"
              />
            </svg>

            <span className="text-xs font-normal !leading-4 !text-[#64748B]">
              Times shown in {booking.timezone}
            </span>
          </div>
        </div>

        {/* Timezone + slots */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="demo-timezone"
              className="text-sm font-normal !leading-5 !text-[#64748B]"
            >
              Your timezone
            </label>

            <div className="relative">
              <select
                id="demo-timezone"
                value={booking.timezone}
                onChange={(e) => onSelectTimezone(e.target.value)}
                className="min-h-11 w-full appearance-none rounded-[10px] border border-[#CBD5E1] bg-white py-3 pl-3.5 pr-9 text-base font-normal !text-[#0F172A] outline-none focus:border-[#1F6FEB] focus:ring-1 focus:ring-[#1F6FEB]"
              >
                {TIMEZONES.map((zone) => (
                  <option key={zone} value={zone}>
                    {zone}
                  </option>
                ))}
              </select>
              <ChevronIcon className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-sm font-normal !leading-5 !text-[#64748B]">
              {selectedLabel
                ? `Available times for ${selectedLabel}`
                : "Select a date to see available times"}
            </span>

            {booking.date &&
              TIME_SLOTS.map((slot) => {
                const selected = booking.time === slot;

                return (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => onSelectTime(slot)}
                    aria-pressed={selected}
                    className={`flex min-h-[52px] w-full items-center justify-between rounded-[10px] border px-4 py-3 text-left transition ${
                      selected
                        ? "border-[#1F6FEB] bg-[#EFF4FF]"
                        : "border-[#E2E8F0] bg-white hover:border-[#CBD5E1]"
                    }`}
                  >
                    <span className="text-base font-semibold !leading-6 !text-[#0F172A]">
                      {slot}
                    </span>

                    <span className="text-sm font-normal !leading-5 !text-[#64748B]">
                      30 min
                    </span>
                  </button>
                );
              })}
          </div>

          {error && (
            <p className="m-0 text-xs font-medium !text-[#DC2626]">{error}</p>
          )}

          <button
            type="button"
            onClick={onSubmit}
            className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-[#1F6FEB] px-6 text-base font-semibold !leading-6 !text-white shadow-[0px_1px_2px_0px_rgba(29,78,216,0.30)] transition hover:bg-[#1E40AF]"
          >
            Continue to select time →
          </button>
        </div>
      </div>
    </div>
  );
}
