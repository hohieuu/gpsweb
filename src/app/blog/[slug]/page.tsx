import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllBlogSlugs, getBlogBySlug } from "@/components/Blog/blogData";
import { blogContents, blogInstructions } from "@/components/Blog/blogContents";

const BASE = "https://aigps.vn";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) return { title: "Blog | AIGPS" };
  return {
    title: `${blog.title} | AIGPS – Định vị tại Huế`,
    description: blog.paragraph,
    openGraph: {
      title: blog.title,
      description: blog.paragraph,
      url: `${BASE}/blog/${slug}`,
    },
  };
}

export default async function BlogSlugPage({ params }: Props) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) notFound();
  const paragraphs = blogContents[slug] ?? [blog.paragraph];
  const instructions = blogInstructions[slug];
  const relatedPosts = instructions?.relatedSlugs
    ?.map((s) => getBlogBySlug(s))
    .filter(Boolean) ?? [];

  return (
    <section className="pb-[120px] pt-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-8/12">
            <div className="mb-6">
              <Link
                href="/blog"
                className="text-primary hover:underline"
              >
                ← Blog
              </Link>
            </div>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
              {blog.title}
            </h1>
            <div className="mb-8 flex flex-wrap items-center gap-4 border-b border-body-color/10 pb-6 dark:border-white/10">
              <div className="flex items-center gap-3">
                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
                  <Image src={blog.author.image} alt={blog.author.name} fill />
                </div>
                <div>
                  <p className="text-sm font-semibold text-black dark:text-white">
                    {blog.author.name}
                  </p>
                  <p className="text-xs text-body-color dark:text-body-color-dark">
                    {blog.author.designation}
                  </p>
                  <p className="mt-0.5 text-xs text-body-color dark:text-body-color-dark">
                    {blog.publishDate}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-primary/15 px-3 py-1 text-sm font-medium text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-black dark:text-body-color-dark">
                  {p}
                </p>
              ))}
            </div>
            {instructions && (
              <div className="mt-10 rounded-lg border border-primary/20 bg-primary/5 p-6 dark:border-primary/30 dark:bg-primary/10">
                <h3 className="mb-4 text-lg font-semibold text-black dark:text-white">
                  {instructions.ctaTitle}
                </h3>
                <ul className="space-y-2">
                  {instructions.links.map((link) => (
                    <li key={link.href}>
                      {link.href.startsWith("http") || link.href.startsWith("tel") ? (
                        <a
                          href={link.href}
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="font-medium text-primary hover:underline"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link href={link.href} className="font-medium text-primary hover:underline">
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {relatedPosts.length > 0 && (
              <div className="mt-10 border-t border-body-color/10 pt-8 dark:border-white/10">
                <h3 className="mb-4 text-lg font-semibold text-black dark:text-white">
                  Bài viết liên quan
                </h3>
                <ul className="space-y-2">
                  {relatedPosts.map((post) => (
                    <li key={post.slug}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-base text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                      >
                        {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
