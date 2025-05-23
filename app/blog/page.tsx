import Link from "next/link";

const BlogPage = () => {
  return (
    <div
      className={`flex flex-row px-8 w-full items-center min-h-screen gap-x-8 justify-center`}
    >
      <BlogLink href="/blog/leetcode" title="Programming" />
      <BlogLink href="/blog/economics" title="Economics" />
    </div>
  );
};

export default BlogPage;

const BlogLink = ({ href, title }: { href: string; title: string }) => {
  return (
    <Link
      className={`py-8 border border-white rounded-xl w-60 text-center`}
      href={href}
    >
      {title}
    </Link>
  );
};
