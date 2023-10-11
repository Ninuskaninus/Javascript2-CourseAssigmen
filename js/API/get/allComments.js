const base_url =
  "https://api.noroff.dev/api/v1/social/posts?_author=true&_comments=true";
const JWT = localStorage.getItem("accessToken");

export function getComment() {
  return fetch(base_url, {
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
