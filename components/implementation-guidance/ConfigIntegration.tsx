export default function ConfigIntegration() {
  return (
    <section className="w-full bg-[#f7f8fa]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start px-6 py-20">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-11 px-7">
          {/* Header */}
          <div className="flex w-full max-w-[1000px] flex-col items-center gap-3 pt-2 text-center">
            {/* Eyebrow */}
            <div className="flex items-center justify-center">
              <span className="h-px w-4 bg-[#7890b2] opacity-40" />

              <span className="mx-2 text-xs font-bold uppercase leading-4 tracking-[0.16em] text-[#7890b2]">
                Configuration &amp; integration readiness
              </span>

              <span className="h-px w-4 bg-[#7890b2] opacity-40" />
            </div>

            {/* Heading */}
            <h2 className="!m-0 text-center font-['Plus_Jakarta_Sans'] text-4xl font-extrabold leading-10 tracking-[-0.025em] text-[#091127]">
              Decisions to make before you touch a
            
              setting.
            </h2>

            {/* Description */}
            <p className="!m-0 pt-[3px] text-center text-base font-normal leading-7 text-[#5d7192]">
              Configuration planning is about deciding, not clicking. Current
              setup steps live in
              <br />
              Documentation.
            </p>
          </div>

          {/* Cards */}
          <div className="flex w-full items-start justify-center gap-5">
            {/* Configuration Decisions */}
            <div className="flex-1 overflow-hidden rounded-2xl border border-[#dfe5ee] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]">
              <div className="border-b border-[#dfe5ee] bg-[#fafbfc] px-5 py-4">
                <p className="!m-0 text-sm leading-5 text-[#5d7192]">
                  Configuration decisions.
                </p>
              </div>

              <div>
                {[
                  ["Records", "Customer and billing record structure and ownership"],
                  ["Roles & approvals", "Who can view, edit, approve, export and configure"],
                  ["Workflows", "Document lifecycle, corrections and exception handling"],
                  ["Documents & delivery", "Content requirements and delivery expectations"],
                  ["Receivables", "Aging, reminders, disputes and ownership"],
                  ["Payments", "Recording, allocation and exception review"],
                  ["Reporting", "Metric definitions, filters and who defines them"],
                ].map(([title, description], index) => (
                  <div
                    key={title}
                    className={`flex items-start ${
                      index !== 6 ? "border-b border-[#edf0f4]" : ""
                    }`}
                  >
                    <div className="w-44 px-4 py-3.5">
                      <p className="!m-0 text-sm font-semibold leading-5 text-[#091127]">
                        {title}
                      </p>
                    </div>

                    <div className="w-full px-4 py-3.5">
                      <p className="!m-0 text-sm leading-5 text-[#5d7192]">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Integration Readiness */}
            <div className="flex-1 overflow-hidden rounded-2xl border border-[#dfe5ee] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]">
              <div className="border-b border-[#dfe5ee] bg-[#fafbfc] px-5 py-4">
                <p className="!m-0 text-sm leading-5 text-[#5d7192]">
                  Integration readiness.
                </p>
              </div>

              <div>
                {[
                  ["Systems", "Which systems connect, and in which direction"],
                  ["Objects & fields", "What moves, and which side is authoritative per field"],
                  ["Field authority", "Conflicts resolved by decision, not by last write"],
                  ["Credentials", "Ownership, rotation and access — handled per Trust and Developers"],
                  ["Failure handling", "Who notices, who owns, and what happens to the exception"],
                  ["Technical ownership", "A named owner for each interface after launch"],
                  ["Contracts", "Protocol, schema and auth remain in Developers"],
                ].map(([title, description], index) => (
                  <div
                    key={title}
                    className={`flex items-start ${
                      index !== 6 ? "border-b border-[#edf0f4]" : ""
                    }`}
                  >
                    <div className="w-40 px-4 py-3.5">
                      <p className="!m-0 text-sm font-semibold leading-5 text-[#091127]">
                        {title === "Technical ownership" ? (
                          <>
                            Technical
                            <br />
                            ownership
                          </>
                        ) : (
                          title
                        )}
                      </p>
                    </div>

                    <div className="w-full px-4 py-3.5">
                      <p
                        className={`!m-0 text-sm leading-5 ${
                          title === "Field authority" || title === "Contracts"
                            ? "font-bold"
                            : "font-normal"
                        } text-[#5d7192]`}
                      >
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}