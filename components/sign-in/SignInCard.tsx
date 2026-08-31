"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import {
  BackChevronIcon,
  EyeIcon,
  GoogleIcon,
  LockIcon,
  MailIcon,
  MicrosoftIcon,
  OrgIcon,
  OtpShieldIcon,
  SuccessBadgeIcon,
} from "./icons";

export type Step = "email" | "password" | "otp" | "done";

const OTP_LENGTH = 6;

/**
 * Seeded when a later step is opened directly via ?step=, so the preview has
 * an email to display. Normal use always carries the address typed in step 1.
 */
const PREVIEW_EMAIL = "jimmyjostar@example.com";

const inputBase =
  "min-h-12 w-full rounded-[10px] border bg-white py-3.5 pr-3.5 text-base font-normal !text-[#0F172A] outline-none placeholder:!text-[#A9B4C4]";

const providerButton =
  "flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-[#CBD5E1] bg-white px-1.5 py-2.5 text-sm font-semibold !leading-5 !text-[#1E293B] transition hover:bg-[#F8FAFC]";

/** Masks all but the last part of the local segment: j****r@example.com */
function maskEmail(email: string) {
  const [local, domain] = email.split("@");
  if (!domain) return email;
  const keep = local.slice(-6);
  return `${"*".repeat(Math.max(local.length - keep.length, 0))}${keep}@${domain}`;
}

export default function SignInCard({
  initialStep = "email",
}: {
  initialStep?: Step;
}) {
  const [step, setStep] = useState<Step>(initialStep);
  const [email, setEmail] = useState(
    initialStep === "email" ? "" : PREVIEW_EMAIL
  );
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const [error, setError] = useState<string | null>(null);

  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (step === "otp") otpRefs.current[0]?.focus();
  }, [step]);

  const goTo = (next: Step) => {
    setError(null);
    setStep(next);
  };

  const submitEmail = () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Enter a valid work email address.");
      return;
    }
    goTo("password");
  };

  const submitPassword = () => {
    if (!password) {
      setError("Enter your password.");
      return;
    }
    goTo("otp");
  };

  const submitOtp = () => {
    if (otp.some((digit) => digit === "")) {
      setError(`Enter all ${OTP_LENGTH} digits.`);
      return;
    }
    goTo("done");
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
    if (event.key === "ArrowLeft" && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
    if (event.key === "ArrowRight" && index < OTP_LENGTH - 1) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  /** Lets a pasted code fill every box at once. */
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

  const backButton = (onClick: () => void) => (
    <button
      type="button"
      onClick={onClick}
      className="mb-4 inline-flex items-center gap-1 text-sm font-semibold !leading-6 !text-black/60 hover:underline"
    >
      <BackChevronIcon className="size-6" />
      Back
    </button>
  );

  return (
    <div className="w-full rounded-2xl border border-[#E2E8F0] bg-white px-6 pb-10 pt-8 shadow-[0px_10px_30px_-14px_rgba(15,23,42,0.16),0px_1px_2px_0px_rgba(15,23,42,0.04)] sm:px-8">
      {/* ---------- Step 1: email + providers ---------- */}
      {step === "email" && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitEmail();
          }}
          noValidate
        >
          <h2 className="!m-0 !text-2xl !font-extrabold !leading-9 !tracking-normal !text-[#0F172A]">
            Welcome back
          </h2>

          <p className="m-0 pt-1.5 text-sm font-normal !leading-5 !text-[#64748B]">
            Sign in to your Zoiko Billing workspace.
          </p>

          <div className="flex flex-col gap-1.5 pb-3 pt-4">
            <label
              htmlFor="signin-email"
              className="text-sm font-semibold !leading-5 !text-[#0F172A]"
            >
              Work email
            </label>

            <div className="relative">
              <MailIcon className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2" />
              <input
                id="signin-email"
                type="email"
                autoComplete="email"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError(null);
                }}
                aria-invalid={Boolean(error)}
                className={`${inputBase} border-[#1F6FEB] pl-11 shadow-[0px_0px_0px_3px_rgba(37,99,235,0.15)]`}
              />
            </div>

            {error && (
              <span className="text-xs font-medium !text-[#DC2626]">
                {error}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="flex min-h-11 w-full items-center justify-center rounded-lg bg-[#1F6FEB] px-5 py-2 text-base font-semibold !leading-6 !text-white shadow-[0px_1px_2px_0px_rgba(29,78,216,0.30)] transition hover:bg-[#1E40AF]"
          >
            Continue
          </button>

          <div className="flex items-center gap-3 py-2 pt-4">
            <span className="h-px flex-1 bg-[#E2E8F0]" />
            <span className="text-xs font-normal !leading-5 !text-[#94A3B8]">
              or
            </span>
            <span className="h-px flex-1 bg-[#E2E8F0]" />
          </div>

          <div className="flex flex-col gap-2.5 pt-3.5">
            <button type="button" className={providerButton}>
              <GoogleIcon className="size-4" />
              Sign in with Google
            </button>

            <button type="button" className={providerButton}>
              <MicrosoftIcon className="size-4" />
              Sign in with Microsoft
            </button>

            <button type="button" className={providerButton}>
              <OrgIcon className="size-4" />
              Sign in with your organization
            </button>
          </div>

          <p className="m-0 pt-4 text-center text-sm font-normal !leading-5 !text-[#64748B]">
            New to Zoiko Billing?{" "}
            <Link href="/book-demo" className="!text-[#1F6FEB] hover:underline">
              Create an account
            </Link>
          </p>
        </form>
      )}

      {/* ---------- Step 2: password ---------- */}
      {step === "password" && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitPassword();
          }}
          noValidate
        >
          {backButton(() => goTo("email"))}

          <h2 className="!m-0 pt-4 !text-2xl !font-extrabold !leading-9 !tracking-normal !text-[#0F172A]">
            Welcome back
          </h2>

          <p className="m-0 pt-1.5 text-sm font-normal !leading-5 !text-[#64748B]">
            {email}{" "}
            <button
              type="button"
              onClick={() => goTo("email")}
              className="pl-2 text-sm font-semibold !text-[#1F6FEB] hover:underline"
            >
              Change
            </button>
          </p>

          <div className="flex flex-col gap-1.5 pb-3 pt-4">
            <label
              htmlFor="signin-password"
              className="text-sm font-semibold !leading-5 !text-[#0F172A]"
            >
              Password
            </label>

            <div className="relative">
              <LockIcon className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2" />
              <input
                id="signin-password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(null);
                }}
                aria-invalid={Boolean(error)}
                className={`${inputBase} border-[#1F6FEB] pl-11 pr-11 shadow-[0px_0px_0px_3px_rgba(37,99,235,0.15)]`}
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-3.5 top-1/2 -translate-y-1/2"
              >
                <EyeIcon className="size-4" />
              </button>
            </div>

            {error && (
              <span className="text-xs font-medium !text-[#DC2626]">
                {error}
              </span>
            )}
          </div>

          <div className="flex justify-end pb-6">
            <Link
              href="/account-access"
              className="text-base font-semibold !leading-6 !text-[#1F6FEB] hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="flex min-h-11 w-full items-center justify-center rounded-lg bg-[#1F6FEB] px-5 py-2 text-base font-semibold !leading-6 !text-white shadow-[0px_1px_2px_0px_rgba(29,78,216,0.30)] transition hover:bg-[#1E40AF]"
          >
            Sign In
          </button>
        </form>
      )}

      {/* ---------- Step 3: one-time code ---------- */}
      {step === "otp" && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitOtp();
          }}
          noValidate
        >
          {backButton(() => goTo("password"))}

          <div className="flex flex-col items-center pt-4 text-center">
            <span className="flex size-14 items-center justify-center rounded-2xl bg-[#EFF4FF]">
              <OtpShieldIcon className="size-8" />
            </span>

            <h2 className="!m-0 pt-4 !text-2xl !font-extrabold !leading-9 !tracking-normal !text-[#0F172A]">
              Welcome back
            </h2>

            <p className="m-0 pt-1.5 text-sm font-normal !leading-5 !text-[#64748B]">
              Enter the {OTP_LENGTH}-digit code sent to your email ending in{" "}
              {maskEmail(email)}
            </p>
          </div>

          <div
            className="flex w-full justify-center gap-1.5 pt-5 sm:gap-3"
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
                className={`h-12 min-w-0 flex-1 rounded-[10px] border bg-white text-center text-lg font-bold !text-[#0F172A] outline-none sm:h-[52px] sm:max-w-[52px] ${
                  digit
                    ? "border-[#1F6FEB] shadow-[0px_0px_0px_3px_rgba(37,99,235,0.15)]"
                    : "border-[#DBE6FE]"
                } focus:border-[#1F6FEB] focus:shadow-[0px_0px_0px_3px_rgba(37,99,235,0.15)]`}
              />
            ))}
          </div>

          <div className="flex justify-end pt-3">
            <button
              type="button"
              className="text-base font-semibold !leading-6 !text-[#1F6FEB] hover:underline"
            >
              Resend Code
            </button>
          </div>

          {error && (
            <p className="m-0 pt-2 text-center text-xs font-medium !text-[#DC2626]">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="mt-5 flex min-h-12 w-full items-center justify-center rounded-lg bg-[#1F6FEB] px-5 py-2 text-base font-semibold !leading-6 !text-white shadow-[0px_1px_2px_0px_rgba(29,78,216,0.30)] transition hover:bg-[#1E40AF]"
          >
            Verify
          </button>
        </form>
      )}

      {/* ---------- Step 4: signed in ---------- */}
      {step === "done" && (
        <div className="flex flex-col items-center gap-3 py-6 text-center">
          <SuccessBadgeIcon className="size-[72px]" />

          <h2 className="!m-0 pt-2 !text-2xl !font-extrabold !leading-9 !tracking-normal !text-[#0F172A]">
            You&apos;re signed in
          </h2>

          <p className="m-0 text-base font-normal !leading-6 !text-[#64748B]">
            Taking you to {email.split("@")[0] || "your workspace"}
          </p>

          <Link
            href="/"
            className="mt-4 flex min-h-12 w-full items-center justify-center rounded-lg bg-[#1F6FEB] px-5 text-base font-semibold !leading-6 !text-white shadow-[0px_1px_2px_0px_rgba(29,78,216,0.30)] transition hover:bg-[#1E40AF]"
          >
            Go to Dashboard
          </Link>

          <button
            type="button"
            onClick={() => {
              setEmail("");
              setPassword("");
              setOtp(Array(OTP_LENGTH).fill(""));
              goTo("email");
            }}
            className="pt-2 text-base font-semibold !leading-6 !text-[#1F6FEB] hover:underline"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
