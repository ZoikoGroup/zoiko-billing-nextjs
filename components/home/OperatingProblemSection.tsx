"use client"
import React, { useState } from 'react';

interface OperatingProblem {
  id: string;
  title: string;
  description: string;
}

const problems: OperatingProblem[] = [
  {
    id: '01',
    title: 'Charges Without Consistency',
    description: 'Terms re-entered per deal, so the same agreement bills two ways.',
  },
  {
    id: '02',
    title: 'Invoices Without Visibility',
    description: 'No one can say if a document was approved, delivered, or superseded.',
  },
  {
    id: '03',
    title: 'Collections Without Coordination',
    description: 'Reminders live in inboxes. Two people chase one balance.',
  },
  {
    id: '04',
    title: 'Records Without Continuity',
    description: 'Edited files overwrite history. Audit cannot reconstruct it.',
  },
];

interface StageTab {
  id: string;
  label: string;
  title: string;
  description: string;
  imageSrc: string;
}

const stages: StageTab[] = [
  {
    id: 'Stage 01',
    label: 'Customer',
    title: 'One customer record, one set of terms',
    description:
      'Contacts, currency, terms, and entity are set once, then applied to everything issued afterwards.',
    imageSrc: '/images/home/div-rec.png',
  },
  {
    id: 'Stage 02',
    label: 'Charge',
    title: 'Standardized line items & pricing models',
    description:
      'Define clear pricing structures, versions, and quantities to prevent discrepancies across deals.',
    imageSrc: '/images/home/div-rec.png',
  },
  {
    id: 'Stage 03',
    label: 'Invoice',
    title: 'Transparent approval & issue tracking',
    description:
      'Every invoice lifecycle state—from draft and review to delivery—is tracked with precise timestamps.',
    imageSrc: '/images/home/div-rec.png',
  },
  {
    id: 'Stage 04',
    label: 'Payment',
    title: 'Unified payment reference handling',
    description:
      'Record outcomes automatically and ensure payment updates sync instantly across systems.',
    imageSrc: '/images/home/div-rec.png',
  },
  {
    id: 'Stage 05',
    label: 'Reconcile',
    title: 'Automated matching and exception management',
    description:
      'Match transactions seamlessly while instantly flagging edge cases for immediate review.',
    imageSrc: '/images/home/div-rec.png',
  },
  {
    id: 'Stage 06',
    label: 'Record',
    title: 'Immutable audit trail & retention',
    description:
      'Preserve full audit history with zero overwrites, guaranteeing compliance and complete visibility.',
    imageSrc: '/images/home/div-rec.png',
  },
];

export default function OperatingProblemSection() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const activeStage = stages[activeStageIndex];

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-5">
            <div className="flex items-center gap-3">
              <span className="w-4 h-0.5 bg-blue-600 rounded-full" />
              <span className="text-blue-600 text-xs font-mono font-medium uppercase tracking-wider">
                The operating problem
              </span>
            </div>
            <h2 className="text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
              Billing breaks when the record is fragmented.
            </h2>
          </div>

          <div className="lg:col-span-4 border-l-2 border-blue-600 pl-4 py-1">
            <p className="text-gray-700 text-sm leading-relaxed">
              Invoices in one system, payment updates in another, reminders in
              email, and corrections in spreadsheets create uncertainty across the
              billing cycle.
            </p>
          </div>
        </div>

        {/* Hero Illustration / Banner */}
        <div className="overflow-hidden rounded-3xl border border-zinc-200 shadow-xs">
          <img
            src="/images/home/div.png"
            alt="Fragmented Billing Problem Illustration"
            className="w-full h-auto object-cover max-h-[553px]"
          />
        </div>

        {/* 4 Problem Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {problems.map((problem) => (
            <div
              key={problem.id}
              className="bg-white p-6 rounded-2xl border border-zinc-200 flex flex-col justify-start gap-3 shadow-xs hover:border-zinc-300 transition-colors"
            >
              <span className="text-red-600 text-xs font-mono">
                {problem.id}
              </span>
              <h3 className="text-zinc-900 text-base font-semibold leading-snug">
                {problem.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Lifecycle Stages Container */}
        <div className="bg-white rounded-3xl border border-zinc-200 shadow-sm overflow-hidden">
          {/* Navigation Tabs Header */}
          <div className="flex overflow-x-auto border-b border-zinc-200 no-scrollbar">
            {stages.map((stage, idx) => {
              const isActive = idx === activeStageIndex;
              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setActiveStageIndex(idx)}
                  className={`min-w-[160px] sm:min-w-[180px] flex-1 px-4 py-3.5 text-left border-r border-zinc-200 transition-colors shrink-0 focus:outline-hidden ${
                    isActive
                      ? 'bg-white border-b-2 border-b-emerald-500 -mb-px'
                      : 'bg-zinc-50 hover:bg-zinc-100'
                  }`}
                >
                  <div
                    className={`text-[10px] font-mono uppercase tracking-wide ${
                      isActive ? 'text-blue-600' : 'text-zinc-500'
                    }`}
                  >
                    {stage.id}
                  </div>
                  <div className="text-zinc-900 text-sm font-semibold mt-0.5">
                    {stage.label}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Tab Content Panel */}
          <div className="p-6 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center min-h-[280px]">
            <div className="md:col-span-6 space-y-3">
              <h3 className="text-zinc-900 text-xl sm:text-2xl font-semibold leading-snug">
                {activeStage.title}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed max-w-lg">
                {activeStage.description}
              </p>
            </div>

            <div className="md:col-span-6 flex justify-center md:justify-end">
              <img
                src={activeStage.imageSrc}
                alt={activeStage.title}
                className="w-full max-w-[485px] h-auto rounded-xl border border-zinc-200 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Call-to-Action Footer */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            type="button"
            className="px-6 py-2.5 bg-blue-600 text-white font-normal text-base rounded-md hover:bg-blue-700 transition-colors shadow-xs"
          >
            Take the Product Tour
          </button>
          <button
            type="button"
            className="px-6 py-2.5 bg-white text-zinc-900 font-normal text-base rounded-md border border-zinc-200 hover:bg-zinc-50 transition-colors"
          >
            See Why Zoiko Billing
          </button>
        </div>
      </div>
    </section>
  );
}