import { fetchAllPosts } from "/js/API/get/allPosts.js";
import { fetchMyProfile } from "/js/API/get/myProfile.js";
import { getComment } from "/js/API/get/allComments.js";
import { createModalContent } from "./modalContent.js";
import { triggerModal } from "./triggerModal.js";
import { fetchMyFollowersPosts } from "/js/API/get/myFollowingPosts.js";

const myProfile = await fetchMyProfile();
const comments = await getComment();
const followingPosts = await fetchMyFollowersPosts();

/**
 * Renders the comment container with all the posts and their respective comments.
 * @returns {Promise<void>}
 */
export async function commentContainer() {
  const posts = await fetchAllPosts();

  /**
   * Handles click events on feed cards.
   *
   * @param {Event} event - The click event.
   */
  function handleFeedCardClick(event) {
    const moduleTrigger = event.target.closest(".module-handler");

    if (moduleTrigger) {
      const feedCard = event.target.closest(".feedCard");
      const thisPostIdString = feedCard.id;
      const thisPostId = parseInt(thisPostIdString, 10);
      const postInfo = posts.find((post) => post.id === thisPostId);

      if (postInfo) {
        createModalContent(
          postInfo,
          thisPostId,
          comments,
          myProfile,
          followingPosts
        );
        triggerModal();
      }
    }
  }

  const feedContainer = document.getElementById("feed-container");
  const followingPostContainer = document.getElementById(
    "following-posts-container"
  );
  feedContainer.addEventListener("click", handleFeedCardClick);
  followingPostContainer.addEventListener("click", handleFeedCardClick);
}
