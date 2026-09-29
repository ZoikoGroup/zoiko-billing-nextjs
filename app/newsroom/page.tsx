import React from "react";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

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

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata = {
  title: "Newsroom | Zoiko Billing",
  description:
    "Approved corporate communications, and where everything else lives. Zoiko Billing press releases, corporate announcements and publications registry.",
};

export default function Page() {
  return (
    <main
      className={`${inter.variable} ${plusJakartaSans.variable} min-h-screen w-full bg-white text-slate-900 font-[family-name:var(--font-inter)] antialiased`}
    >
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