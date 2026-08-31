type RightsRequest = {
  title: string;
  description: React.ReactNode;
  boundary: React.ReactNode;
};

const REQUESTS: RightsRequest[] = [
  {
    title: "Access or copy",
    description: (
      <>
        Routed to the approved privacy-rights process. The scope of what can be
        provided may depend on your role and the processing context.
      </>
    ),
    boundary: (
      <>
        <span className="font-bold">Boundary:</span> no account data is
        returned from this public page, and no deadline is stated here.
      </>
    ),
  },
  {
    title: "Correction",
    description: (
      <>
        Authoritative financial and operational records may use a{" "}
        <span className="font-bold">
          correction history rather than a silent overwrite
        </span>
        , so the original and the correction both remain visible.
      </>
    ),
    boundary: (
      <>
        <span className="font-bold">Boundary:</span> the product and legal
        source decides the behavior. Correction is not the same as erasure of
        the prior value.
      </>
    ),
  },
  {
    title: "Deletion or erasure",
    description: (
      <>
        A request is evaluated against applicable retention and preservation
        obligations. Some records may be deletable while others in the same
        account are not.
      </>
    ),
    boundary: (
      <>
        <span className="font-bold">
          Boundary: no instant-deletion promise.
        </span>{" "}
        Evaluation is the honest description of what happens, and a hold can
        suspend disposition entirely.
      </>
    ),
  },
  {
    title: "Restriction or objection",
    description: (
      <>
        Rendered only where the authoritative privacy source defines this right
        for your context.
      </>
    ),
    boundary: (
      <>
        <span className="font-bold">Boundary:</span> no global legal guarantee.
        Availability of the right is jurisdiction- and context-dependent.
      </>
    ),
  },
  {
    title: "Portability or export",
    description: (
      <>
        Routed to a rights request or an approved product export, depending on
        context.
      </>
    ),
    boundary: (
      <>
        <span className="font-bold">
          Boundary: a product export is not automatically legal portability.
        </span>{" "}
        The two are different things that happen to produce a file.
      </>
    ),
  },
  {
    title: "Withdraw consent",
    description: (
      <>
        Applies only to processing actually based on consent, and only where
        the approved source defines a mechanism.
      </>
    ),
    boundary: (
      <>
        <span className="font-bold">Boundary:</span> withdrawing consent{" "}
        <span className="font-bold">
          does not automatically stop service processing or contractual
          obligations
        </span>{" "}
        that rest on a different basis.
      </>
    ),
  },
  {
    title: "Appeal or complaint",
    description: (
      <>Available only where the governing privacy source defines the route.</>
    ),
    boundary: (
      <>
        <span className="font-bold">
          Boundary: no regulator or contact is invented.
        </span>{" "}
        Where no route is defined, none is offered.
      </>
    ),
  },
];

export default function PrivacyRightsRouting() {
  return (
    <section
      id="privacy-rights-routing"
      className="w-full bg-[#f7f8fa] px-4 py-16 sm:px-6 md:px-10 lg:px-16 lg:py-20 xl:px-24"
    >
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-3 px-0 sm:px-4 lg:px-7">
        {/* Heading */}
        <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pb-8 pt-2 text-center">
          <div className="flex h-4 items-center justify-center gap-3">
            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

            <span className="text-xs font-bold uppercase !leading-4 tracking-widest !text-[#7890b2]">
              Privacy rights routing
            </span>

            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
          </div>

          <h2 className="!m-0 !text-2xl !tracking-normal font-extrabold !leading-8 text-balance font-[family-name:var(--font-jakarta)] !text-[#091127] sm:!text-3xl sm:!leading-9 md:!text-4xl md:!leading-10">
            Seven request types, each with the
            boundary stated up front.
          </h2>

          <p className="m-0 w-full max-w-[687px] pt-[3.1px] text-sm font-normal !leading-6 !text-[#5d7192] sm:text-base sm:!leading-7">
            No request is answered on this page, and no account data is ever
            returned from a public surface.
          </p>
        </div>

        {/* Request cards */}
        {REQUESTS.map((request) => (
          <div
            key={request.title}
            className="
              flex w-full flex-col items-start gap-1.5
              rounded-[10px] border border-[#dfe5ee] bg-white px-4 py-3.5
            "
          >
            <h3 className="!m-0 text-sm font-bold !leading-6 !text-[#091127] font-[family-name:var(--font-jakarta)]">
              {request.title}
            </h3>

            <p className="m-0 text-xs font-normal !leading-5 !text-[#5d7192]">
              {request.description}
            </p>

            <div className="w-full rounded-md border border-[#fadcdc] bg-[#fef2f2] px-3 pb-2 pt-3">
              <p className="m-0 text-xs font-normal !leading-5 !text-[#8b1d1d]">
                {request.boundary}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
