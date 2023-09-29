import { fetchAllPosts } from "/js/allUsers/allPosts.js";
const allPosts = await fetchAllPosts();
import { fetchMyProfile } from "/js/myUser/myProfile.js";
const myProfile = await fetchMyProfile();

//Containers
const feedContainer = document.getElementById("feed-container");

//Upload
const uploadContainer = document.createElement("div");
uploadContainer.classList.add("card", "mb-4");
feedContainer.appendChild(uploadContainer);

const uploadHead = document.createElement("div");
uploadHead.classList.add("card-body", "d-flex", "align-content-center");
uploadContainer.appendChild(uploadHead);

const uploadProfilepic = document.createElement("img");
uploadProfilepic.classList.add("rounded-circle", "me-4", "border");
uploadProfilepic.src = myProfile.avatar;
if (myProfile.avatar && myProfile.avatar.trim() !== "") {
  myProfile.src = myProfile.avatar;
} else {
  uploadProfilepic.src = "/img/profile-placeholder.png";
}

uploadProfilepic.style.width = "50px";
uploadProfilepic.style.height = "50px";
uploadProfilepic.style.objectFit = "cover";
uploadHead.appendChild(uploadProfilepic);

const uploadHeadText = document.createElement("textarea");
uploadHeadText.classList.add(
  "text-muted",
  "pt-3",
  "border-0",
  "w-100",
  "p-2",
  "upload-content"
);
uploadHeadText.placeholder = "What's on your mind?";
uploadHead.appendChild(uploadHeadText);

const uploadBody = document.createElement("div");
uploadBody.classList.add("card-header");
uploadContainer.appendChild(uploadBody);

const uploadIconImage = document.createElement("img");
uploadIconImage.src = "/img/uploadimage.png";
uploadIconImage.classList.add("me-2");

const uploadIconVideo = document.createElement("img");
uploadIconVideo.src = "/img/uploadvideo.png";
uploadIconVideo.classList.add("me-2");

const uploadIconAttatchment = document.createElement("img");
uploadIconAttatchment.src = "/img/uploadattatchment.png";

const submitBtn = document.createElement("button");
submitBtn.classList.add(
  "btn",
  "btn-primary",
  "float-end",
  "me-4",
  "mt-2",
  "submit-btn"
);
submitBtn.innerText = "Submit";

uploadHeadText.addEventListener("input", () => {
  if (uploadHeadText.value.length > 0) {
    submitBtn.style.display = "block";
  } else {
    submitBtn.style.display = "none";
  }
});

uploadBody.appendChild(uploadIconImage);
uploadBody.appendChild(uploadIconVideo);
uploadBody.appendChild(uploadIconAttatchment);
uploadBody.appendChild(submitBtn);

//Sort
const sortContainer = document.createElement("div");
sortContainer.classList.add("container", "p-0");
feedContainer.appendChild(sortContainer);

const sortRow = document.createElement("div");
sortRow.classList.add("row", "w-100", "mb-4", "mt-4", "p-0", "m-0");
sortContainer.appendChild(sortRow);

const sortBtnNewest = document.createElement("button");
sortBtnNewest.classList.add(
  "btn",
  "btn-light",
  "dropshadow",
  "rounded-pill",
  "px-3",
  "col",
  "mb-2"
);
sortBtnNewest.innerText = "Sort by newest";

if (window.innerWidth < 350) {
  sortBtnNewest.classList.remove("me-4");
} else {
  sortBtnNewest.classList.add("me-4");
}

sortRow.appendChild(sortBtnNewest);

const sortBtnOldest = document.createElement("button");
sortBtnOldest.classList.add(
  "btn",
  "btn-light",
  "dropshadow",
  "rounded-pill",
  "px-3",
  "col",
  "mb-2"
);
sortBtnOldest.innerText = "Sort by oldest";
sortRow.appendChild(sortBtnOldest);

//Feed
export function createFeedCard(allPosts) {
  const feedCard = document.createElement("div");
  feedCard.classList.add("card", "w-100", "mb-4");
  feedCard.id = allPosts.id;

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

  const cardProfileInfo = document.createElement("div");
  cardProfileInfo.classList.add("col-9");
  cardTextTop.appendChild(cardProfileInfo);

  const cardProfileName = document.createElement("h5");
  cardProfileName.classList.add("mb-0");
  cardProfileName.innerText = allPosts.username;
  cardProfileInfo.appendChild(cardProfileName);

  const cardProfileUsername = document.createElement("p");
  cardProfileUsername.classList.add("nametag");
  cardProfileUsername.innerText = allPosts.updated;
  cardProfileInfo.appendChild(cardProfileUsername);

  const cardImage = document.createElement("img");
  cardImage.classList.add("card-img-top", "feed-image", "dropshadow");
  cardImage.src = allPosts.pictureUpload;
  cardImage.alt = "Feed image";
  feedCard.appendChild(cardImage);

  const cardTextBottom = document.createElement("div");
  cardTextBottom.classList.add("card-body", "mt-4");
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
  likebutton.classList.add("m-2", "me-0", "response-icon");
  likebutton.style.cursor = "pointer";
  likebutton.id = "likebutton" + allPosts.id;
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
  commentbutton.classList.add("m-2", "me-0", "response-icon");
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

  return feedCard;
}

allPosts.forEach((post) => {
  const feedCard = createFeedCard(post);
  feedContainer.appendChild(feedCard);
});
