import { fetchMyProfile } from "/js/myUser/myProfile.js";
const myProfile = await fetchMyProfile();

//Navbar Profile
const navbarProfilePic = document.getElementById("profile-pic-header");
navbarProfilePic.src = myProfile.avatar || "/img/profile-placeholder.png";
