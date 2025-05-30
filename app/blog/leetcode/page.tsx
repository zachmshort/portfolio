import { formatSlug, getLeetcodePosts } from "@/utils/get-leetcode-posts";
import { format } from "date-fns";
import Link from "next/link";

export default async function LeetcodeIndexPage() {
  const posts = await getLeetcodePosts();

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Header numPosts={posts.length} />
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/leetcode/${post.slug}`}>
              <div
                className={`text-xl font-semibold text-white-600 hover:underline ${post?.testsPassed && "text-red-200"}`}
              >
                {post.num}. {formatSlug(post.slug)}
              </div>
              <div className="text-sm text-gray-500">
                {format(post.date, "MMMM dd, yyy")} •{" "}
                {post.languages.join(", ")} • {post.difficulty}
                {post?.testsPassed && ` • ${post.testsPassed}`}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
const Header = ({ numPosts }: { numPosts: number }) => {
  return (
    <>
      <div className={`flex flex-row justify-between items-center`}>
        <h1 className="text-3xl font-bold ">LeetCode Solutions</h1>
        {/* <Filters />*/}
      </div>
      <h2 className={`mb-4`}>{numPosts} Solved</h2>
    </>
  );
};

//
// const Filters = () => {
//   return <FiltersIcon />;
// };
//
// const FiltersIcon = () => {
//   return (
//     <div className={`border border-white rounded p-1`}>
//       <svg
//         width="20pt"
//         height="20pt"
//         fill="white"
//         viewBox="0 0 100 100"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path d="m11.586 33.414h19.754c0.69141 3.1836 3.5234 5.5742 6.9102 5.5742s6.2188-2.3906 6.9102-5.5742h43.258c0.82812 0 1.5-0.67187 1.5-1.5 0-0.82812-0.67188-1.5-1.5-1.5h-43.258c-0.69141-3.1836-3.5234-5.5742-6.9102-5.5742s-6.2188 2.3906-6.9102 5.5742h-19.754c-0.82813 0-1.5 0.67188-1.5 1.5 0 0.82813 0.66797 1.5 1.5 1.5zm26.664-5.5742c2.2461 0 4.0742 1.8281 4.0742 4.0742 0 2.2461-1.8281 4.0742-4.0742 4.0742s-4.0742-1.8281-4.0742-4.0742c0-2.2461 1.8281-4.0742 4.0742-4.0742z" />
//         <path d="m88.414 48.695h-20.77c-0.69141-3.1836-3.5234-5.5742-6.9102-5.5742s-6.2188 2.3906-6.9102 5.5742h-42.238c-0.82813 0-1.5 0.67188-1.5 1.5 0 0.82813 0.67187 1.5 1.5 1.5h42.238c0.69141 3.1836 3.5234 5.5742 6.9102 5.5742s6.2188-2.3906 6.9102-5.5742h20.77c0.82813 0 1.5-0.67187 1.5-1.5 0-0.82812-0.66797-1.5-1.5-1.5zm-27.68 5.5742c-2.2461 0-4.0742-1.8281-4.0742-4.0742 0-2.2461 1.8281-4.0742 4.0742-4.0742s4.0703 1.8242 4.0742 4.0703v0.007813c-0.003906 2.2461-1.8281 4.0703-4.0742 4.0703z" />
//         <path d="m88.414 66.773h-40.328c-0.69141-3.1797-3.5234-5.5664-6.9062-5.5664-3.3828 0-6.2148 2.3867-6.9102 5.5664h-22.684c-0.82813 0-1.5 0.67187-1.5 1.5 0 0.82812 0.67187 1.5 1.5 1.5h22.684c0.6875 3.1875 3.5234 5.582 6.9141 5.582 3.3867 0 6.2266-2.3945 6.9102-5.582h40.324c0.82812 0 1.5-0.67188 1.5-1.5-0.003907-0.82813-0.67188-1.5-1.5039-1.5zm-47.234 5.582c-2.2461 0-4.0742-1.8281-4.0742-4.0742s1.8281-4.0742 4.0742-4.0742c2.2461 0 4.0742 1.8281 4.0742 4.0742s-1.8281 4.0742-4.0742 4.0742z" />
//       </svg>
//     </div>
//   );
// };
