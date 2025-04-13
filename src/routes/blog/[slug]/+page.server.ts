import { error } from "@sveltejs/kit";
import { posts } from "../data.ts";
import type { BlogPost } from "../data.ts";

export function load({ params }): { post: BlogPost } {
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) error(404);

  return {
    post,
  };
}
