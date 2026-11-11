"use client";

import { Barlow_Condensed } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";

import { DISPLAY, OFFER_END, OFFER_START } from "./shared";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
  variable: "--font-barlow",
});

const OFFER_HREF = "/black-friday";
const OPEN_DELAY_MS = 1200;

/** Reset on every full page load (refresh), so the popup opens once per load of the home page. */
let shownThisPageLoad = false;
const CLOSE_ANIMATION_MS = 220;

/** Monthly list prices mirror OfferPricing.tsx; 25% off. */
const plans = [
  { name: "Essentials", list: 29 },
  { name: "Professional", list: 79, popular: true },
  { name: "Business", list: 249 },
] as const;

const money = (n: number) => `$${Number.isInteger(n) ? n : n.toFixed(2)}`;

function subscribe(onTick: () => void) {
  const id = window.setInterval(onTick, 1000);
  return () => window.clearInterval(id);
}
const getNowSeconds = () => Math.floor(Date.now() / 1000);
const getServerNow = () => null;

function MiniCountdown() {
  const nowSeconds = useSyncExternalStore(subscribe, getNowSeconds, getServerNow);
  if (nowSeconds === null) return null;

  const now = nowSeconds * 1000;
  const started = now >= OFFER_START;
  const total = Math.max(0, Math.floor(((started ? OFFER_END : OFFER_START) - now) / 1000));
  const units = [
    { label: "Days", value: Math.floor(total / 86400) },
    { label: "Hrs", value: Math.floor((total % 86400) / 3600) },
    { label: "Min", value: Math.floor((total % 3600) / 60) },
    { label: "Sec", value: total % 60 },
  ];

  return (
    <div className="flex flex-col gap-2">
      <p className="!mb-0 text-[11px] font-semibold uppercase !leading-4 tracking-[0.22em] !text-[#6fe3f2]">
        {started ? "Offer ends in" : "Offer starts in"}
      </p>
      <div className="flex gap-2" role="timer" aria-label={started ? "Time until offer ends" : "Time until offer starts"}>
        {units.map(({ label, value }) => (
          <div
            key={label}
            className="flex min-w-[54px] flex-col items-center rounded-md bg-[#0c2340] px-2 py-1.5 outline outline-1 outline-offset-[-1px] outline-[#163a5f]"
          >
            <span className={`text-2xl font-bold leading-7 tabular-nums text-white ${DISPLAY}`}>
              {String(value).padStart(2, "0")}
            </span>
            <span className="text-[10px] font-semibold uppercase leading-3 tracking-wider text-[#8aa3c4]">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BlackFridayPopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  const onHomePage = pathname === "/";

  // Home page only: open after a short delay on every page load (refresh), while the campaign is running.
  useEffect(() => {
    if (!onHomePage || shownThisPageLoad || Date.now() >= OFFER_END) return;
    const id = window.setTimeout(() => {
      shownThisPageLoad = true;
      previousFocus.current = document.activeElement as HTMLElement | null;
      setOpen(true);
    }, OPEN_DELAY_MS);
    return () => window.clearTimeout(id);
  }, [onHomePage]);

  const close = useCallback(() => {
    setClosing(true);
    window.setTimeout(() => {
      setOpen(false);
      setClosing(false);
      previousFocus.current?.focus?.();
    }, CLOSE_ANIMATION_MS);
  }, []);

  // Escape to close, simple focus trap, and body scroll lock while open.
  useEffect(() => {
    if (!open) return;
    closeButtonRef.current?.focus();
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusables = dialogRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [open, close]);

  if (!open || !onHomePage) return null;

  return (
    <div
      className={`${barlowCondensed.variable} fixed inset-0 z-[2147483100] flex items-center justify-center overflow-y-auto p-4 sm:p-6 ${
        closing ? "bf-popup-out" : ""
      }`}
    >
      {/* Backdrop */}
      <div aria-hidden onClick={close} className="bf-popup-backdrop absolute inset-0 bg-[#010814]/80 backdrop-blur-sm" />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="bf-popup-title"
        aria-describedby="bf-popup-desc"
        className="bf-popup-panel relative my-auto grid w-full max-w-[860px] overflow-hidden rounded-2xl bg-[#0a1730] text-white shadow-[0_40px_90px_rgba(0,0,0,0.6)] outline outline-1 outline-offset-[-1px] outline-[#163a5f] md:grid-cols-[0.95fr_1.1fr]"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={close}
          aria-label="Close Black Friday offer"
          className="absolute right-3 top-3 z-20 flex size-10 items-center justify-center rounded-full bg-[#010814]/70 text-white ring-1 ring-white/20 transition hover:rotate-90 hover:bg-[#00b8d6] hover:text-[#082f49] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00b8d6]"
        >
          <X aria-hidden className="size-5" />
        </button>

        {/* Visual side */}
        <div className="relative h-48 overflow-hidden bg-[#010814] sm:h-56 md:h-auto md:min-h-[520px]">
          <Image
            src="/images/black-friday/hero-invoices-desk.webp"
            alt=""
            fill
            sizes="(max-width: 767px) 100vw, 410px"
            className="bf-popup-zoom object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#010814] via-[#010814]/40 to-transparent md:bg-gradient-to-r md:from-transparent md:via-[#010814]/30 md:to-[#0a1730]" />

          {/* Decorative rings */}
          <span aria-hidden className="absolute -left-6 top-8 size-16 rounded-full border-[10px] border-[#00b8d6]/80" />
          <span aria-hidden className="absolute -bottom-10 left-1/3 hidden size-28 rounded-full bg-[#7fe3f5]/80 md:block" />
          <span aria-hidden className="absolute right-8 top-1/4 hidden size-6 rounded-full border-[6px] border-[#082f49] md:block" />

          {/* Spinning 25% badge */}
          <div className="absolute bottom-4 right-4 md:bottom-auto md:right-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
            <div className="bf-popup-badge relative flex size-28 flex-col items-center justify-center rounded-full bg-[#00b8d6] text-[#082f49] shadow-[0_18px_40px_rgba(1,8,20,0.5)] outline-[8px] outline-offset-[-8px] outline-[#010814] md:size-44">
              <span aria-hidden className="bf-popup-ring absolute inset-[-10px] rounded-full border-2 border-dashed border-[#00b8d6]/70" />
              <span className={`text-xs font-bold uppercase tracking-[0.2em] md:text-base ${DISPLAY}`}>Save</span>
              <span className={`text-5xl font-bold leading-none md:text-7xl ${DISPLAY}`}>25%</span>
              <span className={`text-sm font-bold uppercase tracking-[0.25em] md:text-xl ${DISPLAY}`}>Off</span>
            </div>
          </div>

          <p
            aria-hidden
            className={`absolute left-4 top-4 rounded-full bg-[#010814]/70 px-3 py-1 text-xs font-bold uppercase tracking-[0.25em] text-[#6fe3f2] ring-1 ring-[#00b8d6]/40 md:left-6 md:top-6 ${DISPLAY}`}
          >
            Limited time
          </p>
        </div>

        {/* Content side */}
        <div className="relative flex flex-col gap-5 px-6 pb-7 pt-6 sm:px-8 md:py-10">
          <p className="!mb-0 text-xs font-semibold uppercase !leading-5 tracking-[0.3em] !text-[#a9bfdc]">
            Black Friday 2026 · Through Cyber Monday
          </p>

          <div>
            <h2
              id="bf-popup-title"
              className={`!mb-0 !text-5xl !font-bold uppercase !leading-[0.95] !tracking-wide text-white sm:!text-6xl ${DISPLAY}`}
            >
              Get <span className="text-[#00b8d6]">25% off</span>
              <br />
              all plans
            </h2>
            <p id="bf-popup-desc" className="!mb-0 !mt-3 text-[15px] !leading-6 !text-[#a9bfdc]">
              Billing, invoicing, collections and revenue operations, unified from bill generation through follow-up.
              Your revenue workflows deserve a simpler view.
            </p>
          </div>

          <ul className="flex flex-col gap-2">
            {plans.map((plan) => {
              const popular = "popular" in plan && plan.popular;
              return (
                <li
                  key={plan.name}
                  className={`flex items-center justify-between gap-3 rounded-lg px-4 py-2.5 ${
                    popular
                      ? "bg-[#0f2d55] outline outline-1 outline-[#00b8d6]"
                      : "bg-[#0c2340] outline outline-1 outline-offset-[-1px] outline-[#163a5f]"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className={`text-lg font-bold uppercase tracking-wide ${DISPLAY}`}>{plan.name}</span>
                    {popular && (
                      <span className={`rounded bg-[#00b8d6] px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#082f49] ${DISPLAY}`}>
                        Popular
                      </span>
                    )}
                  </span>
                  <span className="flex items-baseline gap-2 text-sm">
                    <span className="text-[#8aa3c4] line-through">
                      <span className="sr-only">Was </span>
                      {money(plan.list)}
                    </span>
                    <span className={`font-semibold ${popular ? "text-[#00b8d6]" : "text-white"}`}>
                      {money(plan.list * 0.75)}
                      <span className="font-normal text-[#a9bfdc]">/mo</span>
                    </span>
                  </span>
                </li>
              );
            })}
          </ul>

          <MiniCountdown />

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={OFFER_HREF}
              onClick={close}
              className={`bf-popup-cta group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full bg-[#00b8d6] px-7 py-3 text-xl font-bold uppercase leading-5 tracking-wide text-[#082f49] transition-colors hover:bg-[#19c6e2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${DISPLAY}`}
            >
              Claim 25% off
              <ArrowRight aria-hidden className="size-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <button
              type="button"
              onClick={close}
              className="min-h-11 rounded-full px-4 text-sm font-medium text-[#a9bfdc] underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              Maybe later
            </button>
          </div>

          <p className="!mb-0 text-xs !leading-5 !text-[#8aa3c4]">
            Offer runs 27–30 Nov 2026 on Essentials, Professional and Business. Offer details subject to confirmation.
          </p>
        </div>
      </div>
    </div>
  );
}
