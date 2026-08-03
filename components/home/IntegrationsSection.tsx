import React from 'react';

export default function IntegrationsSection() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Main Dark Card Container */}
        <div className="w-full bg-sky-950 rounded-3xl p-8 sm:p-12 lg:p-16 flex flex-col items-center text-center space-y-10 shadow-xl overflow-hidden">
          {/* Header Block */}
          <div className="flex flex-col items-center space-y-4 max-w-4xl mx-auto">
            {/* Category Tag */}
            <div className="flex items-center gap-3">
              <span className="w-4 h-0.5 bg-blue-600 rounded-full" />
              <span className="text-blue-600 text-xs font-mono font-medium uppercase tracking-wider">
                Integrations and developers
              </span>
            </div>

            {/* Title */}
            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
              Connect billing to the systems your business already uses.
            </h2>

            {/* Subtitle / Description */}
            <p className="text-emerald-100/80 text-base sm:text-lg font-normal leading-relaxed max-w-2xl">
              Approved connectors, APIs, and webhooks for customer, payment,
              accounting, tax, commerce, and usage systems.
            </p>
          </div>

          {/* Graphic / Media Placeholder */}
          <div className="w-full max-w-5xl flex justify-center pt-2">
            <img
              src="/images/home/frame-3.png"
              alt="Integrations and Developer Platform Illustration"
              className="w-full h-auto max-h-[480px] rounded-2xl border border-white/10 shadow-2xl object-cover"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              className="px-5 py-2.5 bg-white text-sky-950 font-medium text-base rounded-md hover:bg-slate-100 transition-colors shadow-sm"
            >
              Explore Integrations
            </button>
            <button
              type="button"
              className="px-5 py-2.5 bg-transparent text-white font-normal text-base rounded-md border border-white/30 hover:bg-white/10 transition-colors"
            >
              Read API Documentation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}