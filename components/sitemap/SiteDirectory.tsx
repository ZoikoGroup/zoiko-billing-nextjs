"use client";

import { useState } from "react";

const legalDestinations = [
  {
    title: "Terms of User",
    description: "Contractual terms governing use of the service and site.",
    status: "Published",
  },
  {
    title: "Privacy Policy",
    description:
      "How personal data is handled, and the rights and choices that apply.",
    status: "Published",
  },
  {
    title: "Cookie Policy",
    description:
      "Cookies and similar technologies, and the route to your choices.",
    status: "Published",
  },
  {
    title: "Acceptable Use Policy",
    description:
      "Responsible-use boundaries and routes for reporting misuse.",
    status: "Published",
  },
  {
    title: "Data Processing Addendum",
    description: "Data-processing contract terms and annexes.",
    status: "Published",
  },
  {
    title: "Subprocessors",
    description: "The current provider registry and its change process.",
    status: "Published",
  },
  {
    title: "Legal Notices",
    description:
      "Published legal notices and corporate disclosures.",
    status: "Published",
  },
  {
    title: "Sitemap",
    description:
      "This page. The human-readable directory of public destinations.",
    status: "Current page",
  },
];

const faqItems = [
  {
    question: "What is this page?",
    answer:
      "This is the human-readable Zoiko Billing site directory. It helps you find approved public destinations on the site. It is a navigation aid, not a machine-readable sitemap or a complete inventory of every route.",
  },
  {
    question: "Does it list every page, including account pages?",
    answer:
      "No. Authenticated application pages, private areas, generated search results, parameterised URLs and other ineligible routes are not listed. Only approved public destinations that are intentionally discoverable are included.",
  },
  {
    question: "Why is a page I expected missing?",
    answer:
      "A page may be missing because its route has not been supplied by the approved route source, is not eligible for the human directory, is private or authenticated, or has been retired or replaced. The directory does not invent or infer routes that have not been confirmed.",
  },
  {
    question: "Is there an XML sitemap?",
    answer:
      "The human-readable directory and an XML sitemap are separate things and can use different eligibility rules. This page does not represent or replace an XML sitemap, and a page appearing here does not imply that it is included in an XML sitemap.",
  },
  {
    question: "Are all listed pages indexed by search engines?",
    answer:
      "No. Being listed here does not guarantee search-engine indexing. Search engines apply their own crawling, indexing and ranking rules, so this directory makes no claim about whether a particular page is indexed.",
  },
  {
    question: "How often is this updated?",
    answer:
      "No fixed update frequency is promised. Entries are published from the approved route source, and this page does not make a completeness or update-timing guarantee.",
  },
  {
    question: "Where are the legal documents?",
    answer:
      "The confirmed legal and corporate destinations are listed in the Legal Corporate section of this directory. This includes the Terms of User, Privacy Policy, Cookie Policy, Acceptable Use Policy, Data Processing Addendum, Subprocessors, Legal Notices and this Sitemap.",
  },
];

const directorySections = [
  {
    label: "What is listed here",
    id: "what-is-listed-here",
  },
  {
    label: "Site directory",
    id: "site-directory",
  },
  {
    label: "Legal Corporate",
    id: "legal-corporate",
  },
  {
    label: "Other destinations",
    id: "other-destinations",
  },
  {
    label: "Find by name",
    id: "still-looking",
  },
  {
    label: "Questions",
    id: "questions",
  },
];

export default function SiteDirectory() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section
      id="top"
      className="w-full bg-[#f7f8fa] font-sans"
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          items-start
          gap-10
          px-5
          py-10

          sm:px-8
          sm:py-12

          md:px-10
          md:py-14

          lg:px-14

          xl:px-20
        "
      >
        {/* =====================================
            LEFT SIDEBAR
        ====================================== */}
        <aside
          className="
            hidden
            w-56
            shrink-0
            flex-col
            items-start
            gap-2.5
            overflow-hidden

            lg:flex
          "
        >
          <div className="flex w-full flex-col items-start">
            <span
              className="
                text-xs
                font-bold
                uppercase
                leading-5
                tracking-wider
                text-[#7890b2]
              "
            >
              On this page
            </span>
          </div>

          <nav className="w-56 border-l border-[#dfe5ee]">
            {directorySections.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="
                  block
                  border-l-[3px]
                  border-transparent
                  px-3
                  py-2.5
                  text-sm
                  font-normal
                  leading-6
                  text-[#7890b2]
                  transition-colors
                  hover:border-[#dfe5ee]
                  hover:text-[#14213d]
                "
              >
                {item.label}
              </a>
            ))}

            <a
              href="#top"
              className="
                block
                border-l-[3px]
                border-[#20c9d8]
                bg-white
                px-3
                py-2.5
                text-sm
                font-semibold
                leading-6
                text-[#14213d]
              "
            >
              Back to the top
            </a>
          </nav>
        </aside>

        {/* =====================================
            MAIN CONTENT
        ====================================== */}
        <main
          className="
            flex
            min-w-0
            flex-1
            flex-col
            gap-6
          "
        >
          {/* =====================================
              WHAT IS LISTED HERE
          ====================================== */}
          <section
            id="what-is-listed-here"
            className="
              w-full
              border
              border-[#dfe5ee]
              bg-white
              px-5
              py-6

              sm:px-6
              sm:py-7

              md:px-8
              md:py-8
            "
          >
            {/* HEADER */}
            <div
              className="
                flex
                flex-col
                gap-3

                sm:flex-row
                sm:flex-wrap
                sm:items-center
              "
            >
              <h2
                className="
                  !m-0
                  text-3xl
                  font-medium
                  leading-8
                  text-[#14213d]
                "
              >
                What is listed here
              </h2>

              <span
                className="
                  inline-flex
                  w-fit
                  items-center
                  gap-1.5
                  border
                  border-[#e28b32]
                  px-2
                  py-0.5
                  text-xs
                  font-semibold
                  uppercase
                  leading-5
                  tracking-wide
                  text-[#e28b32]
                "
              >
                <span
                  className="
                    h-2.5
                    w-2.5
                    rounded-sm
                    border
                    border-[#e28b32]
                  "
                />

                Source partially unavailable
              </span>
            </div>

            {/* DESCRIPTION */}
            <div
              className="
                mt-3
                max-w-[550px]
                border-b
                border-[#dfe5ee]
                pb-5
              "
            >
              <p
                className="
                  !m-0
                  text-sm
                  font-normal
                  leading-6
                  text-[#5d7192]
                "
              >
                This page is the human-readable Zoiko Billing site directory.
                It is a navigation aid, not a machine-readable file.
              </p>
            </div>

            {/* RULES */}
            <div className="mt-8">
              <p
                className="
                  !m-0
                  mb-3
                  text-xs
                  font-normal
                  uppercase
                  leading-5
                  tracking-wide
                  text-[#7890b2]
                "
              >
                Inclusion and exclusion rules
              </p>

              <div className="w-full overflow-x-auto">
                <div className="min-w-[650px]">
                  {/* TABLE HEADER */}
                  <div className="grid grid-cols-[240px_minmax(0,1fr)]">
                    <div
                      className="
                        border-b
                        border-[#b9c6d8]
                        px-3.5
                        py-2.5
                        text-xs
                        font-semibold
                        uppercase
                        leading-5
                        tracking-wide
                        text-[#7890b2]
                      "
                    >
                      Rule
                    </div>

                    <div
                      className="
                        border-b
                        border-[#b9c6d8]
                        px-3.5
                        py-2.5
                        text-xs
                        font-semibold
                        uppercase
                        leading-5
                        tracking-wide
                        text-[#7890b2]
                      "
                    >
                      What it means
                    </div>
                  </div>

                  <DirectoryRule
                    title="Included"
                    description="Current approved public routes that are intentionally discoverable in the human directory."
                  />

                  <DirectoryRule
                    title="Excluded"
                    description="Internal, private, preview, draft, scheduled-but-unpublished, parameterised and unresolved routes."
                  />

                  <DirectoryRule
                    title="Never listed"
                    description="Retired addresses and redirect aliases. Where a page has moved, only its current address appears, under its own label."
                  />

                  <DirectoryRule
                    title="Human and machine differ"
                    description="An HTML directory and an XML sitemap use different eligibility rules. A page appearing here is not a claim about how search engines treat it."
                  />

                  <DirectoryRule
                    title="Currentness"
                    description="No completeness or update-frequency claim is made. Entries publish from the approved route source, and this page does not promise timing."
                  />
                </div>
              </div>
            </div>

            {/* WARNING */}
            <div
              className="
                mt-8
                border-l-[3px]
                border-[#e28b32]
                bg-[#f5f6f8]
                px-5
                py-4
              "
            >
              <p
                className="
                  !m-0
                  text-xs
                  font-bold
                  uppercase
                  leading-5
                  tracking-wide
                  text-[#e28b32]
                "
              >
                Why most groups are missing
              </p>

              <p
                className="
                  !m-0
                  mt-1
                  text-base
                  font-normal
                  leading-6
                  text-[#14213d]
                "
              >
                The approved information architecture and Route Registry have
                not been supplied, so top-level group labels, their order and
                their member pages cannot be published. Inventing them would
                produce links that either do not resolve or point somewhere
                unintended. The Legal Corporate group below is listed because
                its labels and sequence are independently confirmed.
              </p>
            </div>
          </section>

          {/* =====================================
              SITE DIRECTORY
          ====================================== */}
          <section
            id="site-directory"
            className="
              w-full
              border
              border-[#dfe5ee]
              bg-white
              px-5
              py-6

              sm:px-6
              sm:py-7

              md:px-8
              md:py-8
            "
          >
            <h2
              className="
                !m-0
                text-3xl
                font-medium
                leading-8
                text-[#14213d]
              "
            >
              Site directory
            </h2>

            <div
              className="
                mt-3
                max-w-[550px]
                border-b
                border-[#dfe5ee]
                pb-5
              "
            >
              <p
                className="
                  !m-0
                  text-sm
                  font-normal
                  leading-6
                  text-[#5d7192]
                "
              >
                Jump to a site area. Groups follow the approved navigation
                order, not commercial priority.
              </p>
            </div>

            {/* INFO BOX */}
            <div
              className="
                mt-8
                border
                border-[#b9c6d8]
                bg-[#fbfbfc]
                px-5
                py-8

                sm:px-6
                sm:py-9
              "
            >
              <h3
                className="
                  !m-0
                  text-base
                  font-semibold
                  leading-7
                  text-[#14213d]
                "
              >
                Product, developer, pricing, resources, support and company
                groups are not yet listed
              </h3>

              <p
                className="
                  !m-0
                  mt-3
                  max-w-[575px]
                  text-base
                  font-normal
                  leading-6
                  text-[#526887]
                "
              >
                Their labels, order and member pages come from the approved
                information architecture, which has not been supplied. Nothing
                here is borrowed from another Zoiko product&apos;s navigation.
              </p>

              <p
                className="
                  !m-0
                  mt-2
                  max-w-[575px]
                  text-base
                  font-normal
                  leading-6
                  text-[#526887]
                "
              >
                This is a statement about the directory source. It is not a
                statement that these areas of the site do not exist.
              </p>
            </div>
          </section>

          {/* =====================================
              LEGAL CORPORATE
          ====================================== */}
          <section
            id="legal-corporate"
            className="
              w-full
              border
              border-[#dfe5ee]
              bg-white
              px-5
              py-6

              sm:px-6
              sm:py-7

              md:px-8
              md:py-8
            "
          >
            {/* TITLE */}
            <div
              className="
                flex
                flex-col
                gap-3

                sm:flex-row
                sm:flex-wrap
                sm:items-center
              "
            >
              <h2
                className="
                  !m-0
                  text-3xl
                  font-medium
                  leading-8
                  text-[#14213d]
                "
              >
                Legal Corporate
              </h2>

              <span
                className="
                  inline-flex
                  w-fit
                  items-center
                  gap-1.5
                  border
                  border-[#20c9d8]
                  px-2
                  py-0.5
                  text-xs
                  font-semibold
                  uppercase
                  leading-5
                  tracking-wide
                  text-[#20aebb]
                "
              >
                <span className="h-2 w-2 bg-[#20c9d8]" />

                8 destinations
              </span>
            </div>

            {/* DESCRIPTION */}
            <div
              className="
                mt-3
                max-w-[550px]
                border-b
                border-[#dfe5ee]
                pb-5
              "
            >
              <p
                className="
                  !m-0
                  text-sm
                  font-normal
                  leading-6
                  text-[#5d7192]
                "
              >
                Legal and corporate documents governing use of the service, in
                approved sequence order.
              </p>
            </div>

            {/* DESTINATIONS */}
            <div className="mt-4 border-t border-[#dfe5ee]">
              {legalDestinations.map((item, index) => (
                <div
                  key={item.title}
                  className="
                    grid
                    grid-cols-1
                    gap-2
                    border-b
                    border-[#dfe5ee]
                    px-1
                    py-4

                    md:grid-cols-[240px_minmax(0,1fr)_100px]
                    md:items-center
                    md:gap-4
                  "
                >
                  <div>
                    <span
                      className={`
                        text-base
                        leading-6
                        ${
                          index === legalDestinations.length - 1
                            ? "font-semibold text-[#7890b2]"
                            : "font-semibold text-[#14213d]"
                        }
                      `}
                    >
                      {item.title}
                    </span>
                  </div>

                  <div>
                    <p
                      className="
                        !m-0
                        text-sm
                        font-normal
                        leading-6
                        text-[#526887]
                      "
                    >
                      {item.description}
                    </p>
                  </div>

                  <div>
                    <span
                      className="
                        text-xs
                        font-normal
                        uppercase
                        leading-5
                        tracking-wide
                        text-[#7890b2]
                      "
                    >
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* =====================================
              OTHER PUBLIC DESTINATIONS
          ====================================== */}
          <section
            id="other-destinations"
            className="
              w-full
              border
              border-[#dfe5ee]
              bg-white
              px-5
              py-6

              sm:px-6
              sm:py-7

              md:px-8
              md:py-8
            "
          >
            <h2
              className="
                !m-0
                text-3xl
                font-medium
                leading-8
                text-[#14213d]
              "
            >
              Other public destinations
            </h2>

            <div
              className="
                mt-3
                max-w-[550px]
                border-b
                border-[#dfe5ee]
                pb-5
              "
            >
              <p
                className="
                  !m-0
                  text-sm
                  font-normal
                  leading-6
                  text-[#5d7192]
                "
              >
                Support, status, trust, sign-in, contact and search pages appear
                here only where the route source marks them eligible for the
                human directory.
              </p>
            </div>

            {/* INFO BOX */}
            <div
              className="
                mt-8
                border
                border-[#b9c6d8]
                bg-[#fbfbfc]
                px-5
                py-8

                sm:px-6
                sm:py-9
              "
            >
              <h3
                className="
                  !m-0
                  text-base
                  font-semibold
                  leading-7
                  text-[#14213d]
                "
              >
                No other destinations are eligible for listing yet
              </h3>

              <p
                className="
                  !m-0
                  mt-3
                  max-w-[575px]
                  text-base
                  font-normal
                  leading-6
                  text-[#526887]
                "
              >
                Authenticated application pages are never listed, and neither
                are generated search results or any address carrying query
                parameters. A public sign-in page may be listed only if it is
                intentionally discoverable.
              </p>

              <p
                className="
                  !m-0
                  mt-2
                  max-w-[575px]
                  text-base
                  font-normal
                  leading-6
                  text-[#526887]
                "
              >
                Service status will link to the approved status page if one is
                eligible. Operational state is never rendered inside this
                directory.
              </p>
            </div>
          </section>

          {/* =====================================
              QUESTIONS
          ====================================== */}
          <section
            id="questions"
            className="
              w-full
              border
              border-[#dfe5ee]
              bg-white
              px-5
              py-6

              sm:px-6
              sm:py-7

              md:px-8
              md:py-8
            "
          >
            <h2
              className="
                !m-0
                text-3xl
                font-medium
                leading-8
                text-[#14213d]
              "
            >
              Questions
            </h2>

            <div
              className="
                mt-3
                max-w-[550px]
                border-b
                border-[#dfe5ee]
                pb-5
              "
            >
              <p
                className="
                  !m-0
                  text-sm
                  font-normal
                  leading-6
                  text-[#5d7192]
                "
              >
                Short answers about what this directory is and what it is not.
              </p>
            </div>

            {/* FAQ */}
            <div className="mt-8">
              {faqItems.map((item, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={item.question}
                    className="border-b border-[#dfe5ee]"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                      className="
                        flex
                        w-full
                        items-center
                        gap-3
                        py-4
                        text-left
                      "
                    >
                      <span
                        className="
                          flex
                          h-8
                          w-4
                          shrink-0
                          items-center
                          justify-center
                          text-xl
                          font-medium
                          leading-8
                          text-[#7890b2]
                        "
                      >
                        {isOpen ? "−" : "+"}
                      </span>

                      <span
                        className="
                          text-base
                          font-semibold
                          leading-6
                          text-[#14213d]
                        "
                      >
                        {item.question}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="pb-5 pl-7 pr-4">
                        <p
                          className="
                            !m-0
                            text-sm
                            font-normal
                            leading-6
                            text-[#5d7192]
                          "
                        >
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* =====================================
              STILL LOOKING
          ====================================== */}
          <section
            id="still-looking"
            className="
              w-full
              border
              border-[#dfe5ee]
              bg-white
              px-5
              py-6

              sm:px-6
              sm:py-7

              md:px-8
              md:py-8
            "
          >
            <h2
              className="
                !m-0
                text-3xl
                font-medium
                leading-8
                text-[#14213d]
              "
            >
              Still looking?
            </h2>

            <div
              className="
                mt-3
                max-w-[550px]
                border-b
                border-[#dfe5ee]
                pb-5
              "
            >
              <p
                className="
                  !m-0
                  text-sm
                  font-normal
                  leading-6
                  text-[#5d7192]
                "
              >
                Two ways back into the site, plus an optional route to a person.
              </p>
            </div>

            <div className="mt-5 max-w-[493px]">
              <p
                className="
                  !m-0
                  text-sm
                  font-normal
                  leading-6
                  text-[#5d7192]
                "
              >
                No link on this page is behind a form. Nothing here asks for
                your email, your role or your company size before showing you
                where a page is.
              </p>
            </div>
          </section>
        </main>
      </div>
    </section>
  );
}

/* =========================================
   DIRECTORY RULE COMPONENT
========================================= */

function DirectoryRule({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div
      className="
        grid
        grid-cols-[240px_minmax(0,1fr)]
      "
    >
      <div
        className="
          border-b
          border-[#dfe5ee]
          px-3.5
          py-3
          text-sm
          font-semibold
          leading-6
          text-[#14213d]
        "
      >
        {title}
      </div>

      <div
        className="
          border-b
          border-[#dfe5ee]
          px-3.5
          py-3
          text-sm
          font-normal
          leading-6
          text-[#14213d]
        "
      >
        {description}
      </div>
    </div>
  );
}