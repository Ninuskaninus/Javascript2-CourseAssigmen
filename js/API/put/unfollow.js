import { getUsername } from "/js/API/get/getUsername.js";
import { fetchFollowing } from "/js/API/get/myProfile.js";
const username = await getUsername();
const following = await fetchFollowing();
const isFollowing = following.some((followed) => followed.name === username);

const followBtn = document.getElementById("follow-btn");
followBtn.innerHTML = "Follow";
followBtn.style.display = isFollowing ? "none" : "block";
if (username === localStorage.getItem("username")) {
  followBtn.style.display = "none";
}

const unfollowBtn = document.getElementById("unfollow-btn");
unfollowBtn.innerHTML = "Unfollow";
unfollowBtn.style.display = isFollowing ? "block" : "none";
if (username === localStorage.getItem("username")) {
  unfollowBtn.style.display = "none";
}

/**
 * Sends a PUT request to the API to unfollow a user.
 * @function
 * @returns {void}
 */
export function apiPostUnfollow() {
  unfollowBtn.addEventListener("click", async () => {
    const url =
      "https://api.noroff.dev/api/v1/social/profiles/" + username + "/unfollow";
    const JWT = localStorage.getItem("accessToken");
    const data = {
      profile: username,
    };
    const options = {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        Authorization: `Bearer ${JWT}`,
        "Content-Type": "application/json",
      },
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          unfollowBtn.style.display = "none";
          followBtn.style.display = "block";
        }
        window.location.reload();
      });
  });
}
