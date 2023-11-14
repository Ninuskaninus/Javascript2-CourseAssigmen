export function sortPosts() {
  const feedHeadContainer = document.getElementById("feed-head-container");
  const sortContainer = document.createElement("div");
  sortContainer.classList.add("container", "p-0");
  feedHeadContainer.appendChild(sortContainer);

  const sortRow = document.createElement("div");
  sortRow.classList.add("container", "checkContainer", "card");
  sortContainer.appendChild(sortRow);

  const sortText = document.createElement("h6");
  sortText.classList.add("nametag");
  sortText.textContent = "Only show following";
  sortRow.appendChild(sortText);

  const checkboxContainer = document.createElement("div");
  checkboxContainer.classList.add("checkboxContainer");
  sortRow.appendChild(checkboxContainer);

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "followingCheckbox";
  checkbox.classList.add("checkbox");
  checkboxContainer.appendChild(checkbox);

  const checkboxLabel = document.createElement("label");
  checkboxLabel.htmlFor = "followingCheckbox";
  checkboxLabel.classList.add("checkbox");
  checkboxContainer.appendChild(checkboxLabel);

  const span = document.createElement("span");
  span.classList.add("switch");
  checkboxLabel.appendChild(span);
}

export function sortMyPosts() {
  const feedHeadContainer = document.getElementById("feed-head-container");
  const sortContainer = document.createElement("div");
  sortContainer.classList.add("container", "p-0");
  feedHeadContainer.appendChild(sortContainer);

  const sortRow = document.createElement("div");
  sortRow.classList.add("container", "checkContainer", "card");
  sortContainer.appendChild(sortRow);

  const sortText = document.createElement("h6");
  sortText.classList.add("nametag");
  sortText.textContent = "Edit my posts";
  sortRow.appendChild(sortText);

  const checkboxContainer = document.createElement("div");
  checkboxContainer.classList.add("checkboxContainer");
  sortRow.appendChild(checkboxContainer);

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "mypostsCheckbox";
  checkbox.classList.add("checkbox");
  checkboxContainer.appendChild(checkbox);

  const checkboxLabel = document.createElement("label");
  checkboxLabel.htmlFor = "mypostsCheckbox";
  checkboxLabel.classList.add("checkbox");
  checkboxContainer.appendChild(checkboxLabel);

  const span = document.createElement("span");
  span.classList.add("switch");
  checkboxLabel.appendChild(span);
}
