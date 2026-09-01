const states = [
  {
    name: "Current",
    style:
      "bg-color-grey-93-8 text-color-spring-green-29 outline-color-spring-green-86-3",
    dot: "bg-color-spring-green-29",
    treatment: "Normal guide, visible in finder and index",
  },
  {
    name: "Recently updated",
    style:
      "bg-color-grey-95-13 text-color-azure-43 outline-color-grey-91-5",
    dot: "bg-color-azure-43",
    treatment: (
      <>
        Optional &quot;Updated&quot; text with date —{" "}
        <strong>only for substantive changes</strong>
      </>
    ),
  },
  {
    name: "Review due",
    style:
      "bg-color-grey-94-7 text-color-orange-35 outline-color-orange-86",
    dot: "bg-color-orange-35",
    treatment: "Still readable, but not newly featured; internal warning raised",
  },
  {
    name: "Review overdue",
    style:
      "bg-color-grey-95-15 text-color-azure-34 outline-color-grey-90-3",
    dot: "bg-color-azure-34",
    treatment:
      "De-prioritized, with owner escalation; a public review notice only if it aids clarity",
  },
  {
    name: "Replaced",
    style:
      "bg-color-grey-94-8 text-color-orange-38 outline-color-orange-86-2",
    dot: "bg-color-orange-38",
    treatment:
      "Banner stating the guide has been replaced, with a primary link to the current guide",
  },
  {
    name: "Archived",
    style:
      "bg-color-grey-96-3 text-color-azure-60 outline-color-grey-92-4",
    dot: "bg-color-azure-60",
    treatment: (
      <>
        Historical banner, excluded from default browse,{" "}
        <strong>no conversion implying current operation</strong>
      </>
    ),
  },
  {
    name: "Withdrawn",
    style:
      "bg-color-grey-95-12 text-color-red-46-2 outline-color-red-89",
    dot: "bg-color-red-46-2",
    treatment: "Removed from finder and index, with safe route explanation",
  },
  {
    name: "Error",
    style:
      "bg-color-grey-95-11 text-color-blue-50-3 outline-color-grey-91-4",
    dot: "bg-color-blue-50-3",
    treatment:
      "Persistent error with retry plus Resource Center, Help and Documentation alternatives",
  },
];

export default function ArticleStates() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-24 py-16 lg:py-20">
      <div className="w-full max-w-[1240px] mx-auto px-0 sm:px-4 lg:px-7 flex flex-col items-center gap-11">
        
        {/* Heading */}
        <div className="w-full max-w-[1000px] pt-2 flex flex-col items-center gap-3">
          <div className="flex items-center justify-center gap-3 h-4">
            <div className="w-4 h-px opacity-40 bg-color-azure-60" />

            <span className="text-color-azure-60 text-xs font-bold font-['Inter'] uppercase leading-4 tracking-widest whitespace-nowrap">
              Article states
            </span>

            <div className="w-4 h-px opacity-40 bg-color-azure-60" />
          </div>

          <div className="w-full flex flex-col items-center">
            <h2 className="text-center text-color-azure-11-2 text-3xl sm:text-4xl font-extrabold leading-10">
              Eight states, and a replaced guide
              says so.
            </h2>
          </div>

          <div className="w-full max-w-[687px] pt-1 flex justify-center">
            <p className="text-center text-color-azure-44-3 text-sm sm:text-base font-normal font-['Inter'] leading-6 sm:leading-7">
              An archived guide carries no conversion action that implies
              current operation.
            </p>
          </div>
        </div>

        {/* Table */}
        <div className="w-full overflow-x-auto rounded-2xl">
          <div className="min-w-[900px] bg-color-white-solid rounded-2xl shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05)] shadow-[0px_1px_2px_0px_rgba(15,23,42,0.04)] outline outline-1 outline-offset-[-1px] outline-color-grey-92-4 overflow-hidden">

            {/* Header */}
            <div className="flex">
              <div className="w-64 shrink-0 px-4 py-3.5 bg-color-grey-99-2 border-b border-color-grey-92-4">
                <span className="text-color-azure-60 text-xs font-bold font-['Inter'] uppercase leading-4 tracking-wide">
                  State
                </span>
              </div>

              <div className="flex-1 px-4 py-3.5 bg-color-grey-99-2 border-b border-color-grey-92-4">
                <span className="text-color-azure-60 text-xs font-bold font-['Inter'] uppercase leading-4 tracking-wide">
                  Treatment
                </span>
              </div>
            </div>

            {/* Rows */}
            {states.map((state, index) => (
              <div
                key={state.name}
                className={`flex ${
                  index !== states.length - 1
                    ? "border-b border-color-grey-95-10"
                    : ""
                }`}
              >
                {/* State */}
                <div className="w-64 shrink-0 px-4 py-3.5 flex items-center">
                  <div
                    className={`relative h-6 min-h-6 rounded-md outline outline-1 outline-offset-[-1px] px-3 pl-6 flex items-center ${state.style}`}
                  >
                    <span
                      className={`absolute left-2.5 w-1.5 h-1.5 rounded-sm opacity-80 ${state.dot}`}
                    />

                    <span className="text-xs font-semibold font-['Inter'] leading-4 whitespace-nowrap">
                      {state.name}
                    </span>
                  </div>
                </div>

                {/* Treatment */}
                <div className="flex-1 px-4 py-3.5 flex items-center">
                  <p className="text-color-azure-44-3 text-sm font-normal font-['Inter'] leading-5">
                    {state.treatment}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}