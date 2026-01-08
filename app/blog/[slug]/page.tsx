import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { getPostBySlug, getAllPostSlugs, formatDate } from "@/lib/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | Janett Labs",
    };
  }

  return {
    title: `${post.title} | Janett Labs`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container-narrow py-16">
      <Link
        href="/blog"
        className="text-sm text-[var(--color-text-muted)] hover:opacity-60 transition-opacity"
      >
        &larr; Back
      </Link>

      <article className="mt-8">
        <header className="mb-8">
          <time className="text-sm text-[var(--color-text-muted)]">
            {formatDate(post.date)}
          </time>
          <h1 className="text-2xl font-semibold mt-2">{post.title}</h1>
          {post.author && (
            <p className="text-sm text-[var(--color-text-muted)] mt-1">
              {post.author}
            </p>
          )}
        </header>

        <div className="prose-blog">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </div>
  );
}
