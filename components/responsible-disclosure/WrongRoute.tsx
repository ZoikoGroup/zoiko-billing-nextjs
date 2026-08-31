import Link from "next/link";

type Situation = {
  situation: string;
  route: React.ReactNode;
  why: React.ReactNode;
};

const linkClass = "font-semibold !text-[#1F6FEB] hover:underline";

const SITUATIONS: Situation[] = [
  {
    situation: "You cannot sign in",
    route: (
      <Link href="/account-access" className={linkClass}>
        Account Access
      </Link>
    ),
    why: (
      <>
        An access problem is not a vulnerability, and this route cannot restore
        access
      </>
    ),
  },
  {
    situation: "Something looks wrong in your account",
    route: (
      <>
        <Link href="#" className={linkClass}>
          Help Center
        </Link>{" "}
        ·{" "}
        <Link href="/contact-support" className={linkClass}>
          Contact Support
        </Link>
      </>
    ),
    why: (
      <>
        Account-specific diagnosis needs support intake, not a security queue
      </>
    ),
  },
  {
    situation: "An integration is failing",
    route: (
      <Link href="#" className={linkClass}>
        Integration Support
      </Link>
    ),
    why: (
      <>
        Diagnostics belong there — and{" "}
        <span className="font-bold">never paste a credential either way</span>
      </>
    ),
  },
  {
    situation: "A service appears down",
    route: <>System Status</>,
    why: <>Operational state is not a security finding</>,
  },
  {
    situation: "You received a suspicious message",
    route: <>Approved abuse or security route per policy</>,
    why: (
      <>
        Reporting a phishing attempt is a different process from disclosing a
        product vulnerability
      </>
    ),
  },
];

export default function WrongRoute() {
  return (
    <section
      id="wrong-route"
      className="w-full bg-white px-4 py-16 sm:px-6 md:px-10 lg:px-16 lg:py-20 xl:px-24"
    >
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-8 px-0 sm:px-4 lg:px-7">
        {/* Heading */}
        <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2 text-center">
          <div className="flex h-4 items-center justify-center gap-3">
            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

            <span className="text-xs font-bold uppercase !leading-4 tracking-widest !text-[#7890b2]">
              Wrong route
            </span>

            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
          </div>

          <h2 className="!m-0 text-balance !text-2xl !tracking-normal font-extrabold !leading-8 font-[family-name:var(--font-jakarta)] !text-[#091127] sm:!text-3xl sm:!leading-9 md:!text-4xl md:!leading-10">
            Five things that are not vulnerability reports.
          </h2>

          <p className="m-0 w-full max-w-[687px] pt-[3.1px] text-sm font-normal !leading-6 !text-[#5d7192] sm:text-base sm:!leading-7">
            Each has a faster route, and sending it here delays the answer.
          </p>
        </div>

        {/* Stacked cards — small screens */}
        <div className="flex w-full flex-col gap-3 lg:hidden">
          {SITUATIONS.map((row) => (
            <div
              key={row.situation}
              className="flex w-full flex-col gap-3 rounded-2xl border border-[#dfe5ee] bg-white p-4 shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]"
            >
              <h3 className="!m-0 text-sm font-bold !leading-5 !text-[#091127] font-[family-name:var(--font-jakarta)]">
                {row.situation}
              </h3>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase !leading-4 tracking-wide !text-[#7890b2]">
                  Route
                </span>

                <p className="m-0 text-sm font-normal !leading-5 !text-[#5d7192]">
                  {row.route}
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase !leading-4 tracking-wide !text-[#7890b2]">
                  Why not here
                </span>

                <p className="m-0 text-sm font-normal !leading-5 !text-[#5d7192]">
                  {row.why}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Table — md and up */}
        <div className="hidden w-full overflow-hidden rounded-2xl border border-[#dfe5ee] bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)] lg:block">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#fafbfc]">
                  <th className="w-72 border-b border-[#dfe5ee] px-4 pb-3.5 pt-3 text-left text-xs font-bold uppercase !leading-4 tracking-wide !text-[#7890b2]">
                    Situation
                  </th>

                  <th className="w-72 border-b border-[#dfe5ee] px-4 pb-3.5 pt-3 text-left text-xs font-bold uppercase !leading-4 tracking-wide !text-[#7890b2]">
                    Route
                  </th>

                  <th className="border-b border-[#dfe5ee] px-4 pb-3.5 pt-3 text-left text-xs font-bold uppercase !leading-4 tracking-wide !text-[#7890b2]">
                    Why not here
                  </th>
                </tr>
              </thead>

              <tbody>
                {SITUATIONS.map((row, index) => (
                  <tr
                    key={row.situation}
                    className={
                      index === SITUATIONS.length - 1
                        ? ""
                        : "border-b border-[#edf0f4]"
                    }
                  >
                    <td className="px-4 py-3.5 align-top text-sm font-semibold !leading-5 !text-[#091127]">
                      {row.situation}
                    </td>

                    <td className="px-4 py-3.5 align-top text-sm font-normal !leading-5 !text-[#5d7192]">
                      {row.route}
                    </td>

                    <td className="px-4 py-3.5 align-top text-sm font-normal !leading-5 !text-[#5d7192]">
                      {row.why}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
