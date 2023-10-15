import { getUsername } from "/js/API/get/getUsername.js";
const username = await getUsername();
const url = "https://api.noroff.dev/api/v1/social/profiles/" + username;
const JWT = localStorage.getItem("accessToken");
const posts = url + "/posts";

/**
 * Fetches the user profile data from the server.
 * @returns {Promise<Object>} A promise that resolves to an object containing the user profile data.
 */
export async function fetchProfile() {
  return fetch(url, {
    headers: {
      Authorization: `Bearer ${JWT}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        const userProfile = {
          avatar: data.avatar,
          banner: data.banner,
          email: data.email,
          name: data.name,
          followers: data._count?.followers || 0,
          following: data._count?.following || 0,
          posts: data._count?.posts || 0,
        };
        return userProfile;
      }
    });
}

export async function fetchPosts() {
  return fetch(posts, {
    headers: {
      Authorization: `Bearer ${JWT}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (Array.isArray(data)) {
        const userPosts = data.map((post) => {
          return {
            title: post.title,
            created: post.created,
            id: post.id,
            pictureUpload: post.media,
          };
        });
        return userPosts;
      }
    });
}

fetchPosts();
