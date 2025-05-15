import { getAllPosts } from "@/lib/mdx";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const blogPosts = posts.map((post) => ({
    url: `https://mikemulligan.net/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  const routes = [
    {
      url: "https://mikemulligan.net",
      lastModified: new Date(),
    },
    {
      url: "https://mikemulligan.net/blog",
      lastModified: new Date(),
    },
    {
      url: "https://mikemulligan.net/contact",
      lastModified: new Date(),
    },
  ];

  return [...routes, ...blogPosts];
}
