import { fetchMyProfile } from "/js/api/get/myProfile.js";
const myProfile = await fetchMyProfile();

export function updateMyProfileHead(myProfile) {
  const feedHeadImg = document.getElementById("head-img");
  feedHeadImg.style.backgroundImage = `url(${myProfile.banner})`;

  const profilePic = document.getElementById("profile-pic");
  profilePic.src = myProfile.avatar || "/img/profile-placeholder.png";

  const profileName = document.getElementById("full-name");
  profileName.classList.add("text-primary");
  profileName.innerText = myProfile.name;

  const followers = document.getElementById("followers");
  followers.innerText = myProfile.followers;

  const following = document.getElementById("following");
  following.innerText = myProfile.following;
}
