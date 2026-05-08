import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getRequestRegion } from "@/lib/request-region";

interface BlogPost {
  slug: string;
  title: string;
  author: string;
  category: "Blogs" | "News";
  image?: string;
  excerpt: string;
  content: string;
}

const posts: BlogPost[] = [
  {
    slug: "why-woortec-delivers-superior-roi-for-ads-and-campaigns-every-time",
    title:
      "Why Woortec Delivers Superior ROI for Ads and Campaigns Every Time",
    author: "Woortec",
    category: "Blogs",
    excerpt:
      "A focused breakdown of why Woortec is the best platform for centralizing ad campaign management, improving advertising ROI, and optimizing Facebook Ads spend.",
    content: `
<h2>Why Woortec is the Best Choice for Centralized Ad Campaign Management</h2>
<p>Marketing teams today juggle multiple ad platforms, fragmented reporting, and rising acquisition costs. Woortec solves that problem by centralizing ad campaign management to deliver measurable advertising ROI and streamlined ad spend optimization. This post explains how Woortec stands apart and provides actionable ways growth teams can use the platform to improve Facebook Ads performance and overall ad efficiency.</p>
<h3>The core problem: scattered campaigns, wasted spend</h3>
<p>Teams run Advertisements across channels with separate controls and incomplete visibility. That leads to duplicate audiences, conflicting budgets, and missed optimization opportunities. Woortec fixes this by acting as the single source of truth for campaign setup, budgets, and performance—so decisions are fast, consistent, and ROI-focused.</p>
<h2>What makes Woortec the best</h2>
<h3>1. True centralized control for ad campaign management</h3>
<p>Woortec centralizes campaign creation, scheduling, and budget rules across Facebook Ads and other channels. Instead of toggling interfaces, teams define strategies once in Woortec and deploy them everywhere. That reduces errors and ensures consistent creative, targeting, and pacing—critical for maximizing advertising ROI.</p>
<h3>2. Granular spend controls that prevent wasted ad spend</h3>
<p>Built-in spend caps, automated reallocations, and real-time pacing let teams limit overspend and move budget to winning campaigns immediately. For example, use Woortec rules to cap CPA per channel and automatically shift underperforming Facebook Ads spend to lower-cost audiences—without manual intervention.</p>
<h3>3. Data-driven insights that accelerate optimization</h3>
<p>Woortec unifies performance metrics across Advertisements so you can compare Facebook Ads CPC, conversion rates, and ROI side-by-side. That unified dataset makes it simple to prioritize tactics that move the needle and stop tactics that don't. Instead of guessing, teams act on concrete cross-channel ROI signals.</p>
<h2>Actionable strategies using Woortec</h2>
<h3>Strategy 1 — Centralize, standardize, scale</h3>
<p>Step-by-step using Woortec:</p>
<ol>
  <li>Create standardized campaign templates in Woortec for acquisition, retargeting, and retention.</li>
  <li>Map each template to a consistent naming convention so reports are comparable across Facebook Ads and other channels.</li>
  <li>Deploy templates across accounts; use Woortec's bulk edits to apply winning variations quickly.</li>
</ol>
<p>Result: faster scale with fewer errors and clearer cross-campaign benchmarks for advertising ROI.</p>
<h3>Strategy 2 — Use automated spend rules to optimize ad spend</h3>
<p>How to set up in Woortec:</p>
<ul>
  <li>Define KPIs (CPA, ROAS, LTV) in Woortec's rule engine.</li>
  <li>Create automatic reallocation flows: if community A's CPA exceeds target, reduce spend 20% and reassign to community B.</li>
  <li>Monitor the impact in the unified dashboard and iterate weekly.</li>
</ul>
<p>Benefit: continuous ad spend optimization without constant manual oversight.</p>
<h3>Strategy 3 — Optimize Facebook Ads with cross-channel context</h3>
<p>Facebook Ads often look good in isolation. Woortec lets you see how Facebook performance interacts with search, programmatic, and affiliate channels. Practical steps:</p>
<ul>
  <li>Link Facebook Ads data into Woortec and tag campaigns by funnel stage.</li>
  <li>Compare incremental conversions from Facebook Ads versus other channels.</li>
  <li>Pause low incremental performers and reinvest in Facebook audiences that show sustained ROI.</li>
</ul>
<p>Outcome: smarter Facebook Ads spend that contributes to total advertising ROI, not just isolated channel metrics.</p>
<h2>Real-world examples (illustrative)</h2>
<p><strong>Example A:</strong> A mid-market e-commerce team moved all Advertisements into Woortec, standardized naming and budgets, and used automated reallocation. Within six weeks they reduced wasted spend by ~20% and improved ROAS by reallocating budget from high-cost Facebook Ads audiences to better-performing lookalikes managed inside Woortec.</p>
<p><strong>Example B:</strong> A subscription business used Woortec's cross-channel reports to discover overlapping audiences between Facebook Ads and paid search. By consolidating control and adjusting bids centrally, they improved CPA and lengthened creative test windows, increasing customer LTV per acquisition.</p>
<h2>Measuring success with Woortec</h2>
<p>Focus on a short set of KPIs in Woortec: CPA, ROAS, budget utilization, and conversion velocity. Track these as baselines before centralizing and re-measure after 30 and 90 days. Woortec's dashboards let you export these metrics and attribute improvements directly to centralized controls and automation.</p>
<h2>Why this matters for founders and growth teams</h2>
<p>Founders and growth leaders need predictable budgets and measurable ROI. Woortec reduces wasted spend, shortens optimization cycles, and increases clarity across Facebook Ads and other channels. That translates into faster decision-making, lower customer acquisition costs, and better allocation of limited marketing dollars.</p>
<blockquote>Centralization + automation = repeatable performance. Woortec is built to make that equation true for your Advertisements.</blockquote>
<h2>Call to action</h2>
<p>If you want to centralize campaign management, control ad spend, and improve advertising ROI across Facebook Ads and beyond, see how Woortec can convert fragmented campaigns into a single, data-driven engine. Book a demo to see centralized workflows, automated spend rules, and unified reporting in action—so your next optimization cycle is faster and more profitable.</p>
<p>Ready to maximize your advertising ROI? <strong>Woortec</strong> specializes in creating customized paid media strategies that align with your business objectives and generate measurable results through targeted ads and optimized campaigns.</p>
    `,
  },
  {
    slug: "5-seo-tasks-you-shouldnt-automate-with-ai-and-why-human-expertise-matters",
    title:
      "5 SEO Tasks You Shouldn't Automate with AI (And Why Human Expertise Matters)",
    author: "Woortec",
    category: "Blogs",
    image: "/images/seo-blog.svg",
    excerpt:
      "While AI tools can help with many SEO tasks, there are critical areas where human expertise remains essential for achieving the best results.",
    content: `
<p>In the era of AI and automation, businesses are increasingly looking for ways to streamline operations and cut costs. Digital marketing and SEO are no exceptions. Artificial intelligence can now generate content, analyze keywords, and even build strategies. But when it comes to SEO, there are tasks that simply can't be left to AI. Here, we explore five crucial SEO tasks that still need a human touch to ensure real, long-term results for your business.</p>
<h3>1. Keyword Analysis Requires Human Expertise</h3>
<p>While AI tools can generate lists of <strong>SEO keywords</strong> based on search volume and competition, the human touch is necessary for real success. Human <strong>SEO experts</strong> can interpret keyword data in a way that takes your specific industry and audience into account, something AI struggles with. Knowing how to target the right <strong>keywords</strong> means understanding user intent and the finer details of your market.</p>
<h3>2. SEO Content Creation Shouldn't Be Left to AI</h3>
<p>Although AI can produce large amounts of text quickly, the <strong>SEO content</strong> it generates often lacks the originality, depth, and context needed for high-ranking content. Search engines prioritize well-written, relevant, and high-quality <strong>SEO-optimized content</strong>. Human writers can ensure that your content not only follows <strong>SEO best practices</strong> but also engages readers, aligning with your brand's voice and providing genuine value.</p>
<h3>3. Building a Robust SEO Architecture</h3>
<p>A successful website requires more than just inserting <strong>SEO keywords</strong>. It needs a well-structured <strong>SEO architecture</strong> that considers both user experience and search engine algorithms. AI tools can offer suggestions, but they lack the strategic thinking required to design an <strong>SEO-friendly</strong> structure. <strong>SEO professionals</strong> can craft an architecture that not only improves rankings but also enhances navigation and user satisfaction, which is key to your long-term digital success.</p>
<h3>4. Creating an Effective Editorial Calendar</h3>
<p>Building an <strong>SEO-driven</strong> editorial calendar means understanding your audience, content goals, and optimal publishing times. AI can assist with trend analysis, but it can't fully grasp the nuances of your brand's messaging or adapt content strategies as quickly as a <strong>professional SEO</strong>. The best editorial calendars are built on real-time insights and a thorough understanding of the evolving needs of your audience.</p>
<h3>5. Crafting a Complete SEO Strategy</h3>
<p>AI tools may offer basic, cookie-cutter strategies, but a comprehensive <strong>SEO strategy</strong> demands human insight. From analyzing your competitors to understanding your customers' needs, a <strong>professional SEO</strong> can develop a personalized strategy that helps your business achieve sustainable growth. Whether you're aiming to rank for specific <strong>SEO keywords</strong> or enhance your overall digital presence, a human expert can adjust your strategy based on real-world feedback and changing market conditions.</p>
<h3>Why Human Expertise in SEO Is Crucial</h3>
<p>While AI can be a useful tool for automating simple tasks, there's no substitute for the depth and creativity that a human <strong>SEO professional</strong> brings to the table. Whether it's performing in-depth <strong>keyword analysis</strong>, writing engaging <strong>SEO content</strong>, or building an effective <strong>SEO strategy</strong>, human expertise ensures your business stays competitive in a constantly evolving digital landscape.</p>
<p>If you're ready to elevate your business's online presence, Woortec can help. We specialize in creating <strong>customized paid media strategies</strong> that align with your business objectives and generate measurable results through targeted ads and optimized campaigns.</p>
<p><strong>Contact Woortec today and let's build a winning paid media strategy for your brand.</strong></p>
    `,
  },
  {
    slug: "avoid-these-common-facebook-ad-mistakes-to-maximize-your-campaigns-success",
    title:
      "Avoid These Common Facebook Ad Mistakes to Maximize Your Campaign's Success",
    author: "Woortec",
    category: "Blogs",
    image: "/images/facebook-blog.svg",
    excerpt:
      "Creating effective Facebook ad campaigns can be a complex endeavor. Many businesses unknowingly sabotage their own efforts by making easily avoidable mistakes.",
    content: `
<p>Creating effective Facebook ad campaigns can be a complex endeavor, especially when you're competing for attention on such a large platform. However, many businesses unknowingly sabotage their own efforts by making easily avoidable mistakes. In this article, we'll go through the most common pitfalls and provide actionable tips to help you get the most out of your Facebook ad budget.</p>
<h3>1. Skipping A/B Testing</h3>
<p>One of the most critical mistakes businesses make is not utilizing A/B testing to refine their ads. A/B testing allows you to experiment with different elements such as headlines, visuals, call-to-action (CTA) buttons, and even audience segments. The absence of testing means you might be spending money on ads that are not optimized for performance. To avoid this, start by testing just one variable at a time and analyze which version yields the best results before scaling up your efforts.</p>
<h3>2. Lack of a Clear Strategy</h3>
<p>Diving into Facebook ads without a solid strategy is a recipe for disaster. Many companies launch campaigns without clear objectives or a defined understanding of their target audience. This leads to poorly crafted ads that fail to resonate. Start by setting specific goals, such as increasing brand awareness or driving website traffic, and tailor your campaign accordingly. Aligning your content with the customer journey ensures that each ad serves a purpose.</p>
<h3>3. Relying Too Much on Interest-Based Audiences</h3>
<p>Interest-based audiences can be effective, but over-reliance on them might limit your reach. Many marketers miss the opportunity to create custom audiences or use lookalike audiences to reach potential customers more accurately. Custom audiences allow you to target users who have already interacted with your brand, while lookalike audiences enable you to reach new users similar to your existing customers. Mixing up your audience types can significantly enhance campaign performance.</p>
<h3>4. Ignoring Facebook Pixel Data</h3>
<p>The Facebook Pixel is a powerful tool that provides valuable data on user interactions. Not installing or misconfiguring this tool is a huge mistake that limits your ability to track conversions, measure ROI, and optimize for future campaigns. Make sure to set up the Pixel correctly and use it to create custom conversions, retarget website visitors, and optimize your ads based on valuable audience insights.</p>
<h3>5. Neglecting Creative Variations</h3>
<p>Many advertisers make the mistake of using the same ad creatives for too long, causing ad fatigue and reducing engagement. Keep your audience interested by using a variety of ad formats, including videos, carousels, and slideshows. Regularly update your visuals and messaging to reflect seasonal trends, new products, or promotions. The key is to stay relevant and capture attention with every new iteration.</p>
<h3>6. Weak Copywriting and Design</h3>
<p>No matter how well-targeted your campaign is, poor design and weak copy can ruin its effectiveness. Avoid overcrowded visuals and generic text. Your ads should have a clear, compelling message with a strong call-to-action that encourages users to take the next step. Combine high-quality images with short, impactful text that highlights the benefits of your product or service.</p>
<h3>Take Your Facebook Ads to the Next Level</h3>
<p>Avoiding these common mistakes will help you make the most out of your Facebook ad campaigns. Remember, each campaign is an opportunity to learn and refine your strategy. If you're looking to maximize your ad performance, <strong>Woortec</strong> offers expert services in digital marketing and paid media strategies tailored to meet the unique needs of small and medium-sized businesses. Let us help you transform your Facebook advertising into a powerful tool for growth.</p>
<p><strong>Contact Woortec today and take the first step toward better results!</strong></p>
    `,
  },
  {
    slug: "top-tools-for-studying-keywords-in-google",
    title: "Top Tools for Studying Keywords in Google",
    author: "Woortec",
    category: "Blogs",
    image: "/images/tools.svg",
    excerpt:
      "Discover the best tools for keyword research to improve your Google search rankings and drive more organic traffic.",
    content: `
<p>If you're serious about driving traffic to your website and improving your online visibility, mastering keyword research is essential. Understanding what potential customers are searching for and how frequently they search for it can help you craft a winning SEO or paid media strategy. In this blog, we will explore some of the top tools for studying keywords on Google, ensuring that your business attracts the right audience at the right time.</p>
<h2>1. Google Keyword Planner</h2>
<p>One of the most popular tools, especially for businesses invested in Google Ads, is Google Keyword Planner. As an official Google product, it allows you to access invaluable data like search volumes, competition levels, and bid estimates for paid ads. While it's predominantly used for building Google Ads campaigns, the insights gained can inform your overall SEO strategy.</p>
<p>Google Keyword Planner provides:</p>
<ul>
  <li>Historical statistics for keywords</li>
  <li>Forecasted keyword performance</li>
  <li>Data on keyword competitiveness</li>
</ul>
<p>This tool is particularly useful for small businesses wanting to establish a foothold in paid media without overspending on ineffective keywords.</p>
<h2>2. SEMrush</h2>
<p>SEMrush is an all-in-one marketing suite that offers a comprehensive keyword research tool. Whether you're targeting SEO or pay-per-click (PPC) campaigns, SEMrush helps you analyze competitors' keyword strategies and discover high-performing keywords for your niche. One of its standout features is the ability to study keyword difficulty, allowing you to gauge how hard it will be to rank for a particular term.</p>
<p>Features of SEMrush include:</p>
<ul>
  <li>Organic and paid keyword research</li>
  <li>Competitive analysis</li>
  <li>Keyword gap identification</li>
  <li>Keyword difficulty score</li>
</ul>
<p>For businesses focusing on both SEO and paid campaigns, SEMrush offers a well-rounded approach to uncovering keyword opportunities.</p>
<h2>3. Ahrefs</h2>
<p>Ahrefs is renowned for its vast backlink database, but it also boasts a powerful keyword research tool. The platform is a favorite for SEO professionals because it provides detailed insights into search volumes, keyword difficulty, and even click-through rates (CTR). Ahrefs' "Keyword Explorer" tool is particularly useful for businesses that want to optimize both content and paid media strategies.</p>
<p>Key advantages of Ahrefs include:</p>
<ul>
  <li>Extensive keyword suggestions</li>
  <li>Global search volume analysis</li>
  <li>Click-through rate predictions</li>
  <li>Detailed competitive analysis</li>
</ul>
<p>Ahrefs is ideal for those who need in-depth data to fine-tune their SEO or PPC efforts and understand their competitors' approach to keyword targeting.</p>
<h2>4. Ubersuggest</h2>
<p>Created by Neil Patel, Ubersuggest is a highly accessible and affordable keyword research tool, especially for small businesses. It provides insights into keyword search volume, competition, and even content suggestions based on popular searches. While it may not have the same advanced features as some of the premium tools, Ubersuggest is perfect for businesses looking to get started with keyword research on a budget.</p>
<p>What Ubersuggest offers:</p>
<ul>
  <li>Keyword suggestions</li>
  <li>Traffic estimates</li>
  <li>Content ideas based on keywords</li>
  <li>Competitor keyword research</li>
</ul>
<p>Its simplicity makes it a great entry-level tool for businesses that want to understand the basics of keyword targeting without a steep learning curve.</p>
<h2>5. Moz Keyword Explorer</h2>
<p>Moz's Keyword Explorer offers another robust solution for studying Google keywords. Known for its easy-to-use interface and beginner-friendly approach, Moz provides insights into search volume, keyword difficulty, and organic CTR. For those focused on creating organic content, Moz can help you identify keywords that may not be as competitive but still offer strong search volume, making it a great tool for small business owners.</p>
<p>Moz's main features include:</p>
<ul>
  <li>Search volume estimates</li>
  <li>Organic CTR projections</li>
  <li>Keyword priority score</li>
  <li>Difficulty rating</li>
</ul>
<p>If your business is in the early stages of building its SEO strategy, Moz Keyword Explorer can give you a head start in understanding how your audience searches for products or services.</p>
<p>When it comes to online visibility, selecting the right tools for studying keywords is as important as the keywords themselves. Each of the tools mentioned above offers unique features that cater to different business needs, whether you're running a small local business or a larger e-commerce platform.</p>
<p>By using these tools, you can better understand search intent, optimize your content, and create paid campaigns that reach the right audience at the right time. At Woortec, we specialize in leveraging these tools to boost your online presence through expertly crafted SEO and PPC strategies. Let us help you navigate the world of keyword research to ensure your business reaches its full potential.</p>
    `,
  },
  {
    slug: "getting-to-know-woortec-your-go-to-for-digital-platform-for-optimizing-ads-investments",
    title:
      "Getting to Know Woortec: Your Go-To Digital Platform for Optimizing Ads Investments",
    author: "Harper Quinn",
    category: "News",
    image: "/images/woortec-blog.webp",
    excerpt:
      "Learn about Woortec, the digital platform designed to optimize your advertising investments and maximize ROI.",
    content: `
<p>In the big world of digital marketing, there's one company making waves: Woortec. Today, let's dive into what makes Woortec stand out in the crowded field of digital advertising.</p>
<p>Woortec isn't your average advertising agency. They're all about thinking outside the box and finding new ways to get your message out there. They're not afraid to try new things and use the latest tech to get results for their clients.</p>
<p>What really sets Woortec apart is how they treat each client like they're the only one. They take the time to understand what you need and then come up with a plan that's just right for you. Whether it's getting your ads in front of the right people or using data to make smarter decisions, Woortec has you covered.</p>
<p>But it's not just about the numbers for Woortec. They care about building relationships with their clients and being there for them every step of the way. From the first meeting to the final results, Woortec is there to help you succeed.</p>
<p>Furthermore, Woortec's track record of success speaks volumes about its proficiency and efficacy. Through a combination of strategic planning, creative execution, and rigorous analysis, Woortec consistently delivers results that exceed expectations, driving tangible growth and ROI for its diverse clientele.</p>
<p>So, if you're looking for a digital advertising partner that's as passionate about your success as you are, look no further than Woortec. They're changing the game one ad at a time, and they're ready to help you take your business to the next level.</p>
    `,
  },
  {
    slug: "redefining-digital-advertising",
    title: "Redefining Digital Advertising: The Role of Technology",
    author: "Marina Berit",
    category: "News",
    image: "/images/redefining.webp",
    excerpt:
      "How technology is reshaping the digital advertising landscape and what it means for businesses.",
    content: `
<p>In the rapidly evolving landscape of digital advertising, companies are constantly striving to find innovative ways to maximize their ROI and reach their target audience more effectively. With the proliferation of digital platforms and the increasing competition in the market, choosing the right advertising solution has become more challenging than ever.</p>
<p>Major players in the digital advertising industry, such as Google Ads, Facebook Ads, and Amazon Advertising, have dominated the market for years with their extensive reach and sophisticated targeting capabilities. These platforms have revolutionized the way companies advertise online, offering powerful tools and analytics to help businesses optimize their campaigns and drive results.</p>
<p>However, despite the success of these industry giants, many companies are looking for alternative solutions that offer more transparency, control, and personalized support to meet their unique advertising needs. This is where Woortec comes into play.</p>
<p>Woortec is a leading digital advertising platform that is revolutionizing the way companies approach their advertising strategies. Unlike traditional advertising platforms that focus solely on reach and impressions, Woortec places a strong emphasis on transparency, control, and efficiency, allowing companies to optimize their advertising investments and maximize their ROI.</p>
<p>With Woortec's intuitive platform, companies can gain valuable insights into their advertising campaigns, track performance in real-time, and make informed decisions based on actionable data. The platform's user-friendly interface and customizable features make it easy for companies of all sizes to create, manage, and optimize their advertising campaigns with ease.</p>
<p>Moreover, Woortec's dedicated team of experts provides personalized support and guidance to help companies navigate the complexities of the digital advertising landscape and achieve their advertising goals more effectively. By offering a more personalized and hands-on approach, Woortec sets itself apart from the competition and provides companies with the tools and support they need to succeed in the digital world.</p>
<p>In conclusion, while major players like Google Ads, Facebook Ads, and Amazon Advertising continue to dominate the digital advertising industry, there is a growing demand for alternative solutions that offer more transparency, control, and personalized support. Woortec is leading the way in this regard, offering a comprehensive digital advertising platform that empowers companies to optimize their advertising strategies, maximize their ROI, and achieve success in the digital world.</p>
    `,
  },
];

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      authors: [post.author],
      ...(post.image && { images: [post.image] }),
    },
    alternates: {
      canonical: `https://woortec.com/highlights/${slug}`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  const { locale } = await getRequestRegion();

  if (!post) {
    notFound();
  }

  const relatedPosts = posts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 4);

  return (
    <main className="pt-24">
      {/* Title Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="mb-4 inline-block text-sm font-semibold text-woortec-text">
            {locale === "es"
              ? post.category === "Blogs"
                ? "Blog"
                : "Noticias"
              : post.category}
          </span>
          <h1 className="font-heading text-3xl leading-tight font-bold text-black md:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-neutral-600">
            {locale === "es" ? "Por " : "By "}
            <span className="font-medium text-black">{post.author}</span>
          </p>
        </div>
      </section>

      {/* Post Image */}
      {post.image && (
        <div className="mx-auto max-w-4xl px-6">
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={400}
            className="w-full rounded-2xl"
          />
        </div>
      )}

      {/* Separator */}
      <div className="mx-auto my-8 max-w-3xl px-6">
        <div className="h-px bg-neutral-300" />
      </div>

      {/* Content */}
      <article className="mx-auto max-w-3xl px-6 pb-16">
        <p className="mb-8 text-lg font-medium text-neutral-600">
          {post.excerpt}
        </p>
        <div
          className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-black prose-p:text-neutral-600 prose-a:text-woortec-text prose-strong:text-black"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* Separator */}
      <div className="mx-auto max-w-3xl px-6">
        <div className="h-px bg-neutral-300" />
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-8 font-heading text-2xl font-bold text-black">
              {locale === "es"
                ? post.category === "Blogs"
                  ? "Últimos blogs"
                  : "Últimas noticias"
                : `Latest ${post.category}`}
            </h2>
            <div className="grid gap-8 sm:grid-cols-2">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/highlights/${related.slug}`}
                  className="group block"
                >
                  {related.image && (
                    <div className="mb-4 overflow-hidden rounded-xl">
                      <Image
                        src={related.image}
                        alt={related.title}
                        width={600}
                        height={300}
                        className="w-full transition-transform group-hover:scale-105"
                      />
                    </div>
                  )}
                  <span className="text-sm text-woortec-text">
                    {locale === "es"
                      ? related.category === "Blogs"
                        ? "Blog"
                        : "Noticias"
                      : related.category}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-black group-hover:text-woortec-text">
                    {related.title}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600">
                    {locale === "es" ? "Por" : "By"} {related.author}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
