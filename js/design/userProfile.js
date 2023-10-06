import { fetchMyProfile, fetchFollowing } from "/js/API/get/myProfile.js";
import { updateNavbarProfile } from "/js/design/navbar_profile.js";
import { insertFollowerContainerProfile } from "/js/design/followersProfile.js";
import { updateUserProfileHead } from "/js/design/userProfileHead.js";
import { fetchPosts } from "/js/API/get/allProfiles.js";
import { apiPostFollow } from "/js/API/put/follow.js";
import { apiPostUnfollow } from "/js/API/put/unfollow.js";
import { getUsername } from "/js/API/get/getUsername.js";
const myPosts = await fetchPosts();
const myProfile = await fetchMyProfile();
const username = await getUsername();

apiPostFollow();
apiPostUnfollow();
updateUserProfileHead(myProfile);
updateNavbarProfile(myProfile);
insertFollowerContainerProfile();


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
