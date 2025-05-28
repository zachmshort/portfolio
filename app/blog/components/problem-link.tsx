import Link from "next/link";

const ProblemLink = ({ name }: { name: string }) => {
  const formattedName = name
    .replace("-", ". ")
    .replaceAll("-", " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <Link href={`/blog/leetcode/${name}`} className={`text-blue-500`}>
      {formattedName}
    </Link>
  );
};

export default ProblemLink;
