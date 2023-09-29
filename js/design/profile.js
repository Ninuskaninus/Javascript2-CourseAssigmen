import { fetchMyPosts, fetchMyProfile } from "/js/myUser/myProfile.js";
const myPosts = await fetchMyPosts();
const myProfile = await fetchMyProfile();

//Header
const feedHeadImg = document.getElementById("head-img");
feedHeadImg.style.backgroundImage = `url(${myProfile.banner})`;

//Heading and profile
const profilePic = document.getElementById("profile-pic");
profilePic.src = myProfile.avatar || "/img/profile-placeholder.png";

const profileName = document.getElementById("full-name");
profileName.classList.add("text-primary");
profileName.innerText = myProfile.name;

const nameContainer = document.getElementById("name-container");
if (window.innerWidth < 577) {
  nameContainer.classList.remove("mt-5");
} else {
  nameContainer.classList.add("mt-5");
}

const followers = document.getElementById("followers");
followers.innerText = myProfile.followers;
const following = document.getElementById("following");
following.innerText = myProfile.following;

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
