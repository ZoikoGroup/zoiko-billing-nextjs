"use client";

import Image from "next/image";
import Link from "next/link";

const accessControls = [
  {
    title: "Authenticated or tokenized access",
    description:
      "An authenticated session or a tokenized access model, where each is supported.",
  },
  {
    title: "Recipient or tenant binding",
    description:
      "Access is bound to the intended recipient or tenant rather than open to anyone holding a URL.",
  },
  {
    title: "Expiry and download limits",
    description:
      "Access windows expire, and download counts can be limited where supported.",
  },
  {
    title: "Revocation",
    description:
      "Access can be withdrawn before expiry when circumstances change.",
  },
  {
    title: "Step-up verification",
    description:
      "Additional verification before access, where that is supported for the document class.",
  },
  {
    title: "Nothing sensitive in URLs",
    description:
      "No sensitive data is placed in ordinary URL parameters.",
  },
];

const securityItems = [
  {
    title: "Least-privilege access",
    description:
      "Documents, recipients, templates and provider actions each carry their own access scope.",
  },
  {
    title: "Content protection",
    description:
      "Customer, address, tax, payment-reference and document content are protected in handling.",
  },
  {
    title: "Approved secret storage",
    description:
      "Provider credentials sit in approved systems with minimum provider scopes.",
  },
  {
    title: "Encryption as evidenced",
    description:
      "Encryption, secure links and downloads are described only as far as evidence supports.",
  },
  {
    title: "Full action audit",
    description:
      "Render, release, send, retry, download, export and correction all leave evidence.",
  },
  {
    title: "Retention and legal hold",
    description:
      "Defined retention, archive, deletion and legal-hold treatment for artifacts.",
  },
];

export default function SecureAccess() {
  return (
    <section className="w-full bg-color-grey-97-2">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-28 lg:py-24">
        <div className="mx-auto flex w-full max-w-[1220px] flex-col gap-9 lg:px-12">

          {/* ================= HEADER ================= */}
          <div className="flex w-full flex-col items-start gap-10 lg:flex-row lg:items-end lg:gap-16">
            <div className="flex w-full flex-1 flex-col items-start gap-5 pt-2.5 pb-6">

              {/* Eyebrow */}
              <div className="relative h-4 w-36">
                <div className="absolute left-0 top-[7.94px] h-0.5 w-5 rounded-sm bg-gradient-to-r from-color-cyan-42 to-color-azure-51" />

                <span className="absolute left-[30px] top-[-1px] whitespace-nowrap font-mono text-xs font-medium uppercase leading-4 tracking-wider text-color-azure-44">
                  Secure access
                </span>
              </div>

              {/* Heading */}
              <div className="w-full max-w-[638px]">
                <h2 className="text-4xl font-medium leading-[1.12] tracking-tight text-sky-950 sm:text-5xl lg:text-[48px] lg:leading-[53.82px]">
                  Protect sensitive billing
                  <br className="hidden sm:block" />
                  content from render to
                  <br className="hidden sm:block" />
                  access.
                </h2>
              </div>
            </div>

            {/* Header description */}
            <div className="w-full max-w-[529px]">
              <p className="text-base font-normal leading-8 text-color-azure-35">
                Where a document is reached by link or portal rather than
                attached, the access model is part of the delivery design.
              </p>
            </div>
          </div>

          {/* ================= ACCESS CONTROLS ================= */}
          <div className="flex w-full flex-col gap-10 pt-6 pb-10 lg:flex-row lg:justify-center lg:gap-16">

            {/* LEFT */}
            <div className="w-full max-w-[526px]">
              <h3 className="mb-1.5 text-lg font-semibold leading-6 text-sky-950">
                Access controls
              </h3>

              <div className="flex flex-col">
                {accessControls.map((item, index) => (
                  <div
                    key={item.title}
                    className={`flex flex-col gap-4 py-3.5 sm:flex-row sm:items-center ${
                      index !== accessControls.length - 1
                        ? "border-b border-color-grey-93-4"
                        : ""
                    }`}
                  >
                    <div className="w-full shrink-0 sm:w-36">
                      <h4 className="text-sm font-semibold leading-6 text-sky-950">
                        {item.title}
                      </h4>
                    </div>

                    <div className="flex-1">
                      <p className="text-sm font-normal leading-6 text-color-azure-35">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex w-full max-w-[526px] flex-col gap-3">

              {/* Image */}
              <div className="relative h-[280px] w-full overflow-hidden rounded-2xl border border-zinc-200 sm:h-[320px] lg:h-[351px]">
                <Image
                  src="/images/documents-and-delivery/secure-access.png"
                  alt="Secure access"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 526px"
                />
              </div>

              {/* Boundary */}
              <div className="flex w-full flex-col items-start gap-2 rounded-r-2xl border-l-[3px] border-color-azure-51 bg-color-grey-97-2 px-7 py-7">
                <span className="font-mono text-[9.9px] font-normal uppercase leading-4 tracking-wide text-color-azure-44">
                  Access boundary
                </span>

                <p className="text-base font-normal leading-7 text-sky-950">
                  A view or download event is not necessarily legal acceptance,
                  and no link is described as fully secure or unbreakable.
                  Security behaviour is stated only from approved architecture
                  and evidence.
                </p>
              </div>
            </div>
          </div>

          {/* ================= TRUST HEADER ================= */}
          <div className="flex w-full flex-col items-start gap-3.5 border-t border-zinc-200 pt-12">
            <h3 className="text-3xl font-medium leading-8 text-sky-950">
              Trust, privacy and security
            </h3>

            <p className="max-w-[555px] text-base font-normal leading-7 text-color-azure-35">
              Billing documents carry customer, address, tax and
              payment-reference data, so handling is controlled from render
              through to retention.
            </p>
          </div>

          {/* ================= 6 SECURITY BOXES ================= */}
          <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2">

            {securityItems.map((item) => (
              <div
                key={item.title}
                className="flex min-h-[150px] w-full flex-col items-start rounded-2xl border border-zinc-200 bg-white px-6 py-6"
              >
                <h4 className="mb-2 text-base font-semibold leading-6 text-sky-950">
                  {item.title}
                </h4>

                <p className="text-sm font-normal leading-6 text-color-azure-35">
                  {item.description}
                </p>
              </div>
            ))}

          </div>

          {/* ================= PUBLICATION BOUNDARY ================= */}
          <div className="flex w-full flex-col items-start gap-2 rounded-r-2xl border-l-[3px] border-color-azure-51 bg-color-grey-97-2 px-7 pt-9 pb-7">
            <span className="font-mono text-[9.9px] font-normal uppercase leading-4 tracking-wide text-color-azure-44">
              Publication boundary
            </span>

            <p className="text-base font-normal leading-7 text-sky-950">
              Internal provider, queue and security details are never
              published, and no document contents, recipients, links or
              secrets appear in ordinary analytics. Product controls do not
              replace legal service, records-management or privacy advice.
            </p>
          </div>

          {/* ================= CTA ================= */}
          <div className="flex w-full items-center justify-center pt-2">
            <div className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row">

              {/* PRIMARY CTA */}
              <Link
                href="/security"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-sky-950 px-5 py-2.5 no-underline"
              >
                <span className="text-[16px] font-normal leading-6 text-white">
                  Review security and trust
                </span>
              </Link>

              {/* SECONDARY CTA */}
              <Link
                href="/privacy"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 px-3 py-2.5 no-underline"
              >
                <span className="text-[16px] font-normal leading-6 text-[#0077B6]">
                  Read the privacy notice
                </span>

                <span className="text-[16px] font-bold leading-6 text-[#0077B6]">
                  →
                </span>
              </Link>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}