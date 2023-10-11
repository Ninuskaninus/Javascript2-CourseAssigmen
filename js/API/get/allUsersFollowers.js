import { getUsername } from "/js/API/get/getUsername.js";
const username = await getUsername();
const url =
  "https://api.noroff.dev/api/v1/social/profiles/" +
  username +
  "?_following=true&_followers=true";
const JWT = localStorage.getItem("accessToken");

export async function fetchAllUserFollowers() {
  return fetch(url, {
    headers: {
      Authorization: `Bearer ${JWT}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.followers && Array.isArray(data.followers)) {
        const followers = data.followers.map((follower) => ({
          name: follower.name,
          avatar: follower.avatar,
        }));
        return followers;
      } else {
        console.error(
          "API response does not have the expected structure for followers."
        );

        return [];
      }
    });
}

fetchAllUserFollowers();

export async function fetchAllUserFollowing() {
  return fetch(url, {
    headers: {
      Authorization: `Bearer ${JWT}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.following && Array.isArray(data.following)) {
        const following = data.following.map((following) => ({
          name: following.name,
          avatar: following.avatar,
        }));
        return following;
      } else {
        console.error(
          "API response does not have the expected structure for followers."
        );

        return [];
      }
    });
}

fetchAllUserFollowing();
