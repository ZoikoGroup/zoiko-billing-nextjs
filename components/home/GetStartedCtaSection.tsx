"use client"
import React, { useState } from 'react';

interface WorkflowStep {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  status: string;
}

const workflowSteps: WorkflowStep[] = [
  {
    id: 'step-1',
    stepNumber: '01',
    title: 'Customer',
    subtitle: 'Account and terms',
    status: 'Set',
  },
  {
    id: 'step-2',
    stepNumber: '02',
    title: 'Charge',
    subtitle: 'Released price and version',
    status: 'Applied',
  },
  {
    id: 'step-3',
    stepNumber: '03',
    title: 'Invoice',
    subtitle: 'Approved and issued',
    status: 'Issued',
  },
  {
    id: 'step-4',
    stepNumber: '04',
    title: 'Delivery',
    subtitle: 'Sent, delivered, viewed',
    status: 'Confirmed',
  },
  {
    id: 'step-5',
    stepNumber: '05',
    title: 'Payment',
    subtitle: 'Outcome and reference',
    status: 'Tracked',
  },
  {
    id: 'step-6',
    stepNumber: '06',
    title: 'Reconciliation',
    subtitle: 'Matched, exceptions raised',
    status: 'Reviewed',
  },
  {
    id: 'step-7',
    stepNumber: '07',
    title: 'Record',
    subtitle: 'Preserved for audit',
    status: 'Retained',
  },
];

export default function GetStartedSection() {
  const [activeStep, setActiveStep] = useState<string>('step-1');

  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto bg-sky-950 rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl overflow-hidden border border-sky-900/50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Value Proposition & Call to Action */}
          <div className="lg:col-span-6 space-y-8">
            {/* Tag Badge */}
            <div className="flex items-center gap-3">
              <span className="w-4 h-0.5 bg-blue-600 rounded-full" />
              <span className="text-blue-500 text-xs font-mono font-medium uppercase tracking-wider">
                Get started
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
              Bring every invoice, payment, and outstanding balance into focus.
            </h2>

            {/* Body Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
              Run billing through one controlled platform built for clear
              financial records, global operations, and growing commercial
              complexity.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium text-base rounded-md transition-all shadow-md focus:outline-hidden"
              >
                Create Your Account
              </button>
              <button
                type="button"
                className="px-6 py-3 border border-white/36 hover:border-white text-white font-medium text-base rounded-md transition-all hover:bg-white/10 focus:outline-hidden"
              >
                Book a Demo
              </button>
            </div>
          </div>

          {/* Right Column: Workflow Steps Card */}
          <div className="lg:col-span-6 bg-white/5 backdrop-blur-xs rounded-2xl border border-white/16 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            
            {/* Workflow List */}
            <div className="divide-y divide-white/12">
              {workflowSteps.map((step) => {
                const isActive = activeStep === step.id;
                return (
                  <div
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    className={`py-3 flex items-center justify-between gap-4 cursor-pointer transition-colors ${
                      isActive ? 'bg-white/5 rounded-lg px-2 -mx-2' : 'hover:bg-white/5 rounded-lg px-2 -mx-2'
                    }`}
                  >
                    {/* Number Badge */}
                    <div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center shrink-0">
                      <span className="text-white text-[10px] font-mono font-medium">
                        {step.stepNumber}
                      </span>
                    </div>

                    {/* Step Title & Subtitle */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-slate-100 text-sm font-medium truncate">
                        {step.title}
                      </h3>
                      <p className="text-emerald-400 text-[10px] font-mono truncate">
                        {step.subtitle}
                      </p>
                    </div>

                    {/* Status Badge */}
                    <div className="px-3 py-1 bg-neutral-100 rounded-full border border-zinc-200 flex items-center gap-1.5 shrink-0">
                      <span className="text-gray-500 text-xs font-mono font-bold">
                        –
                      </span>
                      <span className="text-gray-700 text-[10px] font-mono uppercase tracking-wider font-medium">
                        {step.status}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Card Footer Banner */}
            <div className="pt-4 border-t border-white/16 flex items-center gap-3">
              <div className="w-7 h-7 bg-white rounded-lg flex flex-col justify-center items-center gap-0.5 shrink-0">
                <span className="w-3 h-0.5 bg-blue-600 rounded-xs" />
                <span className="w-3 h-0.5 bg-blue-600 rounded-xs" />
                <span className="w-3 h-0.5 bg-blue-600 rounded-xs" />
              </div>
              <p className="text-white text-sm font-semibold">
                Billing clarity from invoice to payment.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}