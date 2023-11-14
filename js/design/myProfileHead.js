import { fetchMyProfile } from "/js/api/get/myProfile.js";
const myPosts = await fetchMyProfile();

export function updateMyProfileHead() {
  const feedHeadImg = document.getElementById("head-img");
  feedHeadImg.style.backgroundImage = `url(${myPosts.banner})`;

  const profilePic = document.getElementById("profile-pic");
  profilePic.src = myPosts.avatar || "/img/profile-placeholder.png";

  const nameContainer = document.getElementById("name-container");
  function updateNameContainerMargin() {
    if (window.innerWidth < 575) {
      nameContainer.classList.remove("mt-5");
    } else {
      nameContainer.classList.add("mt-5");
    }
  }
  updateNameContainerMargin();
  window.addEventListener("resize", updateNameContainerMargin);
  

  const profileName = document.getElementById("full-name");
  profileName.classList.add("text-primary");
  profileName.innerText = myPosts.name;

  const followers = document.getElementById("followers");
  followers.innerText = myPosts._count.followers;

  const following = document.getElementById("following");
  following.innerText = myPosts._count.following;
}
