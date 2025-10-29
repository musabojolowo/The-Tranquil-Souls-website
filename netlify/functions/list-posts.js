import { promises as fs } from "fs";
import path from "path";

export async function handler(event, context) {
  try {
    const postsDir = path.join(process.cwd(), "posts");
    const files = await fs.readdir(postsDir);
    const markdownFiles = files.filter(file => file.endsWith(".md"));

    // Sort by date (newest first)
    markdownFiles.sort((a, b) => b.localeCompare(a));

    return {
      statusCode: 200,
      body: JSON.stringify(markdownFiles),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
}
