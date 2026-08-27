interface AuthPlanCard {
  title: string;
  description: string;
}

const authPlanCards: AuthPlanCard[] = [
  {
    title: "Integration identity",
    description: "Who or what owns it, and whether access survives a person leaving.",
  },
  {
    title: "Least privilege",
    description: "Only the permissions the documented operations require — reviewed, not assumed.",
  },
  {
    title: "Environment identity",
    description: "Separate identities per environment; portability is never assumed.",
  },
  {
    title: "Rotation owner",
    description: "A named owner and a defined path before production, not after the first expiry.",
  },
  {
    title: "Revocation path",
    description: "What stops working, and who is notified when access is withdrawn.",
  },
  {
    title: "Secret handling",
    description: "Approved storage; never in URLs, logs, analytics, tickets or screenshots.",
  },
];

export default function AuthenticationPermissionPlanningSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-100" id="auth-planning">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          AUTHENTICATION &amp; PERMISSION PLANNING
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Plan the identity before writing the first call.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Credential ownership, rotation and revocation are planning decisions, not launch-week
          discoveries. Authentication remains the owning source for every mechanism.
        </p>

        {/* 6 Cards Grid */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {authPlanCards.map((card, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm font-normal leading-relaxed text-slate-600">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
