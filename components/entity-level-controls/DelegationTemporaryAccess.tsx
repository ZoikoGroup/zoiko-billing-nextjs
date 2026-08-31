import Image from "next/image";

import { Section, SectionHeading } from "./shared";

export default function DelegationTemporaryAccess() {
  return (
    <Section tone="dark">
      <SectionHeading
        dark
        eyebrow="Delegation, temporary access & support override"
        title="There is no permanent temporary access."
        intro="Expired delegation or support access is denied even if the user still holds a browser session. An extension requires a new governed decision rather than silently rolling forward."
      />
      <Image
        src="/images/entity-level-controls/temporary-access.png"
        alt="An expired delegation window and expired support session both blocked, with an extension routed through a new approval"
        width={1184}
        height={592}
        sizes="(min-width: 1280px) 1184px, 100vw"
        className="h-auto w-full rounded-2xl"
      />
    </Section>
  );
}
