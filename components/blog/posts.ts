export const SITE_URL = "https://zoikobilling.com";

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  excerpt: string;
  category: string;
  datePublished: string;
  readingTime: string;
  heroImage: string;
  heroAlt: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-billing-software-helps-growing-businesses-manage-invoices-payments",
    title: "How Billing Software Helps Growing Businesses Manage Invoices and Payments",
    metaTitle: "How Billing Software Helps Growing Businesses Manage Invoices",
    description:
      "Discover how billing software helps growing businesses manage invoices, payments, outstanding balances, and multi-currency billing while improving financial control.",
    excerpt:
      "Why spreadsheets stop scaling, and how a connected billing platform brings charges, invoices, payments, outstanding balances, and records into one controlled workflow.",
    category: "Billing Operations",
    datePublished: "2026-09-15",
    readingTime: "12 min read",
    heroImage: "/images/blog/billing-software-growing-businesses/hero-billing-software-invoices-payments.webp",
    heroAlt:
      "Laptop showing a billing dashboard with invoices, payments, and outstanding balances, alongside invoice and payment received cards",
  },
];

export function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function formatPostDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
