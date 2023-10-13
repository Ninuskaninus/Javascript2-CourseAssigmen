import { fetchFollowers, fetchFollowing } from "/js/API/get/myProfile.js";
const followers = await fetchFollowers();
const following = await fetchFollowing();

/**
 * Inserts a container for the user's followers and following with their avatars and links to their profiles.
 * @function
 * @name insertFollowerContainerProfile
 * @returns {void}
 */
export function insertFollowerContainerProfile() {
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
  followersCount.innerText = " " + followers.length;
  followersCardHeaderText.appendChild(followersCount);
  followersCardHeader.appendChild(followersCardHeaderText);

  const followesIconContainer = document.createElement("div");
  followesIconContainer.classList.add("container", "row", "w-100");
  followersCard.appendChild(followesIconContainer);

  followers.forEach((followers) => {
    const linkFollowers = document.createElement("a");
    linkFollowers.classList.add("col-sm-2", "me-1", "col-1");
    linkFollowers.href = "/profile/index.html?username=" + followers.name;
    linkFollowers.classList.add("col-1");
    const followersIcon = document.createElement("img");
    followersIcon.classList.add("rounded-circle", "p-0", "border", "m-1");
    followersIcon.style.width = "30px";
    followersIcon.style.height = "30px";
    followersIcon.style.objectFit = "cover";
    followersIcon.src = followers.avatar || "/img/profile-placeholder.png";
    linkFollowers.appendChild(followersIcon);
    followesIconContainer.appendChild(linkFollowers);
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
  followingCount.innerText = " " + following.length;
  followingCardHeaderText.appendChild(followingCount);
  followingCardHeader.appendChild(followingCardHeaderText);

  const followingIconContainer = document.createElement("div");
  followingIconContainer.classList.add("container", "row", "w-100");
  followingCard.appendChild(followingIconContainer);

  following.forEach((following) => {
    const linkFollowing = document.createElement("a");
    linkFollowing.classList.add("col-sm-2", "me-1", "col-1");
    linkFollowing.href = "/profile/index.html?username=" + following.name;
    const followingIcon = document.createElement("img");
    followingIcon.classList.add("rounded-circle", "p-0", "border", "m-1");
    followingIcon.style.width = "30px";
    followingIcon.style.height = "30px";
    followingIcon.style.objectFit = "cover";
    followingIcon.src = following.avatar || "/img/profile-placeholder.png";
    linkFollowing.appendChild(followingIcon);
    followingIconContainer.appendChild(linkFollowing);
  });
}
