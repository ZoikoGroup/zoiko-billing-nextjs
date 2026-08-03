"use client";

import React, { useState } from "react";

interface VideoChapter {
  id: string;
  number: string;
  title: string;
  timestamp: string;
  seconds: number;
}

const chapters: VideoChapter[] = [
  { id: "chap-1", number: "01", title: "Customer setup", timestamp: "0:00", seconds: 0 },
  { id: "chap-2", number: "02", title: "Charge creation", timestamp: "0:24", seconds: 24 },
  { id: "chap-3", number: "03", title: "Approval", timestamp: "0:51", seconds: 51 },
  { id: "chap-4", number: "04", title: "Invoice delivery", timestamp: "1:18", seconds: 78 },
  { id: "chap-5", number: "05", title: "Payment status", timestamp: "1:47", seconds: 107 },
  { id: "chap-6", number: "06", title: "Outstanding balance", timestamp: "2:12", seconds: 132 },
  { id: "chap-7", number: "07", title: "Reporting", timestamp: "2:36", seconds: 156 },
];

interface EvidenceDemoSectionProps {
  onViewCustomerStories?: () => void;
  onChapterSelect?: (chapter: VideoChapter) => void;
  onPlayVideo?: () => void;
}

export function EvidenceDemoSection({
  onViewCustomerStories,
  onChapterSelect,
  onPlayVideo,
}: EvidenceDemoSectionProps) {
  const [activeChapterId, setActiveChapterId] = useState<string>("chap-1");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handleChapterClick = (chapter: VideoChapter) => {
    setActiveChapterId(chapter.id);
    onChapterSelect?.(chapter);
  };

  const handlePlayClick = () => {
    setIsPlaying(!isPlaying);
    onPlayVideo?.();
  };

  return (
    <section className="mx-auto w-full max-w-[1440px] overflow-hidden bg-slate-50 px-4 py-16 font-['Segoe_UI',sans-serif] text-zinc-900 transition-colors duration-200 dark:bg-slate-950 dark:text-white sm:px-8 md:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto flex w-full max-w-[1220px] flex-col gap-10 lg:gap-12">
        <div className="flex max-w-[940px] flex-col items-start gap-5">
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-4 shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" />
            <span className="font-['IBM_Plex_Mono',monospace] text-xs font-medium uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Evidence
            </span>
          </div>

          <h2 className="text-3xl font-medium leading-[1.12] tracking-tight text-zinc-900 dark:text-white sm:text-4xl lg:text-5xl font-['Plus_Jakarta_Sans',sans-serif]">
            See the complete billing workflow in action.
          </h2>

          <p className="max-w-[530px] text-base font-normal leading-8 text-stone-600 dark:text-slate-300">
            A guided demonstration captured from an approved environment. Replaced by named case
            studies once verified customer evidence clears publication.
          </p>
        </div>

        <div className="flex w-full flex-col items-stretch gap-6 pt-4 lg:flex-row">
          <div className="flex w-full shrink-0 flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-neutral-50 dark:border-slate-800 dark:bg-slate-900 lg:w-96">
            <div className="border-b border-zinc-200/80 bg-zinc-100/80 px-5 py-4 dark:border-slate-800 dark:bg-slate-800/80">
              <span className="font-['IBM_Plex_Mono',monospace] text-[10px] font-normal uppercase tracking-wide text-stone-500 dark:text-slate-400">
                Chapters
              </span>
            </div>

            <div className="flex flex-col divide-y divide-zinc-200/80 dark:divide-slate-800">
              {chapters.map((chapter) => {
                const isActive = activeChapterId === chapter.id;

                return (
                  <button
                    key={chapter.id}
                    type="button"
                    onClick={() => handleChapterClick(chapter)}
                    className={`flex h-12 w-full cursor-pointer items-center justify-between px-5 text-left transition-colors ${
                      isActive
                        ? "bg-blue-50/80 font-semibold text-blue-600 dark:bg-blue-950/40 dark:text-blue-400"
                        : "text-zinc-900 hover:bg-zinc-100 dark:text-slate-200 dark:hover:bg-slate-800/50"
                    }`}
                  >
                    <span className="w-6 shrink-0 font-['IBM_Plex_Mono',monospace] text-[10px] font-normal text-stone-500 dark:text-slate-400">
                      {chapter.number}
                    </span>
                    <span className="flex-1 truncate px-2 font-['Segoe_UI'] text-sm font-normal">
                      {chapter.title}
                    </span>
                    <span className="shrink-0 font-['IBM_Plex_Mono',monospace] text-xs font-normal text-stone-500 dark:text-slate-400">
                      {chapter.timestamp}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-auto border-t border-zinc-200/60 p-5 dark:border-slate-800/80">
              <button
                type="button"
                onClick={onViewCustomerStories}
                className="inline-flex cursor-pointer items-center gap-2 text-base font-normal text-blue-600 transition-colors hover:underline dark:text-blue-400"
              >
                <span>View Customer Stories</span>
                <span className="font-['IBM_Plex_Mono',monospace] font-bold">-&gt;</span>
              </button>
            </div>
          </div>

          <div className="relative flex min-h-[380px] flex-1 flex-col justify-between overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-sky-950 via-slate-900 to-slate-950 p-6 shadow-2xl sm:min-h-[480px] sm:p-8 lg:min-h-[500px]">
            <div className="self-start">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 backdrop-blur-md">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span className="font-['IBM_Plex_Mono',monospace] text-[10px] font-normal uppercase tracking-wide text-emerald-400">
                  Launch state - guided demonstration
                </span>
              </div>
            </div>

            <div className="my-auto flex items-center justify-center self-center">
              <button
                type="button"
                onClick={handlePlayClick}
                aria-label={isPlaying ? "Pause demonstration video" : "Play demonstration video"}
                className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-blue-600 shadow-[0_12px_34px_rgba(0,0,0,0.4)] transition-transform hover:scale-105 active:scale-95 hover:bg-blue-500"
              >
                <svg className="h-5 w-5 translate-x-0.5 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>

            <div className="z-10 flex flex-col gap-1">
              <h3 className="text-base font-semibold leading-tight text-white sm:text-lg font-['Plus_Jakarta_Sans',sans-serif]">
                The complete billing workflow
              </h3>
              <p className="font-['IBM_Plex_Mono',monospace] text-xs font-normal tracking-wide text-emerald-400/90">
                3:00 - silent capture - transcript available
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
