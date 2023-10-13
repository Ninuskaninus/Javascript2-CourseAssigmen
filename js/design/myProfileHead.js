import { fetchMyProfile } from "/js/api/get/myProfile.js";
const myPosts = await fetchMyProfile();

export function updateMyProfileHead() {
  const feedHeadImg = document.getElementById("head-img");
  feedHeadImg.style.backgroundImage = `url(${myPosts.banner})`;

  const profilePic = document.getElementById("profile-pic");
  profilePic.src = myPosts.avatar || "/img/profile-placeholder.png";

  const profileName = document.getElementById("full-name");
  profileName.classList.add("text-primary");
  profileName.innerText = myPosts.name;

  const followers = document.getElementById("followers");
  followers.innerText = myPosts._count.followers;

  const following = document.getElementById("following");
  following.innerText = myPosts._count.following;
}
