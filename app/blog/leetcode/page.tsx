import { getLeetcodePosts } from "@/utils/get-leetcode-posts";
import { format } from "date-fns";
import Link from "next/link";

export default async function LeetcodeIndexPage() {
  const posts = await getLeetcodePosts();

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">LeetCode Solutions</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/leetcode/${post.slug}`}>
              <div className="text-xl font-semibold text-white-600 hover:underline">
                {post.id}. {post.title}
              </div>
              <div className="text-sm text-gray-500">
                {format(post.date, "MMMM dd, yyy")} •{" "}
                {post.languages.join(", ")} • {post.tags.join(", ")}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
