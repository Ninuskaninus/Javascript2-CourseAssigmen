import { fetchMyProfile } from "/js/API/get/myProfile.js";
const myProfile = await fetchMyProfile();

export function updateNavbarProfile(profile) {
  const navbarProfilePic = document.getElementById("profile-pic-header");
  navbarProfilePic.src = profile.avatar || "/img/profile-placeholder.png";
}
