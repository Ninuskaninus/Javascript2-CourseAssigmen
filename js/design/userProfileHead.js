import { fetchMyProfile } from "/js/myUser/myProfile.js";
const profile = await fetchMyProfile();

export function updateUserProfile(profile) {
  const feedHeadImg = document.getElementById("head-img");
  feedHeadImg.style.backgroundImage = `url(${profile.banner})`;

  const profilePic = document.getElementById("profile-pic");
  profilePic.src = profile.avatar || "/img/profile-placeholder.png";

  const profileName = document.getElementById("full-name");
  profileName.classList.add("text-primary");
  profileName.innerText = profile.name;

  const followers = document.getElementById("followers");
  followers.innerText = profile.followers;

  const following = document.getElementById("following");
  following.innerText = profile.following;
}
