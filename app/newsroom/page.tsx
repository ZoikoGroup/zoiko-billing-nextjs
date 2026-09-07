import React from "react";

import {
  CorrectionsAndSupersession,
  MediaResources,
  Newsroom,
  NewsroomFAQ,
  NewsroomPublications,
  PublicationDetailTemplate,
  PublicationLifecycle,
  QuoteReferenceGovernance,
  WhereCompanyNewsLives,
} from "@/components/newsroom";

export default function Page() {
  return (
    <main>
      <Newsroom />
      <NewsroomPublications />
      <WhereCompanyNewsLives />
      <PublicationDetailTemplate />
      <QuoteReferenceGovernance />
      <PublicationLifecycle />
      <MediaResources />
      <CorrectionsAndSupersession />
      <NewsroomFAQ />
    </main>
  );
}