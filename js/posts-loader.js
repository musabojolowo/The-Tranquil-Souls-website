async function loadPosts() {
  const postsContainer = document.getElementById("posts");

  // Get the list of post files from Netlify Function
  const response = await fetch("/.netlify/functions/list-posts");
  const postFiles = await response.json();

  for (const file of postFiles) {
    const res = await fetch(`/posts/${file}`);
    const text = await res.text();

    // Split frontmatter and content
    const match = /---([\s\S]*?)---([\s\S]*)/.exec(text);
    if (!match) continue;

    const frontmatter = match[1].trim();
    const body = match[2].trim();

    // Extract metadata
    const title = /title:\s*["']?(.*?)["']?$/m.exec(frontmatter)?.[1] || "Untitled";
    const date = /date:\s*(.*?)$/m.exec(frontmatter)?.[1] || "";
    const image = /image:\s*(.*?)$/m.exec(frontmatter)?.[1] || "";

    // Create a post card
    const postEl = document.createElement("div");
    postEl.classList.add("post");
    postEl.innerHTML = `
      <article class="post-card">
        ${image ? `<img src="${image}" alt="${title}" class="post-img">` : ""}
        <h2>${title}</h2>
        <small>${date}</small>
        <div class="post-body">${marked.parse(body)}</div>
      </article>
    `;
    postsContainer.appendChild(postEl);
  }
}

// Load Markdown parser (for formatting)
const script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/npm/marked/marked.min.js";
script.onload = loadPosts;
document.head.appendChild(script);
