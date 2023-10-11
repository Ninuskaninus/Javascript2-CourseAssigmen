import { fetchAllPosts } from "/js/API/get/allPosts.js";
const posts = await fetchAllPosts();

export function sortNewestPosts() {
  // Create a copy of the posts array and sort it by created date in descending order.
  const newestPosts = [...posts].sort(
    (a, b) => new Date(b.created) - new Date(a.created)
  );
  console.log(newestPosts);
  return newestPosts;
}

export function sortOldestPosts() {
  // Create a copy of the posts array and sort it by created date in ascending order.
  const oldestPosts = [...posts].sort(
    (a, b) => new Date(a.created) - new Date(b.created)
  );
  console.log(oldestPosts);
  return oldestPosts;
}
