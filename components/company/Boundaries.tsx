'use client';

import React from 'react';

interface BoundaryRow {
  role: React.ReactNode;
  maySay: React.ReactNode;
  mustNotInfer: React.ReactNode;
}

const BOUNDARY_ROWS: BoundaryRow[] = [
  {
    role: 'Zoiko Billing',
    maySay: 'Approved product identity and company context.',
    mustNotInfer: (
      <>
        <strong>Separate legal entity status</strong> unless Legal authority
        confirms it.
      </>
    ),
  },
  {
    role: 'Zoiko Group',
    maySay: 'The approved parent or group relationship.',
    mustNotInfer: (
      <>
        <strong>
          Group history, portfolio scale, legal control, offices or leadership
        </strong>{' '}
        without group authority.
      </>
    ),
  },
  {
    role: 'Zoiko One',
    maySay: 'The approved integrated-product relationship.',
    mustNotInfer: (
      <>
        <strong>
          Automatic entitlement, bundling or commercial inclusion.
        </strong>
      </>
    ),
  },
  {
    role: (
      <>
        Website operator / legal
        <br />
        entity
      </>
    ),
    maySay: 'Only via an approved legal source link.',
    mustNotInfer: (
      <>
        <strong>
          That it is the same as the product brand or the group.
        </strong>
      </>
    ),
  },
  {
    role: 'Leadership',
    maySay: 'Only current public Leadership Registry records.',
    mustNotInfer: (
      <>
        <strong>
          Board, legal officer or contracting authority equivalence.
        </strong>{' '}
        A public leader is not necessarily a signatory.
      </>
    ),
  },
];

export default function Boundaries() {
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
            gap-8

            sm:gap-10

            md:gap-11
          "
        >
          {/* SECTION INTRO */}
          <div
            className="
              flex
              w-full
              max-w-[1000px]
              flex-col
              items-center
              gap-3
              pt-2
              text-center
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

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
                Entity separation model
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[1000px]
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
              Five roles, and what each must not
            
              infer.
            </h2>

            {/* DESCRIPTION */}
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
              The right-hand column is the substance. Each entry is a
              conclusion a reader draws
              <br className="hidden md:block" />
              by default unless the page prevents it.
            </p>
          </div>

          {/* TABLE */}
          <div
            className="
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
            "
          >
            {/* DESKTOP TABLE */}
            <div className="hidden md:block">
              {/* HEADER */}
              <div
                className="
                  grid
                  grid-cols-[176px_minmax(0,1.05fr)_minmax(0,1fr)]
                  bg-[#fafbfc]
                "
              >
                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-[#7890b2]
                    "
                  >
                    Entity / role
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-[#7890b2]
                    "
                  >
                    May say
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-[#7890b2]
                    "
                  >
                    Must not infer
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {BOUNDARY_ROWS.map((row, index) => (
                <div
                  key={index}
                  className={`
                    grid
                    grid-cols-[176px_minmax(0,1.05fr)_minmax(0,1fr)]
                    ${
                      index !== BOUNDARY_ROWS.length - 1
                        ? 'border-b border-[#edf0f4]'
                        : ''
                    }
                  `}
                >
                  {/* ROLE */}
                  <div className="px-4 py-3.5">
                    <span
                      className="
                        text-sm
                        font-semibold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {row.role}
                    </span>
                  </div>

                  {/* MAY SAY */}
                  <div className="px-4 py-3.5">
                    <span
                      className="
                        text-sm
                        font-normal
                        leading-5
                        text-[#5d7192]
                      "
                    >
                      {row.maySay}
                    </span>
                  </div>

                  {/* MUST NOT INFER */}
                  <div className="px-4 py-3.5">
                    <span
                      className="
                        text-sm
                        font-normal
                        leading-5
                        text-[#5d7192]
                      "
                    >
                      {row.mustNotInfer}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE / SMALL TABLET CARDS */}
            <div className="flex flex-col md:hidden">
              {BOUNDARY_ROWS.map((row, index) => (
                <div
                  key={index}
                  className={`
                    p-5
                    ${
                      index !== BOUNDARY_ROWS.length - 1
                        ? 'border-b border-[#edf0f4]'
                        : ''
                    }
                  `}
                >
                  {/* ENTITY / ROLE */}
                  <div className="mb-4">
                    <p
                      className="
                        !m-0
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[#7890b2]
                      "
                    >
                      Entity / role
                    </p>

                    <div
                      className="
                        !m-0
                        mt-1.5
                        text-sm
                        font-semibold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {row.role}
                    </div>
                  </div>

                  {/* MAY SAY */}
                  <div className="mb-4">
                    <p
                      className="
                        !m-0
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[#7890b2]
                      "
                    >
                      May say
                    </p>

                    <div
                      className="
                        !m-0
                        mt-1.5
                        text-sm
                        font-normal
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      {row.maySay}
                    </div>
                  </div>

                  {/* MUST NOT INFER */}
                  <div>
                    <p
                      className="
                        !m-0
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[#7890b2]
                      "
                    >
                      Must not infer
                    </p>

                    <div
                      className="
                        !m-0
                        mt-1.5
                        text-sm
                        font-normal
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      {row.mustNotInfer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}