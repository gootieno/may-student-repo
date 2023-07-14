window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const commentInput = document.querySelector("#comment-input");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const res = await fetch("/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ comment: commentInput.value }),
    });

    if (res.ok) {
      const { comment } = await res.json();
      const ul = document.querySelector("ul");

      const li = document.createElement("li");
      li.innerText = comment;
      ul.appendChild(li);

      commentInput.value = "";
    }
  });
});
