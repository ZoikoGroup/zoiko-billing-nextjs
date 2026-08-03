'use client';

interface DeploymentOption {
  badge: string;
  title: string;
  features: string[];
  theme: 'light' | 'dark';
}

const deploymentOptions: DeploymentOption[] = [
  {
    badge: 'Option A',
    title: 'Independent Zoiko Billing',
    features: [
      'Independent identity, configuration and product access',
      'Own subscription, onboarding, documentation and support',
      'Direct integrations with approved external systems',
      'No Zoiko One subscription required',
    ],
    theme: 'light',
  },
  {
    badge: 'Option B',
    title: 'Zoiko Billing with Zoiko One',
    features: [
      'Shared identity where approved and enabled',
      'Approved record handoffs between connected products',
      'Cross-product navigation and broader operational visibility',
      'Zoiko Billing remains a distinct product within the suite',
    ],
    theme: 'dark',
  },
];

export default function DeploymentBoundarySection() {
  return (
    <section className="w-full bg-slate-100/70 px-4 py-16 lg:px-12 lg:py-24 sm:px-6">
      <div className="mx-auto max-w-7xl space-y-10 lg:space-y-12">
        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-4 lg:col-span-7">
            <div className="inline-flex items-center gap-2.5">
              <span className="h-0.5 w-5 shrink-0 rounded-xs bg-gradient-to-r from-cyan-500 to-sky-500" />
              <span className="text-xs font-medium uppercase tracking-wider text-sky-600 font-mono">
                Deployment
              </span>
            </div>
            <h2 className="text-3xl font-medium leading-tight text-sky-950 font-sans sm:text-4xl lg:text-5xl">
              Use Zoiko Billing independently or connect it with Zoiko One.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base font-normal leading-relaxed text-slate-600 sm:text-lg">
              The same billing record either way. What changes is identity, navigation and which approved handoffs are switched on.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 pt-4 md:grid-cols-2">
          {deploymentOptions.map((option) => (
            <div
              key={option.title}
              className={`flex flex-col justify-between gap-6 rounded-3xl p-8 transition-all duration-200 sm:p-10 ${
                option.theme === 'dark'
                  ? 'border border-slate-800 bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white shadow-xl'
                  : 'border border-slate-200/80 bg-white text-slate-800 shadow-xs'
              }`}
            >
              <div className="space-y-4">
                <span
                  className={`block text-xs font-medium uppercase tracking-wider font-mono ${
                    option.theme === 'dark' ? 'text-cyan-400' : 'text-sky-600'
                  }`}
                >
                  {option.badge}
                </span>

                <h3
                  className={`text-xl font-semibold leading-snug font-sans sm:text-2xl ${
                    option.theme === 'dark' ? 'text-white' : 'text-sky-950'
                  }`}
                >
                  {option.title}
                </h3>

                <ul className="space-y-3 pt-2">
                  {option.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span
                        className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                          option.theme === 'dark' ? 'bg-cyan-400' : 'bg-sky-500'
                        }`}
                      />
                      <span
                        className={`text-sm font-normal leading-relaxed ${
                          option.theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-2 rounded-r-2xl border-l-4 border-sky-600 bg-white p-6 shadow-xs sm:p-8">
          <span className="block text-[11px] font-medium uppercase tracking-wider text-sky-600 font-mono">
            Boundary
          </span>
          <p className="max-w-4xl text-sm font-normal leading-relaxed text-sky-950 sm:text-base">
            Zoiko One integrations are not automatically active. Shared data and entitlement behaviour applies only where it has been approved, configured and enabled for your organisation.
          </p>
        </div>

        <div className="flex justify-center pt-2">
          <a
            href="#compare-deployment"
            className="inline-flex items-center justify-center rounded-lg bg-sky-950 px-6 py-3 text-base font-medium text-white shadow-xs transition-colors duration-150 hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
          >
            Compare deployment options
          </a>
        </div>
      </div>
    </section>
  );
}
