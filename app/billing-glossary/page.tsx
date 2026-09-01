import React from "react";

import {
  Advice,
  Ambiguity,
  AuthoritativeHandoffs,
  BillingGlossaryHero,
  BrowseAZ,
  BrowseByTopic,
  CanonicalTermEntry,
  FrequentlyReferencedTerms,
  GlossaryFAQ,
  RelationshipModel,
  SearchSuggestionContract,
  TermStates,
} from "@/components/billing-glossary";

export default function Page() {
  return (
    <main>
      <BillingGlossaryHero />
      <SearchSuggestionContract />
      <BrowseAZ />
      <BrowseByTopic />
      <FrequentlyReferencedTerms />
      <CanonicalTermEntry />
      <RelationshipModel />
      <Ambiguity />
      <Advice />
      <TermStates />
      <AuthoritativeHandoffs />
      <GlossaryFAQ />
    </main>
  );
}