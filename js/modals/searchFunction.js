import { getUserPosts } from "/js/API/get/searchPosts.js";
import { userCard } from "/js/modals/userCard.js";

export function searchFunction() {
  const searchbarForm = document.getElementById("searchbar-form");
  const searchBar = document.getElementById("searchbar-input");

  searchbarForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    
    const userProfile = await getUserPosts(searchBar);

    userCard(userProfile.userInfo);
  });
}
