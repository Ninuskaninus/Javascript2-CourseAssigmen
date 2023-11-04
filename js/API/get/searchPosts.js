/**
 * Retrieves user posts and user information from the Noroff API using the provided search input.
 * @param {HTMLInputElement} searchBar - The search input element.
 * @returns {Promise<{userPosts: Array<Object>, userInfo: Object}>} - A promise that resolves to an object containing an array of user posts and user information.
 */
export function getUserPosts(searchBar) {
  const searchInput = searchBar.value;
  const user_post_url = `https://api.noroff.dev/api/v1/social/profiles/${searchInput}/posts`;
  const user_info_url = `https://api.noroff.dev/api/v1/social/profiles/${searchInput}`;
  const JWT = localStorage.getItem("accessToken");
  return Promise.all([
    fetch(user_post_url, {
      headers: {
        Authorization: `Bearer ${JWT}`,
      },
    })
      .then((response) => response.json())
      .then((selectedPosts) => {
        if (Array.isArray(selectedPosts)) {
          const userPost = selectedPosts.map((post) => {
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
            };
          });
          return userPost;
        } else {
          console.error("API response is not an array of posts.");
          return [];
        }
      }),
    fetch(user_info_url, {
      headers: {
        Authorization: `Bearer ${JWT}`,
      },
    })
      .then((response) => response.json())
      .then((userInfo) => {
        if (userInfo) {
          const userProfile = {
            avatar: userInfo.avatar,
            banner: userInfo.banner,
            email: userInfo.email,
            name: userInfo.name,
            followers: userInfo._count?.followers || 0,
            following: userInfo._count?.following || 0,
            posts: userInfo._count?.posts || 0,
          };
          return userProfile;
        }
      }),
  ]).then(([userPosts, userInfo]) => {
    return {
      userPosts,
      userInfo,
    };
  });
}
