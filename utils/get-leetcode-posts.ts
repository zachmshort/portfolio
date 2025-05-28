import fs from "fs";
import path from "path";

export function formatSlug(slug: string): string {
  return slug.replaceAll("-", " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export async function getLeetcodePosts() {
  const dir = path.join(process.cwd(), "content/leetcode");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".tsx"));

  const posts = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.tsx$/, "");
      const post = (await import(`@/content/leetcode/${slug}`)).default;
      const title = formatSlug(slug);

      return {
        slug,
        title: title,
        num: post.num,
        testsPassed: post?.testsPassed,
        difficulty: post?.difficulty || "easy",
        languages: post.languages,
        date: new Date(post.date),
        tags: post.tags,
      };
    }),
  );

  return posts.sort((a, b) => b.date.getTime() - a.date.getTime());
}
