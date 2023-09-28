import { users } from "/js/users/users.js";

const commentModuleContainer = document.getElementById("comment-modal");
commentModuleContainer.addEventListener("click", (e) => {
  if (e.target === commentModuleContainer) {
    commentModuleContainer.style.display = "none";
  }
});
const moduleContent = document.createElement("div");
moduleContent.classList.add("module-content");
moduleContent.id = "module-content" + users[0].id;
commentModuleContainer.appendChild(moduleContent);

const moduleProfilePicContainer = document.createElement("div");
moduleProfilePicContainer.classList.add("module-profile-pic");
moduleProfilePicContainer.style.backgroundImage = `url(${users[0].profilePicture})`;
const moduleImageContainer = document.createElement("div");
moduleImageContainer.classList.add("image-container");
moduleImageContainer.style.backgroundImage = `url(${users[0].pictureUpload})`;

if (moduleImageContainer.style.backgroundImage === "" || moduleImageContainer.style.backgroundImage === "none") {
  moduleImageContainer.style.display = "none";
}
const moduleDescriptionContainer = document.createElement("div");
const imgDescription = document.createElement("p");
imgDescription.classList.add("m-0");
imgDescription.innerText = users[0].description;
moduleDescriptionContainer.appendChild(imgDescription);

moduleDescriptionContainer.classList.add("description-container", "card");
const moduleDescription = document.createElement("p");
moduleDescription.classList.add("m-0");

moduleContent.appendChild(moduleProfilePicContainer);
moduleContent.appendChild(moduleImageContainer);
moduleContent.appendChild(moduleDescriptionContainer);

const commentContainer = document.createElement("div");
commentContainer.classList.add("comment-container");
moduleContent.appendChild(commentContainer);

const commentsContainer = document.createElement("div");
commentsContainer.classList.add("comments-container");
commentContainer.appendChild(commentsContainer);

const comment = document.createElement("div");
comment.classList.add("comment");
commentsContainer.appendChild(comment);

const commentProfileInfo = document.createElement("div");
commentProfileInfo.classList.add("comment-profile-info");
comment.appendChild(commentProfileInfo);

const commentProfilePic = document.createElement("div");
commentProfilePic.classList.add("comment-img");
commentProfilePic.style.backgroundImage = `url(${users[0].profilePicture})`;

const commentUsername = document.createElement("div");
commentUsername.classList.add("comment-username");
const username = document.createElement("h6");
username.classList.add("m-0", "text-primary");
username.innerText = users[0].name;
commentUsername.appendChild(username);

commentProfileInfo.appendChild(commentProfilePic);
commentProfileInfo.appendChild(commentUsername);

const commentContent = document.createElement("div");
commentContent.classList.add("comment-content");
const commentText = document.createElement("p");
commentText.innerText = "This is a comment on a post! This is cool!";
commentContent.appendChild(commentText);
comment.appendChild(commentContent);

const leaveCommentContainer = document.createElement("div");
leaveCommentContainer.classList.add("leave-comment-container", "card");
moduleContent.appendChild(leaveCommentContainer);

const leaveComment = document.createElement("form");
leaveComment.classList.add("leave-comment");
leaveCommentContainer.appendChild(leaveComment);

const leaveCommentProfilePic = document.createElement("div");
leaveCommentProfilePic.classList.add("leave-comment-img");
leaveCommentProfilePic.style.backgroundImage = `url(${users[0].profilePicture})`;
leaveComment.appendChild(leaveCommentProfilePic);

const leaveCommentInput = document.createElement("input");
leaveCommentInput.classList.add("leave-comment-input");
leaveCommentInput.placeholder = "Leave a comment...";
leaveComment.appendChild(leaveCommentInput);

const leaveCommentButton = document.createElement("img");
leaveCommentButton.classList.add("leave-comment-button");
leaveCommentButton.src = "/img/send.png";
leaveComment.appendChild(leaveCommentButton);





