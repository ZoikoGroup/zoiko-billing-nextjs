import React from 'react';

interface SecurityFeature {
  title: string;
  description: string;
}

const securityFeatures: SecurityFeature[] = [
  {
    title: 'Data minimization',
    description:
      'Workflow inputs and logs carry only what the step needs to run and be audited.',
  },
  {
    title: 'Least-privilege scopes',
    description:
      'Service and user identities receive the narrowest scope that completes the action.',
  },
  {
    title: 'Secret storage and rotation',
    description:
      'Credentials are held and rotated through approved systems, never in workflow configuration.',
  },
  {
    title: 'Audit-event integrity',
    description:
      'Evidence records are protected so a run cannot be quietly rewritten after the fact.',
  },
  {
    title: 'Retention and deletion',
    description:
      'Definitions, runs and evidence follow defined retention and deletion treatment.',
  },
  {
    title: 'Incident, pause and revocation',
    description:
      'Workflows and credentials can be paused or revoked when something goes wrong.',
  },
  {
    title: 'Nothing sensitive in transit paths',
    description:
      'No sensitive data in notifications, URLs or ordinary analytics.',
  },
  {
    title: 'Evidence before claims',
    description:
      'Security detail and certification claims are published only with current evidence and defined scope.',
  },
];

export default function TrustSecuritySection() {
  return (
    <section className="w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-12 bg-slate-100 text-slate-800">
      <div className="max-w-7xl mx-auto space-y-10 lg:space-y-12">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-end">
          <div className="lg:col-span-7 flex flex-col items-start gap-4">
            <div className="inline-flex items-center gap-2.5">
              <span className="w-5 h-0.5 bg-gradient-to-r from-cyan-500 to-sky-500 rounded-xs shrink-0" />
              <span className="text-sky-600 text-xs font-mono font-medium uppercase tracking-wider">
                Trust, privacy and security
              </span>
            </div>
            <h2 className="text-sky-950 text-3xl sm:text-4xl lg:text-5xl font-medium font-sans leading-tight">
              Automation handles less data, not more.
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
              Workflow inputs, logs and notifications are deliberately minimal, and every service identity runs on least privilege.
            </p>
          </div>
        </div>

        {/* Security Features Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white border border-slate-200 rounded-2xl flex flex-col justify-start space-y-2 hover:border-slate-300 transition-colors shadow-xs"
            >
              <h3 className="text-sky-950 text-base font-semibold font-sans leading-snug">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm font-normal leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 flex-wrap pt-2">
          <a
            href="#review-security"
            className="px-5 py-2.5 bg-sky-950 !text-white text-base font-normal rounded-lg hover:bg-sky-900 hover:!text-white transition-colors shadow-xs"
          >
            Review security and trust
          </a>
          <a
            href="#privacy-notice"
            className="inline-flex items-center gap-2 text-sky-600 text-base font-normal hover:text-sky-700 transition-colors px-2 py-2.5"
          >
            <span>Read the privacy notice</span>
            <span className="font-mono font-bold">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
