import fs from "fs";
import path from "path";

export async function getLeetcodePosts() {
  const dir = path.join(process.cwd(), "content/leetcode");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".tsx"));

  const posts = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.tsx$/, "");
      const id = slug.split("-")[0];
      const post = (await import(`../content/leetcode/${slug}`)).default;

      return {
        id,
        slug,
        title: post.title,
        date: post.date,
        tags: post.tags,
      };
    }),
  );

  return posts.sort((a, b) => +b.id - +a.id);
}
