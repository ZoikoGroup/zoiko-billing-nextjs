'use client';

import { useState } from "react";
import Link from "next/link";

const collectionStates = [
  { id: "no-upcoming", label: "No upcoming events" },
  { id: "upcoming-inventory", label: "Upcoming inventory" },
  { id: "no-results", label: "No filter results" },
  { id: "canceled-rescheduled", label: "Canceled & rescheduled" },
  { id: "error", label: "Error" },
];

export default function WebinarEventsHeroSection() {
  const [activeState, setActiveState] = useState<string>("no-upcoming");
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <section className="w-full bg-white py-10 lg:py-20" id="hero">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-8 lg:px-12">
        
        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:flex)                              */}
        {/* ========================================================================= */}
        <div className="hidden lg:flex flex-row items-center gap-14 justify-between">
          
          {/* Left Column: Text & Actions */}
          <div className="flex w-1/2 flex-col items-start gap-5 max-w-[600px] text-left">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5">
              <span className="h-px w-5 bg-slate-400" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                WEBINAR &amp; EVENTS
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.14] tracking-tight text-slate-900">
              Learn billing operations <br />
              <span className="text-[#1D70F5]">live, or on your own schedule.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm font-normal leading-relaxed text-slate-500 max-w-[540px]">
              Explore approved Zoiko Billing webinars and events with current schedule, authoritative
              time zone, confirmed speakers, accessibility information, registration state and on-demand
              availability — each state truthful and independently governed.
            </p>

            {/* CTAs */}
            <div className="flex w-full flex-wrap items-center gap-3 pt-1 sm:w-auto">
              <Link
                href="#event-state-machine"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#1D70F5] px-6 text-center text-xs sm:text-sm font-semibold !text-white shadow-md shadow-blue-500/25 transition hover:bg-blue-600"
              >
                <span className="text-white font-semibold">Explore events</span>
              </Link>

              <Link
                href="#browse-topics"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-center text-xs sm:text-sm font-semibold !text-slate-900 transition hover:bg-slate-50"
              >
                <span className="text-slate-900 font-semibold">Browse by topic</span>
              </Link>
            </div>

            {/* Notice Callout Box */}
            <div className="relative overflow-hidden rounded-xl border border-slate-200/90 bg-white p-4 text-xs text-slate-500 max-w-[540px] mt-2">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1D70F5]" />
              <p className="pl-2 font-normal leading-relaxed">
                Every published event exposes its current state, schedule with time zone, confirmed
                speakers only, and concrete accessibility features — never a generic accessible-event
                badge.
              </p>
            </div>

          </div>

          {/* Right Column: Hero Graphic Image wae1.png */}
          <div className="relative flex w-1/2 justify-end">
            <div className="relative w-full max-w-[580px]">
              <img
                src="/images/webinar-and-events/wae1.png"
                alt="Learn billing operations live, or on your own schedule"
                className="w-full h-auto object-cover rounded-2xl block shadow-sm border border-slate-100"
              />
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787834423502.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden text-left w-full max-w-[640px] mx-auto">
          
          {/* Breadcrumb */}
          <nav className="text-xs text-slate-500 font-normal mb-3 flex items-center gap-1.5 flex-wrap">
            <Link href="/" className="hover:text-slate-900 transition">Home</Link>
            <span>/</span>
            <Link href="/resource-center" className="hover:text-slate-900 transition">Resources</Link>
            <span>/</span>
            <span className="font-bold text-slate-900">Webinar &amp; Events</span>
          </nav>

          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-2">
            <span className="h-px w-4 bg-slate-400" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
              WEBINAR &amp; EVENTS
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight text-slate-900 mb-3">
            Learn billing operations{" "}
            <span className="text-[#1D70F5]">live, or on your own schedule.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm font-normal leading-relaxed text-slate-600 mb-5">
            Explore approved Zoiko Billing webinars and events with current schedule, authoritative time zone, confirmed speakers, accessibility information, registration state and on-demand availability — each state truthful and independently governed.
          </p>

          {/* CTAs Row */}
          <div className="flex flex-wrap items-center gap-2.5 mb-2">
            <Link
              href="#event-state-machine"
              className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#1D70F5] px-4 py-2 text-center text-xs font-semibold !text-white shadow-md shadow-blue-500/25"
            >
              <span className="text-white font-semibold">Explore events</span>
            </Link>

            <Link
              href="#browse-topics"
              className="inline-flex min-h-10 items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-center text-xs font-semibold !text-slate-900"
            >
              <span className="text-slate-900 font-semibold">Browse by topic</span>
            </Link>
          </div>

          {/* Demo Link */}
          <div className="mb-4">
            <Link
              href="#book-demo"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#1D70F5] hover:underline"
            >
              Book a demo →
            </Link>
          </div>

          {/* Notice Callout Box */}
          <div className="relative overflow-hidden rounded-xl border border-slate-200/90 bg-white p-4 text-[11px] text-slate-500 mb-5">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1D70F5]" />
            <p className="pl-2 font-normal leading-relaxed">
              Every published event exposes its current state, schedule with time zone, confirmed speakers only, and concrete accessibility features — never a generic accessible-event badge.
            </p>
          </div>

          {/* Interactive Search and Collection State Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-sm text-left mb-4">
            
            <h2 className="text-xs font-bold text-slate-900 mb-1.5">
              Search events
            </h2>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search approved events by topic, audience, format, or session theme..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-xs text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <p className="text-[10px] text-slate-400 font-normal leading-relaxed mt-1.5 mb-4">
              Do not enter account numbers, customer personal data, payment data or credentials. Search covers approved published events only.
            </p>

            {/* COLLECTION STATE Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 my-3 pb-3 border-b border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mr-1">
                COLLECTION STATE
              </span>
              {collectionStates.map((st) => {
                const isActive = activeState === st.id;
                return (
                  <button
                    key={st.id}
                    type="button"
                    onClick={() => setActiveState(st.id)}
                    className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border transition ${
                      isActive
                        ? "bg-blue-50 text-blue-700 border-blue-200/80"
                        : "bg-white text-slate-600 border-slate-200/80 hover:bg-slate-50"
                    }`}
                  >
                    {st.label}
                  </button>
                );
              })}
            </div>

            {/* Empty State Content */}
            <div className="pt-1">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1.5">
                No current upcoming Zoiko Billing events are published.
              </h3>
              <p className="text-[11px] text-slate-500 font-normal leading-relaxed mb-4">
                Events appear here once schedule, speakers, registration route and accessibility information are approved in the Event Registry. Rather than list a placeholder session or a date that may move, the collection stays empty and routes you to material available now.
              </p>

              {/* 4 Handoff Action Pills */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Link
                  href="/resource-center"
                  className="inline-flex items-center justify-center rounded-full bg-[#1D70F5] px-3.5 py-1.5 text-center text-xs font-semibold !text-white shadow-sm"
                >
                  <span className="text-white font-semibold">Billing Guides</span>
                </Link>

                <Link
                  href="/reports-and-insights"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-center text-xs font-semibold !text-slate-900"
                >
                  <span className="text-slate-900 font-semibold">Reports &amp; Insights</span>
                </Link>

                <Link
                  href="/resource-center"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-center text-xs font-semibold !text-slate-900"
                >
                  <span className="text-slate-900 font-semibold">Resource Center</span>
                </Link>

                <Link
                  href="#book-demo"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-center text-xs font-semibold !text-slate-900"
                >
                  <span className="text-slate-900 font-semibold">Book a demo</span>
                </Link>
              </div>

              <p className="text-[10px] text-slate-400 font-normal leading-relaxed">
                <span className="font-bold text-slate-900">On-demand navigation is omitted, not emptied.</span> With no recorded sessions published, an on-demand section would be an empty card wall implying content that does not exist — so it does not render at all.
              </p>
            </div>

            {/* Amber Default State Callout Box inside Card */}
            <div className="rounded-xl border border-amber-200/80 bg-amber-50/70 p-3.5 text-xs text-amber-950 font-normal leading-relaxed mt-4">
              <span className="font-bold text-amber-900">An event date is a promise to be somewhere at a time.</span> That makes placeholder inventory more costly here than on most pages — someone can arrange their day around it. An empty collection with working rendering.
            </div>

          </div>

          {/* Red Event Authority Boundary Warning Box */}
          <div className="rounded-2xl border border-red-200/80 bg-red-50/70 p-4 text-xs text-red-950 font-normal leading-relaxed mb-6">
            <span className="font-bold text-red-900">Event authority boundary.</span> The Event Registry is the public authority for title, type, date and time, time zone, state, speakers, registration destination, accessibility information, recording state and related assets. This page invents no event inventory, speaker commitment, registration platform behavior, calendar-download capability, attendee limit, waitlist, ticketing, streaming platform, certificate, recording, transcript or product-launch claim. Product, Pricing, Documentation, Developers, Trust and System Status remain authoritative for their own domains.
          </div>

        </div>

      </div>
    </section>
  );
}
