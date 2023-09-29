import { fetchAllPosts } from "/js/allUsers/allPosts.js";
const allPosts = await fetchAllPosts();

export function createFeedCard(allPosts) {
  const feedCard = document.createElement("div");
  feedCard.classList.add("card", "w-100", "mb-4", "feedCard");
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
