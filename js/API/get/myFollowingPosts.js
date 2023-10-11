const posts_url =
  "https://api.noroff.dev/api/v1/social/posts/following?_author=true&_comments=true&_reactions=true";
const JWT = localStorage.getItem("accessToken");

export async function fetchMyFollowersPosts() {
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
