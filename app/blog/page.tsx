import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/blog";

export const metadata = {
  title: "Blog | Janett Labs",
  description: "Writings on the science of learning",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="container-narrow py-16">
      <section className="mb-12">
        <h1 className="text-2xl font-semibold mb-2">Blog</h1>
        <p className="text-[var(--color-text-muted)]">
          Writings on the science of learning
        </p>
      </section>

      {posts.length === 0 ? (
        <p className="text-[var(--color-text-muted)]">
          No posts yet. Check back soon.
        </p>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="block group">
                <time className="text-sm text-[var(--color-text-muted)]">
                  {formatDate(post.date)}
                </time>
                <h2 className="text-lg font-medium mt-1 mb-1 group-hover:opacity-60 transition-opacity">
                  {post.title}
                </h2>
                <p className="text-[var(--color-text-muted)]">
                  {post.excerpt}
                </p>
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
