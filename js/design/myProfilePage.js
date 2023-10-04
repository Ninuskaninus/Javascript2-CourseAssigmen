import { fetchMyProfile, fetchMyPosts } from "/js/API/get/myProfile.js";
import { updateNavbarProfile } from "/js/design/navbar_profile.js";
import { insertFollowerContainerProfile } from "/js/API/get/allMyFollowers.js";
import { updateMyProfileHead } from "/js/design/myProfileHead.js";
import { editBanner } from "/js/API/put/editBanner.js";
import { editBtnModal } from "/js/modals/edit-btn.js";
import { editImage } from "/js/API/put/editImage.js";
import { displayImage } from "/js/modals/displayImageProfile.js";

const myProfile = await fetchMyProfile();
const myPosts = await fetchMyPosts();

//Modals and links
editBtnModal();
displayImage();

//API put
editBanner(myProfile);
editImage(myProfile);

updateNavbarProfile(myProfile);
insertFollowerContainerProfile();
updateMyProfileHead(myProfile);

const profileContainer = document.getElementById("profile-container");
const profileHead = document.createElement("div");
profileHead.classList.add("container", "row", "w-100", "mt-2");
profileContainer.appendChild(profileHead);

const profileTitle = document.createElement("h6");
profileTitle.classList.add("nametag", "p-3");
profileTitle.innerText = "Latest posts" + " " + myPosts.length;
profileHead.appendChild(profileTitle);

const profileImgContainer = document.createElement("div");
profileImgContainer.classList.add("container", "row", "p-3", "m-0");
profileContainer.appendChild(profileImgContainer);

myPosts.filter((post) => post.pictureUpload); // Filter out posts without images
for (let i = 0; i < myPosts.length; i++) {
  const profileImg = document.createElement("img");
  profileImg.classList.add("img-profile", "p-0", "dropshadow", "col-sm", "m-2");
  profileImg.style.objectFit = "cover";
  profileImg.src = myPosts[i].pictureUpload;
  profileImgContainer.appendChild(profileImg);
}
