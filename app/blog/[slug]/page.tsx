import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import Image from "next/image";
import { getPostBySlug, getAllPostSlugs, formatDate } from "@/lib/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const SITE_URL = "https://janettai.github.io";

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

  const ogImage = post.image || "/og-default.png";

  return {
    title: `${post.title} | Janett Labs`,
    description: post.excerpt,
    authors: post.author ? [{ name: post.author }] : undefined,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: post.author ? [post.author] : undefined,
      url: `${SITE_URL}/blog/${slug}`,
      images: [
        {
          url: ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`],
    },
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

        {post.image && (
          <div className="mb-8 -mx-6 md:mx-0">
            <Image
              src={post.image}
              alt={post.title}
              width={800}
              height={420}
              className="w-full h-auto rounded-none md:rounded"
              priority
            />
          </div>
        )}

        <div className="prose-blog">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </div>
  );
}
