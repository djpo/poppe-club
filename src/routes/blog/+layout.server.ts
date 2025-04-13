import { posts } from "./data.ts";
import type { BlogSummary } from "./data.ts";

export function load(): { summaries: BlogSummary[] } {
  return {
    summaries: posts.map((post) => ({
      slug: post.slug,
      title: post.title,
    })),
  };
}
