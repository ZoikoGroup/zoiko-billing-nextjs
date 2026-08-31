"use client";

import Link from "next/link";
import {
  BriefcaseIcon,
  BuildingIcon,
  ChevronIcon,
  GlobeFieldIcon,
  MailIcon,
  SecureShieldIcon,
  UserIcon,
  UsersIcon,
} from "./icons";

import {
  COMPANY_SIZES,
  COUNTRIES,
  DIAL_CODES,
  FOCUS_AREAS,
  MAX_FOCUS_AREAS,
  type DemoFormData,
} from "./types";

const inputClass =
  "min-h-11 w-full rounded-[10px] border border-[#CBD5E1] bg-white py-3 pl-10 pr-3.5 text-base font-normal !text-[#0F172A] outline-none placeholder:!text-[#A9B4C4] focus:border-[#1F6FEB] focus:ring-1 focus:ring-[#1F6FEB]";

const labelClass = "text-sm font-semibold !leading-5 !text-[#0F172A]";

function Field({
  label,
  required,
  htmlFor,
  children,
  hint,
}: {
  label: string;
  required?: boolean;
  htmlFor: string;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <div className="flex w-full flex-col gap-1.5">
      <label htmlFor={htmlFor} className={labelClass}>
        {label}{" "}
        {required ? (
          <span className="!text-[#DC2626]">*</span>
        ) : (
          <span className="text-sm font-medium !text-[#64748B]">{hint}</span>
        )}
      </label>

      {children}
    </div>
  );
}

export default function StepDetails({
  data,
  errors,
  onChange,
  onToggleFocus,
  onSubmit,
}: {
  data: DemoFormData;
  errors: Partial<Record<keyof DemoFormData, string>>;
  onChange: (field: keyof DemoFormData, value: string) => void;
  onToggleFocus: (area: string) => void;
  onSubmit: () => void;
}) {
  const focusLimitReached = data.focusAreas.length >= MAX_FOCUS_AREAS;

  return (
    <form
      className="flex flex-col gap-6"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
      noValidate
    >
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-[5px]">
          <h2 className="!m-0 !text-2xl !font-extrabold !leading-9 !tracking-normal !text-[#0F172A]">
            Let&apos;s get to know you
          </h2>

          <p className="m-0 text-sm font-normal !leading-5 !text-[#64748B]">
            This helps us prepare a demo that&apos;s right for you.
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-2.5 rounded-[10px] border border-[#E2E8F0] bg-white px-3.5 py-2.5">
          <SecureShieldIcon className="size-5 shrink-0" />

          <div className="flex flex-col">
            <span className="text-xs font-bold !leading-5 !text-[#0F172A]">
              Secure &amp; private
            </span>

            <span className="text-xs font-normal !leading-4 !text-[#64748B]">
              Your information is safe with us.
            </span>
          </div>
        </div>
      </div>

      {/* Fields */}
      <div className="grid grid-cols-1 gap-x-5 gap-y-4 md:grid-cols-2">
        <Field label="Work email" required htmlFor="demo-email">
          <div className="relative">
            <MailIcon className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 " />
            <input
              id="demo-email"
              type="email"
              autoComplete="email"
              placeholder="name@company.com"
              value={data.email}
              onChange={(e) => onChange("email", e.target.value)}
              className={inputClass}
              aria-invalid={Boolean(errors.email)}
            />
          </div>
          {errors.email && (
            <span className="text-xs font-medium !text-[#DC2626]">
              {errors.email}
            </span>
          )}
        </Field>

        <Field label="Full name" required htmlFor="demo-name">
          <div className="relative">
            <UserIcon className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 " />
            <input
              id="demo-name"
              autoComplete="name"
              placeholder="Your full name"
              value={data.fullName}
              onChange={(e) => onChange("fullName", e.target.value)}
              className={inputClass}
              aria-invalid={Boolean(errors.fullName)}
            />
          </div>
          {errors.fullName && (
            <span className="text-xs font-medium !text-[#DC2626]">
              {errors.fullName}
            </span>
          )}
        </Field>

        <Field label="Company name" required htmlFor="demo-company">
          <div className="relative">
            <BuildingIcon className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 " />
            <input
              id="demo-company"
              autoComplete="organization"
              placeholder="Your company"
              value={data.company}
              onChange={(e) => onChange("company", e.target.value)}
              className={inputClass}
              aria-invalid={Boolean(errors.company)}
            />
          </div>
          {errors.company && (
            <span className="text-xs font-medium !text-[#DC2626]">
              {errors.company}
            </span>
          )}
        </Field>

        <Field label="Job title" required htmlFor="demo-title">
          <div className="relative">
            <BriefcaseIcon className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 " />
            <input
              id="demo-title"
              autoComplete="organization-title"
              placeholder="Your role"
              value={data.jobTitle}
              onChange={(e) => onChange("jobTitle", e.target.value)}
              className={inputClass}
              aria-invalid={Boolean(errors.jobTitle)}
            />
          </div>
          {errors.jobTitle && (
            <span className="text-xs font-medium !text-[#DC2626]">
              {errors.jobTitle}
            </span>
          )}
        </Field>

        <Field label="Company size" required htmlFor="demo-size">
          <div className="relative">
            <UsersIcon className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 " />
            <select
              id="demo-size"
              value={data.companySize}
              onChange={(e) => onChange("companySize", e.target.value)}
              className={`${inputClass} appearance-none pr-9 ${
                data.companySize ? "" : "!text-[#A9B4C4]"
              }`}
              aria-invalid={Boolean(errors.companySize)}
            >
              <option value="">Select company size</option>
              {COMPANY_SIZES.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
            <ChevronIcon className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2" />
          </div>
          {errors.companySize && (
            <span className="text-xs font-medium !text-[#DC2626]">
              {errors.companySize}
            </span>
          )}
        </Field>

        <Field label="Country or region" required htmlFor="demo-country">
          <div className="relative">
            <GlobeFieldIcon className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 " />
            <select
              id="demo-country"
              value={data.country}
              onChange={(e) => onChange("country", e.target.value)}
              className={`${inputClass} appearance-none pr-9 ${
                data.country ? "" : "!text-[#A9B4C4]"
              }`}
              aria-invalid={Boolean(errors.country)}
            >
              <option value="">Select country or region</option>
              {COUNTRIES.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <ChevronIcon className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2" />
          </div>
          {errors.country && (
            <span className="text-xs font-medium !text-[#DC2626]">
              {errors.country}
            </span>
          )}
        </Field>

        <div className="md:col-span-2 md:max-w-[430px]">
          <Field
            label="Phone number"
            htmlFor="demo-phone"
            hint="(optional)"
          >
            <div className="flex items-start gap-2">
              <div className="relative w-20 shrink-0">
                <select
                  aria-label="Dial code"
                  value={data.dialCode}
                  onChange={(e) => onChange("dialCode", e.target.value)}
                  className="min-h-11 w-full appearance-none rounded-[10px] border border-[#CBD5E1] bg-white py-3 pl-3.5 pr-7 text-base font-normal !text-[#0F172A] outline-none focus:border-[#1F6FEB] focus:ring-1 focus:ring-[#1F6FEB]"
                >
                  {DIAL_CODES.map((code) => (
                    <option key={code} value={code}>
                      {code}
                    </option>
                  ))}
                </select>
                <ChevronIcon className="pointer-events-none absolute right-2.5 top-1/2 size-4 -translate-y-1/2" />
              </div>

              <input
                id="demo-phone"
                type="tel"
                autoComplete="tel"
                placeholder="(555) 123-4567"
                value={data.phone}
                onChange={(e) => onChange("phone", e.target.value)}
                className="min-h-11 w-full rounded-[10px] border border-[#CBD5E1] bg-white px-3.5 py-3 text-base font-normal !text-[#0F172A] outline-none placeholder:!text-[#A9B4C4] focus:border-[#1F6FEB] focus:ring-1 focus:ring-[#1F6FEB]"
              />
            </div>
          </Field>
        </div>
      </div>

      {/* Focus areas */}
      <fieldset className="m-0 border-0 p-0">
        <legend className={`${labelClass} p-0`}>
          What would you like to focus on?{" "}
          <span className="text-sm font-medium !text-[#64748B]">
            (Select up to {MAX_FOCUS_AREAS})
          </span>
        </legend>

        <div className="grid grid-cols-1 gap-3 pt-3 sm:grid-cols-2 lg:grid-cols-3">
          {FOCUS_AREAS.map((area) => {
            const checked = data.focusAreas.includes(area);
            const disabled = !checked && focusLimitReached;

            return (
              <label
                key={area}
                className={`flex min-h-11 items-center gap-2.5 rounded-[10px] border px-3.5 py-3 transition ${
                  checked
                    ? "border-[#1F6FEB] bg-[#EFF4FF]"
                    : "border-[#E2E8F0] bg-white"
                } ${
                  disabled
                    ? "cursor-not-allowed opacity-55"
                    : "cursor-pointer hover:border-[#CBD5E1]"
                }`}
              >
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={checked}
                  disabled={disabled}
                  onChange={() => onToggleFocus(area)}
                />

                <span
                  aria-hidden
                  className={`flex size-4 shrink-0 items-center justify-center rounded-[5px] border ${
                    checked
                      ? "border-[#1F6FEB] bg-[#1F6FEB]"
                      : "border-[#CBD5E1] bg-white"
                  }`}
                >
                  {checked && (
                    <svg viewBox="0 0 10 10" className="size-2.5 fill-none">
                      <path
                        d="M2.3 5.2 4 6.9 7.7 3.2"
                        stroke="#fff"
                        strokeWidth="1.56"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </span>

                <span className="text-xs font-semibold !leading-4 !text-[#0F172A]">
                  {area}
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      {/* Actions */}
      <div className="flex flex-col-reverse items-stretch gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#1F6FEB] px-6 text-base font-semibold !leading-6 !text-white shadow-[0px_1px_2px_0px_rgba(29,78,216,0.30)] transition hover:bg-[#1E40AF]"
        >
          Continue to select time →
        </button>

        <Link
          href="/"
          className="text-center text-lg font-semibold !leading-6 !text-[#1F6FEB] hover:underline"
        >
          Return to website
        </Link>
      </div>
    </form>
  );
}
