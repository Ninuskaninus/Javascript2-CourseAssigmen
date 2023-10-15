import { fetchAllPosts } from "/js/API/get/allPosts.js";
const allPosts = await fetchAllPosts();

/**
 * Creates a like button for a post and returns the button element.
 * @param {Object} allPosts - An object containing information about the post.
 * @returns {HTMLImageElement} - The like button element.
 */
export function createLikeButton(allPosts) {
  const cardTextBottomIcons = document.createElement("div");
  cardTextBottomIcons.classList.add(
    "mt-4",
    "mb-2",
    "container",
    "icons-container",
    "p-0"
  );

  const likebutton = document.createElement("img");
  likebutton.src = "/img/likebutton.png";
  likebutton.classList.add("m-2", "me-0", "response-icon", "likebutton");
  likebutton.style.cursor = "pointer";
  likebutton.id = allPosts.id;
  likebutton.addEventListener("click", () => {
    if (likebutton.src.includes("likebutton.png")) {
      likebutton.src = "/img/likebuttonfull.png";
    } else {
      likebutton.src = "/img/likebutton.png";
    }
  });

  const likeCounter = document.createElement("p");
  likeCounter.innerText = allPosts.likes;
  likeCounter.classList.add("m-2", "p-0");

  cardTextBottomIcons.appendChild(likebutton);
  cardTextBottomIcons.appendChild(likeCounter);

  return likebutton;
}

