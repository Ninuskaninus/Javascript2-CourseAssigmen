

export function userCard(userInfo){
    const feedHeadContainer = document.getElementById("feed-head-container");
    const userCardContainer = document.createElement("div");
    userCardContainer.classList.add("card", "profile-card-container", "mb-2");
    feedHeadContainer.appendChild(userCardContainer);

    if (userInfo) {
      const userImage = document.createElement("img");
      userImage.classList.add("profile-card-img");
      userImage.src = userInfo.avatar || "/img/profile-placeholder.png";
      userCardContainer.appendChild(userImage);

      const userCardInfoContainer = document.createElement("div");
      userCardInfoContainer.classList.add("profile-info-container");
      userCardContainer.appendChild(userCardInfoContainer);

      const userNameInfo = document.createElement("h4");
      userNameInfo.classList.add("nametag");
      userNameInfo.innerText = userInfo.name || "User Name not found"; // Display "User Name not found" if the name is not present
      userCardInfoContainer.appendChild(userNameInfo);

      const userButton = document.createElement("a");
      userButton.id = "follow-btn";
      userButton.classList.add("btn", "btn-primary", "follow-user-btn", "text-white");
      userButton.innerText = "Profile";
      userButton.href = `/profile/index.html?username=${userInfo.name || "unknown"}`;
      userCardContainer.appendChild(userButton);
    } else {
      userCardContainer.style.justifyContent = "center";  
      const errorMessage = document.createElement("p");
      errorMessage.classList.add("nametag");
      errorMessage.style.textAlign = "center";
      errorMessage.innerText = "No user found(The search is case sensitive)";
      userCardContainer.appendChild(errorMessage);
    }
}