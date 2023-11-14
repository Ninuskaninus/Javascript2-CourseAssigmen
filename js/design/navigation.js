import { fetchMyProfile } from "/js/API/get/myProfile.js";
const myProfile = await fetchMyProfile();

export function navBar (){
    const nav = document.getElementById("navigation");
    nav.style.zIndex = "1000";
   
    const navbarContainer = document.createElement("div");
    navbarContainer.classList.add("navbarContainer", "container", "w-100");
    nav.appendChild(navbarContainer);

    const navLogo = document.createElement("a");
    navLogo.href = "/feed/index.html";
    navLogo.classList.add("nav-logo");
    navbarContainer.appendChild(navLogo);

    const navLogoImg = document.createElement("img");
    navLogoImg.src = "/img/sasstrapLogoPink.png";
    navLogoImg.alt = "Sasstrap logo";
    navLogo.appendChild(navLogoImg);

    const navList = document.createElement("ul");
    navList.classList.add("nav-list");
    navbarContainer.appendChild(navList);

    const navListItem1a = document.createElement("a");
    navListItem1a.href = "/feed/index.html";
    const navListItem1 = document.createElement("li");
    navListItem1.innerHTML = "Feed";
    navListItem1a.appendChild(navListItem1);

    const navListItem2a = document.createElement("a");
    navListItem2a.href = "/profile/myProfile.html";
    const navListItem2 = document.createElement("li");
    navListItem2.innerHTML = "My profile";
    navListItem2a.appendChild(navListItem2);
 
    const navListItem3a = document.createElement("a");
    navListItem3a.href = "/index.html";
    const navListItem3 = document.createElement("li");
    navListItem3.innerHTML = "Logout";
    navListItem3a.appendChild(navListItem3);
 

    navList.appendChild(navListItem1a);
    navList.appendChild(navListItem2a);
    navList.appendChild(navListItem3a);

    const navProfileImgContainer = document.createElement("a");
    navProfileImgContainer.classList.add("nav-img");
    navProfileImgContainer.href = "/profile/myProfile.html";
    navbarContainer.appendChild(navProfileImgContainer);

    const navProfileImg = document.createElement("img");
    navProfileImg.src = myProfile.avatar || "/img/profile-placeholder.png";
    navProfileImg.alt = "Profile picture";
    navProfileImgContainer.appendChild(navProfileImg);

    const hamburgerToggle = document.createElement("button");
    hamburgerToggle.classList.add("nav-list-btn");
    navbarContainer.appendChild(hamburgerToggle);

    const hamburgerIcon1 = document.createElement("span");
    const hamburgerIcon2 = document.createElement("span");
    const hamburgerIcon3 = document.createElement("span");

    hamburgerToggle.appendChild(hamburgerIcon1);
    hamburgerToggle.appendChild(hamburgerIcon2);
    hamburgerToggle.appendChild(hamburgerIcon3);

    const navContainerMobile = document.createElement("div");
    navContainerMobile.classList.add("navbar-container-small");
    nav.appendChild(navContainerMobile);

    const navListMobile = document.createElement("ul");
    navListMobile.classList.add("nav-list-burger");
    navContainerMobile.appendChild(navListMobile);

    const navListItem1Mobilea = document.createElement("a");
    navListItem1Mobilea.href = "/feed/index.html";
    const navListItem1Mobile = document.createElement("li");
    navListItem1Mobile.innerHTML = "Feed";
    navListItem1Mobilea.appendChild(navListItem1Mobile);

    const navListItem2Mobilea = document.createElement("a");
    navListItem2Mobilea.href = "/profile/myProfile.html";
    const navListItem2Mobile = document.createElement("li");
    navListItem2Mobile.innerHTML = "My profile";
    navListItem2Mobilea.appendChild(navListItem2Mobile);

    const navListItem3Mobilea = document.createElement("a");
    navListItem3Mobilea.href = "/index.html";
    const navListItem3Mobile = document.createElement("li");
    navListItem3Mobile.innerHTML = "Logout";
    navListItem3Mobilea.appendChild(navListItem3Mobile);

    navListMobile.appendChild(navListItem1Mobilea);
    navListMobile.appendChild(navListItem2Mobilea);
    navListMobile.appendChild(navListItem3Mobilea);

    let isNavOpen = false; // Variable to track the state

    hamburgerToggle.addEventListener("click", function () {
      if (isNavOpen) {
        // If the navigation is open, close it
        navContainerMobile.style.height = "0";
        navListMobile.style.display = "none";
      } else {
        // If the navigation is closed, open it
        navContainerMobile.style.height = "130px";
        navListMobile.style.display = "flex";
      }
      // Toggle the state
      isNavOpen = !isNavOpen;
    });

}