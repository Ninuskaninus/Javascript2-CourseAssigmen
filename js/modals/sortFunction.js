export function sortFunction(
  feedContainer,
  allPosts,
  followingPosts,
  createFeedCard
) {
  const followingCheckbox = document.getElementById("followingCheckbox");
  followingCheckbox.addEventListener("change", () => {
    if (followingCheckbox.checked) {
      feedContainer.innerHTML = "";
      followingPosts.forEach((post) => {
        feedContainer.appendChild(createFeedCard(post));
      });
    } else {
      feedContainer.innerHTML = "";
      allPosts.forEach((post) => {
        feedContainer.appendChild(createFeedCard(post));
      });
    }
  });
}
