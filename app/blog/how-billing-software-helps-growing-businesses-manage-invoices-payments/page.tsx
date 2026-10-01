import type { Metadata } from "next";

import HowBillingSoftwareHelps, { faqs } from "@/components/blog/articles/HowBillingSoftwareHelps";
import { SITE_URL, getPost } from "@/components/blog/posts";

const post = getPost("how-billing-software-helps-growing-businesses-manage-invoices-payments")!;
const url = `${SITE_URL}/blog/${post.slug}`;
const image = `${SITE_URL}${post.heroImage}`;

export const metadata: Metadata = {
  title: post.metaTitle,
  description: post.description,
  alternates: { canonical: url },
  openGraph: {
    type: "article",
    url,
    title: post.metaTitle,
    description: post.description,
    siteName: "Zoiko Billing",
    publishedTime: post.datePublished,
    images: [{ url: image, width: 1200, height: 600, alt: post.heroAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: post.metaTitle,
    description: post.description,
    images: [image],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TechArticle",
      "@id": `${url}/#article`,
      headline: post.title,
      description:
        "An enterprise analysis on replacing fragmented spreadsheets with a governed billing platform, featuring multi-currency support, maker-checker approvals, and attributable automation.",
      image,
      mainEntityOfPage: url,
      author: {
        "@type": "Organization",
        name: "Zoiko Billing Editorial Team",
        url: SITE_URL,
      },
      publisher: {
        "@type": "Organization",
        name: "Zoiko Group",
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/assets/logo.png`,
        },
      },
      datePublished: post.datePublished,
      inLanguage: "en-US",
    },
    {
      "@type": "FAQPage",
      "@id": `${url}/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <HowBillingSoftwareHelps post={post} />
    </>
  );
}
