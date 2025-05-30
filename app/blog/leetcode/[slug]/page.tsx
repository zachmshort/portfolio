import { formatSlug, getLeetcodePosts } from "@/utils/get-leetcode-posts";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { Metadata } from "next";
import { Complexity, Performance, Solution } from "@/components/slug-helpers";
import { ReactNode } from "react";
import BackArrowIcon from "@/components/back-arrow-svg";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = await getLeetcodePosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  return {
    title: `${formatSlug(slug)}`,
  };
}

export default async function LeetcodePostPage({ params }: Props) {
  const { slug } = await params;

  try {
    const post = (await import(`@/content/leetcode/${slug}`)).default;

    return (
      <div className="max-w-2xl mx-auto p-6 pt-40 lg:pt-6">
        <BackArrowIcon />
        <Header post={post} slug={slug} />
        <Quote quote={post?.quote} />
        <PerformanceComplexity post={post} />
        <Content>{post.children}</Content>
        <Code post={post} />
        <LeetCodeProblemLink slug={slug} />
      </div>
    );
  } catch (err) {
    notFound();
  }
}
const PerformanceComplexity = ({ post }: { post: any }) => {
  return (
    <>
      {post?.performance && (
        <Performance
          time={post.performance.time}
          memory={post.performance.memory}
        />
      )}
      {post?.complexity && (
        <Complexity
          time={post.complexity.time}
          timeExplanation={post.complexity.timeExplanation}
          space={post.complexity.space}
          spaceExplanation={post.complexity.spaceExplanation}
        />
      )}
    </>
  );
};

const Quote = ({ quote }: { quote?: string }) => {
  return (
    <>
      {quote && (
        <div className={`mt-4`}>
          <em>{quote}</em>
        </div>
      )}
    </>
  );
};

const Header = ({ post, slug }: { post: any; slug: string }) => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-2">{formatSlug(slug)}</h1>
      <div className="text-sm text-gray-500">
        {format(post.date, "MMMM dd, yyyy")} • {post.languages.join(", ")} •{" "}
        {post.tags.join(", ")} • {post.difficulty}
      </div>
    </>
  );
};

const Code = ({ post }: { post: any }) => {
  return (
    <>
      {post.code.map((code: string, index: number) => (
        <div key={index} className="mt-6">
          <div className="text-xs mb-1 text-zinc-400">
            {post.languages[index]} Solution
          </div>
          <Solution code={code} />
        </div>
      ))}
    </>
  );
};

const LeetCodeProblemLink = ({ slug }: { slug: string }) => {
  return (
    <>
      <div className={`h-10`} />
      <a
        href={`https://leetcode.com/problems/${slug}/description`}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-blue-500 underline mb-10`}
      >
        LeetCode Problem Link
      </a>
    </>
  );
};

const Content = ({ children }: { children: ReactNode }) => {
  return <div className="prose my-6">{children}</div>;
};
