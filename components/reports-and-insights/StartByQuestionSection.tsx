interface EvidenceQuestionCard {
  question: string;
  condition: React.ReactNode;
}

const evidenceQuestionCards: EvidenceQuestionCard[] = [
  {
    question: "What is changing in billing operations?",
    condition: "Trend and pattern analyses. Requires comparable periods, definitions, and a stated population or scope.",
  },
  {
    question: "Where does invoice-to-payment friction appear?",
    condition: (
      <>
        Operational analysis across invoicing, AR, payment, reconciliation, balances and exceptions —{" "}
        <span className="font-bold text-slate-900">
          without implying causality beyond the evidence
        </span>
        .
      </>
    ),
  },
  {
    question: "What should teams measure?",
    condition: "Metric-definition and measurement-practice insights, with Glossary and product reporting handoffs.",
  },
  {
    question: "How can teams improve process maturity?",
    condition: (
      <>
        Practice-oriented research linked to Guides and Templates, where recommendations{" "}
        <span className="font-bold text-slate-900">
          distinguish evidence from editorial interpretation
        </span>
        .
      </>
    ),
  },
  {
    question: "What should implementation teams plan for?",
    condition: "Evidence around rollout, governance, integration and readiness questions — only where sources exist.",
  },
  {
    question: "How should leaders interpret benchmarks?",
    condition: "Population, percentile or average, period, representativeness and limitation guidance.",
  },
];

export default function StartByQuestionSection() {
  return (
    <section className="w-full bg-white py-12 lg:py-24 border-t border-slate-100" id="start-by-question">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          START BY QUESTION
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          Six questions, each with an evidence condition.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          A question is only offered where the evidence needed to answer it can actually exist.
        </p>

        {/* 6 Grid Cards */}
        <div className="mt-8 lg:mt-14 w-full max-w-[1240px] grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-left">
          {evidenceQuestionCards.map((card, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-7 shadow-sm hover:shadow-md transition text-left"
            >
              <h3 className="text-sm sm:text-lg font-bold text-slate-900 mb-2">
                {card.question}
              </h3>
              <p className="text-xs sm:text-sm font-normal leading-relaxed text-slate-600">
                {card.condition}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
