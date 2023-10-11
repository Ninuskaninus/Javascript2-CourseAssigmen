import { sortNewestPosts, sortOldestPosts } from "./sortFunction.js";

export function sortPosts() {
  const feedContainer = document.getElementById("feed-container");
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
  sortBtnNewest.addEventListener("click", () => {
    console.log("clicked");
    sortNewestPosts();
  });

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
  sortBtnOldest.addEventListener("click", () => {
    console.log("clicked");
    sortOldestPosts();
  });
  sortRow.appendChild(sortBtnOldest);
}
