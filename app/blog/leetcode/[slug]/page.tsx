import { formatSlug, getLeetcodePosts } from "@/utils/get-leetcode-posts";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { Metadata } from "next";
import { Solution } from "@/components/code-snippet";

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
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <div className="text-sm text-gray-500">
          {format(post.date, "MMMM dd, yyyy")} • {post.languages.join(", ")} •{" "}
          {post.tags.join(", ")} • {post.difficulty}
        </div>
        <div className={`mt-4`}>
          <em>{post?.quote && post.quote}</em>
        </div>
        <div className="prose my-6">{post.children}</div>
        {post.code.map((code: string, index: number) => (
          <div key={index} className="mt-6">
            <div className="text-xs mb-1 text-zinc-400">
              {post.languages[index]} Solution
            </div>
            <Solution code={code} />
          </div>
        ))}
        <div className={`h-10`} />
        <a
          href={`https://leetcode.com/problems/${slug}/description`}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-blue-500 underline mb-10`}
        >
          LeetCode Problem Link
        </a>
      </div>
    );
  } catch (err) {
    notFound();
  }
}
