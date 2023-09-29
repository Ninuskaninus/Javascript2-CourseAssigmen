import { fetchAllPosts } from "/js/allUsers/allPosts.js";
import { fetchMyProfile } from "/js/myUser/myProfile.js";
import { updateUserProfile } from "/js/design/userProfileHead.js";
import { updateNavbarProfile } from "/js/design/navbar_profile.js";
import { insertFollowerContainer } from "/js/design/followers.js";
import { uploadContainer } from "/js/design/upload_container.js";
import { createFeedCard } from "/js/design/create-feed.card.js";
import { sortPosts } from "/js/design/sort.js";
import { apiPostNewPost } from "/js/API/post/newPost.js";

const myProfile = await fetchMyProfile();
const allPosts = await fetchAllPosts();

//Containers
const feedContainer = document.getElementById("feed-container");

//Upload container
uploadContainer(feedContainer);
apiPostNewPost();

//Shown profile
updateUserProfile(myProfile);
updateNavbarProfile(myProfile);

//Followers container
insertFollowerContainer();

//Sort
sortPosts(feedContainer);
allPosts.forEach((post) => {
  const feedCard = createFeedCard(post);
  feedContainer.appendChild(feedCard);
});
