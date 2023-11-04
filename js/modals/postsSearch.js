import { fetchAllPosts } from "/js/API/get/allPosts.js";

// Fetch all posts and store them in the allPosts variable
const allPosts = await fetchAllPosts();

/**
 * Search for posts containing a specific term in the title or body.
 *
 * @param {string} searchTerm - The term to search for.
 * @param {Array} posts - An array of post objects to search within.
 * @returns {Array} An array of posts that match the search term.
 */
export function searchPosts(searchTerm, posts) {
  return posts.filter((post) => {
    return post.title.includes(searchTerm) || post.body.includes(searchTerm);
  });
}
