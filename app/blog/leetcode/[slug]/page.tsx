import { getLeetcodePosts } from "@/utils/get-leetcode-posts";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { Metadata } from "next";

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
    title: `LeetCode Solution: ${slug}`,
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
          post.languages.map((lang: string, i: number) => (
            <div key={lang} className="mt-6">
              <div className="text-xs mb-1 text-zinc-400">{lang} Solution</div>
              <pre className="bg-gray-800 text-sm text-white rounded-xl p-4 overflow-x-auto">
                {post.code[i]}
              </pre>
            </div>
          ))
        ) : (
          <pre className="bg-gray-800 text-sm text-white rounded-xl p-4 overflow-x-auto mt-4">
            {post.code}
          </pre>
        )}
        <div className="prose mt-6">{post.children}</div>
      </div>
    );
  } catch (err) {
    notFound();
  }
}
