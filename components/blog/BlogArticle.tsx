import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { formatPostDate, type BlogPost } from "./posts";

type BlogArticleProps = {
  post: BlogPost;
  children: ReactNode;
};

export default function BlogArticle({ post, children }: BlogArticleProps) {
  return (
    <article className="w-full bg-white">
      {/* HERO */}
      <header className="w-full bg-gradient-to-b from-white to-[#f4f7fb]">
        <div className="mx-auto w-full max-w-[1184px] px-5 pb-10 pt-10 sm:px-8 sm:pt-12 md:px-10 lg:px-0 lg:pb-14 lg:pt-14">
          <nav aria-label="Breadcrumb" className="mb-6 text-[13px] font-medium text-[#647786]">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-blue-600">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/blog" className="hover:text-blue-600">Blog</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-[#102b3c]">{post.category}</li>
            </ol>
          </nav>

          <div className="flex items-center gap-3">
            <span className="h-px w-6 shrink-0 bg-blue-600 opacity-75" />
            <span className="text-[10px] font-bold uppercase leading-4 tracking-[0.16em] text-[#7890b2] sm:text-xs sm:tracking-[0.18em]">
              {post.category}
            </span>
          </div>

          <h1 className="!mb-0 !mt-4 !max-w-[900px] !text-[34px] !font-extrabold !leading-[1.12] !tracking-[-0.035em] !text-slate-900 sm:!text-[42px] lg:!text-[52px]">
            {post.title}
          </h1>

          <p className="!mb-0 !mt-5 max-w-[760px] text-base !leading-7 !text-[#647786] sm:text-lg sm:!leading-8">
            {post.excerpt}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#647786]">
            <span className="font-semibold text-[#102b3c]">Zoiko Billing Editorial Team</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.datePublished}>{formatPostDate(post.datePublished)}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readingTime}</span>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-[#dfe7ef] shadow-[0_24px_60px_-30px_rgba(6,41,69,0.35)] sm:rounded-3xl">
            <Image
              src={post.heroImage}
              alt={post.heroAlt}
              width={1200}
              height={600}
              priority
              sizes="(max-width: 1224px) 100vw, 1184px"
              className="h-auto w-full"
            />
          </div>
        </div>
      </header>

      {/* BODY */}
      <div className="blog-prose mx-auto w-full max-w-[860px] px-5 py-12 sm:px-8 md:px-10 lg:py-16">{children}</div>

      <BlogCta />
    </article>
  );
}

export function ArticleFigure({ src, alt }: { src: string; alt: string }) {
  return (
    <figure>
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={600}
        sizes="(max-width: 800px) 100vw, 760px"
        className="h-auto w-full"
      />
    </figure>
  );
}

export function ArticleTable({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="blog-table-wrap">
      <table>
        <thead>
          <tr>
            {head.map((cell) => (
              <th key={cell} scope="col">{cell}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, i) => (i === 0 ? <th key={i} scope="row">{cell}</th> : <td key={i}>{cell}</td>))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function BlogCta() {
  return (
    <section className="w-full bg-white px-5 pb-16 sm:px-8 md:px-10 lg:px-14 lg:pb-20">
      <div className="relative mx-auto w-full max-w-[1184px] overflow-hidden rounded-3xl bg-[#182A45] px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
        <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(82,121,180,0.55)_0%,_rgba(82,121,180,0)_70%)] sm:h-96 sm:w-96" />
        <div className="relative z-10 max-w-[680px]">
          <h2 className="!m-0 !text-[28px] !font-extrabold !leading-[1.2] !tracking-[-0.035em] !text-white sm:!text-[34px] lg:!text-[40px]">
            Clarity from invoice to payment.
          </h2>
          <p className="!m-0 !mt-4 max-w-[520px] text-[15px] !leading-7 !text-white/70 sm:text-base">
            See how Zoiko Billing connects charges, invoices, payments, outstanding balances, and records
            in one controlled platform.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/book-demo"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold !text-[#182A45] transition hover:bg-white/90"
            >
              Book a demo
            </Link>
            <Link
              href="/pricing-and-plans"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/35 px-6 py-2.5 text-sm font-semibold !text-white transition hover:bg-white/10"
            >
              View pricing and plans
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
