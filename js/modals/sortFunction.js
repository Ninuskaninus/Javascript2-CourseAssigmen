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

export function myPostsSort(
  feedHeadContainer, allPosts, createFeedCard, myPosts, feedContainer, myProfile) {
  const mypostsCheckbox = document.getElementById("mypostsCheckbox");
  mypostsCheckbox.addEventListener("change", () => {
    if (mypostsCheckbox.checked) {
      feedContainer.innerHTML = "";
      myPosts.forEach((post) => {
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
