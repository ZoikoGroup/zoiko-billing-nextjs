import { Section, SectionHeading } from "./shared";

const CONTRACT: { term: string; detail: string }[] = [
  {
    term: "Action subject to approval",
    detail: "A specific action, object, entity and state",
  },
  { term: "Initiator eligibility", detail: "Who may prepare or request the action" },
  {
    term: "Approver eligibility",
    detail: "Role, entity and scope conditions, with current access required",
  },
  { term: "Self-approval", detail: "Allowed or blocked explicitly" },
  {
    term: "Number & order",
    detail: "One, multiple, sequential or parallel — only where configured",
  },
  {
    term: "Threshold",
    detail: "Amount, risk class, configuration type or another approved trigger",
  },
  {
    term: "Substitution",
    detail: "Temporary approver substitution only via governed delegation",
  },
  {
    term: "Expiry",
    detail: "A pending approval may expire or recalculate if context changes",
  },
  {
    term: "Re-evaluation",
    detail: "Permission, policy, entity and object state rechecked before commit",
  },
  {
    term: "Evidence",
    detail:
      "Request, approver, decision, reason, timestamps, policy version and outcome",
  },
];

type Posture = "block" | "separate";

const CONFLICTS: { combination: string; posture: Posture; detail: string }[] = [
  {
    combination: "Prepare + approve the same material action",
    posture: "block",
    detail: "where policy marks the combination incompatible",
  },
  {
    combination: "Create payment or mapping + reconcile or approve it",
    posture: "separate",
    detail: "where financial-control policy requires",
  },
  {
    combination: "Change a permission + approve own change",
    posture: "block",
    detail: "— prevents privilege self-escalation",
  },
  {
    combination: "Edit controlled text + publish a high-risk variant",
    posture: "separate",
    detail: "where content or legal policy requires",
  },
  {
    combination: "Support access + permanent role assignment",
    posture: "block",
    detail: "— a support session cannot create standing privilege",
  },
];

const POSTURE_STYLES: Record<Posture, { pill: string; dot: string; label: string }> =
  {
    block: {
      pill: "border-[#FECACA] bg-[#FEF2F2] !text-[#DC2626]",
      dot: "bg-[#DC2626]",
      label: "Block",
    },
    separate: {
      pill: "border-[#FDE2B8] bg-[#FEF6E7] !text-[#B45309]",
      dot: "bg-[#B45309]",
      label: "Separate",
    },
  };

function Card({
  caption,
  children,
}: {
  caption: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full flex-col overflow-hidden rounded-2xl border border-[#DFE5EE] bg-white shadow-[0px_1px_2px_0px_rgba(15,23,42,0.04),0px_8px_24px_0px_rgba(15,23,42,0.05)] lg:flex-1">
      <div className="border-b border-[#DFE5EE] bg-[#FCFDFE] px-5 py-4">
        <p className="!mb-0 text-sm !leading-5 !text-[#5D7192]">{caption}</p>
      </div>
      {children}
    </div>
  );
}

export default function ApprovalPolicies() {
  return (
    <Section tone="tint">
      <SectionHeading
        eyebrow="Approval policies & segregation of duties"
        title="Self-approval is never a default that can be guessed."
        intro={
          <>
            It is explicitly allowed or explicitly blocked by configured policy. A
            vague &ldquo;approval required&rdquo; label is not a policy.
          </>
        }
      />

      <div className="flex w-full flex-col items-stretch gap-5 pt-6 lg:flex-row">
        <Card caption="Required contract for every approval policy.">
          {CONTRACT.map(({ term, detail }, i) => (
            <div
              key={term}
              className={`flex flex-col gap-1 px-4 py-3.5 xl:flex-row xl:gap-0 ${
                i < CONTRACT.length - 1 ? "border-b border-[#EDF0F4]" : ""
              }`}
            >
              <p className="!mb-0 text-sm font-semibold !leading-5 !text-[#0F172A] xl:w-44 xl:shrink-0 xl:pr-4">
                {term}
              </p>
              <p className="!mb-0 min-w-0 text-sm !leading-5 !text-[#5D7192]">
                {detail}
              </p>
            </div>
          ))}
        </Card>

        <Card caption="Potential conflicts and the required posture.">
          {CONFLICTS.map(({ combination, posture, detail }, i) => {
            const style = POSTURE_STYLES[posture];
            return (
              <div
                key={combination}
                className={`flex flex-col gap-2 px-4 py-3.5 xl:flex-row xl:gap-0 ${
                  i < CONFLICTS.length - 1 ? "border-b border-[#EDF0F4]" : ""
                }`}
              >
                <p className="!mb-0 text-sm font-semibold !leading-5 !text-[#0F172A] xl:w-56 xl:shrink-0 xl:pr-4">
                  {combination}
                </p>
                <p className="!mb-0 min-w-0 text-sm !leading-5 !text-[#5D7192]">
                  <span
                    className={`mr-1.5 inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 align-middle text-xs font-semibold !leading-4 ${style.pill}`}
                  >
                    <span
                      aria-hidden
                      className={`size-1.5 rounded-sm opacity-80 ${style.dot}`}
                    />
                    {style.label}
                  </span>
                  {detail}
                </p>
              </div>
            );
          })}
        </Card>
      </div>
    </Section>
  );
}
