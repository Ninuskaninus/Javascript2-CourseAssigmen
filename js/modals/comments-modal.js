import { fetchAllPosts } from "/js/API/get/allPosts.js";
import { fetchMyProfile } from "/js/API/get/myProfile.js";
import { getComment } from "/js/API/get/allComments.js";
import { submitComment } from "/js/API/put/submitComment.js";

const myProfile = await fetchMyProfile();
const comments = await getComment();

export async function commentContainer() {
  const posts = await fetchAllPosts();

  function handleFeedCardClick(event) {
    const feedCard = event.target.closest(".feedCard");
    if (feedCard) {
      const thisPostIdString = feedCard.id;
      const thisPostId = parseInt(thisPostIdString, 10);
      const postInfo = posts.find((post) => post.id === thisPostId);

      if (postInfo) {
        const commentModalContainer = document.getElementById("comment-modal");
        commentModalContainer.innerHTML = "";
        const moduleContent = document.createElement("div");
        moduleContent.classList.add("module-content");
        commentModalContainer.appendChild(moduleContent);

        moduleContent.addEventListener("click", (event) => {
          event.stopPropagation();
        });

        const postContentContainer = document.createElement("div");
        postContentContainer.classList.add(
          "card",
          "mb-4",
          "feedCard",
          "post-content-container"
        );
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
        postProfileImg.src =
          postInfo.avatar || "../img/profile-placeholder.png";
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
        postBodyImage.classList.add(
          "card-img-top",
          "feed-image",
          "dropshadow",
          "image-container"
        );
        postBodyImage.src = postInfo.pictureUpload;
        postContentContainer.appendChild(postBodyImage);

        if (!postInfo.pictureUpload) {
          postBodyImage.style.display = "none";
          postBodyImage.classList.remove(
            "card-img-top",
            "feed-image",
            "dropshadow"
          );
        } else {
          postBodyImage.style.display = "block";
          postBodyImage.classList.add(
            "card-img-top",
            "feed-image",
            "dropshadow"
          );
        }

        const postBodyContainer = document.createElement("p");
        postBodyContainer.classList.add("card-body", "mb-0");
        postBodyContainer.innerText = postInfo.body;
        postContentContainer.appendChild(postBodyContainer);

        const postFooterContainer = document.createElement("div");
        postFooterContainer.classList.add("card-body", "position-relative");
        postContentContainer.appendChild(postFooterContainer);

        const postFooterIcons = document.createElement("div");
        postFooterIcons.classList.add(
          "mb-2",
          "container",
          "icons-container",
          "p-0"
        );
        postFooterContainer.appendChild(postFooterIcons);

        const likebutton = document.createElement("img");
        likebutton.src = "/img/likebutton.png";
        likebutton.classList.add("m-2", "me-0", "response-icon", "likebutton");
        likebutton.style.cursor = "pointer";
        likebutton.id = thisPostId.id;
        likebutton.addEventListener("click", () => {
          if (likebutton.src.includes("likebutton.png")) {
            likebutton.src = "/img/likebuttonfull.png";
          } else {
            likebutton.src = "/img/likebutton.png";
          }
        });

        const likeCounter = document.createElement("p");
        likeCounter.innerText = postInfo.likes;
        likeCounter.classList.add("m-2", "p-0");

        const commentbutton = document.createElement("img");
        commentbutton.src = "/img/commentbutton.png";
        commentbutton.classList.add("m-2", "me-0", "response-icon");
        commentbutton.style.cursor = "pointer";
        commentbutton.id = "commentbutton" + postInfo.id;

        const commentCounter = document.createElement("p");
        commentCounter.innerText = postInfo.comments;
        commentCounter.classList.add("m-2", "p-0");

        postFooterIcons.appendChild(likebutton);
        postFooterIcons.appendChild(likeCounter);
        postFooterIcons.appendChild(commentbutton);
        postFooterIcons.appendChild(commentCounter);

        comments
          .filter((comment) => comment.postId === postInfo.id)
          .forEach((comment) => {
            const commentContainer = document.createElement("div");
            commentContainer.classList.add("comment-container");
            moduleContent.appendChild(commentContainer);

            const commentsContainer = document.createElement("div");
            commentsContainer.classList.add("comments-container");
            commentContainer.appendChild(commentsContainer);

            const commentElement = document.createElement("div");
            commentElement.classList.add("comment");
            commentsContainer.appendChild(commentElement);

            const commentProfileInfo = document.createElement("div");
            commentProfileInfo.classList.add("comment-profile-info");
            commentElement.appendChild(commentProfileInfo);

            const commentProfilePic = document.createElement("img");
            commentProfilePic.classList.add("comment-img");
            commentProfilePic.src =
              comment.authorAvatar || "/img/profile-placeholder.png";
            commentProfileInfo.appendChild(commentProfilePic);

            const commentUsername = document.createElement("div");
            commentUsername.classList.add("comment-username");
            const username = document.createElement("h6");
            username.classList.add("m-0", "text-primary");
            username.innerText = comment.authorName;
            commentUsername.appendChild(username);
            commentProfileInfo.appendChild(commentUsername);

            const commentContent = document.createElement("div");
            commentContent.classList.add("comment-content");
            const commentText = document.createElement("p");
            commentText.innerText = comment.body;
            commentContent.appendChild(commentText);
            commentElement.appendChild(commentContent);
          });

        async function updateComments(postId) {
          const updatedComments = await getCommentForPost(postId); // Fetch comments for the current post
          const commentsContainer =
            document.getElementById("comments-container");

          // Clear existing comments
          commentsContainer.innerHTML = "";

          // Append the new comments to the comments container
          updatedComments.forEach((comment) => {
            const commentElement = createCommentElement(comment);
            commentsContainer.appendChild(commentElement);
          });
        }

        const leaveCommentContainer = document.createElement("div");
        leaveCommentContainer.classList.add("leave-comment-container", "card");
        moduleContent.appendChild(leaveCommentContainer);

        const leaveComment = document.createElement("form");
        leaveComment.classList.add("leave-comment");
        leaveComment.id = "leave-comment-form";
        leaveComment.action = "submit";
        leaveCommentContainer.appendChild(leaveComment);

        const leaveCommentProfilePic = document.createElement("img");
        leaveCommentProfilePic.classList.add("leave-comment-img");
        leaveCommentProfilePic.src = myProfile.avatar;
        leaveComment.appendChild(leaveCommentProfilePic);

        const leaveCommentInput = document.createElement("input");
        leaveCommentInput.classList.add("leave-comment-input");
        leaveCommentInput.placeholder = "Leave a comment...";
        leaveCommentInput.id = "leave-comment-input";
        leaveComment.appendChild(leaveCommentInput);

        const leaveCommentButton = document.createElement("img");
        leaveCommentButton.classList.add("leave-comment-button");
        leaveCommentButton.src = "/img/send.png";
        leaveComment.appendChild(leaveCommentButton);
        leaveComment.addEventListener("submit", async function (event) {
          event.preventDefault();
          submitComment(thisPostId);
        });

        // Initial update of comments when the page loads
        updateComments(postInfo.id);

        commentModalContainer.addEventListener("click", () => {
          commentModalContainer.style.display = "none";
        });

        if (
          commentModalContainer.style.display === "none" ||
          !commentModalContainer.style.display
        ) {
          commentModalContainer.style.display = "flex";
        } else {
          commentModalContainer.style.display = "none";
        }
      } else {
        console.error(`Post with ID ${thisPostId} not found.`);
      }
    }
  }

  const feedContainer = document.getElementById("feed-container");
  feedContainer.addEventListener("click", handleFeedCardClick);
}
