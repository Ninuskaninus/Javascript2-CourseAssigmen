const apiURL =
  "https://api.noroff.dev/api/v1/social/posts?_author=true&_comments=true&_reactions=true&_posts=true&_sort=created:desc";
const JWT = localStorage.getItem("accessToken");

export function fetchAllPosts() {
  return fetch(apiURL, {
    headers: {
      Authorization: `Bearer ${JWT}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (Array.isArray(data)) {
        const myPosts = data.map((post) => {
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
          };
        });
        return myPosts;
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

fetchAllPosts();
