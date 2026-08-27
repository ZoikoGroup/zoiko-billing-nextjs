interface BoundaryRow {
  topic: string;
  detail: string;
}

const shownHereRows: BoundaryRow[] = [
  {
    topic: "Required access",
    detail: "The permission, scope or role for an operation",
  },
  {
    topic: "Authentication requirement",
    detail: "Whether authentication is required or not",
  },
  {
    topic: "Permission-denied linkage",
    detail: "The error reference for a refused call",
  },
  {
    topic: "Link to Authentication",
    detail: "A route to the owning destination",
  },
  {
    topic: "Sensitive-operation warning",
    detail: "Where an action carries elevated impact",
  },
];

const notDuplicatedRows: BoundaryRow[] = [
  {
    topic: "Credential creation",
    detail: "The full creation or rotation workflow",
  },
  {
    topic: "Secret storage",
    detail: "Any secret-handling tutorial",
  },
  {
    topic: "Protocol explanation",
    detail:
      "Complete OAuth, SAML, OIDC or key protocol detail unless canonical architecture requires it",
  },
  {
    topic: "Auth troubleshooting",
    detail: "Diagnosis that belongs to the next destination",
  },
  {
    topic: "Credential recovery",
    detail: "Recovery and revocation interfaces",
  },
];

export default function AuthPermissionBoundaryDocSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-100" id="auth-boundary">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          AUTHENTICATION &amp; PERMISSION BOUNDARY
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          State the access requirement. Do not become the setup guide.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Every operation shows what access it needs. Authentication owns credential acquisition,
          token behavior, key management and setup flows — and that boundary stays strict.
        </p>

        {/* 2 Cards Grid */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          
          {/* Card 1: Shown here */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm flex flex-col">
            <div className="text-xs font-normal text-slate-500 pb-3 border-b border-slate-100 mb-2">
              Shown here.
            </div>
            <div className="divide-y divide-slate-100">
              {shownHereRows.map((row, idx) => (
                <div key={idx} className="py-3 flex items-start gap-4">
                  <div className="w-2/5 text-xs sm:text-sm font-bold text-slate-900">
                    {row.topic}
                  </div>
                  <div className="w-3/5 text-xs text-slate-600 font-normal leading-relaxed">
                    {row.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Not duplicated here */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm flex flex-col">
            <div className="text-xs font-normal text-slate-500 pb-3 border-b border-slate-100 mb-2">
              Not duplicated here.
            </div>
            <div className="divide-y divide-slate-100">
              {notDuplicatedRows.map((row, idx) => (
                <div key={idx} className="py-3 flex items-start gap-4">
                  <div className="w-2/5 text-xs sm:text-sm font-bold text-slate-900">
                    {row.topic}
                  </div>
                  <div className="w-3/5 text-xs text-slate-600 font-normal leading-relaxed">
                    {row.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
