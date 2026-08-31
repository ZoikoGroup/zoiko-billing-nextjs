"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import Stepper from "./Stepper";
import {
  ArrowLeftIcon,
  EyeIcon,
  FooterLockIcon,
  GoogleIcon,
  LockIcon,
  MailIcon,
  MicrosoftIcon,
  RuleCheckIcon,
  SuccessBadgeIcon,
  UserIcon,
  VerifyMailIcon,
} from "./icons";

export type Screen = "account" | "verify" | "workspace" | "checkout" | "success";

/** Which numbered step each screen belongs to. */
const STEP_OF: Record<Screen, number> = {
  account: 1,
  verify: 1,
  workspace: 2,
  checkout: 3,
  success: 3,
};

const OTP_LENGTH = 6;

const PREVIEW = {
  email: "jimmyjostar@example.com",
  org: "Achme Corporation",
};

const COUNTRIES = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "India",
  "Germany",
  "France",
  "Singapore",
];

const CURRENCIES = [
  "USD - US Dollar",
  "EUR - Euro",
  "GBP - British Pound",
  "CAD - Canadian Dollar",
  "AUD - Australian Dollar",
  "INR - Indian Rupee",
];

const NEXT_STEPS = [
  "Add your business details",
  "Configure invoice and payment settings",
  "Invite your team",
  "Connect integrations",
];

const inputBase =
  "min-h-11 w-full rounded-[10px] border border-[#CBD5E1] bg-white py-3 pr-3.5 text-base font-normal !text-[#0F172A] outline-none placeholder:!text-[#A9B4C4] focus:border-[#1F6FEB] focus:ring-1 focus:ring-[#1F6FEB]";

const labelClass = "text-sm font-semibold !leading-5 !text-[#0F172A]";

const primaryButton =
  "flex min-h-11 w-full items-center justify-center rounded-lg bg-[#1F6FEB] px-5 py-2 text-base font-semibold !leading-6 !text-white shadow-[0px_1px_2px_0px_rgba(29,78,216,0.30)] transition hover:bg-[#1E40AF]";

const providerButton =
  "flex min-h-11 w-full items-center justify-center gap-2 rounded-[10px] border border-[#CBD5E1] bg-white px-4 py-3 text-sm font-semibold !leading-5 !text-[#1E293B] transition hover:bg-[#F8FAFC]";

const passwordRules = [
  { label: "8+ characters", test: (v: string) => v.length >= 8 },
  { label: "1 number", test: (v: string) => /\d/.test(v) },
  { label: "1 uppercase letter", test: (v: string) => /[A-Z]/.test(v) },
];

export default function CreateAccountForm({
  initialScreen = "account",
}: {
  initialScreen?: Screen;
}) {
  const seeded = initialScreen !== "account";

  const [screen, setScreen] = useState<Screen>(initialScreen);
  const [email, setEmail] = useState(seeded ? PREVIEW.email : "");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [org, setOrg] = useState(seeded ? PREVIEW.org : "");
  const [country, setCountry] = useState(seeded ? COUNTRIES[0] : "");
  const [currency, setCurrency] = useState(seeded ? CURRENCIES[0] : "");
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const [error, setError] = useState<string | null>(null);

  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (screen === "verify") otpRefs.current[0]?.focus();
  }, [screen]);

  const go = (next: Screen) => {
    setError(null);
    setScreen(next);
  };

  const submitAccount = () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Enter a valid work email address.");
      return;
    }
    if (!fullName.trim()) {
      setError("Enter your full name.");
      return;
    }
    if (!passwordRules.every((rule) => rule.test(password))) {
      setError("Your password does not meet all the requirements yet.");
      return;
    }
    go("verify");
  };

  const submitVerify = () => {
    if (otp.some((d) => d === "")) {
      setError(`Enter all ${OTP_LENGTH} digits.`);
      return;
    }
    go("workspace");
  };

  const submitWorkspace = () => {
    if (!org.trim()) {
      setError("Enter your organization name.");
      return;
    }
    if (!country) {
      setError("Select a country or region.");
      return;
    }
    if (!currency) {
      setError("Select a default currency.");
      return;
    }
    go("checkout");
  };

  const setOtpDigit = (index: number, value: string) => {
    const digit = value.replace(/\D/g, "").slice(-1);
    setOtp((prev) => {
      const next = [...prev];
      next[index] = digit;
      return next;
    });
    setError(null);
    if (digit && index < OTP_LENGTH - 1) otpRefs.current[index + 1]?.focus();
  };

  const onOtpKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
    if (event.key === "ArrowLeft" && index > 0) otpRefs.current[index - 1]?.focus();
    if (event.key === "ArrowRight" && index < OTP_LENGTH - 1) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const onOtpPaste = (event: React.ClipboardEvent) => {
    const digits = event.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, OTP_LENGTH);
    if (!digits) return;
    event.preventDefault();
    const next = Array(OTP_LENGTH).fill("");
    digits.split("").forEach((d, i) => {
      next[i] = d;
    });
    setOtp(next);
    otpRefs.current[Math.min(digits.length, OTP_LENGTH - 1)]?.focus();
  };

  const backLink = (onClick: () => void) => (
    <button
      type="button"
      onClick={onClick}
      className="mx-auto flex items-center gap-2 pt-4 text-base font-semibold !leading-6 !text-black/60 hover:underline"
    >
      <ArrowLeftIcon className="size-5" muted />
      Back
    </button>
  );

  const errorLine = error && (
    <p className="m-0 pt-2 text-center text-xs font-medium !text-[#DC2626]">
      {error}
    </p>
  );

  return (
    <div className="w-full min-w-0 overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-[0px_12px_32px_-12px_rgba(15,23,42,0.14),0px_1px_2px_0px_rgba(15,23,42,0.04)]">
      <div className="flex flex-col gap-4 px-5 pb-10 pt-7 sm:px-8">
        {screen !== "success" && <Stepper current={STEP_OF[screen]} />}

        {/* ---------- Screen 1: account details ---------- */}
        {screen === "account" && (
          <form
            className="flex flex-col gap-1.5 pt-2.5"
            onSubmit={(e) => {
              e.preventDefault();
              submitAccount();
            }}
            noValidate
          >
            <h2 className="!m-0 !text-2xl !font-extrabold !leading-9 !tracking-normal !text-[#0F172A]">
              Let&apos;s get started
            </h2>

            <p className="m-0 text-sm font-normal !leading-5 !text-[#64748B]">
              Create your Zoiko Billing account.
            </p>

            <div className="flex flex-col gap-1.5 pt-4">
              <label htmlFor="ca-email" className={labelClass}>
                Work email address
              </label>
              <div className="relative">
                <MailIcon className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2" />
                <input
                  id="ca-email"
                  type="email"
                  autoComplete="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError(null);
                  }}
                  className={`${inputBase} pl-10`}
                />
              </div>
              <p className="m-0 text-xs font-normal !leading-5 !text-[#64748B]">
                We&apos;ll use this to create your account and workspace.
              </p>
            </div>

            <div className="flex flex-col gap-1.5 pt-3">
              <label htmlFor="ca-name" className={labelClass}>
                Full name
              </label>
              <div className="relative">
                <UserIcon className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2" />
                <input
                  id="ca-name"
                  autoComplete="name"
                  placeholder="Your full name"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    setError(null);
                  }}
                  className={`${inputBase} pl-10`}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5 pb-6 pt-3">
              <label htmlFor="ca-password" className={labelClass}>
                Password
              </label>
              <div className="relative">
                <LockIcon className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2" />
                <input
                  id="ca-password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  placeholder="Create a strong password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError(null);
                  }}
                  className={`${inputBase} pl-10 pr-11`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1"
                >
                  <EyeIcon className="size-5" />
                </button>
              </div>

              {/* Live password rules */}
              <div className="flex flex-wrap gap-x-4 gap-y-1 pt-[3px]">
                {passwordRules.map((rule) => {
                  const met = rule.test(password);
                  return (
                    <span key={rule.label} className="flex items-center gap-1.5">
                      <RuleCheckIcon className="size-3" met={met} />
                      <span
                        className={`text-xs font-medium !leading-5 ${
                          met ? "!text-[#16A34A]" : "!text-[#94A3B8]"
                        }`}
                      >
                        {rule.label}
                      </span>
                    </span>
                  );
                })}
              </div>
            </div>

            <button type="submit" className={primaryButton}>
              Continue
            </button>

            {errorLine}

            <div className="flex items-center gap-3 pt-4">
              <span className="h-px flex-1 bg-[#E2E8F0]" />
              <span className="whitespace-nowrap text-xs font-normal !leading-5 !text-[#94A3B8]">
                or continue with
              </span>
              <span className="h-px flex-1 bg-[#E2E8F0]" />
            </div>

            <div className="flex flex-col gap-3 pt-4 sm:flex-row">
              <button type="button" className={providerButton}>
                <GoogleIcon className="size-4" />
                Continue with Google
              </button>

              <button type="button" className={providerButton}>
                <MicrosoftIcon className="size-4" />
                Continue with Microsoft
              </button>
            </div>

            <p className="m-0 pt-4 text-center text-sm font-normal !leading-5 !text-[#64748B]">
              Already have an account?{" "}
              <Link href="/sign-in" className="!text-[#1F6FEB] hover:underline">
                Sign in
              </Link>
            </p>

            <p className="m-0 pt-2.5 text-center text-xs font-normal !leading-5 !text-[#64748B]">
              By continuing, you agree to the{" "}
              <Link href="#" className="!text-[#1F6FEB] hover:underline">
                Terms of Service
              </Link>{" "}
              and acknowledge the{" "}
              <Link
                href="/privacy-and-data-governance"
                className="!text-[#1F6FEB] hover:underline"
              >
                Privacy Notice
              </Link>
              .
            </p>
          </form>
        )}

        {/* ---------- Screen 2: verify email ---------- */}
        {screen === "verify" && (
          <form
            className="flex flex-col items-center pt-6"
            onSubmit={(e) => {
              e.preventDefault();
              submitVerify();
            }}
            noValidate
          >
            <span className="flex size-24 items-center justify-center rounded-2xl bg-[#EFF4FF]">
              <VerifyMailIcon className="size-12" />
            </span>

            <h2 className="!m-0 pt-6 text-center !text-2xl !font-extrabold !leading-9 !tracking-normal !text-[#0F172A]">
              Check your email
            </h2>

            <p className="m-0 max-w-[680px] pt-2 text-center text-sm font-normal !leading-5 !text-[#64748B]">
              We sent a {OTP_LENGTH}-digit code to {email || PREVIEW.email} Enter
              it below to verify your account.{" "}
              <button
                type="button"
                onClick={() => go("account")}
                className="font-semibold !text-[#1F6FEB] hover:underline"
              >
                Change email
              </button>
            </p>

            <div
              className="flex w-full justify-center gap-1.5 pt-6 sm:gap-2"
              onPaste={onOtpPaste}
            >
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => {
                    otpRefs.current[index] = el;
                  }}
                  inputMode="numeric"
                  autoComplete={index === 0 ? "one-time-code" : "off"}
                  maxLength={1}
                  aria-label={`Digit ${index + 1}`}
                  value={digit}
                  onChange={(e) => setOtpDigit(index, e.target.value)}
                  onKeyDown={(e) => onOtpKeyDown(index, e)}
                  className={`h-16 min-w-0 flex-1 rounded-xl border bg-white text-center text-xl font-bold !text-[#0F172A] shadow-[0px_4px_4px_0px_rgba(31,111,235,0.20)] outline-none sm:h-24 sm:max-w-[140px] ${
                    digit ? "border-[#1F6FEB]" : "border-black/10"
                  } focus:border-[#1F6FEB]`}
                />
              ))}
            </div>

            {errorLine}

            <button type="submit" className={`${primaryButton} mt-6`}>
              Verify Email
            </button>

            <p className="m-0 pt-5 text-center text-base font-semibold !leading-6 !text-black/60">
              Didn&apos;t get it?{" "}
              <button type="button" className="!text-[#1F6FEB] hover:underline">
                Resend Code
              </button>
            </p>

            <p className="m-0 pt-3 text-center text-base font-semibold !leading-6 !text-black/60">
              The code expires in 15 minutes and can be used once.
            </p>

            {backLink(() => go("account"))}
          </form>
        )}

        {/* ---------- Screen 3: workspace ---------- */}
        {screen === "workspace" && (
          <form
            className="flex flex-col gap-1.5 pt-2.5"
            onSubmit={(e) => {
              e.preventDefault();
              submitWorkspace();
            }}
            noValidate
          >
            <h2 className="!m-0 !text-2xl !font-extrabold !leading-9 !tracking-normal !text-[#0F172A]">
              Create your workspace
            </h2>

            <p className="m-0 text-sm font-normal !leading-5 !text-[#64748B]">
              Tell us about your business. You can change all of this later.
            </p>

            <div className="flex flex-col gap-1.5 pt-4">
              <label htmlFor="ca-org" className={labelClass}>
                Organization name
              </label>
              <input
                id="ca-org"
                autoComplete="organization"
                placeholder="Achme Corporation"
                value={org}
                onChange={(e) => {
                  setOrg(e.target.value);
                  setError(null);
                }}
                className={`${inputBase} pl-3.5`}
              />
            </div>

            <div className="flex flex-col gap-1.5 pt-4">
              <label htmlFor="ca-country" className={labelClass}>
                Country or region
              </label>
              <div className="relative">
                <select
                  id="ca-country"
                  value={country}
                  onChange={(e) => {
                    setCountry(e.target.value);
                    setError(null);
                  }}
                  className={`${inputBase} appearance-none pl-3.5 pr-10 ${
                    country ? "" : "!text-[#A9B4C4]"
                  }`}
                >
                  <option value="">United State</option>
                  {COUNTRIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <ArrowLeftIcon
                  className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 -rotate-90"
                  muted
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5 pt-4">
              <label htmlFor="ca-currency" className={labelClass}>
                Default currency
              </label>
              <div className="relative">
                <select
                  id="ca-currency"
                  value={currency}
                  onChange={(e) => {
                    setCurrency(e.target.value);
                    setError(null);
                  }}
                  className={`${inputBase} appearance-none pl-3.5 pr-10 ${
                    currency ? "" : "!text-[#A9B4C4]"
                  }`}
                >
                  <option value="">USD - US Dollar</option>
                  {CURRENCIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <ArrowLeftIcon
                  className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 -rotate-90"
                  muted
                />
              </div>
              <p className="m-0 text-xs font-normal !leading-5 !text-[#94A3B8]">
                Used for new invoices. And more currencies from settings.
              </p>
            </div>

            {errorLine}

            <button type="submit" className={`${primaryButton} mt-6`}>
              Continue
            </button>

            {backLink(() => go("verify"))}
          </form>
        )}

        {/* ---------- Screen 4: review & confirm ---------- */}
        {screen === "checkout" && (
          <div className="flex flex-col gap-1.5 pt-2.5">
            <h2 className="!m-0 !text-2xl !font-extrabold !leading-9 !tracking-normal !text-[#0F172A]">
              Review &amp; Confirm
            </h2>

            <p className="m-0 text-sm font-normal !leading-5 !text-[#64748B]">
              Check your details before we create your workspace.
            </p>

            <div className="mt-4 overflow-hidden rounded-[10px] border border-[#E2E8F0]">
              {[
                {
                  label: "Account",
                  primary: email || PREVIEW.email,
                  secondary: "132",
                },
                {
                  label: "Workspace",
                  primary: org || PREVIEW.org,
                  secondary: `${country || COUNTRIES[0]} . ${
                    (currency || CURRENCIES[0]).split(" - ")[0]
                  }`,
                },
                {
                  label: "Plan",
                  primary: "Essentials",
                  secondary: "14-day evaluation",
                },
                {
                  label: "Billing",
                  primary: "Nothing due today",
                  secondary: "You won't be changed unless you subscribe.",
                },
              ].map((row, index, all) => (
                <div
                  key={row.label}
                  className={`flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-start sm:justify-between ${
                    index === all.length - 1 ? "" : "border-b border-[#E2E8F0]"
                  }`}
                >
                  <span className="text-sm font-normal !leading-5 !text-[#64748B]">
                    {row.label}
                  </span>

                  <span className="flex flex-col sm:items-end">
                    <span className="text-base font-bold !leading-6 !text-[#0F172A]">
                      {row.primary}
                    </span>
                    <span className="text-sm font-normal !leading-6 !text-[#64748B]">
                      {row.secondary}
                    </span>
                  </span>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => go("success")}
              className={`${primaryButton} mt-6`}
            >
              Confirm and create workspace
            </button>

            {backLink(() => go("workspace"))}
          </div>
        )}

        {/* ---------- Screen 5: success ---------- */}
        {screen === "success" && (
          <div className="flex flex-col items-center pt-6">
            <SuccessBadgeIcon className="size-[72px]" />

            <h2 className="!m-0 pt-5 text-center !text-2xl !font-extrabold !leading-9 !tracking-normal !text-[#0F172A]">
              Welcome to Zoiko Billing
            </h2>

            <p className="m-0 pt-2 text-center text-sm font-normal !leading-5 !text-[#64748B]">
              {org || PREVIEW.org} is ready on Essentials. Let&apos;s set up your
              account.
            </p>

            <Link href="/" className={`${primaryButton} mt-6`}>
              Go to dashboard
            </Link>

            <ol className="m-0 flex w-full list-none flex-col gap-3 p-0 pt-6">
              {NEXT_STEPS.map((label, index) => (
                <li
                  key={label}
                  className="flex items-center gap-3 rounded-[10px] border border-[#E2E8F0] px-5 py-4"
                >
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-[#EFF4FF] text-sm font-bold !leading-5 !text-[#1F6FEB]">
                    {index + 1}
                  </span>

                  <span className="text-base font-semibold !leading-6 !text-[#0F172A]">
                    {label}
                  </span>
                </li>
              ))}
            </ol>

            <button
              type="button"
              onClick={() => {
                setEmail("");
                setFullName("");
                setPassword("");
                setOrg("");
                setCountry("");
                setCurrency("");
                setOtp(Array(OTP_LENGTH).fill(""));
                go("account");
              }}
              className="pt-6 text-base font-semibold !leading-6 !text-[#64748B] hover:underline"
            >
              Start the flow again
            </button>
          </div>
        )}
      </div>

      {/* Secure footer strip — only on the first screen, as in the design */}
      {screen === "account" && (
        <div className="flex items-center justify-center gap-2 border-t border-[#EEF2F7] bg-[#F8FAFC] px-5 py-3.5">
          <FooterLockIcon className="size-3.5 shrink-0" />
          <span className="text-xs font-normal !leading-5 !text-[#64748B]">
            Your information is secure and will never be shared.
          </span>
        </div>
      )}
    </div>
  );
}
