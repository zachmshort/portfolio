import { getLeetcodePosts } from "@/utils/get-leetcode-posts";
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
  const formattedSlug = slug
    .replace("-", ". ")
    .replaceAll("-", " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    title: `${formattedSlug}`,
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
          {post.tags.join(", ")}
        </div>
        <div className={`mt-4`}>
          <em>{post?.quote && post.quote}</em>
        </div>
        {post.code && post.languages && Array.isArray(post.code) ? (
          post.code.map((code: string, index: number) => (
            <div key={index} className="mt-6">
              <div className="text-xs mb-1 text-zinc-400">
                {post.languages[index]} Solution
              </div>
              <Solution code={code} />
            </div>
          ))
        ) : (
          <Solution code={post.code} />
        )}
        <div className="prose mt-6">{post.children}</div>
      </div>
    );
  } catch (err) {
    notFound();
  }
}
