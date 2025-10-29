import fs from "fs";
import path from "path";

export async function handler() {
  const dir = "posts";
  const files = fs.readdirSync(dir);
  const posts = files
    .filter(file => file.endsWith(".md"))
    .map(file => ({
      file,
      content: fs.readFileSync(path.join(dir, file), "utf8"),
    }));

  return {
    statusCode: 200,
    body: JSON.stringify(posts),
  };
}
