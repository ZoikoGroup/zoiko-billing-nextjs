"use client";

import { useState } from "react";

import { heading } from "./shared";

export type Dimension = { title: string; body: React.ReactNode; fields?: string };

// Widths for a single row at xl, accounting for the 10px gaps (gap-2.5).
// Seven cards also go 4 + 3 at lg instead of 3 + 3 + 1.
const XL_WIDTH: Record<6 | 7, string> = {
  6: "xl:w-[calc((100%-50px)/6)]",
  7: "lg:w-[calc((100%-30px)/4)] xl:w-[calc((100%-60px)/7)]",
};

/**
 * Numbered, selectable dimension cards: 2-up on phones, 3-up on tablets, one
 * row from xl. Wrapping flex keeps an incomplete last row centred.
 */
export default function DimensionPicker({
  items,
  defaultIndex = 0,
}: {
  items: Dimension[];
  defaultIndex?: number;
}) {
  const [selected, setSelected] = useState(defaultIndex);
  const xlWidth = XL_WIDTH[items.length === 7 ? 7 : 6];

  return (
    <div className="flex w-full flex-wrap justify-center gap-2.5 pt-4">
      {items.map((dim, i) => {
        const active = selected === i;
        return (
          <button
            key={dim.title}
            type="button"
            aria-pressed={active}
            onClick={() => setSelected(i)}
            className={`flex w-[calc(50%-5px)] flex-col items-start gap-1 rounded-2xl border p-3.5 text-left shadow-[0px_1px_2px_0px_rgba(15,23,42,0.04),0px_8px_24px_0px_rgba(15,23,42,0.05)] transition-colors md:w-[calc((100%-20px)/3)] ${xlWidth} ${
              active
                ? "border-[#1F6FEB] bg-[#EAF2FE]"
                : "border-[#DFE5EE] bg-white hover:border-[#B8C7DD]"
            }`}
          >
            <span className="text-[9.5px] !leading-4 !text-[#7890B2]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className={`${heading} text-sm !font-bold !leading-5 !text-[#0F172A]`}>
              {dim.title}
            </span>
            <span className="flex-1 pb-2 text-xs !leading-4 !text-[#5D7192]">
              {dim.body}
            </span>
            {dim.fields && (
              <span className="w-full border-t border-[#EDF0F4] pt-1.5 text-[10px] !leading-4 !text-[#7890B2]">
                {dim.fields}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
