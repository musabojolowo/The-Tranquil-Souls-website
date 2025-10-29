async function loadPosts() {
  const res = await fetch("/.netlify/functions/list-post");
  const posts = await res.json();

  const container = document.querySelector("#posts");
  container.innerHTML = "";

  posts.forEach(post => {
    const div = document.createElement("div");
    div.classList.add("post");
    div.innerHTML = `
      <h2>${post.file.replace(".md", "")}</h2>
      <pre>${post.content}</pre>
    `;
    container.appendChild(div);
  });
}

loadPosts();
