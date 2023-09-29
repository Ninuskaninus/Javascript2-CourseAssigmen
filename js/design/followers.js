import {
  fetchFollowers,
  fetchFollowing,
  fetchMyProfile,
} from "/js/myUser/myProfile.js";
const myProfile = await fetchMyProfile();
const followers = await fetchFollowers();
const following = await fetchFollowing();

//Followers
const followersContainer = document.getElementById("followers-container");
const followersCard = document.createElement("div");
followersCard.classList.add("card", "p-2", "dropshadow");
followersContainer.appendChild(followersCard);

const followersCardHeader = document.createElement("div");
followersCardHeader.classList.add("container", "w-100");
followersCard.appendChild(followersCardHeader);

const followersCardHeaderText = document.createElement("h6");
followersCardHeaderText.classList.add("nametag", "mb-3", "pt-3");
followersCardHeaderText.innerText = "Followers";
const followersCount = document.createElement("b");
followersCount.innerText = " " + myProfile.followers;
followersCardHeaderText.appendChild(followersCount);
followersCardHeader.appendChild(followersCardHeaderText);

const followesIconContainer = document.createElement("div");
followesIconContainer.classList.add("container", "row", "w-100");
followersCard.appendChild(followesIconContainer);

followers.forEach((followers) => {
  const followersIcon = document.createElement("img");
  followersIcon.classList.add(
    "rounded-circle",
    "col-1",
    "p-0",
    "border",
    "m-1"
  );
  followersIcon.style.width = "30px";
  followersIcon.style.height = "30px";
  followersIcon.style.objectFit = "cover";
  followersIcon.src = following.avatar || "/img/profile-placeholder.png";
  followesIconContainer.appendChild(followersIcon);
});

//Following
const followingContainer = document.getElementById("following-container");
const followingCard = document.createElement("div");
followingCard.classList.add("card", "p-2", "dropshadow");
followingContainer.appendChild(followingCard);

const followingCardHeader = document.createElement("div");
followingCardHeader.classList.add("container", "w-100");
followingCard.appendChild(followingCardHeader);

const followingCardHeaderText = document.createElement("h6");
followingCardHeaderText.classList.add("nametag", "mb-3", "pt-3");
followingCardHeaderText.innerText = "Following";
const followingCount = document.createElement("b");
followingCount.innerText = " " + myProfile.following;
followingCardHeaderText.appendChild(followingCount);
followingCardHeader.appendChild(followingCardHeaderText);

const followingIconContainer = document.createElement("div");
followingIconContainer.classList.add("container", "row", "w-100");
followingCard.appendChild(followingIconContainer);

following.forEach((following) => {
  const followingIcon = document.createElement("img");
  followingIcon.classList.add(
    "rounded-circle",
    "col-sm-1",
    "p-0",
    "border",
    "m-1"
  );
  followingIcon.style.width = "30px";
  followingIcon.style.height = "30px";
  followingIcon.style.objectFit = "cover";
  followingIcon.src = following.avatar || "/img/profile-placeholder.png";
  followingIconContainer.appendChild(followingIcon);
});
