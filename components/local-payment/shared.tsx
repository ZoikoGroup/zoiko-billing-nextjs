/*
  Local Payment shares its layout primitives, dimension cards, guardrail table
  and FAQ column with the Currency Control and Inter-Entity Billing pages.
*/
export {
  Eyebrow,
  Section,
  SectionHeading,
  SectionImage,
  cardClass,
  heading,
} from "@/components/currency-control/shared";
export { default as DimensionPicker } from "@/components/currency-control/DimensionPicker";
export { default as GuardrailTable } from "@/components/currency-control/GuardrailTable";

export const linkClass = "text-sm font-semibold !text-[#1F6FEB] hover:underline";
