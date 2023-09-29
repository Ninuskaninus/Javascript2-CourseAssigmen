import { fetchMyProfile } from "/js/myUser/myProfile.js";
const myProfile = await fetchMyProfile();

//Navbar Profile
const navbarProfilePic = document.getElementById("profile-pic-header");
navbarProfilePic.src = myProfile.avatar;
if (myProfile.avatar && myProfile.avatar.trim() !== "") {
  myProfile.src = myProfile.avatar;
} else {
  navbarProfilePic.src = "/img/profile-placeholder.png";
}

//Header
const feedHeadImg = document.getElementById("head-img");
feedHeadImg.style.backgroundImage = `url(${myProfile.banner})`;

//Heading and profile
const profilePic = document.getElementById("profile-pic");
profilePic.src = myProfile.avatar;
if (myProfile.avatar && myProfile.avatar.trim() !== "") {
  myProfile.src = myProfile.avatar;
} else {
  profilePic.src = "/img/profile-placeholder.png";
}

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
