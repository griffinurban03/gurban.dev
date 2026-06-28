import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/posts/", "/projects/", "/about/"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));

  const posts = getAllPosts().map((post) => ({
    url: `${site.url}${post.url}`,
    lastModified: new Date(post.date),
  }));

  return [...routes, ...posts];
}
