import { fetchAllPosts } from "/js/API/get/allPosts.js";
import { fetchMyProfile } from "/js/API/get/myProfile.js";
import { updateMyProfileHead } from "/js/design/myProfileHead.js";
import { updateNavbarProfile } from "/js/design/navbar_profile.js";
import { insertFollowerContainerFeed } from "/js/design/followersFeed.js";
import { uploadContainer } from "/js/design/upload_container.js";
import { createFeedCard } from "/js/design/create-feed.card.js";
import { sortPosts } from "/js/modals/sort.js";
import { apiPostNewPost } from "/js/API/post/newPost.js";
import { commentContainer } from "/js/modals/comments-modal.js";

const myProfile = await fetchMyProfile();
const allPosts = await fetchAllPosts();

//Containers
const feedContainer = document.getElementById("feed-container");

//Upload container
uploadContainer(feedContainer);
apiPostNewPost();

//Shown profile
updateMyProfileHead(myProfile);
updateNavbarProfile(myProfile);

//Followers container
insertFollowerContainerFeed();

//Sort
sortPosts(feedContainer);
allPosts.forEach((post) => {
  const feedCard = createFeedCard(post);
  feedContainer.appendChild(feedCard);
});

commentContainer();
