interface TaskCard {
  title: string;
  description: string;
}

const taskCards: TaskCard[] = [
  {
    title: "Set up customer and billing records",
    description: "Billing identity, contacts, terms, record states and ownership concepts.",
  },
  {
    title: "Create and manage billing documents",
    description: "Invoices, credit notes, corrections, issuance and delivery behavior.",
  },
  {
    title: "Manage receivables and follow–up",
    description: "Aging, reminders, disputes, exceptions and ownership.",
  },
  {
    title: "Record and reconcile payments",
    description: "Payment records, allocation, matching and exception review.",
  },
  {
    title: "Review balances and reporting",
    description: "Outstanding balances, metric definitions, filters and exports.",
  },
  {
    title: "Administer roles and configuration",
    description: "Roles, approvals, settings and governance controls.",
  },
];

export default function StartByTaskSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-100" id="start-by-task">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          START BY TASK
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Six tasks that span the invoice–to–payment lifecycle.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Task entry points exist only where current documentation supports them end to end.
        </p>

        {/* 6 Grid Cards (2 Cols) */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {taskCards.map((card, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-sm hover:shadow-md transition text-left"
            >
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm font-normal leading-relaxed text-slate-600">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
