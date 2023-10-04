import { getUsername } from "/js/API/get/getUsername.js";
const username = await getUsername();
const followBtn = document.getElementById("follow-btn");
const unfollowBtn = document.getElementById("unfollow-btn");

export function apiPostFollow() {
  followBtn.addEventListener("click", async () => {
    const url =
      "https://api.noroff.dev/api/v1/social/profiles/" + username + "/follow";
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
        console.log(data);
        if (data) {
          followBtn.style.display = "none";
        }
      });
  });
}

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
        console.log(data);
        if (data) {
          unfollowBtn.style.display = "none";
          followBtn.style.display = "block";
        }
      });
  });
}
