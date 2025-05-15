import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/mdx";
import Head from "next/head";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="container py-12 sm:py-16">
      <Head>
        <title>Mike Mulligan | Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="mb-12 text-center">
        <h1 className="mb-4">Blog</h1>
        <p className="text-lg sm:text-xl text-secondary-light dark:text-secondary-dark max-w-2xl mx-auto">
          Thoughts, insights, and experiences about software engineering,
          technology, and career growth.
        </p>
      </header>

      <div className="grid gap-8 md:gap-10">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group relative"
          >
            <article className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-sm ring-1 ring-border-light dark:ring-border-dark hover:ring-accent-light dark:hover:ring-accent-dark transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center">
                {post.image && (
                  <div className="md:w-1/3 relative h-56 md:h-72">
                    <Image
                      src={post.image}
                      alt=""
                      fill
                      className="object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                )}
                <div className="flex-1 p-6 md:p-8">
                  <time className="text-sm text-secondary-light dark:text-secondary-dark mb-2 block">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h2 className="text-2xl font-semibold mb-3 text-primary-light dark:text-primary-dark group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors duration-200">
                    {post.title}
                  </h2>
                  <p className="text-secondary-light dark:text-secondary-dark line-clamp-2 mb-4">
                    {post.description}
                  </p>
                  <span className="inline-flex items-center text-accent-light dark:text-accent-dark font-medium group-hover:gap-1.5 gap-1 transition-all duration-200">
                    Read more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
