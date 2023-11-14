import { fetchAllPosts } from "/js/API/get/allPosts.js";
import { followingPosts } from "/js/API/get/myProfile.js";

fetchAllPosts();
followingPosts();

export function filteredPosts() {
  return followingPosts;
}
