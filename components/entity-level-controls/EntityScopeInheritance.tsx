import Image from "next/image";

import { Eyebrow, heading } from "./shared";

const SCOPES: { term: string; detail: string }[] = [
  {
    term: "Single entity",
    detail: "the permission applies only to the named billing entity.",
  },
  {
    term: "Explicit entity set",
    detail: "applies only to listed, registry-resolved entities.",
  },
  {
    term: "Operational oversight set",
    detail:
      "may permit cross-entity viewing, but not financial or configuration action unless separately granted.",
  },
  {
    term: "Delegated scope",
    detail: "temporary and purpose-bound, with start, end and revocation.",
  },
  {
    term: "Support scope",
    detail:
      "bounded by time, purpose, account and entity under support policy.",
  },
  {
    term: "Future entity",
    detail:
      "no automatic inclusion unless policy explicitly supports governed dynamic membership.",
  },
  {
    term: "Jurisdiction or currency filter",
    detail:
      "may constrain scope only where explicitly configured; never inferred from location or currency alone.",
  },
];

export default function EntityScopeInheritance() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-12 lg:py-20 xl:px-24">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-10 lg:flex-row lg:gap-14 lg:px-7">
        <div className="flex w-full flex-col items-start gap-3.5 pt-2 lg:flex-1">
          <Eyebrow>Entity scope, assignment &amp; inheritance</Eyebrow>

          <h2
            className={`${heading} !mb-0 !text-[26px] !leading-8 !tracking-[-0.02em] !text-[#0F172A] sm:!text-3xl sm:!leading-9`}
          >
            Corporate hierarchy is not permission inheritance.
          </h2>

          <p className="!mb-0 max-w-[688px] text-base !leading-7 !text-[#5D7192]">
            A user who can act for a parent or group does not automatically gain
            rights in every child entity, and a child-entity admin does not
            automatically gain parent or global rights.
          </p>

          <dl className="m-0 flex w-full flex-col gap-2.5 pt-1.5">
            {SCOPES.map(({ term, detail }) => (
              <div key={term} className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="mt-[9px] size-1.5 shrink-0 rounded-[2px] bg-[#1F6FEB]"
                />
                <div className="min-w-0 text-sm !leading-6 !text-[#5D7192]">
                  <dt className="inline font-bold">{term}</dt>{" "}
                  <dd className="m-0 inline">— {detail}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <div className="w-full rounded-3xl bg-[#EDF1F7] p-4 lg:flex-1">
          <Image
            src="/images/entity-level-controls/entity-scope-inheritance.png"
            alt="A corporate entity tree beside a policy shield granting and denying separate permission sets"
            width={548}
            height={515}
            sizes="(min-width: 1024px) 548px, 100vw"
            className="h-auto w-full rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
