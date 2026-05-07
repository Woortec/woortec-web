import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Highlights",
  description:
    "Discover key insights and performance highlights of your advertising campaigns on Woortec. Track important metrics to optimize and refine your marketing strategies.",
};

interface BlogPost {
  title: string;
  slug: string;
  author: string;
  thumbnail: string;
  category: "blog" | "news";
  description?: string;
}

const featuredPost: BlogPost = {
  title:
    "Why Woortec Delivers Superior ROI for Ads and Campaigns Every Time",
  slug: "why-woortec-delivers-superior-roi-for-ads-and-campaigns-every-time",
  author: "Woortec",
  thumbnail: "/images/woortec-blog.webp",
  category: "blog",
  description:
    "A focused breakdown of why Woortec is the best platform for centralizing ad campaign management, improving advertising ROI, and optimizing Facebook Ads spend.",
};

const newsArticles: BlogPost[] = [
  {
    title:
      "Getting to Know Woortec: Your Go-To Digital Platform for Optimizing Ads Investments",
    slug: "getting-to-know-woortec-your-go-to-for-digital-platform-for-optimizing-ads-investments",
    author: "Harper Quinn",
    thumbnail: "/images/woortec-blog.webp",
    category: "news",
  },
  {
    title: "Redefining Digital Advertising: The Role of Technology",
    slug: "redefining-digital-advertising",
    author: "Marina Berit",
    thumbnail: "/images/redefining.webp",
    category: "news",
  },
];

const blogPosts: BlogPost[] = [
  {
    title:
      "5 SEO Tasks You Shouldn't Automate with AI (And Why Human Expertise Matters)",
    slug: "5-seo-tasks-you-shouldnt-automate-with-ai-and-why-human-expertise-matters",
    author: "Woortec",
    thumbnail: "/images/seo-blog.svg",
    category: "blog",
  },
  {
    title:
      "Avoid These Common Facebook Ad Mistakes to Maximize Your Campaign's Success",
    slug: "avoid-these-common-facebook-ad-mistakes-to-maximize-your-campaigns-success",
    author: "Woortec",
    thumbnail: "/images/facebook-blog.svg",
    category: "blog",
  },
  {
    title: "Top Tools for Studying Keywords in Google",
    slug: "top-tools-for-studying-keywords-in-google",
    author: "Woortec",
    thumbnail: "/images/tools.svg",
    category: "blog",
  },
];

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
        <h2 className="font-heading text-sm font-bold tracking-widest text-neutral-500 uppercase">
          {label}
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
      </div>
    </div>
  );
}

function PostCard({ post, basePath }: { post: BlogPost; basePath: string }) {
  const href = `${basePath}/${post.slug}`;
  return (
    <article className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-lg">
      <Link href={href} className="block overflow-hidden">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-100">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-5">
        <Link href={href}>
          <span className="mb-2 inline-block text-xs font-semibold tracking-wider text-woortec-text uppercase">
            {post.category}
          </span>
        </Link>
        <Link href={href} className="block">
          <h3 className="font-heading text-lg font-bold text-black transition-colors group-hover:text-woortec-text">
            {post.title}
          </h3>
        </Link>
        <p className="mt-3 text-sm text-neutral-500">
          By{" "}
          <Link
            href={href}
            className="font-medium text-neutral-700 hover:text-woortec-text"
          >
            {post.author}
          </Link>
        </p>
      </div>
    </article>
  );
}

export default function HighlightsPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Featured / Hero Post */}
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Image */}
            <Link
              href={`/highlights/${featuredPost.slug}`}
              className="group relative block aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-100 shadow-md"
            >
              <Image
                src={featuredPost.thumbnail}
                alt={featuredPost.title}
                fill
                priority
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Text */}
            <div>
              <Link href={`/highlights/${featuredPost.slug}`}>
                <span className="mb-3 inline-block text-xs font-semibold tracking-wider text-woortec-text uppercase">
                  {featuredPost.category}
                </span>
              </Link>
              <Link href={`/highlights/${featuredPost.slug}`} className="block">
                <h1 className="font-heading text-3xl font-bold leading-tight text-black md:text-4xl lg:text-5xl">
                  {featuredPost.title}
                </h1>
              </Link>
              {featuredPost.description && (
                <p className="mt-4 text-lg leading-relaxed text-neutral-600">
                  {featuredPost.description}
                </p>
              )}
              <p className="mt-5 text-sm text-neutral-500">
                By{" "}
                <span className="font-medium text-neutral-700">
                  {featuredPost.author}
                </span>
              </p>
              <Link
                href={`/highlights/${featuredPost.slug}`}
                className="mt-6 inline-flex items-center gap-2 font-semibold text-woortec-text transition-colors hover:text-woortec-solid"
              >
                Read More
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <SectionDivider label="Latest News" />

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2">
          {newsArticles.map((post) => (
            <PostCard
              key={post.slug}
              post={post}
              basePath="/highlights"
            />
          ))}
        </div>
      </section>

      {/* Latest Blogs */}
      <SectionDivider label="Latest Blogs" />

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <PostCard
              key={post.slug}
              post={post}
              basePath="/highlights"
            />
          ))}
        </div>
      </section>
    </main>
  );
}
