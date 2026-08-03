"use client"
import React, { useState } from 'react';

interface Chapter {
  id: string;
  number: string;
  title: string;
  timestamp: string;
}

const chapters: Chapter[] = [
  { id: 'ch-1', number: '01', title: 'Customer setup', timestamp: '0:00' },
  { id: 'ch-2', number: '02', title: 'Charge creation', timestamp: '0:24' },
  { id: 'ch-3', number: '03', title: 'Approval', timestamp: '0:51' },
  { id: 'ch-4', number: '04', title: 'Invoice delivery', timestamp: '1:18' },
  { id: 'ch-5', number: '05', title: 'Payment status', timestamp: '1:47' },
  { id: 'ch-6', number: '06', title: 'Outstanding balance', timestamp: '2:12' },
  { id: 'ch-7', number: '07', title: 'Reporting', timestamp: '2:36' },
];

export default function EvidenceWorkflowSection() {
  const [activeChapter, setActiveChapter] = useState<string>('ch-1');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  return (
    <section className="w-full bg-slate-50 py-16 px-4 sm:px-6 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="flex flex-col space-y-4 max-w-4xl">
          {/* Badge */}
          <div className="flex items-center gap-3">
            <span className="w-4 h-0.5 bg-blue-600 rounded-full" />
            <span className="text-blue-600 text-xs font-mono font-medium uppercase tracking-wider">
              Evidence
            </span>
          </div>

          {/* Title */}
          <h2 className="text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
            See the complete billing workflow in action.
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 text-base leading-relaxed max-w-2xl">
            A guided demonstration captured from an approved environment. Replaced
            by named case studies once verified customer evidence clears
            publication.
          </p>
        </div>

        {/* Video Player & Chapters Sidebar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Video Demo Viewport */}
          <div className="lg:col-span-8 min-h-[380px] sm:min-h-[480px] bg-gradient-to-br from-sky-950 via-slate-900 to-slate-950 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-xl border border-sky-900/40">
            {/* Top Status Tag */}
            <div className="flex items-center self-start gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-emerald-400 text-[10px] font-mono uppercase tracking-wider">
                Launch state · guided demonstration
              </span>
            </div>

            {/* Play Button Overlay */}
            <div className="my-auto flex justify-center py-12">
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center shadow-2xl shadow-blue-600/50 transition-all transform hover:scale-105 active:scale-95 focus:outline-hidden"
                aria-label={isPlaying ? 'Pause Demo Video' : 'Play Demo Video'}
              >
                {isPlaying ? (
                  <div className="flex gap-1.5">
                    <span className="w-1.5 h-6 bg-white rounded-xs" />
                    <span className="w-1.5 h-6 bg-white rounded-xs" />
                  </div>
                ) : (
                  <div className="w-0 h-0 border-y-[10px] border-y-transparent border-l-[18px] border-l-white ml-1" />
                )}
              </button>
            </div>

            {/* Video Footer Metadata */}
            <div className="space-y-1">
              <h3 className="text-white text-lg font-semibold">
                The complete billing workflow
              </h3>
              <p className="text-emerald-400 text-xs font-mono tracking-wide">
                3:00 · silent capture · transcript available
              </p>
            </div>
          </div>

          {/* Chapters Sidebar Panel */}
          <div className="lg:col-span-4 bg-neutral-50 rounded-3xl border border-zinc-200 p-6 flex flex-col justify-between shadow-xs">
            <div className="space-y-4">
              {/* Sidebar Header */}
              <div className="pb-3 border-b border-zinc-200">
                <span className="text-gray-500 text-[10px] font-mono uppercase tracking-wide">
                  Chapters
                </span>
              </div>

              {/* Chapters Interactive List */}
              <div className="divide-y divide-zinc-200/80">
                {chapters.map((ch) => {
                  const isActive = activeChapter === ch.id;
                  return (
                    <button
                      key={ch.id}
                      type="button"
                      onClick={() => setActiveChapter(ch.id)}
                      className={`w-full py-3 px-2 flex items-center justify-between text-left transition-colors rounded-lg ${
                        isActive
                          ? 'bg-blue-50/70 font-semibold'
                          : 'hover:bg-zinc-100/70'
                      }`}
                    >
                      <span
                        className={`text-[10px] font-mono w-6 ${
                          isActive ? 'text-blue-600' : 'text-gray-400'
                        }`}
                      >
                        {ch.number}
                      </span>
                      <span
                        className={`text-sm flex-1 mx-3 ${
                          isActive ? 'text-blue-600' : 'text-zinc-900'
                        }`}
                      >
                        {ch.title}
                      </span>
                      <span className="text-xs font-mono text-gray-400">
                        {ch.timestamp}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* External Link Section */}
            <div className="pt-6 border-t border-zinc-200/80 mt-4">
              <a
                href="#stories"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-base font-normal transition-colors group"
              >
                <span>View Customer Stories</span>
                <span className="font-mono text-lg transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}