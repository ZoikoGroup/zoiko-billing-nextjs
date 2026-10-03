/*
  Currency Control uses the same section shell, headings and image frame as
  Entity-Level Controls, so the building blocks are shared rather than copied.

  Extra Figma tokens used on this page:
    color/azure/14-2 #0B1B3C (table header)   color/grey/95-13 #EAF2FE (selected / tinted card)
    color/grey/99-6  #FFF8F5 (must-not-invent cell)   red-900 #7F1D1D
*/
export {
  Eyebrow,
  Section,
  SectionHeading,
  SectionImage,
  heading,
} from "@/components/entity-level-controls/shared";

export const cardClass =
  "rounded-2xl border border-[#DFE5EE] bg-white shadow-[0px_1px_2px_0px_rgba(15,23,42,0.04),0px_8px_24px_0px_rgba(15,23,42,0.05)]";
