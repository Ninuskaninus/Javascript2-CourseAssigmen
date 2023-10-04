import { fetchAllPosts } from "/js/API/get/allPosts.js";
const allPosts = await fetchAllPosts();

export function createCommentButton() {
  const commentbutton = document.createElement("img");
  commentbutton.src = "/img/commentbutton.png";
  commentbutton.classList.add("m-2", "me-0", "response-icon");
  commentbutton.style.cursor = "pointer";
  commentbutton.id = "commentbutton" + allPosts.id;

  const commentCounter = document.createElement("p");
  commentCounter.innerText = allPosts.comments;
  commentCounter.classList.add("m-2", "p-0");

  const commentContainer = document.createElement("div");
  commentContainer.classList.add(
    "comment-container",
    "p-4",
    "m-0",
    "mb-2",
    "container",
    "w-100",
    "row"
  );
}
