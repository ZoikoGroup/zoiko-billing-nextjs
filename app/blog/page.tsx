import { redirect } from "next/navigation";

import { blogPosts } from "@/components/blog/posts";

// No blog listing page yet: /blog opens the latest post directly.
export default function BlogIndexPage() {
  redirect(`/blog/${blogPosts[0].slug}`);
}
