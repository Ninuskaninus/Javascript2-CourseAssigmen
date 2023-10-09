

import { fetchAllPosts } from "/js/API/get/allPosts.js";

export async function commentContainer() {
  // Fetch all posts and wait for the data
  const posts = await fetchAllPosts();


  // Function to handle the click event on a feedCard
  function handleFeedCardClick(event) {
    const feedCard = event.target.closest(".feedCard");
    if (feedCard) {
      const thisPostIdString = feedCard.id;

      // Convert the string ID to a number
      const thisPostId = parseInt(thisPostIdString, 10);

      // Rest of your code...

      // Find the post that matches thisPostId
      const postInfo = posts.find(post => post.id === thisPostId);

      if (postInfo) {
        // Get a reference to the comment modal container
        const commentModalContainer = document.getElementById("comment-modal");

        // Clear the previous content in the modal
        commentModalContainer.innerHTML = "";

        // Rest of your code for creating the modal and displaying postInfo goes here
        const moduleContent = document.createElement("div");
        moduleContent.classList.add("module-content");
        commentModalContainer.appendChild(moduleContent);

        const postContentContainer = document.createElement("div");
        postContentContainer.classList.add("card", "mb-4", "feedCard");
        moduleContent.appendChild(postContentContainer);

        const postHeadContainer = document.createElement("div");
        postHeadContainer.classList.add("card-text", "row", "p-4");
        postContentContainer.appendChild(postHeadContainer);

        const postProfileImg = document.createElement("img");
        postProfileImg.classList.add(
          "rounded-circle",
          "col",
          "p-0",
          "card-profile",
          "border"
        );
        postProfileImg.src = postInfo.avatar || "../img/profile-placeholder.png";
        postHeadContainer.appendChild(postProfileImg);

        const profileHeadInfo = document.createElement("a");
        profileHeadInfo.classList.add("col-9", "feedCard");
        profileHeadInfo.href = `/pages/profile.html?id=${postInfo.name}`;
        postHeadContainer.appendChild(profileHeadInfo);

        const profileName = document.createElement("h5");
        profileName.classList.add("m-0");
        profileName.innerText = postInfo.username;
        profileHeadInfo.appendChild(profileName);

        const profileDate = document.createElement("p");
        profileDate.classList.add("m-0", "nametag");
        profileDate.innerText = postInfo.created;
        profileHeadInfo.appendChild(profileDate);

        const postBodyImage = document.createElement("img");
        postBodyImage.classList.add("card-img-top", "feed-image", "dropshadow");
        postBodyImage.src = postInfo.pictureUpload;
        postContentContainer.appendChild(postBodyImage);

        if(postInfo.pictureUpload === " " || postInfo.pictureUpload === null){
          postBodyImage.style.display = "none";
          postBodyImage.classList.remove("card-img-top", "feed-image", "dropshadow");
        } else {
          postBodyImage.style.display = "block";
          postBodyImage.classList.add("card-img-top", "feed-image", "dropshadow");
        }

  

        const postBodyContainer = document.createElement("div");
        postBodyContainer.classList.add("card-body");
        postBodyContainer.innerText = postInfo.body;
        postContentContainer.appendChild(postBodyContainer);

        const postFooterContainer = document.createElement("div");
        postFooterContainer.classList.add("card-body", "mt-4", "position-relative");
        postContentContainer.appendChild(postFooterContainer);





        // Add a click event listener to the comment modal container to close it when clicked
        commentModalContainer.addEventListener("click", () => {
          commentModalContainer.style.display = "none";
        });

        // Check if the modal container is hidden or displayed and toggle its visibility
        if (commentModalContainer.style.display === "none" || !commentModalContainer.style.display) {
          commentModalContainer.style.display = "flex";
        } else {
          commentModalContainer.style.display = "none";
        }
      } else {
        console.error(`Post with ID ${thisPostId} not found.`);
      }
    }
  }

  // Attach a single click event listener to a common ancestor element (e.g., feedContainer)
  const feedContainer = document.getElementById("feed-container");
  feedContainer.addEventListener('click', handleFeedCardClick);
}
