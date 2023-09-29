import { fetchMyPosts, fetchMyProfile } from "/js/myUser/myProfile.js";
import { updateUserProfile } from "/js/design/userProfileHead.js";
import { updateNavbarProfile } from "/js/design/navbar_profile.js";
import { insertFollowerContainer } from "/js/design/followers.js";

const myPosts = await fetchMyPosts();
const myProfile = await fetchMyProfile();

updateUserProfile(myProfile);
updateNavbarProfile(myProfile);
insertFollowerContainer();

const profileContainer = document.getElementById("profile-container");
const profileHead = document.createElement("div");
profileHead.classList.add("container", "row", "w-100", "mt-2");
profileContainer.appendChild(profileHead);

const profileTitle = document.createElement("h6");
profileTitle.classList.add("nametag", "p-3");
profileTitle.innerText = "Latest posts";
profileHead.appendChild(profileTitle);

const profileImgContainer = document.createElement("div");
profileImgContainer.classList.add("container", "row", "p-3", "m-0");
profileContainer.appendChild(profileImgContainer);

myPosts
  .filter((post) => post.pictureUpload) // Filter out posts without images
  .forEach((post) => {
    const profileImg = document.createElement("img");
    profileImg.classList.add(
      "img-profile",
      "p-0",
      "dropshadow",
      "col-sm",
      "m-2"
    );
    profileImg.style.objectFit = "cover";
    profileImg.src = post.pictureUpload;
    profileImgContainer.appendChild(profileImg);
  });
