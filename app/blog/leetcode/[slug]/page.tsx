import { getLeetcodePosts } from "@/utils/get-leetcode-posts";
import Link from "next/link";
import { notFound } from "next/navigation";
import { format } from "date-fns";

export async function generateStaticParams() {
  const posts = await getLeetcodePosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function LeetcodePostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  try {
    const post = (await import(`@/content/leetcode/${slug}`)).default;

    return (
      <div className="max-w-2xl mx-auto p-6">
        {/*<BackArrow />*/}
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <div className="text-sm text-gray-500">
          {format(post.date, "MMMM dd, yyyy")} • {post.languages.join(", ")} •{" "}
          {post.tags.join(", ")}
        </div>
        <div className={`mt-4`}>
          <em>{post?.quote && post.quote}</em>
        </div>
        <pre className="bg-gray-600 rounded-xl p-6 mt-4 overflow-x-auto sm:text-base text-xs">
          {post.code}
        </pre>
        <div className="prose mt-6">{post.children}</div>
      </div>
    );
  } catch (err) {
    notFound();
  }
}

const BackArrow = () => {
  return (
    <Link href="/blog/leetcode" className={`md:hidden`}>
      <svg width="40pt" height="40pt" fill="white" viewBox="0 0 1200 1200">
        <path d="m920.02 600c0-13.246-10.754-24-24-24h-534.08l176.79-176.79c9.3711-9.3711 9.3711-24.562 0-33.938-9.3594-9.3711-24.574-9.3711-33.938 0l-217.77 217.75c-9.3711 9.3711-9.3711 24.562 0 33.938l217.75 217.75c4.6797 4.6914 10.824 7.0312 16.969 7.0312s12.289-2.3398 16.969-7.0312c9.3711-9.3711 9.3711-24.562 0-33.938l-176.77-176.78h534.09c13.246 0 23.996-10.754 23.996-24z" />
      </svg>
    </Link>
  );
};
