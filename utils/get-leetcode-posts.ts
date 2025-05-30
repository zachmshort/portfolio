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

      return {
        slug,
        num: post.num,
        testsPassed: post?.testsPassed,
        difficulty: post?.difficulty || "easy",
        languages: post.languages,
        performance: post?.performance,
        complexity: post?.complexity,
        date: new Date(post.date),
        tags: post.tags,
      };
    }),
  );

  return posts.sort((a, b) => b.date.getTime() - a.date.getTime());
}
