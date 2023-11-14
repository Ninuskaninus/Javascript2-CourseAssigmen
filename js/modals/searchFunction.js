import { getUserPosts } from "/js/API/get/searchPosts.js";
import { fetchAllPosts } from "/js/API/get/allPosts.js";
import { userCard } from "/js/modals/userCard.js";
import { createFeedCard } from "/js/design/create-feed.card.js";

export function searchFunction() {
  const searchbarForm = document.getElementById("searchbar-form");
  const searchBar = document.getElementById("searchbar-input");

  searchbarForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const userProfile = await getUserPosts(searchBar);
    userCard(userProfile.userInfo);
  });
}

export function searchPostFunction() {
  const searchbarFormPosts = document.getElementById("searchbarPost-form");
  const searchBarPosts = document.getElementById("searchbar-input-posts");

  searchbarFormPosts.addEventListener("submit", async (event) => {
    event.preventDefault();
    const searchBarPostValue = searchBarPosts.value.toLowerCase(); // Convert the search term to lowercase
    const allPosts = await fetchAllPosts();
    const feedContainer = document.getElementById("feed-container");
    feedContainer.innerHTML = "";

    const filteredPosts = allPosts.filter((post) => {
      return post.title.toLowerCase().includes(searchBarPostValue);
    });

    filteredPosts.forEach((post) => {
      const feedCard = createFeedCard(post);
      feedContainer.appendChild(feedCard);
    });
  });
}
