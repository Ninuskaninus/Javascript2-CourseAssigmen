import { fetchProfile } from "/js/API/get/allProfiles.js";
const profiles = await fetchProfile();

export function updateUserProfileHead() {
  const feedHeadImg = document.getElementById("head-img");
  feedHeadImg.style.backgroundImage = `url(${profiles.banner})`;

  const profilePic = document.getElementById("profile-pic");
  profilePic.src = profiles.avatar || "/img/profile-placeholder.png";

  const profileName = document.getElementById("full-name");
  profileName.classList.add("text-primary");
  profileName.innerText = profiles.name;

  const followers = document.getElementById("followers");
  followers.innerText = profiles.followers;

  const following = document.getElementById("following");
  following.innerText = profiles.following;
}
