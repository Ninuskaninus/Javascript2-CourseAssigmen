export function searchBarContainer(feedHeadContainer) {
  const searchBarContainer = document.createElement("div");
  searchBarContainer.classList.add("card", "mb-2");
  feedHeadContainer.appendChild(searchBarContainer);

  const searchBarForm = document.createElement("form");
  searchBarForm.classList.add("search-form");
  searchBarForm.action = "#";
  searchBarForm.id = "searchbar-form";
  searchBarContainer.appendChild(searchBarForm);

  const searchBarInput = document.createElement("input");
  searchBarInput.classList.add("searchbar", "w-100");
  searchBarInput.type = "text";
  searchBarInput.placeholder = "Search for user";
  searchBarInput.id = "searchbar-input";
  searchBarForm.appendChild(searchBarInput);

  const searchBarButton = document.createElement("button");
  searchBarButton.classList.add("searchbutton", "btn", "btn-primary");
  searchBarButton.type = "submit";
  const searchBarButtonIcon = document.createElement("img");
  searchBarButtonIcon.classList.add("search-icon");
  searchBarButtonIcon.src = "/img/search.png";

  const searchBarClear = document.createElement("button");
  searchBarClear.classList.add("searchbutton", "btn", "btn-primary");
  searchBarClear.style.backgroundColor = "transparent";
  searchBarClear.style.display = "none";
  searchBarClear.style.border = "none";
  searchBarClear.type = "submit";
  searchBarClear.id = "searchbar-clear";
  searchBarForm.appendChild(searchBarClear);
  const searchBarClearIcon = document.createElement("img");
  searchBarClearIcon.classList.add("search-icon");
  searchBarClearIcon.src = "/img/close.png";
  searchBarClear.appendChild(searchBarClearIcon);

  searchBarButton.appendChild(searchBarButtonIcon);
  searchBarForm.appendChild(searchBarButton);
}
