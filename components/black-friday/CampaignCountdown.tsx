"use client";

import { useSyncExternalStore } from "react";

/** Offer window: 27–30 Nov 2026 (UTC). */
const OFFER_START = Date.UTC(2026, 10, 27);
const OFFER_END = Date.UTC(2026, 11, 1);

function subscribe(onTick: () => void) {
  const id = window.setInterval(onTick, 1000);
  return () => window.clearInterval(id);
}
const getNowSeconds = () => Math.floor(Date.now() / 1000);
const getServerNow = () => null;

function split(ms: number) {
  const total = Math.max(0, Math.floor(ms / 1000));
  return [
    { label: "Days", value: Math.floor(total / 86400) },
    { label: "Hours", value: Math.floor((total % 86400) / 3600) },
    { label: "Minutes", value: Math.floor((total % 3600) / 60) },
    { label: "Seconds", value: total % 60 },
  ];
}

export default function CampaignCountdown() {
  // null during SSR/hydration, then live seconds on the client.
  const nowSeconds = useSyncExternalStore(subscribe, getNowSeconds, getServerNow);
  const now = nowSeconds === null ? null : nowSeconds * 1000;

  const started = now !== null && now >= OFFER_START;
  const ended = now !== null && now >= OFFER_END;
  const units = split(now === null ? 0 : (started ? OFFER_END : OFFER_START) - now);
  const status = now === null ? "" : ended ? "The offer window has closed." : started ? "Offer ends in" : "Offer starts in";

  return (
    <section aria-labelledby="bf-countdown-title" className="mx-auto w-full max-w-[1140px] px-5 pt-20 sm:px-6 lg:pt-28">
      <div className="flex flex-col items-center gap-2 bg-[#00b8d6] px-5 pb-14 pt-16 text-center outline outline-1 outline-offset-[-1px] outline-[#19c6e2] sm:px-8">
        <h2
          id="bf-countdown-title"
          className="!mb-0 !text-3xl !font-medium !leading-10 !tracking-normal text-[#082f49] sm:!text-4xl"
        >
          Black Friday through Cyber Monday
        </h2>
        <p className="!mb-0 text-lg !leading-8 !text-[#082f49]">One campaign window for better billing operations.</p>
        <p aria-live="polite" className="!mb-0 min-h-6 text-sm font-semibold uppercase !leading-6 tracking-[0.2em] !text-[#082f49]/80">
          {status}
        </p>

        <div className="grid w-full max-w-[860px] grid-cols-2 gap-4 pt-6 sm:grid-cols-4 sm:gap-5">
          {units.map(({ label, value }) => (
            <div
              key={label}
              className="flex flex-col items-center bg-[#2ccce6] px-3 pb-5 pt-6 shadow-[0_12px_26px_rgba(8,35,63,0.18)]"
            >
              <span className="text-5xl font-semibold leading-[56px] tabular-nums text-[#082f49] sm:text-6xl">
                {now === null ? "--" : String(value).padStart(2, "0")}
              </span>
              <span className="pt-2.5 text-sm font-semibold leading-6 text-[#082f49]">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
