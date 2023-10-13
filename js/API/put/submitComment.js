/**
 * Submits a comment to a post with the given ID.
 * @param {number} postId - The ID of the post to comment on.
 * @returns {void}
 */
export function submitComment(postId) {
  const comment_url = `https://api.noroff.dev/api/v1/social/posts/${postId}/comment`;
  const JWT = localStorage.getItem("accessToken");
  const commentInput = document.getElementById("leave-comment-input");

  const newComment = {
    body: commentInput.value,
  };

  try {
    const commentData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JWT}`,
      },
      body: JSON.stringify(newComment),
    };
    fetch(comment_url, commentData)
      .then((response) => response.json())
      .then((data) => {

      });
  } catch (error) {
    console.log(error);
  }
}
