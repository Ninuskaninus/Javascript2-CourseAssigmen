import { fetchUsersData } from "/js/users/users.js";
const users = await fetchUsersData();

//Header
const profilePicHeader = document.getElementById("profile-pic-header");
profilePicHeader.src = users[0].profilePicture;
if (profilePicHeader.profilePicture && users.profilePicture.trim() !== "") {
  profilePicHeader.src = users.profilePicture;
} else {
  profilePicHeader.src = "/img/profile-placeholder.png";
}

//Heading and profile
const profilePic = document.getElementById("profile-pic");
profilePic.src = users[0].profilePicture;
if (profilePic.profilePicture && users.profilePicture.trim() !== "") {
  profilePic.src = users.profilePicture;
} else {
  profilePic.src = "/img/profile-placeholder.png";
}

const profileName = document.getElementById("full-name");
profileName.classList.add("text-primary");
profileName.innerText = users[0].username;



const nameContainer = document.getElementById("name-container");
if (window.innerWidth < 577) {
  nameContainer.classList.remove("mt-5");
} else {
  nameContainer.classList.add("mt-5");
}
