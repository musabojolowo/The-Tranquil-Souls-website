async function loadPosts() {
  const res = await fetch("/.netlify/functions/list-post");
  const posts = await res.json();

  const container = document.querySelector("#posts");
  container.innerHTML = "";

  posts.forEach(post => {
    const div = document.createElement("div");
    div.classList.add("post");

    // extract title, date, image from markdown frontmatter
    const content = post.content;
    const title = content.match(/title:\s*["']?(.*?)["']?(\n|$)/)?.[1] || "Untitled";
    const date = content.match(/date:\s*(.*)/)?.[1] || "";
    const image = content.match(/image:\s*(.*)/)?.[1]?.trim() || "";

    // get post summary (first few lines of content)
    const body = content.split("---").pop().trim();
    const summary = body.split(" ").slice(0, 30).join(" ") + "...";

    // build the post HTML
    div.innerHTML = `
      <div class="post-card">
        ${image ? `<img src="${image}" alt="${title}" class="post-thumb">` : ""}
        <h2 class="post-title">
          <a href="post.html?file=${encodeURIComponent(post.file)}">${title}</a>
        </h2>
        <p class="post-date">${new Date(date).toDateString()}</p>
        <p class="post-summary">${summary}</p>
      </div>
    `;

    container.appendChild(div);
  });
}

loadPosts();
