const posts_url =
  "https://api.noroff.dev/api/v1/social/posts/following?_author=true&_comments=true&_reactions=true";
const JWT = localStorage.getItem("accessToken");

/**
 * Fetches the posts of the user's followers.
 *
 * @function fetchMyFollowersPosts
 * @returns {Promise<Array<Object>>} An array of objects representing the posts of the user's followers.
 * Each object contains the following properties:
 * - title: The title of the post.
 * - created: The formatted date when the post was created.
 * - id: The ID of the post.
 * - pictureUpload: The media uploaded with the post.
 * - tags: An array of tags associated with the post.
 * - body: The body of the post.
 * - updated: The formatted date when the post was last updated.
 * - likes: The number of likes the post has received.
 * - comments: The number of comments the post has received.
 * - avatar: The URL of the author's avatar.
 * - username: The name of the author.
 * - posts: An array of posts associated with the post.
 * - commentPost: An array of comments associated with the post.
 */
export function fetchMyFollowersPosts() {
  return fetch(posts_url, {
    headers: {
      Authorization: `Bearer ${JWT}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (Array.isArray(data)) {
        const followingPost = data.map((post) => {
          const createdDate = new Date(post.created);
          const updatedDate = new Date(post.updated);

          const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ];
          const formattedCreatedDate = `${createdDate.getDate()}.${
            months[createdDate.getMonth()]
          } ${createdDate.getFullYear()}`;
          const formattedUpdatedDate = `${updatedDate.getDate()}.${
            months[updatedDate.getMonth()]
          } ${updatedDate.getFullYear()}`;

          return {
            title: post.title,
            created: formattedCreatedDate,
            id: post.id,
            pictureUpload: post.media,
            tags: post.tags,
            body: post.body,
            updated: formattedUpdatedDate,
            likes: post._count?.reactions || 0,
            comments: post._count?.comments || 0,
            avatar: post.author.avatar,
            username: post.author.name,
            posts: post.posts,
            commentPost: post.comments,
          };
        });
        return followingPost;
      } else {
        console.error("API response is not an array of posts.");
        return [];
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      return [];
    });
}
