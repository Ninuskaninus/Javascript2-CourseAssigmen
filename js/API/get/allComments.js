const base_url = "https://api.noroff.dev/api/v1/social/posts";
const endpoint_url = "?_author=true&_comments=true";
const url = base_url + endpoint_url;
const JWT = localStorage.getItem("accessToken");

/**
 * Fetches all comments from the API.
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of comment objects.
 */
export function getComment() {
  return fetch(url, {
    headers: {
      Authorization: `Bearer ${JWT}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (Array.isArray(data)) {
        const comments = data.map((post) => {
          const postComments = post.comments;
          const postId = post.id;
          const commentObjects = postComments.map((comment) => {
            return {
              postId: postId,
              body: comment.body,
              authorName: comment.author.name,
              authorEmail: comment.author.email,
              authorAvatar: comment.author.avatar,
            };
          });
          return commentObjects;
        });

        const flattenedComments = comments.flat();
        return flattenedComments;
      } else {
        console.log("API response is not an array of posts");
        return [];
      }
    });
}
