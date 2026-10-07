"use client";

import { useState } from "react";
import Link from "next/link";

type Field = {
  label: string;
  type:
    | "select"
    | "text"
    | "email"
    | "textarea"
    | "date"
    | "time"
    | "timezone"
    | "url"
    | "checkbox";
  required?: boolean;
  optional?: boolean;
  note: string;
  options?: string[];
};

type RequestType = {
  title: string;
  description: string;
  contractDescription: string;
  fields: Field[];
};

const commonFields = (
  extraFields: Field[]
): Field[] => [
  {
    label: "Request type",
    type: "select",
    required: true,
    note: "Drives which fields appear below.",
    options: [
      "Comment or statement",
      "Fact check",
      "Interview request",
      "Press assets",
      "Event or speaking",
      "Background briefing",
    ],
  },
  {
    label: "Full name",
    type: "text",
    required: true,
    note: "Minimal personal data.",
  },
  {
    label: "Professional email",
    type: "email",
    required: true,
    note: "Format validated. No specific domain is required unless an approved policy exists.",
  },
  {
    label: "Outlet or organisation",
    type: "text",
    required: true,
    note: "Reasonable length limit.",
  },
  {
    label: "Role or title",
    type: "text",
    optional: true,
    note: "Professional context only.",
  },
  {
    label: "Country or region",
    type: "select",
    optional: true,
    note: "Routing and timezone context only.",
    options: [
      "India",
      "United Kingdom",
      "United States",
      "Europe",
      "Other",
    ],
  },
  ...extraFields,
  {
    label: "Consent & privacy",
    type: "checkbox",
    required: true,
    note: "Links to the authoritative privacy policy.",
  },
];

const requestTypes: RequestType[] = [
  {
    title: "Comment or statement",
    description: "A quote or position on a topic.",
    contractDescription:
      "A quote or position on a specific topic, for attribution in a published piece.",
    fields: commonFields([
      {
        label: "Topic or subject",
        type: "text",
        required: true,
        note: "What the piece is about.",
      },
      {
        label: "Specific questions",
        type: "textarea",
        required: true,
        note: "Required. A comment request without questions cannot be reviewed by whoever would answer them.",
      },
      {
        label: "Publication or programme",
        type: "text",
        optional: true,
        note: "No audience-size threshold applies unless governed.",
      },
      {
        label: "Deadline date",
        type: "date",
        required: true,
        note: "Future date validated.",
      },
      {
        label: "Deadline time",
        type: "time",
        optional: true,
        note: "If supplied, a timezone is required.",
      },
      {
        label: "Timezone",
        type: "timezone",
        optional: true,
        note: "Conditional on deadline time.",
      },
      {
        label: "Format",
        type: "select",
        optional: true,
        note: "No editorial inference is drawn from this.",
        options: [
          "Article",
          "Broadcast",
          "Podcast",
          "Event",
          "Report",
          "Other",
        ],
      },
      {
        label: "Public source links",
        type: "url",
        optional: true,
        note: "URLs only. No attachments.",
      },
    ]),
  },

  {
    title: "Fact check",
    description: "Verifying a claim before publication.",
    contractDescription:
      "A request to verify a specific claim before publication.",
    fields: commonFields([
      {
        label: "Claim to verify",
        type: "textarea",
        required: true,
        note: "The specific claim requiring verification.",
      },
      {
        label: "Source or publication",
        type: "text",
        required: true,
        note: "Where the claim appears.",
      },
      {
        label: "Public source links",
        type: "url",
        optional: true,
        note: "URLs only. No attachments.",
      },
      {
        label: "Deadline date",
        type: "date",
        required: true,
        note: "Future date validated.",
      },
      {
        label: "Deadline time",
        type: "time",
        optional: true,
        note: "If supplied, a timezone is required.",
      },
      {
        label: "Timezone",
        type: "timezone",
        optional: true,
        note: "Conditional on deadline time.",
      },
    ]),
  },

  {
    title: "Interview request",
    description: "A conversation with a representative.",
    contractDescription:
      "A request for an interview with an appropriate representative.",
    fields: commonFields([
      {
        label: "Interview topic",
        type: "text",
        required: true,
        note: "What the interview would cover.",
      },
      {
        label: "Specific questions",
        type: "textarea",
        required: true,
        note: "Questions help determine the appropriate representative.",
      },
      {
        label: "Format",
        type: "select",
        optional: true,
        note: "Format context only.",
        options: [
          "Article",
          "Broadcast",
          "Podcast",
          "Event",
          "Other",
        ],
      },
      {
        label: "Deadline date",
        type: "date",
        required: true,
        note: "Future date validated.",
      },
      {
        label: "Deadline time",
        type: "time",
        optional: true,
        note: "If supplied, a timezone is required.",
      },
      {
        label: "Timezone",
        type: "timezone",
        optional: true,
        note: "Conditional on deadline time.",
      },
    ]),
  },

  {
    title: "Press assets",
    description: "Logos, imagery or approved material.",
    contractDescription:
      "A request for approved logos, imagery or other press material.",
    fields: commonFields([
      {
        label: "Asset requested",
        type: "text",
        required: true,
        note: "Identify the specific approved material required.",
      },
      {
        label: "Intended use",
        type: "textarea",
        required: true,
        note: "Explain where and how the asset will be used.",
      },
      {
        label: "Publication or programme",
        type: "text",
        optional: true,
        note: "Publication or programme context.",
      },
      {
        label: "Deadline date",
        type: "date",
        required: true,
        note: "Future date validated.",
      },
      {
        label: "Public source links",
        type: "url",
        optional: true,
        note: "URLs only. No attachments.",
      },
    ]),
  },

  {
    title: "Event or speaking",
    description: "Panel, conference or programme.",
    contractDescription:
      "A request concerning a panel, conference, speaking engagement or programme.",
    fields: commonFields([
      {
        label: "Event or programme",
        type: "text",
        required: true,
        note: "Name of the event or programme.",
      },
      {
        label: "Event date",
        type: "date",
        required: true,
        note: "Future date validated.",
      },
      {
        label: "Location",
        type: "text",
        optional: true,
        note: "Event location or delivery context.",
      },
      {
        label: "Speaking topic",
        type: "textarea",
        required: true,
        note: "Describe the proposed topic or contribution.",
      },
      {
        label: "Format",
        type: "select",
        optional: true,
        note: "Format context only.",
        options: [
          "Panel",
          "Keynote",
          "Interview",
          "Workshop",
          "Other",
        ],
      },
      {
        label: "Public source links",
        type: "url",
        optional: true,
        note: "URLs only. No attachments.",
      },
    ]),
  },

  {
    title: "Background briefing",
    description: "Context for a longer piece.",
    contractDescription:
      "A request for background context to support a longer piece.",
    fields: commonFields([
      {
        label: "Topic or subject",
        type: "text",
        required: true,
        note: "What the longer piece is about.",
      },
      {
        label: "Specific questions",
        type: "textarea",
        required: true,
        note: "Questions help establish the required background context.",
      },
      {
        label: "Publication or programme",
        type: "text",
        optional: true,
        note: "Publication or programme context.",
      },
      {
        label: "Deadline date",
        type: "date",
        required: true,
        note: "Future date validated.",
      },
      {
        label: "Deadline time",
        type: "time",
        optional: true,
        note: "If supplied, a timezone is required.",
      },
      {
        label: "Timezone",
        type: "timezone",
        optional: true,
        note: "Conditional on deadline time.",
      },
      {
        label: "Public source links",
        type: "url",
        optional: true,
        note: "URLs only. No attachments.",
      },
    ]),
  },
];

export default function MediaEnquiry() {
  const [selectedType, setSelectedType] = useState(0);

  const selectedRequest = requestTypes[selectedType];

  return (
    <section className="w-full bg-[#f7f8fa]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-start
          px-5
          py-14
          sm:px-8
          sm:py-16
          md:px-10
          md:py-20
          lg:px-14
          xl:px-20
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1240px]
            flex-col
            items-center
            gap-11
          "
        >
          {/* INTRO */}
          <div
            className="
              flex
              w-full
              max-w-[662px]
              flex-col
              items-center
              gap-3
              pt-2
              text-center
            "
          >
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-4 bg-[#7890b2] opacity-40" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.16em]
                  text-[#7890b2]
                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Media enquiry
              </span>

              <span className="h-px w-4 bg-[#7890b2] opacity-40" />
            </div>

            <h2
              className="
                !m-0
                w-full
                !text-[30px]
                !font-extrabold
                !leading-[1.2]
                !tracking-[-0.035em]
                !text-[#091127]
                sm:!text-[34px]
                md:!text-[36px]
                lg:!text-[40px]
              "
            >
              Six request types, each with different
             required fields.
            </h2>

            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]
                sm:text-base
              "
            >
              Select a type to see the field contract.{" "}
              <span className="font-bold">
                Progressive disclosure keeps the form to what your
                request actually needs.
              </span>
            </p>
          </div>

          {/* MAIN CARD */}
          <div
            className="
              w-full
              overflow-hidden
              rounded-xl
              border
              border-[#dfe5ee]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
            "
          >
            {/* HEADER */}
            <div
              className="
                border-b
                border-[#edf0f4]
                bg-[#fafbfc]
                px-4
                py-3.5
              "
            >
              <h3
                className="
                  !m-0
                  text-base
                  font-bold
                  leading-6
                  text-[#091127]
                "
              >
                What kind of request is this?
              </h3>

              <p
                className="
                  !m-0
                  mt-1
                  text-xs
                  leading-5
                  text-[#7890b2]
                "
              >
                Illustrative field contract — this form does not
                submit, store or transmit anything.
              </p>
            </div>

            {/* REQUEST TYPES */}
            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
              "
            >
              {requestTypes.map((request, index) => {
                const selected = selectedType === index;

                return (
                  <button
                    key={request.title}
                    type="button"
                    onClick={() => setSelectedType(index)}
                    aria-pressed={selected}
                    className={`
                      flex
                      min-h-[150px]
                      w-full
                      cursor-pointer
                      flex-col
                      items-start
                      gap-5
                      border-b
                      border-l-2
                      border-[#edf0f4]
                      px-3.5
                      pt-8
                      pb-6
                      text-left
                      transition-colors
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-blue-600
                      focus-visible:ring-inset

                      ${
                        selected
                          ? "border-l-black bg-[#f5f6f8]"
                          : "border-l-transparent bg-white hover:bg-[#fafbfc]"
                      }
                    `}
                  >
                    <span
                      className={`
                        text-xs
                        font-bold
                        leading-4
                        ${
                          selected
                            ? "text-[#5d7192]"
                            : "text-[#091127]"
                        }
                      `}
                    >
                      {request.title}
                    </span>

                    <span className="text-xs leading-4 text-[#7890b2]">
                      {request.description}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* CONTRACT */}
            <div className="bg-[#f7f8fa] px-5 pt-8 pb-5">
              <div className="mb-3">
                <p className="!m-0 text-sm leading-5 text-[#5d7192]">
                  <strong className="font-bold text-[#5d7192]">
                    {selectedRequest.title}.
                  </strong>{" "}
                  {selectedRequest.contractDescription}
                </p>
              </div>

              {/* FORM */}
              <form
                onSubmit={(event) => {
                  event.preventDefault();

                  alert(
                    `${selectedRequest.title} enquiry submitted successfully.`
                  );
                }}
                className="
                  overflow-hidden
                  rounded-[10px]
                  border
                  border-[#dfe5ee]
                  bg-white
                "
              >
                {/* FORM TITLE */}
                <div
                  className="
                    border-b
                    border-[#edf0f4]
                    bg-[#fafbfc]
                    px-3.5
                    py-2.5
                  "
                >
                  <p
                    className="
                      !m-0
                      text-xs
                      font-bold
                      leading-5
                      text-[#091127]
                    "
                  >
                    Media enquiry — {selectedRequest.title}
                  </p>
                </div>

                {/* FIELDS */}
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {selectedRequest.fields.map((field, index) => (
                    <div
                      key={`${selectedRequest.title}-${field.label}`}
                      className={`
                        flex
                        flex-col
                        gap-1.5
                        border-b
                        border-[#edf0f4]
                        px-3.5
                        py-2.5

                        ${
                          index % 2 === 0
                            ? "md:border-r"
                            : ""
                        }

                        ${
                          field.type === "checkbox"
                            ? "md:col-span-2 md:border-r-0"
                            : ""
                        }
                      `}
                    >
                      {/* LABEL */}
                      <label
                        htmlFor={`${selectedType}-${field.label}`}
                        className="
                          flex
                          flex-wrap
                          items-center
                          gap-1
                          text-xs
                          font-bold
                          uppercase
                          leading-4
                          tracking-wide
                          text-[#7890b2]
                        "
                      >
                        {field.label}

                        {field.required && (
                          <span className="text-red-500">
                            *
                          </span>
                        )}

                        {field.optional && (
                          <span
                            className="
                              text-[10px]
                              font-medium
                              normal-case
                              tracking-normal
                              text-[#7890b2]
                            "
                          >
                            optional
                          </span>
                        )}
                      </label>

                      {/* ACTUAL INPUT */}
                      {field.type === "select" && (
                        <select
                          id={`${selectedType}-${field.label}`}
                          required={field.required}
                          defaultValue=""
                          className="
                            min-h-10
                            w-full
                            rounded-md
                            border
                            border-[#dfe5ee]
                            bg-[#fafbfc]
                            px-2.5
                            text-sm
                            leading-5
                            text-[#5d7192]
                            outline-none
                            focus:border-blue-600
                            focus:ring-2
                            focus:ring-blue-600/20
                          "
                        >
                          <option value="" disabled>
                            Select an option
                          </option>

                          {field.options?.map((option) => (
                            <option
                              key={option}
                              value={option}
                            >
                              {option}
                            </option>
                          ))}
                        </select>
                      )}

                      {field.type === "text" && (
                        <input
                          id={`${selectedType}-${field.label}`}
                          type="text"
                          required={field.required}
                          className="
                            min-h-10
                            w-full
                            rounded-md
                            border
                            border-[#dfe5ee]
                            bg-[#fafbfc]
                            px-2.5
                            text-sm
                            leading-5
                            text-[#091127]
                            outline-none
                            placeholder:text-[#7890b2]
                            focus:border-blue-600
                            focus:ring-2
                            focus:ring-blue-600/20
                          "
                          placeholder="Enter value"
                        />
                      )}

                      {field.type === "email" && (
                        <input
                          id={`${selectedType}-${field.label}`}
                          type="email"
                          required={field.required}
                          className="
                            min-h-10
                            w-full
                            rounded-md
                            border
                            border-[#dfe5ee]
                            bg-[#fafbfc]
                            px-2.5
                            text-sm
                            leading-5
                            text-[#091127]
                            outline-none
                            placeholder:text-[#7890b2]
                            focus:border-blue-600
                            focus:ring-2
                            focus:ring-blue-600/20
                          "
                          placeholder="name@example.com"
                        />
                      )}

                      {field.type === "textarea" && (
                        <textarea
                          id={`${selectedType}-${field.label}`}
                          required={field.required}
                          rows={4}
                          className="
                            w-full
                            resize-y
                            rounded-md
                            border
                            border-[#dfe5ee]
                            bg-[#fafbfc]
                            px-2.5
                            py-2
                            text-sm
                            leading-5
                            text-[#091127]
                            outline-none
                            placeholder:text-[#7890b2]
                            focus:border-blue-600
                            focus:ring-2
                            focus:ring-blue-600/20
                          "
                          placeholder="Enter details"
                        />
                      )}

                      {field.type === "date" && (
                        <input
                          id={`${selectedType}-${field.label}`}
                          type="date"
                          required={field.required}
                          className="
                            min-h-10
                            w-full
                            rounded-md
                            border
                            border-[#dfe5ee]
                            bg-[#fafbfc]
                            px-2.5
                            text-sm
                            text-[#091127]
                            outline-none
                            focus:border-blue-600
                            focus:ring-2
                            focus:ring-blue-600/20
                          "
                        />
                      )}

                      {field.type === "time" && (
                        <input
                          id={`${selectedType}-${field.label}`}
                          type="time"
                          required={field.required}
                          className="
                            min-h-10
                            w-full
                            rounded-md
                            border
                            border-[#dfe5ee]
                            bg-[#fafbfc]
                            px-2.5
                            text-sm
                            text-[#091127]
                            outline-none
                            focus:border-blue-600
                            focus:ring-2
                            focus:ring-blue-600/20
                          "
                        />
                      )}

                      {field.type === "timezone" && (
                        <select
                          id={`${selectedType}-${field.label}`}
                          required={field.required}
                          defaultValue=""
                          className="
                            min-h-10
                            w-full
                            rounded-md
                            border
                            border-[#dfe5ee]
                            bg-[#fafbfc]
                            px-2.5
                            text-sm
                            text-[#5d7192]
                            outline-none
                            focus:border-blue-600
                            focus:ring-2
                            focus:ring-blue-600/20
                          "
                        >
                          <option value="" disabled>
                            Select timezone
                          </option>

                          <option value="IST">
                            India Standard Time
                          </option>

                          <option value="GMT">
                            Greenwich Mean Time
                          </option>

                          <option value="UTC">
                            Coordinated Universal Time
                          </option>

                          <option value="EST">
                            Eastern Time
                          </option>

                          <option value="PST">
                            Pacific Time
                          </option>
                        </select>
                      )}

                      {field.type === "url" && (
                        <input
                          id={`${selectedType}-${field.label}`}
                          type="url"
                          required={field.required}
                          className="
                            min-h-10
                            w-full
                            rounded-md
                            border
                            border-[#dfe5ee]
                            bg-[#fafbfc]
                            px-2.5
                            text-sm
                            leading-5
                            text-[#091127]
                            outline-none
                            placeholder:text-[#7890b2]
                            focus:border-blue-600
                            focus:ring-2
                            focus:ring-blue-600/20
                          "
                          placeholder="https://"
                        />
                      )}

                      {field.type === "checkbox" && (
                        <label
                          htmlFor={`${selectedType}-${field.label}`}
                          className="
                            flex
                            min-h-10
                            cursor-pointer
                            items-center
                            gap-2.5
                            rounded-md
                            border
                            border-[#dfe5ee]
                            bg-[#fafbfc]
                            px-2.5
                          "
                        >
                          <input
                            id={`${selectedType}-${field.label}`}
                            type="checkbox"
                            required={field.required}
                            className="
                              h-4
                              w-4
                              shrink-0
                              accent-blue-600
                            "
                          />

                          <span className="text-sm leading-5 text-[#5d7192]">
                            I agree to the{" "}
                            <Link
  href="/privacy-policy"
  className="font-semibold !text-blue-600 transition-colors hover:text-blue-700 hover:underline"
>
  privacy policy
</Link>
                          </span>
                        </label>
                      )}

                      {/* NOTE */}
                      <p
                        className="
                          !m-0
                          text-[10px]
                          leading-4
                          text-[#7890b2]
                        "
                      >
                        {field.note}
                      </p>
                    </div>
                  ))}
                </div>

                {/* SUBMIT */}
                <div
                  className="
                    flex
                    items-center
                    border-t
                    border-[#edf0f4]
                    bg-[#fafbfc]
                    px-3.5
                    py-3
                  "
                >
                  <button
                    type="submit"
                    className="
                      min-h-10
                      rounded-full
                      bg-blue-600
                      px-5
                      py-2
                      text-sm
                      font-semibold
                      leading-5
                      text-white
                      shadow-[0_8px_20px_rgba(31,111,235,0.26)]
                      transition
                      hover:bg-blue-700
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-blue-600
                      focus-visible:ring-offset-2
                    "
                  >
                    Submit enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}