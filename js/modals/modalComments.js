export function modalComments(comments, postInfo) {
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
}
