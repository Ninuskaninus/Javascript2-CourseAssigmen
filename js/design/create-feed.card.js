import { fetchAllPosts } from "/js/API/get/allPosts.js";
const allPosts = await fetchAllPosts();
import { fetchMyProfile } from "/js/API/get/myProfile.js";
const myProfile = await fetchMyProfile();
const myUsername = myProfile.name;
import { editPost } from "/js/API/put/edit-posts.js";
import { deletePost } from "/js/API/delete/delete-post.js";

/**
 * Creates a feed card element based on the provided post data.
 * @param {Object} allPosts - The post data to use for creating the card.
 * @returns {HTMLElement} - The created feed card element.
 */
export function createFeedCard(allPosts) {
  const feedCard = document.createElement("div");
  feedCard.classList.add("card", "mb-4", "feedCard", "w-100");
  feedCard.id = parseInt(allPosts.id, 10);

  const moduleHandler = document.createElement("div");
  moduleHandler.classList.add("module-handler");
  feedCard.appendChild(moduleHandler);

  const cardTextTop = document.createElement("div");
  cardTextTop.classList.add("card-text", "row", "p-4");
  feedCard.appendChild(cardTextTop);

  const cardProfilePic = document.createElement("img");
  cardProfilePic.classList.add(
    "rounded-circle",
    "col",
    "p-0",
    "card-profile",
    "border"
  );
  cardProfilePic.src = allPosts.avatar;
  cardTextTop.appendChild(cardProfilePic);

  if (allPosts.avatar && allPosts.avatar.trim() !== "") {
    cardProfilePic.src = allPosts.avatar;
  } else {
    cardProfilePic.src = "/img/profile-placeholder.png";
  }

  const cardProfileInfo = document.createElement("a");
  cardProfileInfo.classList.add("col-9", "feedCard");
  cardTextTop.appendChild(cardProfileInfo);
  cardProfileInfo.href = "/profile/index.html?username=" + allPosts.username;

  const cardProfileName = document.createElement("h5");
  cardProfileName.classList.add("mb-0");
  cardProfileName.innerText = allPosts.username;
  cardProfileInfo.appendChild(cardProfileName);

  const cardProfileUsername = document.createElement("p");
  cardProfileUsername.classList.add("nametag");
  cardProfileUsername.innerText = allPosts.updated;
  cardProfileInfo.appendChild(cardProfileUsername);

  const cardId = document.createElement("span");
  cardId.classList.add("card-id");
  cardId.id = allPosts.id;
  cardId.innerText = " " + "ID:" + " " + allPosts.id;
  cardProfileUsername.appendChild(cardId);

  const cardImage = document.createElement("img");
  cardImage.classList.add("card-img-top", "feed-image", "dropshadow");
  cardImage.src = allPosts.pictureUpload || "/img/profile-placeholder.png";
  cardImage.alt = "Feed image";
  feedCard.appendChild(cardImage);

  const cardTextBottom = document.createElement("div");
  cardTextBottom.classList.add(
    "card-body",
    "mt-4",
    "position-relative",
    "bottom-card"
  );
  feedCard.appendChild(cardTextBottom);

  const cardTextBottomContent = document.createElement("p");
  cardTextBottomContent.classList.add("card-text");
  cardTextBottomContent.innerText = allPosts.body;
  cardTextBottom.appendChild(cardTextBottomContent);

  if (allPosts.pictureUpload === "" || allPosts.pictureUpload === null) {
    cardImage.style.display = "none";
    cardTextBottom.classList.remove("mt-4");
    cardTextTop.classList.add("pb-0");
  } else {
    var img = new Image();
    img.src = allPosts.pictureUpload;
    img.onload = function () {
      cardProfilePic.style.display = "block";
      cardTextBottom.classList.add("mt-4");
    };
    img.onerror = function () {
      cardProfilePic.style.display = "none";
      cardTextBottom.classList.remove("mt-4");
      cardTextTop.classList.add("pb-0");
    };
  }

  const cardTextBottomIcons = document.createElement("div");
  cardTextBottomIcons.classList.add(
    "mt-4",
    "mb-2",
    "container",
    "icons-container",
    "p-0"
  );
  cardTextBottom.appendChild(cardTextBottomIcons);

  const likebutton = document.createElement("img");
  likebutton.src = "/img/likebutton.png";
  likebutton.classList.add("m-2", "me-0", "response-icon", "likebutton");
  likebutton.style.zIndex = "2001";
  likebutton.style.cursor = "pointer";
  likebutton.id = allPosts.id;
  likebutton.addEventListener("click", () => {
    if (likebutton.src.includes("likebutton.png")) {
      likebutton.src = "/img/likebuttonfull.png";
    } else {
      likebutton.src = "/img/likebutton.png";
    }
  });

  const likeCounter = document.createElement("p");
  likeCounter.innerText = allPosts.likes;
  likeCounter.classList.add("m-2", "p-0");

  const commentbutton = document.createElement("img");
  commentbutton.src = "/img/commentbutton.png";
  commentbutton.classList.add("m-2", "me-0", "response-icon", "comment-button");
  commentbutton.style.cursor = "pointer";
  commentbutton.id = "commentbutton" + allPosts.id;

  const commentCounter = document.createElement("p");
  commentCounter.innerText = allPosts.comments;
  commentCounter.classList.add("m-2", "p-0");

  cardTextBottomIcons.appendChild(likebutton);
  cardTextBottomIcons.appendChild(likeCounter);
  cardTextBottomIcons.appendChild(commentbutton);
  cardTextBottomIcons.appendChild(commentCounter);

  const commentContainer = document.createElement("div");
  commentContainer.classList.add(
    "comment-container",
    "p-4",
    "m-0",
    "mb-2",
    "container",
    "w-100",
    "row"
  );

  if (allPosts.pictureUpload === "") {
    cardImage.style.display = "none";
    cardTextBottom.classList.remove("mt-4");
    cardTextTop.classList.add("pb-0");
  } else {
    cardProfilePic.style.display = "block";
    cardTextBottom.classList.add("mt-4");
  }

  if (cardProfileName.innerText === myUsername) {
    const warningBoxContainer = document.createElement("div");
    warningBoxContainer.classList.add("warning-box-container");
    feedCard.appendChild(warningBoxContainer);

    const warningBox = document.createElement("div");
    warningBox.classList.add("warning-box");
    warningBoxContainer.appendChild(warningBox);

    const warningBoxText = document.createElement("p");
    warningBoxText.classList.add("warning-box-text");
    warningBoxText.innerText = "Are you sure you want to delete this post?";
    warningBox.appendChild(warningBoxText);

    const btnContainer = document.createElement("div");
    btnContainer.classList.add("btn-container");
    warningBox.appendChild(btnContainer);

    const yesButton = document.createElement("button");
    yesButton.classList.add("yes-button");
    yesButton.innerText = "Yes";
    btnContainer.appendChild(yesButton);

    if (yesButton) {
      yesButton.addEventListener("click", (event) => {
        deletePost(event);
      });
    }

    const noButton = document.createElement("button");
    noButton.classList.add("no-button");
    noButton.innerText = "No";
    btnContainer.appendChild(noButton);

    const editButton = document.createElement("img");
    editButton.src = "/img/edit.png";
    editButton.classList.add("col-1", "p-0", "edit-button", "ml-auto");
    editButton.style.maxWidth = "15px";
    editButton.style.maxHeight = "15px";
    editButton.style.cursor = "pointer";
    cardTextTop.appendChild(editButton);

    const editPostBodyContainer = document.createElement("form");
    editPostBodyContainer.classList.add("edit-post-container", "dropshadow");
    editPostBodyContainer.id = "edit-body-form";
    cardTextBottom.appendChild(editPostBodyContainer);

    const editPostBodyInput = document.createElement("textarea");
    editPostBodyInput.classList.add("edit-post-input");
    editPostBodyInput.id = "edit-body-input";
    editPostBodyInput.value = allPosts.body;
    editPostBodyContainer.appendChild(editPostBodyInput);

    const editPostBodyButton = document.createElement("button");
    editPostBodyButton.classList.add("edit-post-button");
    editPostBodyButton.id = "edit-body-button";
    editPostBodyButton.innerText = "Save";
    editPostBodyContainer.appendChild(editPostBodyButton);

    editButton.addEventListener("click", (event) => {
      editPost(event);
    });

    /*     if(cardImage.src === allPosts.pictureUpload){
      const deleteImgIconContainer = document.createElement("div");
      deleteImgIconContainer.classList.add("delete-img-icon-container");
      feedCard.appendChild(deleteImgIconContainer);

      const deleteImgIcon = document.createElement("img");
      deleteImgIcon.src = "/img/delete.png";
      deleteImgIcon.classList.add("delete-img-icon");
      deleteImgIconContainer.appendChild(deleteImgIcon);

      const deleteImgWarningContainer = document.createElement("div");
      deleteImgWarningContainer.classList.add("warning-box-container");
      feedCard.appendChild(deleteImgWarningContainer);

      const deleteImgWarningBox = document.createElement("div");
      deleteImgWarningBox.classList.add("warning-box");
      deleteImgWarningContainer.appendChild(deleteImgWarningBox);

      const deleteImgWarningBoxText = document.createElement("p");
      deleteImgWarningBoxText.classList.add("warning-box-text");
      deleteImgWarningBoxText.innerText = "Are you sure you want to delete this image?";
      deleteImgWarningBox.appendChild(deleteImgWarningBoxText);

      const deleteImgBtnContainer = document.createElement("div");
      deleteImgBtnContainer.classList.add("btn-container");
      deleteImgWarningBox.appendChild(deleteImgBtnContainer);

      const deleteImgYesButton = document.createElement("button");
      deleteImgYesButton.classList.add("yes-button");
      deleteImgYesButton.innerText = "Yes";
      deleteImgYesButton.id = "delete-img-yes-button";
      deleteImgBtnContainer.appendChild(deleteImgYesButton);

      const deleteImgNoButton = document.createElement("button");
      deleteImgNoButton.classList.add("no-button");
      deleteImgNoButton.innerText = "No";
      deleteImgNoButton.id = "delete-img-no-button";
      deleteImgBtnContainer.appendChild(deleteImgNoButton);

      deleteImgIcon.addEventListener("click", ()=> {
        if(deleteImgWarningContainer.style.display === "block"){
          deleteImgWarningContainer.style.display = "none";
        } else {
          deleteImgWarningContainer.style.display = "block";
        }
      })

      deleteImgNoButton.addEventListener("click", ()=> {
        deleteImgWarningContainer.style.display = "none";
      })
 
      deleteImgYesButton.addEventListener("click", (event)=> {
        deleteImg(event);

      }) 
    } */

    const editMenuContainer = document.createElement("div");
    editMenuContainer.classList.add("edit-menu-container", "dropshadow");
    cardTextTop.appendChild(editMenuContainer);

    const editMenu1 = document.createElement("div");
    editMenu1.id = `edit-btn-${allPosts.id}`;
    editMenu1.classList.add("edit-menu");
    editMenu1.innerText = "Edit";
    editMenuContainer.appendChild(editMenu1);

    const editMenu2 = document.createElement("div");
    editMenu2.id = `delete-btn-${allPosts.id}`;
    editMenu2.classList.add("edit-menu");
    editMenu2.innerText = "Delete";
    editMenuContainer.appendChild(editMenu2);

    noButton.addEventListener("click", () => {
      warningBoxContainer.style.display = "none";
    });

    editMenu2.addEventListener("click", () => {
      if (warningBoxContainer.style.display === "block") {
        warningBoxContainer.style.display = "none";
      } else {
        warningBoxContainer.style.display = "block";
      }
    });

    editMenu1.addEventListener("click", () => {
      if (editPostBodyContainer.style.display === "block") {
        editPostBodyContainer.style.display = "none";
        editButton.src = "/img/edit.png";
      } else {
        editPostBodyContainer.style.display = "flex";
        editButton.src = "/img/close.png";
        editMenuContainer.style.display = "none";
      }
    });

    editButton.addEventListener("click", () => {
      if (editMenuContainer.style.display === "block") {
        editMenuContainer.style.display = "none";
        editButton.src = "/img/edit.png";
      } else {
        editMenuContainer.style.display = "block";
        editButton.src = "/img/close.png";
        editPostBodyContainer.style.display = "none";
      }
    });
  }

  return feedCard;
}
